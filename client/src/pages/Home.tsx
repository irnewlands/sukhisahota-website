/**
 * DESIGN PHILOSOPHY: Warm Civic Modernism
 * Sections: Nav → Hero → Welcome → About Me → Election 2025 → Our Work is Unfinished → What I Stand For → Join/Volunteer → Footer
 * Color: Cream bg, NDP orange accents, deep charcoal text, warm amber hover
 * Typography: Fraunces (display) + Outfit (body)
 * Layout: Asymmetric editorial, pull quotes, generous whitespace
 */

import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Instagram, Facebook, ExternalLink, Menu, X, ChevronRight, Heart } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import NewsletterSignup from "@/components/NewsletterSignup";

// ─── Asset URLs ──────────────────────────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663697652215/KTWnaZgXJ8mCfxSys5NDzn/hero-bg-texture-YxPgC4h7cW2xb2armcamkn.webp";
const VANCOUVER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663697652215/KTWnaZgXJ8mCfxSys5NDzn/vancouver-skyline-fw6WUe9bMtpg4A5dFpTnaw.webp";
const COMMUNITY = "https://d2xsxph8kpxj0f.cloudfront.net/310519663697652215/KTWnaZgXJ8mCfxSys5NDzn/community-abstract-ZYWFQ6wx3cbmzxRJCSQJFH.webp";
const CANDIDATE_PHOTO = "https://sukhisahota.ca/ndp-en/_assets/media/c95bbd1e799d9df9beab1ae666d484e4.jpg";

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Welcome", href: "#welcome" },
  { label: "About Me", href: "#about" },
  { label: "2025 Election", href: "#election" },
  { label: "Our Work", href: "#work" },
  { label: "What I Stand For", href: "#stand" },
  { label: "Get Involved", href: "#involved" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(251,247,240,0.97)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        {/* Logo */}
        <a href="#welcome" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.15rem", color: "var(--color-ndp-charcoal)" }}>
            Sukhi Sahota
          </span>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ndp-orange)" }}>
            Former Federal Candidate
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.82rem",
                fontWeight: active === l.href.slice(1) ? 600 : 400,
                color: active === l.href.slice(1) ? "var(--color-ndp-orange)" : "var(--color-ndp-charcoal)",
                padding: "0.4rem 0.75rem",
                borderRadius: "3px",
                textDecoration: "none",
                transition: "color 0.18s",
                position: "relative",
              }}
              className="nav-link"
            >
              {l.label}
            </a>
          ))}
          <div style={{ marginLeft: "0.5rem" }}>
            <LanguageSwitcher />
          </div>
          <a href="mailto:info@sukhisahota.ca" className="btn-campaign" style={{ marginLeft: "0.75rem", padding: "0.4rem 1rem", fontSize: "0.8rem" }}>
            <span>Contact</span>
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "var(--color-ndp-charcoal)", padding: "0.5rem" }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: "rgba(251,247,240,0.98)", borderTop: "1px solid var(--color-border)", padding: "1rem 1.5rem 1.5rem" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--color-ndp-charcoal)",
                padding: "0.65rem 0",
                borderBottom: "1px solid var(--color-border)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ padding: "1rem 0", borderBottom: "1px solid var(--color-border)" }}>
            <LanguageSwitcher />
          </div>
          <a
            href="mailto:info@sukhisahota.ca"
            style={{
              display: "block",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              color: "white",
              background: "var(--color-ndp-orange)",
              padding: "0.75rem 1rem",
              borderRadius: "4px",
              textDecoration: "none",
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  useReveal();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <Nav />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          marginTop: "64px",
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          overflow: "hidden",
        }}
        className="md:grid-cols-2 grid-cols-1"
      >
        {/* Left: Image */}
        <div
          style={{
            backgroundImage: `url('${CANDIDATE_PHOTO}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(251,247,240,0.1) 0%, rgba(251,247,240,0.3) 100%)" }} />
        </div>

        {/* Right: Content */}
        <div style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem" }}>
          <div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--color-ndp-orange)", textTransform: "uppercase" }}>
              NDP · Former Candidate
            </span>
            <h1
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "3.5rem",
                fontWeight: 700,
                lineHeight: 1.1,
                marginTop: "1rem",
                color: "var(--color-ndp-charcoal)",
              }}
            >
              Fighting for every Canadian
            </h1>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", marginTop: "1.5rem", lineHeight: 1.6, color: "var(--color-ndp-charcoal)" }}>
              My name is Sukhi Sahota. I ran as the NDP Candidate for Vancouver Granville and now I'm focused on grassroots organizing — because it's time for us to be truly organized from the ground up.
            </p>
          </div>

          {/* Speech bubble quote */}
          <div
            style={{
              background: "var(--color-ndp-orange)",
              color: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              position: "relative",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            "It's time for us to be truly organised from a grassroots level."
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#about"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "white",
                background: "var(--color-ndp-orange)",
                padding: "0.75rem 1.5rem",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "transform 0.18s, box-shadow 0.18s",
                display: "inline-block",
              }}
              className="btn-campaign"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 16px rgba(220, 84, 36, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Learn About Me
            </a>
            <a
              href="mailto:info@sukhisahota.ca"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--color-ndp-orange)",
                border: "2px solid var(--color-ndp-orange)",
                padding: "0.65rem 1.5rem",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "background 0.18s, color 0.18s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-ndp-orange)";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--color-ndp-orange)";
              }}
            >
              Ask a Question
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "1rem", paddingTop: "1rem" }}>
            <a href="http://www.linkedin.com/in/sukhisahota" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-ndp-orange)", textDecoration: "none" }} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/sukhi4thepeople/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-ndp-orange)", textDecoration: "none" }} aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/Sukhi4thepeople" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-ndp-orange)", textDecoration: "none" }} aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="mailto:info@sukhisahota.ca" style={{ color: "var(--color-ndp-orange)", textDecoration: "none" }} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Land acknowledgment */}
      <section style={{ background: "var(--muted)", padding: "2rem", textAlign: "center" }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>
          I acknowledge this was created on unceded traditional territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil-Waututh) Nations.
        </p>
      </section>

      {/* Welcome Section */}
      <section id="welcome" style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--color-ndp-orange)", textTransform: "uppercase" }}>
            01 / Welcome
          </span>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginTop: "1rem",
              marginBottom: "2rem",
              color: "var(--color-ndp-charcoal)",
            }}
          >
            A grassroots voice for every New Democrat.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem", alignItems: "start" }} className="md:grid-cols-1">
            <div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ndp-charcoal)", marginBottom: "1.5rem" }}>
                My name is Sukhi Sahota, and I ran as the Candidate for Vancouver Granville in the last election. Originally from the UK, I was raised in a single-parent family with two siblings who have learning difficulties. I have fought my whole life for my mother, my brother, my sister, and my grandmother.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ndp-charcoal)" }}>
                Now we have Avi Lewis as our new leader, and I want to ensure he will be successful — but that will only happen if we have an Executive that represents our membership and core values. It's time for us to be truly organised from a grassroots level and expand that fight to each and every Canadian from Coast to Coast to Coast.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ background: "var(--muted)", padding: "1.5rem", borderRadius: "8px" }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, color: "var(--color-ndp-orange)" }}>7.5%</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "var(--muted-foreground)", marginTop: "0.5rem" }}>
                  NDP vote share in Vancouver Granville — 3rd highest for any non-incumbent Metro Vancouver riding
                </div>
              </div>
              <div style={{ background: "var(--muted)", padding: "1.5rem", borderRadius: "8px" }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, color: "var(--color-ndp-orange)" }}>2 days</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "var(--muted-foreground)", marginTop: "0.5rem" }}>
                  After the writ dropped, I became the official candidate with under 10 volunteers
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingLeft: "1.5rem",
              borderLeft: "4px solid var(--color-ndp-orange)",
              fontFamily: "'Fraunces', serif",
              fontSize: "1.3rem",
              fontWeight: 600,
              fontStyle: "italic",
              color: "var(--color-ndp-charcoal)",
            }}
          >
            "It's time for us to be truly organised from a grassroots level."
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" style={{ padding: "5rem 2rem", backgroundColor: "var(--muted)", marginTop: "3rem" }}>
        <div className="reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s", maxWidth: "1200px", margin: "0 auto" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--color-ndp-orange)", textTransform: "uppercase" }}>
            02 / About Me
          </span>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginTop: "1rem",
              marginBottom: "2rem",
              color: "var(--color-ndp-charcoal)",
            }}
          >
            A life shaped by resilience, identity, and community.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="md:grid-cols-1">
            <div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ndp-charcoal)", marginBottom: "1.5rem" }}>
                I am originally from the UK and was raised in a single-parent family with two siblings who have learning difficulties. I was brought up as a Jehovah's Witness, but I was excommunicated as a young adult when I embraced my identity as a member of the LGBTQ+ community. I lost every friend I had up to that point in my life.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ndp-charcoal)", marginBottom: "1.5rem" }}>
                After working and studying Accounting and Finance for a few years, I strongly desired to explore my identity and connection to the world and society. To pursue this journey, I left the UK and moved to Japan, then lived in Australia, New Zealand, and Hong Kong. After eight years, I settled in Canada, where I have been living in Vancouver for the past eight years.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ndp-charcoal)" }}>
                I have faced joblessness, discrimination, grief, housing insecurity, and food insecurity. These experiences motivated me to work with volunteers at the Richmond Food Bank to create and launch a food pantry outside the premises, ensuring that those who cannot access food during regular hours have an opportunity to obtain food at any time.
              </p>
              <a
                href="/autobiography"
                style={{
                  display: "inline-block",
                  marginTop: "2rem",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--color-ndp-orange)",
                  textDecoration: "none",
                  borderBottom: "2px solid var(--color-ndp-orange)",
                  paddingBottom: "0.25rem",
                  transition: "opacity 0.18s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Read Full Autobiography →
              </a>
            </div>
            <div
              style={{
                backgroundImage: `url('${COMMUNITY}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
                borderRadius: "8px",
              }}
            />
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingLeft: "1.5rem",
              borderLeft: "4px solid var(--color-ndp-orange)",
              fontFamily: "'Fraunces', serif",
              fontSize: "1.3rem",
              fontWeight: 600,
              fontStyle: "italic",
              color: "var(--color-ndp-charcoal)",
            }}
          >
            "We can all make a difference both individually and collectively."
          </div>
        </div>
      </section>

      {/* Election 2025 Section */}
      <section id="election" style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--color-ndp-orange)", textTransform: "uppercase" }}>
            03 / The Election of 2025
          </span>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginTop: "1rem",
              marginBottom: "2rem",
              color: "var(--color-ndp-charcoal)",
            }}
          >
            What the 2025 election taught us.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="md:grid-cols-1">
            <div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ndp-charcoal)", marginBottom: "1.5rem" }}>
                The NDP Executive's primary concern is to set the party's goals and objectives and to serve as the basis for the Election Planning Committee. As a result of that strategy and Trump's tariffs, not only did we lose parliamentary status, but we are now in a fiscal dire situation.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ndp-charcoal)", marginBottom: "1.5rem" }}>
                It felt like a chokehold was placed on our campaign due to the centralization of everything. My campaign manager and I managed the visibility campaign well, given the circumstances, but we kept encountering roadblocks when we had to go to the central office to make a request or get something approved.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ndp-charcoal)" }}>
                I don't want democracy to die on the last day of every convention; I want to ensure that our members' resolutions, once passed, actually DO something and affect the decisions of the Executive & Council.
              </p>
            </div>
            <div
              style={{
                backgroundImage: `url('${VANCOUVER}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
                borderRadius: "8px",
              }}
            />
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingLeft: "1.5rem",
              borderLeft: "4px solid var(--color-ndp-orange)",
              fontFamily: "'Fraunces', serif",
              fontSize: "1.3rem",
              fontWeight: 600,
              fontStyle: "italic",
              color: "var(--color-ndp-charcoal)",
            }}
          >
            "I had the opportunity to meet with Emilie Taman, the Review and Renewal Process facilitator and give my thoughts at the roundtable for candidates in the Lower Mainland in October 2025."
          </div>
        </div>
      </section>

      {/* Our Work is Unfinished Section */}
      <section id="work" style={{ padding: "5rem 2rem", backgroundColor: "var(--color-ndp-charcoal)", color: "white", marginTop: "3rem" }}>
        <div className="reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s", maxWidth: "1200px", margin: "0 auto" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--color-ndp-orange)", textTransform: "uppercase" }}>
            04 / Our Work is Unfinished
          </span>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginTop: "1rem",
              marginBottom: "2rem",
              color: "white",
            }}
          >
            It's time to listen.
          </h2>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            I want to bring my experience as a Candidate in one of the worst elections for the NDP in the last 30 years to the benefit of all our grassroots members. These very unique circumstances call for a 'reset', to stop and to contemplate and most importantly to listen.
          </p>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            A lot of these issues could have been addressed if some aspects of approval were decentralized, and if we vetted and approved candidates well before an anticipated election and set a cut-off date for incoming prospective candidate applications, so that several prospective candidates could go through the vetting process.
          </p>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            In order to re-empower EDAs, we need to set up regional councils that consist of members of several EDAs who can be given a level of autonomy and decision-making by Central and can act as a go-between for the EDA and Central, which in itself would be the first step towards decentralization.
          </p>

          <div
            style={{
              marginTop: "3rem",
              paddingLeft: "1.5rem",
              borderLeft: "4px solid var(--color-ndp-orange)",
              fontFamily: "'Fraunces', serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              fontStyle: "italic",
              color: "white",
            }}
          >
            "it's important to be approachable and listen to different views; that's how 'Iron sharpens Iron'."
          </div>
        </div>
      </section>

      {/* What I Stand For Section */}
      <section id="stand" style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--color-ndp-orange)", textTransform: "uppercase" }}>
            05 / What I Stand For
          </span>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginTop: "1rem",
              marginBottom: "3rem",
              color: "var(--color-ndp-charcoal)",
            }}
          >
            Core values that guide my work.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Grassroots Democracy", desc: "Members' voices must shape party decisions, not just leadership directives." },
              { title: "Decentralization", desc: "Regional councils should empower EDAs with autonomy and decision-making power." },
              { title: "Inclusive Leadership", desc: "Approachable, listening to different views — that's how we grow stronger together." },
              { title: "Environmental Justice", desc: "Climate action and protecting our land, water, and air for future generations." },
              { title: "Workers' Rights", desc: "Supporting unionization and ensuring everyday Canadians have a decent living wage." },
              { title: "Community Care", desc: "Food security, housing, and support for those facing systemic barriers." },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "var(--muted)",
                  padding: "2rem",
                  borderRadius: "8px",
                  borderTop: "4px solid var(--color-ndp-orange)",
                }}
              >
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--color-ndp-charcoal)", marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="involved" style={{ padding: "5rem 2rem", backgroundColor: "var(--color-ndp-orange)", color: "white", marginTop: "3rem" }}>
        <div className="reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Get Involved
          </span>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginTop: "1rem",
              marginBottom: "2rem",
              color: "white",
            }}
          >
            Join the grassroots movement.
          </h2>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
            Whether you want to volunteer, donate, or simply stay informed about our work, there are many ways to get involved in building a stronger, more democratic NDP.
          </p>

          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.ndp.ca/volunteer"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--color-ndp-orange)",
                background: "white",
                padding: "0.85rem 2rem",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "transform 0.18s, box-shadow 0.18s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Volunteer
            </a>
            <a
              href="https://www.ndp.ca/donate"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "white",
                background: "transparent",
                border: "2px solid white",
                padding: "0.75rem 2rem",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "background 0.18s, color 0.18s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "white";
                (e.currentTarget as HTMLElement).style.color = "var(--color-ndp-orange)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
            >
              Donate
            </a>
            <a
              href="mailto:info@sukhisahota.ca"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "white",
                background: "transparent",
                border: "2px solid white",
                padding: "0.75rem 2rem",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "background 0.18s, color 0.18s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "white";
                (e.currentTarget as HTMLElement).style.color = "var(--color-ndp-orange)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Newsletter Signup */}
          <div style={{ marginTop: "3rem", maxWidth: "500px", margin: "3rem auto 0" }}>
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--color-ndp-charcoal)", color: "white", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            {/* About */}
            <div>
              <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>About</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="/autobiography" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.18s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "white")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                    My Story
                  </a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#stand" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.18s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "white")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                    What I Stand For
                  </a>
                </li>
                <li>
                  <a href="#involved" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.18s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "white")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                    Get Involved
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>Connect</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="https://www.linkedin.com/in/sukhisahota" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.18s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "white")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                    LinkedIn
                  </a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="https://www.instagram.com/sukhi4thepeople/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.18s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "white")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                    Instagram
                  </a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="https://www.facebook.com/Sukhi4thepeople" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.18s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "white")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="mailto:info@sukhisahota.ca" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.18s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "white")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>Contact</h4>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", marginBottom: "1rem" }}>
                Have a question or want to get involved? Reach out anytime.
              </p>
              <a
                href="mailto:info@sukhisahota.ca"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--color-ndp-orange)",
                  textDecoration: "none",
                  borderBottom: "2px solid var(--color-ndp-orange)",
                  paddingBottom: "0.25rem",
                  transition: "opacity 0.18s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                info@sukhisahota.ca
              </a>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", textAlign: "center" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>
              © 2026 Sukhi Sahota. Paid for by Sukhi Sahota. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
