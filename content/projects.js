// ---------------------------------------------------------------------------
// Work items. THIS is the file you edit to add a new project.
//
// Add an object to the array and you get, for free:
//   - a card in the bento grid on the home page
//   - a detail page at /work/<slug>
//   - an entry in sitemap.xml
//
// Cards are screenshot-first: the image fills the top of the card, a thin text
// strip sits below. The big number lives inside the screenshot, not the text.
//
// Fields:
//   slug        url segment, e.g. "membership-optional" -> /work/membership-optional
//   label       short card title in the text strip ("Optional membership")
//   tagline     one short line under the label (placeholder copy; rewrite freely)
//   screenshot  filename in /public/img shown full-bleed on the card
//   number      big headline on the DETAIL page hero ("+35%", "3x", ...)
//   metric      one line under the number on the detail hero
//   org         small label ("Outschool", "roundrecall.com")
//   size        bento sizing: "sm" | "md" | "lg" | "xl" | "tall" (controls
//               desktop grid span — "tall" is 1 column x 2 rows, for portrait
//               content like the RoundRecall phone mock; order in this array
//               matters for how "tall" packs against its neighbors)
//   link        url shown as a CTA on the detail page (optional). External
//               (http...) links get "Visit <org>" and open in a new tab;
//               internal (/path) links default to "Go" and stay in-tab.
//   linkLabel   overrides the default CTA text above (optional)
//   detail      the detail-page story. Keep the voice: short, concrete, no fluff.
//               Each section is { heading, body } where body is an array of
//               paragraphs. Add screenshots to a detail page with `images`.
// ---------------------------------------------------------------------------

