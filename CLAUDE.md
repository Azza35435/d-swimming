# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the site

This is a plain static site — no build step, no package manager. Open directly in a browser:

```bash
open index.html
```

To preview with a live-reload server (useful when editing CSS/JS):

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Git & GitHub workflow

The `gh` CLI is installed at `~/.local/bin/gh`. Always use it for GitHub operations:

```bash
/Users/aaron/.local/bin/gh <command>
```

**Commit and push after every meaningful change** — do not batch up multiple features into a single commit. The goal is to never lose work. Follow this sequence:

```bash
git add <specific files>   # never use git add -A or git add .
git commit -m "concise description of what changed and why"
git push
```

Commit message rules:
- Use the imperative mood ("Add hero section" not "Added hero section")
- Lead with the area changed when helpful ("styles: tighten mobile nav padding")
- Keep the subject line under 72 characters
- Do not include Claude's co-author trailer unless the user asks

Commit cadence: after each logical unit of work — a new section, a style change, a bug fix, a translation update. When in doubt, commit sooner rather than later.

Remote: `https://github.com/Azza35435/d-swimming` (branch `main`).

## Architecture

Three files, no framework:

| File | Role |
|---|---|
| `index.html` | Structure and content. Every piece of user-facing text carries a `data-key="..."` attribute. |
| `styles.css` | All styling. Design tokens live in `:root` CSS custom properties at the top of the file. |
| `script.js` | Runtime behaviour: i18n engine, navbar scroll, hamburger menu, form submit, scroll animations. |

### i18n system (`script.js`)

The entire bilingual feature is self-contained in `script.js`:

- `translations` — a plain object with `en` and `zh` keys, each containing every string keyed by the same `data-key` names used in the HTML.
- `applyLanguage(lang)` — walks all `[data-key]` elements and sets `innerHTML` (or `placeholder` for form inputs). Also toggles `body.lang-zh` to switch the font stack to `Noto Sans SC`.
- `localStorage` key `dswim_lang` persists the user's choice across page loads.
- `data-placeholder-key` is a second attribute used only on `<textarea>` where both a label and a placeholder need separate translation keys.

**To add a new translated string:** add the key + value to both `translations.en` and `translations.zh` in `script.js`, then add `data-key="your_key"` to the relevant element in `index.html`.

### CSS design tokens

All colours, radii, shadows, and the transition duration are CSS custom properties in `:root` (`styles.css:4–26`). Edit there first before touching individual rules.

Font stack: `Inter` (Latin) with `Noto Sans SC` promoted to first position via the `body.lang-zh` class when Chinese is active.

Responsive breakpoints: `1024px` (tablet), `900px` (two-column grids), `768px` (mobile — hamburger appears, single-column layouts), `480px` (small phones).

### Contact form

The form (`#contactForm`) is purely client-side. On submit it shows `#formSuccess` for 6 seconds and clears the fields. There is no backend — replace the `submit` handler in `script.js` with a real API call (e.g. Formspree, EmailJS, or a custom endpoint) when ready.
