# Johnson Emmanuel — React Portfolio

A React + Vite portfolio with reusable section components, project data, themed toolkit logos, subtle button animations, and HIMS screenshots.

## Requirements

Node.js 20.19+ or 22.12+ and npm.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build and preview

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` folder to a static host.

## Customize

- `src/projects.js`: project titles, descriptions, technologies, repository links.
- `src/components/`: Header, Hero, Toolkit, Projects, About, Contact, Footer.
- `src/styles.css`: colors, layout, responsiveness, button animations, reduced-motion support.
- `public/assets/`: themed SVG toolkit logos and project screenshots.
- `index.html`: page title and description.

The contact button opens the visitor's email application. It does not require a server.

## Asset sources

Toolkit logos adapted from [Devicon](https://github.com/devicons/devicon).
HIMS screenshots from [Johnson1425-ux/hims](https://github.com/Johnson1425-ux/hims/tree/HEAD/docs/screenshots).

## Accessibility and sharing

Navigation remains available on mobile. Links have visible keyboard focus and comfortable touch targets. Button motion respects reduced-motion preferences. The contact section offers an email link plus clipboard copying with an announced status. The page includes a favicon, social preview image, and a JavaScript-disabled fallback.

HIMS screenshots are stored as lossless WebP files to reduce download size without losing image detail.
