# ABTalks Redesign

## Project Overview
ABTalks Redesign is a modern, glassmorphic web application that showcases a 60‑Day AI‑powered coding challenge. The app demonstrates a premium design with dark purple/blue gradients, smooth motion, and a mobile‑first layout (optimized for 390 px width).

## ABTalks 60‑Day Challenge Concept
Learners progress through 60 daily challenges covering AI, prompt engineering, full‑stack development, and more. Each day presents a focused learning objective, resources, and an AI mentor that offers explanations, mood checks, and personalized recommendations.

## Key Features
- **AI‑powered UX** – Dynamic explanations, mood‑based recommendations, and streak‑recovery guidance using mock AI panels.
- **Glassmorphism UI** – Dark theme with purple/blue gradients, backdrop blur, and subtle hover/tap animations via Framer Motion.
- **Responsive Mobile‑First Design** – Fully functional at 390 px, with tap‑target size ≥44 px and no horizontal overflow.
- **Accessibility** – Semantic HTML, ARIA labels/roles, focus‑visible styles, and screen‑reader friendly messages.
- **Realistic Mock Data** – Student profile, challenge data, leaderboard, calendar events, and more are generated locally.
- **No Backend Required** – All data is static JSON in `src/data/mockDashboardData.js`.

## Tech Stack
- **Framework**: React (Vite)
- **Styling**: Tailwind CSS with custom glass‑panel utilities
- **Animations**: Framer Motion
- **Icons**: Lucide‑React
- **Version Control**: Git

## Project Folder Structure
```
ABTalks-Redesign/
├─ src/
│  ├─ components/          # Reusable UI components (Navbar, MoodCheckCard, etc.)
│  ├─ data/                # Mock data definitions
│  ├─ pages/               # Route components (/ , /dashboard , /day/12)
│  ├─ index.css            # Global Tailwind & custom utilities
│  └─ main.jsx             # App entry point
├─ public/                 # Static assets
├─ vite.config.js          # Vite configuration
├─ package.json            # Scripts & dependencies
└─ README.md               # Project documentation (this file)
```

## Setup Instructions
```bash
# Install dependencies
npm install

# Run the development server
npm run dev   # Open http://localhost:5173
```

## Available Routes
- **/** – Landing page with project overview and entry CTA.
- **/dashboard** – Student dashboard showing profile, progress cards, AI coach, mood check, achievement timeline, calendar, etc.
- **/day/12** – Challenge day page for *Prompt Engineering Fundamentals* (LEARN type) with description, AI explanation, objectives, resources, mood selector, recommendations, and proof‑of‑work form.

## Mobile‑First 390 px Design
All components use responsive Tailwind utilities. The layout collapses to a single column on screens ≤640 px, ensuring no horizontal scroll and tap targets meet the 44 px minimum.

## AI‑Powered UX Features
- **AI Coach Card** – Provides a concise explanation of the day's challenge and a system‑prompt breakdown.
- **MoodCheckCard** – Lets the student select a mood; displays a tailored encouragement message and next‑step recommendation.
- **StreakRecoveryCard** – Simulates a missed day and offers a bonus recovery task.
- **Dynamic Success States** – Inline status messages use `role="status"` for screen readers.

## Mock Data Architecture
Mock data lives in `src/data/mockDashboardData.js` and includes:
- `mockStudentProfile` (name, avatar, XP, streak, level, etc.)
- `mockTodaysChallenge` (day number, title, explanation, resources)
- `mockAICoachData`, `mockStreakRecovery`, `mockRecentProjects`, `mockBadges`, `mockAchievements`, `mockCalendarEvents`
- An optional `mockEmptyStateData` for demo mode.
All components consume this data via props, keeping the UI deterministic.

## Accessibility & Responsive Design
- Semantic HTML elements (`<header>`, `<main>`, `<section>`, `<nav>`).
- ARIA attributes on navigation, dialogs, buttons (`aria-label`, `aria-expanded`, `aria-controls`, `role="alert"`).
- Focus‑visible rings (`focus-visible:ring-2 focus-visible:ring-purple-500`).
- Minimum tap‑target size enforced via global button styles.
- Motion respects `prefers-reduced-motion`.

## Production Build Instructions
```bash
npx vite build
# Output appears in the /dist folder ready for deployment
```
The build completes without errors (as verified).

## Deployment Instructions
The app can be deployed to any static‑hosting service (e.g., Vercel, Netlify, Firebase Hosting). Simply upload the contents of the `dist/` folder.

---
*This documentation is intended for a hackathon submission and reflects the actual features present in the repository.*
