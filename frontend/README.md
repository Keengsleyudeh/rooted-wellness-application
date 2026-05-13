# Rooted Wellness

The Nervous System Performance Company. A calm, premium, SEO-ready, PWA-aware web platform for nervous system regulation and the **30-Day High Performance Reset**.

This repo currently contains the foundation and the public landing page only. Authentication, payments, member dashboard, admin, and content systems will be added in later phases per the project rules in `.cursor/rules/`.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Motion for React (subtle, premium animation)
- Lucide React icons
- Custom SVG illustrations (no emoji in the UI)

Fonts: **Nunito** for body/UI, **Comfortaa** for brand/headings (via `next/font/google`).

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — start the production server
- `npm run lint` — run Next.js / ESLint checks
- `npm run typecheck` — run TypeScript without emitting

## Environment

Copy `.env.example` to `.env.local` and fill values as features are added.

## Project structure (current)

```
app/
  layout.tsx         # fonts, metadata defaults, theme
  page.tsx           # landing page composition
  globals.css        # base theme, palette tokens, reduced-motion
  manifest.ts        # PWA manifest
  sitemap.ts         # public sitemap
  robots.ts          # robots policy (private routes disallowed)
  opengraph-image.tsx
  twitter-image.tsx
  offline/           # PWA offline fallback
components/marketing # landing page sections
lib/utils.ts         # cn helper, SITE_URL, SITE_NAME
public/              # favicon, PWA icons
.cursor/rules/       # project, core, build, and landing rules
```

## What this landing page covers

- Header / navigation (mobile + desktop, accessible mobile sheet)
- Hero with animated nervous system SVG and dual CTAs
- Trust strip
- Problem awareness signals
- Interactive burnout self-check (accessible, keyboard-operable, no diagnosis)
- Philosophy pillars (Rooted, Nourished, Aligned, Expanding)
- Science section (wellness framing, no medical claims)
- Program overview + four-week timeline
- Morning and evening daily rhythm
- Transformation outcomes (results vary disclaimer)
- Dashboard preview with progress ring, trend chart, unlocked tools, certificate
- Assessment CTA + founder section + testimonials placeholders
- Pricing overview (links to dedicated pricing page; no card storage on server)
- FAQ accordion with FAQPage JSON-LD support
- Final CTA, footer with legal links, full wellness disclaimer
- Organization, WebSite, Course, and FAQPage JSON-LD
- Sitemap, robots (dashboard/admin/auth disallowed), Open Graph, Twitter card
- PWA manifest, theme color, install-friendly icons, offline page

## Wellness boundary

Rooted Wellness provides educational wellness resources and self-regulation practices. It does not provide medical diagnosis, treatment, therapy, or emergency care. Please consult a qualified professional for medical or mental health concerns.
