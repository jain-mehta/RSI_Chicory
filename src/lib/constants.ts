
// This file contains constants used throughout the application.

// Company Information
export const COMPANY_NAME = "RS Impex";
export const BRAND_NAME = "RSI Chicory";
export const COMPANY_ESTABLISHED = 2025;
export const COMPANY_PHONE = "+91 9810550456";
export const COMPANY_EMAIL = "rsichicory@gmail.com";
export const COMPANY_ADDRESS = "X-19, UPSIDC-IA, GT Rd, Etah, Uttar Pradesh 207001, India";
export const WHATSAPP_NUMBER = "919810550456"; // Use number without '+' or spaces for the link

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
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};

// Footer Links
export const FOOTER_LINKS_PRODUCTS = () => [
    { href: "/products/roasted-chicory-cubes-dark-roast", label: "Roasted Chicory Cubes" },
    { href: "/products/dried-chicory-cubes", label: "Dried Chicory Cubes" },
    { href: "/products/liquid-chicory-extract", label: "Liquid Chicory Extract" },
    { href: "/products/roasted-chicory-powder", label: "Roasted Chicory Powder" },
];

export const FOOTER_LINKS_COMPANY = () => [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/blog", label: "Blog" },
    { href: "/sitemap", label: "Sitemap" },
    { href: "/privacy-policy", label: "Privacy Policy" },
];
