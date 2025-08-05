
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

import { getNavLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Logo from './logo';
import LanguageSelector from './language-selector';
import { getDictionary } from '@/lib/dictionaries';
import type { Language } from '@/lib/languages';


const Header = ({ lang }: { lang: Language['code'] }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dictionary, setDictionary] = useState<any>(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dict = await getDictionary(lang);
      setDictionary(dict);
    };
    fetchDictionary();
  }, [lang]);


  if (!dictionary) {
    return null; // or a loading skeleton
  }
  
  const NAV_LINKS = getNavLinks(dictionary.Header);
  const t = dictionary.Header;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={`/${lang}${link.href}`}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === `/${lang}${link.href}` ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <LanguageSelector />
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={`/${lang}/contact`}>{t.contactSales}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
            <LanguageSelector />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={`/${lang}${link.href}`}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                  pathname === `/${lang}${link.href}` ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2" onClick={() => setIsMenuOpen(false)}>
              <Link href={`/${lang}/contact`}>{t.contactSales}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
