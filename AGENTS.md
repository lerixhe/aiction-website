# AGENTS.md

## What This Is
Static landing page for the AIction Chrome extension. Astro 6 + TypeScript strict. Bilingual (EN/ZH). Deployed to `aiction.app` via GitHub Pages.

## Commands
- `npm run dev` — dev server at localhost:4321
- `npm run build` — static build to `dist/`
- `npm run preview` — preview production build locally
- No tests, no lint, no typecheck configured

## i18n — Read Before Editing Any Page or Component
- Routes: `/` (default), `/zh/` (fallback rewrites to EN if missing)
- `prefixDefaultLocale: false` — only zh has prefix
- `trailingSlash: 'never'` — no trailing slashes
- Translation dictionary: `src/i18n/ui.ts` — every UI string lives here
- Use `getLangFromUrl(Astro.url)` + `useTranslations(lang)` in components
- Adding a new page: create `src/pages/<path>.astro` and `src/pages/zh/<path>.astro`, add translation keys to `ui.ts`

## Related Project (Chrome Extension)
- Repo: `github.com/lerixhe/aiction`
- Expected local path: `../aiction/`
- Feature copy source: `../aiction/README.md`, `../aiction/README.zh-CN.md`
- Screenshots: `../aiction/docs/images/` → copy to `public/images/` before use
- When updating feature descriptions, always cross-reference the main project README

## Deployment
- GitHub Actions: `.github/workflows/deploy.yml`
- Uses explicit Node 22 setup (not `withastro/action` — it failed on first deploy)
- Custom domain via `public/CNAME` → `aiction.app`
- Repo Settings > Pages > Source must be "GitHub Actions"
- Push to `main` triggers deploy automatically

## Project Structure
```
src/i18n/ui.ts          # Translation dictionary (en + zh)
src/i18n/utils.ts       # getLangFromUrl(), useTranslations()
src/layouts/Base.astro  # HTML shell, meta tags, fonts, global styles
src/components/         # Header, Hero, Features, Demo, QuickStart, Footer, LanguagePicker
src/pages/index.astro   # Homepage (English)
src/pages/              # English pages (root level, no prefix)
src/pages/zh/           # Chinese pages
public/images/          # Screenshots from main project
public/CNAME            # Custom domain
```
