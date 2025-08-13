
import Link from 'next/link';
import { Linkedin, Youtube, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './logo';
import {
  BRAND_NAME,
  SOCIAL_LINKS,
  FOOTER_LINKS_PRODUCTS,
  FOOTER_LINKS_COMPANY,
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_PHONE_2,
  COMPANY_NAME
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
  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground transition-colors hover:text-primary-foreground/80">
    <Icon />
  </Link>
);

const Footer = () => {
  const productLinks = FOOTER_LINKS_PRODUCTS();
  const companyLinks = FOOTER_LINKS_COMPANY();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-sm text-primary-foreground/90">
                {COMPANY_NAME} - Premium chicory manufacturer and supplier. Established 2025, serving global B2B markets with quality chicory products from contract farming to export.
            </p>
            <div className='space-y-2 text-sm text-primary-foreground/90'>
                <div className='flex items-start gap-2'>
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{COMPANY_ADDRESS}</span>
                </div>
                 <div className='flex items-start gap-2'>
                    <Phone className="h-4 w-4 shrink-0 mt-0.5" />
                    <div>
                      <a href={`tel:${COMPANY_PHONE_2}`} className="hover:underline">{COMPANY_PHONE_2}</a>
                    </div>
                </div>
                 <div className='flex items-center gap-2'>
                    <Mail className="h-4 w-4 shrink-0" />
                    <a href={`mailto:${COMPANY_EMAIL}`} className="hover:underline">{COMPANY_EMAIL}</a>
                </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-headline font-semibold text-primary-foreground">Products</h4>
            <ul className="mt-4 space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-headline font-semibold text-primary-foreground">Company</h4>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-headline font-semibold text-primary-foreground">Connect With Us</h4>
            <div className="mt-4 flex space-x-4">
              <SocialIcon href={SOCIAL_LINKS.twitter} icon={XLogo} />
              <SocialIcon href={SOCIAL_LINKS.linkedin} icon={Linkedin} />
              <SocialIcon href={SOCIAL_LINKS.youtube} icon={Youtube} />
              <SocialIcon href={SOCIAL_LINKS.instagram} icon={Instagram} />
              <SocialIcon href={SOCIAL_LINKS.facebook} icon={Facebook} />
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Copyright */}
        <div className="text-center text-sm text-primary-foreground/90">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