module.exports = [
  {
    slug: "membership-optional",
    area: "memb",
    label: "Optional membership",
    tagline: "Made membership optional across web and mobile.",
    screenshot: "membership-optional.png",
    pricingMock: true,
    number: "+35%",
    metric: "new buyer conversion",
    org: "Outschool",
    size: "lg",
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
    slug: "roundrecall",
    area: "phone",
    label: "Built solo",
    tagline: "A golf app, designed and shipped end to end.",
    screenshot: "roundrecall-cover.png",
    heroPair: ["roundrecall-hero.png", "roundrecall-dash.png"],
    phoneMock: true,
    number: "Built solo",
    metric: "RoundRecall",
    org: "roundrecall.com",
    size: "tall",
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
  },
  {
    slug: "signup-rebuild",
    area: "quiz",
    label: "Signup rebuild",
    tagline: "Rebuilt onboarding and cut the dead steps.",
    screenshot: "signup-rebuild.png",
    quizMock: true,
    number: "3x",
    metric: "signups",
    org: "Outschool",
    size: "md",
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
    area: "tax",
    label: "Sales tax at checkout",
    tagline: "Added tax at checkout without losing conversion.",
    screenshot: "sales-tax.png",
    taxMock: true,
    number: "0",
    metric: "conversion lost",
    org: "Outschool",
    size: "md",
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
    slug: "dashboard-rebuild",
    area: "dash",
    label: "Dashboard rebuild",
    tagline: "Put every core job two or three clicks away.",
    screenshot: "dashboard-rebuild.png",
    dashMock: true,
    number: "2–3 clicks",
    metric: "to any core job",
    org: "Outschool",
    size: "lg",
    link: null,
    detail: {
      title: "I rebuilt the dashboard",
      lede: "The dashboard was an afterthought, and users treated it like one. They left it to get anything done. I rebuilt it so the core jobs live in one place, two or three clicks away.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Outschool's dashboard was effectively useless. You could not change payment, enroll in a class, adjust an enrollment, or message a teacher from one page. Even joining a class was confusing.",
            "We interviewed dozens of users. They confirmed it. The dashboard was an afterthought, and they had built workarounds to do their core jobs."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Redesigned the dashboard and the settings pages behind it, on top of a pile of design and tech debt. The bar was simple: pull the scattered actions into one place and make every core job reachable in two or three clicks."
          ]
        },
        {
          heading: "What moved",
          body: [
            "Dashboard usage rose. Time to finish a core job dropped. Users said so too.",
            "No single headline number here. The direction was clear and consistent across all three."
          ]
        }
      ],
      images: []
    }
  },
  {
    slug: "search-by-learner",
    area: "learn",
    label: "Search by learner",
    tagline: "Rebuilt search around the kid, not a blank box.",
    screenshot: "search-by-learner.png",
    learnerMock: true,
    number: "Significant lift",
    metric: "in search to enroll",
    org: "Outschool",
    size: "md",
    link: null,
    detail: {
      title: "I built search by learner",
      lede: "Outschool's search was a blank box. But parents never search in the abstract. They have one kid in mind, sometimes several. I made the child the starting point.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Search was a generic bar. Type anything, good luck. The trouble is that a parent is never searching for themselves. They are searching for one child: their age, their interests, when they are free.",
            "We already collected all of that at onboarding. Search ignored it."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Made the learner explicit. You pick a child, and search preloads what we already know: age, interests, availability. From there you add only the part that is actually new.",
            "Shipped and tested a few versions to find the one that landed."
          ]
        },
        {
          heading: "What moved",
          body: [
            "Search-to-list click rate rose, and so did search-to-enroll. The result reached statistical significance."
          ]
        }
      ],
      images: []
    }
  },
  {
    slug: "kajabi-launches",
    area: "kaj",
    label: "Kajabi launches",
    tagline: "Took Coaching, Podcasts, and Newsletters to market.",
    screenshot: "kajabi-launches.png",
    kajMock: true,
    number: "4 products",
    metric: "launched, still core to Kajabi today",
    org: "Kajabi",
    size: "lg",
    link: "https://pages.kajabi.com/special-event",
    linkLabel: "Watch the launch event",
    detail: {
      title: "I launched four of Kajabi's core products",
      lede: "Kajabi sold courses. I was the product marketer who took its next four products to market: Coaching, Podcasts, Newsletters, and a website builder. Years later, most of them are still core to the product.",
      sections: [
        {
          heading: "The problem",
          body: [
            "To keep growing, Kajabi had to become the whole business-in-a-box for creators. That meant shipping and selling products it had never sold before.",
            "New products do not sell themselves. Someone has to decide what each one is, who it is for, and why anyone should switch to it."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Owned go-to-market as the product marketer on Coaching, Podcasts, Newsletters, and the website builder. Positioning, messaging, and the launch itself.",
            "We ran the launches as a series of Apple-style events, leadership on camera in the office walking through each product. I helped produce them and wrote scripts. Around each one we shipped the feature page, a demo video, an in-house podcast, blog posts, and the social."
          ]
        },
        {
          heading: "What lasted",
          body: [
            "No clean attribution here, and I will not invent one. Product marketing rarely gets a single number it can honestly own.",
            "The durable proof is on Kajabi's site. Five years on, Coaching, Podcasts, and Newsletters are still core products, positioned much the way we launched them."
          ]
        }
      ],
      images: []
    }
  },
  {
    slug: "tutoring-launch",
    area: "tut",
    label: "Tutoring launch",
    tagline: "Opened tutoring as a new category.",
    screenshot: "tutoring-launch.png",
    tutMock: true,
    number: "+15%",
    metric: "YoY tutoring bookings",
    org: "Outschool",
    size: "md",
    link: "https://outschool.com/tutoring",
    linkLabel: "See the tutoring page",
    detail: {
      title: "I launched tutoring as a new category",
      lede: "Outschool had group classes, not tutoring. I led the go-to-market that made tutoring its own category: positioning, pricing, lifecycle, and the launch page. Bookings grew 15% year over year.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Parents wanted one-on-one help, not only group classes. Outschool had the supply to do it but no real tutoring offering and no demand pointed at one.",
            "The category was there in theory and invisible in practice, buried inside a class catalog built for something else."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Led GTM for tutoring as a new category. Set the positioning and pricing, built the lifecycle around it, and shipped the launch surface parents landed on.",
            "The job was to make tutoring legible and findable on its own terms, not a filter on the class search."
          ]
        },
        {
          heading: "What moved",
          body: [
            "Tutoring bookings grew 15% year over year, and it became one of the platform's core growth levers.",
            "This is a number I can defend. I owned the launch that opened the category."
          ]
        }
      ],
      images: []
    }
  },
  {
    slug: "landing-page-experiments",
    area: "land",
    label: "Landing-page testing",
    tagline: "Ran the experiment loop on our highest-traffic pages.",
    screenshot: "landing-page-experiments.png",
    landMock: true,
    number: "Always testing",
    metric: "on the pages that carry paid traffic",
    org: "Outschool",
    size: "md",
    link: "https://outschool.com",
    linkLabel: "See Outschool",
    detail: {
      title: "I ran our landing-page experiment program",
      lede: "The homepage and marketing landing pages are where Outschool's paid traffic lands. My pod ran the experiments on them, and on the Facebook ads feeding them, so positioning got tested instead of argued about.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Facebook is one of Outschool's biggest sources of business. All that paid traffic hits a handful of pages: the homepage, summer camps, programming, homeschool.",
            "Small changes to those pages move real money. Most opinions about them were still just opinions."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Ran a steady experiment program across the homepage and the top marketing landing pages, plus the ad creative pointed at them. Tested headlines, layout, and positioning.",
            "Kept what won, cut what did not, and let the traffic settle the arguments."
          ]
        },
        {
          heading: "What moved",
          body: [
            "No single headline number I would stand behind here, and I would rather say that than invent one.",
            "The value was the cadence. A constant test loop on the pages and ads that carry the most acquisition traffic, so the funnel kept getting a little better instead of guessing."
          ]
        }
      ],
      images: []
    }
  }
];
