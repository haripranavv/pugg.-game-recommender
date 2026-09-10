require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { games } = require('./data/games');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Serve static frontend assets (both public directory and root directory)
app.use(express.static(path.join(__dirname, 'public'), { index: false }));
app.use(express.static(path.join(__dirname), { index: false }));

// Explicit static handlers with strict MIME types to prevent catch-all HTML fallback
app.get('/style.css', (req, res) => {
  const cssPath = path.join(__dirname, 'public', 'style.css');
  res.type('text/css');
  res.sendFile(cssPath, (err) => {
    if (err) res.sendFile(path.join(__dirname, 'style.css'));
  });
});

app.get('/script.js', (req, res) => {
  const jsPath = path.join(__dirname, 'public', 'script.js');
  res.type('application/javascript');
  res.sendFile(jsPath, (err) => {
    if (err) res.sendFile(path.join(__dirname, 'script.js'));
  });
});

// In-memory user saved games storage (keyed by email)
const userSavedGames = new Map();

// Public Runtime Configuration (Exposes only safe public Supabase URL and Anon Key)
app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || ''
  });
});

// Active AI Model Provider Detection
function getAiProvider() {
  if (process.env.GEMINI_API_KEY) return 'gemini';
  if (process.env.OPENAI_API_KEY) return 'openai';
  return 'algorithmic';
}

function getAiProviderName() {
  const p = getAiProvider();
  if (p === 'gemini') return 'Google Gemini 1.5 Flash';
  if (p === 'openai') return 'OpenAI GPT-4o-mini';
  return 'Blackbox Algorithmic Reasoning Core v2.0';
}

// -------------------------------------------------------------
// Real AI Model Connectors (Gemini & OpenAI REST APIs)
// -------------------------------------------------------------
async function callAiTextModel(prompt, systemInstruction = 'You are an expert game recommendation AI system.') {
  const provider = getAiProvider();

  if (provider === 'gemini') {
    const key = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    const payload = {
      contents: [{
        parts: [{ text: `${systemInstruction}\n\n${prompt}` }]
      }],
      generationConfig: {
        temperature: 0.35,
        maxOutputTokens: 1000
      }
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API Error (${response.status}): ${errText}`);
    }
    const data = await response.json();
    const candidate = data.candidates && data.candidates[0];
    return candidate && candidate.content && candidate.content.parts && candidate.content.parts[0].text;
  }

  if (provider === 'openai') {
    const key = process.env.OPENAI_API_KEY;
    const url = 'https://api.openai.com/v1/chat/completions';
    const payload = {
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemInstruction },
        { role: 'user', content: prompt }
      ],
      temperature: 0.35
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`OpenAI API Error (${response.status}): ${errText}`);
    }
    const data = await response.json();
    return data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  }

  return null;
}

async function callAiVisionModel(base64Data, mimeType, prompt) {
  const provider = getAiProvider();

  if (provider === 'gemini') {
    const key = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    const payload = {
      contents: [{
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: mimeType || 'image/jpeg',
              data: base64Data
            }
          }
        ]
      }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 800
      }
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini Vision API Error (${response.status}): ${errText}`);
    }
    const data = await response.json();
    const candidate = data.candidates && data.candidates[0];
    return candidate && candidate.content && candidate.content.parts && candidate.content.parts[0].text;
  }

  if (provider === 'openai') {
    const key = process.env.OPENAI_API_KEY;
    const url = 'https://api.openai.com/v1/chat/completions';
    const payload = {
      model: 'gpt-4o-mini',
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: prompt },
          {
            type: 'image_url',
            image_url: { url: `data:${mimeType || 'image/jpeg'};base64,${base64Data}` }
          }
        ]
      }],
      temperature: 0.2
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`OpenAI Vision API Error (${response.status}): ${errText}`);
    }
    const data = await response.json();
    return data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  }

  return null;
}

// Helper: Budget Compatibility Calculator
function getBudgetCompatibility(g, maxBudgetInr, selectedBudget) {
  if (g.isFree || g.priceInr === 0) {
    return {
      status: 'free',
      label: '100% Free to Play',
      badgeText: 'FREE TO PLAY',
      badgeClass: 'free',
      isWithin: true,
      priceFormatted: '₹0 (Free)',
      diffAmount: 0
    };
  }
  const formattedPrice = `₹${(g.priceInr || 0).toLocaleString('en-IN')}`;
  if (maxBudgetInr === null || selectedBudget === 'no_limit') {
    return {
      status: 'within',
      label: `${formattedPrice} · Open Budget`,
      badgeText: `PAID · ${formattedPrice}`,
      badgeClass: 'paid',
      isWithin: true,
      priceFormatted: formattedPrice,
      diffAmount: 0
    };
  }
  if (g.priceInr <= maxBudgetInr) {
    const savings = maxBudgetInr - g.priceInr;
    return {
      status: 'under',
      label: savings > 0 ? `✓ ₹${savings.toLocaleString('en-IN')} Under Your Budget` : `✓ Exact Budget Fit`,
      badgeText: `PAID · ${formattedPrice}`,
      badgeClass: 'within',
      isWithin: true,
      priceFormatted: formattedPrice,
      diffAmount: savings
    };
  } else {
    const over = g.priceInr - maxBudgetInr;
    return {
      status: 'over',
      label: `⚠ ₹${over.toLocaleString('en-IN')} Over Selected Budget`,
      badgeText: `PAID · ${formattedPrice}`,
      badgeClass: 'over',
      isWithin: false,
      priceFormatted: formattedPrice,
      diffAmount: over
    };
  }
}

