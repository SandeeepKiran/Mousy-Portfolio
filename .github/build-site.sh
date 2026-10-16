#!/usr/bin/env bash
# Builds one static site out of every design branch of Mousy-Portfolio.
#
#   build-site.sh <repo-dir> <out-dir> <live-branch>
#
#   <repo-dir>    a git clone of Mousy-Portfolio with all branches fetched (refs/remotes/origin/*)
#   <out-dir>     where the finished site goes (it is emptied first)
#   <live-branch> the branch shown at the root of the site (the word in live.txt)
#
# Result:  <out-dir>/            = the live branch
#          <out-dir>/<branch>/   = every other design branch too (including the live one)
#
# Used by BOTH repos: Mousy-Portfolio's own deploy, and the sandeeepkiran.github.io shell,
# which downloads this file from Mousy's main branch. One copy of the logic, so they never drift.
set -euo pipefail

repo=$1
out=$2
live=$(printf '%s' "$3" | tr -d '[:space:]' | tr '[:upper:]' '[:lower:]')

rm -rf "$out"
mkdir -p "$out"

# Copy a branch's files (no .git, no .github) into a folder.
export_branch() {
  mkdir -p "$2"
  git -C "$repo" archive "origin/$1" | tar -x -C "$2"
  rm -rf "$2/.github"
}

# Every branch except main (main only holds this machinery, not a design).
branches=$(git -C "$repo" for-each-ref --format='%(refname:lstrip=3)' refs/remotes/origin \
  | grep -vx 'HEAD' | grep -vx 'main' || true)

echo "Design branches found:"
echo "$branches" | sed 's/^/  - /'
echo "Live branch (from live.txt): $live"

if ! grep -qx -- "$live" <<<"$branches"; then
  echo "::error::live.txt says '$live', but there is no branch with that name. Fix the word in live.txt."
  exit 1
fi

export_branch "$live" "$out"

for b in $branches; do
  # A branch name becomes part of the web address, so keep it URL-friendly.
  if [[ ! $b =~ ^[a-z0-9][a-z0-9-]*$ ]]; then
    echo "::warning::Skipped branch '$b': use only lowercase letters, digits and dashes (example: david-gold-trial)."
    continue
  fi
  # Never let a branch folder overwrite a real file or folder of the live design (e.g. 'assets').
  if [[ -e "$out/$b" ]]; then
    echo "::warning::Skipped branch '$b': the live design already has a file or folder called '$b'."
    continue
  fi
  export_branch "$b" "$out/$b"
done

# Serve files exactly as they are (no Jekyll processing).
touch "$out/.nojekyll"
echo "Site built in $out"
