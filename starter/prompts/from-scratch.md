# Prompt: build a portfolio from scratch

Paste this into Claude (Claude Code, or claude.ai). Fill the brackets first —
that's most of the work. This is the prompt that avoids the generic first draft.

---

I want to build a personal portfolio site. Work with me like this:

**Context first.** Read my About Me file (attached). If I haven't given you one,
interview me first (10-15 questions on my work, goals, and voice) and save it as
`about-me.md` before building anything. Treat every word of copy as a placeholder
until the design is locked. Design first. Do not let my rough copy shape the
layout.

**The look (this is my taste, don't drift).**
- Steal from these: [SITE 1] for [e.g. fonts + branding], [SITE 2] for [e.g. card
  structure and layout]. Actually open them and read the real CSS, then lift
  those specific parts closely, section by section. Be original only where I
  haven't pointed at something.
- How literal: [e.g. near-literal on structure, my own color and type].
- Mobile-first. Overall structure: [e.g. everything is a card in a bento grid,
  single column on mobile, multi-column on desktop].
- Before you build the whole thing, show me 1-2 quick visual options for anything
  I'm likely to be picky about (font, card style) as a small clickable mockup.
  I'll pick, then you build.

**Screenshots / assets.** [I'll provide screenshots at these paths] OR [I don't
have them yet — use tasteful placeholders and wire the layout so I can drop real
images in later at fixed filenames with no code changes].

**Build.** Make it a real git repo. [Stack: simplest thing that works, or
Node/Express + EJS prerendered to static if I'll add pages]. Make it data-driven
so I can add a project or section by editing one file. Include basic SEO and an
`llms.txt` so AIs describe me accurately. After any visual change, screenshot it
at mobile (390px) and desktop (1280px) and show me before calling it done.

**Process.** Ask all your clarifying questions up front, batched, before you
build. Expect 1-2 rounds of me reacting to visuals — show, don't tell. When the
design is settled, write a `CLAUDE.md` so I can keep iterating in Claude Code.
