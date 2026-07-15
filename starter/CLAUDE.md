# Portfolio starter — context for Claude Code

This is a working, data-driven personal portfolio. **Node.js + Express + EJS,
prerendered to a static site** and hosted free on a CDN. It is intentionally
small and opinionated so you can make it someone's real site in an afternoon,
not a week.

> Read this file first. It is the source of truth for how the project is built
> and why. When the structure changes materially, update the relevant section.
> A companion file, `DECISIONS.md`, explains the taste and the choices — read it
> before making design changes, so you don't drift back to a generic look.

## What it is

A bento-grid home page (an intro tile + one card per project), a story page per
project at `/work/<slug>`, and the AI/SEO text files (`llms.txt`, `robots.txt`,
`sitemap.xml`). Charcoal on white, Space Grotesk (display) + Inter (body),
sentence case. Cards are **screenshot-first**: an image with a hover-reveal
caption. Everything editable lives in two files.

## The two files that make it someone's site

- **`site.config.js`** — identity, domain, and page copy (the intro tile).
- **`content/projects.js`** — the work items. One object = a home card + a
  `/work/<slug>` story page + a sitemap entry.

Change those two and the whole site updates. That is the intended workflow. A
new adopter should almost never touch the views or CSS to get a real site live.

## Repo map

- `server.js` — Express app for local dev + the preview tool. Routes: `/`,
  `/work/:slug`, `/llms.txt`, `/robots.txt`, `/sitemap.xml`, `/healthz`, and a
  catch-all that renders the styled 404.
- `build.js` (`npm run build`) — **the deploy path.** Prerenders every route to
  flat files in `dist/`. The live site is this static output on a CDN; there is
  no running server in production, so no cold starts.
- `site.config.js`, `content/projects.js` — the editable content (above).
- `views/` — EJS templates: `index.ejs` (home), `project.ejs` (story page),
  `404.ejs`, and the text-file templates (`llms`, `robots`, `sitemap`).
- `public/` — `styles.css` (one self-contained stylesheet), `script.js` (tiny,
  optional — the site works with JS off), `img/` (screenshots).
- `prompts/` — copy-paste prompts: build one from scratch, or add a work story.

## Run / build / deploy

```bash
npm install
npm start                      # local dev at http://localhost:3000
SITE_DOMAIN=yourdomain.com npm run build   # -> dist/  (static, deployable)
```

Deploy `dist/` to any static host. Recommended: **Cloudflare Pages** (free, no
cold starts) — connect the git repo, set build command `npm run build`, output
directory `dist`, and an env var `SITE_DOMAIN=yourdomain.com`. Pushing to the
default branch redeploys. Netlify / GitHub Pages / Vercel work the same way.

## Architecture notes and gotchas

- **`site.config.js` and `content/projects.js` are `require`-cached.** After
  editing them, **restart the dev server** to see changes (`npm start`). The
  static build always reads fresh.
- **`SITE_DOMAIN` drives every absolute URL** — canonical tags, `sitemap.xml`,
  `llms.txt`, OpenGraph. Set it as a build env var in production or the URLs
  point at the placeholder domain.
- **The bento grid is flexible and auto-flows.** Card span is set by the
  project's `size` field (`sm | md | lg | tall`), not by hardcoded grid areas,
  so any number of projects lays out cleanly. Mobile (`<720px`) is a single
  column. See `.work-bento` in `styles.css`.
- **Screenshots go in `public/img/`** and are referenced by bare filename in
  `content/projects.js` (the template prepends `/img/`). Missing image → a soft
  placeholder renders, so you can wire real images in later with no code change.
- **The site works with JavaScript off** — content is server-rendered/prerendered.
  `public/script.js` is only progressive enhancement. Never make content depend
  on it.
- **After a visual change, verify at mobile (~390px) and desktop (~1280px)** and
  one `/work/<slug>` page before calling it done.

## Not included on purpose

Favicon and an OG share image are not shipped (they're personal). To add them:
drop `favicon-32.png` / `favicon-16.png` / `apple-touch-icon.png` in `public/`
and link them in the view heads; add `public/og-image.jpg` (1200x630) and
uncomment the `og:image` line in `views/index.ejs`. See `DECISIONS.md`.

## Writing rules for visitor-facing copy

Short and concrete. One idea per clause. No em dashes, no filler, no slogans.
Lead with the decision, not the ceremony. Only claim a metric you could defend.
