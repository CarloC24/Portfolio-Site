# TODO — Portfolio Site Improvements

Tracked follow-ups for the portfolio site. Link statuses verified 2026-06-27.

## Broken links (high priority)

Dead links from a portfolio read as "broken" to visitors and recruiters — these are the highest-impact fixes.

- [ ] **Replace dead resume link** — `https://resume.creddle.io/resume/fwoe7ya3wlk` is down (no response). Used in `Components/Navbar.js` and `Components/Contact.js`. Host an up-to-date resume PDF (e.g. `/public/resume.pdf`) and update both references.
- [ ] **Fix Bonafind demo link** — `http://bonafind.biz` is dead (no response). In `assets/projects.json`. Redeploy the demo or replace the live link with a short video/screenshots; the GitHub link still works, so keep it.
- [ ] **Fix Pair Me demo link** — `https://pair-me.netlify.com` returns 404 (old `netlify.com` subdomain; Netlify now uses `.app`). In `assets/projects.json`. Redeploy or replace with demo media. GitHub link present.
- [ ] **Fix Sickfits demo link** — `https://sickfits-next-prod-carlo.herokuapp.com` returns 404 (Heroku free dynos retired Nov 2022). In `assets/projects.json`. Redeploy on Vercel/Render/Fly or replace with demo media. ⚠️ No GitHub link — this dead link is currently its only link.
- [ ] **Fix Now That's Delicious demo link** — `https://now-thats-delicious-carlo.herokuapp.com` returns 404 (Heroku). In `assets/projects.json`. Redeploy or replace with demo media. ⚠️ No GitHub link — this dead link is currently its only link.
