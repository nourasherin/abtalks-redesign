# Prompts Used During Development

The following AI prompts were used throughout the development of the ABTalks Redesign project. They reflect the actual interactions and design decisions made while building the app. No prompts refer to features that are not present in the codebase.

## 1. Landing Page
- Prompted for a clean, premium landing page layout with a hero section, brief description, and CTA button linking to `/dashboard`.
- Requested glassmorphism styling and subtle entrance animations.

## 2. Landing Page Enhancements
- Added ARIA attributes and focus-visible styles to the CTA button.
- Refined the hero heading typography using Google Fonts (Inter).
- Ensured mobile‑first layout at 390 px without horizontal overflow.

## 3. Student Dashboard
- Defined the dashboard structure: profile navbar, metric cards, AI coach, mood check, recent projects, achievement timeline, calendar, etc.
- Specified mock data shape for student profile, progress metrics, and recent projects.
- Requested a dark purple/blue gradient theme with glass panels.

## 4. Dashboard Enhancements
- Added ARIA roles to navigation elements and focus-visible rings to interactive cards and buttons.
- Implemented responsive grid adjustments (single‑column on small screens).
- Integrated Framer Motion entrance animations for cards.
- Added hover/tap scale effects for interactive elements.

## 5. Challenge Day
- Created the day‑12 page layout covering description, AI explanation, learning objectives, resources, mood selector, recommendation, streak recovery, and proof‑of‑work form.
- Requested accessible form fields with `label` and `aria-describedby` for validation messages.
- Added `role="status"` for the success message after proof submission.

## 6. AI Features
- Designed AI Coach Card content: daily motivation quote, personalized study tip, and expandable AI explanation with key concepts and starter hint.
- Defined MoodCheckCard logic for mood selection, dynamic encouragement, and next‑step recommendation.
- Specified StreakRecoveryCard interactions: simulation toggle, bonus challenge button, and success alert.

## 7. Mock Data
- Outlined mock data objects (`mockStudentProfile`, `mockTodaysChallenge`, `mockAICoachData`, `mockStreakRecovery`, `mockRecentProjects`, `mockBadges`, `mockAchievements`, `mockCalendarEvents`).
- Provided placeholder values for each field to drive UI components.

## 8. UI Polish and Accessibility
- Added focus-visible utility classes to global button styles.
- Ensured all `<button>` elements have a minimum tap target (44 px) and appropriate ARIA labels.
- Added `role="navigation"` to the `<header>` element and `aria-controls`/`aria-expanded` to the mobile menu toggle.
- Wrapped the mobile drawer in a dialog with `role="dialog"` and `aria-modal="true"`.
- Updated button classes to include `focus-visible:ring-2 focus-visible:ring-purple-500`.
- Added `role="alert"` to dynamic success messages (e.g., streak restored, proof submitted).

## 9. Documentation

- Generated this `PROMPTS.md` to capture all prompts used during the implementation.

## 10. Bug Fixing and Interaction Testing

- Investigated the Streak Recovery "Start Recovery" interaction when the modal did not open.
- Used AI-assisted debugging to inspect StreakRecoveryCard.jsx and identify the incorrect click handler.
- Fixed the modal trigger and subsequently addressed modal clipping caused by the parent stacking context.
- Updated the recovery flow so the modal opens, displays the exercise, allows completion, and restores the streak.

## 11. Responsive Layout and Scroll Testing

- Tested the application at a 390px viewport.
- Investigated excessive vertical page height and unexpected scrolling behavior.
- Reviewed page wrappers and navigation/hash links to identify possible causes.
- Applied layout and navigation fixes while preserving the existing design.

## 12. Build and Deployment

- Used AI assistance to troubleshoot Vite build and Vercel deployment issues.
- Verified successful production builds.
- Deployed the final application to Vercel.
- Verified the main routes and interactive features after deployment.

*All prompts are derived directly from the development process and correspond to the current codebase. No undocumented features were introduced.*
