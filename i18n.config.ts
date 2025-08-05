
import type { Language } from '@/lib/languages';

type I18nConfig = {
    defaultLocale: Language['code'];
    locales: Language['code'][];
}

export const i18n: I18nConfig = {
  defaultLocale: 'EN',
  locales: ['EN', 'ES', 'FR', 'DE', 'AR', 'ZH']
};
