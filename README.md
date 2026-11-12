# Any Leak Plumbing Inc - Website

A fast, single-page marketing site for a local plumbing company, built as a
reusable template for home-service businesses (plumbing, HVAC, electrical, etc.).

**Live demo:** https://martisam.github.io/any-leak-website/

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

Pages is deployed by GitHub Actions (Settings > Pages > Source: GitHub Actions).
The site is served as-is; there is no build step. Merging to `main` publishes.

## Contribute / CI/CD

1. Branch off `main`: `content/<topic>`, `feat/<topic>`, or `fix/<topic>`
2. Preview locally: `npm install` then `npm run serve` (http://localhost:8000)
3. Run checks: `npm run lint` (HTML, CSS, JS, image budget)
4. Commit with a prefix (`content:`, `feat:`, `fix:`, `chore:`), push, open a PR
5. CI (`.github/workflows/ci.yml`) validates HTML/CSS/JS, images, and links, and
   uploads a `site-preview` artifact
6. Merge to `main`: `deploy.yml` reruns checks, publishes, and smoke-tests the live URL

Rollback: revert the merge commit on `main`; it redeploys automatically.

## Reuse as a template

Common edits for a new client live in a few predictable spots:

- **Brand colors:** the `:root` variables at the top of `css/style.css`
- **Business name, phone, license, email:** search `index.html`
- **Services and photos:** the `#services` section in `index.html` plus the
  matching files in `images/`
- **Hero image:** replace `images/hero-wide.jpg` (1920x900 works best)
