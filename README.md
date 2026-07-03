# Matt Martin — portfolio site

A personal site for a growth & monetization PM job search. Node.js + Express +
EJS. Mobile-first, near-monochrome, big geometric type. Structure is a bento of
work cards that each click into a blog-post-style detail page. Built to deploy
anywhere that runs Node, and optimized so an AI that looks me up returns
something accurate.

Design lineage is documented in `steal-list.md`: branding from
spencergabor.work, card structure from marco.fyi.

## Run it locally

```bash
cd portfolio-site
npm install
npm start
# open http://localhost:3000
```

## Add a new project (the main thing you'll do)

Everything about the work section is data-driven. Open `content/projects.js`
and add one object to the array. You automatically get:

- a card in the bento grid on the home page,
- a detail page at `/work/<slug>`,
- an entry in `sitemap.xml`.

Each project has a `size` (`sm` / `md` / `lg` / `xl`) that controls how much
room its card takes in the desktop grid, an optional `screenshot`, and a
`detail` object with the story for its page. The file has comments explaining
every field.

## Add a screenshot to a card

Drop an image in `public/img/` and set `screenshot: "your-file.png"` on that
project. The card shows it oversized, cropped, and rounded (the "too big, gets
cut off" look). Tall phone screenshots work well; they're cropped to a snippet.

There's a placeholder at `public/img/roundrecall-cover.png` — replace it with a
real RoundRecall screenshot when you have one.

## Change the words

All the non-project copy (hero line, "what I do", "what I want") lives in
`site.config.js` under `hero`, `whatIDo`, `whatIWant`. Edit the strings there.

## The one thing to change before deploying

In `site.config.js`, set your real domain:

```js
const SITE_DOMAIN = process.env.SITE_DOMAIN || "mattmartin.example";
```

That single value flows into the Ask-AI prompt, the JSON-LD schema, `llms.txt`,
`robots.txt`, `sitemap.xml`, and canonical URLs. You can also set it via the
`SITE_DOMAIN` env var. Optionally add `LINKEDIN_URL` (empty hides the link).

## What's here

```
portfolio-site/
├─ server.js            Express app: home, /work/:slug, and the AI text files
├─ site.config.js       identity, domain, and page copy (edit this)
├─ content/
│  └─ projects.js       the work items (edit this to add projects)
├─ views/
│  ├─ index.ejs         home page (bento of cards)
│  ├─ project.ejs       detail-page template (one file, all projects)
│  ├─ llms.ejs          → /llms.txt (AI-readable summary)
│  ├─ robots.ejs        → /robots.txt (allows AI crawlers)
│  └─ sitemap.ejs       → /sitemap.xml
├─ public/
│  ├─ styles.css        the design
│  ├─ script.js         reveal-on-scroll + Ask-AI buttons
│  └─ img/              screenshots (roundrecall-cover.png is a placeholder)
├─ steal-list.md        what we lifted from each reference site
├─ CLAUDE.md            context for Claude Code (design intent + open tasks)
└─ package.json
```

## AI optimization, briefly

- Semantic HTML with real headings; each project detail page is its own
  `<article>` with its own meta + Open Graph.
- JSON-LD `Person` schema so an AI gets structured facts.
- `/llms.txt`: a plain-text summary written for AI readers.
- `/robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended, and others.
- The Ask-AI footer opens ChatGPT, Claude, Perplexity, or Gemini with a prompt
  already loaded, pointed at this domain.

## Deploying

Any Node host works (Render, Railway, Fly, a VPS, or Hostinger's Node hosting).
The entry point is `server.js` and it binds to `process.env.PORT`. Set the
`SITE_DOMAIN` env var (and `LINKEDIN_URL` if you have one), or edit
`site.config.js` before uploading.
