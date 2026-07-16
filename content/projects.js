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
            "Undoing it meant reversing a decision the company had already committed to. It was an incredibly complex cross-functional decision that impacted every team at the company."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Shifted the model from mandatory membership to optional. Reintroduced a la carte purchasing across web and mobile. Built clearer measurement around monetization so the bet could be judged honestly.",
            "The tradeoff was short-term revenue predictability vs. long-term growth. I made the case and owned it."
          ]
        },
        {
          heading: "What moved",
          body: [
            "New buyer conversion rose 35% and total payments rose 10% YoY.",
            "The lift in these numbers among several other guardrail metrics confirmed our membership product was net friction."
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
    metric: "",
    org: "roundrecall.com",
    size: "tall",
    link: "https://roundrecall.com",
    detail: {
      title: "RoundRecall",
      lede: "RoundRecall reads your golf round from memory instead of making you tap after every shot. I use it almost daily to track practice and rounds, meticulously crafting the UI/UX to solve my problem.",
      sections: [
        {
          heading: "The idea",
          body: [
            "Most golf apps make you log every shot as you play via GPS. Most people don't like using their phone that much when they golf. RoundRecall lets you reconstruct the round afterward, from memory, and get the same fidelity of insights."
          ]
        },
        {
          heading: "How I built it",
          body: [
            "Solo with Claude Code. Every feature and product change is a result of usage and pressure testing ideas to ensure we adhere to the vision of the app and solve the problem efficiently."
          ]
        },
        {
          heading: "See it",
          body: [
            "The live app is the best version of this story. Go tap around, I made a demo version where you can see my real data and add your own (you won't mess with mine)."
          ]
        }
      ],
      images: []
    }
  },
  {
    slug: "signup-rebuild",
    area: "quiz",
    label: "Onboarding rebuild",
    tagline: "Rebuilt onboarding to increase conversion and retention.",
    screenshot: "signup-rebuild.png",
    quizMock: true,
    number: "+70%",
    metric: "signup to purchase rate",
    org: "Outschool",
    size: "md",
    link: null,
    detail: {
      title: "I rebuilt the onboarding flow",
      lede: "The onboarding flow was bare bones and left users with no momentum in the product. I led the rebuild and increased the visit-to-signup rate too.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Onboarding dropped users into our product with no context, resulting in a high bounce rate and low conversion rate."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Rapid experimentation and built a high touch onboarding flow that increased user momentum and helped us better recommend products to our users throughout their product experience."
          ]
        },
        {
          heading: "What moved",
          body: [
            "Signup volume tripled. Conversion improved 70%. Overall user flow subjectively improved and increased user trust."
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
      lede: "The company was eating sales tax in every state. I shipped collection at checkout and conversion did not move.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Outschool was absorbing sales tax it should have collected. Every US state treats online education differently, so there was no single rule to follow.",
            "Adding a tax line at checkout is a price increase which usually cost you conversion."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Owned the product implementation and worked through state-level tax law with legal and finance. Designed a checkout that introduced tax to users without scaring them, and shipped the backend to collect and remit across applicable states."
          ]
        },
        {
          heading: "What moved",
          body: [
            "Conversion held flat despite a real price increase to users. This meant money going back to the company, a decrease in regulatory risk, and proof that careful UX can absorb a price change that normally hurts."
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
    number: "2 clicks",
    metric: "to any core job",
    org: "Outschool",
    size: "lg",
    link: null,
    detail: {
      title: "I rebuilt the dashboard",
      lede: "The dashboard was an afterthought, and users treated it like one. They considered it an afterthought and left it to get anything done. I rebuilt it so the core jobs live in one place, two clicks away.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Outschool's dashboard was effectively useless. You could not change payment, enroll in a class, adjust an enrollment, or message a teacher from one page. Even joining a class was confusing.",
            "We interviewed dozens of users and they confirmed our hypothesis."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Redesigned the dashboard and the settings pages behind it, in addition to fixing a bunch of design and tech debt. The goal was to collect scattered actions into one place and make every core job reachable in a couple clicks."
          ]
        },
        {
          heading: "What moved",
          body: [
            "The dashboard became useful again, users wrote into CX less, and subjectively found the design to be better."
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
    number: "+8%",
    metric: "search to enroll rate",
    org: "Outschool",
    size: "md",
    link: null,
    detail: {
      title: "I built search by learner",
      lede: "Outschool's search was a blank box and generally not kid-centric. Parents rarely search in the abstract and typically have a kid in mind, sometimes several. I made the child the starting point.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Search was a generic bar, despite the fact that parents were searching for a specific kid in almost all cases. We saw that users with more filters converted more often. We were collecting all the key data points during onboarding."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Made the learner explicit where you pick a child, and search preloads key data points like ages, availability, and formats of interest. Shipped and tested a few versions to find the one that worked best with our users."
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
    heroEmbed: "https://www.youtube.com/embed/8krfUu-Ekxw",
    kajMock: true,
    number: "4 products",
    metric: "launched, still core to Kajabi today",
    org: "Kajabi",
    size: "lg",
    detail: {
      title: "I launched four of Kajabi's core products",
      lede: "Kajabi sold a course builder product. I was the product marketer who took its next four products to market: Coaching, Podcasts, Newsletters, and a website builder. Years later, most of them are still core to the product.",
      sections: [
        {
          heading: "The problem",
          body: [
            "To keep growing, Kajabi had to become the whole business-in-a-box for creators. That meant shipping products others were building in the market, so we could compete."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Owned GTM as the product marketer on Coaching, Podcasts, Newsletters, and the website builder. Positioning, messaging, and the launch itself.",
            "We ran the launches as an Apple-style event (you can watch in the hero), leadership on camera in the office walking through each product. I helped produce the event and wrote scripts, worked with our creative marketing team to make it happen. Around each one we shipped the feature page, a demo video, an in-house podcast, blog posts, and the social media content."
          ]
        },
        {
          heading: "What lasted",
          body: [
            "No clean attribution here, and I will not invent one. Product marketing rarely gets a single number it can honestly own. The proof is that over five years later, these products are still core to the platform, positioned in a similar way to how we launched them."
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
      lede: "Outschool was mainly seen as a group class platform and tutoring was a not-so-secret category of classes. I led the GTM that made tutoring its own “official” category: positioning, pricing, lifecycle, and the launch page. Bookings grew 15% YoY.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Parents wanted one-on-one help, not only group classes. Outschool had the supply to do it but no real tutoring offering and no formal product support.",
            "The category was there in theory and invisible in practice, buried inside a class catalog built for something else."
          ]
        },
        {
          heading: "What I did",
          body: [
            "Led GTM for tutoring as a new category. Set the positioning, lifecycle around it, and shipped the landing page parents went to.",
            "The job was to make tutoring legible and findable on its own terms, not a filter on the class search."
          ]
        },
        {
          heading: "What moved",
          body: [
            "Tutoring bookings grew 15% YoY, and it became one of the platform's core growth levers."
          ]
        }
      ],
      images: []
    }
  },
  {
    slug: "landing-page-experiments",
    area: "land",
    label: "Marketplace merchandising",
    tagline: "Owned how the catalog got surfaced and sold.",
    screenshot: "landing-page-experiments.png",
    landMock: true,
    number: "620",
    metric: "category pages I launched",
    org: "Outschool",
    size: "md",
    link: "https://outschool.com/online-classes/popular",
    linkLabel: "See Outschool",
    detail: {
      title: "I ran how the marketplace surfaced and sold its catalog",
      lede: "Outschool had thousands of classes and no deliberate system for putting the right ones in front of the right parents. Discovery was thin, SEO was weak, and there was no way to build or test a page without engineering.",
      sections: [
        {
          heading: "The problem",
          body: [
            "We were leaving demand on the table. Parents searched in patterns we weren't acting on, our best inventory was hard to find, and every new marketing page meant an eng and design cycle."
          ]
        },
        {
          heading: "What I owned",
          body: [
            "I built the merchandising layer: our first real catalog taxonomy (by hand, in Excel, pre-LLM) that fed search tagging and the navbar, plus suggested searches, a seasonal global nav, and the reading of demand trends that told product and marketing what to push and when."
          ]
        },
        {
          heading: "Turning that into pages",
          body: [
            "The team started generating category landing pages at scale to get indexed, about 25,000 of them, with early ChatGPT drafting hero copy that I edited and maintained. That SEO project turned into a self-serve system (headless CMS) that let marketing ship and test pages in minutes instead of weeks, with no eng/design loop. I helped shape it and then it became my surface to run."
          ]
        },
        {
          heading: "What moved",
          body: [
            "These pages became a core part of the organic and paid machine. I launched 620 by hand: wrote the copy, chose the imagery, ran the tests, and experimented with early LLMs to generate copy and images. Together they drove hundreds of thousands in revenue. I also moved our catalog ads onto category pages with no supply limits, which lifted paid efficiency without cutting conversion. The real unlock was cadence. Marketing stopped waiting on the backlog, and I could tune what the marketplace merchandised as fast as demand moved."
          ]
        }
      ],
      images: []
    }
  }
];
