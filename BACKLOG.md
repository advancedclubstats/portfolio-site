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

## In progress
- Real screenshots to replace the 3 remaining placeholder PNGs (Outschool
  cards — all 1080x1350 colored fakes)
- Custom domain (currently `matt-martin-portfolio.onrender.com` via Render
  free tier)

## Next
- Decide whether the 3 Outschool cards get the same phone-mockup treatment
  or stay screenshot-first once real screenshots land — don't retrofit until
  screenshots are in hand
