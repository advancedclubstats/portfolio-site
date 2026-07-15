// ---------------------------------------------------------------------------
// Site config — the one place to edit identity + domain.
// When you pick your Hostinger domain, change SITE_DOMAIN below (or set the
// SITE_DOMAIN env var on the server) and everything else updates: the
// Ask-AI prompt, the JSON-LD schema, llms.txt, sitemap, and canonical URLs.
// ---------------------------------------------------------------------------

const SITE_DOMAIN = process.env.SITE_DOMAIN || "mattmartin.work";
const PROTOCOL = process.env.SITE_PROTOCOL || "https";

module.exports = {
  name: "Matt Martin",
  role: "Product Manager",
  domain: SITE_DOMAIN,
  baseUrl: `${PROTOCOL}://${SITE_DOMAIN}`,
  email: "mattrobm@gmail.com",
  // Fill these in when ready (leave empty string to hide the link):
  linkedin: process.env.LINKEDIN_URL || "https://www.linkedin.com/in/matthewmartin3/",
  location: "Remote, United States",
  roundRecallUrl: "https://roundrecall.com",
  // The steal-able starter: a GitHub template repo + a downloadable zip.
  starterRepo: "https://github.com/mattrmartin/portfolio-starter",
  // Cloudflare Web Analytics beacon token (privacy-first, cookieless). Enable
  // Web Analytics in the Cloudflare dashboard, paste the token here (or set the
  // CF_ANALYTICS_TOKEN env var). Empty = no beacon rendered.
  analyticsToken: process.env.CF_ANALYTICS_TOKEN || "",

  // Short description reused in meta tags, Open Graph, and llms.txt.
  metaDescription:
    "Matt Martin is a product manager. He finds the expensive problems in a product and fixes the ones that move the business. Most recently at Outschool; builder of RoundRecall.",

  // The prompt visitors send to an AI when they click a footer button.
  // Uses the live domain so the AI has a source to read.
  askAiPrompt: (name, domain) =>
    `Tell me about ${name} based on ${domain}. Summarize who they are, what they do, and how to get in touch.`,

  // Floating nav (the FAB pill). Each item scrolls to a section id on the page.
  nav: [
    { label: "Home", target: "home" },
    { label: "Work", target: "work" },
    { label: "Contact", target: "contact" },
  ],

  // --- Page copy (edit these strings to change the words on the page) -------
  // The big intro card. Placeholder copy — rewrite it in your own voice.
  intro: {
    eyebrow: "Product manager. Product marketer before that.",
    head: "I start from why people buy, then build around it.",
    body: [
      "Most recently a PM at Outschool, working on pricing, checkout, and membership.",
      "I led the call to make membership optional again, and rebuilt onboarding around getting new users to value fast.",
      "I came up through product marketing, so I think buyer first, feature second.",
      "This site is built with Claude Code. The design, words, and judgment are mine.",
      "I build with AI most weeks now, tools, prototypes, this site, and I'm still finding the edges of what it can do.",
    ],
  },
};
