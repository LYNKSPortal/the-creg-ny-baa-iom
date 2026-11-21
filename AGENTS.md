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

### Real photography (sourced from cregnybaa.com)
Real venue photography, the real logo and the Manx Menu Award badge were pulled from
the owner's existing site (cregnybaa.com) and saved under `public/images/`:
- `images/logo/` — the real "The Famous Creg Ny Baa" logo (colour + white), used in
  `Header`, `Footer` and `MobileNavigation`, plus `src/app/icon.png` as the favicon.
- `images/venue/`, `images/food/`, `images/events/`, `images/tt/`, `images/merch/` —
  real photos used across the homepage, `/menus` (`MenuTabs`), `/functions-events`,
  `/tt-2027`, `/mgp-classic-tt`, `/merchandise` and the full `/gallery` grid
  (`src/data/gallery.ts`).
- `images/awards/manx-menu-award.png` — real "Manx Menu Award Winner" badge, shown in
  the footer.
- `FeatureCard` still supports an `image`-less fallback to `PlaceholderImage` for any
  future section that doesn't yet have a real photo — use that pattern for new sections.
- `src/data/testimonials.ts`, `siteConfig.bookingUrl` (real Dazzler link) and
  `siteConfig.social.facebook` were also populated from the live site's real content.

### SEO, AEO & GEO
The canonical domain is `https://cregnybaa.com` (no `www` — `www.cregnybaa.com` 301s to
it live, see `siteConfig.url` in `src/data/site.ts`). Structured data, FAQs and crawler
config all live in a few central places:
- `src/lib/structuredData.ts` — builders for `Restaurant`/`LocalBusiness` (sitewide,
  injected once in `src/app/layout.tsx` with real opening hours derived from
  `src/data/hours.ts` and geo-coordinates from the venue's own Google Maps link),
  `FAQPage`, `BreadcrumbList`, `Menu` and an `ItemList` of `Product`s (no fake prices —
  availability only, since merch prices are still TBC).
- `src/components/seo/JsonLd.tsx`, `FaqSection.tsx` + `FaqAccordion.tsx`,
  `Breadcrumbs.tsx` — reusable components that pair visible, accessible markup with the
  matching schema so there's one source of truth per page.
- `src/data/faqs.ts` — all FAQ copy, grounded only in facts already established
  elsewhere in `src/data/*` (never invented). Rendered + schema'd on Home, Our Menus,
  Functions & Events, TT 2027, MGP/Classic TT and Merchandise.
- `src/app/sitemap.ts` — per-page `priority`/`changeFrequency` (not just one blanket
  value). `src/app/robots.ts` — explicitly allows mainstream AI/answer-engine crawlers
  (GPTBot, Google-Extended, PerplexityBot, ClaudeBot, etc.) for GEO visibility, in
  addition to the default `*` allow-all.
- `public/llms.txt` — a plain-language summary of the venue and its pages for LLMs/AI
  agents, per the emerging llms.txt convention. Keep this in sync with `src/data/site.ts`
  and `src/data/hours.ts` if those change.
- Note: the homepage's `<title>` is the one page where Next's root-layout
  `title.template` does **not** apply (it only applies to child segments, not the page
  co-located with the layout that defines it) — so `src/app/page.tsx` spells out the
  full `"... | The Famous Creg Ny Baa"` title manually rather than relying on the
  template, unlike every other page.

### Known gaps to fill in before launch
- **Menu item photography**: category photos in `MenuTabs`/gallery are representative
  dishes, not a dedicated photo per PDF menu — fine for now, swap in closer matches if
  better photography becomes available.
- **Merchandise**: only 4 products have real photos (2 hoodies, bobble hat, beanie) in
  `src/data/merchandise.ts` — prices are still `"Price TBC"`. Add more products/prices
  as they're confirmed (and extend `productsJsonLd` to include real `Offer` prices once
  they exist).
- **Social links**: `siteConfig.social.instagram` is still `null` — add once confirmed.
- **Opening hours**: Sunday evening hours are marked unconfirmed in `src/data/hours.ts`
  (the live site doesn't list Sunday evening hours either) and are deliberately excluded
  from the `Restaurant` schema's `openingHoursSpecification` until confirmed.
<!-- END:project-notes -->
