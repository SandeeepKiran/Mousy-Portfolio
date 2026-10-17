# Changelog

All notable changes to Sandeep Kiran's Portfolio. Newest first.
Versions follow `MAJOR.MINOR.PATCH`; every version gets a git tag and a GitHub Release.

## 1.1.0 — 2026-10-17

### Genshin site (`MousyGenshinPreview`, the live main address)

- Firefly backgrounds from HoYoWiki's character pages, changing element as you scroll:
  Anemo → Geo → Electro → Dendro → Hydro → Pyro → Nod-Krai (white) → Cryo → Abyss (black).
  The seven real elements are HoYoWiki's own videos, unchanged; Nod-Krai and Abyss are recoloured from them.
  Videos load only when their part of the page is reached; reduced-motion visitors get still images.
- HoYoWiki's cursor, plus a matching lit-up cursor for links and buttons (HoYoWiki itself falls
  back to the plain system hand there).
- Contact buttons get an element seal on hover, in HoYoWiki's exact colours: Email = Pyro,
  Telegram = Cryo, LinkedIn = Hydro, Portfolio = Geo, Resume = Electro.
- Tab title is now "Sandeeep's Portfolio", with the Venti blob as the tab icon.
- The "Preview of github.com/SandeeepKiran · snapshot" bar is gone.

### GitHub profile README

- New Resume button (Keqing's Starward Sword icon) linking to the QA Manager resume PDF.
- AI Evaluation icon is now Nahida's All Schemes to Know, in Dendro green (was Durin).

## 1.0.2 — 2026-10-17

### Mousy-Portfolio

- The main site now shows the Genshin design: the `sandeeepkiran.github.io` switch's `live.txt`
  says `MousyGenshinPreview` (was `jonny`).
- Fix: `build-site.sh` turned the word in `live.txt` into lowercase, so a branch with capitals
  (`MousyGenshinPreview`) could never be the live one and the deploy failed. It now matches the
  branch without caring about capitals and uses the branch's real spelling.

## 1.0.1 — 2026-10-17

### GitHub profile README

- The blossom next to "Mousy" is now the real 3D sakura from Sandeep's palette photo (he cut it out
  with a free background remover). It sways gently.
- "More about me" is open by default.
- New `assets/source/`: every original image behind the profile (sakura, Venti blob, wiki
  background, cards, Albedo splash, Mondstadt, the grey Genshin skill icons) with a README of where
  each came from. New `tools/`: the helper scripts that tint the icons, render the cards and build
  the README and preview.
- (Tried a redraw of Albedo's splash-art seal in the stats ring; reverted to the 1.0.0 seal.)

### Mousy-Portfolio

- `MousyGenshinPreview` refreshed to match.

## 1.0.0 — 2026-10-17

The first release: one repo for every portfolio design, a switch for the main site, and a
redesigned GitHub profile.

### Mousy-Portfolio (this repo)

- **One branch = one design.** Every design branch is published automatically at
  `https://sandeeepkiran.github.io/Mousy-Portfolio/<branch>/`.
- **`live.txt` on `main`** picks the design shown at `/Mousy-Portfolio/`. Edit one word to switch.
- `main` holds only the machinery: `live.txt`, `.github/build-site.sh` and the deploy workflow.
  Each design branch carries a small `ping-deploy.yml` that asks `main` to rebuild after a push.
- Safe failure: if `live.txt` names a branch that does not exist, the deploy stops with a clear
  error and the previous site stays online.
- Branch names may use letters, digits and dashes (case-sensitive URLs).
- **`david` design:** one-page site with a tilting hero, a hologram About stage and a 5 + 1
  project grid. Real content: QA Manager title, Bengaluru, bio, skills, five projects, email,
  GitHub, LinkedIn, Telegram and the résumé. Original code and drawings only.
- **`jonny` design:** the previous main site, updated to QA Manager, all public projects, the
  `sandeeepkiran@gmail.com` contact address and the new résumé. Links made relative so it works
  from a sub-folder.
- **`MousyGenshinPreview` branch:** a browsable preview of the GitHub profile README, which
  follows your light or dark theme.

### sandeeepkiran.github.io (the main site)

- Turned into a small **switch**: its own `live.txt` (starts as `jonny`) picks which
  Mousy-Portfolio branch is shown at `https://sandeeepkiran.github.io/`.
- Every Mousy-Portfolio branch is also mirrored at a short link, for example `/david/`.
- Rebuilds every hour, on any `live.txt` edit, and on the **Run workflow** button. A keep-alive
  step stops GitHub from pausing the hourly schedule in a quiet repo.
- Default branch renamed `master` → `main`. Description is now "Sandeep Kiran's Portfolio"
  (it said "My GitHub Guides").

### GitHub profile README (SandeeepKiran/SandeeepKiran)

- Animated banner: "Hi, I'm Sandeep Kiran" with a waving Venti blob, "aka Mousy" in Yae Miko pink
  with a sakura blossom, real-looking dandelion seeds on the wind, and Albedo's Solar Isotoma in a
  clock-like gold ring.
- Static "QA Manager @ SoundHound AI" title (gold in dark mode) over a typing line that cycles
  GenAI, LLM evaluation and the contact email. Line widths are measured, so they stay centred.
- Contact buttons in their brand colours: Email, Telegram, LinkedIn, and Portfolio with the
  Anemo emblem.
- Tip box with Albedo's line and Venti's card on the HoYoLAB wiki background.
- Section icons are official Genshin skill glyphs in their element colours (Anemo, Electro, Pyro,
  Hydro, Geo).
- Skill pills for AI & LLMs, AI Evaluation, Testing, Tech & Tools and Domains.
- Project table with Try / Download / Demo and Source buttons for Kitsune Labs, Windfall Gallery,
  My Personal UX for Amazon, Leyline Autofill and Sandstorm Secure.
- Self-drawn stats, activity and streak cards (Albedo burst seal in the stats ring) plus a
  contribution snake, all redrawn daily by a GitHub Action into the `output` branch, in light and
  dark versions. `effects.txt` switches the decorations: `ai-drawn`, `fanart` (placeholder) or `off`.
- "More about me" card on the Anemo card-back art, with XDA, IEEE and Portfolio buttons.
- Brag video as GIFs: every page at a glance, then me, then each project, over Mondstadt.

### Kitsune Labs

- Removed the retired `docs/design-reference/` mockups (the app has a new UI); docs now point at
  the live app.
