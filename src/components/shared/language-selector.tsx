// This component provides the UI for language selection.
// It uses local state to manage the currently selected language.

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES, type Language } from "@/lib/languages.tsx";

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-2">
           <selectedLanguage.flag className="mr-2 h-5 w-5" />
          {selectedLanguage.code}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem key={lang.code} onSelect={() => setSelectedLanguage(lang)}>
            <lang.flag className="mr-2 h-5 w-5" />
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSelector;
