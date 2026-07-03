// ---------------------------------------------------------------------------
// Site config — the one place to edit identity + domain.
// When you pick your Hostinger domain, change SITE_DOMAIN below (or set the
// SITE_DOMAIN env var on the server) and everything else updates: the
// Ask-AI prompt, the JSON-LD schema, llms.txt, sitemap, and canonical URLs.
// ---------------------------------------------------------------------------

const SITE_DOMAIN = process.env.SITE_DOMAIN || "mattmartin.example";
const PROTOCOL = process.env.SITE_PROTOCOL || "https";

module.exports = {
  name: "Matt Martin",
  role: "Growth & Monetization Product Manager",
  domain: SITE_DOMAIN,
  baseUrl: `${PROTOCOL}://${SITE_DOMAIN}`,
  email: "mattrobm@gmail.com",
  // Fill these in when ready (leave empty string to hide the link):
  linkedin: process.env.LINKEDIN_URL || "",
  location: "Remote, United States",
  roundRecallUrl: "https://roundrecall.com",

  // Short description reused in meta tags, Open Graph, and llms.txt.
  metaDescription:
    "Matt Martin is a growth and monetization product manager. He finds the expensive problems in a product and fixes the ones that move the business. Most recently at Outschool; builder of RoundRecall.",

  // The prompt visitors send to an AI when they click a footer button.
  // Uses the live domain so the AI has a source to read.
  askAiPrompt: (name, domain) =>
    `Tell me about ${name} based on ${domain}. Summarize who they are, what they do, and how to get in touch.`,

  // Floating nav (the FAB pill). Each item scrolls to a section id on the page.
  nav: [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Work", target: "work" },
    { label: "Contact", target: "contact" },
  ],

  // --- Page copy (edit these strings to change the words on the page) -------
  // The big intro card. Placeholder copy — rewrite it in your own voice.
  intro: {
    eyebrow: "Matt is a product manager",
    head: "I work on the part of a product where money is won or lost.",
    body: [
      "Placeholder. Say who you are in two or three lines.",
      "Growth, monetization, conversion. The expensive problems, not the obvious ones.",
    ],
  },

  whatIDo: [
    "Find the expensive problem. It's rarely the obvious one.",
    "Ship the fix. Prove it worked.",
    "Cut whatever doesn't earn its place.",
  ],

  // Big-type aphorism block. This is the typographic moment.
  howIThink: [
    "Completion beats precision.",
    "One good way beats two.",
    "A number you can defend beats three you can't.",
    "If thin data can't say anything, say nothing.",
  ],

  whatIWant: [
    "Senior or lead PM. Growth, monetization, conversion.",
    "Consumer, marketplace, or subscription. Remote.",
    "Real product strategy, not ticket triage.",
  ],
};
