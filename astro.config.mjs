// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://aiction.app',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'rewrite',
    },
    fallback: {
      zh: 'en',
    },
  },
});
