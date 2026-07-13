# Build a personal portfolio with Claude — the prompt I wish I'd started with

I spent a few hours getting this right. Most of that time was me discovering
what I wanted by reacting to versions. This prompt front-loads the decisions
that actually cost me the loops, so you can skip most of them.

## Before you paste anything

1. **You need an About Me file.** This is the real unlock. A markdown file with
   who you are, what you've worked on (problems and outcomes, not a feature
   list), the roles/goals you're chasing, and how you want to sound. If you
   don't have one, the prompt below tells the model to interview you and write
   it first. Keep it. You'll reuse it for a resume, cover letters, all of it.
2. **Pick 1-3 reference sites you love** and note which *part* of each you want
   (one site's type, another's layout). You're stealing parts, not cloning.
3. **Decide how literal to be** and whether you have screenshots. Both are in
   the prompt as blanks to fill.

## The prompt (fill the brackets, paste into Claude)

> I want to build a personal portfolio site. Work with me like this:
>
> **Context first.** Read my About Me file (attached). If I hadn't given you
> one, you'd interview me first (10-15 questions on my work, goals, and voice)
> and save it as `about-me.md` before building anything. Treat every word of
> copy as a placeholder until the design is locked. Design first. Do not let my
> rough copy shape the layout.
>
> **The look (this is my taste, don't drift).**
> - Steal from these: [SITE 1] for [e.g. fonts + branding], [SITE 2] for [e.g.
>   card structure and layout]. Actually open them and read the real CSS, then
>   lift those specific parts closely, section by section. Be original only
>   where I haven't pointed at something.
> - How literal: [e.g. near-literal on structure, my own color and type].
> - Mobile-first. Overall structure: [e.g. everything is a card in a bento
>   grid, single column on mobile, two on desktop, a floating nav pill].
> - Before you build the whole thing, show me 1-2 quick visual options for
>   anything I'm likely to be picky about (font, card style) as a small
>   clickable mockup. I'll pick, then you build.
>
> **Screenshots / assets.** [I'll provide screenshots at these paths] OR [I
> don't have them yet — use tasteful placeholders and wire the layout so I can
> drop real images in later at fixed filenames with no code changes].
>
> **Build.** Make it a real git repo. [Stack: simplest thing that works, or
> Node/Express if I'll add pages]. Make it data-driven so I can add a project or
> section by editing one file. Include basic SEO and an `llms.txt` so AIs
> describe me accurately. After any visual change, screenshot it at mobile
> (390px) and desktop (1280px) and show me before calling it done.
>
> **Process.** Ask all your clarifying questions up front, batched, before you
> build. Expect 1-2 rounds of me reacting to visuals — show, don't tell. When
> the design is settled, write a `CLAUDE.md` so I can keep iterating in Claude
> Code.

## Why this works

Every bracket you fill is a loop you don't have to run live. The two that saved
me the most: naming the reference sites and how literally to copy them (that
alone skipped a full redesign), and saying "design first, copy is placeholder"
(so we didn't build around words I later threw out).

## Bonus: an anti-AI voice file

I also keep an `anti-ai-writing-style.md` — my banned words, no em dashes, the
patterns that scream "a model wrote this." Any copy the model drafts runs
through it. If you write for a living or a job search, make one. It's the
difference between copy that sounds like you and copy that sounds like everyone.
