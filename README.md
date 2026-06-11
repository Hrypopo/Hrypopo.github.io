# Chevza — hrypopo.github.io

Personal portfolio & venture studio site of **Lehlohonolo 'Chevza' Nchefu** — solo founder from Johannesburg, South Africa, building privacy-first software and bold creative brands.

**Live at [chevza.com](https://chevza.com)** (hrypopo.github.io redirects there)

## Site map

| Page | What it is |
|---|---|
| [`index.html`](index.html) | Studio homepage — dark editorial, custom cursor, live venture previews |
| [`filemayor.html`](filemayor.html) | FileMayor launch kit — pitch deck · social carousels · brand book |
| [`purplelens.html`](purplelens.html) | PurpleLens photography studio — portraits, commercial, weddings, prints |
| [`404.html`](404.html) | Custom not-found page, on brand |
| `project/` | FileMayor design source files (deck, carousels, brand book) |
| `assets/` | Favicon + generated Open Graph social cards |

## Ventures

- **FileMayor** — AI-native file organisation for the command line. Local-first, privacy-first, six-layer security (The Chevza Doctrine). 25k+ npm installs. → [filemayor.com](https://filemayor.com)
- **PurpleLens** — Johannesburg photography studio. Home of the *Iconoclast* black-and-white portrait series.
- **PurpleBos · PurpleRugs · Praxis** — in the works.

## Engineering notes

- Zero-dependency static site: hand-written HTML/CSS/JS, no build step, no framework.
- Served as-is via GitHub Pages (`.nojekyll`).
- Full metadata layer: Open Graph + Twitter cards with generated social images, canonical URLs, JSON-LD structured data (Person, Organization, SoftwareApplication, ProfessionalService), `sitemap.xml`, `robots.txt`.
- Accessible by design: skip-to-content link, `prefers-reduced-motion` support throughout, focus-visible styles, semantic landmarks, ARIA-labelled controls.
- Motion system: IntersectionObserver reveals with failsafes, eased counters, magnetic buttons, spotlight cards — all gated behind hover/pointer and reduced-motion checks.

---

© 2026 Lehlohonolo Goodwill Nchefu · Built in South Africa · privacy-first by default
