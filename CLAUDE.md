# Portfolio site — context for Claude Code

Personal portfolio for **Matt Martin**, a growth & monetization PM / product
marketer, running a job search. Node.js + Express + EJS, prerendered to a
static site. **Live on Cloudflare Pages at `mattmartin.work`** (auto-deploys on
push to `master`). Repo: `mattrmartin/portfolio-site`, default branch
**`master`**.

> This file is the source of truth for a new session. If it disagrees with your
> assumptions, trust this file, then verify in the code. Keep it current — when
> the design or structure changes materially, update the relevant section here.

## Starting a session

**Open the session with this folder as the working directory**
(`~/CoWork/portfolio-site`) so Claude Code auto-loads this file. This file alone
is enough to start acting — no exploration/catch-up needed.

No specific task given? Read `docs/BACKLOG.md`, propose the top open item,
confirm, then go. Keep that file current as work finishes.

### Repo map
- `CLAUDE.md` (this file) — the context you're reading.
- `README.md` — human run/deploy quickstart.
- `docs/BACKLOG.md` — living "what's next" list.
- `docs/archive/` — old build-process prompts + the pre-redesign backlog; safe
  to ignore, kept for history.
- Code: `server.js`, `site.config.js`, `content/projects.js`, `views/`,
  `public/` (see Architecture below).
- `starter/` — a neutralized, content-free copy of this site: the "steal this"
  starter (working static build, 2-file content model, its own CLAUDE.md +
  DECISIONS.md + prompts). Source for the public GitHub **template repo**
  `mattrmartin/portfolio-starter` and the download at
  `public/downloads/portfolio-starter.zip`. The `/steal` page leads with the
  build lesson and links both. Not part of the live site build; publish repo
  changes by re-pushing `starter/` to the template repo.

## What it is now (the design, current)

Marco.fyi-style **bento mosaic**. NOT the old screenshot-first 2-col grid.

- **One unified grid** holds an intro text tile + the work cards. Desktop
  (≥1080px) is a **4-column mosaic** placed with `grid-template-areas`; each
  project carries an `area` name in `content/projects.js` (memb, phone, quiz,
  dash, tax, learn, kaj, tut, land). Tablet (720–1080) is a 2-col fallback;
  **mobile (<720) is a flex column** (grid-area is ignored there — see gotcha).
- **Work cards are live HTML/CSS mocks, not screenshots.** Each project sets a
  `*Mock: true` flag (`pricingMock`, `phoneMock`, `quizMock`, `dashMock`,
  `learnerMock`, `taxMock`, `kajMock`, `tutMock`, `landMock`) → a markup block in
  `views/index.ejs` + styles in `public/styles.css`. The screenshot PNGs are now
  only used as **story-page hero images**.
- **Hover-reveal captions**: at rest a card shows only its mock; on hover the
  mock lifts and the caption (label/tagline/org) reveals as a scrim overlay
  (`@media (hover:hover) and (min-width:720px)`). On touch/mobile the caption is
  always in-flow below the mock.
- **Interactions**: membership is a horizontal **carousel** (real Outschool
  tiers 80/144/248/500, dual `‹ ›` chevrons, wired in `public/script.js`). The
  RoundRecall phone **tilts and is clipped by its tile** (tucked behind the
  edge, marco-style) and rotates upright on hover. Dashboard/quiz/learner mocks
  are clickable.
- **Type**: sentence case everywhere (headings, name, labels) — NOT the old
  ALL-CAPS. Space Grotesk display + Inter body, charcoal on white, near-mono
  shell; color comes from the mocks.
- **No FAB** (removed). Top bar = name (left) + 3 icon links (email / LinkedIn /
  RoundRecall, right). Same header on the story pages.
- Contact section: mail tile, LinkedIn tile (grey→blue on hover, "MM" initials
  avatar), and an "Ask an AI about me" tile.

## Architecture

- `server.js` — Express. Routes: `/`, `/work/:slug`, `/steal`, `/llms.txt`,
  `/robots.txt`, `/sitemap.xml`, `/healthz`. Binds `process.env.PORT`.
- `site.config.js` — identity, `SITE_DOMAIN` (env-overridable), and page copy
  (`intro` = eyebrow/head/body, `nav`, `askAiPrompt`). **require-cached →
  restart the server after editing.**
