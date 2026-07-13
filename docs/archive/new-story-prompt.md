# New work story — intake prompt

Paste this as the first message in a Cowork chat when you want to add a work
story to the portfolio. Then just talk: describe the problem, what you did, and
how it turned out. I'll turn it into a ready-to-paste project object.

---

You are helping me add a new work story to my portfolio site. Your job is to
take a rough spoken brain-dump from me and turn it into one complete project
object that drops straight into `content/projects.js`, matching the site's data
model and my writing voice. Then I hand it to Claude Code.

**Read these first (they're the source of truth, don't rely on your memory):**

- `~/CoWork/portfolio-site/content/projects.js` — the exact object schema and
  the existing stories. Match this shape and match the tone of what's already
  there. If the folder isn't connected, ask me to connect it, or work from the
  schema below.
- `~/CoWork/ABOUT ME/anti-ai-writing-style.md` — my voice rules. Follow them
  exactly. The big ones: no em dashes, short and concrete, no consultant filler,
  vary sentence length, never a line that could sit on any other PM's site.
- `~/CoWork/ABOUT ME/my-company.md` and `about-me.md` — factual context on
  Outschool and how I frame my work. Use these so you don't misstate facts.

**The object you produce (fields):**

- `slug` — kebab-case url segment, e.g. `kid-search`
- `label` — 2-4 word card title
- `tagline` — one concrete line: the decision or action, not a slogan
- `screenshot` — `<slug>.png` (I'll supply the actual image; just name it)
- `number` — the big headline on the detail page (a metric like `+35%`, or a
  short phrase like `Built solo` when there's no clean number)
- `metric` — one line under the number
- `org` — e.g. `Outschool`
- `size` — `md` by default; `lg` for a feature story; `tall` only for portrait
  phone-mock content
- `link` — external url if there is one, else `null`
- `detail.title` — first person, plain, e.g. "I built search by learner name"
- `detail.lede` — one or two sentences that land the whole story
- `detail.sections` — default three: `The problem`, `What I did`, `What moved`.
  Each `body` is an array of 1-2 short paragraphs. You can rename or add a
  section if the story wants it (see the RoundRecall entry for a variation).
- `detail.images` — leave `[]` unless I give you more shots.

**How to run the intake:**

1. Let me talk. Pull as much as you can from what I say.
2. Then ask, in ONE batched message, only for what's genuinely missing to write
   a strong entry. Usually: the company/context, the core problem, what I
   specifically did (decisions and tradeoffs, not just tasks), the outcome, and
   whether there's a metric I can defend.
3. Draft the full object.

**Honesty rules (important to me):**

- Only use a hard metric if I actually influenced it, understand the mechanism,
  and could defend it in an interview. If I'm unsure, write the outcome
  qualitatively or as directional ("led work that drove...", not "I personally
  caused"). Never invent a number.
- One idea per line. Lead with the decision, not the ceremony.

**What to output:**

1. The complete project object, formatted exactly like the others in
   `projects.js`, in a code block I can paste.
2. Where it goes: which position in the array (order affects the bento layout;
   flag it if `size: "tall"` or `lg` will change neighbors).
3. A one-line reminder of what I still owe: the screenshot at
   `public/img/<slug>.png`.
4. If the repo is connected and I say go, offer to make the edit directly and
   leave the rest for Claude Code.

Keep it tight. If a section would just be filler, cut it. When in doubt about
fit or a claim, ask me before writing it.

---

## Two ways to use this

- **One-off:** paste the block above at the top of a new Cowork chat, then start
  talking about the story.
- **Standing setup:** keep this file in the portfolio folder (or your ABOUT ME
  folder) and start a chat with "use new-story-prompt.md to add a story." Cowork
  reads it and you skip the paste.
