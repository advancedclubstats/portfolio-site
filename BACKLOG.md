# Portfolio site backlog

## Done
- Remove card hover box-shadow (kept the lift)
- Remove "How I think" card + config
- LinkedIn link (header + footer, `site.config.js` → `linkedin`)

## In progress
- Real screenshots to replace the 4 placeholder PNGs (all 1080x1350 colored fakes)
- Custom domain (currently `matt-martin-portfolio.onrender.com` via Render free tier)

## Next: scrollable phone mockup (RoundRecall card, practice case)
Goal: RoundRecall work card holds a real iPhone-frame mockup you can scroll a
little, instead of a static screenshot. Reference: attached DoorDash-style
example — real UI rebuilt in HTML/CSS inside a phone frame, native scroll,
small idle motion so it reads as "alive."

Decided approach: hand-rebuild 2-3 real RoundRecall dashboard blocks in plain
HTML/CSS (Biggest Leak, Scoring Shape, Where Strokes Are Lost — using real
copy/numbers, not lorem), inside a lightweight CSS phone frame, native
`overflow-y: scroll` (no JS scroll animation). Ruled out: embedding the live
site via iframe (auth wall, not designed to be scaled/framed), a looped screen
recording (real fidelity but another asset to maintain, doesn't feel
interactive). Scope: RoundRecall only for now — don't retrofit into the other
3 cards until this one proves out.
