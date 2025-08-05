
import { NAV_LINKS, FOOTER_LINKS_PRODUCTS } from '@/lib/constants';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import type { Language } from '@/lib/languages';

export const metadata: Metadata = {
  title: 'Sitemap | RSI Chicory',
  description: 'Sitemap for the RSI Chicory website, providing links to all our main pages and products.',
};

export default async function SitemapPage({ params: { lang } }: { params: { lang: Language['code'] } }) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.SitemapPage;
  const navLinks = NAV_LINKS(dictionary.Header);
  const productLinks = FOOTER_LINKS_PRODUCTS(lang);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2">
        <div>
          <h2 className="mb-4 border-b pb-2 font-headline text-2xl font-semibold">{t.mainPages}</h2>
          <ul className="space-y-2">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={`/${lang}${link.href}`} className="text-primary hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
             <li>
                <Link href={`/${lang}/privacy-policy`} className="text-primary hover:underline">
                  {dictionary.Footer.privacyPolicy}
                </Link>
              </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 border-b pb-2 font-headline text-2xl font-semibold">{t.ourProducts}</h2>
          <ul className="space-y-2">
            {productLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-primary hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
