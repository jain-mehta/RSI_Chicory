
// This file contains the language data for the language selector.
import React from 'react';

export type Language = {
  code: 'en' | 'es' | 'fr' | 'de' | 'ar' | 'zh'; // ISO 639-1 language code
  name: string;
  countryCode: string; // ISO 3166-1 alpha-2 country code
};

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', countryCode: 'GB' },
  { code: 'es', name: 'Español', countryCode: 'ES' },
  { code: 'fr', name: 'Français', countryCode: 'FR' },
  { code: 'de', name: 'Deutsch', countryCode: 'DE' },
  { code: 'ar', name: 'العربية', countryCode: 'SA' },
  { code: 'zh', name: '中文', countryCode: 'CN' },
];
