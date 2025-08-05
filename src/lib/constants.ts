
// This file contains constants used throughout the application.
import type { Language } from '@/lib/languages';

// Company Information
export const COMPANY_NAME = "RS Impex";
export const BRAND_NAME = "RSI Chicory";
export const COMPANY_ESTABLISHED = 2025;
export const COMPANY_PHONE = "+91 9810550456";
export const COMPANY_EMAIL = "rsichicory@gmail.com";
export const COMPANY_ADDRESS = "X-19, UPSIDC-IA, GT Rd, Etah, Uttar Pradesh 207001, India";
export const WHATSAPP_NUMBER = "919810550456"; // Use number without '+' or spaces for the link

// Navigation Links
export const getNavLinks = (t: any) => [
  { href: "/", label: t.home },
  { href: "/products", label: t.products },
  { href: "/about", label: t.about },
  { href: "/blog", label: t.blog },
  { href: "/contact", label: t.contact },
];

// Social Media Links
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};

// Footer Links
export const FOOTER_LINKS_PRODUCTS = (lang: Language['code']) => [
    { href: `/${lang}/products/roasted-chicory-cubes-dark-roast`, label: "Roasted Chicory Cubes" },
    { href: `/${lang}/products/dried-chicory-cubes`, label: "Dried Chicory Cubes" },
    { href: `/${lang}/products/liquid-chicory-extract`, label: "Liquid Chicory Extract" },
    { href: `/${lang}/products/roasted-chicory-powder`, label: "Roasted Chicory Powder" },
];

export const FOOTER_LINKS_COMPANY = (lang: Language['code'], t: any) => [
    { href: `/${lang}/about`, label: t.aboutUs },
    { href: `/${lang}/contact`, label: t.contactUs },
    { href: `/${lang}/blog`, label: t.blog },
    { href: `/${lang}/sitemap`, label: t.sitemap },
    { href: `/${lang}/privacy-policy`, label: t.privacyPolicy },
];
