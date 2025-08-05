
import 'server-only'
import type { Language } from '@/lib/languages'

const dictionaries = {
  en: () => import('@/messages/en.json').then(module => module.default),
  es: () => import('@/messages/es.json').then(module => module.default),
  // Add other languages here
  // For now, we'll use English as a fallback for missing languages
  fr: () => import('@/messages/en.json').then(module => module.default),
  de: () => import('@/messages/en.json').then(module => module.default),
  ar: () => import('@/messages/en.json').then(module => module.default),
  zh: () => import('@/messages/en.json').then(module => module.default),
}

export const getDictionary = async (locale: Language['code']) => {
    const loader = dictionaries[locale] || dictionaries.en;
    return loader();
}
