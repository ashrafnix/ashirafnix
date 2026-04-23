# AshirafNix — Technical Brands for a Connected Uganda

A production-grade Next.js 14 portfolio with ultra-premium brand identity system,
built for Kampala-based full-stack developer and brand designer Ashraf Nix Kakooza.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 3.4** (extended design token system)
- **next/font** — Syne (display) + IBM Plex Mono (UI/code)
- Zero runtime animation libraries — pure CSS keyframes

## Environment

Create a local env file before production-like runs:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SITE_URL` — canonical origin used by metadata, sitemap, and robots (for example `https://ashrafnix.dev`)
- `NEXT_PUBLIC_CONTACT_EMAIL` — shown on contact, links hub, and mailto links
- `NEXT_PUBLIC_GITHUB_URL`, `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_TWITTER_URL` — optional; enable social cards in the footer, contact, and the `/links` page when set

## Project Structure

```
ashirafnix/
├── app/
│   ├── layout.tsx          ← Root layout, font loading, metadata
│   ├── globals.css         ← Full design system (CSS variables, grain, orbs)
│   ├── page.tsx            ← Home — hero, stats, about, CTA
│   ├── links/
│   │   └── page.tsx        ← Connect hub — sitemap, email, socials
│   ├── brands/
│   │   └── page.tsx        ← Brand case studies + logo showcase
│   ├── stack/
│   │   └── page.tsx        ← Technical stack grid
│   └── lab/
│       └── page.tsx        ← Editorial article
├── components/
│   ├── Nav.tsx             ← Scroll-aware nav, mobile drawer
│   ├── Footer.tsx
│   ├── Terminal.tsx        ← Animated typewriter terminal
│   └── logos/
│       ├── MoMoLogo.tsx    ← Fintech M-form mark (color/mono/dark variants)
│       ├── NexusLogo.tsx   ← Hexagonal network mark
│       └── EndiroLogo.tsx  ← Botanical coffee mark
└── public/
    └── favicon.svg
```

## Design System Highlights

- **Color**: Deep space `#050609` + luxury gold `#EAB84A/#C8952A` + electric cyan `#0CE8F0`
- **Typography**: Syne 800 (display) + IBM Plex Mono (UI)
- **Grain texture**: SVG filter overlay at 4.5% opacity
- **Gradient orbs**: CSS radial gradients with 90px blur, floating animation
- **Grid background**: Subtle 56px gold crosshatch at 2.2% opacity
- **Custom scrollbar**: 5px gold-tinted

## Logo System

Each logo ships in three variants:
- `color` — full brand palette (default, dark backgrounds)
- `mono` — single gold tone (single-colour applications)
- `dark` — deep amber tones (light backgrounds, print)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Quality Gate

Run the full local gate before pushing:

```bash
npm run check
```

Health endpoint:
- `GET /api/health`

## Deployment

Optimised for Vercel. One-click deploy via `vercel --prod`.
Also tested on AWS EC2 behind nginx.

---

Built in Kampala. Deployed globally.  
[ashrafnixkakooza@gmail.com](mailto:ashrafnixkakooza@gmail.com)
