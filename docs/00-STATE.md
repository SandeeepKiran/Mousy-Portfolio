# 00 — Project state

_Last updated: 2026-10-17_

## Status

**Published** on the `david` branch of
[Mousy-Portfolio](https://github.com/SandeeepKiran/Mousy-Portfolio):
https://sandeeepkiran.github.io/david/ (and `/Mousy-Portfolio/david/`).
Real content is in: title, bio, skills, 5 projects, contact links, résumé.

## Done

- One-page static site (HTML + CSS + vanilla JS, no build step), original code and drawings:
  - Fixed header: logo, pill nav with active-section highlight, orange "Get in touch" button.
  - Hero: big name, tilted "QA Manager" tag with a typing reveal, CSS-drawn desk scene.
  - The hero card tilts and lifts away on scroll and uncovers a pinned blue "hologram" About stage.
  - About: the scan line turns the figure into a hologram. A counter runs 000 → 100, and three info
    cards appear (name + location, bio, skills). On phones the cards stack and a progress bar replaces the counter.
  - Projects: "Selected" tag + heading, a 2-column 5 + 1 grid driven by `js/projects.js`,
    with a scale-in on scroll and a hover panel and arrow.
  - Contact band: "Let's work together!", round social icons (email, GitHub, LinkedIn, Telegram), CSS figure + parcels.
  - Footer: back-to-top button, résumé + GitHub links, location, copyright year.
- Responsive (tested at 1440px and 390px), keyboard focus styles, skip link,
  `prefers-reduced-motion` support. Works from `file://`.

## Next

1. Add real project pictures in `images/` and link them in `js/projects.js`.
2. Optionally replace the CSS hero drawing with a real illustration.
3. Optional later: add a page for each project. Today the cards link to the repo or live demo.
