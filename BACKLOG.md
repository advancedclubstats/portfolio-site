# Portfolio site backlog

## Done
- Remove card hover box-shadow (kept the lift)
- Remove "How I think" card + config
- LinkedIn link (header + footer, `site.config.js` → `linkedin`)
- Scrollable phone mockup on RoundRecall card: real dashboard data
  (Biggest Leak, Scoring Shape, Where Strokes Are Lost) hand-rebuilt in
  HTML/CSS inside a CSS phone frame, native `overflow-y` scroll, no JS.
  Proved out — ruled out iframe (auth wall) and screen recording (extra
  asset, not interactive).
- Pixel-matched the mock to RoundRecall's actual design tokens (fonts,
  colors, FAB nav) pulled straight from the golf-tracker codebase.
- Work grid reshaped: RoundRecall is now a "tall" (1x2) card packed beside
  two stacked md cards instead of a wide/short hero — varied tile shapes
  like the marco.fyi reference, fixed 340px row unit so it aligns cleanly.
- Signup Rebuild card: real clickable fragment of Outschool's interest-chip
  quiz (click a chip to toggle purple/X, same as the real thing). Started
  eyeballed off a screenshot, later pixel-matched exactly once the user
  added their logged-in Outschool tab to the browser automation group —
  fixed 4 wrong icons, then swapped all 11 to exact FontAwesome paths.
- Optional Membership card: real clickable pricing-tier picker, two plan
  cards from Outschool's actual membership page, click to select
  (radio-style) — the interaction itself demonstrates "mandatory → optional."
  Live-diffed via the same shared-tab method, not eyeballed.

## Done (cont.)
- Added 3 new work stories (`dashboard-rebuild`, `search-by-learner`,
  `built-this-site`) from `content/_pending-stories.js` (now deleted), with
  generated neutral-color placeholder screenshots (not reused copies of
  other cards' — that briefly showed "Built This Site" with a fake
  screenshot labeled "MEMBERSHIP").
- Search by Learner card: real clickable learner-picker dropdown lifted
  from Outschool's actual search bar (shared-tab pixel-match). Click a
  learner row to select it — updates the checkmark, row highlight, chip
  name/avatar, and placeholder text, matching the real dropdown.
- Dashboard Rebuild card: real clickable account dashboard (sidebar nav +
  status tabs + empty state) — turns out this is literally the same real
  page Search by Learner's dropdown sits on top of. Two independent
  click-to-select groups (sidebar, status tabs) demonstrate "every core
  job is 2-3 clicks away" directly instead of just asserting it.
- Fixed a real rendering bug in the Search by Learner mock: `.lm-dropdown`
  was a `<span>` with no `display` set, so it stayed `inline` (its parent
  wasn't flex/grid, so no auto-blockification kicked in) — an inline box
  with a border+radius after a block sibling rendered as a fragmented
  ghost shape ("looks like the search bar is repeated"). Fixed with
  explicit `display:block`, which also restored the intended 8px gap
  (inline elements ignore margin-top).
- Built This Site card: a tiny, structurally-accurate recreation of this
  site's own bento layout (topbar, hero, about tiles, 4 color swatches for
  the real work-card accents, floating nav pill) — no external page to
  pixel-match here, so it's built straight from this codebase's own design
  tokens instead. Meta on purpose for the one story that's about this site.

## Done (cont. 2)
- Dashboard Rebuild card reshaped to "lg" (2-col) so the work grid isn't all
  square/md tiles — matches the marco.fyi "not everything is the same shape"
  bento variety. Scaled up the `.dash-*` mock CSS to fill the bigger shot
  area. Dense-packing reasoned through by hand (array order unchanged) and
  verified in-browser before committing.
- Built the steal-this feature (`steal-this-brief.md`): new `/steal` route +
  `views/steal.ejs`, styled with the existing `.article` detail-page pattern.
  Surfaces `reusable-prompt.md` (build from scratch) and `new-story-prompt.md`
  (add one story) in copyable code blocks, plus a "Download starter (.zip)"
  button. The starter is a one-time hand-stripped copy of this repo (not a
  live zip-generation endpoint — no new dependency): the 6 Matt/Outschool
  mock widgets collapsed to the plain-screenshot fallback, `site.config.js`
  and `content/projects.js` genericized to one example project, `llms.ejs`
  rewritten to read from `projects`/`config` instead of hardcoded bio copy.
  Zipped to `public/downloads/portfolio-starter.zip`. Wired `built-this-site`
  card's `link` to `/steal` — added a `linkLabel` field to the project schema
  so the detail-page CTA can say "Steal it" instead of the default
  "Visit <org>" wording, and made external vs. internal links behave
  correctly (internal links skip `target="_blank"`).
  Skipped the FAB nav addition: the FAB is built for same-page anchor
  scrolling (highlights the section in view), and `/steal` is a separate
  page, so adding it there would be inconsistent with every other entry.
