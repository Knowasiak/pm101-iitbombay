# PM101 — Product Management 101 (IIT Bombay)

[![Stack](https://img.shields.io/badge/Stack-React%2019%20%7C%20TypeScript%20%7C%20Vite-0f172a?style=for-the-badge&logo=react&logoColor=%2361dafb)](https://github.com/Knowasiak/pm101-iitbombay)
[![Delivered At](https://img.shields.io/badge/Delivered%20At-IIT%20Bombay-red?style=for-the-badge&logo=education&logoColor=white&labelColor=0f172a&color=a855f7)](https://github.com/Knowasiak/pm101-iitbombay)
[![Design](https://img.shields.io/badge/Design-Retro%2090s%20OS-emerald?style=for-the-badge&logo=windowsterminal&logoColor=white&labelColor=0f172a)](https://github.com/Knowasiak/pm101-iitbombay)

An interactive, retro-themed 90s OS styled slide deck presentation covering the foundations of Product Thinking and Product Management, delivered to students and builders at the **ShARE Career Cell, Indian Institute of Technology (IIT) Bombay**.

---

## 🌟 Key Features

### 🕹️ Retro 90s Cyberpunk Aesthetic
- **Classic UI Elements**: Styled with nostalgic Windows 95/98 window containers, warning dialogs, pixel art icons, scanlines, and retro CRT screen filters.
- **Matrix Code Rain Background**: Built-in canvas-based green falling code rain effect (`MatrixRain.tsx`) reacting to the page theme.
- **Micro-interactions**: Classic click buttons, physical progress bars, and hidden chests revealing bonus product management tips.

### 📐 Responsive Stage Scaling
- Scales a fixed 1280×720 viewport stage dynamically using CSS transforms to fit any modern screen or projector resolution without breaking typography or absolute layouts.

### 📚 Course Syllabus & Slide Acts (48 Slides)
The presentation is structured into 9 chronological acts:
1. **ACT 0 — Intro**: Presenter profile, learning goals, and setting expectations.
2. **ACT 1 — Honest Truth**: The brutal reality of product failure (95% fail due to lack of market need, not bad code) and the real definition of a PM.
3. **ACT 2 — Ideate**: Falling in love with the problem over the solution, user discovery templates, and the PRD structure.
4. **ACT 3 — Build Smart**: YAGNI (You Aren't Gonna Need It) architecture, start simple (SQLite/Vercel) and move to complex scaling later.
5. **ACT 4 — Design**: Wireframes, rapid Figma workflows, and cognitive UX frameworks.
6. **ACT 5 — AI · Automate**: Product development with LLM integration, automating mockups, and AI coding agents.
7. **ACT 6 — Launch**: Go-To-Market strategies, Product Hunt/Hacker News launches, and post-launch analytics.
8. **ACT 7 — Security**: Basic web application security rules, SSL monitoring, and identity shielding.
9. **ACT 8 — Legal & Compliance**: Understanding regulatory deadlines (e.g., India's DPDP Act, GDPR) and why compliance is non-optional.
10. **ACT 9 — Appendix**: Interactive Q&A and linked PM toolkits.

---

## ⚙️ Tech Stack & Dependencies
- **Core**: React 19, TypeScript, Vite
- **Animations**: Framer Motion (v12) for smooth slide-to-slide liquid transitions and alert animations.
- **Icons**: `@phosphor-icons/react` for unified styling.
- **Linter**: ESLint with custom strict TypeScript rules.

---

## 🚀 Local Setup & Run

1. Clone this repository:
   ```bash
   git clone https://github.com/Knowasiak/pm101-iitbombay.git
   cd pm101-iitbombay
   ```

2. Install the node packages:
   ```bash
   npm install
   ```

3. Spin up the development server:
   ```bash
   npm run dev
   ```

4. Build production static bundle:
   ```bash
   npm run build
   ```

---

## ⚡ Deployment

Every commit pushed to the `main` branch is built via **Vite** and deployed directly to production. The output static pages are optimized for instant loading, achieving perfect performance scores on lighthouse metrics.
