import { useLocation } from "wouter";
import { Globe } from "lucide-react";

/**
 * LanguageSwitcher Component
 * Allows users to toggle between English and French versions of the site
 * Design: Warm Civic Modernism
 * - Uses NDP orange for active state
 * - Smooth transitions and hover effects
 */

export default function LanguageSwitcher() {
  const [location, navigate] = useLocation();

  // Determine current language based on route
  const isFrench = location.includes("-fr");
  const currentLang = isFrench ? "FR" : "EN";

  // Get the corresponding route for the other language
  const getOtherLanguageRoute = () => {
    if (location === "/") {
      // Home page - no French version of home, but we could add one
      return isFrench ? "/" : "/";
    } else if (location === "/autobiography") {
      return "/autobiography-fr";
    } else if (location === "/autobiography-fr") {
      return "/autobiography";
    }
    return location;
  };

  const handleLanguageToggle = () => {
    const otherRoute = getOtherLanguageRoute();
    navigate(otherRoute);
  };

  return (
    <button
      onClick={handleLanguageToggle}
      style={{
        display: "flex",
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
    </button>
  );
}
