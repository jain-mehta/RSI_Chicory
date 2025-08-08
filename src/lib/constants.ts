
// This file contains constants used throughout the application.
import { products } from './products';

// Company Information
export const COMPANY_NAME = "RS Impex";
export const BRAND_NAME = "RSI Chicory";
export const COMPANY_ESTABLISHED = 2025;
export const COMPANY_PHONE_1 = "+91 7610045456";
export const COMPANY_PHONE_2 = "+91 9810550456";
export const COMPANY_EMAIL = "rsichicory@gmail.com";
export const COMPANY_ADDRESS = "X-19, UPSIDC-IA, GT Rd, Etah, Uttar Pradesh 207001, India";
export const WHATSAPP_NUMBER = "917610045456"; // Use number without '+' or spaces for the link

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Social Media Links
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com",
  linkedin: "https://www.linkedin.com/company/rsi-chicory",
  youtube: "https://www.youtube.com/@RSI_Chicory",
  instagram: "https://www.instagram.com/rsi_chicory/",
  facebook: "https://www.facebook.com/people/RSI-Chicory/61579293806067/",
};

// Footer Links
export const FOOTER_LINKS_PRODUCTS = () => products.map(product => ({
    href: `/products/${product.slug}`,
    label: product.name,
}));


export const FOOTER_LINKS_COMPANY = () => [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/blog", label: "Blog" },
    { href: "/sitemap", label: "Sitemap" },
    { href: "/privacy-policy", label: "Privacy Policy" },
];
