# Steal-this feature brief

Goal: an "easy button" so a visitor who likes this site can spin up their own
version fast. The portfolio itself is a product; this is its call to action.

## What to build

- A section or route (`/steal`), linked from the `built-this-site` detail page
  and, if it fits, the floating nav pill (FAB).
- Contents:
  - Two lines on why this exists (in Matt's voice, see rules below).
  - The actual prompt(s) a person pastes into Cowork or Claude Code to generate
    their own version. The reusable intake flow in `new-story-prompt.md` is the
    core of this, so surface it here.
  - A download button.

## The download

Serve a zipped starter as a static asset from `/public` (an Express route or a
plain static file). Two options, weigh or ship both:

- **Repo starter (higher value):** this codebase stripped to placeholder content
  and placeholder screenshots, with a short README pointing at `site.config.js`
  (identity + copy) and `content/projects.js` (work items). This is the "shell"
  someone runs and edits.
- **`.skill` bundle (lighter):** wrap the `new-story-prompt.md` intake as an
  installable Cowork skill so "add a story" works out of the box.

## Copy rules

Keep it in Matt's voice: no em dashes, no "unlock / leverage / robust," short and
concrete. Frame it as "I directed an AI to build this, here's how you do the
same," not "I hand-built a framework." Honesty matters more than swagger.

## Wire-up after build

- Set `built-this-site` object `link` to the `/steal` route (or the repo URL).
- Add the steal entry to the FAB / nav if that reads well.