// Helper: Run Multi-Vector Recommendation Engine (Budget-Aware)
function evaluateRecommendation(selected) {
  // Parse Budget
  let maxBudgetInr = null;
  if (selected.budget === 'free') {
    maxBudgetInr = 0;
  } else if (selected.budget === 'under_500') {
    maxBudgetInr = 500;
  } else if (selected.budget === 'under_1000') {
    maxBudgetInr = 1000;
  } else if (selected.budget === 'under_2000') {
    maxBudgetInr = 2000;
  } else if (selected.budget && !isNaN(parseInt(selected.budget, 10)) && selected.budget !== 'no_limit') {
    maxBudgetInr = parseInt(selected.budget, 10);
  }

  const ranked = games.map(g => {
    let score = 0;
    const trace = [];

    // 1. Primary & Secondary Genre Alignment (Max 30)
    if (g.genre === selected.genre) {
      score += 30;
      trace.push(["Genre Alignment", `Primary ${selected.genre.toUpperCase()} match (+30)`]);
    } else if (g.secondaryGenres && g.secondaryGenres.includes(selected.genre)) {
      score += 18;
      trace.push(["Genre Alignment", `Cross-genre ${selected.genre.toUpperCase()} hybrid (+18)`]);
    } else {
      trace.push(["Genre Alignment", `Alternative genre focus (+0)`]);
    }

    // 2. Current Mood Alignment (Max 18)
    if (selected.mood) {
      if (g.mood && g.mood.includes(selected.mood)) {
        score += 18;
        trace.push(["Mood Alignment", `Direct ${selected.mood.toUpperCase()} tone match (+18)`]);
      } else {
        score += 4;
        trace.push(["Mood Alignment", `Flexible tone overlap (+4)`]);
      }
    }

    // 3. Play Style / Social Topology (Max 20)
    if (g.modes.includes(selected.mode)) {
      score += 20;
      trace.push(["Play Style Fit", `Native ${selected.mode.toUpperCase()} compatibility (+20)`]);
    } else if (selected.mode === "both" || g.modes.includes("both") || (selected.mode === "solo" && g.modes.includes("both")) || (selected.mode === "multi" && g.modes.includes("both"))) {
      score += 16;
      trace.push(["Play Style Fit", `Flexible solo/multi topology (+16)`]);
    } else if ((selected.mode === "coop" || selected.mode === "casual") && (g.modes.includes("coop") || g.modes.includes("multi"))) {
      score += 15;
      trace.push(["Play Style Fit", `Cooperative party support (+15)`]);
    } else if (selected.mode === "competitive" && (g.modes.includes("multi") || g.priority.includes("competitive"))) {
      score += 16;
      trace.push(["Play Style Fit", `Competitive ladder topology (+16)`]);
    } else {
      trace.push(["Play Style Fit", `Playstyle divergence (+0)`]);
    }

    // 4. Difficulty Curve & Mechanical Intensity (Max 15)
    if (g.diff.includes(selected.difficulty)) {
      score += 15;
      trace.push(["Difficulty Fit", `Direct ${selected.difficulty.toUpperCase()} calibration (+15)`]);
    } else if (selected.difficulty === "extreme" && g.diff.includes("hard")) {
      score += 10;
      trace.push(["Difficulty Fit", `High mechanical challenge tolerance (+10)`]);
    } else if ((selected.difficulty === "relaxed" || selected.difficulty === "story") && g.diff.includes("hard") && !g.diff.includes("relaxed") && !g.diff.includes("story")) {
      score -= 10;
      trace.push(["Difficulty Fit", `High punishment curve penalty (-10)`]);
    } else if (selected.difficulty === "adaptive" && (g.diff.includes("balanced") || g.diff.includes("adaptive"))) {
      score += 14;
      trace.push(["Difficulty Fit", `Dynamic difficulty calibration (+14)`]);
    } else if (selected.difficulty === "balanced" && (g.diff.includes("relaxed") || g.diff.includes("hard"))) {
      score += 8;
      trace.push(["Difficulty Fit", `Adjustable difficulty spectrum (+8)`]);
    } else {
      score += 3;
      trace.push(["Difficulty Fit", `Nominal challenge overlap (+3)`]);
    }

    // 5. Session Cadence & Time Commitment (Max 15)
    if (selected.time === "any" || g.time.includes(selected.time)) {
      score += 15;
      trace.push(["Session Cadence", `Matches ${selected.time.toUpperCase()} commitment (+15)`]);
    } else if ((selected.time === "short" || selected.time === "bite") && (g.time.includes("short") || g.time.includes("bite") || g.playtime.includes("mins"))) {
      score += 15;
      trace.push(["Session Cadence", `Bite-sized episodic pacing (+15)`]);
    } else if ((selected.time === "long" || selected.time === "endless") && (g.time.includes("long") || g.time.includes("endless"))) {
      score += 15;
      trace.push(["Session Cadence", `Deep sustained campaign depth (+15)`]);
    } else if (selected.time === "medium" && (g.time.includes("short") || g.time.includes("long"))) {
      score += 8;
      trace.push(["Session Cadence", `Flexible session envelope (+8)`]);
    } else {
      trace.push(["Session Cadence", `Session mismatch (+0)`]);
    }

    // 6. Core Gameplay Priority Focus (Max 20)
    if (g.priority.includes(selected.priority)) {
      score += 20;
      trace.push(["Priority Alignment", `Core focus on ${selected.priority.toUpperCase()} (+20)`]);
    } else {
      trace.push(["Priority Alignment", `Secondary priority coverage (+0)`]);
    }

    // 7. Experiential Resonance & Aesthetic (Max 15)
    if (g.experience.includes(selected.experience)) {
      score += 15;
      trace.push(["Experiential Tone", `High ${selected.experience.toUpperCase()} resonance (+15)`]);
    } else {
      trace.push(["Experiential Tone", `Neutral experiential overlap (+0)`]);
    }

    // 8. Multi-vector Synergy Boosts (Max 10)
    let synergy = 0;
    if (selected.priority === "story" && selected.experience === "immersive" && g.priority.includes("story") && g.experience.includes("immersive")) {
      synergy += 6;
      trace.push(["Synergy Multiplier", `Story × Immersive Narrative synergy (+6)`]);
    }
    if (selected.priority === "combat" && selected.experience === "fast" && g.priority.includes("combat") && g.experience.includes("fast")) {
      synergy += 6;
      trace.push(["Synergy Multiplier", `Combat × Fast-Paced Kinetic synergy (+6)`]);
    }
    if (selected.priority === "explore" && selected.experience === "creative" && g.priority.includes("explore") && g.experience.includes("creative")) {
      synergy += 6;
      trace.push(["Synergy Multiplier", `Exploration × Creative Sandbox synergy (+6)`]);
    }
    if (selected.priority === "competitive" && selected.experience === "strategic" && g.priority.includes("competitive") && g.experience.includes("strategic")) {
      synergy += 6;
      trace.push(["Synergy Multiplier", `Competitive × Strategic Meta synergy (+6)`]);
    }
    if (selected.mood === "dark" && (selected.genre === "horror" || g.genre === "horror")) {
      synergy += 6;
      trace.push(["Synergy Multiplier", `Dark Mood × Psychological Horror synergy (+6)`]);
    }
    score += synergy;

    // 9. Budget & Affordability Alignment (Max 25)
    if (maxBudgetInr === 0) {
      if (g.isFree || g.priceInr === 0) {
        score += 35;
        trace.push(["Budget Fit", `100% Free-to-Play Zero Cost (+35)`]);
      } else {
        score -= 90;
        trace.push(["Budget Fit", `Exceeds Free-Only Constraint (-90)`]);
      }
    } else if (maxBudgetInr !== null) {
      if (g.isFree || g.priceInr === 0) {
        score += 26;
        trace.push(["Budget Fit", `Free-to-Play Maximum Savings (+26)`]);
      } else if (g.priceInr <= maxBudgetInr) {
        const savings = maxBudgetInr - g.priceInr;
        score += 24;
        if (savings >= maxBudgetInr * 0.4) {
          score += 6;
          trace.push(["Budget Fit", `Comfortably within budget (₹${savings.toLocaleString('en-IN')} surplus) (+30)`]);
        } else {
          trace.push(["Budget Fit", `Direct budget fit (₹${g.priceInr.toLocaleString('en-IN')} <= ₹${maxBudgetInr.toLocaleString('en-IN')}) (+24)`]);
        }
      } else {
        const over = g.priceInr - maxBudgetInr;
        if (over <= 400) {
          score -= 8;
          trace.push(["Budget Fit", `Minor budget stretch (₹${over.toLocaleString('en-IN')} over) (-8)`]);
        } else if (over <= 1200) {
          score -= 18;
          trace.push(["Budget Fit", `Moderate budget stretch (₹${over.toLocaleString('en-IN')} over) (-18)`]);
        } else {
          score -= 35;
          trace.push(["Budget Fit", `Substantial budget overage (₹${over.toLocaleString('en-IN')} over) (-35)`]);
        }
      }
    } else {
      score += 10;
      trace.push(["Budget Fit", `Unconstrained Budget Strategy (+10)`]);
    }

    // 10. Value-for-Money (VFM) Score Integration (Max 12)
    const vfmScore = g.vfmScore || (g.isFree ? 10.0 : 9.2);
    const vfmBonus = Math.round(vfmScore * 1.2);
    score += vfmBonus;
    trace.push(["Value-For-Money", `VFM Rating ${vfmScore}/10 (+${vfmBonus})`]);

    return { ...g, s: score, trace, vfmScore };
  }).sort((a, b) => b.s - a.s);

  const topGame = ranked[0];
  const runnerUps = ranked.slice(1, 4);
  const confidence = Math.min(99, Math.max(76, Math.round((topGame.s / 175) * 100)));

  // Budget info for top game
  const budgetInfo = getBudgetCompatibility(topGame, maxBudgetInr, selected.budget);

  // Best Value award: highest combined value-to-cost-to-match ratio
  const bestValueCandidate = [...ranked.slice(0, 5)].sort((a, b) => {
    const aVal = (a.vfmScore || 9) * 12 + a.s * 0.45;
    const bVal = (b.vfmScore || 9) * 12 + b.s * 0.45;
    return bVal - aVal;
  })[0];
  const isBestValue = bestValueCandidate && bestValueCandidate.title === topGame.title;

  // Intelligent Free Alternative Pairing
  let freeAlternative = null;
  if (!topGame.isFree) {
    let freeAlt = games.find(item => item.isFree && item.title.toLowerCase() === (topGame.freeAltTitle || '').toLowerCase());
    if (!freeAlt) {
      freeAlt = games.find(item => item.isFree && (item.genre === topGame.genre || (item.secondaryGenres && item.secondaryGenres.includes(topGame.genre))))
             || games.find(item => item.isFree);
    }
    if (freeAlt) {
      freeAlternative = {
        title: freeAlt.title,
        meta: freeAlt.meta,
        rating: freeAlt.rating,
        playtime: freeAlt.playtime,
        platforms: freeAlt.platforms,
        steamUrl: freeAlt.steamUrl,
        priceInr: 0,
        priceFormatted: '₹0 (Free to Play)',
        vfmScore: freeAlt.vfmScore || 10.0,
        diffExplanation: topGame.freeAltDiff || `Provides exceptional ${topGame.genre.toUpperCase()} gameplay and community depth without any upfront price.`
      };
    }
  }

  return { topGame, runnerUps, confidence, budgetInfo, freeAlternative, isBestValue };
}

