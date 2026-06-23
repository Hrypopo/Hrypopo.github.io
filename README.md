# Chevza — hrypopo.github.io

Personal portfolio & venture studio site of **Lehlohonolo 'Chevza' Nchefu** — solo founder from Johannesburg, South Africa, building privacy-first software and bold creative brands.

**Live at [hrypopo.github.io](https://hrypopo.github.io)**

## Site map

| Page | What it is |
|---|---|
| [`index.html`](index.html) | Studio homepage — dark editorial, custom cursor, live venture previews |
| [`filemayor.html`](filemayor.html) | FileMayor launch kit — pitch deck · social carousels · brand book |
| [`purplelens.html`](purplelens.html) | PurpleLens photography studio — portraits, commercial, weddings, prints |
| [`aether.html`](aether.html) | AETHER — subterranean megacity concept, with an interactive 3D cross-section. Whitepaper → 3D model → film |
| [`aether-whitepaper.html`](aether-whitepaper.html) | AETHER whitepaper — physics, math, economics, tokenomics & narrative, with TOC + scroll-spy |
| [`aether-engineering.html`](aether-engineering.html) | AETHER Vol. I — production-depth engineering (thermodynamics, maglev, geotechnics, life support) |
| [`aether-financials.html`](aether-financials.html) | AETHER Vol. II — production-depth financial model (capex, tokenomics, 30-yr annual model, NPV/IRR, sensitivity) |
| [`aether-bible.html`](aether-bible.html) | AETHER Vol. III — production-depth story bible (world, factions, characters, episode beats) |
| [`aether-deck.html`](aether-deck.html) | AETHER investor deck — 16 cinematic, keyboard-navigable slides |
| [`aether-pilot.html`](aether-pilot.html) | AETHER pilot screenplay — Episode 101, "First Light" (teaser + Act One) |
| [`404.html`](404.html) | Custom not-found page, on brand |
| `project/` | FileMayor design source files (deck, carousels, brand book) |
| `assets/` | Favicon + generated Open Graph social cards |

## Ventures

- **FileMayor** — AI-native file organisation for the command line. Local-first, privacy-first, six-layer security (The Chevza Doctrine). 25k+ npm installs. → [filemayor.com](https://filemayor.com)
- **PurpleLens** — Johannesburg photography studio. Home of the *Iconoclast* black-and-white portrait series.
- **AETHER** — a speculative $100B concept for a self-powered subterranean megacity (SMR core, autonomous maglev, tokenised tunnels). Taken from whitepaper → interactive 3D model → sci-fi film.
- **PurpleBos · PurpleRugs · Praxis** — in the works.

## Engineering notes

- Zero-dependency static site: hand-written HTML/CSS/JS, no build step, no framework.
- Served as-is via GitHub Pages (`.nojekyll`).
- Full metadata layer: Open Graph + Twitter cards with generated social images, canonical URLs, JSON-LD structured data (Person, Organization, SoftwareApplication, ProfessionalService), `sitemap.xml`, `robots.txt`.
- Accessible by design: skip-to-content link, `prefers-reduced-motion` support throughout, focus-visible styles, semantic landmarks, ARIA-labelled controls.
- Motion system: IntersectionObserver reveals with failsafes, eased counters, magnetic buttons, spotlight cards — all gated behind hover/pointer and reduced-motion checks.

---

© 2026 Lehlohonolo Goodwill Nchefu · Built in South Africa · privacy-first by default
