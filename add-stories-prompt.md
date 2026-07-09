# Claude Code task: add three work stories

Paste everything below the line into Claude Code from the portfolio-site repo.

---

Add three new work stories to the portfolio. The complete, canonical project
objects are at the bottom of this message. Your job is the content only. I am
handling bento placement and imagery myself, so stay out of both.

## Read first (source of truth, don't rely on memory)

- `content/projects.js` — the object schema and the existing stories. Match the
  shape and the tone of what's already there.
- `~/CoWork/ABOUT ME/anti-ai-writing-style.md` — my voice rules. The copy below
  already follows them; if you touch any wording, keep following them. The big
  ones: no em dashes, short and concrete, vary sentence length, no consultant
  filler, no invented causality.

## Scope: do exactly this

1. Add the three project objects below to the array in `content/projects.js`.
   If any are already present from a prior session, reconcile them to match the
   versions below (these are canonical). Order in the array doesn't matter for
   this task; I'll reorder.
2. Confirm the free downstream artifacts work: each object should yield a
   `/work/<slug>` detail page and a `sitemap.xml` entry with no code changes
   beyond the data.

## Out of scope: do NOT touch

- **Bento grid / placement.** Do not edit `grid-template-areas`, the `area`
  values, `public/styles.css`, or `views/index.ejs`. Leave each object's `area`
  exactly as written below. The home mosaic will look wrong until I wire
  placement, and that's expected. Do not try to repack the grid to fix it.
- **Imagery.** Do not create, generate, download, or choose screenshots. Leave
  `screenshot` as the `<slug>.png` filenames below. Placeholder images may
  already exist at those paths; leave them. I'm sourcing the real ones.

## Honesty rules (matter to me)

- Only the tutoring story carries a hard number (+15% YoY bookings). It's real
  and documented; keep it.
- The Kajabi and landing-page stories intentionally have no metric. Do not add
  one, and do not soften the "no clean attribution" framing into fake precision.

## Verify before you call it done

- `node -e "require('./content/projects.js')"` parses with no error, and the
  array length increased by the number of stories you added.
- Start the server (`npm start`), then confirm each of these returns 200 and
  renders its headline copy: `/work/kajabi-launches`, `/work/tutoring-launch`,
  `/work/landing-page-experiments`. (Skip judging the home mosaic; placement is
  mine.)
- Update `BACKLOG.md` per the repo convention (move done items, note what
  shipped, add "wire placement + real screenshots for the three new cards" under
  Next if it isn't there).

## The three objects (canonical)

```js
  {
    slug: "kajabi-launches",
    area: "kaj",
    label: "Kajabi launches",
    tagline: "Took Coaching, Podcasts, and Newsletters to market.",
    screenshot: "kajabi-launches.png",
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
```
