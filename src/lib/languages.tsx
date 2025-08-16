import React from 'react';

export type Language = {
  code: 'en' | 'es' | 'fr' | 'de' | 'ar' | 'zh'; 
  name: string;
  countryCode: string;
};

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', countryCode: 'GB' },
  { code: 'es', name: 'Español', countryCode: 'ES' },
  { code: 'fr', name: 'Français', countryCode: 'FR' },
  { code: 'de', name: 'Deutsch', countryCode: 'DE' },
  { code: 'ar', name: 'العربية', countryCode: 'SA' },
  { code: 'zh', name: '中文', countryCode: 'CN' },
];
