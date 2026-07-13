# Claude Design prompt

Paste this into Claude Design. The content it should use is in `site-content.md`
(paste that alongside this prompt).

---

Design a personal portfolio site for a product manager. One page, mobile-first.
Desktop is just a comfortable centered column, not a new layout.

**The feeling:** Instagram meets Claude chat. Ultra clean, modern, a little
vibey. Left-aligned everything. Clean text, generous whitespace, big block
headings. Almost aggressively minimal, to the point where the restraint itself
is the design. It should feel cool and creative, not like a resume and not like
a corporate template. Someone should want to keep scrolling.

**Read time:** under a minute. There is very little text on purpose. Do not add
sections, taglines, or filler. Use the exact copy from `site-content.md`.

**Layout, top to bottom:**

1. Hero. Name in large type, one sharp line under it, then a small
   role line. No nav bar, no hero image, no buttons. Just words with room to
   breathe.
2. "What I do": three short lines, stacked, left-aligned. No icons, no cards.
3. Work: a horizontal, swipeable carousel of four cards. Each card leads with a
   big number or short label (`+35%`, `3x`, `0`, `Built solo`) and one line of
   context. Snap scrolling on mobile. On desktop, still a horizontal scroll or a
   restrained row. Cards are simple: a lot of padding, one accent, no clutter.
4. "How I think": four one-liners in large type, one per line, lots of vertical
   space between them. This is the most typographic moment on the page.
5. "What I want": three short lines.
6. Footer: email, then an "ask an AI about me" row with four pill buttons
   (ChatGPT, Claude, Perplexity, Gemini).

**Type and color:**

- One modern sans typeface (Inter, Geist, or similar). Two weights max.
- Near-monochrome. Off-white or near-black background, high-contrast text, one
  single accent color used sparingly (on the numbers and the buttons). Pick an
  accent that reads modern and confident, not playful.
- Big type scale. Small body. Let size and space do the work, not borders or
  boxes.

**Motion and interaction:**

- Subtle only. A soft fade or rise as blocks enter the viewport. Nothing bouncy.
- The work carousel snaps. Tap targets are generous. It should feel native on a
  phone.
- Buttons have a clean press state. No gradients, no glow, no drop shadows as
  decoration.

**Carousel image note:** the work cards are text-first for now, but build the
carousel so an image or short screen recording can slot into each card later
(RoundRecall screenshots especially). Leave the structure ready for it.

**Hard constraints:**

- No stock photos, no illustration packs, no emoji, no icon soup.
- No gradients used as decoration. No noise textures. No glassmorphism.
- Deliver it as plain, self-contained HTML + CSS + a little JS (the carousel and
  the Ask-AI buttons). It has to drop into an existing Node/Express site as a
  static template, so no framework or build step required.
- Mobile-first CSS. Test the phone width first, then let it breathe on desktop.

**Ask-AI buttons behavior:** each button opens an AI provider in a new tab with
this prompt pre-loaded: "Tell me about Matt Martin based on [domain]. Summarize
who he is, what he does, and how to get in touch." ChatGPT, Claude, and
Perplexity take the prompt as a URL query param; Gemini has no prefill URL, so
copy the prompt to the clipboard and open Gemini with a short "paste it in" note.

Show me the full page first. I'll tell you what to adjust.
