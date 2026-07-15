// ---------------------------------------------------------------------------
// Static site generator for the portfolio.
//
// The site has no runtime data — every route is a pure render of
// site.config.js + content/projects.js. This script renders each route to a
// flat file under dist/ and copies public/ over it, producing a fully static
// site suitable for any CDN host (Cloudflare Pages, Netlify, etc.). No server,
// no cold starts.
//
// Run: npm run build   (set SITE_DOMAIN to your live domain first)
// Output: dist/
// ---------------------------------------------------------------------------

const path = require("path");
const fs = require("fs");
const ejs = require("ejs");
const config = require("./site.config");
const projects = require("./content/projects");

const VIEWS = path.join(__dirname, "views");
const PUBLIC = path.join(__dirname, "public");
const DIST = path.join(__dirname, "dist");

// Render one EJS view to a destination file inside dist/, creating dirs.
function render(view, outRel, data) {
  const html = ejs.renderFile(path.join(VIEWS, view), data);
  return html.then((str) => {
    const outPath = path.join(DIST, outRel);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, str);
    console.log("  ✓", outRel);
  });
}

async function build() {
  // Start clean.
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  // Copy static assets (styles, script, img, downloads) to dist root so the
  // root-relative /styles.css, /img/..., /downloads/... paths resolve.
  fs.cpSync(PUBLIC, DIST, { recursive: true });
  console.log("  ✓ public/ -> dist/");

  // Pages: home + a detail page per project. Folder/index.html gives clean
  // URLs (/work/<slug>) on any static host.
  await render("index.ejs", "index.html", { config, projects });
  for (const project of projects) {
    await render("project.ejs", path.join("work", project.slug, "index.html"), {
      config,
      project,
    });
  }

  // AI-SEO text files.
  await render("llms.ejs", "llms.txt", { config, projects });
  await render("robots.ejs", "robots.txt", { config });
  await render("sitemap.ejs", "sitemap.xml", { config, projects });

  // Styled 404 page. Cloudflare Pages serves /404.html automatically for
  // unknown paths, matching the Express catch-all.
  await render("404.ejs", "404.html", { config });

  console.log("\nBuilt static site -> dist/  (SITE_DOMAIN=" + config.domain + ")");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
