# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server on port 8080
- `npm start` — Next.js production server on port 8000
- `npm run build` — production build (also aliased as `now-build`)

There is no test runner, linter, or formatter configured in this project.

## Architecture

Personal portfolio site built on **Next.js (pages router)** with **React 19** and **styled-components**. Deployed via Vercel (see `vercel.json` history in recent commits).

### Rendering pipeline

- `pages/_document.js` collects styled-components SSR styles using `ServerStyleSheet` and injects them into the document. Any styled-components usage relies on this being intact — do not remove the `collectStyles` wrapping or SSR styles will flash unstyled.
- `pages/_app.js` is a class-based custom `App` that:
  - Renders a shared `<Head>` (fonts, Bootstrap 4 CDN CSS/JS, slick-carousel CSS, GA tag, favicon).
  - Wraps every page in `<Navbar />` + `<ThemeProvider theme={...}>` + `<Page>`. The `theme` object (colors, `maxWidth`, `bs` box-shadow) is the single source of design tokens consumed via `props.theme.*` inside styled components.
  - Exposes `ctx.query` to every page via `pageProps.query`.
- `assets/globalStyle.js` defines the `createGlobalStyle` baseline applied in `_app.js`.

### Page → Component layout

- `pages/index.js` (HomePage) composes `Profile` → `Carousel` → `Contact`. The `Carousel` (in `Components/Carousel.js`) is the main project showcase, driven by `assets/projects.json` and `assets/logos.js` / `logosswitch.js` for tech-stack icons. `Components/Projects.js` is an older/alternate projects view currently commented out of the home page.
- Other top-level pages (`contact.js`, `profile.js`, `projects.js`) are thin wrappers over the equivalent components in `Components/`.
- `Components/Page.js` is the per-page container shell rendered by `_app.js`; its grid layout is currently commented out (single-column).

### Styling conventions

- All component styling is via `styled-components` tagged templates colocated in each component file. Theme values come from the `ThemeProvider` in `_app.js`.
- Babel config (`.babelrc`) enables `babel-plugin-styled-components` for readable class names / SSR consistency, on top of `next/babel`.
- Bootstrap 4 utility classes (e.g. `className="w-100"`) are used alongside styled-components because Bootstrap CSS is loaded via CDN in `_app.js`. Keep this in mind when changing class names.

### Static assets

- `static/` holds images and the favicon referenced via `../static/...` paths from `_app.js` and components. `assets/` holds JS data modules (`projects.json`, `logos.js`) and the global stylesheet, not images.

## Notes for changes

- The project recently migrated to Next 16 / React 19; the deprecated `next/app` `Container` was removed in commit `0e6de1f`. If you reintroduce older Next patterns, verify they still work under Next 16.
- `vercel.json` was intentionally removed (commit `eff9e89`) so Vercel uses its default Next.js build. Don't reintroduce it without reason.
- `aws.md` is gitignored; `awsnotes.md` and `scrap.md` are personal notes — leave alone unless asked.
