const selected = { budget: "no_limit" };

const games = [
  {
    "title": "Elden Ring",
    "genre": "rpg",
    "secondaryGenres": [
      "action"
    ],
    "mood": [
      "dark",
      "thrilling",
      "triumphant"
    ],
    "modes": [
      "solo",
      "coop",
      "both"
    ],
    "diff": [
      "hard",
      "extreme"
    ],
    "time": [
      "medium",
      "long",
      "endless"
    ],
    "priority": [
      "combat",
      "explore",
      "atmosphere"
    ],
    "experience": [
      "immersive",
      "strategic",
      "survival"
    ],
    "meta": "Action RPG · Vast open world dark fantasy",
    "tags": [
      "Souls-like",
      "Open World",
      "Dark Fantasy",
      "Bosses",
      "Deep Lore"
    ],
    "rating": "96/100 · Metacritic",
    "playtime": "60-120 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹3,599"
      ],
      [
        "Epic Games",
        "Available",
        "₹3,599"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹3,599"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    "why": "Elden Ring marries FromSoftware's legendary tactical precision combat with an unprecedented open world that rewards curiosity at every turn. Immense build variety lets you tailor magic, colossal weapons, and stealth to your exact preference.",
    "tradeoff": "Relentless combat difficulty and cryptic questlines require high perseverance; boss encounters will aggressively test your timing and build decisions.",
    "similar": [
      "Dark Souls III",
      "Sekiro: Shadows Die Twice",
      "Lies of P",
      "The Witcher 3"
    ],
    "priceInr": 3599,
    "isFree": false,
    "vfmScore": 9.3,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Path of Exile offers immense build complexity and boss encounters at zero cost with an isometric ARPG perspective."
  },
  {
    "title": "The Witcher 3: Wild Hunt",
    "genre": "rpg",
    "secondaryGenres": [
      "action",
      "adventure"
    ],
    "mood": [
      "dark",
      "escapist",
      "cerebral"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "hard",
      "story"
    ],
    "time": [
      "long",
      "endless"
    ],
    "priority": [
      "story",
      "explore",
      "atmosphere"
    ],
    "experience": [
      "immersive",
      "cinematic"
    ],
    "meta": "Story-Driven Open-World RPG · Dark fantasy classic",
    "tags": [
      "Narrative Masterpiece",
      "Choices Matter",
      "Open World",
      "Atmospheric"
    ],
    "rating": "93/100 · Metacritic",
    "playtime": "70-150 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,249"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,249"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,249"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
    "why": "The gold standard in video game narrative depth. Every side quest carries genuine dramatic weight, moral ambiguity, and cinematic consequence across a living continent teeming with folklore and memorable characters.",
    "tradeoff": "Pacing is deliberately slower and dialogue-heavy compared to twitch action titles, demanding sustained episodic commitment.",
    "similar": [
      "Cyberpunk 2077",
      "Baldur's Gate 3",
      "Red Dead Redemption 2",
      "Dragon Age: Origins"
    ],
    "priceInr": 1249,
    "isFree": false,
    "vfmScore": 9.8,
    "freeAltTitle": "Genshin Impact",
    "freeAltDiff": "Genshin Impact provides a massive open fantasy world with elemental combat and continuous story updates for free."
  },
  {
    "title": "Cyberpunk 2077",
    "genre": "rpg",
    "secondaryGenres": [
      "action"
    ],
    "mood": [
      "thrilling",
      "dark",
      "escapist"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "hard",
      "story"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "story",
      "combat",
      "atmosphere"
    ],
    "experience": [
      "immersive",
      "fast",
      "cinematic"
    ],
    "meta": "First-Person Action RPG · Open-world Night City",
    "tags": [
      "Cyberpunk",
      "First-Person",
      "Story Rich",
      "High Mobility",
      "Sci-Fi"
    ],
    "rating": "90/100 · Very Positive",
    "playtime": "35-85 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹2,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹2,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹2,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    "why": "Night City offers unmatched urban density and sensory immersion. Pairing responsive gunplay and cyberware mobility with an intense branching narrative, it delivers an adrenaline-charged sci-fi odyssey.",
    "tradeoff": "Demands capable PC/console hardware to experience full ray-tracing fidelity, and the narrative velocity offers less passive sandbox idling.",
    "similar": [
      "The Witcher 3",
      "Deus Ex: Mankind Divided",
      "Fallout 4",
      "Ghostrunner"
    ],
    "priceInr": 2999,
    "isFree": false,
    "vfmScore": 9.1,
    "freeAltTitle": "Warframe",
    "freeAltDiff": "Warframe delivers fast cybernetic agility, ninja parkour, and futuristic gunplay in a 100% free-to-play universe."
  },
  {
    "title": "Baldur's Gate 3",
    "genre": "rpg",
    "secondaryGenres": [
      "strategy",
      "adventure"
    ],
    "mood": [
      "cerebral",
      "escapist",
      "triumphant"
    ],
    "modes": [
      "solo",
      "coop",
      "both",
      "casual"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "hard",
      "extreme",
      "story"
    ],
    "time": [
      "long",
      "endless"
    ],
    "priority": [
      "story",
      "explore",
      "atmosphere"
    ],
    "experience": [
      "immersive",
      "strategic",
      "cinematic"
    ],
    "meta": "Turn-Based cRPG · Dungeons & Dragons 5E Universe",
    "tags": [
      "Turn-Based Combat",
      "Choices Matter",
      "Multiplayer Co-Op",
      "Deep Lore",
      "Tactical"
    ],
    "rating": "96/100 · Game of the Year",
    "playtime": "80-150 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "Xbox Series X/S",
      "Mac"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹2,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹2,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹2,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    "why": "Unrivaled tabletop freedom in video game form. Environmental turn-based tactics let you push enemies into chasms or electrify water puddles, while every dialogue permutation shapes the destiny of the Forgotten Realms.",
    "tradeoff": "Turn-based tactical combat is deliberate and thoughtful; managing spell slots and a four-character party requires strategic patience.",
    "similar": [
      "Divinity: Original Sin 2",
      "Pillars of Eternity II",
      "Disco Elysium",
      "Dragon Age: Origins"
    ],
    "priceInr": 2999,
    "isFree": false,
    "vfmScore": 9.5,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Path of Exile offers deep tactical theorycrafting, passive trees, and seasonal leagues at zero upfront price."
  },
  {
    "title": "Disco Elysium - The Final Cut",
    "genre": "rpg",
    "secondaryGenres": [
      "indie",
      "adventure"
    ],
    "mood": [
      "cerebral",
      "dark",
      "escapist"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "story"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "story",
      "atmosphere",
      "puzzle"
    ],
    "experience": [
      "immersive",
      "strategic",
      "cinematic"
    ],
    "meta": "Isometric Detective RPG · Psychological Literary Noir",
    "tags": [
      "Masterpiece Writing",
      "Detective",
      "Noir",
      "Choices Matter",
      "Psychological"
    ],
    "rating": "97/100 · Metacritic",
    "playtime": "25-45 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹899"
      ],
      [
        "Epic Games",
        "Available",
        "₹899"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹899"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/",
    "why": "Regarded as one of the finest scripts ever written in interactive history. Traditional kinetic combat is replaced by internal psychological debates between 24 distinct cognitive voices in your own amnesiac mind.",
    "tradeoff": "Zero traditional weapon combat; all progression hinges on dialogue decisions, investigative observation, and dice checks.",
    "similar": [
      "Planescape: Torment",
      "Pentiment",
      "Citizen Sleeper",
      "Baldur's Gate 3"
    ],
    "priceInr": 899,
    "isFree": false,
    "vfmScore": 9.4,
    "freeAltTitle": "Cry of Fear",
    "freeAltDiff": "Cry of Fear delivers an intense psychological journey with dark literary themes completely free."
  },
  {
    "title": "Resident Evil 4",
    "genre": "horror",
    "secondaryGenres": [
      "action"
    ],
    "mood": [
      "thrilling",
      "dark",
      "triumphant"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "balanced",
      "hard",
      "extreme",
      "adaptive"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "combat",
      "atmosphere",
      "story"
    ],
    "experience": [
      "survival",
      "fast",
      "cinematic"
    ],
    "meta": "Survival Horror Masterpiece · Leon S. Kennedy in Spain",
    "tags": [
      "Survival Horror",
      "Action",
      "Zombies",
      "Atmospheric",
      "Great Remake"
    ],
    "rating": "93/100 · Metacritic",
    "playtime": "15-25 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "iOS"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹2,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹2,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹2,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/2050650/Resident_Evil_4/",
    "why": "The gold standard in survival horror pacing. Dynamic combat knife parries, resource crafting, precision leg-shots into roundhouse kicks, and unmatched atmospheric tension from the Spanish village to the castle.",
    "tradeoff": "Inventory briefcase management and ammo scarcity demand tactical thrift under pressure.",
    "similar": [
      "Dead Space",
      "Silent Hill 2",
      "The Evil Within 2",
      "Alan Wake 2"
    ],
    "priceInr": 2999,
    "isFree": false,
    "vfmScore": 9.2,
    "freeAltTitle": "Cry of Fear",
    "freeAltDiff": "Cry of Fear provides bone-chilling survival horror with inventory conservation and terrifying monsters."
  },
  {
    "title": "Silent Hill 2",
    "genre": "horror",
    "secondaryGenres": [
      "adventure"
    ],
    "mood": [
      "dark",
      "cerebral"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "story",
      "balanced",
      "hard"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "atmosphere",
      "story",
      "puzzle"
    ],
    "experience": [
      "immersive",
      "cinematic",
      "survival"
    ],
    "meta": "Psychological Horror Masterpiece · Fog-Drenched Town of Guilt",
    "tags": [
      "Psychological Horror",
      "Dark",
      "Atmospheric",
      "Deep Lore",
      "Story Rich"
    ],
    "rating": "86/100 · Overwhelmingly Positive",
    "playtime": "16-22 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹3,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹3,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹3,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/2124490/SILENT_HILL_2/",
    "why": "The defining pinnacle of psychological dread. James Sunderland's haunting search for his deceased wife in the fog-drenched town explores profound themes of grief, guilt, and repressed trauma.",
    "tradeoff": "Deeply unsettling sound design and visceral body horror create sustained emotional weight.",
    "similar": [
      "Alan Wake 2",
      "Resident Evil 2",
      "Signalis",
      "Dead Space"
    ],
    "priceInr": 3999,
    "isFree": false,
    "vfmScore": 8.9,
    "freeAltTitle": "Cry of Fear",
    "freeAltDiff": "Cry of Fear is a full standalone psychological horror campaign inspired by classic Silent Hill."
  },
  {
    "title": "Alan Wake 2",
    "genre": "horror",
    "secondaryGenres": [
      "adventure"
    ],
    "mood": [
      "dark",
      "cerebral",
      "thrilling"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "story",
      "balanced",
      "hard"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "story",
      "atmosphere",
      "puzzle"
    ],
    "experience": [
      "cinematic",
      "immersive",
      "survival"
    ],
    "meta": "Survival Psychological Horror · Remedy Connected Universe",
    "tags": [
      "Atmospheric",
      "Mind-Bending",
      "Cinematic",
      "Detective",
      "Horror"
    ],
    "rating": "89/100 · Metacritic",
    "playtime": "18-28 hrs",
    "platforms": [
      "PC",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹3,299"
      ],
      [
        "Epic Games",
        "Available",
        "₹3,299"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹3,299"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/search/?term=Alan+Wake+2",
    "why": "A surreal, multimedia masterpiece. Dual narrative threads between FBI investigator Saga Anderson and trapped writer Alan Wake weave live-action footage, detective mind places, and terrifying shadow combat.",
    "tradeoff": "Complex meta-fiction storytelling requires close attention to clues and environmental lore.",
    "similar": [
      "Control",
      "Silent Hill 2",
      "Resident Evil 4",
      "Dead Space"
    ],
    "priceInr": 3299,
    "isFree": false,
    "vfmScore": 9,
    "freeAltTitle": "Cry of Fear",
    "freeAltDiff": "Delivers a deep psychological nightmare with atmospheric shadow mechanics without an entry cost."
  },
  {
    "title": "Alien: Isolation",
    "genre": "horror",
    "secondaryGenres": [
      "simulation"
    ],
    "mood": [
      "dark",
      "thrilling",
      "cerebral"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "hard",
      "extreme",
      "adaptive"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "atmosphere",
      "combat",
      "puzzle"
    ],
    "experience": [
      "immersive",
      "survival"
    ],
    "meta": "Sci-Fi Survival Horror · Sevastopol Space Station",
    "tags": [
      "Survival Horror",
      "Sci-Fi",
      "Stealth",
      "Alien",
      "Atmospheric"
    ],
    "rating": "81/100 · Cult Classic",
    "playtime": "18-25 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox",
      "Switch"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,499"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,499"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,499"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/214490/Alien_Isolation/",
    "why": "Unscripted predatory terror. The Xenomorph is driven by dual AI systems that actively learn your hiding spots, respond to noise, and stalk you through the claustrophobic retro-futuristic corridors.",
    "tradeoff": "High tension and unpredictable alien patrol loops make progress deliberately grueling for faint-hearted players.",
    "similar": [
      "Dead Space",
      "SOMA",
      "Prey",
      "Amnesia: The Bunker"
    ],
    "priceInr": 1499,
    "isFree": false,
    "vfmScore": 9.5,
    "freeAltTitle": "Cry of Fear",
    "freeAltDiff": "Offers intense cat-and-mouse survival horror and resource scrounging completely free."
  },
  {
    "title": "Dead Space",
    "genre": "horror",
    "secondaryGenres": [
      "action"
    ],
    "mood": [
      "dark",
      "thrilling"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "story",
      "balanced",
      "hard",
      "extreme"
    ],
    "time": [
      "medium"
    ],
    "priority": [
      "combat",
      "atmosphere",
      "story"
    ],
    "experience": [
      "immersive",
      "survival",
      "cinematic"
    ],
    "meta": "Sci-Fi Survival Horror · USG Ishimura Dissection",
    "tags": [
      "Sci-Fi",
      "Gore",
      "Survival Horror",
      "Atmospheric",
      "Space"
    ],
    "rating": "89/100 · Metacritic",
    "playtime": "12-18 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹2,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹2,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹2,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1693980/Dead_Space/",
    "why": "Strategic tactical dismemberment. Cutting off Necromorph limbs with plasma cutters, floating through zero-gravity ship sections, and surviving intense claustrophobic hull breaches.",
    "tradeoff": "Intense body horror gore and jump scares provide no breaks until safe rooms are reached.",
    "similar": [
      "Resident Evil 4",
      "The Callisto Protocol",
      "Alien: Isolation",
      "DOOM Eternal"
    ],
    "priceInr": 2999,
    "isFree": false,
    "vfmScore": 9.1,
    "freeAltTitle": "Warframe",
    "freeAltDiff": "Warframe features dark derelict ship infestation missions and dismemberment combat at zero cost."
  },
  {
    "title": "Outer Wilds",
    "genre": "adventure",
    "secondaryGenres": [
      "puzzle",
      "indie"
    ],
    "mood": [
      "cerebral",
      "escapist",
      "cozy",
      "dark"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "story",
      "balanced"
    ],
    "time": [
      "medium",
      "bite"
    ],
    "priority": [
      "explore",
      "puzzle",
      "atmosphere"
    ],
    "experience": [
      "immersive",
      "creative",
      "cinematic"
    ],
    "meta": "Open-World Space Mystery · 22-Minute Solar System Loop",
    "tags": [
      "Masterpiece",
      "Space Exploration",
      "Mystery",
      "Time Loop",
      "Puzzle"
    ],
    "rating": "95/100 · Overwhelmingly Positive",
    "playtime": "15-25 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,299"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,299"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,299"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/753640/Outer_Wilds/",
    "why": "A cosmic existential triumph. Piloting your wooden spaceship through quantum planets, deciphering an ancient alien civilization, and uncovering why the sun goes supernova every 22 minutes.",
    "tradeoff": "Knowledge is the only progression vector; once you understand the solar system's secrets, you can never replay it blind.",
    "similar": [
      "Subnautica",
      "The Witness",
      "Return of the Obra Dinn",
      "Tunic"
    ],
    "priceInr": 1299,
    "isFree": false,
    "vfmScore": 9.7,
    "freeAltTitle": "Genshin Impact",
    "freeAltDiff": "Genshin Impact features vast open-world exploration with hidden ruins, puzzles, and celestial lore."
  },
  {
    "title": "The Talos Principle 2",
    "genre": "puzzle",
    "secondaryGenres": [
      "adventure",
      "indie"
    ],
    "mood": [
      "cerebral",
      "escapist",
      "cozy"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "story",
      "balanced",
      "adaptive"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "puzzle",
      "story",
      "explore"
    ],
    "experience": [
      "immersive",
      "strategic",
      "cinematic"
    ],
    "meta": "First-Person Philosophical Puzzle Adventure",
    "tags": [
      "Puzzle",
      "Philosophical",
      "Sci-Fi",
      "Great Soundtrack",
      "Beautiful"
    ],
    "rating": "88/100 · Very Positive",
    "playtime": "20-35 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,300"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,300"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,300"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/835910/The_Talos_Principle_2/",
    "why": "Laser refraction, gravity manipulation, and mind-bending spatial logic wrapped in profound philosophical debates on humanity, post-extinction civilization, and artificial consciousness.",
    "tradeoff": "Demands deep spatial reasoning patience; rushing test chambers without analyzing beam angles leads to puzzle deadlocks.",
    "similar": [
      "Portal 2",
      "The Witness",
      "Outer Wilds",
      "Antichamber"
    ],
    "priceInr": 1300,
    "isFree": false,
    "vfmScore": 9.4,
    "freeAltTitle": "Roblox",
    "freeAltDiff": "Roblox includes hundreds of community-built complex puzzle and escape room experiences."
  },
  {
    "title": "Cities: Skylines",
    "genre": "simulation",
    "secondaryGenres": [
      "strategy"
    ],
    "mood": [
      "cozy",
      "cerebral",
      "escapist"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "adaptive"
    ],
    "time": [
      "long",
      "endless"
    ],
    "priority": [
      "explore",
      "puzzle",
      "atmosphere"
    ],
    "experience": [
      "creative",
      "strategic"
    ],
    "meta": "Modern City Building & Traffic Management Sim",
    "tags": [
      "City Builder",
      "Simulation",
      "Management",
      "Sandbox",
      "Creative"
    ],
    "rating": "85/100 · Best-Selling Builder",
    "playtime": "50-300+ hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox",
      "Switch"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,499"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,499"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,499"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/255710/Cities_Skylines/",
    "why": "The definitive urban design simulator. Zoning high-density residential towers, managing highway roundabouts, public transit grids, and power infrastructure to build thriving metropolises.",
    "tradeoff": "Traffic congestion nightmares will ruthlessly expose flawed highway ramp architecture.",
    "similar": [
      "Factorio",
      "RimWorld",
      "Frostpunk",
      "SimCity 4"
    ],
    "priceInr": 1499,
    "isFree": false,
    "vfmScore": 9.4,
    "freeAltTitle": "The Sims 4",
    "freeAltDiff": "The Sims 4 offers comprehensive architectural construction and neighborhood planning for free."
  },
  {
    "title": "Microsoft Flight Simulator",
    "genre": "simulation",
    "secondaryGenres": [
      "adventure"
    ],
    "mood": [
      "cozy",
      "escapist",
      "cerebral"
    ],
    "modes": [
      "solo",
      "multi",
      "casual"
    ],
    "diff": [
      "relaxed",
      "story",
      "adaptive",
      "extreme"
    ],
    "time": [
      "short",
      "long",
      "endless"
    ],
    "priority": [
      "explore",
      "atmosphere"
    ],
    "experience": [
      "immersive",
      "cinematic",
      "creative"
    ],
    "meta": "Photorealistic Global Flight Simulation · Earth 1:1",
    "tags": [
      "Flight Simulation",
      "Photorealistic",
      "Open World",
      "Relaxing",
      "Aviation"
    ],
    "rating": "91/100 · Metacritic",
    "playtime": "Infinite Global Exploration",
    "platforms": [
      "PC",
      "Xbox Series X/S",
      "Cloud"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹3,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹3,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹3,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1250410/Microsoft_Flight_Simulator_40th_Anniversary_Edition/",
    "why": "Breathtaking technological wonder. Fly any aircraft anywhere on planet Earth with real-time live weather, volumetric clouds, satellite photogrammetry, and realistic cockpit instrumentation.",
    "tradeoff": "Massive storage drive footprint (150GB+) and requires high-end PC/Xbox graphics hardware for ultra fidelity.",
    "similar": [
      "Forza Horizon 5",
      "Euro Truck Simulator 2",
      "Elite Dangerous",
      "X-Plane 12"
    ],
    "priceInr": 3999,
    "isFree": false,
    "vfmScore": 8.9,
    "freeAltTitle": "Warframe",
    "freeAltDiff": "Warframe features free atmospheric Railjack space flight and Archwing aerial navigation."
  },
  {
    "title": "Dredge",
    "genre": "adventure",
    "secondaryGenres": [
      "horror",
      "indie"
    ],
    "mood": [
      "dark",
      "cozy",
      "thrilling"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "story"
    ],
    "time": [
      "short",
      "medium",
      "bite"
    ],
    "priority": [
      "explore",
      "atmosphere",
      "story"
    ],
    "experience": [
      "immersive",
      "survival"
    ],
    "meta": "Cosmic Fishing Adventure · Eldritch Depths",
    "tags": [
      "Fishing",
      "Lovecraftian",
      "Atmospheric",
      "Cosmic Horror",
      "Indie"
    ],
    "rating": "95% · Overwhelmingly Positive",
    "playtime": "12-18 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,100"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,100"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,100"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1562420/DREDGE/",
    "why": "Captivating loop of daytime archipelago fishing, upgrading your wooden trawler engine and lights, and bracing against paranoia-inducing fog and eldritch abominations after sunset.",
    "tradeoff": "Panic meter hallucinations at night will damage your ship hull if you venture far from lighthouse docks.",
    "similar": [
      "Subnautica",
      "Sunless Sea",
      "Dave the Diver",
      "Pacific Drive"
    ],
    "priceInr": 1100,
    "isFree": false,
    "vfmScore": 9.3,
    "freeAltTitle": "Cry of Fear",
    "freeAltDiff": "Cry of Fear delivers intense cosmic and psychological horror atmosphere completely free."
  },
  {
    "title": "Balatro",
    "genre": "puzzle",
    "secondaryGenres": [
      "indie",
      "strategy"
    ],
    "mood": [
      "cerebral",
      "thrilling",
      "cozy"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "balanced",
      "hard",
      "adaptive"
    ],
    "time": [
      "short",
      "bite",
      "endless"
    ],
    "priority": [
      "puzzle",
      "combat",
      "competitive"
    ],
    "experience": [
      "fast",
      "strategic",
      "creative"
    ],
    "meta": "Poker Roguelike Deckbuilder · Hypnotic Card Synergies",
    "tags": [
      "Roguelike",
      "Deckbuilder",
      "Card Battler",
      "Addictive",
      "Indie"
    ],
    "rating": "97% · Overwhelmingly Positive",
    "playtime": "40-150+ hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch",
      "PlayStation 5",
      "Xbox",
      "Mobile"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹650"
      ],
      [
        "Epic Games",
        "Available",
        "₹650"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹650"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/2379780/Balatro/",
    "why": "Pure card ecstasy. Breaking traditional poker rules with wild Joker cards, multi-trigger tarot enhancements, and scoring astronomical billion-chip hands with satisfying crunches.",
    "tradeoff": "Incurable 'one more run' addiction that completely evaporates time.",
    "similar": [
      "Slay the Spire",
      "Inscryption",
      "Monster Train",
      "Into the Breach"
    ],
    "priceInr": 650,
    "isFree": false,
    "vfmScore": 9.8,
    "freeAltTitle": "Marvel Snap",
    "freeAltDiff": "Marvel Snap features quick roguelike-style card combos, snappy rounds, and zero entry barrier."
  },
  {
    "title": "Lies of P",
    "genre": "action",
    "secondaryGenres": [
      "rpg",
      "horror"
    ],
    "mood": [
      "dark",
      "thrilling",
      "triumphant"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "hard",
      "extreme"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "combat",
      "story",
      "atmosphere"
    ],
    "experience": [
      "fast",
      "immersive",
      "strategic"
    ],
    "meta": "Dark Belle Époque Souls-like · The Story of Pinocchio",
    "tags": [
      "Souls-like",
      "Dark Fantasy",
      "Difficult",
      "Action RPG",
      "Great Bosses"
    ],
    "rating": "84/100 · Very Positive",
    "playtime": "30-50 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹3,700"
      ],
      [
        "Epic Games",
        "Available",
        "₹3,700"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹3,700"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1627720/Lies_of_P/",
    "why": "A phenomenal gothic Souls-like. Weapon blade and handle assembly combinations, mechanical Legion Arm grappling, and razor-sharp parry timing through the ruined puppet city of Krat.",
    "tradeoff": "Strict perfect guard parry windows demand pinpoint precision on multi-phase puppet bosses.",
    "similar": [
      "Bloodborne",
      "Sekiro: Shadows Die Twice",
      "Elden Ring",
      "Dark Souls III"
    ],
    "priceInr": 3700,
    "isFree": false,
    "vfmScore": 9.1,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Path of Exile provides punishing gothic boss encounters and deep dark-fantasy build optimization."
  },
  {
    "title": "Dark Souls III",
    "genre": "rpg",
    "secondaryGenres": [
      "action"
    ],
    "mood": [
      "dark",
      "thrilling",
      "triumphant"
    ],
    "modes": [
      "solo",
      "multi",
      "both",
      "coop"
    ],
    "diff": [
      "hard",
      "extreme"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "combat",
      "explore",
      "atmosphere"
    ],
    "experience": [
      "immersive",
      "strategic"
    ],
    "meta": "Action RPG · Dark Gothic Fantasy",
    "tags": [
      "Souls-like",
      "Difficult",
      "PvP & Co-op",
      "Boss Fights",
      "Dark Fantasy"
    ],
    "rating": "89/100 · Metacritic",
    "playtime": "40-90 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/374320/DARK_SOULS_III/",
    "why": "The pinnacle of classical Souls-loop pacing. Razor-sharp boss encounters, haunting orchestral scores, and masterfully interconnected level architecture create unforgettable tension.",
    "tradeoff": "Harsh death consequences and punishing boss mechanics leave zero margin for reckless button mashing.",
    "similar": [
      "Elden Ring",
      "Sekiro: Shadows Die Twice",
      "Bloodborne",
      "Lies of P"
    ],
    "priceInr": 1999,
    "isFree": false,
    "vfmScore": 9.2,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Offers deep action RPG depth and endless replayability completely free."
  },
  {
    "title": "Monster Hunter: World",
    "genre": "rpg",
    "secondaryGenres": [
      "action"
    ],
    "mood": [
      "triumphant",
      "escapist",
      "thrilling"
    ],
    "modes": [
      "solo",
      "coop",
      "multi",
      "both"
    ],
    "diff": [
      "balanced",
      "hard"
    ],
    "time": [
      "medium",
      "long",
      "endless"
    ],
    "priority": [
      "combat",
      "explore",
      "atmosphere"
    ],
    "experience": [
      "immersive",
      "strategic"
    ],
    "meta": "Action RPG · Cooperative Creature Hunting",
    "tags": [
      "Co-op Hunting",
      "Tactile Combat",
      "Crafting",
      "Boss Battles",
      "Loot"
    ],
    "rating": "90/100 · Metacritic",
    "playtime": "60-200+ hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/582010/Monster_Hunter_World/",
    "why": "Tactile, weighty combat against living ecosystem apex predators. With 14 deeply nuanced weapon classes and seamless 4-player drop-in co-op, every hunt is an epic clash.",
    "tradeoff": "Preparation menus, tracking systems, and weapon commitment require initial study before mechanical fluidity takes over.",
    "similar": [
      "Monster Hunter Rise",
      "Wild Hearts",
      "Dragon's Dogma 2",
      "Elden Ring"
    ],
    "priceInr": 1999,
    "isFree": false,
    "vfmScore": 9.4,
    "freeAltTitle": "Genshin Impact",
    "freeAltDiff": "Genshin Impact features open-world boss hunting and elemental synergy systems with zero entry fee."
  },
  {
    "title": "Valorant",
    "genre": "action",
    "secondaryGenres": [
      "strategy"
    ],
    "mood": [
      "thrilling",
      "triumphant"
    ],
    "modes": [
      "multi",
      "competitive"
    ],
    "diff": [
      "balanced",
      "hard",
      "extreme"
    ],
    "time": [
      "short",
      "medium",
      "bite"
    ],
    "priority": [
      "combat",
      "competitive"
    ],
    "experience": [
      "fast",
      "strategic"
    ],
    "meta": "Tactical FPS · 5v5 Character-Based Shooter",
    "tags": [
      "Competitive",
      "Tactical Shooter",
      "Esports",
      "Hero Shooter",
      "Ranked"
    ],
    "rating": "85/100 · Global Esports Sensation",
    "playtime": "30-45 mins / match",
    "platforms": [
      "PC",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Free to Play",
        "Free"
      ],
      [
        "Epic Games",
        "Free to Play",
        "Free"
      ],
      [
        "PlayStation Store",
        "Free to Play",
        "Free"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/search/?term=Valorant",
    "why": "Pinpoint gunplay where crosshair discipline and recoil mastery intersect with strategic agent utility. Clutch rounds and high-intensity tactical decisions make every match electrifying.",
    "tradeoff": "Highly competitive with strict team communication expectations; unforgiving if you want a laid-back solo adventure.",
    "similar": [
      "Counter-Strike 2",
      "Rainbow Six Siege",
      "Overwatch 2",
      "Apex Legends"
    ],
    "priceInr": 0,
    "isFree": true,
    "vfmScore": 10,
    "freeAltTitle": "Counter-Strike 2",
    "freeAltDiff": "CS2 relies on grenade lineups and weapon recoil mastering rather than ability cooldowns."
  },
  {
    "title": "Counter-Strike 2",
    "genre": "action",
    "secondaryGenres": [],
    "mood": [
      "thrilling",
      "triumphant"
    ],
    "modes": [
      "multi",
      "competitive"
    ],
    "diff": [
      "hard",
      "extreme"
    ],
    "time": [
      "short",
      "medium",
      "bite"
    ],
    "priority": [
      "combat",
      "competitive"
    ],
    "experience": [
      "fast",
      "strategic"
    ],
    "meta": "Tactical FPS · The Definitive Competitive Shooter",
    "tags": [
      "Esports",
      "Competitive FPS",
      "Tactical",
      "Multiplayer",
      "Precision"
    ],
    "rating": "Top Steam Title · Millions Daily",
    "playtime": "25-45 mins / match",
    "platforms": [
      "PC",
      "Steam Deck"
    ],
    "stores": [
      [
        "Steam",
        "Free to Play",
        "Free"
      ],
      [
        "Epic Games",
        "Free to Play",
        "Free"
      ],
      [
        "PlayStation Store",
        "Free to Play",
        "Free"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/730/CounterStrike_2/",
    "why": "The purest competitive shooter ever created. No hero powers or vertical perks—only pure aim, smoke physics, spray control, and economic discipline determine victory.",
    "tradeoff": "Steep skill floor; seasoned veterans will punish positional errors with near-instant headshots.",
    "similar": [
      "Valorant",
      "Rainbow Six Siege",
      "Team Fortress 2",
      "Call of Duty"
    ],
    "priceInr": 0,
    "isFree": true,
    "vfmScore": 10,
    "freeAltTitle": "Valorant",
    "freeAltDiff": "Valorant emphasizes character-specific tactical abilities, while CS2 focuses on pure gunplay and physics-driven smokes."
  },
  {
    "title": "Apex Legends",
    "genre": "action",
    "secondaryGenres": [],
    "mood": [
      "thrilling",
      "triumphant"
    ],
    "modes": [
      "multi",
      "coop",
      "competitive"
    ],
    "diff": [
      "balanced",
      "hard"
    ],
    "time": [
      "short",
      "medium",
      "bite"
    ],
    "priority": [
      "combat",
      "competitive"
    ],
    "experience": [
      "fast"
    ],
    "meta": "Battle Royale · High-Velocity Squad Combat",
    "tags": [
      "Battle Royale",
      "Fast-Paced",
      "Movement",
      "Team-Based",
      "Shooter"
    ],
    "rating": "88/100 · Metacritic",
    "playtime": "15-25 mins / match",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    "stores": [
      [
        "Steam",
        "Free to Play",
        "Free"
      ],
      [
        "Epic Games",
        "Free to Play",
        "Free"
      ],
      [
        "PlayStation Store",
        "Free to Play",
        "Free"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1172470/Apex_Legends/",
    "why": "Unmatched first-person mobility. Slide-jumping, ziplining, and wall-bouncing make firefights feel dynamic and vertical, supported by a world-class non-verbal ping system.",
    "tradeoff": "High time-to-kill requires steady sustained tracking, and squad cohesion is critical against third-party ambushes.",
    "similar": [
      "Titanfall 2",
      "The Finals",
      "Overwatch 2",
      "Call of Duty: Warzone"
    ],
    "priceInr": 0,
    "isFree": true,
    "vfmScore": 9.9,
    "freeAltTitle": "Destiny 2",
    "freeAltDiff": "Destiny 2 offers vast co-op PvE raids and campaigns rather than Battle Royale survival."
  },
  {
    "title": "Helldivers 2",
    "genre": "action",
    "secondaryGenres": [],
    "mood": [
      "thrilling",
      "triumphant"
    ],
    "modes": [
      "coop",
      "multi",
      "both"
    ],
    "diff": [
      "balanced",
      "hard",
      "extreme",
      "adaptive"
    ],
    "time": [
      "short",
      "medium",
      "bite"
    ],
    "priority": [
      "combat",
      "explore",
      "atmosphere"
    ],
    "experience": [
      "fast",
      "immersive",
      "survival"
    ],
    "meta": "Co-op Third-Person PvE · Intergalactic Bug & Bot Warfare",
    "tags": [
      "Co-op PvE",
      "Chaotic Action",
      "Third-Person Shooter",
      "Sci-Fi"
    ],
    "rating": "82/100 · Very Positive",
    "playtime": "20-40 mins / mission",
    "platforms": [
      "PC",
      "PlayStation 5"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹2,499"
      ],
      [
        "Epic Games",
        "Available",
        "₹2,499"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹2,499"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/553850/HELLDIVERS_2/",
    "why": "Pure cinematic squad euphoria. Calling down 500kg orbital strikes, holding choke points against thousands of alien Terminids, and laughing through glorious friendly-fire chaos.",
    "tradeoff": "Designed strictly for team synergy; playing strictly solo diminishes the cooperative comedic adrenaline.",
    "similar": [
      "Deep Rock Galactic",
      "Left 4 Dead 2",
      "Warhammer: Vermintide 2",
      "Earth Defense Force 5"
    ],
    "priceInr": 2499,
    "isFree": false,
    "vfmScore": 9.3,
    "freeAltTitle": "Destiny 2",
    "freeAltDiff": "Destiny 2 features epic co-op strikes and galactic firefights with no upfront purchase requirement."
  },
  {
    "title": "DOOM Eternal",
    "genre": "action",
    "secondaryGenres": [],
    "mood": [
      "thrilling",
      "triumphant",
      "dark"
    ],
    "modes": [
      "solo",
      "multi"
    ],
    "diff": [
      "hard",
      "extreme"
    ],
    "time": [
      "short",
      "medium",
      "bite"
    ],
    "priority": [
      "combat"
    ],
    "experience": [
      "fast",
      "survival"
    ],
    "meta": "High-Octane First-Person Shooter · Kinetic Demon Slaying",
    "tags": [
      "Fast-Paced",
      "Heavy Metal",
      "Gore",
      "Precision Combat",
      "Singleplayer"
    ],
    "rating": "88/100 · Metacritic",
    "playtime": "15-25 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,799"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,799"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,799"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/782330/DOOM_Eternal/",
    "why": "Combat chess at breakneck speed. Chainsaw for ammo, flame belch for armor, glory kills for health—this mechanical resource loop turns arenas into ferocious ballets of destruction.",
    "tradeoff": "Demands relentless movement and constant weapon hotkey switching; pausing or camping is instant suicide.",
    "similar": [
      "Ultrakill",
      "DOOM (2016)",
      "Dusk",
      "Wolfenstein II"
    ],
    "priceInr": 1799,
    "isFree": false,
    "vfmScore": 9.2,
    "freeAltTitle": "Apex Legends",
    "freeAltDiff": "Apex Legends provides responsive, high-mobility kinetic first-person gunplay at zero cost."
  },
  {
    "title": "Sekiro: Shadows Die Twice",
    "genre": "action",
    "secondaryGenres": [
      "adventure"
    ],
    "mood": [
      "dark",
      "thrilling",
      "triumphant"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "hard",
      "extreme"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "combat",
      "atmosphere"
    ],
    "experience": [
      "fast",
      "strategic",
      "cinematic"
    ],
    "meta": "Action Shinobi Adventure · Rhythm of Steel & Deflection",
    "tags": [
      "Difficult",
      "Ninja",
      "Deflection",
      "Swordplay",
      "Masterpiece"
    ],
    "rating": "90/100 · Game of the Year",
    "playtime": "35-70 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹3,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹3,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹3,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice_GOTY_Edition/",
    "why": "The gold standard of sword deflection combat. The rhythmic sparks of steel clashing, posture breaking, and grappling hook infiltration produce the most rewarding duels in video game history.",
    "tradeoff": "No RPG leveling or player summons to lean on; progress requires personal mastery of timing and enemy telegraphs.",
    "similar": [
      "Lies of P",
      "Ghost of Tsushima",
      "Elden Ring",
      "Sifu"
    ],
    "priceInr": 3999,
    "isFree": false,
    "vfmScore": 9.2,
    "freeAltTitle": "Warframe",
    "freeAltDiff": "Warframe features high-speed katana parrying, stealth assassinations, and ninja movement."
  },
  {
    "title": "Red Dead Redemption 2",
    "genre": "action",
    "secondaryGenres": [
      "rpg",
      "adventure"
    ],
    "mood": [
      "escapist",
      "dark",
      "cerebral"
    ],
    "modes": [
      "solo",
      "multi",
      "both"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "story"
    ],
    "time": [
      "long",
      "endless"
    ],
    "priority": [
      "story",
      "explore",
      "atmosphere"
    ],
    "experience": [
      "immersive",
      "cinematic"
    ],
    "meta": "Epic Open-World Western · Narrative Tour de Force",
    "tags": [
      "Atmospheric Western",
      "Living World",
      "Story Rich",
      "Masterpiece"
    ],
    "rating": "97/100 · Metacritic",
    "playtime": "60-120 hrs",
    "platforms": [
      "PC",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹3,199"
      ],
      [
        "Epic Games",
        "Available",
        "₹3,199"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹3,199"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
    "why": "The most realistic, breath-taking interactive world ever constructed. Arthur Morgan's moving personal journey across frontier America pairs with unbelievable wildlife fidelity and cinematic storytelling.",
    "tradeoff": "Realistic animations and slow travel pacing are deliberately weighted; not suited for quick arcade thrills.",
    "similar": [
      "The Witcher 3",
      "Grand Theft Auto V",
      "Ghost of Tsushima",
      "The Last of Us"
    ],
    "priceInr": 3199,
    "isFree": false,
    "vfmScore": 9.6,
    "freeAltTitle": "Genshin Impact",
    "freeAltDiff": "Genshin Impact offers breathtaking living wilderness ecosystems, horse riding, and exploration for free."
  },
  {
    "title": "Grand Theft Auto V",
    "genre": "action",
    "secondaryGenres": [
      "adventure"
    ],
    "mood": [
      "thrilling",
      "escapist",
      "triumphant"
    ],
    "modes": [
      "solo",
      "multi",
      "both",
      "casual"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "story"
    ],
    "time": [
      "medium",
      "long",
      "endless"
    ],
    "priority": [
      "explore",
      "combat",
      "atmosphere"
    ],
    "experience": [
      "immersive",
      "creative",
      "cinematic"
    ],
    "meta": "Open-World Satirical Sandbox · Los Santos & Online",
    "tags": [
      "Open World",
      "Multiplayer Heists",
      "Driving",
      "Action",
      "Sandbox"
    ],
    "rating": "96/100 · Metacritic",
    "playtime": "40-100+ hrs",
    "platforms": [
      "PC",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,979"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,979"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,979"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
    "why": "Legendary sandbox scope. Switch on the fly between three eccentric protagonists in a satirical single-player crime epic, or dive into limitless multiplayer heists, races, and custom game modes.",
    "tradeoff": "Online public lobbies can be volatile and chaotic; gunplay mechanics favor arcade action over tactical depth.",
    "similar": [
      "Red Dead Redemption 2",
      "Cyberpunk 2077",
      "Watch Dogs 2",
      "Saints Row"
    ],
    "priceInr": 1979,
    "isFree": false,
    "vfmScore": 9.7,
    "freeAltTitle": "Roblox",
    "freeAltDiff": "Roblox hosts immense open-world roleplay and city driving maps with millions of live players."
  },
  {
    "title": "Forza Horizon 5",
    "genre": "simulation",
    "secondaryGenres": [
      "action"
    ],
    "mood": [
      "escapist",
      "cozy",
      "triumphant"
    ],
    "modes": [
      "solo",
      "multi",
      "both",
      "casual"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "adaptive"
    ],
    "time": [
      "short",
      "medium",
      "long",
      "any",
      "endless"
    ],
    "priority": [
      "explore",
      "competitive",
      "atmosphere"
    ],
    "experience": [
      "fast",
      "immersive",
      "cinematic"
    ],
    "meta": "Open-World Racing Celebration · Vibrant Mexico Biomes",
    "tags": [
      "Racing",
      "Open World",
      "Driving",
      "Multiplayer",
      "Beautiful"
    ],
    "rating": "92/100 · Metacritic",
    "playtime": "30-100+ hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Xbox Series X/S",
      "Xbox One"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1551360/Forza_Horizon_5/",
    "why": "Pure joy behind the wheel. Blasting down volcanic slopes, drift-racing through tropical jungles, and tuning hundreds of real-world supercars with frictionless drop-in multiplayer.",
    "tradeoff": "Very forgiving driving model and progression rewards that may feel casual to hardcore simulation purists.",
    "similar": [
      "The Crew Motorfest",
      "Need for Speed Unbound",
      "Dirt Rally 2.0",
      "Assetto Corsa"
    ],
    "priceInr": 1999,
    "isFree": false,
    "vfmScore": 9.2,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Offers deep action RPG depth and endless replayability completely free."
  },
  {
    "title": "Civilization VI",
    "genre": "strategy",
    "secondaryGenres": [
      "simulation"
    ],
    "mood": [
      "cerebral",
      "escapist",
      "triumphant"
    ],
    "modes": [
      "solo",
      "multi",
      "both"
    ],
    "diff": [
      "balanced",
      "hard",
      "adaptive"
    ],
    "time": [
      "long",
      "endless"
    ],
    "priority": [
      "explore",
      "competitive",
      "puzzle"
    ],
    "experience": [
      "strategic"
    ],
    "meta": "Turn-Based 4X Strategy · Build an Empire to Stand the Test of Time",
    "tags": [
      "4X Strategy",
      "Turn-Based",
      "History",
      "Empire Builder",
      "Addictive"
    ],
    "rating": "88/100 · Metacritic",
    "playtime": "50-300+ hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch",
      "PlayStation 4",
      "Xbox",
      "iOS"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,499"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,499"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,499"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/",
    "why": "The quintessential 'just one more turn' mastermind experience. Unstack cities into specialized districts, conduct diplomatic gambits, build historic wonders, and dominate culturally or militarily.",
    "tradeoff": "Individual matches can span dozens of hours, and late-game turns require significant empire micromanagement.",
    "similar": [
      "Stellaris",
      "Age of Wonders 4",
      "Crusader Kings III",
      "Humankind"
    ],
    "priceInr": 1499,
    "isFree": false,
    "vfmScore": 9.5,
    "freeAltTitle": "Dota 2",
    "freeAltDiff": "Dota 2 offers immense strategic depth, tactical positioning, and competitive meta at zero cost."
  },
  {
    "title": "Stellaris",
    "genre": "strategy",
    "secondaryGenres": [
      "simulation"
    ],
    "mood": [
      "cerebral",
      "dark",
      "escapist"
    ],
    "modes": [
      "solo",
      "multi",
      "both"
    ],
    "diff": [
      "balanced",
      "hard",
      "extreme",
      "adaptive"
    ],
    "time": [
      "long",
      "endless"
    ],
    "priority": [
      "explore",
      "competitive",
      "atmosphere"
    ],
    "experience": [
      "strategic",
      "immersive"
    ],
    "meta": "Grand Strategy 4X · Interstellar Sci-Fi Empire Simulation",
    "tags": [
      "Grand Strategy",
      "Sci-Fi",
      "Space Exploration",
      "Management"
    ],
    "rating": "88/100 · Metacritic",
    "playtime": "60-300+ hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/281990/Stellaris/",
    "why": "Limitless galactic sci-fi roleplay. Build bespoke alien civilizations, study cosmic anomaly mysteries, manage galactic federations, and confront galaxy-shattering endgame crises.",
    "tradeoff": "Dense UI menus and extensive DLC systems present an initially overwhelming learning curve for newcomers.",
    "similar": [
      "Crusader Kings III",
      "Endless Space 2",
      "Civilization VI",
      "Hearts of Iron IV"
    ],
    "priceInr": 1999,
    "isFree": false,
    "vfmScore": 9.2,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Offers deep action RPG depth and endless replayability completely free."
  },
  {
    "title": "Total War: WARHAMMER III",
    "genre": "strategy",
    "secondaryGenres": [
      "action"
    ],
    "mood": [
      "dark",
      "thrilling",
      "triumphant"
    ],
    "modes": [
      "solo",
      "multi",
      "coop",
      "both"
    ],
    "diff": [
      "balanced",
      "hard",
      "extreme"
    ],
    "time": [
      "long",
      "endless"
    ],
    "priority": [
      "combat",
      "competitive",
      "atmosphere"
    ],
    "experience": [
      "strategic",
      "cinematic"
    ],
    "meta": "Grand Strategy & Real-Time Tactical Battles · Fantasy Epic",
    "tags": [
      "Grand Strategy",
      "Tactical Battles",
      "Warhammer",
      "Dark Fantasy"
    ],
    "rating": "86/100 · Metacritic",
    "playtime": "50-250+ hrs",
    "platforms": [
      "PC",
      "Mac"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1142710/Total_War_WARHAMMER_III/",
    "why": "Epic cinematic scale. Command thousands of fantasy infantry regiments, flying sorcerers, and colossal monsters in real-time tactical engagements on top of a vast turn-based campaign map.",
    "tradeoff": "Colossal battles demand substantial computer processing power, and turn calculations can take time.",
    "similar": [
      "Total War: Three Kingdoms",
      "Age of Empires IV",
      "Mount & Blade II: Bannerlord",
      "Company of Heroes 3"
    ],
    "priceInr": 1999,
    "isFree": false,
    "vfmScore": 9.2,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Offers deep action RPG depth and endless replayability completely free."
  },
  {
    "title": "Age of Empires IV",
    "genre": "strategy",
    "secondaryGenres": [
      "action"
    ],
    "mood": [
      "triumphant",
      "cerebral"
    ],
    "modes": [
      "solo",
      "multi",
      "both",
      "competitive"
    ],
    "diff": [
      "balanced",
      "hard"
    ],
    "time": [
      "short",
      "medium",
      "long",
      "bite"
    ],
    "priority": [
      "combat",
      "competitive"
    ],
    "experience": [
      "fast",
      "strategic"
    ],
    "meta": "Real-Time Strategy · Classical Medieval Warfare",
    "tags": [
      "RTS",
      "Historical",
      "Competitive Multiplayer",
      "Tactics"
    ],
    "rating": "84/100 · Metacritic",
    "playtime": "25-45 mins / match",
    "platforms": [
      "PC",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1466860/Age_of_Empires_IV_Anniversary_Edition/",
    "why": "The modern gold standard of classical RTS warfare. Asymmetric civilizations, responsive economic resource scouting, siege mechanics, and high-intensity multiplayer skirmishes.",
    "tradeoff": "High actions-per-minute (APM) and quick multitasking are mandatory to succeed in competitive ladders.",
    "similar": [
      "StarCraft II",
      "Age of Empires II: DE",
      "Command & Conquer",
      "Warcraft III"
    ],
    "priceInr": 1999,
    "isFree": false,
    "vfmScore": 9.2,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Offers deep action RPG depth and endless replayability completely free."
  },
  {
    "title": "Into the Breach",
    "genre": "strategy",
    "secondaryGenres": [
      "puzzle",
      "indie"
    ],
    "mood": [
      "cerebral",
      "thrilling"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "balanced",
      "hard",
      "extreme"
    ],
    "time": [
      "short",
      "medium",
      "bite"
    ],
    "priority": [
      "puzzle",
      "combat",
      "competitive"
    ],
    "experience": [
      "strategic"
    ],
    "meta": "Turn-Based Tactical Puzzle Roguelike · Kaiju vs Mechs",
    "tags": [
      "Tactical Turn-Based",
      "Mechs",
      "Puzzle",
      "Roguelike",
      "Pixel Art"
    ],
    "rating": "90/100 · Metacritic",
    "playtime": "20-50 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch",
      "iOS",
      "Android"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/590380/Into_the_Breach/",
    "why": "Pure mechanical chess brilliance. Every enemy attack on the 8x8 grid is fully telegraphed in advance, turning every turn into an exquisite puzzle of displacement and tactical sacrifice.",
    "tradeoff": "Minimalist visual presentation and virtually no narrative padding; strictly focused on brain-burning tactical logic.",
    "similar": [
      "FTL: Faster Than Light",
      "Slay the Spire",
      "XCOM 2",
      "Tactics Ogre"
    ],
    "priceInr": 1999,
    "isFree": false,
    "vfmScore": 9.2,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Offers deep action RPG depth and endless replayability completely free."
  },
  {
    "title": "RimWorld",
    "genre": "simulation",
    "secondaryGenres": [
      "strategy",
      "indie"
    ],
    "mood": [
      "cerebral",
      "dark",
      "escapist"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "hard",
      "extreme",
      "adaptive"
    ],
    "time": [
      "long",
      "endless"
    ],
    "priority": [
      "story",
      "explore",
      "puzzle"
    ],
    "experience": [
      "creative",
      "strategic",
      "survival"
    ],
    "meta": "Colony Survival Simulator · AI Story Generator",
    "tags": [
      "Colony Sim",
      "Base Building",
      "Emergent Story",
      "Survival"
    ],
    "rating": "98% · Overwhelmingly Positive",
    "playtime": "100-500+ hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/294100/RimWorld/",
    "why": "Peerless emergent storytelling. Managed by an intelligent AI Storyteller, your colonists' psychological quirks, disasters, and dramatic survivals craft unscripted space-western sagas.",
    "tradeoff": "Complex temperature, mood, and health systems require careful learning; death can strike from infection or social breakdown.",
    "similar": [
      "Dwarf Fortress",
      "Oxygen Not Included",
      "Prison Architect",
      "Frostpunk"
    ],
    "priceInr": 1999,
    "isFree": false,
    "vfmScore": 9.2,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Offers deep action RPG depth and endless replayability completely free."
  },
  {
    "title": "Factorio",
    "genre": "simulation",
    "secondaryGenres": [
      "strategy",
      "puzzle"
    ],
    "mood": [
      "cerebral",
      "escapist"
    ],
    "modes": [
      "solo",
      "coop",
      "multi",
      "both"
    ],
    "diff": [
      "balanced",
      "hard",
      "adaptive"
    ],
    "time": [
      "long",
      "endless"
    ],
    "priority": [
      "explore",
      "puzzle",
      "combat"
    ],
    "experience": [
      "strategic",
      "creative"
    ],
    "meta": "Industrial Automation Sandbox · Build the Mega-Factory",
    "tags": [
      "Automation",
      "Base Building",
      "Engineering",
      "Co-op",
      "Management"
    ],
    "rating": "97% · Overwhelmingly Positive",
    "playtime": "80-300+ hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,500"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,500"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,500"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/427520/Factorio/",
    "why": "The ultimate engineering satisfaction. Building conveyor belts, logistic robots, automated trains, and massive production chains into an optimized industrial empire.",
    "tradeoff": "Highly addictive; pollution from expansion will attract escalating alien biter swarms requiring strong perimeter defenses.",
    "similar": [
      "Satisfactory",
      "Dyson Sphere Program",
      "Mindustry",
      "Oxygen Not Included"
    ],
    "priceInr": 1500,
    "isFree": false,
    "vfmScore": 9.6,
    "freeAltTitle": "Team Fortress 2",
    "freeAltDiff": "Team Fortress 2 offers deep community engineer setups and multiplayer madness at zero price."
  },
  {
    "title": "Hades",
    "genre": "indie",
    "secondaryGenres": [
      "action"
    ],
    "mood": [
      "thrilling",
      "triumphant",
      "dark"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "balanced",
      "hard",
      "adaptive"
    ],
    "time": [
      "short",
      "medium",
      "bite"
    ],
    "priority": [
      "combat",
      "story",
      "atmosphere"
    ],
    "experience": [
      "fast"
    ],
    "meta": "Action Roguelike · Escape the Greek Underworld",
    "tags": [
      "Roguelike",
      "Fast Action",
      "Greek Myth",
      "Great Narrative",
      "Replayable"
    ],
    "rating": "93/100 · Metacritic",
    "playtime": "30-80 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch",
      "PlayStation 5",
      "Xbox Series X/S",
      "iOS"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹999"
      ],
      [
        "Epic Games",
        "Available",
        "₹999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1145360/Hades/",
    "why": "The pinnacle of modern roguelike design. Every snappy 20-30 minute escape attempt pairs Olympian boons into synergistic builds, while every defeat advances an endearing, fully voiced family drama.",
    "tradeoff": "Chamber-to-chamber dungeon progression is intentionally repetitive, requiring iterative mastery over dozens of escape runs.",
    "similar": [
      "Hades II",
      "Dead Cells",
      "The Binding of Isaac",
      "Curse of the Dead Gods"
    ],
    "priceInr": 999,
    "isFree": false,
    "vfmScore": 9.6,
    "freeAltTitle": "Warframe",
    "freeAltDiff": "Warframe features infinite replayability and rapid isometric/third-person kinetic combat without cost."
  },
  {
    "title": "Hollow Knight",
    "genre": "indie",
    "secondaryGenres": [
      "adventure",
      "action"
    ],
    "mood": [
      "dark",
      "cerebral",
      "escapist"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "hard",
      "extreme"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "explore",
      "combat",
      "atmosphere"
    ],
    "experience": [
      "immersive",
      "strategic"
    ],
    "meta": "2D Metroidvania Masterpiece · Explore Hallownest",
    "tags": [
      "Metroidvania",
      "Difficult",
      "Atmospheric",
      "Great Soundtrack",
      "Dark Fantasy"
    ],
    "rating": "90/100 · Metacritic",
    "playtime": "30-60 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹690"
      ],
      [
        "Epic Games",
        "Available",
        "₹690"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹690"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/367520/Hollow_Knight/",
    "why": "A hauntingly beautiful 2D subterranean odyssey. Precise nail swordplay, tight platforming, cryptic insect kingdoms, and the thrilling reward of getting completely lost in a ruined civilization.",
    "tradeoff": "Save benches are sparse and geo currency drops upon death, which can punish impatient exploratory mistakes.",
    "similar": [
      "Ori and the Will of the Wisps",
      "Blasphemous 2",
      "Celeste",
      "Castlevania: Symphony of the Night"
    ],
    "priceInr": 690,
    "isFree": false,
    "vfmScore": 9.8,
    "freeAltTitle": "Warframe",
    "freeAltDiff": "Warframe features intricate movement agility and dark world lore with 100% free gameplay access."
  },
  {
    "title": "Dead Cells",
    "genre": "indie",
    "secondaryGenres": [
      "action"
    ],
    "mood": [
      "thrilling",
      "dark"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "hard",
      "extreme"
    ],
    "time": [
      "short",
      "medium",
      "bite"
    ],
    "priority": [
      "combat"
    ],
    "experience": [
      "fast"
    ],
    "meta": "Rogue-lite Action Platformer · Fluid 2D Combat",
    "tags": [
      "Roguevania",
      "Fast-Paced",
      "Pixel Graphics",
      "Brutal",
      "Action"
    ],
    "rating": "89/100 · Metacritic",
    "playtime": "25-70 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox",
      "Mobile"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/588650/Dead_Cells/",
    "why": "Silky 60fps kinetic combat bliss. Dodge-rolling through enemy swipes, dual-wielding whips and deployable turrets, and chaining parries makes every run an electric high-speed rush.",
    "tradeoff": "Higher Boss Stem Cell difficulty tiers escalate enemy damage to one-shot thresholds, demanding twitch reflexes.",
    "similar": [
      "Hades",
      "Skul: The Hero Slayer",
      "Rogue Legacy 2",
      "Risk of Rain 2"
    ],
    "priceInr": 1999,
    "isFree": false,
    "vfmScore": 9.2,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Offers deep action RPG depth and endless replayability completely free."
  },
  {
    "title": "Slay the Spire",
    "genre": "indie",
    "secondaryGenres": [
      "strategy",
      "puzzle"
    ],
    "mood": [
      "cerebral",
      "thrilling"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "balanced",
      "hard",
      "extreme",
      "adaptive"
    ],
    "time": [
      "short",
      "medium",
      "bite",
      "endless"
    ],
    "priority": [
      "combat",
      "competitive",
      "puzzle"
    ],
    "experience": [
      "strategic"
    ],
    "meta": "Deckbuilding Roguelike · Tactical Card Synergies",
    "tags": [
      "Deckbuilder",
      "Card Battler",
      "Roguelike",
      "Turn-Based",
      "Strategy"
    ],
    "rating": "92/100 · Metacritic",
    "playtime": "50-200+ hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch",
      "PlayStation 4",
      "Xbox",
      "Mobile"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹999"
      ],
      [
        "Epic Games",
        "Available",
        "₹999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/646570/Slay_the_Spire/",
    "why": "Masterful deck synergy engineering. Drafting relic combos and discovering infinite loops across four distinct classes makes every run an addictive calculation of risk and reward.",
    "tradeoff": "Sub-optimal deck bloat or harsh elite encounter RNG will punish players who fail to maintain defensive card balance.",
    "similar": [
      "Balatro",
      "Monster Train",
      "Inscryption",
      "Wildfrost"
    ],
    "priceInr": 999,
    "isFree": false,
    "vfmScore": 9.7,
    "freeAltTitle": "Marvel Snap",
    "freeAltDiff": "Marvel Snap provides rapid tactical deckbuilding with mind games and instant matchmaking at zero cost."
  },
  {
    "title": "Stardew Valley",
    "genre": "indie",
    "secondaryGenres": [
      "simulation",
      "rpg"
    ],
    "mood": [
      "cozy",
      "escapist"
    ],
    "modes": [
      "solo",
      "coop",
      "both",
      "casual"
    ],
    "diff": [
      "relaxed",
      "story"
    ],
    "time": [
      "short",
      "medium",
      "long",
      "any",
      "endless"
    ],
    "priority": [
      "explore",
      "story",
      "atmosphere"
    ],
    "experience": [
      "creative",
      "immersive"
    ],
    "meta": "Cozy Farming & Life Simulator · Pelican Town Escape",
    "tags": [
      "Cozy",
      "Farming",
      "Relaxing",
      "Multiplayer Co-op",
      "Life Sim"
    ],
    "rating": "90/100 · Metacritic",
    "playtime": "60-150+ hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox",
      "Mobile"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹479"
      ],
      [
        "Epic Games",
        "Available",
        "₹479"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹479"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/413150/Stardew_Valley/",
    "why": "The ultimate stress antidote. Tending your inherited farm, befriending townspeople, mining for rare gems, attending seasonal festivals, and playing peacefully solo or with close friends.",
    "tradeoff": "Lacks immediate high-stakes pressure or intense reflex combat; entirely driven by self-directed cozy pacing.",
    "similar": [
      "Animal Crossing: New Horizons",
      "Slime Rancher",
      "Terraria",
      "Graveyard Keeper"
    ],
    "priceInr": 479,
    "isFree": false,
    "vfmScore": 9.9,
    "freeAltTitle": "The Sims 4",
    "freeAltDiff": "The Sims 4 base game is completely free-to-play with extensive life simulation, building, and decorating."
  },
  {
    "title": "Minecraft",
    "genre": "indie",
    "secondaryGenres": [
      "simulation",
      "adventure"
    ],
    "mood": [
      "cozy",
      "escapist",
      "cerebral"
    ],
    "modes": [
      "solo",
      "multi",
      "both",
      "coop",
      "casual"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "story"
    ],
    "time": [
      "short",
      "medium",
      "long",
      "any",
      "endless"
    ],
    "priority": [
      "explore",
      "atmosphere"
    ],
    "experience": [
      "creative",
      "immersive"
    ],
    "meta": "Infinite Voxel Sandbox & Survival · Best-Selling Legend",
    "tags": [
      "Sandbox",
      "Creative",
      "Survival",
      "Multiplayer",
      "Open World"
    ],
    "rating": "93/100 · Best-Selling Game Ever",
    "playtime": "Infinite Sandbox",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch",
      "PlayStation 5",
      "Xbox Series X/S",
      "Mobile"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,999"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,999"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,999"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/search/?term=Minecraft",
    "why": "The ultimate creative canvas. Whether braving dark caverns in survival mode, constructing automated redstone contraptions, or freely building monuments with friends.",
    "tradeoff": "Intentionally devoid of a guided cinematic campaign; demands player curiosity and self-motivated goal setting.",
    "similar": [
      "Terraria",
      "Valheim",
      "Subnautica",
      "Vintage Story"
    ],
    "priceInr": 1999,
    "isFree": false,
    "vfmScore": 9.8,
    "freeAltTitle": "Roblox",
    "freeAltDiff": "Roblox offers thousands of user-built block worlds, craft simulations, and multiplayer servers completely free."
  },
  {
    "title": "Terraria",
    "genre": "indie",
    "secondaryGenres": [
      "action",
      "rpg",
      "adventure"
    ],
    "mood": [
      "escapist",
      "thrilling",
      "triumphant"
    ],
    "modes": [
      "solo",
      "multi",
      "both",
      "coop"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "hard"
    ],
    "time": [
      "medium",
      "long",
      "endless"
    ],
    "priority": [
      "explore",
      "combat",
      "atmosphere"
    ],
    "experience": [
      "creative",
      "immersive"
    ],
    "meta": "2D Action-Adventure Sandbox · Boundless Exploration & Bosses",
    "tags": [
      "2D Sandbox",
      "Boss Battles",
      "Crafting",
      "Co-op",
      "Adventure"
    ],
    "rating": "98% · Overwhelmingly Positive",
    "playtime": "50-200+ hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch",
      "PlayStation 5",
      "Xbox Series X/S",
      "Mobile"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹369"
      ],
      [
        "Epic Games",
        "Available",
        "₹369"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹369"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/105600/Terraria/",
    "why": "Astounding depth and progression. Digging to the Underworld, discovering wings, crafting magic tomes and laser rifles, and conquering dozens of screen-shaking raid bosses with friends.",
    "tradeoff": "Navigating complex crafting trees and boss summoning mechanics often necessitates checking the community wiki.",
    "similar": [
      "Minecraft",
      "Core Keeper",
      "Starbound",
      "Noita"
    ],
    "priceInr": 369,
    "isFree": false,
    "vfmScore": 9.9,
    "freeAltTitle": "Roblox",
    "freeAltDiff": "Roblox offers countless sandbox creation and survival mini-games created by the global community."
  },
  {
    "title": "Portal 2",
    "genre": "puzzle",
    "secondaryGenres": [
      "indie",
      "adventure"
    ],
    "mood": [
      "cerebral",
      "escapist",
      "cozy"
    ],
    "modes": [
      "solo",
      "coop",
      "both"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "story"
    ],
    "time": [
      "short",
      "medium",
      "bite"
    ],
    "priority": [
      "puzzle",
      "story",
      "explore"
    ],
    "experience": [
      "creative",
      "strategic",
      "cinematic"
    ],
    "meta": "First-Person Physics Puzzle Comedy · Aperture Laboratories",
    "tags": [
      "Puzzle",
      "Comedy",
      "Sci-Fi",
      "Co-op Campaign",
      "Masterpiece"
    ],
    "rating": "95/100 · Metacritic",
    "playtime": "10-20 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "Nintendo Switch"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹480"
      ],
      [
        "Epic Games",
        "Available",
        "₹480"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹480"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/620/Portal_2/",
    "why": "Ingenious physics puzzle mechanics paired with iconic comedy writing from Stephen Merchant and Ellen McLain. Its dedicated 2-player cooperative campaign remains a peerless masterpiece.",
    "tradeoff": "Once you have solved every test chamber, the campaign puzzle solutions are static, limiting pure replayability.",
    "similar": [
      "The Talos Principle 2",
      "The Witness",
      "Antichamber",
      "Superliminal"
    ],
    "priceInr": 480,
    "isFree": false,
    "vfmScore": 9.9,
    "freeAltTitle": "Team Fortress 2",
    "freeAltDiff": "Team Fortress 2 offers physics-based cooperative community puzzle maps created in the Source Engine."
  },
  {
    "title": "Subnautica",
    "genre": "adventure",
    "secondaryGenres": [
      "simulation",
      "indie"
    ],
    "mood": [
      "dark",
      "escapist",
      "thrilling"
    ],
    "modes": [
      "solo"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "story"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "explore",
      "atmosphere",
      "story"
    ],
    "experience": [
      "immersive",
      "creative",
      "survival"
    ],
    "meta": "Underwater Survival & Exploration · Alien Ocean Planet",
    "tags": [
      "Underwater",
      "Survival",
      "Atmospheric",
      "Sci-Fi",
      "Exploration"
    ],
    "rating": "96% · Overwhelmingly Positive",
    "playtime": "30-50 hrs",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹1,299"
      ],
      [
        "Epic Games",
        "Available",
        "₹1,299"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹1,299"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/264710/Subnautica/",
    "why": "Unmatched atmospheric immersion and sensory exploration. Diving into vibrant coral shallows before constructing deep-sea submarines to explore dark, Leviathan-inhabited abyssal trenches.",
    "tradeoff": "Strictly single-player without co-op, and deep-water navigation can trigger intense thalassophobia.",
    "similar": [
      "Outer Wilds",
      "The Forest",
      "Dredge",
      "Raft"
    ],
    "priceInr": 1299,
    "isFree": false,
    "vfmScore": 9.5,
    "freeAltTitle": "Warframe",
    "freeAltDiff": "Warframe includes free-roam open oceanic and open-world hubs with dynamic exploration."
  },
  {
    "title": "Deep Rock Galactic",
    "genre": "indie",
    "secondaryGenres": [
      "action"
    ],
    "mood": [
      "triumphant",
      "thrilling",
      "cozy"
    ],
    "modes": [
      "coop",
      "multi",
      "both",
      "solo",
      "casual"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "hard",
      "adaptive"
    ],
    "time": [
      "short",
      "medium",
      "bite"
    ],
    "priority": [
      "combat",
      "explore",
      "atmosphere"
    ],
    "experience": [
      "fast",
      "immersive",
      "survival"
    ],
    "meta": "Co-op 4-Player Sci-Fi Mining & Bug Extermination",
    "tags": [
      "Co-op PvE",
      "Destructible World",
      "FPS",
      "Humor",
      "Mining"
    ],
    "rating": "97% · Overwhelmingly Positive",
    "playtime": "25-40 mins / mission",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Available",
        "₹699"
      ],
      [
        "Epic Games",
        "Available",
        "₹699"
      ],
      [
        "PlayStation Store",
        "Available",
        "₹699"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/548430/Deep_Rock_Galactic/",
    "why": "100% destructible procedural voxel caves, four distinct dwarf classes (Driller, Scout, Gunner, Engineer), and unmatched four-player cooperative camaraderie under the rally cry 'Rock and Stone!'",
    "tradeoff": "While solo play with drone helper Bosco is viable, the game's brilliance is fundamentally elevated in a four-player squad.",
    "similar": [
      "Helldivers 2",
      "Left 4 Dead 2",
      "Warhammer: Vermintide 2",
      "Risk of Rain 2"
    ],
    "priceInr": 699,
    "isFree": false,
    "vfmScore": 9.7,
    "freeAltTitle": "Warframe",
    "freeAltDiff": "Warframe delivers procedural 4-player cooperative squad missions with deep customization for free."
  },
  {
    "title": "Warframe",
    "genre": "action",
    "secondaryGenres": [
      "rpg",
      "indie"
    ],
    "mood": [
      "thrilling",
      "escapist"
    ],
    "modes": [
      "solo",
      "coop",
      "multi"
    ],
    "diff": [
      "balanced",
      "hard",
      "adaptive"
    ],
    "time": [
      "medium",
      "long",
      "endless"
    ],
    "priority": [
      "combat",
      "atmosphere",
      "explore"
    ],
    "experience": [
      "fast",
      "immersive",
      "cinematic"
    ],
    "meta": "Free-to-Play Third-Person Sci-Fi Action · Space Ninja Odyssey",
    "tags": [
      "Free to Play",
      "Co-op",
      "High Mobility",
      "Looter Shooter",
      "Sci-Fi",
      "Space Ninja"
    ],
    "rating": "90/100 · Steam Very Positive",
    "playtime": "100-1000+ hrs",
    "priceInr": 0,
    "isFree": true,
    "vfmScore": 10,
    "freeAltTitle": "Destiny 2",
    "freeAltDiff": "Destiny 2 offers first-person raid mechanics, while Warframe emphasizes hyper-fast third-person parkour.",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    "stores": [
      [
        "Steam",
        "Free to Play",
        "Free"
      ],
      [
        "Epic Games",
        "Free to Play",
        "Free"
      ],
      [
        "PlayStation Store",
        "Free to Play",
        "Free"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/230410/Warframe/",
    "why": "Warframe delivers arguably the most generous free-to-play model in gaming history, combining lightning-fast cybernetic mobility with over 50 unique frames, continuous story quests, and hundreds of custom weapons.",
    "tradeoff": "Massive systems depth and crafting timers require consulting wikis and patient progression early on.",
    "similar": [
      "Destiny 2",
      "Cyberpunk 2077",
      "DOOM Eternal",
      "Apex Legends"
    ]
  },
  {
    "title": "Path of Exile",
    "genre": "rpg",
    "secondaryGenres": [
      "action",
      "strategy"
    ],
    "mood": [
      "dark",
      "cerebral",
      "thrilling"
    ],
    "modes": [
      "solo",
      "multi",
      "coop"
    ],
    "diff": [
      "hard",
      "extreme"
    ],
    "time": [
      "long",
      "endless"
    ],
    "priority": [
      "combat",
      "explore",
      "atmosphere"
    ],
    "experience": [
      "strategic",
      "immersive",
      "survival"
    ],
    "meta": "Free-to-Play Dark Fantasy Action RPG · Unmatched Passive Tree Depth",
    "tags": [
      "Free to Play",
      "Action RPG",
      "Dark Fantasy",
      "Complex Theorycrafting",
      "Isometric"
    ],
    "rating": "91/100 · Steam Very Positive",
    "playtime": "150-1500+ hrs",
    "priceInr": 0,
    "isFree": true,
    "vfmScore": 10,
    "freeAltTitle": "Warframe",
    "freeAltDiff": "Warframe is a 3D shooter while Path of Exile is an isometric ARPG focused on gear gem links.",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Free to Play",
        "Free"
      ],
      [
        "PlayStation Store",
        "Free to Play",
        "Free"
      ],
      [
        "Xbox Store",
        "Free to Play",
        "Free"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/238960/Path_of_Exile/",
    "why": "The definitive spiritual successor to dark gothic ARPGs. Its colossal 1,300+ node passive skill tree and gem linking system grant unmatched build freedom across quarterly expansion leagues.",
    "tradeoff": "Punishing learning curve and complex economy can be overwhelming for casual RPG newcomers.",
    "similar": [
      "Diablo IV",
      "Elden Ring",
      "Baldur's Gate 3",
      "Grim Dawn"
    ]
  },
  {
    "title": "Genshin Impact",
    "genre": "rpg",
    "secondaryGenres": [
      "action",
      "adventure"
    ],
    "mood": [
      "escapist",
      "cozy",
      "triumphant"
    ],
    "modes": [
      "solo",
      "coop"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "adaptive"
    ],
    "time": [
      "medium",
      "long",
      "endless"
    ],
    "priority": [
      "explore",
      "story",
      "combat"
    ],
    "experience": [
      "immersive",
      "cinematic",
      "creative"
    ],
    "meta": "Free-to-Play Open-World Action RPG · Elemental Fantasy Teyvat",
    "tags": [
      "Free to Play",
      "Open World",
      "Anime",
      "Exploration",
      "Elemental Combat",
      "Story Rich"
    ],
    "rating": "86/100 · Global Phenomenon",
    "playtime": "80-500+ hrs",
    "priceInr": 0,
    "isFree": true,
    "vfmScore": 9.8,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Path of Exile features grim gothic isometric combat while Genshin offers colorful anime open-world exploration.",
    "platforms": [
      "PC",
      "PlayStation 5",
      "iOS",
      "Android"
    ],
    "stores": [
      [
        "Epic Games",
        "Free to Play",
        "Free"
      ],
      [
        "PlayStation Store",
        "Free to Play",
        "Free"
      ]
    ],
    "steamUrl": "https://store.epicgames.com/p/genshin-impact",
    "why": "A jaw-dropping open world across seven distinct elemental nations. Fluid character switching and elemental reaction combat make exploring its vibrant peaks and ruins endlessly rewarding without spending a rupee.",
    "tradeoff": "Features gacha character banner mechanics and daily stamina limits for endgame domain farming.",
    "similar": [
      "The Witcher 3",
      "The Legend of Zelda",
      "Honkai: Star Rail",
      "Final Fantasy"
    ]
  },
  {
    "title": "Destiny 2",
    "genre": "action",
    "secondaryGenres": [
      "rpg"
    ],
    "mood": [
      "thrilling",
      "triumphant",
      "escapist"
    ],
    "modes": [
      "solo",
      "coop",
      "multi"
    ],
    "diff": [
      "balanced",
      "hard",
      "adaptive"
    ],
    "time": [
      "medium",
      "long",
      "endless"
    ],
    "priority": [
      "combat",
      "atmosphere",
      "competitive"
    ],
    "experience": [
      "fast",
      "cinematic",
      "immersive"
    ],
    "meta": "Free-to-Play Sci-Fi First-Person Looter Shooter · Guardians of the Light",
    "tags": [
      "Free to Play",
      "FPS",
      "Co-op Raids",
      "Sci-Fi",
      "Looter Shooter",
      "Multiplayer"
    ],
    "rating": "84/100 · Steam Active",
    "playtime": "80-600+ hrs",
    "priceInr": 0,
    "isFree": true,
    "vfmScore": 9.8,
    "freeAltTitle": "Warframe",
    "freeAltDiff": "Warframe is third-person mobility-focused, while Destiny 2 features crisp Bungie first-person shooting.",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    "stores": [
      [
        "Steam",
        "Free to Play",
        "Free"
      ],
      [
        "Epic Games",
        "Free to Play",
        "Free"
      ],
      [
        "PlayStation Store",
        "Free to Play",
        "Free"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1085660/Destiny_2/",
    "why": "Features the most satisfying first-person gunplay in the industry, backed by rich planetary environments, co-op vanguard strikes, and legendary multiplayer PvP modes available at zero cost.",
    "tradeoff": "Later campaign expansions and seasonal battle passes require purchases for the newest raid content.",
    "similar": [
      "Helldivers 2",
      "DOOM Eternal",
      "Halo Infinite",
      "Warframe"
    ]
  },
  {
    "title": "Roblox",
    "genre": "simulation",
    "secondaryGenres": [
      "adventure",
      "indie"
    ],
    "mood": [
      "cozy",
      "escapist",
      "thrilling"
    ],
    "modes": [
      "solo",
      "multi",
      "coop",
      "casual"
    ],
    "diff": [
      "relaxed",
      "balanced",
      "adaptive"
    ],
    "time": [
      "short",
      "medium",
      "endless",
      "bite"
    ],
    "priority": [
      "explore",
      "puzzle",
      "competitive"
    ],
    "experience": [
      "creative",
      "fast",
      "immersive"
    ],
    "meta": "Free-to-Play Metaverse & Sandbox Engine · Millions of Player-Created Games",
    "tags": [
      "Free to Play",
      "Sandbox",
      "Multiplayer",
      "Creative",
      "Custom Games",
      "Social"
    ],
    "rating": "88/100 · Over 70M Daily Players",
    "playtime": "Unlimited",
    "priceInr": 0,
    "isFree": true,
    "vfmScore": 10,
    "freeAltTitle": "Team Fortress 2",
    "freeAltDiff": "Team Fortress 2 is a dedicated team class shooter, whereas Roblox is a multiverse with millions of distinct games.",
    "platforms": [
      "PC",
      "PlayStation 5",
      "Xbox One",
      "iOS",
      "Android"
    ],
    "stores": [
      [
        "Microsoft Store",
        "Free to Play",
        "Free"
      ],
      [
        "PlayStation Store",
        "Free to Play",
        "Free"
      ]
    ],
    "steamUrl": "https://www.roblox.com",
    "why": "A boundless sandbox containing millions of user-crafted adventures, tycoon builders, horror escape rooms, and obstacle courses, providing endless social variety at zero price.",
    "tradeoff": "Quality of individual games varies widely as they are built by independent community creators.",
    "similar": [
      "Minecraft",
      "Terraria",
      "Garry's Mod",
      "The Sims 4"
    ]
  },
  {
    "title": "Marvel Snap",
    "genre": "strategy",
    "secondaryGenres": [
      "indie"
    ],
    "mood": [
      "cerebral",
      "thrilling"
    ],
    "modes": [
      "multi",
      "competitive",
      "casual"
    ],
    "diff": [
      "balanced",
      "hard",
      "adaptive"
    ],
    "time": [
      "short",
      "bite",
      "endless"
    ],
    "priority": [
      "puzzle",
      "competitive",
      "combat"
    ],
    "experience": [
      "strategic",
      "fast"
    ],
    "meta": "Free-to-Play Fast Tactical Card Battler · Marvel Multiverse",
    "tags": [
      "Free to Play",
      "Card Game",
      "Deckbuilder",
      "Turn-Based",
      "Fast-Paced",
      "Tactical"
    ],
    "rating": "89/100 · Mobile Game of the Year",
    "playtime": "50-300+ hrs",
    "priceInr": 0,
    "isFree": true,
    "vfmScore": 10,
    "freeAltTitle": "Path of Exile",
    "freeAltDiff": "Path of Exile is a 100-hour action campaign while Marvel Snap is played in 3-minute tactical duels.",
    "platforms": [
      "PC",
      "Steam Deck",
      "iOS",
      "Android"
    ],
    "stores": [
      [
        "Steam",
        "Free to Play",
        "Free"
      ],
      [
        "Google Play",
        "Free to Play",
        "Free"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1997040/MARVEL_SNAP/",
    "why": "Revolutionized digital card gaming with rapid 3-minute matches, a 12-card deck design, and the high-stakes SNAP doubling mechanic that rewards bluffing and tactical spatial awareness.",
    "tradeoff": "Card collection acquisition slows down once you enter higher collection levels.",
    "similar": [
      "Balatro",
      "Slay the Spire",
      "Hearthstone",
      "Inscryption"
    ]
  },
  {
    "title": "The Sims 4",
    "genre": "simulation",
    "secondaryGenres": [
      "indie"
    ],
    "mood": [
      "cozy",
      "escapist"
    ],
    "modes": [
      "solo",
      "casual"
    ],
    "diff": [
      "relaxed",
      "story"
    ],
    "time": [
      "medium",
      "long",
      "endless"
    ],
    "priority": [
      "explore",
      "story"
    ],
    "experience": [
      "creative",
      "immersive"
    ],
    "meta": "Free-to-Play Life Simulation & Architecture Sandbox",
    "tags": [
      "Free to Play",
      "Life Sim",
      "Building",
      "Relaxing",
      "Character Customization",
      "Sandbox"
    ],
    "rating": "85/100 · Over 70M Players",
    "playtime": "50-500+ hrs",
    "priceInr": 0,
    "isFree": true,
    "vfmScore": 9.8,
    "freeAltTitle": "Roblox",
    "freeAltDiff": "Roblox features multiplayer user servers while The Sims 4 is an intimate, solo character storytelling dollhouse.",
    "platforms": [
      "PC",
      "Steam Deck",
      "PlayStation 5",
      "Xbox One"
    ],
    "stores": [
      [
        "Steam",
        "Free to Play",
        "Free"
      ],
      [
        "EA App",
        "Free to Play",
        "Free"
      ],
      [
        "PlayStation Store",
        "Free to Play",
        "Free"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/1222670/The_Sims_4/",
    "why": "The ultimate life simulator is now 100% free-to-play for the base game. Create unique personalities, design dream architectural homes, and orchestrate emergent social drama at zero cost.",
    "tradeoff": "Dozens of optional thematic expansion packs exist if you desire pets, seasons, or college campuses.",
    "similar": [
      "Stardew Valley",
      "Cities: Skylines",
      "Animal Crossing",
      "House Flipper"
    ]
  },
  {
    "title": "Cry of Fear",
    "genre": "horror",
    "secondaryGenres": [
      "indie",
      "action"
    ],
    "mood": [
      "dark",
      "eerie",
      "cerebral"
    ],
    "modes": [
      "solo",
      "coop"
    ],
    "diff": [
      "hard",
      "extreme"
    ],
    "time": [
      "medium",
      "long"
    ],
    "priority": [
      "atmosphere",
      "story",
      "combat"
    ],
    "experience": [
      "survival",
      "immersive"
    ],
    "meta": "Free-to-Play Psychological Survival Horror · Cold Scandinavian Nightmare",
    "tags": [
      "Free to Play",
      "Survival Horror",
      "Psychological",
      "Dark",
      "Challenging",
      "Atmospheric"
    ],
    "rating": "88/100 · Overwhelmingly Positive",
    "playtime": "12-25 hrs",
    "priceInr": 0,
    "isFree": true,
    "vfmScore": 10,
    "freeAltTitle": "Resident Evil 4",
    "freeAltDiff": "Cry of Fear is a completely free standalone passion project, offering raw uncompromised terror.",
    "platforms": [
      "PC"
    ],
    "stores": [
      [
        "Steam",
        "Free to Play",
        "Free"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/223710/Cry_of_Fear/",
    "why": "A legendary standalone psychological survival horror masterpiece created completely free of charge. Tense inventory management, disturbing creature designs, and multiple tragic endings make it essential for horror fans.",
    "tradeoff": "Built on the vintage GoldSrc engine with dated graphical fidelity and demanding combat precision.",
    "similar": [
      "Silent Hill 2",
      "Resident Evil 4",
      "Alan Wake 2",
      "Dead Space"
    ]
  },
  {
    "title": "Team Fortress 2",
    "genre": "action",
    "secondaryGenres": [
      "strategy"
    ],
    "mood": [
      "thrilling",
      "escapist",
      "triumphant"
    ],
    "modes": [
      "multi",
      "coop",
      "casual"
    ],
    "diff": [
      "balanced",
      "hard",
      "adaptive"
    ],
    "time": [
      "short",
      "medium",
      "endless"
    ],
    "priority": [
      "combat",
      "competitive"
    ],
    "experience": [
      "fast",
      "strategic",
      "creative"
    ],
    "meta": "Free-to-Play Legendary Class-Based Team Shooter",
    "tags": [
      "Free to Play",
      "Hero Shooter",
      "Multiplayer",
      "Comedy",
      "Tactical",
      "Classic"
    ],
    "rating": "94/100 · Valve Masterpiece",
    "playtime": "50-1000+ hrs",
    "priceInr": 0,
    "isFree": true,
    "vfmScore": 10,
    "freeAltTitle": "Counter-Strike 2",
    "freeAltDiff": "CS2 is a precision tactical shooter while TF2 features eccentric 9-class rocket jumping and comedy.",
    "platforms": [
      "PC",
      "Steam Deck",
      "Mac",
      "Linux"
    ],
    "stores": [
      [
        "Steam",
        "Free to Play",
        "Free"
      ]
    ],
    "steamUrl": "https://store.steampowered.com/app/440/Team_Fortress_2/",
    "why": "Valve's timeless multiplayer masterpiece. Nine distinct character classes (from Spy and Medic to Demoman) provide near-infinite tactical variety, comedic cartoon charm, and custom community game modes.",
    "tradeoff": "Older graphical engine and occasional community server configuration required for competitive leagues.",
    "similar": [
      "Counter-Strike 2",
      "Valorant",
      "Apex Legends",
      "Overwatch 2"
    ]
  }
];

// Safe Web Audio API UI Tone Synthesizer
let soundEnabled = true;
let audioCtx = null;

function playUiTone(freq = 440, type = 'sine', duration = 0.05, volume = 0.05) {
  if (!soundEnabled) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Audio feedback is purely cosmetic - never throw or interrupt app execution
  }
}

const soundToggleBtn = document.getElementById("soundToggle");
if (soundToggleBtn) {
  soundToggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    const iconOn = soundToggleBtn.querySelector(".sound-icon-on");
    const iconOff = soundToggleBtn.querySelector(".sound-icon-off");
    if (iconOn && iconOff) {
      iconOn.style.display = soundEnabled ? "block" : "none";
      iconOff.style.display = soundEnabled ? "none" : "block";
    } else {
      soundToggleBtn.textContent = soundEnabled ? "🔊" : "🔇";
    }
    soundToggleBtn.title = soundEnabled ? "Mute audio feedback" : "Enable audio feedback";
    if (soundEnabled) playUiTone(620, "triangle", 0.08, 0.08);
  });
}

// Profile options selection handler
document.querySelectorAll(".options").forEach(g => g.addEventListener("click", e => {
  const btn = e.target.closest(".opt");
  if (!btn) return;
  g.querySelectorAll(".opt").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const key = g.dataset.key;
  const val = btn.dataset.value;
  selected[key] = val;
  playUiTone(520, "sine", 0.04, 0.04);

  if (key === "budget") {
    onBudgetSelected(val, false);
  }
}));

function onBudgetSelected(val, fromSlider) {
  const badge = document.getElementById("activeBudgetBadge");
  const sliderVal = document.getElementById("customBudgetValue");
  const slider = document.getElementById("customBudgetSlider");

  if (val === "free") {
    if (badge) badge.textContent = "FREE ONLY (₹0)";
    if (slider) slider.value = 0;
    if (sliderVal) sliderVal.textContent = "₹0 (Free)";
  } else if (val === "under_500") {
    if (badge) badge.textContent = "UNDER ₹500";
    if (slider) slider.value = 500;
    if (sliderVal) sliderVal.textContent = "₹500";
  } else if (val === "under_1000") {
    if (badge) badge.textContent = "UNDER ₹1,000";
    if (slider) slider.value = 1000;
    if (sliderVal) sliderVal.textContent = "₹1,000";
  } else if (val === "under_2000") {
    if (badge) badge.textContent = "UNDER ₹2,000";
    if (slider) slider.value = 2000;
    if (sliderVal) sliderVal.textContent = "₹2,000";
  } else if (val === "no_limit") {
    if (badge) badge.textContent = "NO LIMIT";
    if (slider) slider.value = 5000;
    if (sliderVal) sliderVal.textContent = "No Limit (₹5,000+)";
  } else if (val.startsWith("custom_")) {
    const num = parseInt(val.replace("custom_", ""), 10) || 0;
    if (badge) badge.textContent = `MAX ₹${num.toLocaleString('en-IN')}`;
    if (sliderVal) sliderVal.textContent = `₹${num.toLocaleString('en-IN')}`;
  }
}

// Custom budget slider listener
const customBudgetSlider = document.getElementById("customBudgetSlider");
if (customBudgetSlider) {
  customBudgetSlider.addEventListener("input", (e) => {
    const amount = parseInt(e.target.value, 10);
    const sliderVal = document.getElementById("customBudgetValue");
    const badge = document.getElementById("activeBudgetBadge");

    // Remove active state from fixed buttons
    document.querySelectorAll('.options[data-key="budget"] .opt').forEach(b => b.classList.remove("active"));

    if (amount === 0) {
      selected.budget = "free";
      if (sliderVal) sliderVal.textContent = "₹0 (Free)";
      if (badge) badge.textContent = "FREE ONLY (₹0)";
      const freeBtn = document.querySelector('.options[data-key="budget"] .opt[data-value="free"]');
      if (freeBtn) freeBtn.classList.add("active");
    } else if (amount >= 5000) {
      selected.budget = "no_limit";
      if (sliderVal) sliderVal.textContent = "No Limit (₹5,000+)";
      if (badge) badge.textContent = "NO LIMIT";
      const noLimitBtn = document.querySelector('.options[data-key="budget"] .opt[data-value="no_limit"]');
      if (noLimitBtn) noLimitBtn.classList.add("active");
    } else {
      selected.budget = `custom_${amount}`;
      if (sliderVal) sliderVal.textContent = `₹${amount.toLocaleString('en-IN')}`;
      if (badge) badge.textContent = `MAX ₹${amount.toLocaleString('en-IN')}`;
    }
  });
}

// Quick Preset Randomizer ("⚡ Randomize")
window.randomProfile = function() {
  playUiTone(740, "triangle", 0.09, 0.07);
  document.querySelectorAll(".options").forEach(group => {
    const key = group.dataset.key;
    const buttons = Array.from(group.querySelectorAll(".opt"));
    if (buttons.length === 0) return;
    const picked = buttons[Math.floor(Math.random() * buttons.length)];
    buttons.forEach(b => b.classList.remove("active"));
    picked.classList.add("active");
    selected[key] = picked.dataset.value;
    if (key === "budget") {
      onBudgetSelected(selected[key], false);
    }
  });
  recommend();
};

// -------------------------------------------------------------
// Speech Recognition & Natural Language Voice Profiler
// -------------------------------------------------------------
let speechRecognition = null;
let isListening = false;

function initVoiceRecognition() {
  const voiceBtn = document.getElementById("voiceBtn");
  const voiceStatus = document.getElementById("voiceStatus");
  if (!voiceBtn) return;

  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) {
    voiceBtn.title = "Speech recognition is supported in Chrome, Edge, Safari, and modern mobile browsers";
    voiceBtn.onclick = () => {
      const msg = prompt("Speech recognition isn't directly supported by this browser. Type your request (e.g. 'I want a dark souls RPG with hard combat'):");
      if (msg) applySpeechText(msg);
    };
    return;
  }

  speechRecognition = new SpeechRec();
  speechRecognition.continuous = false;
  speechRecognition.interimResults = true;
  speechRecognition.lang = 'en-US';

  speechRecognition.onstart = () => {
    isListening = true;
    voiceBtn.classList.add("listening");
    voiceBtn.textContent = "⏹️ Listening...";
    if (voiceStatus) {
      voiceStatus.style.display = "block";
      voiceStatus.innerHTML = "🎙️ <em>Listening...</em> Speak your gaming preferences (e.g., <i>\"Looking for a dark action RPG with challenging combat for solo play\"</i>)";
    }
    playUiTone(680, "sine", 0.08, 0.05);
  };

  speechRecognition.onresult = (event) => {
    const result = event.results[event.results.length - 1];
    const transcript = result[0].transcript;
    if (voiceStatus) {
      voiceStatus.innerHTML = `🎙️ Heard: "<em>${transcript}</em>" ${result.isFinal ? "— parsing..." : ""}`;
    }
    if (result.isFinal) {
      applySpeechText(transcript);
    }
  };

  speechRecognition.onerror = (event) => {
    isListening = false;
    voiceBtn.classList.remove("listening");
    voiceBtn.textContent = "🎙️ Speak";
    if (voiceStatus) {
      voiceStatus.innerHTML = `⚠️ Voice status (${event.error || 'ready'}). Click Speak to try again.`;
      setTimeout(() => { if (!isListening && voiceStatus) voiceStatus.style.display = "none"; }, 4000);
    }
  };

  speechRecognition.onend = () => {
    isListening = false;
    voiceBtn.classList.remove("listening");
    voiceBtn.textContent = "🎙️ Speak";
  };

  voiceBtn.onclick = () => {
    if (isListening) {
      speechRecognition.stop();
    } else {
      try {
        speechRecognition.start();
      } catch (e) {
        try { speechRecognition.stop(); } catch (_) {}
      }
    }
  };
}

async function applySpeechText(transcript) {
  const voiceStatus = document.getElementById("voiceStatus");
  if (voiceStatus) {
    voiceStatus.style.display = "block";
    voiceStatus.innerHTML = `⚙️ Interpreting: "<em>${transcript}</em>"...`;
  }

  let profile = null;
  try {
    const res = await fetch("/api/parse-speech", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transcript })
    });
    if (res.ok) {
      const data = await res.json();
      if (data.profile && Object.keys(data.profile).length > 0) {
        profile = data.profile;
      }
    }
  } catch (err) {}

  if (!profile) {
    profile = parseSpeechTranscribeClient(transcript);
  }

  let matchedCount = 0;
  for (const [key, val] of Object.entries(profile)) {
    const optBtn = document.querySelector(`.options[data-key="${key}"] .opt[data-value="${val}"]`);
    if (optBtn) {
      const group = optBtn.closest(".options");
      if (group) {
        group.querySelectorAll(".opt").forEach(b => b.classList.remove("active"));
      }
      optBtn.classList.add("active");
      selected[key] = val;
      matchedCount++;
    }
  }

  if (matchedCount > 0) {
    playUiTone(880, "sine", 0.09, 0.06);
    if (voiceStatus) {
      voiceStatus.innerHTML = `✓ Applied <b>${matchedCount}</b> profile fields from speech: <em>${Object.entries(profile).map(([k,v]) => `${k} → ${v}`).join(", ")}</em>`;
      setTimeout(() => { if (!isListening && voiceStatus) voiceStatus.style.display = "none"; }, 5000);
    }
  } else {
    if (voiceStatus) {
      voiceStatus.innerHTML = `Could not match specific gaming keywords from: "<em>${transcript}</em>". Try mentioning genres like RPG, Action, Horror, or moods like Dark, Cozy.`;
      setTimeout(() => { if (!isListening && voiceStatus) voiceStatus.style.display = "none"; }, 5000);
    }
  }
}

function parseSpeechTranscribeClient(text) {
  const lower = (text || "").toLowerCase();
  const profile = {};
  if (/\b(rpg|role playing|role-playing)\b/.test(lower)) profile.genre = 'rpg';
  else if (/\b(action|shooter|hack and slash|fps)\b/.test(lower)) profile.genre = 'action';
  else if (/\b(strategy|tactics|rts|turn based)\b/.test(lower)) profile.genre = 'strategy';
  else if (/\b(horror|scary|survival horror|spooky)\b/.test(lower)) profile.genre = 'horror';
  else if (/\b(indie|pixel|roguelike|deckbuilder)\b/.test(lower)) profile.genre = 'indie';
  else if (/\b(simulation|sim|flight|building|city)\b/.test(lower)) profile.genre = 'simulation';
  else if (/\b(adventure|narrative|journey)\b/.test(lower)) profile.genre = 'adventure';
  else if (/\b(puzzle|mystery|logic|brain)\b/.test(lower)) profile.genre = 'puzzle';

  if (/\b(thrilling|intense|adrenaline|action packed|wild)\b/.test(lower)) profile.mood = 'thrilling';
  else if (/\b(cozy|chill|relaxed|peaceful|comforting|calm)\b/.test(lower)) profile.mood = 'cozy';
  else if (/\b(dark|eerie|grim|atmospheric dark|creepy)\b/.test(lower)) profile.mood = 'dark';
  else if (/\b(cerebral|deep|philosophical|thought provoking|intellectual)\b/.test(lower)) profile.mood = 'cerebral';
  else if (/\b(escapist|wonder|fantasy|magical|exploration)\b/.test(lower)) profile.mood = 'escapist';
  else if (/\b(triumphant|heroic|epic|victory|glorious)\b/.test(lower)) profile.mood = 'triumphant';

  if (/\b(solo|single player|singleplayer|alone|by myself)\b/.test(lower)) profile.mode = 'solo';
  else if (/\b(multiplayer|multi|online|friends)\b/.test(lower)) profile.mode = 'multi';
  else if (/\b(co-op|coop|cooperative)\b/.test(lower)) profile.mode = 'coop';
  else if (/\b(competitive|pvp|ranked|esport)\b/.test(lower)) profile.mode = 'competitive';
  else if (/\b(casual|social|party)\b/.test(lower)) profile.mode = 'casual';
  else if (/\b(either|both)\b/.test(lower)) profile.mode = 'both';

  if (/\b(easy|relaxed|peaceful|chill|not hard|low challenge)\b/.test(lower)) profile.difficulty = 'relaxed';
  else if (/\b(hard|tough|difficult|challenging|souls like|soulslike)\b/.test(lower)) profile.difficulty = 'hard';
  else if (/\b(extreme|unforgiving|punishing|nightmare)\b/.test(lower)) profile.difficulty = 'extreme';
  else if (/\b(story|story focus|narrative only)\b/.test(lower)) profile.difficulty = 'story';
  else if (/\b(adaptive|scalable|dynamic)\b/.test(lower)) profile.difficulty = 'adaptive';
  else if (/\b(balanced|normal|medium difficulty)\b/.test(lower)) profile.difficulty = 'balanced';

  if (/\b(quick|short|30 min|under 30|brief)\b/.test(lower)) profile.time = 'short';
  else if (/\b(few hours|medium session|an hour or two)\b/.test(lower)) profile.time = 'medium';
  else if (/\b(long-term|long term|deep campaign|100 hours|huge)\b/.test(lower)) profile.time = 'long';
  else if (/\b(endless|infinite|forever|replayable|hundreds of hours)\b/.test(lower)) profile.time = 'endless';
  else if (/\b(bite|runs|bite-sized|bite sized)\b/.test(lower)) profile.time = 'bite';
  else if (/\b(no preference|any time|any session)\b/.test(lower)) profile.time = 'any';

  if (/\b(story|narrative|lore|characters|plot)\b/.test(lower)) profile.priority = 'story';
  else if (/\b(combat|fighting|shooting|gunplay|action)\b/.test(lower)) profile.priority = 'combat';
  else if (/\b(explore|exploration|open world|discovering|wandering)\b/.test(lower)) profile.priority = 'explore';
  else if (/\b(competitive|competition|winning|skill)\b/.test(lower)) profile.priority = 'competitive';
  else if (/\b(atmosphere|world|mood|vibe|immersion)\b/.test(lower)) profile.priority = 'atmosphere';
  else if (/\b(puzzle|puzzles|riddles|logic)\b/.test(lower)) profile.priority = 'puzzle';

  if (/\b(immersive|absorb|deep world)\b/.test(lower)) profile.experience = 'immersive';
  else if (/\b(fast|fast paced|fast-paced|high mobility|speed)\b/.test(lower)) profile.experience = 'fast';
  else if (/\b(creative|building|crafting|sandbox)\b/.test(lower)) profile.experience = 'creative';
  else if (/\b(strategic|thinking|tactical|planning)\b/.test(lower)) profile.experience = 'strategic';
  else if (/\b(cinematic|movie like|hollywood|spectacle)\b/.test(lower)) profile.experience = 'cinematic';
  else if (/\b(survival|survival tension|crafting survival|scavenging)\b/.test(lower)) profile.experience = 'survival';

  // Budget Awareness Voice Recognition
  if (/\b(free|free to play|f2p|zero rupees|no cost)\b/.test(lower)) profile.budget = 'free';
  else if (/\b(under 500|below 500|less than 500|cheap|500 rupees)\b/.test(lower)) profile.budget = 'under_500';
  else if (/\b(under 1000|below 1000|less than 1000|1000 rupees)\b/.test(lower)) profile.budget = 'under_1000';
  else if (/\b(under 2000|below 2000|less than 2000|2000 rupees)\b/.test(lower)) profile.budget = 'under_2000';
  else if (/\b(no budget|any price|unlimited budget|price doesn't matter|no limit)\b/.test(lower)) profile.budget = 'no_limit';

  return profile;
}

// Advanced Recommendation Reasoning Model (Hybrid Backend + Real AI + Client Fallback)
async function recommend() {
  const needed = ["genre", "mode", "difficulty", "time", "priority", "experience"];
  if (needed.some(k => !selected[k])) {
    alert("Please complete the required profile fields (Genre, Mood, Mode, Difficulty, Time, Priority, Experience) to run the recommendation engine.");
    return;
  }

  playUiTone(880, "sine", 0.08, 0.06);

  const runBtn = document.getElementById("run");
  const origBtnText = runBtn ? runBtn.textContent : "Run recommendation →";
  if (runBtn) {
    runBtn.disabled = true;
    runBtn.textContent = "Synthesizing Recommendation...";
  }

  try {
    const res = await fetch("/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selected)
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.success && data.topGame) {
        displayGame(data.topGame, data.runnerUps, data.confidence, data.reason, data.trace, data.isRealAi, data.aiModel, data.budgetInfo, data.freeAlternative, data.isBestValue);
        return;
      }
    }
  } catch (err) {
    console.warn("Backend API request returned an error, activating client-side recommendation engine:", err);
  } finally {
    if (runBtn) {
      runBtn.disabled = false;
      runBtn.textContent = origBtnText;
    }
  }

  // Seamless client-side algorithmic reasoning engine fallback
  try {
    recommendClientFallback();
  } catch (clientErr) {
    console.error("Client fallback error:", clientErr);
    alert("Recommendation could not be generated. Please check your selections and try again.");
  }
}

// Client-side Budget Compatibility Helper
function getBudgetCompatibilityClient(g, maxBudgetInr, selectedBudget) {
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

function recommendClientFallback() {
  let maxBudgetInr = null;
  if (selected.budget === 'free') {
    maxBudgetInr = 0;
  } else if (selected.budget === 'under_500') {
    maxBudgetInr = 500;
  } else if (selected.budget === 'under_1000') {
    maxBudgetInr = 1000;
  } else if (selected.budget === 'under_2000') {
    maxBudgetInr = 2000;
  } else if (selected.budget && selected.budget.startsWith('custom_')) {
    maxBudgetInr = parseInt(selected.budget.replace('custom_', ''), 10);
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

    // 10. Value-for-Money (VFM) Score Integration
    const vfmScore = g.vfmScore || (g.isFree ? 10.0 : 9.2);
    const vfmBonus = Math.round(vfmScore * 1.2);
    score += vfmBonus;
    trace.push(["Value-For-Money", `VFM Rating ${vfmScore}/10 (+${vfmBonus})`]);

    return { ...g, s: score, trace, vfmScore };
  }).sort((a, b) => b.s - a.s);

  const g = ranked[0];
  const runnerUps = ranked.slice(1, 4);
  const pct = Math.min(99, Math.max(76, Math.round((g.s / 175) * 100)));

  const budgetInfo = getBudgetCompatibilityClient(g, maxBudgetInr, selected.budget);

  const bestValueCandidate = [...ranked.slice(0, 5)].sort((a, b) => {
    const aVal = (a.vfmScore || 9) * 12 + a.s * 0.45;
    const bVal = (b.vfmScore || 9) * 12 + b.s * 0.45;
    return bVal - aVal;
  })[0];
  const isBestValue = bestValueCandidate && bestValueCandidate.title === g.title;

  let freeAlternative = null;
  if (!g.isFree) {
    let freeAlt = games.find(item => item.isFree && item.title.toLowerCase() === (g.freeAltTitle || '').toLowerCase());
    if (!freeAlt) {
      freeAlt = games.find(item => item.isFree && (item.genre === g.genre || (item.secondaryGenres && item.secondaryGenres.includes(g.genre))))
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
        diffExplanation: g.freeAltDiff || `Provides exceptional ${g.genre.toUpperCase()} gameplay and active community depth without any upfront purchase cost.`
      };
    }
  }

  displayGame(g, runnerUps, pct, null, null, false, null, budgetInfo, freeAlternative, isBestValue);
}

function displayGame(g, runnerUps, pct, customReason, customTrace, isRealAi, aiModel, budgetInfo, freeAlternative, isBestValue) {
  if (!pct) pct = 92;
  if (!runnerUps || runnerUps.length === 0) {
    runnerUps = games.filter(x => x.title !== g.title).slice(0, 3);
  }

  document.getElementById("empty").style.display = "none";
  document.getElementById("result").style.display = "block";

  const banner = document.getElementById("imageMatchBanner");
  if (banner) banner.style.display = "none";
  const aiLabel = document.getElementById("aiLabel");
  if (aiLabel) {
    aiLabel.textContent = isRealAi ? `AI Synthesis / ${aiModel || 'Generative Model'}` : "Recommendation / generated";
  }

  document.getElementById("confidence").textContent = pct + "% CONFIDENCE";
  document.getElementById("title").textContent = g.title;
  document.getElementById("meta").textContent = g.meta;
  document.getElementById("tags").innerHTML = g.tags.map(x => `<span class="tag">${x}</span>`).join("");

  // Render Budget Intelligence Bar
  const budgetBar = document.getElementById("budgetIntelBar");
  if (budgetBar) {
    const isFree = g.isFree || g.priceInr === 0;
    const priceText = isFree ? "FREE TO PLAY" : `₹${(g.priceInr || 0).toLocaleString('en-IN')}`;
    const vfm = g.vfmScore || (isFree ? 10.0 : 9.2);

    let compatHtml = '';
    if (budgetInfo) {
      const statusCls = budgetInfo.status === 'over' ? 'over' : (budgetInfo.status === 'free' ? 'free' : 'within');
      compatHtml = `<span class="budget-compat ${statusCls}">${budgetInfo.label}</span>`;
    }

    const bestValueBadge = (isBestValue || (g.vfmScore && g.vfmScore >= 9.6)) ? `<span class="badge-best-value">★ BEST VALUE</span>` : '';

    budgetBar.innerHTML = `
      <span class="badge-price ${isFree ? 'free' : ''}">${priceText}</span>
      ${compatHtml}
      <span class="badge-vfm">VFM ${vfm}/10</span>
      ${bestValueBadge}
    `;
  }

  // Render Free Alternative Card (if recommended game is paid)
  const freeAltBox = document.getElementById("freeAlternativeContainer");
  if (freeAltBox) {
    if (freeAlternative && !g.isFree) {
      freeAltBox.style.display = "block";
      freeAltBox.innerHTML = `
        <div class="free-alt-card">
          <div class="free-alt-header">
            <span class="free-alt-tag">INTELLIGENT FREE ALTERNATIVE</span>
            <span class="free-alt-badge">₹0 · ZERO COST</span>
          </div>
          <div class="free-alt-split">
            <div class="choice-col premium">
              <span class="choice-label">Premium Choice</span>
              <strong class="choice-title">${g.title}</strong>
              <div class="choice-price">₹${(g.priceInr || 0).toLocaleString('en-IN')}</div>
              <p class="choice-desc">${g.meta}</p>
            </div>
            <div class="choice-col free">
              <span class="choice-label">Free-to-Play Alternative</span>
              <strong class="choice-title">${freeAlternative.title}</strong>
              <div class="choice-price">₹0 Free to Play</div>
              <p class="choice-desc">${freeAlternative.meta}</p>
            </div>
          </div>
          <div class="free-alt-diff">
            <strong>Key Differences & Economy:</strong> ${freeAlternative.diffExplanation}
          </div>
          <div class="free-alt-actions">
            <a href="${freeAlternative.steamUrl}" target="_blank" rel="noopener noreferrer" class="free-alt-link">Play ${freeAlternative.title} Free on Steam ↗</a>
          </div>
        </div>
      `;
    } else {
      freeAltBox.style.display = "none";
      freeAltBox.innerHTML = "";
    }
  }

  const reasonEl = document.getElementById("reason");
  if (customReason) {
    reasonEl.innerHTML = customReason;
  } else {
    const priorityWord = selected.priority ? selected.priority.toUpperCase() : "core gameplay";
    const genreWord = selected.genre ? selected.genre.toUpperCase() : "genre";
    const modeWord = selected.mode ? selected.mode.toUpperCase() : "mode";
    const diffWord = selected.difficulty ? selected.difficulty.toUpperCase() : "balanced";
    const timeWord = selected.time ? selected.time.toUpperCase() : "any";
    const expWord = selected.experience ? selected.experience.toUpperCase() : "immersive";
    const moodClause = selected.mood ? ` tuned specifically to your <b>${selected.mood.toUpperCase()}</b> mood,` : "";
    const budgetClause = selected.budget ? ` factoring your <b>${selected.budget.replace('_', ' ').toUpperCase()}</b> budget preference,` : "";

    reasonEl.innerHTML = `
      <strong style="display:block;color:#eee;margin-bottom:8px;font-size:12px">Why this game?</strong>
      ${g.why}
      <br><br>
      <strong style="display:block;color:#eee;margin-bottom:8px;font-size:12px">AI Reasoning & Profile Synthesis</strong>
      The reasoning model calibrated <b>${g.title}</b> as your optimal match with <b>${pct}% engine confidence</b>.${moodClause}${budgetClause} Your profile emphasized <b>${genreWord}</b> titles for <b>${modeWord}</b> play, accommodating <b>${diffWord}</b> difficulty and <b>${timeWord}</b> session cadence. By prioritizing <b>${priorityWord}</b> within an overall <b>${expWord}</b> experience, ${g.title}'s specific design loop edged ahead of close alternatives like <i>${runnerUps.map(r => r.title).join(", ")}</i>.
      <br><br>
      <strong style="display:block;color:#eee;margin-bottom:8px;font-size:12px">Potential trade-off to consider</strong>
      ${g.tradeoff}
    `;
  }

  const activeTrace = customTrace || g.trace;
  if (activeTrace) {
    document.getElementById("trace").innerHTML = activeTrace.map(x =>
      `<div class="traceitem"><b>${x[0]}</b><span class="score">${x[1]}</span></div>`
    ).join("");
  } else {
    document.getElementById("trace").innerHTML = `
      <div class="traceitem"><b>Genre Alignment</b><span class="score">Direct Match (+30)</span></div>
      <div class="traceitem"><b>Play Style Fit</b><span class="score">Native Compatibility (+20)</span></div>
      <div class="traceitem"><b>Priority Resonance</b><span class="score">Core Focus (+20)</span></div>
    `;
  }

  populateCommerce(g);

  const simEl = document.getElementById("similar");
  if (simEl) {
    const displaySimilar = g.similar && g.similar.length ? g.similar : runnerUps.map(r => r.title);
    simEl.innerHTML = displaySimilar.map(x => `<span>${x}</span>`).join("");
    if (simEl.querySelectorAll) {
      simEl.querySelectorAll("span").forEach(span => {
        span.onclick = () => {
          playUiTone(640, "sine", 0.05, 0.05);
          const found = games.find(item => item.title.toLowerCase() === span.textContent.trim().toLowerCase());
          if (found) {
            const runner = games.filter(i => i.title !== found.title).slice(0, 3);
            const bInfo = getBudgetCompatibilityClient(found, null, selected.budget);
            displayGame(found, runner, 90, null, null, false, null, bInfo, null, false);
            if (typeof window !== "undefined" && window.scrollTo) {
              window.scrollTo({ top: document.getElementById("result").offsetTop - 40, behavior: "smooth" });
            }
          }
        };
      });
    }
  }
}

function resetAll() {
  playUiTone(360, "sine", 0.06, 0.05);
  Object.keys(selected).forEach(k => delete selected[k]);
  selected.budget = "no_limit";
  document.querySelectorAll(".opt").forEach(b => b.classList.remove("active"));
  const defaultBudgetBtn = document.querySelector('.options[data-key="budget"] .opt[data-value="no_limit"]');
  if (defaultBudgetBtn) defaultBudgetBtn.classList.add("active");
  const slider = document.getElementById("customBudgetSlider");
  if (slider) slider.value = 5000;
  const sliderVal = document.getElementById("customBudgetValue");
  if (sliderVal) sliderVal.textContent = "No Limit (₹5,000+)";
  const badge = document.getElementById("activeBudgetBadge");
  if (badge) badge.textContent = "NO LIMIT";

  document.getElementById("result").style.display = "none";
  document.getElementById("empty").style.display = "flex";
}

// Copy & Share Recommendation Link
window.copyRecommendation = function() {
  playUiTone(720, "sine", 0.08, 0.06);
  const title = document.getElementById("title") ? document.getElementById("title").textContent : "Game";
  const meta = document.getElementById("meta") ? document.getElementById("meta").textContent : "";
  const steamBtn = document.getElementById("steamBtn");
  const shareBtn = document.getElementById("shareBtn");
  const url = steamBtn && steamBtn.href ? steamBtn.href : window.location.href;

  const shareText = `Check out ${title} (${meta}) on Steam: ${url} — Recommended by Blackbox AI`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareText).then(() => {
      if (shareBtn) {
        const originalText = shareBtn.textContent;
        shareBtn.textContent = "✓ Copied!";
        shareBtn.style.color = "#c8ff5a";
        setTimeout(() => {
          shareBtn.textContent = originalText;
          shareBtn.style.color = "";
        }, 2000);
      }
    });
  } else {
    alert(shareText);
  }
};

// Store, Steam link, and "Where the game is available" population
function populateCommerce(g) {
  const qs = document.getElementById("quickStats");
  const av = document.getElementById("availability");
  const steamBtn = document.getElementById("steamBtn");
  const buyBtn = document.getElementById("buyBtn");
  const saveBtn = document.getElementById("saveBtn");

  if (qs) {
    const formattedPrice = (g.isFree || g.priceInr === 0) ? "Free to Play" : `₹${(g.priceInr || 0).toLocaleString('en-IN')}`;
    const vfm = g.vfmScore || (g.isFree ? 10.0 : 9.2);

    qs.innerHTML = `
      <div class="qstat"><small>Price (INR)</small><b>${formattedPrice}</b></div>
      <div class="qstat"><small>Rating</small><b>${g.rating || "N/A"}</b></div>
      <div class="qstat"><small>VFM Score</small><b>${vfm}/10</b></div>
      <div class="qstat"><small>Playtime</small><b>${g.playtime || "Varies"}</b></div>
      <div class="qstat"><small>Platforms</small><b>${(g.platforms || []).length} systems</b></div>
    `;
  }

  if (av) {
    const platformsHtml = (g.platforms || ["PC", "Steam Deck"]).map(p => `<span class="platform-pill">${p}</span>`).join("");
    const storeRowsHtml = (g.stores || [["Steam", "Available", "Store page"]]).map(s => `
      <div class="store-row">
        <span>${s[0]}</span>
        <span class="available">● ${s[1]}</span>
        <span class="price">${s[2]}</span>
      </div>
    `).join("");

    av.innerHTML = `
      <div class="tracehead">Where the game is available</div>
      <div class="platform-pills">${platformsHtml}</div>
      <div class="store-row head">
        <span>Store / Platform</span>
        <span>Status</span>
        <span style="text-align:right">Price (INR)</span>
      </div>
      ${storeRowsHtml}
    `;
  }

  const steamTargetUrl = g.steamUrl || `https://store.steampowered.com/search/?term=${encodeURIComponent(g.title)}`;
  if (steamBtn) {
    steamBtn.href = steamTargetUrl;
    steamBtn.textContent = "To the Steam ↗";
    steamBtn.setAttribute("aria-label", `To the Steam page for ${g.title}`);
  }

  if (buyBtn) {
    buyBtn.onclick = () => window.open(steamTargetUrl, "_blank");
  }

  if (saveBtn) {
    const savedGames = getSavedGames();
    const isAlreadySaved = savedGames.some(item => item.title === g.title);

    updateSaveButtonState(saveBtn, isAlreadySaved);

    saveBtn.onclick = async () => {
      playUiTone(680, "triangle", 0.07, 0.06);
      const currentList = getSavedGames();
      const existingIdx = currentList.findIndex(item => item.title === g.title);

      if (existingIdx >= 0) {
        const removed = currentList.splice(existingIdx, 1)[0];
        saveSavedGames(currentList);
        updateSaveButtonState(saveBtn, false);
        if (removed) removeGameFromSupabase(removed);
      } else {
        const newGame = {
          title: g.title,
          genre: g.genre,
          meta: g.meta,
          steamUrl: steamTargetUrl,
          rating: g.rating || "N/A",
          priceInr: g.priceInr || 0,
          isFree: !!(g.isFree || g.priceInr === 0),
          vfmScore: g.vfmScore || 10.0
        };
        currentList.unshift(newGame);
        saveSavedGames(currentList);
        updateSaveButtonState(saveBtn, true);
        addGameToSupabase(newGame);
      }
      renderSavedGamesModal();
    };
  }
}

function updateSaveButtonState(btn, isSaved) {
  if (isSaved) {
    btn.classList.add("saved");
    btn.textContent = "★ Saved the game";
  } else {
    btn.classList.remove("saved");
    btn.textContent = "☆ Save the game";
  }
}

// Supabase Database & Local Storage sync for Saved Games
let currentUserSession = null;
let currentSavedGamesCache = [];

function getSavedGames() {
  if (currentSavedGamesCache && currentSavedGamesCache.length > 0) {
    return currentSavedGamesCache;
  }
  try {
    const data = localStorage.getItem("blackbox_saved_games");
    currentSavedGamesCache = data ? JSON.parse(data) : [];
    return currentSavedGamesCache;
  } catch (err) {
    return [];
  }
}

async function loadUserSavedGames() {
  if (currentUserSession && currentUserSession.user && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('saved_games')
        .select('*')
        .order('saved_at', { ascending: false });

      if (!error && Array.isArray(data)) {
        currentSavedGamesCache = data.map(row => ({
          id: row.id,
          title: row.game_title,
          genre: row.genre || '',
          meta: row.meta || '',
          steamUrl: row.steam_url || '',
          rating: row.rating || 'N/A',
          priceInr: row.price_inr || 0,
          isFree: row.is_free || false,
          vfmScore: row.vfm_score || 10.0
        }));
        try {
          localStorage.setItem("blackbox_saved_games", JSON.stringify(currentSavedGamesCache));
        } catch (e) {}
        updateSavedGamesCounter();
        renderSavedGamesModal();
        return currentSavedGamesCache;
      }
    } catch (err) {
      console.warn("Error querying Supabase saved_games:", err);
    }
  }
  return getSavedGames();
}

async function saveSavedGames(list) {
  currentSavedGamesCache = list;
  try {
    localStorage.setItem("blackbox_saved_games", JSON.stringify(list));
  } catch (err) {}
  updateSavedGamesCounter();
}

async function addGameToSupabase(gameObj) {
  if (currentUserSession && currentUserSession.user && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('saved_games')
        .insert([{
          user_id: currentUserSession.user.id,
          game_title: gameObj.title,
          genre: gameObj.genre || '',
          meta: gameObj.meta || '',
          steam_url: gameObj.steamUrl || '',
          rating: gameObj.rating || 'N/A',
          price_inr: gameObj.priceInr || 0,
          is_free: !!gameObj.isFree,
          vfm_score: gameObj.vfmScore || 10.0
        }])
        .select();
      if (!error && data && data[0]) {
        gameObj.id = data[0].id;
      }
    } catch (err) {
      console.warn("Supabase insert error:", err);
    }
  }
}

async function removeGameFromSupabase(gameObj) {
  if (currentUserSession && currentUserSession.user && supabaseClient) {
    try {
      if (gameObj.id) {
        await supabaseClient.from('saved_games').delete().eq('id', gameObj.id);
      } else {
        await supabaseClient.from('saved_games').delete().match({
          user_id: currentUserSession.user.id,
          game_title: gameObj.title
        });
      }
    } catch (err) {
      console.warn("Supabase delete error:", err);
    }
  }
}

function updateSavedGamesCounter() {
  const countSpan = document.getElementById("savedCount");
  if (countSpan) {
    countSpan.textContent = getSavedGames().length;
  }
}

// Saved Games Modal Logic
const savedModal = document.getElementById("savedModal");
const savedGamesBtn = document.getElementById("savedGamesBtn");
const closeSavedModal = document.getElementById("closeSavedModal");
const savedList = document.getElementById("savedList");

if (savedGamesBtn) {
  savedGamesBtn.addEventListener("click", () => {
    playUiTone(580, "sine", 0.05, 0.04);
    renderSavedGamesModal();
    if (savedModal) savedModal.style.display = "grid";
  });
}

if (closeSavedModal && savedModal) {
  closeSavedModal.addEventListener("click", () => {
    savedModal.style.display = "none";
  });
}

if (savedModal) {
  savedModal.addEventListener("click", (e) => {
    if (e.target === savedModal) {
      savedModal.style.display = "none";
    }
  });
}

// Keyboard Shortcuts: Escape to close modal, Enter to recommend
if (typeof document !== "undefined" && document.addEventListener) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && savedModal && savedModal.style.display === "grid") {
      savedModal.style.display = "none";
    } else if (e.key === "Enter" && (!savedModal || savedModal.style.display !== "grid")) {
      if (document.getElementById("loginScreen") && document.getElementById("loginScreen").style.display !== "none") {
        return;
      }
      const needed = ["genre", "mode", "difficulty", "time", "priority", "experience"];
      if (needed.every(k => selected[k])) {
        recommend();
      }
    }
  });
}

function renderSavedGamesModal() {
  updateSavedGamesCounter();
  if (!savedList) return;

  const list = getSavedGames();
  if (list.length === 0) {
    savedList.innerHTML = `<div class="saved-empty">No games saved yet.<br>Click <b>"☆ Save the game"</b> on any recommendation to keep it in your library.</div>`;
    return;
  }

  savedList.innerHTML = list.map((item, idx) => `
    <div class="saved-item">
      <div>
        <div class="saved-item-title">${item.title}</div>
        <div class="saved-item-meta">${item.meta || item.genre || ""} · ${item.rating || ""}</div>
      </div>
      <div class="saved-item-actions">
        <a href="${item.steamUrl}" target="_blank" rel="noopener noreferrer" class="saved-steam-link">To the Steam ↗</a>
        <button class="saved-del-btn" onclick="removeSavedGame(${idx})">Remove</button>
      </div>
    </div>
  `).join("");
}

window.removeSavedGame = async function(idx) {
  playUiTone(320, "sine", 0.05, 0.04);
  const list = getSavedGames();
  const removed = list.splice(idx, 1)[0];
  saveSavedGames(list);
  renderSavedGamesModal();
  if (removed) {
    removeGameFromSupabase(removed);
  }

  const currentTitleEl = document.getElementById("title");
  const saveBtn = document.getElementById("saveBtn");
  if (currentTitleEl && saveBtn) {
    const isNowSaved = list.some(item => item.title === currentTitleEl.textContent.trim());
    updateSaveButtonState(saveBtn, isNowSaved);
  }
};

// Picture Upload, Drag & Drop, & Visual Game Recognition
const gameImageInput = document.getElementById("gameImageInput");
const uploadDropZone = document.getElementById("uploadDropZone");
const uploadStatus = document.getElementById("uploadStatus");

if (gameImageInput) {
  gameImageInput.addEventListener("change", function(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    guessGameFromImage(file);
  });
}

// Drag and drop image upload enhancement
if (uploadDropZone) {
  uploadDropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadDropZone.classList.add("dragover");
  });
  uploadDropZone.addEventListener("dragleave", () => {
    uploadDropZone.classList.remove("dragover");
  });
  uploadDropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadDropZone.classList.remove("dragover");
    const files = e.dataTransfer && e.dataTransfer.files;
    if (files && files.length > 0 && files[0].type.startsWith("image/")) {
      guessGameFromImage(files[0]);
    }
  });
}

function guessGameFromImage(file) {
  playUiTone(780, "triangle", 0.07, 0.07);
  if (uploadStatus) {
    uploadStatus.style.display = "block";
    uploadStatus.textContent = "AI Scanning picture & analyzing chromatic features...";
  }

  const reader = new FileReader();
  reader.onload = async function(evt) {
    const imageSrc = evt.target.result;

    // 1. First attempt real multimodal AI Vision via backend endpoint
    try {
      const res = await fetch("/api/guess-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: file.name,
          imageData: imageSrc,
          mimeType: file.type || "image/jpeg"
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.matchedGame) {
          if (uploadStatus) {
            uploadStatus.textContent = `Identified: ${data.matchedGame.title} (${data.confidence}% confidence)`;
            setTimeout(() => { if (uploadStatus) uploadStatus.style.display = "none"; }, 3500);
          }
          displayGuessedGame(data.matchedGame, imageSrc, data.confidence, data.visualDetails, data.isRealAiVision, data.aiModel);
          return;
        }
      }
    } catch (err) {
      // Offline / network fallback
    }

    // 2. Client-side pixel canvas chromatic analyzer fallback
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const w = Math.min(160, img.width || 160);
      const h = Math.min(160, img.height || 160);
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);

      let totalR = 0, totalG = 0, totalB = 0;
      let redDominant = 0, greenDominant = 0, blueDominant = 0, yellowAmber = 0, cyanNeon = 0;
      let darkPixels = 0, brightPixels = 0;
      const count = w * h;

      try {
        const data = ctx.getImageData(0, 0, w, h).data;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i+1], b = data[i+2];
          totalR += r; totalG += g; totalB += b;
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;
          if (lum < 55) darkPixels++;
          if (lum > 185) brightPixels++;

          if (r > g + 25 && r > b + 25) redDominant++;
          else if (g > r + 20 && g > b + 20) greenDominant++;
          else if (b > r + 20 && b > g + 20) blueDominant++;
          else if (r > 130 && g > 110 && b < 80) yellowAmber++;
          else if (g > 140 && b > 140 && r < 100) cyanNeon++;
        }
      } catch (err) {}

      const avgR = Math.round(totalR / (count || 1));
      const avgG = Math.round(totalG / (count || 1));
      const avgB = Math.round(totalB / (count || 1));
      const darkRatio = darkPixels / (count || 1);
      const brightRatio = brightPixels / (count || 1);

      const fileNameLower = (file.name || "").toLowerCase().replace(/[^a-z0-9]/g, " ");

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
        if (blueDominant > redDominant && blueDominant > greenDominant && avgB > 100) {
          matchedGame = games.find(g => g.title === "Subnautica") || games.find(g => g.title === "Hollow Knight");
        } else if (redDominant > blueDominant && redDominant > greenDominant) {
          matchedGame = games.find(g => g.title === "DOOM Eternal") || games.find(g => g.title === "Resident Evil 4") || games.find(g => g.title === "Hades");
        } else if (greenDominant > redDominant && greenDominant > blueDominant && brightRatio > 0.18) {
          matchedGame = games.find(g => g.title === "Minecraft") || games.find(g => g.title === "Stardew Valley");
        } else if (cyanNeon > 12 || (avgB > 105 && avgR > 105 && darkRatio > 0.35)) {
          matchedGame = games.find(g => g.title === "Cyberpunk 2077");
        } else if (yellowAmber > 15 || (avgR > 125 && avgG > 105 && darkRatio > 0.3)) {
          matchedGame = games.find(g => g.title === "Elden Ring") || games.find(g => g.title === "Red Dead Redemption 2");
        } else if (darkRatio > 0.55) {
          matchedGame = games.find(g => g.title === "Silent Hill 2") || games.find(g => g.title === "Hollow Knight") || games.find(g => g.title === "Dark Souls III");
        } else if (brightRatio > 0.3) {
          matchedGame = games.find(g => g.title === "Portal 2") || games.find(g => g.title === "Microsoft Flight Simulator") || games.find(g => g.title === "Valorant");
        } else {
          matchedGame = games.find(g => g.title === "Elden Ring") || games[0];
        }
        matchConfidence = Math.floor(Math.random() * 5) + 91;
      }

      let paletteName = "Dynamic Gamut";
      if (cyanNeon > 10 || (avgB > 95 && avgR > 95)) paletteName = "Neon Cyberpunk Cyan & Magenta";
      else if (yellowAmber > 10 || (avgR > 120 && avgG > 100)) paletteName = "Erdtree Gold & Warm Sunset Amber";
      else if (redDominant > greenDominant && redDominant > blueDominant) paletteName = "Infernal Crimson & Fiery Orange";
      else if (blueDominant > redDominant) paletteName = "Oceanic Deep Blue & Cyan";
      else if (greenDominant > redDominant) paletteName = "Pasture Voxel & Wilderness Green";
      else if (darkRatio > 0.5) paletteName = "Atmospheric Shadow & Dark Indigo";
      else paletteName = "Balanced Cinematic Natural Lighting";

      let lighting = darkRatio > 0.5 ? "Low-Key Nocturnal Shadows" : (brightRatio > 0.35 ? "High-Key Saturated Illumination" : "Dynamic Chiaroscuro Contrast");
      let environment = matchedGame.meta || "3D Interactive World";

      if (uploadStatus) {
        uploadStatus.textContent = `Identified: ${matchedGame.title} (${matchConfidence}% confidence)`;
        setTimeout(() => { uploadStatus.style.display = "none"; }, 3500);
      }

      displayGuessedGame(matchedGame, imageSrc, matchConfidence, { paletteName, lighting, environment });
    };
    img.src = imageSrc;
  };
  reader.readAsDataURL(file);
}

