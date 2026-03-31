import { pt } from './pt'
import { en } from './en'

export type Language = 'pt' | 'en'

export const translations = { pt, en }

export const useTranslations = (lang: Language = 'pt') => {
  return translations[lang] || translations.pt
}

export const getTranslation = (lang: Language = 'pt') => {
  return translations[lang] || translations.pt
}
