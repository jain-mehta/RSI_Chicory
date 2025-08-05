// This component defines the global footer for the website.
// It includes navigation links, social media icons, and company information,
// ensuring a consistent and professional end to every page.

import Link from 'next/link';
import { Twitter, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import Logo from './logo';
import {
  BRAND_NAME,
  FOOTER_LINKS_COMPANY,
  FOOTER_LINKS_PRODUCTS,
  SOCIAL_LINKS,
} from '@/lib/constants';
import { Separator } from '../ui/separator';

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
    <Icon className="h-6 w-6" />
  </Link>
);

const Footer = () => {
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
              {FOOTER_LINKS_PRODUCTS.map((link) => (
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
              {FOOTER_LINKS_COMPANY.map((link) => (
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
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
