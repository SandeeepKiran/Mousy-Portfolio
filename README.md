# Mousy Portfolio

Design trials for **Sandeep Kiran's Portfolio**. Every branch is one design, and every branch is live.

| Link | Shows |
|---|---|
| https://sandeeepkiran.github.io/Mousy-Portfolio/ | the branch named in [`live.txt`](live.txt) |
| https://sandeeepkiran.github.io/Mousy-Portfolio/david/ | branch `david` |
| https://sandeeepkiran.github.io/Mousy-Portfolio/jonny/ | branch `jonny` |
| https://sandeeepkiran.github.io/Mousy-Portfolio/MousyGenshinPreview/ | branch `MousyGenshinPreview`: a preview of the GitHub profile README, light and dark |
| https://sandeeepkiran.github.io/Mousy-Portfolio/&lt;branch&gt;/ | any other design branch |

The official site, https://sandeeepkiran.github.io/, is a separate small repo
([sandeeepkiran.github.io](https://github.com/SandeeepKiran/sandeeepkiran.github.io)). It has its
own `live.txt` that picks one of these branches, and it also serves every branch at a short link
like https://sandeeepkiran.github.io/david/.

## Switch the design shown here

1. Open [`live.txt`](live.txt).
2. Click the pencil icon (Edit).
3. Replace the word with a branch name, for example `jonny`.
4. Click **Commit changes**.

The site updates in about a minute (see the **Actions** tab).

## Start a new design trial

1. Make a new branch from an existing design (for example from `david`).
2. Name it with letters, digits and dashes only, for example `david-gold-trial`.
   The name becomes the web address, and the address is case-sensitive.
3. Push it. It goes live at `/Mousy-Portfolio/<branch>/` automatically.

## How it works

- `main` holds no design. It holds `live.txt`, the build script (`.github/build-site.sh`) and the
  deploy workflow (`.github/workflows/deploy.yml`).
- Each design branch carries a tiny `.github/workflows/ping-deploy.yml`. When you push that branch,
  it starts the deploy on `main`, which rebuilds the site from all branches.
- If `live.txt` names a branch that does not exist, the deploy stops with a clear error and the
  previous version stays online.
