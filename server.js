// ---------------------------------------------------------------------------
// Matt Martin — personal portfolio site
// Node.js + Express. Renders the home page (bento of work cards) plus a detail
// page per project, and the AI-SEO text files (llms.txt, robots.txt,
// sitemap.xml). Everything editable lives in site.config.js and
// content/projects.js. Deployable anywhere that runs Node; binds to PORT.
// ---------------------------------------------------------------------------

const path = require("path");
const express = require("express");
const config = require("./site.config");
const projects = require("./content/projects");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  express.static(path.join(__dirname, "public"), {
    extensions: ["html"],
  })
);

// --- Home ------------------------------------------------------------------
app.get("/", (req, res) => {
  res.render("index", { config, projects });
});

// --- Project detail pages (/work/<slug>) -----------------------------------
app.get("/work/:slug", (req, res) => {
  const project = projects.find((p) => p.slug === req.params.slug);
  if (!project) return res.redirect(302, "/");
  res.render("project", { config, project });
});

// --- AI-SEO text files (rendered so SITE_DOMAIN stays in one place) --------
app.get("/llms.txt", (req, res) => {
  res.type("text/plain");
  res.render("llms", { config, projects }, (err, str) => {
    if (err) return res.status(500).send("");
    res.send(str);
  });
});

app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.render("robots", { config }, (err, str) => {
    if (err) return res.status(500).send("");
    res.send(str);
  });
});

app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  res.render("sitemap", { config, projects }, (err, str) => {
    if (err) return res.status(500).send("");
    res.send(str);
  });
});

// --- Health check ----------------------------------------------------------
app.get("/healthz", (req, res) => res.type("text/plain").send("ok"));

// --- 404 -> home -----------------------------------------------------------
app.use((req, res) => res.redirect(302, "/"));

app.listen(PORT, () => {
  console.log(`Portfolio site running on http://localhost:${PORT}`);
});
