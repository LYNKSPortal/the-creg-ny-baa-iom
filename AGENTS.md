<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Notes — The Famous Creg Ny Baa website

Stack: Next.js 16 (App Router, Turbopack, RSC-by-default), TypeScript, Tailwind CSS v4,
Framer Motion, lucide-react, @mux/mux-player-react (hero background video).

### Hero video (Mux)
The homepage hero plays real drone race footage ("Creg Ny Baa TT 2017 — Drone Race
Footage") hosted on Mux. Config lives in `src/data/video.ts` (playback ID + poster
timestamp) and playback is handled by `src/components/home/HeroVideoBackground.tsx`:
muted/looped/autoplaying, no controls, and falls back to a static poster image for
visitors with `prefers-reduced-motion` enabled. To swap the clip, update the
`playbackId` in `src/data/video.ts` with the new Mux asset's playback ID.

### Commands
- `npm run dev` — local dev server
- `npm run build` — production build (also type-checks)
- `npm run lint` — ESLint (flat config via eslint-config-next)

### Structure
- `src/data/*.ts` — all editable content (site info, hours, hospitality/TT packages,
  menus, merchandise, testimonials, gallery, nav). Update these files rather than
  component code when content changes.
- `src/components/ui` — shared primitives (buttons, cards, section headings, the
  `PlaceholderImage` stand-in for missing photography, announcement banner, etc).
- `src/components/layout` — Header, MobileNavigation, Footer.
- `src/app/*` — one route per top-level nav item, plus `sitemap.ts` / `robots.ts`.

### Menus, buffets & Christmas (real content supplied)
Real venue PDFs live in `public/menus/` and are wired up as follows:
- `src/data/menus.ts` — Lunch & Evening / Children's / Gluten-Free menus all point at
  `16.05.2025-Lunch-Evening-Gluten-Free.pdf`; Senior Citizens' menu points at
  `16.05.2025-Sunday-Citizens-Menu.pdf`. Rendered via `MenuTabs` on `/menus`.
- `src/data/buffets.ts` — the 8 buffet/catering PDFs (afternoon tea, fine meats &
  seafood, hot buffet, mini party, party, pie & peas/hot pot, pulled pork bap, sausage
  saver), plus real room-hire pricing. Rendered on `/functions-events`.
- `src/data/christmas.ts` — festive opening hours, menus/prices, function room and
  Festive Brunch details, pulled from `Creg-Christmas-Menus-2026-.pdf` and
  `CHristmas-Pre-Order-26.pdf`. Rendered by `ChristmasSection` on `/menus` (anchor
  `#christmas`) and summarised in the sitewide `AnnouncementBanner`, both gated by
  `activeFrom`/`activeUntil` via `isWithinDateWindow()` in `src/lib/utils.ts` — **update
  these dates (and the PDF filenames/content) every year** so last year's Christmas
  information never shows as current.
- No Sunday Roast or Daily Specials PDF was supplied — those categories stay
  description-only (`pdfHref: null`) until menus are provided.

### Known gaps to fill in before launch
- **Photography**: no real venue/TT photography has been supplied for still images
  (the hero now uses real Mux drone video — see above). `PlaceholderImage` renders a
  stylised, clearly-labelled placeholder elsewhere (never a misrepresented stock photo).
  Replace with `next/image` usage and real assets under `public/images/...` once supplied.
- **Booking**: `siteConfig.bookingUrl` in `src/data/site.ts` is `null`. The "Book a Table"
  button falls back to a phone link until the real Dazzler booking URL is confirmed.
- **Testimonials**: `src/data/testimonials.ts` is intentionally empty — no genuine,
  attributed customer quotes were supplied. Add real quotes (with source) there.
- **Merchandise**: `src/data/merchandise.ts` product names/prices/images are placeholders.
- **Social links**: `siteConfig.social` is empty until Facebook/Instagram URLs are verified.
- **Opening hours**: Sunday evening hours are marked unconfirmed in `src/data/hours.ts`.
- `og-image.jpg` referenced in metadata does not yet exist in `public/` — add one before relying on social share previews.
<!-- END:project-notes -->
