# Portfolio — Full Stack Engineer

A production-ready personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Dark/light themes, a signature liquid-glass navbar, animated section reveals, full case-study project pages, and SEO out of the box.

> All content uses generic placeholders ("Your Name", "Full Stack Engineer"). **Edit the files in `src/data/` — you never need to touch the UI components.**

## Features

- **Dark + light mode** with a polished toggle (system-aware, no flash)
- **Liquid-glass navbar** — floating pill, scroll-shrink, intensifying blur, shared-layout active highlight, mobile menu
- **Sections** — Hero (typewriter), About (animated counters), Skills (animated bars), Projects (filterable), Certifications, Resume, Contact (validated form)
- **Project case studies** — dynamic routes at `/projects/[slug]` with overview, problem/solution, features, architecture, screenshots, challenges, lessons
- **Motion** — scroll progress bar, custom cursor, ambient animated background, preloader, reveal-on-scroll (all respect `prefers-reduced-motion`)
- **SEO** — Metadata API, Open Graph + Twitter cards, JSON-LD, `sitemap.xml`, `robots.txt`, PWA manifest
- **Self-hosted fonts** (Inter + JetBrains Mono) — no runtime dependency on Google Fonts

## Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 3 · Framer Motion · React Hook Form + Zod · next-themes · lucide-react

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

Requires Node.js 18.18+ (Node 20 LTS or newer recommended).

## Customizing (start here)

| What | File |
| --- | --- |
| Name, title, roles, email, location, social links, site URL | `src/data/site.ts` |
| Skills + proficiency, headline stats | `src/data/skills.ts` |
| Projects / case studies | `src/data/projects.ts` |
| Certifications | `src/data/certifications.ts` |
| Resume (experience, education, summary) | `src/data/resume.ts` |
| Colors / design tokens | `src/app/globals.css` (CSS variables) + `tailwind.config.ts` |

Replace the placeholders in `public/`:

- `public/resume.pdf` — your real resume
- `public/og.png` — your Open Graph share image (1200×630)
- `public/avatar.svg` — your photo/avatar (or swap for a `.jpg`/`.png` and update the `src` in `src/sections/Hero.tsx`)
- `public/projects/*.svg` and `public/certs/*.svg` — project thumbnails and certificate images

> **Note on the contact form:** messages are sent through Resend from `src/app/api/contact/route.ts` to the receiver email in `src/data/site.ts`.

### Contact form email setup

Add these environment variables before running the app:

- `RESEND_API_KEY` - required for sending email
- `CONTACT_FROM_EMAIL` - optional; defaults to `onboarding@resend.dev`

## Project structure

```
src/
  app/                  # App Router: layout, page, routes, SEO (sitemap/robots/manifest)
    projects/[slug]/    # dynamic case-study pages
  components/           # reusable UI + effects (navbar, cursor, cards, ...)
    ui/                 # primitives (button, input, badge, ...)
  sections/             # page sections (Hero, About, Skills, ...)
  data/                 # >>> all editable content lives here <<<
  hooks/                # custom React hooks
  lib/                  # utils, motion variants, validation schema
  fonts/                # self-hosted Inter + JetBrains Mono
  types/                # shared TypeScript types
public/                 # static assets (images, resume, og)
```

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. After deploying, set your real domain and update `url` in `src/data/site.ts` (it drives canonical URLs, sitemap, and Open Graph).

Also deployable to Netlify, Cloudflare Pages, or any Node host via `npm run build && npm run start`.

## License

MIT — use it freely for your own portfolio.
