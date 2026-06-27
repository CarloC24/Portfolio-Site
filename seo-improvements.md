# SEO Improvements — Plan

Audit of the portfolio's SEO surface, with implementation steps. Findings were
verified against a fresh production build (`next start`), not assumed.

Stack reminder: Next.js **pages router**, React 19, styled-components. Shared
`<Head>` lives in `pages/_app.js`; document shell in `pages/_document.js`. Static
files are served from `static/` (confirmed serving at `/static/...` → HTTP 200).
Target domain: `https://carlo-clamucha.me`.

Legend: 🔴 critical · 🟠 high · 🟡 polish

---

## 🔴 1. `robots.txt` returns 404 (not served)

**Problem:** `robots.txt` is at the repo root, but Next 16 only serves static
files from `public/`. Verified: `GET /robots.txt` → **404**. Crawlers get
nothing. Its current body (`Disallow: /static/`) would also block your portfolio
images from Google Images and block social crawlers from fetching `og:image`.

**Steps:**
- [ ] Create a `public/` directory at the repo root (Next's static-serving folder).
- [ ] Move `robots.txt` into it → `public/robots.txt` with these contents:
  ```
  User-agent: *
  Allow: /

  Sitemap: https://carlo-clamucha.me/sitemap.xml
  ```
- [ ] Delete the old root-level `robots.txt`.
- [ ] Verify: `next build && next start`, then `curl -I http://localhost:8000/robots.txt` → expect **200**.

---

## 🔴 2. No standard `<meta name="description">`

**Problem:** Only `og:description` exists. Google uses the *standard* meta
description for the search-result snippet. Verified absent in rendered HTML.

**Steps:**
- [ ] In `pages/_app.js` `renderHead()`, add a baseline description (sits alongside
      the existing `og:description`):
  ```jsx
  <meta
    name="description"
    content="Carlo Clamucha — full-stack developer. Portfolio of projects built with React, Next.js, and Node."
  />
  ```
- [ ] Override it per-page in step 5 so each page has a unique snippet.

---

## 🔴 3. `<html>` has no `lang` attribute

**Problem:** `pages/_document.js` only overrides `getInitialProps` (for
styled-components SSR) and uses the default `render()`, so the output is bare
`<html>` (verified). Hurts accessibility and SEO.

**Steps:**
- [ ] Add a `render()` method to `pages/_document.js` and import the document
      primitives. Keep the existing `getInitialProps` untouched (SSR styles depend
      on it):
  ```jsx
  import Document, { Html, Head, Main, NextScript } from 'next/document';
  import { ServerStyleSheet } from 'styled-components';

  export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
      // ...existing implementation, unchanged...
    }

    render() {
      return (
        <Html lang="en">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  ```
- [ ] Verify rendered HTML starts with `<html lang="en">`.

---

## 🟠 4. No `og:image` and no Twitter Card tags

**Problem:** Links shared on LinkedIn / Twitter / Slack render with **no preview
image**. There are usable images in `static/` already.

**Steps:**
- [ ] (Recommended) Add a dedicated 1200×630 share image at `static/og-image.jpg`.
      Otherwise reuse an existing one (e.g. `static/headerbackground.jpg`).
- [ ] In `pages/_app.js` `renderHead()`, add (note: `og:image` must be an
      **absolute** URL for crawlers):
  ```jsx
  <meta property="og:title" content="Carlo Clamucha — Full-Stack Developer" />
  <meta property="og:image" content="https://carlo-clamucha.me/static/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Carlo Clamucha — Full-Stack Developer" />
  <meta name="twitter:description" content="Portfolio of projects built with React, Next.js, and Node." />
  <meta name="twitter:image" content="https://carlo-clamucha.me/static/og-image.jpg" />
  ```
- [ ] Verify with a share-preview tool (e.g. opengraph.xyz) once the domain is live.

---

## 🟠 5. Every page has the same title & description

**Problem:** `/`, `/projects`, `/contact`, `/profile` all inherit the single
`<title>` + OG block from `_app.js` → search engines see **duplicate titles**.

**Key Next.js detail:** `next/head` dedupes `<title>` automatically (the page's
wins over `_app.js`). For `<meta>` tags it only dedupes when you give a matching
`key` prop — so add `key="description"` etc. to override the `_app.js` ones.

**Steps:**
- [ ] In each page (`pages/index.js`, `contact.js`, `profile.js`, `projects.js`),
      add a `next/head` block with a unique title + description + canonical:
  ```jsx
  import Head from 'next/head';

  // inside the component's returned JSX:
  <Head>
    <title>Projects — Carlo Clamucha</title>
    <meta
      key="description"
      name="description"
      content="Selected projects by Carlo Clamucha, built with React, Next.js, and Node."
    />
    <meta key="og:description" property="og:description" content="Selected projects by Carlo Clamucha." />
    <link rel="canonical" href="https://carlo-clamucha.me/projects" />
  </Head>
  ```
- [ ] Repeat with page-appropriate copy for home (`/`), contact, and profile.
- [ ] To make page `<meta>` overrides work, add the same `key` props to the
      corresponding tags in `_app.js` (`key="description"`, `key="og:description"`, …).

---

## 🟠 6. No canonical URL (covered above) + pick a canonical host

**Problem:** Without `<link rel="canonical">`, apex vs `www` can split ranking.

**Steps:**
- [ ] Decide the canonical host (apex `carlo-clamucha.me` recommended) — match the
      redirect choice in Vercel (see `deploy-to-domain.md`).
- [ ] Ensure every page's canonical (step 5) uses that exact host, no trailing slash
      inconsistencies.

---

## 🟡 7. No `sitemap.xml`

**Steps (simplest — static file):**
- [ ] Create `public/sitemap.xml` listing the four routes:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://carlo-clamucha.me/</loc></url>
    <url><loc>https://carlo-clamucha.me/projects</loc></url>
    <url><loc>https://carlo-clamucha.me/profile</loc></url>
    <url><loc>https://carlo-clamucha.me/contact</loc></url>
  </urlset>
  ```
- [ ] (Alternative) add `next-sitemap` to auto-generate on build if routes grow.
- [ ] Confirm `public/robots.txt` references it (step 1).

---

## 🟡 8. No structured data (JSON-LD)

**Steps:**
- [ ] Add a `Person` schema in `_app.js` `renderHead()` (helps rich results /
      knowledge panel):
  ```jsx
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Carlo Clamucha",
        url: "https://carlo-clamucha.me",
        jobTitle: "Full-Stack Developer",
        sameAs: [
          // "https://github.com/CarloC24",
          // "https://www.linkedin.com/in/...",
        ],
      }),
    }}
  />
  ```

---

## 🟡 9. Title copy

**Problem:** `"Carlo Clamucha's portfolio website!"` is weak for search.

**Steps:**
- [ ] Change the `_app.js` default `<title>` to something keyword-bearing, e.g.
      `Carlo Clamucha — Full-Stack Developer`. Per-page titles (step 5) override it.

---

## 🟡 10. Favicon path & icons

**Problem:** Favicon uses a fragile relative path `../static/other_logo.png`
(works today, but breaks on deep routes and is non-idiomatic).

**Steps:**
- [ ] Change to a root-absolute path: `href="/static/other_logo.png"`.
- [ ] (Optional) add an `apple-touch-icon` and a real `favicon.ico`.

---

## 🟡 11. Core Web Vitals (ranking factor)

**Problem:** Render-blocking Bootstrap 4 full CSS + slick-carousel CSS + 3 Google
font families load in `<head>`.

**Steps (later, lower priority):**
- [ ] Drop Bootstrap if only a few utility classes are used; replace with local CSS.
- [ ] Self-host fonts or reduce to the families actually used.
- [ ] Run Lighthouse / PageSpeed Insights after the domain is live and triage from there.

---

## Suggested order

| # | Item | Effort | Impact |
|---|------|--------|--------|
| 1 | Move robots.txt → `public/` | low | high |
| 3 | `<html lang="en">` | low | medium |
| 2 | Standard meta description | low | high |
| 4 | og:image + Twitter card | low | high |
| 5 | Per-page titles/descriptions + canonical | medium | high |
| 7 | sitemap.xml | low | medium |
| 8 | JSON-LD Person | low | medium |
| 9 | Title copy | low | low |
| 10 | Favicon path | low | low |
| 11 | Core Web Vitals | high | medium |

Items 1–5 are the high-impact batch. Several reference the absolute domain
(`https://carlo-clamucha.me`), so they finalize cleanest once the domain is live —
but can be wired now with that URL.
