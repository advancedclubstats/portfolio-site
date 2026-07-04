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

## In progress
- Real screenshots for sales-tax, built-this-site (both still colored-fake
  placeholders — dashboard-rebuild and search-by-learner now have live
  widgets instead, no screenshot needed)
- Custom domain (currently `matt-martin-portfolio.onrender.com` via Render
  free tier)

## Next
- Build the steal-this feature. Full brief in `steal-this-brief.md`: a `/steal`
  route/section with the reusable prompt(s) and a downloadable starter (repo zip
  and/or `.skill` bundle). After it exists, wire the `built-this-site` card
  `link` to it and add it to the FAB if it reads well.
- Decide whether sales-tax gets the same engaging-widget treatment or stays
  screenshot-first once a real screenshot lands — don't retrofit until then
- If the user has other Outschool pages open, the same shared-tab pattern
  (add their logged-in tab to the browser automation group) is the fastest
  path to pixel-exact recreations — much better than eyeballing screenshots
