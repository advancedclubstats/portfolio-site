# Portfolio site — context for Claude Code

Personal portfolio for Matt Martin, a growth & monetization PM running a job
search. Node.js + Express + EJS, mobile-first, deployed as a small static-ish
server. The look was designed by lifting from two reference sites; the full
rationale is in `steal-list.md`.

## Starting a session

If a session starts without a specific task, read `BACKLOG.md`, propose the top
unblocked item under "Next", and confirm before starting. Keep that file
current: when work finishes, move the item to "Done" (with a one-line note on
what shipped) and add anything deferred.

## Design intent (don't drift from this)

- Branding from spencergabor.work: Space Grotesk in big uppercase with tight
  tracking, charcoal (`--ink`) on white, ghost-gray (`--ghost`) secondary,
  small wide-tracked uppercase labels.
- Structure from marco.fyi: everything is a card in a bento grid. Single column
  on mobile, two columns on desktop. Work cards are screenshot-first (image
  fills the card, thin text strip below). Color comes from the screenshots; the
  shell stays near-monochrome.
- A floating nav pill (FAB) pinned bottom-center with Home / About / Work /
  Contact and a scroll-spy active dot.
- The only things NOT in a card are the name and socials in the top bar.
- Keep it minimal to the point that the restraint is the design. No gradients,
  no stock icons, no clutter. Reads in under a minute.

## Architecture

- `server.js` — Express. Routes: `/` (home), `/work/:slug` (detail pages),
  `/llms.txt`, `/robots.txt`, `/sitemap.xml`, `/healthz`. Binds `process.env.PORT`.
- `site.config.js` — identity, domain, and all non-project page copy
  (`intro`, `whatIDo`, `whatIWant`, `nav`, `askAiPrompt`). Edit
  copy here.
- `content/projects.js` — the work items. THIS is where you add a project. One
  object yields a home card, a `/work/<slug>` detail page, and a sitemap entry.
  Fields are documented at the top of the file.
- `views/` — `index.ejs` (home, all cards + FAB), `project.ejs` (one detail
  template for every project), plus `llms/robots/sitemap` text-file templates.
- `public/styles.css` — the design. `public/script.js` — Ask-AI buttons,
  reveal-on-scroll, FAB scroll-spy. `public/img/` — screenshots.

## Run

```bash
npm install && npm start   # http://localhost:3000
```

## Current state — placeholders to replace

This is a design-complete draft with placeholder content. Open work items:

1. Screenshots in `public/img/*.png` are colored fakes. Replace each with a real
   UI screenshot at the same filename (`membership-optional.png`,
   `signup-rebuild.png`, `sales-tax.png`, `roundrecall-cover.png`). Matt is
   sourcing these.
2. Copy is placeholder. The intro card (`site.config.js` → `intro`) and each
   card's `label`/`tagline` in `content/projects.js` need Matt's real words.
   Detail-page stories in `projects.js` are first drafts grounded in real facts.
3. Set the real domain in `site.config.js` (`SITE_DOMAIN`) before deploy; it
   flows into schema, llms.txt, sitemap, canonical, and the Ask-AI prompt.
4. Deploy to any Node host (Render/Railway/Fly/Hostinger).

## Writing rules for any copy you generate

Matt keeps a global anti-AI writing profile at `~/CoWork/ABOUT ME/`
(`anti-ai-writing-style.md`, `about-me.md`, `my-company.md`). If you draft or
edit any visitor-facing words, follow it: no em dashes, no consultant filler,
short and concrete. When unsure about fit or tone, ask.

## Verify visual changes

There's no automated visual test. After a CSS/layout change, start the server
and check the home page at mobile (390px) and desktop (1280px) widths, plus one
`/work/<slug>` page, before calling it done.
