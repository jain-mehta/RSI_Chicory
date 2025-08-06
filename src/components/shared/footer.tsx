
import Link from 'next/link';
import { Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import Logo from './logo';
import {
  BRAND_NAME,
  SOCIAL_LINKS,
  FOOTER_LINKS_PRODUCTS,
  FOOTER_LINKS_COMPANY
} from '@/lib/constants';
import { Separator } from '../ui/separator';

const XLogo = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
        <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </g>
    </svg>
);


const SocialIcon = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
    <Icon />
  </Link>
);

const Footer = () => {
  const productLinks = FOOTER_LINKS_PRODUCTS();
  const companyLinks = FOOTER_LINKS_COMPANY();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted partner for premium B2B chicory solutions.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-headline font-semibold text-foreground">Products</h4>
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
            <h4 className="font-headline font-semibold text-foreground">Company</h4>
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
            <h4 className="font-headline font-semibold text-foreground">Connect With Us</h4>
            <div className="mt-4 flex space-x-4">
              <SocialIcon href={SOCIAL_LINKS.twitter} icon={XLogo} />
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
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
