# Steal list: what we lift from each reference

Two references, each contributing different things. We take branding from Spencer
Gabor and structure from Marco. The shell stays near-monochrome so the color
comes from your UI screenshots, same as both references.

## From spencergabor.work — branding + type

What his site actually uses (read from the live CSS):

- **Display type:** "Futura Now Headline" — big, geometric, ALL CAPS, tight
  tracking (-1.2px), set huge (60px+) with lines packed close together. This is
  the whole personality of his brand.
- **Body type:** Inter.
- **Palette:** near-monochrome. Charcoal text `#363636` on white, with a ghost
  gray `#d2d2d2` used for the secondary line (he literally sets the second half
  of his headline in light gray). Small UPPERCASE labels with wide tracking
  (+1.26px) for metadata like location and "FEATURED WORK".
- **No accent color in the shell at all.** Color only comes from the work
  thumbnails.

What we take: the uppercase geometric display font, the charcoal-on-white with a
ghost-gray secondary, and the small wide-tracked uppercase labels. That's the
"branding" you pointed at.

Note: Futura Now is a paid Adobe font we can't self-host. See the font question
below for free substitutes with the same vibe.

## From marco.fyi — card structure + interactions

What his site actually uses:

- **Bento grid.** One column on mobile, multi-column bento on desktop with tiles
  of different sizes (he has `tile xl`, `tile md`, etc.). 16px gaps.
- **Big rounded tiles**, 32px corner radius, light gray card background
  (`#f7f7f9`). Some tiles are pure text (his intro tile: "i design things. i
  think..."), most hold a UI screenshot.
- **Screenshots bleed and clip.** Images are placed larger than the card and
  clipped by an `overflow: hidden` rounded container, so you see an oversized,
  cropped, rounded-corner snippet. Exactly the "too big, gets cut off, zoom"
  look you described.
- **Color comes from the screenshots**, not the shell.

What we take: the single-column-to-bento responsive grid, the big rounded
light-gray tiles, the mix of text-only and screenshot tiles, and the oversized
clipped screenshot treatment.

**What we deliberately do NOT copy:** his cards link out to external sites. Yours
click into internal detail pages (blog-post style). That's the scalable engine
you want and the thing that makes this a PM portfolio, not a design gallery.

## How it merges with your existing content

Your `site-content.md` already has the copy and it's good. The reference sites
change the *container*, not the words:

- Hero: keep your one-liner ("I find where products leak money. Then I fix it.")
  but set it in the Spencer-style uppercase geometric display, with the role line
  in ghost gray.
- "What I do": stays three stacked lines.
- **Work: this is where Marco's bento replaces the old carousel.** Your four work
  items become bento tiles. Number-first (`+35%`, `3x`, `0`, `Built solo`) as the
  headline, one line of context, and a screenshot slot that clips oversized.
  Each tile clicks into a detail page.
- "How I think": stays the big-type aphorism block. This is the typographic
  moment, set in the display font.
- "What I want" + contact/Ask-AI footer: unchanged.

## Detail pages (the new part)

Each work tile opens a page: big title, the number restated, then room for you to
tell the real story (problem, what you did, what moved, screenshots inline). This
is a template you can clone per project forever. RoundRecall gets one now;
Outschool items get one each as you write them.

## Open decisions (need your calls)

1. **Display font.** Futura Now is paid. Closest free, self-hostable substitutes
   with the same geometric-uppercase energy: Space Grotesk, Archivo (Expanded),
   or Sora. My lean is Space Grotesk. Or we pay/license actual Futura if you want
   the exact match.
2. **Screenshots.** You don't have them yet, and Outschool UI may be off-limits
   post-layoff. Options: build text-first tiles now with the screenshot slot
   ready, or use tasteful abstract/number-forward tiles until you capture real
   ones. RoundRecall you can screenshot yourself today.
3. **Copy per card.** Marco (a designer) lets visuals carry it. You're a PM, so I
   lean toward keeping your number + one line on each tile even once screenshots
   land. Agree, or go more visual?
4. **Accent color.** Both references keep the shell monochrome and let
   screenshots supply color. I'd do the same. One tiny accent only if you want
   the numbers to pop.
5. **Stack.** There's already a Node/Express scaffold here with SEO + llms.txt
   wired. I'd keep it and add the bento + detail-page routes, rather than start
   over. Fine?