- `content/projects.js` — the work items. One object = a bento card + a
  `/work/<slug>` story page + a sitemap entry. Key fields: `area` (grid slot),
  `*Mock` flag, `screenshot` (story hero), `heroEmbed` (optional iframe video for
  the story hero, e.g. Kajabi), `number`/`metric` (small stat on the story),
  `detail` (title/lede/sections). **require-cached → restart after editing.**
- `views/index.ejs` — home: intro tile + the per-project mock blocks + contact.
- `views/project.ejs` — the story page: hero image/video on top → heading →
  small stat → subheading (lede) → body sections → link out.
- `public/styles.css` — ~1700 lines, the whole design. `public/script.js` —
  mock interactions (quiz chips, mem carousel, learner rows, dash radios),
  reveal-on-scroll. `public/img/` — screenshots (story heroes).

### Key CSS concepts
- **Composable mock transform**: `transform: scale(var(--ms)) translateY(var(--ml)) rotate(var(--rot))`.
  `--ms` = per-tile scale (set in the ≥1400 block), `--ml` = hover lift, `--rot`
  = phone tilt. Compose, don't overwrite.
- **Breakpoints**: `<720` mobile (flex column), `≥720` 2-col + caption overlay,
  `≥1080` 4-col mosaic, `≥1400` font/scale bumps, `≥2000/2600/3300` `:root
  { zoom }` to scale the whole page up on very large monitors.
- **Mobile mock fit**: wide mocks (dashboard/tutoring/kajabi/landing) use `zoom`
  (not `transform: scale`) so the layout box shrinks too and they fill the card
  — a true smaller copy.

## Run / verify

```bash
npm install && npm start   # http://localhost:3000  (PORT overridable)
```
No automated tests. After a CSS/layout change, check the home page at **mobile
(~390px)** and **desktop (~1280px)**, plus one `/work/<slug>` page.

**Gotchas learned the hard way:**
- The work cards' inline `grid-area` names have no matching areas below 720px,
  so the grid piles them all into one cell — hence `.work-bento { display:flex }`
  on mobile. Don't remove that.
- The browser-automation viewport is often locked ~1470px, so it can't render a
  true phone. To preview mobile there: temporarily shift the desktop media
  queries above the viewport width + clamp `main { max-width: 380px }`, verify,
  then revert. (Used this to catch the mobile bugs.)

## Deploy & domain

- **Cloudflare Pages** project `portfolio-site` (account: Mattrobm+golf@gmail),
  connected to the GitHub repo → **auto-deploys on push to `master`**. `git push
  origin master` = deploy. Build command `npm run build`, output dir `dist`.
- **The site is a static build.** `build.js` (`npm run build`) prerenders every
  route to flat files in `dist/`; Cloudflare serves that from its CDN. No running
  server, no cold starts (this is why we left Render's sleeping free tier — it
  showed a "SERVICE WAKING UP" preloader on cold loads). `server.js` is kept only
  for local dev (`npm start`) and the preview tool. `dist/` is gitignored.
- **DNS is on Cloudflare** (nameservers moved off Namecheap → `holly.ns` /
  `langston.ns.cloudflare.com`). Cloudflare's CNAME flattening handles the apex,
  so the old Render ALIAS-record apex problem is gone. Custom domains
  `mattmartin.work` + `www.mattmartin.work` are attached to the Pages project,
  cert auto-issued. The old Render service is **suspended**.
- `SITE_DOMAIN` defaults to `mattmartin.work` in `site.config.js` now, and is
  also set as a build env var on Pages → drives canonical / sitemap / llms.txt /
  OpenGraph.

## Open items

The living to-do list — what's next, and what's waiting on Matt (real
screenshots, Kajabi video, headshot, domain go-live, SEO) — is in
**`docs/BACKLOG.md`**. Update it as work finishes; don't duplicate it here.

## Writing rules for any visitor-facing copy

Matt keeps a global anti-AI writing profile at `~/CoWork/ABOUT ME/`
(`anti-ai-writing-style.md`, `about-me.md`, `my-company.md`). Follow it: no em
dashes, no consultant filler, short and concrete, one idea per clause. When
unsure about tone, ask.
