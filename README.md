# PUGG. — AI Game Discovery

> **Don't search. Let the engine choose. 🎮**

PUGG. is an AI-powered game discovery platform that helps players find the perfect game based on their **preferences, mood, play style, and budget**.

Built with Node.js, Express, modern JavaScript, and Supabase, PUGG. combines intelligent recommendations, voice input, visual game recognition, budget-aware suggestions, and a personal saved games library into one gaming experience.

---

## 🎮 Features

### 🧠 Intelligent Game Recommendation Engine

PUGG. analyzes multiple dimensions of your gaming preferences, including:

- Primary & secondary genres
- Emotional mood
- Solo, Co-op & PvP preferences
- Difficulty preferences
- Session length
- Gameplay priorities
- Visual & aesthetic preferences
- Synergistic preference matching
- Budget compatibility
- Value for Money (VFM)

---

### 💰 Budget-Aware Recommendations

Find games that actually fit your wallet.

Supports:

- 🆓 Free to Play
- 💸 Under ₹500
- 💰 Under ₹1,000
- 💎 Under ₹2,000
- 🚀 No Limit
- 🎚️ Custom Budget Slider

PUGG. also evaluates **Value for Money (VFM)** when recommending games.

---

### 🆓 Intelligent Free Alternatives

When a recommended game is paid, PUGG. can suggest a high-quality **free-to-play alternative**.

It also explains the differences between:

- 🎯 Premium Choice
- 🆓 Free Alternative

So players can decide whether the paid version is worth it.

---

### 👁️ AI Screenshot Recognition

Upload or drag-and-drop an in-game screenshot.

PUGG. can analyze the image using:

- Google Gemini Vision
- OpenAI Vision
- Client-side fallback analysis

This helps identify games and generate relevant recommendations.

---

### 🎙️ Voice Preference Input

Use speech recognition to describe what you're looking for.

Instead of manually selecting every preference, just tell PUGG. what kind of game you want to play.

---

### ⭐ Personal Saved Games Library

Create an account and save games you want to play later.

Features include:

- Secure user authentication
- Personal saved games
- User-specific game libraries
- Persistent cloud storage
- Secure database access with Supabase Row Level Security

---

### 🛒 Multi-Platform Game Discovery

Recommendations can include links and availability across platforms such as:

- Steam
- Epic Games
- PlayStation Store

---

### ⚡ Resilient Architecture

PUGG. is designed with fallback behavior.

If external AI APIs are unavailable, the application can still use its local recommendation logic so the core experience remains functional.

---

# 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js + Express
- **Authentication:** Supabase Auth
- **Database:** Supabase PostgreSQL
- **AI:** Google Gemini / OpenAI
- **Speech Recognition:** Web Speech API
- **Deployment:** Compatible with Render, Railway, Vercel, and other Node.js hosting platforms

---

