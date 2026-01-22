## Akshay Sharma – Portfolio

A handcrafted developer portfolio built with modern React tooling, focused on accessibility, performance, and a smooth dark/light experience.

## Tech Stack

- Next.js App Router (TypeScript)
- React 19 + Server/Client Components
- Tailwind CSS 4
- Framer Motion (animations, scroll‑linked effects)
- React Icons
- React Hot Toast (feedback on form submit)
- React Vertical Timeline Component (experience section)

## Features & Implementation

- **Responsive layout** – Custom sections for Home, About, Skills, Experience, Projects, and Contact, all laid out with Tailwind utility classes and responsive breakpoints.
- **Sticky glassmorphism header** – Animated header built with Framer Motion and Tailwind (`backdrop-blur`, translucent backgrounds) plus an active section highlight pill using shared `layoutId` for smooth transitions.
- **Section tracking** – `useSectionInView` hook (React Intersection Observer) + `ActiveSectionContext` to track the section in view and keep header navigation and scroll‑to‑section clicks in sync.
- **Dark / light theme** – Theme context + localStorage + `prefers-color-scheme` detection; toggles a `dark` class on `<html>` and uses Tailwind `dark:` variants across the app, with smooth `transition-colors` on body, header, cards, and buttons.
- **Intro / hero** – Animated avatar, greeting text, download‑resume CTA, contact CTA, and social icons, all using Framer Motion entrance animations and accessible links.
- **Experience timeline** – Data‑driven experience entries rendered via `react-vertical-timeline-component`, with custom theming for light/dark, and company, role, location, and description content sourced from `lib/data.ts`.
- **Projects section** – Scroll‑linked project cards using `useScroll` and `useTransform` from Framer Motion for scale/opacity effects; each card has image, description, tech tags, and external links.
- **Skills cloud** – Skills rendered from `skillsData` with responsive layout and dark‑mode‑aware styling.
- **Contact form** – Email form wired to a server action (`sendEmail`) with validation, `useFormStatus`‑powered submit button state, and success/error toasts via React Hot Toast.
- **Footer** – Minimal footer describing the tech stack used to build and deploy the portfolio.

## Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production Build

```bash
npm run build
npm start
```

The app is optimized for deployment on Vercel and uses `next/font` with Geist for performant typography.
