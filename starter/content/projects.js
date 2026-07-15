// ---------------------------------------------------------------------------
// Work items — EDIT ME to add your projects.
//
// Add an object to this array and you get, for free:
//   - a card in the bento grid on the home page
//   - a detail page at /work/<slug>
//   - an entry in sitemap.xml
//
// Cards are screenshot-first: an image fills the card, the label + tagline
// reveal on hover (and sit below the image on mobile). Drop your screenshot in
// public/img/<slug>.png. No image yet? Leave `screenshot` and a soft
// placeholder shows — wire the real one in later with no code change.
//
// Fields:
//   slug        url segment -> /work/<slug>
//   label       short card title (2-4 words)
//   tagline     one concrete line: the decision or result, not a slogan
//   screenshot  filename in public/img (e.g. "<slug>.png")
//   size        bento span: "sm" | "md" (default) | "lg" (wide) | "tall"
//               (portrait). Mix sizes for a lively grid; it auto-flows, so any
//               number of projects lays out cleanly.
//   number      big headline on the detail page ("+35%", "3x", "Built solo")
//   metric      one line under the number
//   org         small label (company / product)
//   link        external url for a CTA on the detail page (optional, else null)
//   detail      the story. Keep it short and concrete. Sections are
//               { heading, body[] }. Default three: problem / what I did / result.
//
// TIP: there is a ready-made prompt for generating one of these objects from a
// spoken brain-dump — see prompts/add-a-story.md.
// ---------------------------------------------------------------------------

module.exports = [
  {
    slug: "example-project",
    label: "Example project",
    tagline: "Replace this with the one true thing you did.",
    screenshot: "example-project.png",
    size: "lg",
    number: "+35%",
    metric: "the metric you can defend",
    org: "Company",
    link: null,
    detail: {
      title: "I did the thing this project is about",
      lede: "One or two sentences that land the whole story before anyone scrolls.",
      sections: [
        {
          heading: "The problem",
          body: [
            "What was broken or unclaimed, and why it mattered to the business, not just the UI.",
          ],
        },
        {
          heading: "What I did",
          body: [
            "The specific moves you made. Lead with the decision, not the ceremony.",
          ],
        },
        {
          heading: "What moved",
          body: [
            "The outcome. Use a hard number only if you influenced it and could defend it in an interview. Otherwise describe it plainly.",
          ],
        },
      ],
      images: [],
    },
  },
  {
    slug: "second-project",
    label: "Second project",
    tagline: "A different kind of work, to show range.",
    screenshot: "second-project.png",
    size: "md",
    number: "3x",
    metric: "whatever you moved",
    org: "Company",
    link: null,
    detail: {
      title: "A second story, in your own voice",
      lede: "Keep the tone consistent with the first. Short, concrete, one idea per line.",
      sections: [
        {
          heading: "The problem",
          body: ["Set it up in a sentence or two."],
        },
        {
          heading: "What I did",
          body: ["The work."],
        },
        {
          heading: "What moved",
          body: ["The result."],
        },
      ],
      images: [],
    },
  },
];
