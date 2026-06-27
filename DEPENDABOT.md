# Resolving Dependabot / npm audit issues

This document explains how to clear the security alerts on this repo. It was written
against the state of the `feature/dependabot-issues` branch.

## TL;DR

```bash
# 1. Fix the one open Dependabot alert (postcss) via an npm override
#    -> add the "overrides" block below to package.json, then:
npm install

# 2. (Recommended) Remove the unused legacy babel-core dep to clear the
#    babel/json5 cluster that npm audit reports:
npm uninstall babel-core
npm audit fix          # cleans up the remaining modern @babel/core advisory

# 3. Verify, commit the updated package.json + package-lock.json
npm audit
git add package.json package-lock.json
git commit -m "Fix Dependabot alerts: override postcss, drop unused babel-core"
```

---

## 1. What is actually open

The authoritative source is GitHub Dependabot, not `npm audit`. Checking the live
alerts:

```bash
gh api repos/CarloC24/Portfolio-Site/dependabot/alerts \
  --jq '.[] | select(.state=="open") | {number, package: .dependency.package.name, severity: .security_advisory.severity, range: .security_vulnerability.vulnerable_version_range, patched: .security_vulnerability.first_patched_version.identifier}'
```

There is **exactly one open alert**:

| # | Package | Severity | Vulnerable | Patched | Advisory |
|---|---------|----------|-----------|---------|----------|
| 139 | `postcss` | Medium | `< 8.5.10` | `8.5.10` | [GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93) — XSS via unescaped `</style>` in CSS stringify output |

Every other Dependabot alert (tar, lodash, next, @babel/runtime, minimatch, etc.) is
already in the `fixed` state and needs no action.

`postcss` is a **transitive** dependency — we never list it directly. It comes in
through `next`:

```
Portfolio-Site
└─ next@16.2.6
   └─ postcss  (next pins this to exactly "8.4.31")
```

---

## 2. Why `npm audit fix` does NOT fix postcss

`next@16.2.6` declares `"postcss": "8.4.31"` as an **exact** version in its own
dependencies. Because the parent pins it, npm cannot bump postcss on its own. If you
run `npm audit fix --force`, npm's only "solution" is to **downgrade `next` to 9.3.3**,
which is a massive breaking change and obviously not what we want:

```
postcss  <8.5.10
fix available via `npm audit fix --force`
Will install next@9.3.3, which is a breaking change   <-- do NOT do this
```

The correct fix for a pinned transitive dependency is an **npm `overrides`** entry,
which forces the nested version without touching `next`.

---

## 3. The fix: override postcss

Add an `overrides` block to `package.json`. `postcss` 8.5.x is API-compatible with the
8.4.x that `next` expects (same major version), so this is safe.

```jsonc
{
  // ...existing fields...
  "dependencies": {
    "babel-plugin-styled-components": "^2.1.4",
    "next": "^16.2.6",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-responsive-carousel": "^3.2.23",
    "react-slick": "^0.31.0",
    "styled-components": "^6.4.1"
  },
  "overrides": {
    "postcss": "^8.5.10"
  }
}
```

Then regenerate the lockfile:

```bash
npm install
```

Confirm the resolved version moved past the patched floor:

```bash
npm ls postcss
# node_modules/postcss should now show 8.5.10 (or newer 8.5.x)
```

---

## 4. (Recommended) Remove the unused legacy `babel-core`

`npm audit` reports ~9 vulnerabilities, far more than the single open Dependabot alert.
Almost all of the extra ones (`babel-traverse` **critical**, `json5` **high**,
`babel-core`, `babel-template`, `babel-helpers`, `babel-register`) come from a single
**unused** direct dependency in `package.json`:

```json
"babel-core": "^6.26.3"
```

This is the *legacy* Babel 6 package. This project does not use it:

- The Babel config (`.babelrc`) uses the `next/babel` preset and the
  `styled-components` plugin.
- Real Babel transforms run through the **modern** `@babel/core@7.x`, which is pulled in
  legitimately by `babel-plugin-styled-components`.
- Nothing in the source tree imports `babel-core` (verify with
  `grep -rn "babel-core" --exclude-dir=node_modules .` — only `package.json` matches).

The dependency tree confirms it is a self-contained dead island:

```
babel-core@6.26.3
└─ babel-register@6.26.0
   └─ babel-core@6.26.3 (deduped)   <- only depended on by itself
```

Removing it deletes the entire vulnerable Babel-6 / json5 subtree in one move:

```bash
npm uninstall babel-core
```

---

## 5. Clean up the remaining modern `@babel/core` advisory

After removing `babel-core`, the only audit finding left (besides postcss, fixed above)
is the modern `@babel/core` advisory, which is a simple in-range bump — no breaking
change, no `--force` needed:

```bash
npm audit fix
```

---

## 6. Verify

```bash
npm audit                 # should report 0 vulnerabilities
npm run build             # confirm the production build still succeeds
```

Re-check the live Dependabot state (it may take a few minutes after the branch/PR is
pushed for GitHub to mark #139 as fixed):

```bash
gh api repos/CarloC24/Portfolio-Site/dependabot/alerts \
  --jq '.[] | select(.state=="open") | {number, package: .dependency.package.name}'
# expect: no output
```

---

## 7. Commit and open the PR

```bash
git add package.json package-lock.json
git commit -m "Fix Dependabot alerts: override postcss, drop unused babel-core"
git push -u origin feature/dependabot-issues
gh pr create --fill --base master
```

Once the PR merges into `master`, Dependabot automatically flips alert **#139** to
`fixed`.

---

## 8. (Optional) Prevent future drift

There is currently **no `.github/dependabot.yml`**, so Dependabot only raises security
alerts — it does not open version-bump PRs on a schedule. To get automatic update PRs,
add:

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
```

---

## Reference: full command sequence

```bash
# from the feature/dependabot-issues branch
# (after adding the "overrides": { "postcss": "^8.5.10" } block to package.json)
npm install
npm uninstall babel-core
npm audit fix
npm audit                 # -> 0 vulnerabilities
npm run build             # -> build succeeds
git add package.json package-lock.json
git commit -m "Fix Dependabot alerts: override postcss, drop unused babel-core"
git push -u origin feature/dependabot-issues
gh pr create --fill --base master
```
