import { NAV_LINKS, FOOTER_LINKS_PRODUCTS } from '@/lib/constants';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap | RSI Chicory',
  description: 'Sitemap for the RSI Chicory website, providing links to all our main pages and products.',
};

export default function SitemapPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Sitemap</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Find all pages on our website below.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2">
        <div>
          <h2 className="mb-4 border-b pb-2 font-headline text-2xl font-semibold">Main Pages</h2>
          <ul className="space-y-2">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-primary hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
             <li>
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 border-b pb-2 font-headline text-2xl font-semibold">Our Products</h2>
          <ul className="space-y-2">
            {FOOTER_LINKS_PRODUCTS.map(link => (
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