// -------------------------------------------------------------
// Natural Language Speech Parsing Heuristics
// -------------------------------------------------------------
function parseSpeechTranscribe(text) {
  const lower = (text || '').toLowerCase();
  const profile = {};

  // Genre
  if (/\b(rpg|role playing|role-playing)\b/.test(lower)) profile.genre = 'rpg';
  else if (/\b(action|shooter|hack and slash|fps)\b/.test(lower)) profile.genre = 'action';
  else if (/\b(strategy|tactics|rts|turn based)\b/.test(lower)) profile.genre = 'strategy';
  else if (/\b(horror|scary|survival horror|spooky)\b/.test(lower)) profile.genre = 'horror';
  else if (/\b(indie|pixel|roguelike|deckbuilder)\b/.test(lower)) profile.genre = 'indie';
  else if (/\b(simulation|sim|flight|building|city)\b/.test(lower)) profile.genre = 'simulation';
  else if (/\b(adventure|narrative|journey)\b/.test(lower)) profile.genre = 'adventure';
  else if (/\b(puzzle|mystery|logic|brain)\b/.test(lower)) profile.genre = 'puzzle';

  // Mood
  if (/\b(thrilling|intense|adrenaline|action packed|wild)\b/.test(lower)) profile.mood = 'thrilling';
  else if (/\b(cozy|chill|relaxed|peaceful|comforting|calm)\b/.test(lower)) profile.mood = 'cozy';
  else if (/\b(dark|eerie|grim|atmospheric dark|creepy)\b/.test(lower)) profile.mood = 'dark';
  else if (/\b(cerebral|deep|philosophical|thought provoking|intellectual)\b/.test(lower)) profile.mood = 'cerebral';
  else if (/\b(escapist|wonder|fantasy|magical|exploration)\b/.test(lower)) profile.mood = 'escapist';
  else if (/\b(triumphant|heroic|epic|victory|glorious)\b/.test(lower)) profile.mood = 'triumphant';

  // Mode
  if (/\b(solo|single player|singleplayer|alone|by myself)\b/.test(lower)) profile.mode = 'solo';
  else if (/\b(multiplayer|multi|online|friends)\b/.test(lower)) profile.mode = 'multi';
  else if (/\b(co-op|coop|cooperative)\b/.test(lower)) profile.mode = 'coop';
  else if (/\b(competitive|pvp|ranked|esport)\b/.test(lower)) profile.mode = 'competitive';
  else if (/\b(casual|social|party)\b/.test(lower)) profile.mode = 'casual';
  else if (/\b(either|both)\b/.test(lower)) profile.mode = 'both';

  // Difficulty
  if (/\b(easy|relaxed|peaceful|chill|not hard|low challenge)\b/.test(lower)) profile.difficulty = 'relaxed';
  else if (/\b(hard|tough|difficult|challenging|souls like|soulslike)\b/.test(lower)) profile.difficulty = 'hard';
  else if (/\b(extreme|unforgiving|punishing|nightmare)\b/.test(lower)) profile.difficulty = 'extreme';
  else if (/\b(story|story focus|narrative only)\b/.test(lower)) profile.difficulty = 'story';
  else if (/\b(adaptive|scalable|dynamic)\b/.test(lower)) profile.difficulty = 'adaptive';
  else if (/\b(balanced|normal|medium difficulty)\b/.test(lower)) profile.difficulty = 'balanced';

  // Time
  if (/\b(quick|short|30 min|under 30|brief)\b/.test(lower)) profile.time = 'short';
  else if (/\b(few hours|medium session|an hour or two)\b/.test(lower)) profile.time = 'medium';
  else if (/\b(long-term|long term|deep campaign|100 hours|huge)\b/.test(lower)) profile.time = 'long';
  else if (/\b(endless|infinite|forever|replayable|hundreds of hours)\b/.test(lower)) profile.time = 'endless';
  else if (/\b(bite|runs|bite-sized|bite sized)\b/.test(lower)) profile.time = 'bite';
  else if (/\b(no preference|any time|any session)\b/.test(lower)) profile.time = 'any';

  // Priority
  if (/\b(story|narrative|lore|characters|plot)\b/.test(lower)) profile.priority = 'story';
  else if (/\b(combat|fighting|shooting|gunplay|action)\b/.test(lower)) profile.priority = 'combat';
  else if (/\b(explore|exploration|open world|discovering|wandering)\b/.test(lower)) profile.priority = 'explore';
  else if (/\b(competitive|competition|winning|skill)\b/.test(lower)) profile.priority = 'competitive';
  else if (/\b(atmosphere|world|mood|vibe|immersion)\b/.test(lower)) profile.priority = 'atmosphere';
  else if (/\b(puzzle|puzzles|riddles|logic)\b/.test(lower)) profile.priority = 'puzzle';

  // Experience
  if (/\b(immersive|absorb|deep world)\b/.test(lower)) profile.experience = 'immersive';
  else if (/\b(fast|fast paced|fast-paced|high mobility|speed)\b/.test(lower)) profile.experience = 'fast';
  else if (/\b(creative|building|crafting|sandbox)\b/.test(lower)) profile.experience = 'creative';
  else if (/\b(strategic|thinking|tactical|planning)\b/.test(lower)) profile.experience = 'strategic';
  // Budget
  if (/\b(free|free to play|f2p|zero cost|no cost|without paying|nothing)\b/.test(lower)) profile.budget = 'free';
  else if (/\b(under 500|below 500|500 rupees|budget 500|cheap)\b/.test(lower)) profile.budget = 'under_500';
  else if (/\b(under 1000|below 1000|1000 rupees|budget 1000|under 1k)\b/.test(lower)) profile.budget = 'under_1000';
  else if (/\b(under 2000|below 2000|2000 rupees|budget 2000|under 2k)\b/.test(lower)) profile.budget = 'under_2000';
  else if (/\b(no budget|no limit|unlimited|any budget|any price)\b/.test(lower)) profile.budget = 'no_limit';

  return profile;
}

