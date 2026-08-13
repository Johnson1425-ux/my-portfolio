# Portfolio

A production-ready personal portfolio for a software engineer — built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

All content lives in typed data files under `src/data/`, so the site can be updated without touching a component.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
npx tsc --noEmit # type-check
```

## Make it yours

Everything wrapped in `[square brackets]` is a placeholder. Cards and sections carrying sample content show a **“Sample content”** chip until you set `placeholder: false` on that entry, so nothing on the live site pretends to be real.

| What | Where |
| --- | --- |
| Name, role, tagline, email, location, canonical URL | `src/data/site.ts` |
| Social links (a `null` href renders a dimmed “not configured” chip instead of a broken link) | `src/data/site.ts` |
| About copy, “Now” panel, engineering principles | `src/data/about.ts` |
| Skill categories | `src/data/skills.ts` |
| Projects and case studies | `src/data/projects.ts` |
| Work history | `src/data/experience.ts` |

Start with `src/data/site.ts` — the name, e-mail and GitHub handle there flow into the nav, hero, footer, contact section, JSON-LD and the generated social image.

### Projects and case studies

A project with a `caseStudy` object automatically gets a page at `/projects/<slug>`, a sitemap entry and its own metadata. Projects with `featured: true` get the large alternating cards at the top of the section; the rest render in the two-column grid below.

Screenshots are optional: set `image: "/projects/my-app.png"` (file in `public/projects/`) and the card uses `next/image`. Without one it falls back to generated cover art keyed off the project's `hue`, so a card is never empty or broken.

### Résumé

Drop a PDF at `public/resume.pdf` and set `resume.enabled: true` in `src/data/site.ts` to show the hero button.

## Environment variables

See `.env.example`. All are optional:

- `NEXT_PUBLIC_SITE_URL` — canonical URL for metadata and the sitemap.
- `NEXT_PUBLIC_GITHUB_USERNAME` — account read by the open-source section.
- `GITHUB_TOKEN` — server-side only; raises the public API rate limit. No scopes needed.

The open-source section reads the public GitHub REST API at build time and revalidates hourly. If the API is unreachable or rate limited, the section degrades to a link to the profile rather than failing the page.

## Contact form

There is no mail backend, and the form does not pretend otherwise: it validates input client-side and opens a pre-filled draft in the visitor's own mail client. To send server-side instead, replace the `mailto:` handoff in `src/components/ui/contact-form.tsx` with a `fetch` to a route handler.

## Architecture

```
src/
  app/            routes, metadata, sitemap, robots, generated OG image
  components/
    layout/       navbar, footer, theme provider and toggle
    sections/     one file per page section
    projects/     project card, cover art, architecture diagram
    ui/           buttons, badges, reveal, section shell, contact form
  data/           all editable content
  lib/            GitHub client and small helpers
```

Design tokens (colour, radius, shadow, easing) are defined once in `src/app/globals.css` and exposed to Tailwind through `@theme`. Both themes are checked against WCAG AA contrast.

## Accessibility and motion

- Semantic landmarks, a skip link, ordered headings, and visible focus rings throughout.
- Audited with axe-core: zero violations on the home page (light and dark) and on case-study pages.
- Scroll reveals are CSS-driven behind a `.js` class set before first paint — with JavaScript disabled every section renders normally.
- `prefers-reduced-motion` disables transitions, smooth scrolling and entrance animations.

## Deploying

Any Node host works. On Vercel, import the repository and set `NEXT_PUBLIC_SITE_URL`; no other configuration is required.
