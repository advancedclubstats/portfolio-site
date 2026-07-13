# Portfolio site — context for Claude Code

Personal portfolio for **Matt Martin**, a growth & monetization PM / product
marketer, running a job search. Node.js + Express + EJS. **Live on Render at
`mattmartin.work`** (auto-deploys on push to `master`). Repo:
`advancedclubstats/portfolio-site`, default branch **`master`**.

> This file is the source of truth for a new session. If it disagrees with your
> assumptions, trust this file, then verify in the code. Keep it current — when
> the design or structure changes materially, update the relevant section here.

## Starting a session

No specific task given? Read `BACKLOG.md` (may lag reality — cross-check against
"Current state" below), propose the top open item, confirm before starting.

**Open the session with this folder as the working directory**
(`~/CoWork/portfolio-site`), or Claude Code won't auto-load this file.

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

- Render web service `matt-martin-portfolio` → **auto-deploys on push to
  `master`**. `git push origin master` = deploy.
- Custom domain **`mattmartin.work`** (Namecheap DNS). `www` CNAME →
  `matt-martin-portfolio.onrender.com` works; the **apex needs an ALIAS record**
  (`@` → `matt-martin-portfolio.onrender.com`) or it NXDOMAINs. Render issues
  the Let's Encrypt cert automatically once the apex resolves.
- Set `SITE_DOMAIN=mattmartin.work` as a Render env var → updates canonical /
  sitemap / llms.txt / OpenGraph.

## Current state / open items (keep this honest)

- **Real screenshots** for the story-page heroes: `public/img/<slug>.png` (some
  are still placeholder graphics; Matt is sourcing real ones).
- **Kajabi story hero**: add `heroEmbed: "<youtube/loom embed url>"` on the
  kajabi object when the video exists.
- **LinkedIn headshot**: swap the "MM" initials for a real photo — drop the file
  in `public/img/`, then change the `.contact-avatar` span to an `<img>`.
- **Large-screen zoom** (`≥2000px` breakpoints) is set partly blind — tune once
  Matt shares his monitor resolution.
- **Domain**: finish the apex ALIAS record so `mattmartin.work` resolves + cert
  issues (www already works).
- Section labels on story pages ("THE PROBLEM") are still small-caps — decide
  sentence-case or leave.
- Missing SEO polish: an `og:image` share card + a favicon.

## Writing rules for any visitor-facing copy

Matt keeps a global anti-AI writing profile at `~/CoWork/ABOUT ME/`
(`anti-ai-writing-style.md`, `about-me.md`, `my-company.md`). Follow it: no em
dashes, no consultant filler, short and concrete, one idea per clause. When
unsure about tone, ask.
