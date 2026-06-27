# Graph Report - .  (2026-06-27)

## Corpus Check
- Large corpus: 46 files · ~2,151,407 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 159 nodes · 170 edges · 16 communities (10 shown, 6 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.92)
- Token cost: 0 input · 33,183 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Profile & Contact UI|Profile & Contact UI]]
- [[_COMMUNITY_package.json Manifest|package.json Manifest]]
- [[_COMMUNITY_App Shell & Global Styles|App Shell & Global Styles]]
- [[_COMMUNITY_Project Carousel|Project Carousel]]
- [[_COMMUNITY_Legacy HomePage & Works|Legacy HomePage & Works]]
- [[_COMMUNITY_Architecture & Build Decisions|Architecture & Build Decisions]]
- [[_COMMUNITY_NPM Dependencies|NPM Dependencies]]
- [[_COMMUNITY_Alternate Projects Page|Alternate Projects Page]]
- [[_COMMUNITY_Unused About Page|Unused About Page]]
- [[_COMMUNITY_SSR Document|SSR Document]]
- [[_COMMUNITY_Layout Concepts|Layout Concepts]]
- [[_COMMUNITY_SEO Crawl Config|SEO Crawl Config]]
- [[_COMMUNITY_Vercel Deploy Config|Vercel Deploy Config]]
- [[_COMMUNITY_Dependabot Config|Dependabot Config]]

## God Nodes (most connected - your core abstractions)
1. `HomePage` - 5 edges
2. `scripts` - 5 edges
3. `MyApp` - 5 edges
4. `Carousel` - 4 edges
5. `Profile` - 4 edges
6. `HomePage` - 4 edges
7. `styled-components styling convention` - 4 edges
8. `CarouselItem` - 3 edges
9. `Contact()` - 3 edges
10. `CustomArrow` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Remove unused legacy babel-core dependency` --references--> `Babel config (.babelrc with babel-plugin-styled-components)`  [INFERRED]
  DEPENDABOT.md → CLAUDE.md
- `postcss Dependabot alert #139` --shares_data_with--> `Next 16 / React 19 migration`  [INFERRED]
  DEPENDABOT.md → CLAUDE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Styling architecture stack** — claude_styled_components, claude_ssr_style_collection, claude_theme_tokens, claude_babel_config, claude_bootstrap_utilities [INFERRED 0.85]
- **Dependabot security remediation flow** — dependabot_postcss_override, dependabot_npm_overrides, dependabot_babel_core_removal, dependabot_modern_babel_core [INFERRED 0.85]

## Communities (16 total, 6 thin omitted)

### Community 1 - "Profile & Contact UI"
Cohesion: 0.11
Nodes (9): Contact(), Contactcontainer, HorizontalSnackbar, HorizontalSnackbarContainer, Profile, ProfileContainer, contact, HomePage (+1 more)

### Community 2 - "package.json Manifest"
Cohesion: 0.10
Nodes (20): author, bugs, url, description, homepage, keywords, license, main (+12 more)

### Community 3 - "App Shell & Global Styles"
Cohesion: 0.12
Nodes (8): GlobalStyle, Appbar, Navbar, PageContainer, Snackbar, SnackbarDiv, MyApp, theme

### Community 4 - "Project Carousel"
Cohesion: 0.18
Nodes (5): Carousel, CarouselContainer, CarouselItem, ProjectCard, CustomArrow

### Community 5 - "Legacy HomePage & Works"
Cohesion: 0.17
Nodes (6): HomeContainer, HomePage, StacksContainer, WorksContainer, Works, WorksContainer

### Community 6 - "Architecture & Build Decisions"
Cohesion: 0.17
Nodes (12): Babel config (.babelrc with babel-plugin-styled-components), Bootstrap 4 utility classes, Next 16 / React 19 migration, Next.js pages router architecture, styled-components SSR style collection, styled-components styling convention, ThemeProvider design tokens, Remove unused legacy babel-core dependency (+4 more)

### Community 7 - "NPM Dependencies"
Cohesion: 0.25
Nodes (8): dependencies, babel-plugin-styled-components, next, react, react-dom, react-responsive-carousel, react-slick, styled-components

### Community 8 - "Alternate Projects Page"
Cohesion: 0.33
Nodes (4): MyProjects, ProjectCard, Projects(), projects

## Knowledge Gaps
- **47 isolated node(s):** `IntroContainer`, `CarouselContainer`, `ProjectCard`, `Contactcontainer`, `HomeContainer` (+42 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `IntroContainer`, `CarouselContainer`, `ProjectCard` to the rest of the system?**
  _49 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Tech Stack Logo Library` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `Profile & Contact UI` be split into smaller, more focused modules?**
  _Cohesion score 0.11255411255411256 - nodes in this community are weakly interconnected._
- **Should `package.json Manifest` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `App Shell & Global Styles` be split into smaller, more focused modules?**
  _Cohesion score 0.11578947368421053 - nodes in this community are weakly interconnected._