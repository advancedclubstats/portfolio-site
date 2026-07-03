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

## In progress
- Real screenshot to replace the 1 remaining placeholder PNG (sales-tax —
  still 1080x1350 colored fake)
- Custom domain (currently `matt-martin-portfolio.onrender.com` via Render
  free tier)

## Next
- Decide whether sales-tax gets the same engaging-widget treatment or stays
  screenshot-first once a real screenshot lands — don't retrofit until then
- If the user has other Outschool pages open, the same shared-tab pattern
  (add their logged-in tab to the browser automation group) is the fastest
  path to pixel-exact recreations — much better than eyeballing screenshots
