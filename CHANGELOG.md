# Changelog

All notable changes to Sandeep Kiran's Portfolio. Newest first.
Versions follow `MAJOR.MINOR.PATCH`; every version gets a git tag and a GitHub Release.

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
