// This component provides the UI for language selection.
// Full i18n implementation would require a library like 'next-international' or 'react-i18next'.

"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          English
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          Español (coming soon)
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          Français (coming soon)
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          العربية (coming soon)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSelector;
