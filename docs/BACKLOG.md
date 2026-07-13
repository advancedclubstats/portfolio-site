# Backlog

Current, living list. When a session finishes work, move the item to **Done**
with a one-line note, and add anything deferred. `CLAUDE.md` is the design/
architecture source of truth; this file is just "what's next."

---

## Waiting on Matt (unblocks other work)

- **Real story-hero screenshots** — drop real product screenshots into
  `public/img/<slug>.png` (same filenames the projects already use). Wide
  landscape, ~1400–1600px, compressed. Currently several are placeholder
  graphics.
- **Kajabi story video** — give the embed URL (YouTube/Loom `.../embed/...`);
  it goes on the kajabi object as `heroEmbed:` in `content/projects.js`.
- **LinkedIn headshot** — add the photo to `public/img/`; then swap the "MM"
  initials in `.contact-avatar` (`views/index.ejs`) for an `<img>`.
- **Monitor resolution** — to tune the large-screen `zoom` breakpoints
  (`≥2000/2600/3300px` in `public/styles.css`) that were set partly blind.

## Now / next up

- **Domain go-live** — add the apex **ALIAS** record in Namecheap
  (`@` → `matt-martin-portfolio.onrender.com`) so `mattmartin.work` resolves;
  Render then auto-issues the cert. Set `SITE_DOMAIN=mattmartin.work` env var in
  Render. (`www` already works.) See `docs/archive/` history + `CLAUDE.md`.
- **SEO polish before sharing** — add an `og:image` social share card + a
  favicon (both missing). Then submit `sitemap.xml` to Google Search Console.

## Nice-to-have / later

- Story-page section labels ("THE PROBLEM") are still small-caps — decide
  sentence-case or keep as quiet labels.
- Re-link the `/steal` page from the UI (its grid card was removed) via a small
  banner/toast rather than a bento tile.
- Add real analytics (Plausible or GA4) once the domain is live.
- Verify the 720–1080px tablet breakpoint (only lightly checked).

## Done (recent)

- Bento redesign: 4-col mosaic, live HTML mocks (membership carousel, checkout,
  Kajabi/tutoring/landing, dashboard, search, phone), hover-reveal captions.
- Mobile fixed: flex-column stacking, `zoom`-fit mocks.
- Story pages restructured (hero-first, small stat, homepage icons).
- Sentence-case type, header icons, FAB removed, new intro + LinkedIn copy.
- Deployed on Render; docs cleaned up (this file + `CLAUDE.md`).
