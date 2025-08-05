
// This page is a temporary redirect to the default locale.
// The actual homepage is in src/app/[lang]/page.tsx.

import { redirect } from 'next/navigation';
import { i18n } from '../../i18n.config';

export default function Home() {
  redirect(i18n.defaultLocale);
}