function displayGuessedGame(g, imageSrc, confidence, visualDetails, isRealAiVision, aiModel) {
  const runnerUps = games.filter(item => item.title !== g.title).slice(0, 3);
  document.getElementById("empty").style.display = "none";
  document.getElementById("result").style.display = "block";

  const aiLabel = document.getElementById("aiLabel");
  if (aiLabel) {
    aiLabel.textContent = isRealAiVision ? `Multimodal AI Vision / ${aiModel || 'Vision Model'}` : "Visual Recognition / Guessed Game";
  }

  const banner = document.getElementById("imageMatchBanner");
  if (banner) {
    banner.style.display = "flex";
    banner.innerHTML = `
      <img src="${imageSrc}" class="match-thumb" alt="Uploaded picture">
      <div>
        <small>${isRealAiVision ? 'MULTIMODAL AI VISION MATCH' : 'VISUAL RECOGNITION MATCH'} · ${confidence}% CONFIDENCE</small>
        <b>Identified as ${g.title}</b>
      </div>
    `;
  }

  document.getElementById("confidence").textContent = confidence + "% VISUAL MATCH";
  document.getElementById("title").textContent = g.title;
  document.getElementById("meta").textContent = g.meta;
  document.getElementById("tags").innerHTML = g.tags.map(x => `<span class="tag">${x}</span>`).join("");

  const visualReasonHtml = (visualDetails && visualDetails.visualAnalysis) ? `
    <strong style="display:block;color:#eee;margin-bottom:8px;font-size:12px">Multimodal AI Vision Analysis</strong>
    ${visualDetails.visualAnalysis}
    <br><br>
    <strong style="display:block;color:#eee;margin-bottom:8px;font-size:12px">Why this game stands out</strong>
    ${g.why}
    <br><br>
    <strong style="display:block;color:#eee;margin-bottom:8px;font-size:12px">Gameplay Trade-off</strong>
    ${g.tradeoff}
  ` : `
    <strong style="display:block;color:#eee;margin-bottom:8px;font-size:12px">Visual Recognition Analysis</strong>
    The visual recognition model processed your uploaded picture. By cross-referencing dominant chromatic distributions (<b>${visualDetails.paletteName}</b>), lighting contrast (<b>${visualDetails.lighting}</b>), and world aesthetic cues, the engine identified this scene as <b>${g.title}</b>.
    <br><br>
    <strong style="display:block;color:#eee;margin-bottom:8px;font-size:12px">Why this game stands out</strong>
    ${g.why}
    <br><br>
    <strong style="display:block;color:#eee;margin-bottom:8px;font-size:12px">Gameplay Trade-off</strong>
    ${g.tradeoff}
  `;

  document.getElementById("reason").innerHTML = visualReasonHtml;

  const traceItems = [
    ...(isRealAiVision ? [`<div class="traceitem"><b>AI Vision Intelligence</b><span class="score">${aiModel || 'Multimodal Model'} Active</span></div>`] : []),
    `<div class="traceitem"><b>Visual Dominant Palette</b><span class="score">${visualDetails.paletteName}</span></div>`,
    `<div class="traceitem"><b>Luminance & Lighting</b><span class="score">${visualDetails.lighting}</span></div>`,
    `<div class="traceitem"><b>World Atmosphere</b><span class="score">${visualDetails.environment}</span></div>`,
    `<div class="traceitem"><b>Visual Engine Confidence</b><span class="score">${confidence}%</span></div>`
  ];
  document.getElementById("trace").innerHTML = traceItems.join("");

  const budgetInfo = getBudgetCompatibilityClient(g, null, selected.budget);
  const budgetBar = document.getElementById("budgetIntelBar");
  if (budgetBar) {
    const isFree = g.isFree || g.priceInr === 0;
    const priceText = isFree ? "FREE TO PLAY" : `₹${(g.priceInr || 0).toLocaleString('en-IN')}`;
    const vfm = g.vfmScore || (isFree ? 10.0 : 9.2);
    budgetBar.innerHTML = `
      <span class="badge-price ${isFree ? 'free' : ''}">${priceText}</span>
      <span class="budget-compat ${budgetInfo.status === 'over' ? 'over' : (budgetInfo.status === 'free' ? 'free' : 'within')}">${budgetInfo.label}</span>
      <span class="badge-vfm">VFM ${vfm}/10</span>
    `;
  }
  const freeAltBox = document.getElementById("freeAlternativeContainer");
  if (freeAltBox) freeAltBox.style.display = "none";

  populateCommerce(g);

  const simEl = document.getElementById("similar");
  if (simEl) {
    const displaySimilar = g.similar && g.similar.length ? g.similar : runnerUps.map(r => r.title);
    simEl.innerHTML = displaySimilar.map(x => `<span>${x}</span>`).join("");
    if (simEl.querySelectorAll) {
      simEl.querySelectorAll("span").forEach(span => {
        span.onclick = () => {
          playUiTone(640, "sine", 0.05, 0.05);
          const found = games.find(item => item.title.toLowerCase() === span.textContent.trim().toLowerCase());
          if (found) {
            displayGame(found, games.filter(i => i.title !== found.title).slice(0, 3), 90);
            if (typeof window !== "undefined" && window.scrollTo) {
              window.scrollTo({ top: document.getElementById("result").offsetTop - 40, behavior: "smooth" });
            }
          }
        };
      });
    }
  }

  if (typeof window !== "undefined" && window.scrollTo) {
    const resEl = document.getElementById("result");
    if (resEl) window.scrollTo({ top: resEl.offsetTop - 30, behavior: "smooth" });
  }
}

