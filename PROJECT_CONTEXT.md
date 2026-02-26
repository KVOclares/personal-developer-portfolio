# PROJECT_CONTEXT

## 1. Project Overview
- **Project**: Personal Developer Portfolio
- **Owner**: Kier Vincent Oclares
- **Purpose**: Live recruiter-facing portfolio deployed on Vercel, linked on resume. Periodically updated via git push.
- **Target Job**: AI Program Full Stack Developer, Government of Alberta (Requisition ID: 79762)

## 2. Current Tech Stack
- **react**: Core library for building the user interface.
- **react-dom**: Provides DOM-specific methods for React integration.
- **vite**: Fast frontend build tool and development server.
- **@vitejs/plugin-react**: Vite plugin to support React and Hot Module Replacement (HMR).
- **typescript**: Adds static typing to JavaScript for improved developer experience and error catching.
- **tailwindcss**: Utility-first CSS framework for rapid UI styling.
- **postcss**: Tool for transforming CSS with plugins like Autoprefixer.
- **autoprefixer**: PostCSS plugin to automatically add vendor prefixes to CSS rules.
- **eslint** (with plugins `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `typescript-eslint`): Linter to maintain code quality and consistent formatting.
- **@types/react** & **@types/react-dom**: TypeScript definitions for React.
- **globals**: Globals library used with ESLint.
- **@icons-pack/react-simple-icons**: React components for 3,000+ brand icons from Simple Icons.
- **lucide-react**: Lightweight icon library used for category headers and fallback skill icons.

## 3. Current Folder Structure
```text
src/
|-- App.tsx                                # Main application component assembling the page sections
|-- index.css                              # Global styles and Tailwind CSS base/components/utilities imports
|-- main.tsx                               # React application entry point, rendering App into the DOM
|-- vite-env.d.ts                          # Type definitions for Vite's client environment
|
|-- assets/
|   |-- images/.gitkeep                    # Directory reserved for static image assets
|   |-- resume/.gitkeep                    # Directory reserved for the downloadable PDF resume
|
|-- components/
|   |-- layout/
|   |   |-- Footer.tsx                     # Simple footer layout component with external links
|   |   |-- Navbar.tsx                     # Sticky top navigation bar with smooth scroll, active section highlighting, and responsive hamburger menu
|   |
|   |-- sections/
|   |   |-- About.tsx                      # Summary section with scroll-triggered animations
|   |   |-- Contact.tsx                    # Contact section with email, links, and upcoming EmailJS integration
|   |   |-- Education.tsx                  # Timeline section detailing educational background
|   |   |-- Experience.tsx                 # Timeline section detailing professional experience
|   |   |-- Hero.tsx                       # Initial hero section with custom typing and background animations
|   |   |-- Projects.tsx                   # Project gallery section displaying interactive project cards
|   |   |-- Skills.tsx                     # Categorized grid displaying core technical skills
|   |
|   |-- ui/
|       |-- Badge.tsx                      # Reusable UI component for small descriptive labels
|       |-- Button.tsx                     # Reusable UI component for clickable actions and links
|       |-- Card.tsx                       # Reusable UI component for enclosing grouped content
|       |-- SectionHeader.tsx              # Reusable UI component for section titles
|       |-- Timeline.tsx                   # Reusable UI component for chronological list items
|
|-- data/
|   |-- education.ts                       # Static data array for education history
|   |-- experience.ts                      # Static data array for work experience
|   |-- nav.ts                             # Static data array for navigation anchor links
|   |-- profile.ts                         # Static personal profile data
|   |-- projects.ts                        # Static data array for portfolio projects
|   |-- skills.ts                          # Static data array categorizing technical skills
|
|-- hooks/
|   |-- useActiveSection.ts               # Custom React hook using IntersectionObserver to track which section is in the viewport
|   |-- useScrollAnimation.ts              # Custom React hook to trigger CSS animations on scroll
|   |-- useTypingCycle.ts                  # Custom React hook to cycle through text with a typing effect
|
|-- types/
|   |-- index.ts                           # Centralized TypeScript interfaces for data models and props
|
|-- utils/
|   |-- index.ts                           # Shared utility functions (e.g., clsx, tailwind-merge, custom formatters)
```

## 4. What Has Been Completed
- Project scaffolded with React + TypeScript + Vite
- Tailwind CSS configured with custom theme (navy #0F172A, electric blue #3B82F6, Inter font)
- ESLint + Prettier configured
- Custom animations defined in tailwind.config.js (fadeIn, slideUp, cycleText)
- All TypeScript interfaces centralized in src/types/index.ts (including NavItem)
- All data files populated in src/data/ (profile, skills, experience, projects, education, nav)
- Custom hooks: useScrollAnimation, useTypingCycle, useActiveSection (IntersectionObserver-based)
- Reusable UI components scaffolded in src/components/ui/ (Badge, Card, Button, SectionHeader, Timeline)
- Section components moved to src/components/sections/
- Layout folder created with Navbar.tsx and Footer.tsx
- **Navbar.tsx fully built**: scroll-aware bg transition, active section highlighting via useActiveSection, responsive hamburger menu with animated icon, "Download Resume" outline button, "Back to Top" floating button, full accessibility (aria-label, aria-expanded, single nav landmark)
- scroll-margin-top added to index.css so fixed navbar doesn't overlap section headings
- Experience data corrected: "Senior Communication Technician" at Edmonton, AB
- Profile about text updated to short punchy recruiter-facing tagline
- **Hero.tsx fully built**: full-viewport intro with staggered mount animations (fadeIn/slideUp with delays 0–900ms), typewriter cycling role titles via useTypingCycle wrapped in code brackets (< Role />), full PROFILE.about as tagline (no truncation), CTA buttons (View My Work → #projects, Download Resume → PDF), scroll-aware bouncing ChevronDown indicator using lucide-react, radial gradient background with decorative blurred circles, aria-live on role title
- **About.tsx fully built**: two-column layout (40/60), profile photo with CSS background-image zoom (backgroundSize 170%, backgroundPosition 77% 70%) inside circular frame with electric blue ring + glow, click-to-open lightbox modal (Escape/click-outside/X to close, body scroll lock, focus management, caption), MapPin location badge, pulsing green "Open to Opportunities" badge, 3 bio paragraphs from profile.bio[], 4 quick stats row, 8-item Core Stack badges (variant="stack"), scroll-triggered slide-in animations via useScrollAnimation (left column from left, right from right)
- Profile interface extended with bio: string[], availability: boolean, photo: string
- profile.ts extended with bio paragraphs, availability flag, Vite-imported profile photo
- animate-in CSS utility updated to reset both translateX and translateY via translate(0, 0)
- vercel.json configured for SPA routing and PDF headers
- .env.example, .gitignore, README.md all production-ready
- Pushed to GitHub: https://github.com/KVOclares/personal-developer-portfolio
- **Skills.tsx fully built**: 6-category grid (Languages, Frontend, Backend, Data & ML, Database, Tools & DevOps) with per-category colored label badges, brand icons via @icons-pack/react-simple-icons mapped per skill name (Lucide CircleDot/BarChart3 fallback for skills without a Simple Icon), pill badge layout (flex-wrap, rounded-full, bg-navy-950/80, border-gray-700, hover glow), scroll-triggered staggered animations via IntersectionObserver
- Skill type simplified: removed iconPath field, icons resolved at render-time via SKILL_ICON_MAP in Skills.tsx
- skills.ts restructured: PostgreSQL and SSIS moved to Database category, Vite moved to Frontend, Tools renamed to Tools & DevOps with Docker added
- **Experience.tsx fully built**: custom vertical timeline with electric blue accent line (scaleY draw-on-scroll), pulsing dot for current role, glassmorphic entry cards sliding in from right with staggered delays, Building2/MapPin/ChevronRight Lucide icons, date period pill badges, impact highlight badges (variant="stack") for GoA role, full accessibility (role="region", role="list", aria-labelledby, aria-label on current dot)
- ExperienceEntry interface extended with highlights?: string[] in src/types/index.ts
- experience.ts fully rewritten: 3 entries (GoA ML Developer 8 bullets + 4 highlights, ASCCI Senior Communication Technician 4 bullets, Silent-Aire Machine Operator 3 bullets), all action-verb led
- useActiveSection rootMargin tuned to '-70% 0px -30% 0px' for accurate active nav highlighting on scroll

## 5. What Needs To Be Built Next (In Order)
1. [x] Navbar.tsx — sticky nav with smooth scroll anchor links, active section highlighting, hamburger menu, Back to Top button
2. [x] Hero.tsx — animated cycling title using useTypingCycle, staggered mount animations, scroll-aware indicator, radial gradient background
3. [x] About.tsx — two-column layout, profile photo with lightbox, bio paragraphs, quick stats, core stack badges, scroll animations
4. [x] Skills.tsx — categorized grid with Simple Icons brand logos, per-category colored labels, pill badge layout
5. [x] Experience.tsx — custom vertical timeline with scroll animations, impact highlights, full accessibility
6. [ ] Projects.tsx — card grid using Card component
7. [ ] Education.tsx — timeline reusing Timeline component
8. [ ] Contact.tsx — email/links with copyToClipboard utility
9. [ ] Footer.tsx — simple footer with links
10. [ ] EmailJS integration in Contact.tsx
11. [ ] Vercel deployment + custom domain setup
12. [ ] Vercel Analytics integration

## 6. Design System
- **Colors**:
  - `navy`: 950 (#050C1A), 900 (#0F172A), 800 (#1E293B), 700 (#1E3A5F)
  - `electric`: 400 (#60A5FA), 500 (#3B82F6), 600 (#2563EB)
  - `accent`: cyan (#06B6D4), purple (#8B5CF6)
- **Font Family**: 
  - Sans: 'Inter', 'system-ui', 'sans-serif'
  - Mono: 'JetBrains Mono', 'Consolas', 'monospace'
- **Animations / Keyframes**:
  - `fade-in-up`: fadeInUp 0.6s ease-out forwards (transforms translateY from 30px to 0)
  - `fade-in`: fadeIn 0.6s ease-out forwards (opacity 0 to 1)
  - `slide-in-left`: slideInLeft 0.6s ease-out forwards (transforms translateX from -30px to 0)
  - `type-cursor`: blink 1s step-end infinite (opacity toggles 0 to 1)
  - `gradient-shift`: gradientShift 8s ease infinite (backgroundPosition shifts between 0% and 100%)
- **Other Custom Theme Extensions**:
  - **Background Image**: `grid-pattern` (Custom SVG grid with #3B82F6 stroke and 0.05 opacity)

## 7. Key Architectural Decisions Made
- All content lives in src/data/ files only — components never hardcode content
- Types centralized in src/types/index.ts
- ExperienceEntry and EducationEntry use a "kind" discriminator field for Timeline.tsx type safety
- Reusable ui/ components used across all sections
- Vercel auto-deploys on every git push to main
- Resume PDF hosted in src/assets/resume/ and served inline via vercel.json headers

## 8. How To Continue In a New Chat
Paste this exact instruction at the start of the new chat:

---
You are an expert Full Stack Frontend Developer helping me build my personal portfolio. Read PROJECT_CONTEXT.md for full project context. We are building components one at a time in the order listed in section 5. All components use React + TypeScript strict mode, Tailwind CSS, and pull content from src/data/ files. Do not hardcode any content inside components.
Current task: Build Projects.tsx
---
