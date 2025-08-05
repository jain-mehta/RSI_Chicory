
import Link from 'next/link';
import { Twitter, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import Logo from './logo';
import {
  BRAND_NAME,
  SOCIAL_LINKS,
  FOOTER_LINKS_PRODUCTS,
  FOOTER_LINKS_COMPANY
} from '@/lib/constants';
import { Separator } from '../ui/separator';
import { getDictionary } from '@/lib/dictionaries';
import type { Language } from '@/lib/languages';

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
    <Icon className="h-6 w-6" />
  </Link>
);

const Footer = async ({ lang }: { lang: Language['code'] }) => {
  const dictionary = await getDictionary(lang);
  const t = dictionary.Footer;
  const productLinks = FOOTER_LINKS_PRODUCTS(lang);
  const companyLinks = FOOTER_LINKS_COMPANY(lang, t);

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              {t.tagline}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-headline font-semibold text-foreground">{t.products}</h4>
            <ul className="mt-4 space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-headline font-semibold text-foreground">{t.company}</h4>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-headline font-semibold text-foreground">{t.connectWithUs}</h4>
            <div className="mt-4 flex space-x-4">
              <SocialIcon href={SOCIAL_LINKS.twitter} icon={Twitter} />
              <SocialIcon href={SOCIAL_LINKS.linkedin} icon={Linkedin} />
              <SocialIcon href={SOCIAL_LINKS.youtube} icon={Youtube} />
              <SocialIcon href={SOCIAL_LINKS.instagram} icon={Instagram} />
              <SocialIcon href={SOCIAL_LINKS.facebook} icon={Facebook} />
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
