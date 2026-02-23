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
| Deployment | Static SPA — any CDN or static host |

---

## 📁 Project Structure

```
src/
├── components/         # One file per UI section
│   ├── Navbar.tsx      # Sticky nav bar with mobile hamburger menu
│   ├── Hero.tsx        # Full-viewport hero with typewriter animation
│   ├── About.tsx       # Professional summary + stat cards
│   ├── Skills.tsx      # Categorized skill grid with SVG icons
│   ├── Experience.tsx  # Vertical timeline of work history
│   ├── Projects.tsx    # Project card grid (coming soon cards)
│   ├── Education.tsx   # NAIT diploma entries with honors badges
│   └── Contact.tsx     # Contact cards + copy-to-clipboard email
│
├── data/               # All content as typed TypeScript constants
│   ├── profile.ts      # Name, titles, about text, social links
│   ├── skills.ts       # Categorized skills with SVG icon paths
│   ├── experience.ts   # Work experience entries
│   └── projects.ts     # Portfolio project definitions
│
├── App.tsx             # Root component — composes all sections
├── main.tsx            # Entry point (React StrictMode)
└── index.css           # Tailwind directives + global styles
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

Output is in the `dist/` folder — deploy to Vercel, Netlify, or GitHub Pages.

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

## ✏️ Customizing Content

All portfolio data lives in `src/data/` — edit these files to update the site without touching any component:

| File | What to edit |
|------|--------------|
| `profile.ts` | Name, animated titles, about text, contact info |
| `skills.ts` | Skill categories and SVG icon paths |
| `experience.ts` | Work history entries and bullet points |
| `projects.ts` | Project cards, tech stacks, and links |

---

## 📬 Contact

- **Email:** [KierVOclares@gmail.com](mailto:KierVOclares@gmail.com)
- **LinkedIn:** [kier-vincent-o-2150051a0](https://www.linkedin.com/in/kier-vincent-o-2150051a0/)
- **GitHub:** [KVOclares](https://github.com/KVOclares)

---

## 📄 License

MIT — feel free to fork and adapt for your own portfolio.
