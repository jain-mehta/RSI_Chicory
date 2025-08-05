// This file contains the language data for the language selector.
import React from 'react';

export type Language = {
  code: string; // ISO 639-1 language code
  name: string;
  countryCode: string; // ISO 3166-1 alpha-2 country code
};

export const LANGUAGES: Language[] = [
  { code: 'EN', name: 'English', countryCode: 'GB' },
  { code: 'ES', name: 'Español', countryCode: 'ES' },
  { code: 'FR', name: 'Français', countryCode: 'FR' },
  { code: 'DE', name: 'Deutsch', countryCode: 'DE' },
  { code: 'AR', name: 'العربية', countryCode: 'SA' },
  { code: 'ZH', name: '中文', countryCode: 'CN' },
];
