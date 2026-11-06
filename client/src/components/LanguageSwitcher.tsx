import { Check, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { copy, language, languageHref, languages } from "@/lib/locale";

export default function LanguageSwitcher() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={copy("Choose language")}
          className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-[#b84300] px-2.5 text-[#a13a08] hover:bg-cream-alt focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Globe size={17} aria-hidden="true" />
          <ChevronDown size={14} aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="min-w-36">
        {languages.map((option) => (
          <DropdownMenuItem key={option.tag} asChild>
            <a
              href={languageHref(option)}
              hrefLang={option.tag}
              lang={option.tag}
              aria-current={option === language ? "true" : undefined}
              className="flex min-h-10 justify-between px-3"
            >
              {option.label}
              {option === language && <Check size={16} aria-hidden="true" />}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