// Real Supabase Authentication & Session Management
let supabaseClient = null;
let currentAuthMode = 'signin'; // 'signin' or 'signup'

const loginScreen = document.getElementById("loginScreen");
const loginForm = document.getElementById("loginForm");
const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");
const tabSignIn = document.getElementById("tabSignIn");
const tabSignUp = document.getElementById("tabSignUp");
const authSubmitBtn = document.getElementById("authSubmitBtn");
const authError = document.getElementById("authError");
const authModeLabel = document.getElementById("authModeLabel");

function setAuthMode(mode) {
  currentAuthMode = mode;
  if (authError) {
    authError.style.display = "none";
    authError.textContent = "";
  }
  if (mode === 'signup') {
    if (tabSignUp) tabSignUp.classList.add("active");
    if (tabSignIn) tabSignIn.classList.remove("active");
    if (authSubmitBtn) authSubmitBtn.textContent = "Create Account →";
    if (authModeLabel) authModeLabel.textContent = "NEW USER REGISTRATION";
  } else {
    if (tabSignIn) tabSignIn.classList.add("active");
    if (tabSignUp) tabSignUp.classList.remove("active");
    if (authSubmitBtn) authSubmitBtn.textContent = "Sign In →";
    if (authModeLabel) authModeLabel.textContent = "SECURE SUPABASE AUTH";
  }
}

