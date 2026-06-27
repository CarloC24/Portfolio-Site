# Deploy to Domain — Plan

Goal: put the portfolio on a custom domain (`carlo-clamucha.me`) hosted on Vercel,
using Cloudflare Registrar for flat-rate cost + full DNS control.

---

## Part A — Account setup (do these in Cloudflare / Vercel; no code involved)

### 1. Register the domain
- [ ] Cloudflare → **Domain Registration → Register Domains**
- [ ] Register `carlo-clamucha.me` (~$18/yr — `.me` is a pricier TLD, but still flat at renewal, no markup)
- Registering here automatically puts the domain on Cloudflare DNS.

### 2. Add the domain in Vercel
- [ ] Vercel → your project → **Settings → Domains**
- [ ] Add `carlo-clamucha.me`
- [ ] Add `www.carlo-clamucha.me`
- Vercel will display the DNS records it expects (matches the table below).

### 3. Create DNS records in Cloudflare
- [ ] `A`     record · name `@`   · value `76.76.21.21`
- [ ] `CNAME` record · name `www` · value `cname.vercel-dns.com`
- [ ] **Set BOTH records to "DNS only" (grey cloud), NOT proxied (orange cloud).**
  - This is the #1 gotcha. Cloudflare's proxy + Vercel's SSL fight each other and
    cause redirect loops / cert errors. Grey cloud = Vercel handles SSL cleanly.

### 4. Finalize
- [ ] Wait ~1–2 min for Vercel to auto-provision the free Let's Encrypt SSL cert.
- [ ] In Vercel's Domains panel, pick the canonical form (apex `carlo-clamucha.me`
      vs `www.`) with the one-click redirect toggle.
- [ ] Visit `https://carlo-clamucha.me` to confirm it loads with a valid cert.

---

## Part B — Code changes (repo: `pages/_app.js`)

### 1. Fix the URL meta tag property
The host is already correct (`carlo-clamucha.me`), but line ~102 uses a
non-standard property name. Only the property changes (`url` → `og:url`):
```jsx
<meta property="og:url" content="https://carlo-clamucha.me" />
```

### 2. (Optional) Fix the whole Open Graph block
Lines ~96–106 are all missing the `og:` prefix, so link previews don't render.
Add `og:` to each for proper social cards:
```jsx
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta
  property="og:description"
  content="My own portfolio website built in NextJS and React"
/>
<meta property="og:url" content="https://carlo-clamucha.me" />
<meta
  property="og:site_name"
  content="Carlo Clamucha's portfolio website"
/>
```
- [ ] (Optional but recommended) add `og:title` and `og:image` for a full preview card.

### 3. Migrate Google Analytics → GA4
The current tag uses Universal Analytics (`UA-146357995-1`), which Google shut off
on **2023-07-01** — it collects nothing.

Steps:
- [ ] analytics.google.com → **Admin → Create property** → add a **Web data stream**
      for `carlo-clamucha.me` → copy the **`G-XXXXXXXXXX`** measurement ID.
- [ ] In `pages/_app.js`, replace the ID in **two places**:
  - line ~109: `src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"`
  - line ~117: `gtag('config', 'G-XXXXXXXXXX');`

---

## Summary

| Task | Where | Owner |
|------|-------|-------|
| Register `carlo-clamucha.me` | Cloudflare | You |
| Add domain to project | Vercel | You |
| Add A + CNAME (DNS only) | Cloudflare | You |
| Pick canonical redirect | Vercel | You |
| Fix `og:url` / OG block | `pages/_app.js` | Code |
| Migrate UA → GA4 | `pages/_app.js` (needs `G-…` ID) | Code |

Estimated cost: ~$18/yr · Estimated time: ~15 min.