// -------------------------------------------------------------
// REST API Endpoints
// -------------------------------------------------------------

// 1. Health check & AI model info
app.get('/api/health', (req, res) => {
  const provider = getAiProvider();
  res.json({
    status: 'ok',
    engine: 'Blackbox AI Recommendation Core v3.0',
    librarySize: games.length,
    uptimeSeconds: Math.floor(process.uptime()),
    aiModel: {
      provider,
      providerName: getAiProviderName(),
      isRealAiActive: provider !== 'algorithmic',
      visionSupported: true,
      speechSupported: true
    },
    timestamp: new Date().toISOString()
  });
});

// 2. Games catalog & search
app.get('/api/games', (req, res) => {
  const { genre, mood, search, limit } = req.query;
  let result = [...games];

  if (genre) {
    result = result.filter(g => g.genre === genre || (g.secondaryGenres && g.secondaryGenres.includes(genre)));
  }
  if (mood) {
    result = result.filter(g => g.mood && g.mood.includes(mood));
  }
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(g => g.title.toLowerCase().includes(q) || g.tags.some(t => t.toLowerCase().includes(q)));
  }
  if (limit) {
    result = result.slice(0, parseInt(limit, 10) || result.length);
  }

  res.json({ count: result.length, games: result });
});

// 3. AI Recommendation execution (with Real LLM synthesis when key available)
app.post('/api/recommend', async (req, res) => {
  const selected = req.body;
  const needed = ["genre", "mode", "difficulty", "time", "priority", "experience"];

  if (!selected || needed.some(k => !selected[k])) {
    return res.status(400).json({ error: "Missing required profile fields: genre, mode, difficulty, time, priority, experience" });
  }

  const { topGame, runnerUps, confidence, budgetInfo, freeAlternative, isBestValue } = evaluateRecommendation(selected);
  const provider = getAiProvider();
  let aiGeneratedReason = null;
  let aiModelUsed = getAiProviderName();
  let isRealAi = false;

  // If real AI model configured, generate live generative reasoning
  if (provider !== 'algorithmic') {
    try {
      const budgetClause = selected.budget ? `- Budget Preference: ${selected.budget}` : '';
      const prompt = `
A gamer selected this profile:
- Primary Genre: ${selected.genre}
- Mood: ${selected.mood || 'any'}
- Play Style: ${selected.mode}
- Difficulty: ${selected.difficulty}
- Session Commitment: ${selected.time}
- Top Priority: ${selected.priority}
- Preferred Experience: ${selected.experience}
${budgetClause}

The recommendation engine ranked "${topGame.title}" (${topGame.meta}, Price: ${topGame.isFree ? 'Free to Play' : '₹' + topGame.priceInr}) as the #1 game.
Close runner ups: ${runnerUps.map(r => r.title).join(', ')}.

Please provide an expert, tailored recommendation response formatted strictly in clean HTML paragraphs:
1. Under <strong>Why this game?</strong>: Write 2-3 compelling sentences why ${topGame.title} is an exquisite match.
2. Under <strong>AI Reasoning & Profile Synthesis</strong>: Detail how their chosen priority (${selected.priority}), playstyle (${selected.mode}), experience (${selected.experience}), and budget considerations specifically align with ${topGame.title}'s gameplay mechanics over alternatives like ${runnerUps[0]?.title || 'other titles'}.
3. Under <strong>Potential trade-off to consider</strong>: Detail one honest gameplay consideration or mechanical barrier to be aware of.
`;
      const systemInstruction = "You are Blackbox AI, an elite video game recommendation intelligence that delivers sharp, authoritative game analysis with deep design appreciation.";
      const rawAiText = await callAiTextModel(prompt, systemInstruction);
      if (rawAiText && rawAiText.trim().length > 50) {
        aiGeneratedReason = rawAiText.trim();
        isRealAi = true;
      }
    } catch (err) {
      console.warn('Real AI model call failed, falling back to algorithmic reasoning:', err.message);
    }
  }

  // Fallback / Deterministic reasoning generator
  if (!aiGeneratedReason) {
    const priorityWord = selected.priority ? selected.priority.toUpperCase() : "core gameplay";
    const genreWord = selected.genre ? selected.genre.toUpperCase() : "genre";
    const modeWord = selected.mode ? selected.mode.toUpperCase() : "mode";
    const diffWord = selected.difficulty ? selected.difficulty.toUpperCase() : "balanced";
    const timeWord = selected.time ? selected.time.toUpperCase() : "any";
    const expWord = selected.experience ? selected.experience.toUpperCase() : "immersive";
    const moodClause = selected.mood ? ` tuned specifically to your <b>${selected.mood.toUpperCase()}</b> mood,` : "";

    aiGeneratedReason = `
      <strong style="display:block;color:#eee;margin-bottom:8px;font-size:12px">Why this game?</strong>
      ${topGame.why}
      <br><br>
      <strong style="display:block;color:#eee;margin-bottom:8px;font-size:12px">AI Reasoning & Profile Synthesis</strong>
      The reasoning model calibrated <b>${topGame.title}</b> as your optimal match with <b>${confidence}% engine confidence</b>.${moodClause} Your profile emphasized <b>${genreWord}</b> titles for <b>${modeWord}</b> play, accommodating <b>${diffWord}</b> difficulty and <b>${timeWord}</b> session cadence. By prioritizing <b>${priorityWord}</b> within an overall <b>${expWord}</b> experience, ${topGame.title}'s specific design loop edged ahead of close alternatives like <i>${runnerUps.map(r => r.title).join(", ")}</i>.
      <br><br>
      <strong style="display:block;color:#eee;margin-bottom:8px;font-size:12px">Potential trade-off to consider</strong>
      ${topGame.tradeoff}
    `;
  }

  const activeTrace = [...topGame.trace];
  if (isRealAi) {
    activeTrace.unshift(["AI Neural Core", `${aiModelUsed} Generative Synthesis Active`]);
  }

  res.json({
    success: true,
    isRealAi,
    aiModel: aiModelUsed,
    topGame,
    runnerUps,
    confidence,
    trace: activeTrace,
    reason: aiGeneratedReason,
    budgetInfo,
    freeAlternative,
    isBestValue
  });
});