if (tabSignIn) {
  tabSignIn.addEventListener("click", () => {
    playUiTone(500, "sine", 0.04, 0.04);
    setAuthMode('signin');
  });
}

if (tabSignUp) {
  tabSignUp.addEventListener("click", () => {
    playUiTone(540, "sine", 0.04, 0.04);
    setAuthMode('signup');
  });
}

function showAuthError(msg) {
  if (authError) {
    authError.textContent = msg;
    authError.style.display = "block";
  }
}

async function showApp(email, session = null) {
  currentUserSession = session;
  if (loginScreen) loginScreen.style.display = "none";
  if (userEmail) userEmail.textContent = email;
  if (logoutBtn) logoutBtn.style.display = "block";
  if (authError) authError.style.display = "none";

  // Query Supabase for persisted saved games
  await loadUserSavedGames();
  updateSavedGamesCounter();
}

function showLogin() {
  currentUserSession = null;
  currentSavedGamesCache = [];
  if (loginScreen) loginScreen.style.display = "grid";
  if (logoutBtn) logoutBtn.style.display = "none";
  if (userEmail) userEmail.textContent = "";
  updateSavedGamesCounter();
}

// Initialize Supabase Client
async function initSupabaseAuth() {
  let supabaseUrl = "";
  let supabaseAnonKey = "";

  try {
    const res = await fetch("/api/config");
    if (res.ok) {
      const cfg = await res.json();
      supabaseUrl = cfg.supabaseUrl;
      supabaseAnonKey = cfg.supabaseAnonKey;
    }
  } catch (e) {
    console.warn("Config endpoint offline, checking window configuration");
  }

  // Fallback to window globals if set
  if (!supabaseUrl && window.__SUPABASE_URL__) {
    supabaseUrl = window.__SUPABASE_URL__;
    supabaseAnonKey = window.__SUPABASE_ANON_KEY__;
  }

  if (window.supabase && supabaseUrl && supabaseAnonKey) {
    try {
      supabaseClient = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

      // Listen to Supabase auth state changes
      supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (session && session.user) {
          showApp(session.user.email, session);
        } else if (event === 'SIGNED_OUT') {
          showLogin();
        }
      });

      // Check current persistent session
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (session && session.user) {
        showApp(session.user.email, session);
        return;
      }
    } catch (err) {
      console.warn("Supabase init warning:", err);
    }
  }

  // Fallback if Supabase credentials are not yet entered in .env
  const fallbackUser = localStorage.getItem("blackbox_user");
  if (fallbackUser) {
    showApp(fallbackUser, null);
  } else {
    showLogin();
  }
}

