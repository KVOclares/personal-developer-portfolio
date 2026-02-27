<div align="center">

# Kier Vincent Oclares — Developer Portfolio

**Full Stack Developer · Data Engineer · AI Integration Specialist**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

</div>

A modern, fully responsive personal portfolio SPA showcasing my background in full-stack development, data engineering, and AI-assisted development at the Government of Alberta. Built with a deep navy + electric blue design system, smooth scroll animations, and all content cleanly separated into typed TypeScript constants — no backend required.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 (strict mode) |
| Language | TypeScript 5 (strict mode) |
| Bundler | Vite 5 |
| Styling | Tailwind CSS 3 |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Deployment | Vercel (automatic deploys from `main`) |

---

## 📁 Project Structure

```
src/
├── assets/
│   ├── images/              # Static images
│   └── resume/              # Resume PDF
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky nav bar with mobile hamburger menu
│   │   └── Footer.tsx        # Site-wide footer
│   ├── sections/
│   │   ├── Hero.tsx          # Full-viewport hero with typewriter animation
│   │   ├── About.tsx         # Professional summary + stat cards
│   │   ├── Skills.tsx        # Categorized skill grid with SVG icons
│   │   ├── Experience.tsx    # Vertical timeline of work history
│   │   ├── Projects.tsx      # Project card grid
│   │   ├── Education.tsx     # NAIT diploma entries with honors badges
│   │   └── Contact.tsx       # Contact cards + copy-to-clipboard email
│   └── ui/
│       ├── Badge.tsx          # Styled pill/tag (skill, status, stack)
│       ├── Card.tsx           # Reusable glass card wrapper
│       ├── Button.tsx         # Primary and outline button variants
│       ├── SectionHeader.tsx  # Consistent section heading
│       └── Timeline.tsx       # Vertical timeline (Experience/Education)
├── data/
│   ├── profile.ts            # Name, titles, about text, social links
│   ├── skills.ts             # Categorized skills with SVG icon paths
│   ├── experience.ts         # Work experience entries
│   ├── projects.ts           # Portfolio project definitions
│   └── education.ts          # Degrees, certifications
├── hooks/
│   ├── useScrollAnimation.ts # Intersection Observer scroll animation
│   └── useTypingCycle.ts     # Typewriter cycling animation
├── types/
│   └── index.ts              # All TypeScript interfaces and types
├── utils/
│   └── index.ts              # Shared utility functions
├── App.tsx                    # Root component — composes all sections
├── main.tsx                   # Entry point (React StrictMode)
└── index.css                  # Tailwind directives + global styles
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.x
- npm >= 9.x

### Installation

```bash
git clone https://github.com/KVOclares/personal-developer-portfolio.git
cd personal-developer-portfolio
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

Output is in the `dist/` folder.

### Linting

```bash
npm run lint
```

---

## 🗂️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server at `localhost:5173` |
| `npm run build` | Type-check and bundle for production (output: `dist/`) |
| `npm run preview` | Locally preview the production build |
| `npm run lint` | Run ESLint across all TypeScript/TSX files |

---

## 🚀 Deployment

This site is deployed on Vercel with automatic deployments from the main branch.

### Deploy Your Own
1. Fork this repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Set framework preset to: **Vite**
4. Add environment variables from `.env.example`
5. Deploy — done

### Updating Content

All site content lives in `src/data/`. To update: edit the relevant data file → `git push` → Vercel auto-deploys in ~30 seconds.

| File | What to update |
|------|---------------|
| `src/data/profile.ts` | Name, bio, contact info |
| `src/data/experience.ts` | Work history |
| `src/data/projects.ts` | Portfolio projects |
| `src/data/skills.ts` | Technical skills |
| `src/data/education.ts` | Degrees, certifications |

---

## 📄 Resume Updates

To update the resume:
1. Edit resume/KierVincentOclares_Resume.md
2. Run: npm run generate:resume
3. Commit both the MD and PDF files
4. git push — Vercel serves the updated PDF

---

## 📬 Contact

- **Email:** [KierVOclares@gmail.com](mailto:KierVOclares@gmail.com)
- **LinkedIn:** [kier-vincent-o-2150051a0](https://www.linkedin.com/in/kier-vincent-o-2150051a0/)
- **GitHub:** [KVOclares](https://github.com/KVOclares)

---

## 📄 License

MIT — feel free to fork and adapt for your own portfolio.
