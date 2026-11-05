import { isFrench, otherLanguageHref } from "@/lib/locale";
import { Globe } from "lucide-react";

/**
 * LanguageSwitcher Component
 * Allows users to toggle between English and French versions of the site
 * Design: Warm Civic Modernism
 * - Uses NDP orange for active state
 * - Smooth transitions and hover effects
 */

export default function LanguageSwitcher() {
  return (
    <a
      href={otherLanguageHref()}
      lang={isFrench ? "en-CA" : "fr-CA"}
      hrefLang={isFrench ? "en-CA" : "fr-CA"}
      style={{
        display: "flex",
        textDecoration: "none",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 1rem",
        backgroundColor: "transparent",
        border: `2px solid var(--color-ndp-orange)`,
        borderRadius: "4px",
        color: "var(--color-ndp-orange)",
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 600,
        fontSize: "0.85rem",
        cursor: "pointer",
        transition: "all 0.2s ease-out",
        letterSpacing: "0.05em",
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.backgroundColor = "var(--color-ndp-orange)";
        target.style.color = "white";
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.backgroundColor = "transparent";
        target.style.color = "var(--color-ndp-orange)";
      }}
      title={isFrench ? "Switch to English" : "Passer au français"}
    >
      <Globe size={16} />
      <span>{isFrench ? "ENGLISH" : "FRANÇAIS"}</span>
    </a>
  );
}
