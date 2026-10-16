# 01 — Design notes

How the `david` design is built: sections, tokens, sizes and motion.

## Section order

| # | Section  | What it is |
|---|----------|------------|
| 1 | Header   | Fixed. Logo at top-left, centred pill nav (About / Projects / Contact), orange "Get in touch" pill at top-right. Phones: logo only. |
| 2 | Hero     | Full-screen cream panel. Big two-line name on the left, a small tilted navy job-title tag, and an illustration on the right. |
| 3 | About    | Pinned full-screen blue "hologram" stage. A figure on a glowing platform, a scan line, a 000→100 counter, and three info cards that appear one by one. |
| 4 | Projects | "Selected" tag + "Projects" heading, then a 2-column grid of 5 project cards + 1 "next project" card. |
| 5 | Contact  | A darker beige band with "Let's work together!", four round social icons, and an illustration. |
| 6 | Footer   | Back-to-top round button in the centre, small links on the right, two short centred lines. |

## Colours

| Token          | Value     | Use |
|----------------|-----------|-----|
| `--cream`      | `#f5efe6` | Page background |
| `--sand`       | `#f1e5d5` | Nav pill, image boxes |
| `--sand-dark`  | `#ebdfcf` | Project card hover panel |
| `--beige`      | `#ece0d0` | Contact band |
| `--ink`        | `#2d2a24` | Main text |
| `--ink-soft`   | `#5f5646` | Card descriptions |
| `--line`       | `#dfd2bf` | Dashed border of card 6, outlines |
| `--accent`     | `#ff8400` | Orange buttons, active nav pill, hover arrow |
| `--navy`       | `#1f3a78` | Tilted tags ("QA Manager", "Selected") |
| `--blue-deep` / `--blue` | `#011763` / `#0748b8` | About stage gradient |
| `--cyan`       | `#8ae8ff` | Hologram glow, scan line |

**Contrast decision:** text on the orange is dark ink (about 7:1). White text would only reach
about 2.5:1, which fails WCAG AA. To try white anyway, set `--on-accent: #fff` in `css/styles.css`.

## Fonts (all free, from Google Fonts)

| Use | Font |
|-----|------|
| Everything | **Urbanist** (400/700/900) |
| Tilted tags | **Silkscreen** (pixel font) |
| Hologram cards / counter | **Space Mono** |

Sizes: hero name 88px / weight 900 / line-height 96px, letter-spacing 0.02em. Section headings
72px / 900. Card title 22px / 700. Card description 16px / 500. Nav and buttons 16px, uppercase, 700–800.

## Layout and spacing

- Header: 96px tall, 20px side padding. Nav buttons are 128px wide inside a 3px-padded pill.
  The CTA is 44px tall with 26px side padding and a 100px radius.
- Hero: 100vh. The name block starts at about 8.5% from the left and sits vertically centred.
- About: the section is 360vh tall and its stage is `position: sticky`. The first 100vh hide
  behind the hero (negative top margin), so the stage is already pinned when the hero lifts away.
- Big panels (About, Projects, Contact) have 48px rounded bottom corners (28px on phones). Each
  panel overlaps the next one, so the corners show the colour underneath.
- Projects: content width 920px, centred. 2 columns, 28px gap, 16:9 image box, 16px radius.

## How the 5 + 1 grid works

- `js/projects.js` holds `PROJECTS` (an array) and `SPECIAL_CARD` (one object).
- `js/main.js` → `renderProjects()` takes the **first 5** projects, builds a card for each, then
  appends the special card. That gives 6 cards.
- CSS `grid-template-columns: repeat(2, 1fr)` puts them in 3 rows of 2, so the special card
  lands **bottom-right**.
- On screens ≤ 760px the grid becomes 1 column. The special card is then last.
- The special card has a dashed 4px border, a sand background and a "+" icon instead of a picture.
- A project without an `image` gets a tinted, striped placeholder box. The tint rotates
  through 5 colours so the grid does not look flat.

## Motion (all disabled under `prefers-reduced-motion: reduce`)

| Effect | Where |
|--------|-------|
| Typing reveal of the hero tag | CSS `@keyframes type-in` |
| Hero tilts (−4°), shrinks slightly and rounds its corners as you scroll | `updateHero()` sets `--lift` |
| About scan: the scan line rises, solid → hologram, counter 000→100, cards fade in at 8% / 35% / 65% | `updateAbout()` sets `--scan` |
| Header turns dark over the blue stage | `updateHeader()` |
| Active nav pill follows the section in view | `updateActiveNav()` |
| Project images scale 0.8 → 1 when they scroll in | IntersectionObserver in `setUpReveal()` |
| Card hover: sand panel grows around the card, image scales to 1.02, orange arrow pops in | CSS |

## Drawings

All illustrations (desk scene, hologram figure, parcels) are flat CSS/SVG drawn for this site.
Social icons are simple hand-drawn SVGs; GitHub is shown as a `</>` code icon.
