# Any Leak Plumbing Inc - Website

A fast, single-page marketing site for a local plumbing company, built as a
reusable template for home-service businesses (plumbing, HVAC, electrical, etc.).

**Live demo:** _add your GitHub Pages URL here after deploying_

## Highlights

- Single-page layout: hero, trust strip, services, before/after sliders,
  reviews, about, contact form, footer
- Responsive down to mobile, with a full-bleed hero banner
- No build step and no dependencies: plain HTML, CSS, and vanilla JavaScript
- Fonts via Google Fonts, icons via Font Awesome (both CDN-loaded)
- All imagery stored locally in `images/` so the site works offline

## Structure

```
any-leak-website/
  index.html        # all page markup
  css/style.css     # all styling (design tokens at the top under :root)
  js/main.js        # nav, mobile menu, before/after sliders, form handler
  images/           # logo, hero, and service photos
```

## Run locally

Any static file server works. With Python installed:

```bash
python -m http.server 8000
```

Then open http://localhost:8000

## Deploy to GitHub Pages

Once the repo is on GitHub, enable Pages from the `main` branch (root folder).
The site is served as-is; there is no build step.

## Reuse as a template

Common edits for a new client live in a few predictable spots:

- **Brand colors:** the `:root` variables at the top of `css/style.css`
- **Business name, phone, license, email:** search `index.html`
- **Services and photos:** the `#services` section in `index.html` plus the
  matching files in `images/`
- **Hero image:** replace `images/hero-wide.jpg` (1920x900 works best)
