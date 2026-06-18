# Raavi Pranay — Portfolio

A premium, recruiter-focused engineering portfolio positioning Raavi Pranay as a
**Software Developer** (Full-Stack Engineer with AI Applications as a supporting
capability), highlighting enterprise SaaS and On-Premise systems shipped at
Nainovate Technologies.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and
**Framer Motion**. Dark-theme-first, fully responsive, SEO-optimized, and
deployable to GitHub Pages / Vercel with no changes.

## Sections

Hero (animated terminal + stats) · Tech marquee · About · Experience timeline ·
Featured Projects (filterable, case-study modals — License Management, BuildX
Procurement, AI Decision Workspace) · **Architecture Showcase** (interactive
animated SVG diagrams: Full-Stack, License flow, RAG, Procurement, REST APIs) ·
Skills · Achievements · Modern Engineering Workflow · Contact · Footer.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Customize

All content lives in [`src/lib/data.ts`](src/lib/data.ts). Update these before deploying:

- **`profile.socials.linkedin`** — confirm the real LinkedIn URL.
- **`profile.siteUrl`** — set to your deployed domain (used for SEO, OG, sitemap, JSON-LD).
- **`public/resume.pdf`** — replace with your latest resume PDF.
- Email / GitHub are wired to `pranayraavi23@gmail.com` and `pranay-raavi`.

Design tokens (colors, fonts, animations) live in
[`src/app/globals.css`](src/app/globals.css) under the Tailwind v4 `@theme` block.

## SEO

Metadata, Open Graph, and Twitter cards are configured in
[`src/app/layout.tsx`](src/app/layout.tsx), with a JSON-LD `Person` schema, a
dynamically generated OG image ([`opengraph-image.tsx`](src/app/opengraph-image.tsx)),
[`robots.ts`](src/app/robots.ts), and [`sitemap.ts`](src/app/sitemap.ts).

## Deploy

Push to GitHub — the included Pages workflow handles the static export.
