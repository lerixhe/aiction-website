import { ui, defaultLang, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalePath(lang: Lang, path: string = ''): string {
  const base = lang === defaultLang ? `/${lang}` : `/${lang}`;
  return path ? `${base}/${path}` : base;
}
