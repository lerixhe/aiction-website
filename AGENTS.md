# AGENTS.md - AIction Website

## Project Summary
Official website for the AIction Chrome extension, built with Astro. Supports English and Chinese (i18n via subdirectory routing). Deployed to GitHub Pages at aiction.app.

## Related Project
- **Main project**: AIction Chrome extension
- **Local path**: `../aiction/` (adjust to your local path)
- **Repository**: github.com/lerixhe/aiction
- **Shared resources**: `../aiction/docs/images/` (screenshots, demo GIF)
- **Feature descriptions**: `../aiction/README.md` and `README.zh-CN.md`
- **Architecture docs**: `../aiction/docs/WIKI.md`

When updating website content, reference the main project's README for accurate feature descriptions and screenshots.

## Commands
- `npm run dev`: Start Astro dev server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally

## Tech Stack
- Astro 6.x (static site generator)
- TypeScript (strict mode)
- i18n: Subdirectory routing (`/en/`, `/zh/`)
- Deployment: GitHub Pages + custom domain (aiction.app)

## Project Structure
```
src/
├── i18n/           # Translation dictionaries and utilities
│   ├── ui.ts       # UI string translations (en + zh)
│   └── utils.ts    # getLangFromUrl(), useTranslations()
├── components/     # Reusable Astro components
├── layouts/        # Base layout with meta tags
└── pages/
    ├── index.astro # Redirect to /en/
    ├── en/         # English pages
    └── zh/         # Chinese pages
```

## i18n Pattern
- Translation dictionary in `src/i18n/ui.ts`
- Use `useTranslations(lang)` hook in components
- Use `getLangFromUrl(Astro.url)` to get current language
- All UI strings should be added to both `en` and `zh` dictionaries

## Deployment
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Custom domain: `public/CNAME` → aiction.app
- Source: GitHub Actions (not branch-based)

## Content Guidelines
- Keep feature descriptions in sync with the main project
- Use screenshots from `../aiction/docs/images/` when possible
- Copy new screenshots to `public/images/` before referencing them
