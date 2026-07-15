# Portfolio starter

A working, data-driven personal portfolio. Edit two files, deploy static, free.
Built to be finished in an afternoon, not a week.

Node.js + Express + EJS, prerendered to a static site. Charcoal-on-white bento
design, a story page per project, SEO + `llms.txt` baked in.

## Using Claude Code? Start here

Open this folder in Claude Code and read [`CLAUDE.md`](CLAUDE.md) — it's a real
operating manual for the project, and [`DECISIONS.md`](DECISIONS.md) explains the
design choices so nothing drifts generic. Then tell Claude who you are and hand
it your projects; it knows the rest.

There are also copy-paste prompts in [`prompts/`](prompts/):
- `from-scratch.md` — build a portfolio from zero, avoiding the generic first draft.
- `add-a-story.md` — turn a spoken brain-dump into one ready-to-paste project.

## Quickstart (6 steps)

1. `npm install`
2. Edit **`site.config.js`** — your name, role, email, links, and the intro copy.
3. Edit **`content/projects.js`** — your projects (2 examples are in there).
4. Drop screenshots in **`public/img/`** named to match each project's
   `screenshot` field. No image yet? Omit the `screenshot` field (or point it at
   a file you haven't added) and a soft placeholder shows until you drop one in.
   Delete the two bundled `example-project.png` / `second-project.png` once you
   add your own.
5. `npm start` → preview at http://localhost:3000 (restart after editing the two
   config files — they're cached).
6. Deploy: `SITE_DOMAIN=yourdomain.com npm run build` produces `dist/`. Point a
   static host at it.

## Deploy (free, no cold starts)

Recommended: **Cloudflare Pages**. Connect your git repo, set:
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `SITE_DOMAIN=yourdomain.com`

Push to your default branch to redeploy. Netlify, GitHub Pages, and Vercel work
the same way — they just serve the static `dist/`.

## What this saves you — and what it doesn't

**Saves:** the architecture, the design system, responsive layout, the deploy
pipeline, and the SEO/`llms.txt` plumbing. Days of scaffolding.

**Doesn't:** write your content or pick your projects. That thinking is yours,
and it's the actual point of a portfolio. This just removes the blank page.

## License

MIT. Make it yours.