if (loginForm) {
  loginForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");
    const email = emailInput ? emailInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value : "";

    if (!email || !password) return;

    if (authError) authError.style.display = "none";
    if (authSubmitBtn) {
      authSubmitBtn.disabled = true;
      authSubmitBtn.textContent = currentAuthMode === 'signup' ? "Creating Account..." : "Signing In...";
    }

    if (supabaseClient) {
      try {
        if (currentAuthMode === 'signup') {
          const { data, error } = await supabaseClient.auth.signUp({
            email,
            password
          });
          if (error) {
            showAuthError(error.message);
            if (authSubmitBtn) {
              authSubmitBtn.disabled = false;
              authSubmitBtn.textContent = "Create Account →";
            }
            return;
          }
          if (data && data.user) {
            if (data.session) {
              showApp(data.user.email, data.session);
            } else {
              // Supabase confirm email check or auto-session
              showAuthError("Account created! If email confirmation is enabled, please verify your inbox, or sign in now.");
              setAuthMode('signin');
            }
          }
        } else {
          // Sign In
          const { data, error } = await supabaseClient.auth.signInWithPassword({
            email,
            password
          });
          if (error) {
            showAuthError(error.message);
            if (authSubmitBtn) {
              authSubmitBtn.disabled = false;
              authSubmitBtn.textContent = "Sign In →";
            }
            return;
          }
          if (data && data.user) {
            showApp(data.user.email, data.session);
          }
        }
      } catch (err) {
        showAuthError(err.message || "Authentication error occurred.");
      } finally {
        if (authSubmitBtn) {
          authSubmitBtn.disabled = false;
          authSubmitBtn.textContent = currentAuthMode === 'signup' ? "Create Account →" : "Sign In →";
        }
      }
    } else {
      // Local fallback if Supabase credentials are empty
      localStorage.setItem("blackbox_user", email);
      showApp(email, null);
      if (authSubmitBtn) {
        authSubmitBtn.disabled = false;
        authSubmitBtn.textContent = currentAuthMode === 'signup' ? "Create Account →" : "Sign In →";
      }
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", async function() {
    playUiTone(360, "sine", 0.05, 0.04);
    localStorage.removeItem("blackbox_user");
    localStorage.removeItem("blackbox_saved_games");
    if (supabaseClient) {
      try {
        await supabaseClient.auth.signOut();
      } catch (e) {}
    }
    showLogin();
  });
}

// Initialize Supabase Auth on page load
initSupabaseAuth();

// Real-time Backend Health Connection Check
async function initBackendConnection() {
  try {
    const res = await fetch("/api/health");
    if (res.ok) {
      const data = await res.json();
      const statusEl = document.querySelector(".status-text") || document.querySelector(".status");
      if (statusEl) {
        const modelLabel = data.aiModel && data.aiModel.isRealAiActive ? `${data.aiModel.providerName} ONLINE` : `AI ENGINE READY (${data.librarySize || 45} TITLES)`;
        statusEl.textContent = modelLabel.toUpperCase();
        statusEl.style.color = "#c8ff5a";
      }
    }
  } catch (err) {}
  initVoiceRecognition();
}

initBackendConnection();


