# Nanfuen Bonsai — Project Context Rules

## Project Identity

**Nanfuen** is a bonsai garden located in **Argentina**, inspired by Japanese art with deep Argentine roots. The name "Nanfuen" (南風苑) means "Garden of the Southern Wind" — a nod to the southern hemisphere.

The website serves multiple purposes:
- **Portfolio** — showcase of the garden's work, trees, and artistic vision
- **About** — story, philosophy, and team behind Nanfuen
- **Shohin Section** — dedicated area for shohin-style bonsai (miniature trees)
- **Classes & Workshops** — pricing plans, schedules, and enrollment for bonsai classes
- **Catalog** — product catalog (trees, pots, tools, goods)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 14** (Pages Router) |
| Output | **Static Export** (`output: 'export'`) — deployed as static files |
| UI Library | **Bootstrap 5** + **React-Bootstrap** |
| Styling | **Vanilla CSS** + CSS Custom Properties (no Tailwind) |
| Language | **JavaScript** (no TypeScript) |
| i18n | Custom `LanguageContext` — URL-query based (`?locale=es` / `?locale=en`) |
| Testing | **Jest** + **React Testing Library** |
| Linting | **ESLint** + **Prettier** |

---

## Design System

The site uses a **minimalist dark theme** derived from the Nanfuen brand logo.

### Color Palette (CSS Custom Properties in `styles/globals.css`)

| Token | Value | Meaning |
|---|---|---|
| `--color-bg` | `#0D1117` | Page background |
| `--color-surface` | `#161B22` | Cards, panels |
| `--color-surface-hover` | `#1C2333` | Hover state |
| `--color-border` | `#21262D` | Borders, dividers |
| `--color-primary` | `#93B4F5` | Enso circle blue |
| `--color-secondary` | `#B5A06A` | Mate gourd gold |
| `--color-navy` | `#1B2A4A` | Bonsai trunk accent |
| `--color-text` | `#E6EDF3` | Body text |
| `--color-text-heading` | `#FFFFFF` | Headings |
| `--color-text-muted` | `#8B949E` | Secondary text |

### Typography
- **Font**: `Inter` (Google Fonts) — weights 300, 400, 500, 600, 700
- Headings: `font-weight: 500`, `letter-spacing: -0.02em`
- Buttons: uppercase, `letter-spacing: 0.05em`, `font-size: 0.85rem`

### UI Principles
- Minimalist: minimal border-radius (`4px`), no heavy shadows, no gradients on surfaces
- Subtle micro-animations: `transition: all 0.2s–0.3s ease`
- Dark-first, always. No light mode toggle.
- Hover states use `transform: translateY(-1px)` on primary CTAs

---

## Internationalization (i18n)

- **Languages**: Spanish (`es`) — default, English (`en`)
- **Implementation**: Custom `LanguageContext` in `components/i18n/LanguageContext.js`
- **Locale files**: `public/locales/es.json` and `public/locales/en.json`
- **Pattern**: `t('section.key')` dot-notation lookup
- **URL**: Locale is passed via query param `?locale=es` or route prefix (in-progress)
- **Default locale**: `es` (Spanish) — the primary audience is Argentine

---

## Project Structure

```
nanfuen_dev/
├── pages/                  # Next.js Pages Router
│   ├── _app.js             # Global app wrapper (Bootstrap + LanguageProvider)
│   ├── index.js            # Home page
│   ├── about.js            # About page
│   ├── shohin.js           # Shohin bonsai section
│   ├── classes.js          # Classes & pricing
│   ├── catalog.js          # Main catalog entry
│   ├── catalog/            # Catalog sub-pages
│   └── products/           # Individual product pages
├── components/
│   ├── layout.js           # Global layout (nav + footer wrapper)
│   ├── menu.js             # Navigation component
│   ├── i18n/
│   │   └── LanguageContext.js  # i18n context + useLanguage hook
│   ├── planPricingCard.js  # Class/pricing cards
│   ├── planPricingGrid.js  # Grid layout for pricing
│   ├── planSearchBar.js    # Plans filter/search
│   ├── howToBuy.js         # Purchase flow guidance
│   └── products/           # Product card components
├── styles/
│   └── globals.css         # Global CSS variables and resets
├── public/
│   ├── locales/            # i18n translation files
│   ├── images/             # Static image assets
│   └── data/               # JSON data (products, catalog)
└── next.config.js          # Static export config
```

---

## Current Status — Active Revamp

> ⚠️ The site is **mid-revamp**. Only add high-level frameworks and patterns. Avoid premature implementation of specific pages until the design direction is confirmed.

### What's done
- Dark theme CSS design system established
- Bootstrap 5 integrated and customized
- Custom i18n system working with ES/EN
- Core pages exist (home, about, shohin, catalog, classes)
- Component architecture is stubbed

### What's in progress / planned
- UI modernization of individual pages
- URL-based i18n routing (compatible with static export)
- Shohin showcase redesign
- Catalog with filtering
- Classes / pricing page

---

## Coding Conventions

- Use **CSS Custom Properties** (no hardcoded hex values in components)
- Use **React functional components** with hooks
- Use **`useLanguage()`** hook for all user-facing strings
- Use **Bootstrap grid** (`Container`, `Row`, `Col`) for layout
- Use **CSS Modules** (`.module.css`) for component-scoped styles
- Keep pages as **thin wrappers** — logic lives in components
- No TypeScript — plain JavaScript with PropTypes where useful
- All images go in `public/images/`; use Next.js `<Image>` component
- Data files (product catalogs, etc.) live in `public/data/` as JSON

---

## Key Constraints

1. **Static export only** — no server-side logic, no API routes with side effects
2. **No Tailwind** — use Vanilla CSS + Bootstrap utilities
3. **No TypeScript** — JavaScript only
4. **Spanish default** — all new content must have ES translation first
5. **Mobile-first** — designs should work on small screens before desktop

---

## Brand Voice

- Calm, contemplative, artistic
- Blend of Japanese aesthetics with Argentine warmth
- Premium but accessible — bonsai is for everyone
- Text should feel like it belongs in a gallery, not an e-commerce store
