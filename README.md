# FMO Media — Client Portal

Phase 1 MVP of the FMO Media client-facing portal. A tabbed resource hub where clients can view their deliverables, analytics, FAQs, communication expectations, and upload assets.

## Tech Stack

- **React 18** + **Vite** (fast dev server + optimized builds)
- **Recharts** for analytics dashboards
- **CSS-in-JS** with FMO brand tokens (dark navy, teal accents)

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (opens http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── main.jsx                 # Entry point
├── App.jsx                  # Root component (header, nav, footer, tab routing)
├── components/
│   ├── ui.jsx               # Shared components (Card, Badge, AnimatedNumber, etc.)
│   ├── WelcomeTab.jsx       # Personalized welcome + AM info + quick links
│   ├── DeliverablesTab.jsx  # Package breakdown + SLA per tier
│   ├── ReportingTab.jsx     # Platform KPI dashboards (FB, IG, TikTok, LI, YT)
│   ├── CommunicationTab.jsx # Response times, meeting cadence, escalation path
│   ├── ResourcesTab.jsx     # Searchable FAQ + turnaround time guide
│   └── AssetUploadTab.jsx   # Drag-and-drop file upload + notes
├── data/
│   └── clientData.js        # Mock client data (replace with API/CRM in production)
└── styles/
    └── global.css           # Reset, CSS variables, animations
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your GitHub repo
3. Vercel auto-detects Vite — click Deploy
4. You get a live URL instantly (e.g., `fmo-client-portal.vercel.app`)

Every push to `main` auto-deploys.

## What's Mock vs. Production

| Component | Current (MVP) | Production |
|-----------|--------------|------------|
| Client data | Hardcoded in `clientData.js` | HubSpot CRM API |
| Analytics | Mock KPI data | Platform APIs (Meta, TikTok, LinkedIn, YouTube) |
| Auth/Login | None (static demo) | HubSpot membership / OAuth |
| File upload | Client-side only | S3/GCS + webhook to AM |
| FAQ content | Hardcoded array | CMS or HubSpot knowledge base |

## Brand Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Navy | `#0B1120` | Primary background |
| Dark | `#0F172A` | Secondary background |
| Teal | `#2DD4BF` | Accent, CTAs, highlights |
| Card | `#1E293B` | Card surfaces |
| Border | `#334155` | Subtle borders |
| Text | `#F8FAFC` | Primary text |

## Roadmap

- **Phase 1 (current):** Static MVP with 6 tabs
- **Phase 2:** Foxy AI chatbot, notifications, content calendar
- **Phase 3:** Wins & milestones, satisfaction surveys, AM dashboard
