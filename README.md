# Blackbox AI Game Recommendation System

> **Don't search. Let the engine choose.**
A production-grade, cyberpunk-themed AI Game Recommendation and Visual Recognition platform built with Node.js, Express, and modern JavaScript.

## 🎮 Features
- **10-Vector Deep Reasoning Engine**: Evaluates primary and secondary genres, emotional mood, social topology (solo/co-op/PvP), difficulty curves, session cadence, core priorities, aesthetic tone, synergistic multipliers, budget compatibility, and Value-for-Money (VFM).
- **Budget-Aware Recommendation System (Indian Rupees ₹)**: Supports Free to Play, Under ₹500, Under ₹1,000, Under ₹2,000, No Limit, and continuous custom budget sliders.
- **Intelligent Free Alternative**: Automatically pairs recommended paid titles (*Premium Choice*) with high-quality free-to-play equivalents and explains gameplay differences.
- **Multimodal AI Screenshot Vision**: Drag-and-drop or upload in-game screenshots to identify games via real Google Gemini / OpenAI vision or instant client-side chromatic analysis.
- **Speech Recognition Profiler**: Click 🎙️ Speak to set gaming preferences via voice.
- **Steam & Multi-Platform Integration**: Direct links to Steam store, saved games library, and pricing across Steam, Epic Games, and PlayStation Store.
- **Resilient Offline Architecture**: Seamlessly falls back to the client-side engine if backend or API keys are unavailable.

## ⚡ Quick Start (Local)
`ash
npm install
npm start
`
Open http://localhost:4000 in your browser.

## ☁️ Deployment Guide (Public Online Hosting)
The application is completely self-contained with relative API endpoints (/api/...). It requires no tunneling or port forwarding.

### 1. Deploying to Render.com (Recommended - 100% Free)
1. Push this folder to a GitHub repository.
2. On Render.com, click New + -> Web Service and select your repository.
3. Set Build Command to: npm install
4. Set Start Command to: node server.js
5. (Optional) In Environment Variables, set GEMINI_API_KEY or OPENAI_API_KEY.
6. Click Create Web Service. Render deploys your app with a public https://<app-name>.onrender.com URL.

### 2. Deploying to Railway.app
1. On Railway.app, click New Project -> Deploy from GitHub repo.
2. Select this repository. Railway will automatically deploy it.
3. Generate a public domain under Settings -> Networking.

### 3. Deploying to Vercel
1. Import this repository on vercel.com.
2. The included vercel.json configures server.js as the serverless entrypoint.
3. Click Deploy.

## 🔒 Environment Variables
- PORT: Port on which the server listens (defaults to 4000 or provider-assigned PORT).
- GEMINI_API_KEY: (Optional) Google Gemini API Key for generative reasoning and vision.
- OPENAI_API_KEY: (Optional) OpenAI API Key.