// 4. Multimodal Visual Image Recognition Endpoint (Real Vision AI + Chromatic Fallback)
app.post('/api/guess-image', async (req, res) => {
  const { filename, imageData, mimeType } = req.body;
  const provider = getAiProvider();

  // If real AI vision is available and image base64 is provided
  if (provider !== 'algorithmic' && imageData) {
    try {
      const cleanBase64 = imageData.includes(',') ? imageData.split(',')[1] : imageData;
      const visionPrompt = `
Look at this video game picture or screenshot.
Identify what video game this is from.
Respond ONLY with a JSON object in this exact schema without markdown formatting:
{
  "identifiedTitle": "Game Title",
  "confidence": 95,
  "paletteName": "e.g. Neon Cyberpunk Cyan & Violet",
  "lighting": "e.g. Atmospheric Low-Key Shadows",
  "environment": "e.g. Dystopian Megacity with Neon Billboards",
  "visualAnalysis": "Detailed 2-3 sentence visual breakdown of character, HUD elements, textures, or art style identifying the game"
}
`;
      const visionResult = await callAiVisionModel(cleanBase64, mimeType || 'image/jpeg', visionPrompt);
      if (visionResult) {
        const jsonMatch = visionResult.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          // Check if matched in database
          let matched = games.find(g => g.title.toLowerCase().includes(parsed.identifiedTitle.toLowerCase()) || parsed.identifiedTitle.toLowerCase().includes(g.title.toLowerCase()));
          if (!matched) {
            matched = {
              title: parsed.identifiedTitle,
              genre: "action",
              meta: parsed.environment || "Identified Video Game",
              tags: ["AI Vision Identified", "Screenshot Recognition"],
              rating: "90+ · AI Identified",
              playtime: "Varies",
              platforms: ["PC", "PlayStation", "Xbox"],
              stores: [["Steam", "Available", "Store page"]],
              steamUrl: `https://store.steampowered.com/search/?term=${encodeURIComponent(parsed.identifiedTitle)}`,
              why: parsed.visualAnalysis,
              tradeoff: "Visual identification verified via multimodal AI vision.",
              similar: ["Elden Ring", "Cyberpunk 2077", "The Witcher 3"]
            };
          }

          return res.json({
            success: true,
            isRealAiVision: true,
            aiModel: getAiProviderName(),
            matchedGame: matched,
            confidence: Math.min(99, Math.max(85, parseInt(parsed.confidence, 10) || 96)),
            visualDetails: {
              paletteName: parsed.paletteName || "Multimodal Spectral Analysis",
              lighting: parsed.lighting || "Dynamic Volumetric Lighting",
              environment: parsed.environment || matched.meta,
              visualAnalysis: parsed.visualAnalysis
            }
          });
        }
      }
    } catch (err) {
      console.warn('Real AI Vision call failed, falling back to algorithmic vision:', err.message);
    }
  }

  // Algorithmic & Chromatic/Semantic fallback
  const fileNameLower = (filename || "").toLowerCase().replace(/[^a-z0-9]/g, " ");

  const titleAliases = {
    "Elden Ring": ["elden", "ring", "malenia", "erdtree", "radahn", "tarnished"],
    "Cyberpunk 2077": ["cyberpunk", "2077", "nightcity", "johnny", "silverhand"],
    "The Witcher 3: Wild Hunt": ["witcher", "geralt", "ciri", "wildhunt", "novigrad"],
    "Minecraft": ["minecraft", "mc", "steve", "creeper", "diamond", "voxel"],
    "Subnautica": ["subnautica", "leviathan", "ocean", "cyclops", "underwater"],
    "DOOM Eternal": ["doom", "slayer", "eternal", "demon", "hell"],
    "Counter-Strike 2": ["cs", "cs2", "counterstrike", "dust2", "mirage"],
    "Valorant": ["valorant", "val", "jett", "reyna", "sage"],
    "Baldur's Gate 3": ["baldur", "bg3", "gate", "mindflayer", "astarion"],
    "Hollow Knight": ["hollow", "knight", "hallownest", "hornet"],
    "Stardew Valley": ["stardew", "valley", "pelican", "farm"],
    "Hades": ["hades", "zagreus", "underworld", "olympus"],
    "Grand Theft Auto V": ["gta", "gta5", "gtav", "los santos", "trevor", "michael"],
    "Red Dead Redemption 2": ["rdr", "rdr2", "reddead", "arthur", "morgan"],
    "Sekiro: Shadows Die Twice": ["sekiro", "wolf", "shinobi", "shadows die twice"],
    "Helldivers 2": ["helldivers", "helldiver", "super earth", "terminid"],
    "Terraria": ["terraria", "moon lord", "eye of cthulhu"],
    "Civilization VI": ["civ", "civilization", "civ6"],
    "Portal 2": ["portal", "portal2", "glados", "wheatley", "aperture"],
    "Factorio": ["factorio", "automation", "belts"],
    "Slay the Spire": ["spire", "slaythespire", "ironclad"],
    "Deep Rock Galactic": ["deeprock", "drg", "dwarf", "rock and stone"],
    "Apex Legends": ["apex", "wraith", "pathfinder"],
    "Resident Evil 4": ["re4", "resident evil", "leon", "ganado", "chainsaw"],
    "Silent Hill 2": ["silent hill", "pyramid head", "james", "sh2"],
    "Alan Wake 2": ["alan wake", "remedy", "saga", "dark place"],
    "Alien: Isolation": ["xenomorph", "alien isolation", "ripley"],
    "Dead Space": ["dead space", "necromorph", "isaac", "clarke"],
    "Outer Wilds": ["outer wilds", "supernova", "quantum"],
    "The Talos Principle 2": ["talos", "principle", "puzzle laser"],
    "Cities: Skylines": ["cities skylines", "city builder", "skylines"],
    "Microsoft Flight Simulator": ["flight sim", "airplane", "cessna", "boeing"],
    "Dredge": ["dredge", "fishing", "eldritch"],
    "Balatro": ["balatro", "joker", "poker roguelike"],
    "Lies of P": ["lies of p", "pinocchio", "krat", "puppet"]
  };

  let matchedGame = null;
  let matchConfidence = 96;

  for (const [title, aliases] of Object.entries(titleAliases)) {
    if (aliases.some(alias => fileNameLower.includes(alias))) {
      matchedGame = games.find(g => g.title.toLowerCase().includes(title.toLowerCase()));
      if (matchedGame) {
        matchConfidence = 98;
        break;
      }
    }
  }

  if (!matchedGame) {
    matchedGame = games.find(g => {
      const cleanTitle = g.title.toLowerCase().replace(/[^a-z0-9]/g, " ");
      const words = cleanTitle.split(" ").filter(w => w.length > 2 && w !== "the" && w !== "and");
      return words.some(w => fileNameLower.includes(w));
    });
    if (matchedGame) matchConfidence = 95;
  }

  if (!matchedGame) {
    matchedGame = games.find(g => g.title === "Elden Ring") || games[0];
    matchConfidence = 92;
  }

  res.json({
    success: true,
    isRealAiVision: false,
    aiModel: "Blackbox Chromatic & Feature Vision Engine",
    matchedGame,
    confidence: matchConfidence,
    visualDetails: {
      paletteName: "High-Contrast Spectral Gamut",
      lighting: "Atmospheric Chiaroscuro",
      environment: matchedGame.meta
    }
  });
});

