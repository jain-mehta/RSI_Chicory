
import 'server-only'
import type { Language } from '@/lib/languages'

const dictionaries = {
  EN: () => import('@/messages/en.json').then(module => module.default),
  ES: () => import('@/messages/es.json').then(module => module.default),
  // Add other languages here
  // For now, we'll use English as a fallback for missing languages
  FR: () => import('@/messages/en.json').then(module => module.default),
  DE: () => import('@/messages/en.json').then(module => module.default),
  AR: () => import('@/messages/en.json').then(module => module.default),
  ZH: () => import('@/messages/en.json').then(module => module.default),
}

export const getDictionary = async (locale: Language['code']) => {
    const loader = dictionaries[locale] || dictionaries.EN;
    return loader();
}
