// ---------------------------------------------------------------------------
// Work items. THIS is the file you edit to add a new project.
//
// Add an object to the array and you get, for free:
//   - a card in the bento grid on the home page
//   - a detail page at /work/<slug>
//   - an entry in sitemap.xml
//
// Fields:
//   slug        url segment, e.g. "membership-optional" -> /work/membership-optional
//   number      the big headline on the card ("+35%", "3x", "0", "Built solo")
//   metric      one short line under the number on the card
//   org         small label, bottom of the card ("Outschool", "roundrecall.com")
//   size        bento sizing: "sm" | "md" | "lg" | "xl" (controls desktop span)
//   screenshot  filename in /public/img, or null for a text-first card
//   link        external url for the card's org label (optional)
//   detail      the detail-page story. Keep the voice: short, concrete, no fluff.
//               Each section is { heading, body } where body is an array of
//               paragraphs. Add screenshots to a detail page with `images`.
// ---------------------------------------------------------------------------

module.exports = [
  {
    slug: "membership-optional",
    number: "+35%",
    metric: "new buyer conversion",
    org: "Outschool",
    size: "lg",
    screenshot: null,
    link: null,
    detail: {
      title: "I made membership optional",
      lede: "Membership was mandatory. I made it optional. Conversion rose 35%. Revenue rose 10% too.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Outschool required membership to buy a class. The theory was that membership added value. The data suggested it mostly added friction.",
            "Undoing it meant reversing a decision the company had already committed to. That is a harder problem than any UX change."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Shifted the model from mandatory membership to optional. Reintroduced a la carte purchasing across web and mobile. Built clearer measurement around monetization so the bet could be judged honestly.",
            "The tradeoff was real: short-term revenue predictability against long-term growth. I made the case and owned it."
          ]
        },
        {
          heading: "What moved",
          body: [
            "New buyer conversion rose 35% year over year. Total payments rose 10%.",
            "The lift confirmed the bet. Membership had been net friction, not net value."
          ]
        }
      ],
      images: []
    }
  },
  {
    slug: "signup-rebuild",
    number: "3x",
    metric: "signups",
    org: "Outschool",
    size: "md",
    screenshot: null,
    link: null,
    detail: {
      title: "I rebuilt the signup flow",
      lede: "The signup flow was leaking people. I rebuilt it, tested fast, and cut the dead steps. Conversion up 70%.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Onboarding had friction points that quietly suppressed signup and activation. People were dropping before they ever saw the product."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Rapid experimentation. Redesigned the funnel. Simplified onboarding. Removed steps that did not earn their place, and tested each change instead of guessing."
          ]
        },
        {
          heading: "What moved",
          body: [
            "Signup volume tripled. Conversion improved 70%. Directional outcomes from work I led, not a lab result."
          ]
        }
      ],
      images: []
    }
  },
  {
    slug: "sales-tax",
    number: "0",
    metric: "conversion lost",
    org: "Outschool",
    size: "md",
    screenshot: null,
    link: null,
    detail: {
      title: "I added sales tax without losing conversion",
      lede: "The company was eating sales tax in every state. I shipped collection at checkout and conversion did not move. Raising a price for free is the hard part. That is the win.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Outschool was absorbing sales tax it should have collected. Every US state treats online education differently, so there was no single rule to follow.",
            "Adding a tax line at checkout is a price increase. Price increases usually cost you conversion."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Owned the product implementation. Worked through state-level tax law with legal and finance. Designed a checkout that introduced tax to users without spooking them, and shipped the backend to collect and remit across states."
          ]
        },
        {
          heading: "What moved",
          body: [
            "Conversion held flat despite a real price increase to users. Money back to the company, regulatory risk down, and proof that careful UX can absorb a price change that normally hurts."
          ]
        }
      ],
      images: []
    }
  },
  {
    slug: "roundrecall",
    number: "Built solo",
    metric: "RoundRecall",
    org: "roundrecall.com",
    size: "lg",
    screenshot: "roundrecall-cover.png",
    link: "https://roundrecall.com",
    detail: {
      title: "RoundRecall",
      lede: "RoundRecall reads your golf round from memory instead of making you tap after every shot. I kept deleting features until it said one true thing.",
      sections: [
        {
          heading: "The idea",
          body: [
            "Most golf apps make you log every shot as you play. Nobody does it for long. RoundRecall lets you reconstruct the round afterward, from memory, and still get real insight."
          ]
        },
        {
          heading: "How I built it",
          body: [
            "Solo. Product, design, and the calls about what to leave out. The discipline was subtraction: every feature had to survive the question of whether it made the one true thing clearer or just added noise."
          ]
        },
        {
          heading: "See it",
          body: [
            "The live app is the best version of this story. Go tap around."
          ]
        }
      ],
      images: []
    }
  }
];
