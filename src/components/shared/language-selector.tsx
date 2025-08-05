
"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';
import ReactCountryFlag from "react-country-flag";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES, type Language } from "@/lib/languages";
import { i18n } from "@/i18n.config";

export function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(() => {
    const currentLangCode = pathname.split('/')[1]?.toUpperCase() as Language['code'] || i18n.defaultLocale;
    return LANGUAGES.find(lang => lang.code === currentLangCode) || LANGUAGES[0];
  });
  
  useEffect(() => {
    const currentLangCode = pathname.split('/')[1]?.toUpperCase() as Language['code'] || i18n.defaultLocale;
    const currentLanguage = LANGUAGES.find(lang => lang.code === currentLangCode);
    if(currentLanguage) {
      setSelectedLanguage(currentLanguage);
    }
  }, [pathname]);

  const handleLanguageChange = (lang: Language) => {
    setSelectedLanguage(lang);
    const newPathname = pathname.replace(`/${pathname.split('/')[1]}`, `/${lang.code.toLowerCase()}`);
    router.push(newPathname);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-2">
           <ReactCountryFlag
              countryCode={selectedLanguage.countryCode}
              svg
              className="mr-2 h-5 w-5"
              title={selectedLanguage.name}
            />
          {selectedLanguage.code}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem key={lang.code} onSelect={() => handleLanguageChange(lang)}>
             <ReactCountryFlag
                countryCode={lang.countryCode}
                svg
                className="mr-2 h-5 w-5"
                title={lang.name}
              />
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSelector;
