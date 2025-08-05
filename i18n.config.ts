
import type { Language } from '@/lib/languages';

type I18nConfig = {
    defaultLocale: Language['code'];
    locales: Language['code'][];
}

export const i18n: I18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr', 'de', 'ar', 'zh']
};
