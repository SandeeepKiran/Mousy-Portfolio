# AGENTS.md — Mousy Portfolio (`main` branch)

Read this first. Single source of truth for AI agents (Cursor, Codex, Claude) in this repo.

## What this repo is

Design trials for **Sandeep Kiran's Portfolio**. **One branch = one design.** Every design
branch is published to GitHub Pages:

- `https://sandeeepkiran.github.io/Mousy-Portfolio/` → the branch named in `live.txt`
- `https://sandeeepkiran.github.io/Mousy-Portfolio/<branch>/` → each design branch

The official root site `https://sandeeepkiran.github.io/` is the separate **shell** repo
`sandeeepkiran.github.io`. It pulls branches from this repo using **its own** `live.txt`, rebuilds
hourly, and mirrors every branch at `https://sandeeepkiran.github.io/<branch>/`.

## The `main` branch holds machinery only

| File | Purpose |
|---|---|
| `live.txt` | One word: the branch shown at `/Mousy-Portfolio/`. Sandeep edits this by hand. Keep it at the top level. |
| `.github/build-site.sh` | Builds the site from all branches. **Also used by the shell repo** (downloaded from here), so keep its arguments stable. |
| `.github/workflows/deploy.yml` | Builds and deploys on push to main, branch delete, or the Run workflow button. |

Design work happens on design branches (`david`, `jonny`, trials). Each has its own `AGENTS.md`.

## Rules

- Each design branch keeps `.github/workflows/ping-deploy.yml`. Without it, pushes to that branch
  do not redeploy. Do not put a full deploy workflow on design branches.
- Branch names: letters, digits and dashes (they become case-sensitive URLs). Never `main`-only content
  on a design branch, and never a branch called `kitsune-labs` (that path is another project).
- Designs must use **relative paths** (`css/x.css`, `./`), never root paths (`/css/x.css`).
- **Originality:** no code, text or assets copied from other websites, and do not name or credit
  other sites anywhere in this repo. Private design notes live outside the repo.
- Contact email on portfolio pages: `sandeeepkiran@gmail.com`.
- Only Claude Code pushes to GitHub (Sandeep's personal account).
- Keep `CHANGELOG.md` (on `main`) current. A change to any design is a new version there, with a
  matching `vX.Y.Z` tag and GitHub Release.
