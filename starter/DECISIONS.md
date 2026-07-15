# Decisions — why this is built the way it is

Read this before changing the design. These are the choices that keep the site
from looking like every other AI-generated portfolio. They are opinions, held on
purpose. Change them deliberately, not by drift.

## The one that matters most: design first, copy last

The fastest way to a generic site is to hand an AI your rough copy and let it
design around your words. You get the average of every portfolio ever made.

So: **lock the layout before the words.** Treat all copy as placeholder until the
structure feels right. The `intro` copy in `site.config.js` and the example
stories are scaffolding — replace them *after* you're happy with the shape.

## Taste, as constraints (not vibes)

- **Sentence case, not ALL CAPS.** Headings, labels, name — all sentence case.
- **Bento grid, not a two-column screenshot wall.** Mixed card sizes in one
  flowing grid. It reads as a system, not a list.
- **Screenshots, not stock illustrations.** Real product shots (or clean
  placeholders) beat decorative art. If you have the appetite, you can replace a
  screenshot with a live HTML/CSS "mock" of the UI — higher effort, more
  bespoke. Default to screenshots; treat mocks as advanced.
- **Charcoal on white. Color comes from the screenshots**, not the chrome. The
  shell stays quiet so the work stands out.
- **Space Grotesk for display, Inter for body.** Swap in the `:root` tokens in
  `styles.css` if you want a different voice, but keep one display + one body.
- **Breakpoints:** single column `<720px`, multi-column grid `≥720px`. Mobile
  first — design the narrow view, then let it widen.

## Architecture choices

- **Static prerender, not a running server.** `build.js` turns every route into
  a flat file. Why: a portfolio has no per-request data, so a live server buys
  you nothing and costs you cold starts. Static on a CDN is faster, free, and
  never sleeps. `server.js` exists only for local dev.
- **Host on a CDN's free tier (Cloudflare Pages recommended).** Free web-service
  tiers that spin down show a "waking up" loader on the first visit — bad for a
  link someone clicks once. A static CDN has none of that. If your domain's DNS
  is on Cloudflare, its CNAME flattening handles the apex cleanly.
- **Data-driven, two-file edit.** Adding a project is editing one array, not
  touching markup. This is what makes it usable by someone who isn't you.
- **Works without JavaScript.** Content is rendered on the server / at build.
  JS is enhancement only.

## What to keep vs. change

**Keep** (this is the value): the two-file content model, the static build +
deploy path, the flexible bento, mobile-first, the SEO/`llms.txt` plumbing, and
the design-first discipline above.

**Change freely** (make it yours): all copy, the color tokens and fonts, the
number and mix of projects, the card sizes, whether you use screenshots or
build bespoke mocks. Add a favicon and an OG image (see `CLAUDE.md`).

## The honest scope

This saves you the scaffolding: architecture, design system, responsive layout,
deploy pipeline, SEO. It does **not** write your content or pick your projects —
that thinking is yours, and it's the actual point of a portfolio. The shell just
removes the blank page so you can spend your time on the part that's really you.
