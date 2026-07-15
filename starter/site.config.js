// ---------------------------------------------------------------------------
// Site config — EDIT ME FIRST.
//
// This is one of the two files you edit to make the site yours (the other is
// content/projects.js). Change your identity + copy here and every page, the
// SEO tags, llms.txt, sitemap, and OpenGraph all update.
//
// Set your live domain via the SITE_DOMAIN env var at build time (or change the
// default below). Locally you can ignore it.
// ---------------------------------------------------------------------------

const SITE_DOMAIN = process.env.SITE_DOMAIN || "example.com";
const PROTOCOL = process.env.SITE_PROTOCOL || "https";

module.exports = {
  name: "Your Name",
  role: "Your Role", // e.g. "Product Manager", "Designer", "Engineer"
  domain: SITE_DOMAIN,
  baseUrl: `${PROTOCOL}://${SITE_DOMAIN}`,
  email: "you@example.com",
  // Leave any of these as "" to hide the link:
  linkedin: process.env.LINKEDIN_URL || "https://www.linkedin.com/in/your-handle/",
  location: "Remote",

  // Short description reused in meta tags, OpenGraph, and llms.txt. One or two
  // plain sentences: who you are and what you do.
  metaDescription:
    "Your Name is a [role] who [does the valuable thing]. One concrete line about what you're known for.",

  // The prompt a visitor sends to an AI from the "Ask an AI about me" tile.
  // Uses your live domain so the AI has a real source to read.
  askAiPrompt: (name, domain) =>
    `Tell me about ${name} based on ${domain}. Summarize who they are, what they do, and how to get in touch.`,

  // In-page nav targets (section ids on the home page).
  nav: [
    { label: "Home", target: "home" },
    { label: "Work", target: "work" },
    { label: "Contact", target: "contact" },
  ],

  // --- Page copy ------------------------------------------------------------
  // The big intro tile. Write this in your own voice. Tip from the build: treat
  // this copy as a placeholder until the layout feels right — don't let rough
  // words shape the design. See DECISIONS.md.
  intro: {
    eyebrow: "One line on who you are.",
    head: "A short, specific headline about how you work.",
    body: [
      "A sentence on where you've been and what you did there.",
      "A sentence on the kind of problem you're best at.",
      "A sentence of personality or point of view.",
      "Each string here renders as its own paragraph. Add or remove freely.",
    ],
  },
};