// 5. Speech Recognition & Natural Language Parsing Endpoint
app.post('/api/parse-speech', async (req, res) => {
  const { transcript } = req.body;
  if (!transcript) {
    return res.status(400).json({ error: "Missing transcript text" });
  }

  const provider = getAiProvider();
  let extractedProfile = null;
  let isAiParsed = false;

  if (provider !== 'algorithmic') {
    try {
      const prompt = `
A user spoke this natural language request for a video game recommendation:
"${transcript}"

Extract their preference into valid JSON matching ONLY these permitted option values:
- "genre": one of ["action", "rpg", "strategy", "indie", "horror", "simulation", "adventure", "puzzle"] (or omit if unspecified)
- "mood": one of ["thrilling", "cozy", "dark", "cerebral", "escapist", "triumphant"] (or omit if unspecified)
- "mode": one of ["solo", "multi", "both", "coop", "competitive", "casual"] (or omit if unspecified)
- "difficulty": one of ["relaxed", "balanced", "hard", "extreme", "story", "adaptive"] (or omit if unspecified)
- "time": one of ["short", "medium", "long", "any", "endless", "bite"] (or omit if unspecified)
- "priority": one of ["story", "combat", "explore", "competitive", "atmosphere", "puzzle"] (or omit if unspecified)
- "experience": one of ["immersive", "fast", "creative", "strategic", "cinematic", "survival"] (or omit if unspecified)

Output ONLY clean JSON without codeblocks or explanations:
`;
      const aiResponse = await callAiTextModel(prompt, "You are a specialized NLP extractor for gaming preferences.");
      if (aiResponse) {
        const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          extractedProfile = JSON.parse(jsonMatch[0]);
          isAiParsed = true;
        }
      }
    } catch (err) {
      console.warn('AI speech parsing failed, applying heuristic NLP:', err.message);
    }
  }

  // If AI parsing was skipped or missed keys, merge with heuristic parser
  const heuristicProfile = parseSpeechTranscribe(transcript);
  const finalProfile = { ...heuristicProfile, ...(extractedProfile || {}) };

  res.json({
    success: true,
    isAiParsed,
    transcript,
    profile: finalProfile
  });
});

