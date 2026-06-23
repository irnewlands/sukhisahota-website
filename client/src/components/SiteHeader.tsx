import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Election 2025", href: "/election-2025" },
  { label: "Renewal", href: "/renewal-report" },
  { label: "Issues", href: "/issues" },
  { label: "Get Involved", href: "/get-involved" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="group flex items-center gap-3 no-underline">
          <img src="/Forthepeople_-original.png" alt="For the People" className="h-9 w-auto" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-charcoal group-hover:text-orange transition-colors leading-tight">
              Sukhi Sahota
            </span>
            <span className="text-xs font-semibold tracking-widest text-[#b84300] uppercase">
              Former Federal Candidate
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link px-3 py-2 text-sm font-medium rounded text-charcoal hover:text-orange">
              {l.label}
            </a>
          ))}
          <div className="ml-2"><LanguageSwitcher /></div>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-charcoal">
          ☰
        </button>
      </div>

      {open && (
        <div className="bg-cream border-t border-border md:hidden">
          <div className="container py-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-charcoal border-b border-border">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
