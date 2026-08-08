<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Guide: Truck Rental / Logistics Website

A truck-rental & logistics company website (Indonesian language, `id`) built as a
scaffold modeled on the reference site siagatrans.id. Content is **placeholder
data meant to be replaced** by the user's company. Do not invent real company
info, phone numbers, or prices.

## Stack

- Next.js 16.3 (App Router, Turbopack) — **read the bundled docs before writing code** (see block above)
- React 19, TypeScript
- Tailwind CSS v4 (CSS-first config via `@theme` in `app/globals.css`)
- Google font: Poppins (wired in `app/layout.tsx`)

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build (also type-checks)
- `npm run lint` — ESLint (flat config)
- No test framework is configured yet.

## Key conventions

- **Server Components by default.** Any file needing interactivity (state, event
  handlers) must be a Client Component with `"use client"` at the top. Passing
  event handlers as props to server components breaks the build.
- **Dynamic route params are async** (Next 16): `await params` in `page`/`layout`.
  Use `LayoutProps<"/[kota]">` / `PageProps` helpers (globally available, no import).
- **Design tokens** live in `@theme` in `app/globals.css`. Custom classes used
  across the UI: `bg-background`, `bg-surface`, `text-foreground`, `text-muted`,
  `border-border`, `bg-primary`, `text-primary`, `bg-whatsapp`, `border-primary`,
  `hover:bg-primary-dark`, `bg-accent` (amber).
- **Content is data-driven.** Edit the files in `lib/` rather than hardcoding
  copy in components.

## Where content lives (edit these, not the components)

- `lib/site.ts` — company name, tagline, phone, WhatsApp numbers, email,
  address, social links, CS agents (shown in header, footer, WhatsApp widget,
  contact page).
- `lib/cities.ts` — served cities. Each entry generates a whole city subtree:
  `/[kota]/sewa-truk`, `/[kota]/sewa-truk-wingbox`, `/[kota]/jasa-pindahan`,
  `/[kota]/paket-kargo` (SSG via `generateStaticParams`).
- `lib/fleet.ts` — truck types, dimensions, capacity, usage (rendered in
  `FleetSection`).
- `lib/faqs.ts` — FAQ items (rendered in `FaqAccordion`).
- `lib/posts.ts` — blog posts (rendered at `/blog` and `/blog/[slug]`).

## Routing map

| Route | File |
| --- | --- |
| `/` | `app/page.tsx` |
| `/sewa-truk` `/jasa-pindahan` `/paket-kargo` | `app/<service>/page.tsx` |
| `/tentang-kami` `/faq` `/kontak` `/cek-harga` | `app/<page>/page.tsx` |
| `/blog` + `/blog/[slug]` | `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` |
| `/syarat-dan-ketentuan` `/kebijakan-privasi` | `app/<page>/page.tsx` |
| `/[kota]` and services | `app/[kota]/layout.tsx`, `app/[kota]/<service>/page.tsx` |

`app/[kota]/page.tsx` redirects to `/[kota]/sewa-truk`. Unknown city slugs hit
`notFound()` via the city layout.

## Adding a new page or city

1. **New city:** add an entry to `lib/cities.ts` — the routes, breadcrumbs, and
   links update automatically on the next build.
2. **New static page:** add `app/<route>/page.tsx` (optionally a `metadata`
   export for title/description, since the root layout applies
   `<title> | <company>`), then link it in `components/site-header.tsx`,
   `components/site-footer.tsx`, etc. if it belongs in nav.
3. **New truck subtype page** (e.g. `/[kota]/sewa-truk-cdd`): copy the pattern
   from `app/[kota]/sewa-truk-wingbox/page.tsx`.

## Styling / layout patterns

- Shared page sections are components in `components/` (Hero, CtaCard,
  SectionTitle, ServiceGrid, FleetSection, AdvantagesSection, CoverageSection,
  FaqAccordion, city-service-page).
- Reusable container: `mx-auto max-w-6xl px-4 sm:px-6`.
- Buttons: `rounded-lg bg-primary px-6 py-3 font-medium text-white
  hover:bg-primary-dark`.
- Add a truck image by putting an asset in `public/` and referencing it in the
  `FleetSection` card (currently an inline SVG placeholder).

## Image assets

The original site uses truck/hero photos from its CDN. This project has no real
images yet — `public/` only has the default Next.js SVGs. Do not hotlink the
reference site's assets.

## Notes

- Never commit secrets. No env files are required at the moment.
- The `<!-- BEGIN:nextjs-agent-rules -->` block is managed by `next dev`; keep it
  in the file (commit it with your work so diffs stay clean).