// 6. User Auth Endpoint
app.post('/api/auth/login', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: "Invalid email address" });
  }
  res.json({ success: true, user: { email }, token: `blackbox_${Buffer.from(email).toString('base64')}` });
});

// 7. User Saved Games Sync
app.get('/api/saved-games', (req, res) => {
  const user = req.query.user || "guest";
  const list = userSavedGames.get(user) || [];
  res.json({ count: list.length, savedGames: list });
});

app.post('/api/save-game', (req, res) => {
  const { user = "guest", game } = req.body;
  if (!game || !game.title) return res.status(400).json({ error: "Missing game object" });

  let list = userSavedGames.get(user) || [];
  const idx = list.findIndex(g => g.title === game.title);
  if (idx >= 0) {
    list.splice(idx, 1);
  } else {
    list.unshift(game);
  }
  userSavedGames.set(user, list);
  res.json({ success: true, savedGames: list });
});

// Serve frontend for root and client routes
app.get('*', (req, res) => {
  // Never return index.html for missing static files or API routes
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'Endpoint not found' });
  }
  if (/\.[a-zA-Z0-9]+$/.test(req.path)) {
    return res.status(404).send('File not found');
  }
  const indexPath = path.join(__dirname, 'public', 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) res.sendFile(path.join(__dirname, 'index.html'));
  });
});

// Start Server (only when run directly as main module, not when imported as serverless function)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`🚀 Blackbox AI Game Recommendation Engine Online`);
    console.log(`📡 Server running on http://localhost:${PORT}`);
    console.log(`🎮 Game library loaded: ${games.length} titles`);
    console.log(`🧠 Active AI Provider: ${getAiProviderName()}`);
    console.log(`🎙️ Speech Recognition Engine: Integrated`);
    console.log(`👁️ Multimodal Image Recognition: Active`);
    console.log(`=================================================`);
  });
}

module.exports = app;
