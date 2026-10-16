# AGENTS.md — Mousy Portfolio, `david` design

Single source of truth for AI agents (Cursor, Codex, Claude) working on this branch.
Read this first. Keep it current when you change structure, conventions or the TODO list.

## Purpose

One design of **Sandeep Kiran's Portfolio** (QA Manager, Bengaluru, India). It is a one-page
static site: hero, About, Projects (5 + 1 cards), Contact, and a footer.

This is the `david` branch of the `Mousy-Portfolio` repo. Each branch is one design and is
published automatically at `https://sandeeepkiran.github.io/<branch>/`. The `main` branch
explains how (`live.txt` + the deploy workflow). Do not add a deploy workflow here; the
small `ping-deploy.yml` only asks `main` to rebuild.

Sandeep is a QA engineer who is newer to coding. Keep the code simple enough for him to edit by
hand. Explain changes in plain language and give a short "why".

## Originality rule (important)

**All code, copy and artwork here are original.** Never paste source code, bundled JS/CSS,
text, images, logos or font files from any other website. Do not name or credit other sites
in this repo. Private design notes live outside the repo.

## File layout

```
index.html            All page content and structure (one page).
css/styles.css        All styles. Design tokens (colours, fonts) are at the top.
js/projects.js        The project card data: 5 projects + 1 special card. Edit here.
js/main.js            Behaviour: builds the cards, scroll effects, nav highlight.
assets/               Résumé PDF.
docs/00-STATE.md      Current status, what's done, what's next.
docs/01-DESIGN.md     Design notes: tokens, sizes, the 5+1 grid, motion.
docs/02-EDITING-GUIDE.md  Beginner guide (Simplified Technical English).
README.md             Short overview.
```

Project pictures go in an `images/` folder when added.

## How to run / preview

- **Easiest:** double-click `index.html`. It opens in the browser and works fully.
- **Local server** (closer to real hosting):
  ```powershell
  cd "C:\Users\SandeepKiran\Videos\Project - Mousy Portfolio"
  git switch david
  python -m http.server 8000
  ```
  Then open http://localhost:8000. Press `Ctrl+C` to stop.
- There is no build step, no `npm install`, and no dependencies. Fonts come from Google Fonts. If the
  machine is offline, the site falls back to system fonts.

## How to edit content

- **Name, title, About text, skills, location, social links, email:** in `index.html`.
- **Projects:** in `js/projects.js`. The page shows the first 5 items of `PROJECTS`, then
  `SPECIAL_CARD` as card 6. Set `image` to a file path to replace the coloured placeholder.
  Always fill in `imageAlt` when you add a picture.
- **Colours / fonts:** CSS variables in `:root` at the top of `css/styles.css`.
- **Scroll effects:** `js/main.js` (`updateHero`, `updateAbout`, `updateHeader`).

## Conventions

- Plain HTML + CSS + vanilla JS. **No frameworks, no build tools, no ES modules.** ES modules
  and `fetch()` do not work when the page is opened from disk (`file://`), and Sandeep must
  be able to double-click `index.html`.
- **Relative paths only** (`css/styles.css`, never `/css/styles.css`). The site is served from
  sub-folders like `/david/`, so a leading `/` breaks it.
- Scripts are classic `<script>` tags. `projects.js` sets `window.PROJECTS` and
  `window.SPECIAL_CARD`, so it must load before `main.js`.
- Readable over clever. Use descriptive names. Comments explain **why**, not what.
- Match the existing style: BEM-ish class names (`block__element--modifier`), 2-space indent,
  double quotes in JS.
- Accessibility is required. Use semantic tags and keep visible focus styles. Hide decorative
  drawings with `aria-hidden="true"`. Give images real `alt` text. Respect
  `prefers-reduced-motion` (see section 11 of the CSS and the `reduceMotion` checks in JS).
- Progressive enhancement: JS adds the `js` class to `<html>`. Hidden-until-scrolled states only
  apply under `.js`, so all text is visible without JS.
- Build cards with `textContent`, not `innerHTML`, for user-supplied text.
- Contact email on all portfolio pages is `sandeeepkiran@gmail.com` (the résumé PDF keeps its own).
- Put throwaway scripts and screenshots in a scratch folder outside the project.

## Still to do

- [ ] Project pictures for the 5 cards (`images/`, then `image` + `imageAlt` in `js/projects.js`).
- [ ] Optional: replace the CSS desk drawing in the hero with a real illustration/photo.

## Verification checklist (before you say "done")

1. Open the page from disk and from `python -m http.server`. Both must show 6 project cards.
2. Check the browser console: it must show no errors.
3. Take Playwright screenshots at 1440px and 390px wide. Check the About scan (counter 000 → 100)
   and that the page does not scroll sideways (`scrollWidth` equals the viewport width).
4. Test with reduced motion turned on. The hero must not tilt, and all About cards must be visible.
