# Islam Aboamh — Portfolio

Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## What’s inside

- **Sidebar** — profile, short intro, navigation, and social links.
- **About** — summary of experience plus the core stack I work with.
- **Work** — freelance and full-time frontend experience.
- **Projects** — selected builds with live and source links.
- **Archive** — previous portfolio versions.
- **Contact** — email CTA for freelance work and role opportunities.

## Tech stack

Next.js, React, TypeScript, Tailwind CSS, HTML, CSS, JavaScript, Git, GitHub, Figma, WordPress, and WooCommerce.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

This project uses static export mode (`output: "export"`), so the build generates a deployable `out/` folder.

## Customise the portfolio

- **Copy and personal bio** — `src/components/Sidebar.tsx`, `src/components/About.tsx`, `src/components/Footer.tsx`
- **Work history** — `src/data/experience.ts`
- **Projects** — `src/data/projects.ts`
- **Styling** — `src/app/globals.css` and Tailwind config

## Deploy

The exported site can be deployed to any static host, including Netlify or Vercel.
