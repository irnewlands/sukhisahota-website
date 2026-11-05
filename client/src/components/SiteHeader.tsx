import { copy, localizedHref } from "@/lib/locale";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const NAV_LINKS = [
  { label: copy("Home"), href: "/" },
  { label: copy("About"), href: "/about" },
  { label: copy("Election 2025"), href: "/election-2025" },
  { label: copy("BC Election 2026"), href: "/after-the-election" },
  { label: copy("Renewal"), href: "/renewal-report" },
  { label: copy("Issues"), href: "/issues" },
  { label: copy("Resources for Help"), href: "/resources-for-help" },
  { label: copy("Get Involved"), href: "/get-involved" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <a href={localizedHref("/")} className="group flex items-center gap-3 no-underline">
          <img src="/Forthepeople_-original.png" alt={copy("For the People")} className="h-9 w-auto" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-charcoal group-hover:text-orange transition-colors leading-tight">
              Sukhi Sahota
            </span>
            <span className="text-xs font-semibold tracking-widest text-[#b84300] uppercase">
              {copy("Former Federal Candidate")}
            </span>
          </div>
        </a>

        <nav className="hidden min-[1440px]:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={localizedHref(l.href)} className="nav-link px-3 py-2 text-sm font-medium rounded text-charcoal hover:text-orange">
              {l.label}
            </a>
          ))}
          <div className="ml-2"><LanguageSwitcher /></div>
        </nav>

        <button onClick={() => setOpen(!open)} aria-label={copy("Toggle menu")} aria-expanded={open} className="min-[1440px]:hidden p-2 text-charcoal">
          ☰
        </button>
      </div>

      {open && (
        <div className="bg-cream border-t border-border min-[1440px]:hidden">
          <div className="container py-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={localizedHref(l.href)} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-charcoal border-b border-border">
                {l.label}
              </a>
            ))}
            <div className="mt-4"><LanguageSwitcher /></div>
          </div>
        </div>
      )}
    </header>
  );
}