- Scaled the interactive mocks (phone, membership, quiz, learner, dashboard,
  site) to match the bigger 1400px+ work cards — they were sized for the old
  340px row unit and looked small/cramped once the cards grew. Used
  `transform: scale()` on each mock's root element rather than rewriting
  every font-size, with `transform-origin` matched to how its `.shot` aligns
  content. Two needed extra care: quiz-mock fills its shot edge-to-edge on
  purpose ("the chips ARE the whole frame"), so it's shrunk 87% pre-scale to
  leave room to grow into; learner-mock's dropdown is a fixed stack of rows
  (no reflow slack like the chips), so it got a smaller scale (1.08) plus a
  tighter crop (shot padding-top dropped to 0) instead of the others' 1.15.
  Verified all six against their `.shot` bounds via `getBoundingClientRect`
  before/after — zero clipping.
- Deleted the "What I Do" / "What I Want" cards (the whole About section)
  so the intro card is the only text card, and moved Work directly under it
  so it's visible above the fold like marco.fyi. Removed the now-dead
  `whatIDo`/`whatIWant` config fields, the `.stack` CSS (only consumer),
  and the FAB's "About" nav item (its anchor no longer exists).

## In progress
- Real screenshot for sales-tax (only remaining colored-fake placeholder —
  every other card now has a live widget or a real recreation)
- Custom domain (currently `matt-martin-portfolio.onrender.com` via Render
  free tier)

## Next
- Make the UI feel more tactile/engaging, marco.fyi-style: cards greying on
  hover, subtle movement, things sliding rather than just appearing. Explicitly
  NOT a request to change any UI elements — same cards, same mocks, same
  content — just add the motion/hover polish layer on top. Ideas to consider
  (not a spec): hover states on `.card`/`.mem-card`/`.dt-pill`/etc. beyond the
  current lift+shadow, staggered reveal-on-scroll instead of all cards
  fading in together, a slide/parallax on the phone or dashboard mock as it
  scrolls into view, tighter hover transitions on the FAB nav links. Look at
  marco.fyi directly (browser tab, not memory) for the specific interactions
  before implementing, the same way the mocks were pixel-matched.
- Mobile topbar: the header links (`.socials` — Email/LinkedIn/RoundRecall)
  render as plain wide text next to "MATT MARTIN" and crowd the name at
  mobile widths (confirmed via screenshot — all three labels + the name
  fight for one line, cramped and hard to tap accurately). Swap to icon-only
  links below a mobile breakpoint (envelope / LinkedIn mark / link-out icon),
  sized as real touch targets, keep the current full-text labels on desktop.
  `.topbar`/`.socials` in `public/styles.css`, markup in `views/index.ejs`
  (and `views/project.ejs`/`views/steal.ejs`, which have their own simpler
  topbar with just an Email link — check if those need the same treatment).
- Work-card mocks don't sit on a grey surface the way marco.fyi's do: his
  reference widgets (Raycast panel, chat card, phone mock) all float on a
  light grey card background, which reads as structure even when the widget
  itself is white. Ours is inconsistent — `.mem-shot` (#f4f4f6) and
  `.phone-shot` (#e2e0d8) already do this, but `.quiz-shot`, `.learner-shot`,
  and `.dash-shot` are plain white (`#fff`) and `.site-shot` is
  `var(--paper)` (also white), so those four mocks bleed straight to the
  card edge instead of floating on a grey card. Fix: swap those four to
  `var(--card)` (or another neutral grey) to match. All in
  `public/styles.css`, one background value per selector.
- Decide whether sales-tax gets the same engaging-widget treatment or stays
  screenshot-first once a real screenshot lands — don't retrofit until then
- If the user has other Outschool pages open, the same shared-tab pattern
  (add their logged-in tab to the browser automation group) is the fastest
  path to pixel-exact recreations — much better than eyeballing screenshots
- Audit the other mocks' spans for the same missing-display risk if any new
  markup gets added to them later. Confirmed twice now in Search by Learner
  alone: `.lm-dropdown` (fixed earlier) and `.lm-all` (fixed — its block
  children were ignoring its padding because the span itself had no
  `display` set). Pattern: un-blockified inline spans with block children
  inside — check any span holding block-level children.
