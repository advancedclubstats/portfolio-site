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

  // --- Page copy (edit these strings to change the words on the page) -------
  hero: {
    // The big line. Kept as two parts so the second can render in ghost gray.
    lead: "I find where products leak money.",
    leadGhost: "Then I fix it.",
    role: "Growth and monetization PM. Ex-Outschool.",
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
