/**
 * DESIGN PHILOSOPHY: Contemporary Progressive
 * Bold typography, dynamic layouts, intentional asymmetry
 * Color: Cream bg, NDP orange primary, charcoal text, sage accents
 * Typography: Fraunces (display) + Outfit (body)
 */

import { useEffect, useState } from "react";
import { Mail, Linkedin, Instagram, Facebook, ChevronDown, ArrowRight, Users, Globe, Heart, Shield, Leaf, HandHeart } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import NewsletterSignup from "@/components/NewsletterSignup";

// ─── Asset URLs ──────────────────────────────────────────────────────────────
const CANDIDATE_PHOTO = "https://sukhisahota.ca/ndp-en/_assets/media/c95bbd1e799d9df9beab1ae666d484e4.jpg";
const VANCOUVER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663697652215/KTWnaZgXJ8mCfxSys5NDzn/vancouver-skyline-fw6WUe9bMtpg4A5dFpTnaw.webp";
const COMMUNITY = "https://d2xsxph8kpxj0f.cloudfront.net/310519663697652215/KTWnaZgXJ8mCfxSys5NDzn/community-abstract-ZYWFQ6wx3cbmzxRJCSQJFH.webp";

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
  { label: "About", href: "#about" },
  { label: "Election", href: "#election" },
  { label: "Vision", href: "#stand" },
  { label: "Join", href: "#involved" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#welcome" className="group flex flex-col no-underline">
          <span className="font-serif font-bold text-lg text-charcoal group-hover:text-orange transition-colors">
            Sukhi Sahota
          </span>
          <span className="text-xs font-semibold tracking-widest text-orange uppercase">
            Former Federal Candidate
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link px-3 py-2 text-sm font-medium rounded transition-colors ${
                active === l.href.slice(1)
                  ? "text-orange"
                  : "text-charcoal hover:text-orange"
              }`}
            >
              {l.label}
            </a>
          ))}
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
          <a href="mailto:info@sukhisahota.ca" className="btn-primary ml-3 text-sm py-2 px-4">
            Contact
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="bg-cream/98 border-t border-border md:hidden">
          <div className="container py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-charcoal border-b border-border"
              >
                {l.label}
              </a>
            ))}
            <div className="py-3 border-b border-border">
              <LanguageSwitcher />
            </div>
            <a
              href="mailto:info@sukhisahota.ca"
              className="block mt-4 py-3 text-center font-semibold text-white bg-orange rounded"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Stat Card Component ───────────────────────────────────────────────────────
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat-card group bg-white p-6 rounded-xl border border-border/50 hover:border-orange/30 hover:shadow-lg transition-all duration-300">
      <div className="font-serif text-3xl font-bold text-orange mb-2">{value}</div>
      <div className="text-sm text-muted-foreground leading-relaxed">{label}</div>
    </div>
  );
}

// ─── Value Card Component ───────────────────────────────────────────────────────
function ValueCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="value-card group p-6 bg-white rounded-xl border border-border/50 hover:border-orange/50 hover:shadow-xl transition-all duration-300 cursor-default">
      <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
        <Icon className="w-6 h-6 text-orange" />
      </div>
      <h3 className="font-serif text-lg font-bold text-charcoal mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

// ─── Section Header Component ───────────────────────────────────────────────────────
function SectionHeader({ number, title, light = false }: { number: string; title: string; light?: boolean }) {
  return (
    <div className="mb-12">
      <span className="text-xs font-semibold tracking-widest uppercase text-orange">
        {number}
      </span>
      <h2 className={`font-serif text-4xl md:text-5xl font-bold mt-2 leading-tight ${light ? "text-white" : "text-charcoal"}`}>
        {title}
      </h2>
    </div>
  );
}

// ─── Quote Block Component ───────────────────────────────────────────────────────
function QuoteBlock({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <blockquote className={`border-l-4 border-orange pl-6 font-serif text-xl md:text-2xl font-medium italic ${light ? "text-white" : "text-charcoal"}`}>
      "{text}"
    </blockquote>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen bg-cream">
      <Nav />

      {/* Hero Section - Full Bleed Diagonal Split */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${CANDIDATE_PHOTO}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/95 to-cream/70 md:via-cream/80 md:to-cream/30" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange/5 skew-x-12 transform translate-x-20 hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-orange/20 rounded-full hidden md:block" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-sage/20 rounded-full hidden md:block" />

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-2xl py-12 md:py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wider uppercase text-orange">
                NDP · Former Candidate
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-charcoal leading-none mb-6">
              Fighting for
              <span className="block text-orange">every Canadian</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8 max-w-lg">
              My name is Sukhi Sahota. I ran as the NDP Candidate for Vancouver Granville and now I'm focused on grassroots organizing — because it's time for us to be truly organized from the ground up.
            </p>

            {/* Highlight Quote */}
            <div className="bg-charcoal text-white p-6 rounded-xl mb-8 max-w-md">
              <p className="font-sans text-lg font-semibold">
                "It's time for us to be truly organised from a grassroots level."
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#about" className="btn-primary group">
                Learn About Me
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:info@sukhisahota.ca" className="btn-secondary">
                Ask a Question
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow:</span>
              <div className="flex gap-3">
                <a href="http://www.linkedin.com/in/sukhisahota" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/sukhi4thepeople/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/Sukhi4thepeople" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="mailto:info@sukhisahota.ca" className="social-icon" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-xs text-muted-foreground mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5 text-orange" />
        </div>
      </section>

      {/* Land Acknowledgment */}
      <section className="bg-muted py-6 border-y border-border">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I acknowledge this was created on unceded traditional territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil-Waututh) Nations.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-20 md:py-28">
        <div className="container">
          <div className="reveal grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <SectionHeader number="01 / Welcome" title="A grassroots voice for every New Democrat" />

              <div className="space-y-6 text-lg text-charcoal/85 leading-relaxed">
                <p>
                  My name is Sukhi Sahota, and I ran as the Candidate for Vancouver Granville in the last election. Originally from the UK, I was raised in a single-parent family with two siblings who have learning difficulties. I have fought my whole life for my mother, my brother, my sister, and my grandmother.
                </p>
                <p>
                  Now we have Avi Lewis as our new leader, and I want to ensure he will be successful — but that will only happen if we have an Executive that represents our membership and core values. It's time for us to be truly organised from a grassroots level and expand that fight to each and every Canadian from Coast to Coast to Coast.
                </p>
              </div>

              <div className="mt-12">
                <QuoteBlock text="It's time for us to be truly organised from a grassroots level." />
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4 lg:sticky lg:top-24">
              <StatCard
                value="7.5%"
                label="NDP vote share in Vancouver Granville — 3rd highest for any non-incumbent Metro Vancouver riding"
              />
              <StatCard
                value="2 days"
                label="After the writ dropped, I became the official candidate with under 10 volunteers"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section - Split with Image */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="reveal grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeader number="02 / About Me" title="A life shaped by resilience and community" />

              <div className="space-y-5 text-base text-charcoal/85 leading-relaxed">
                <p>
                  I am originally from the UK and was raised in a single-parent family with two siblings who have learning difficulties. I was brought up as a Jehovah's Witness, but I was excommunicated as a young adult when I embraced my identity as a member of the LGBTQ+ community. I lost every friend I had up to that point in my life.
                </p>
                <p>
                  After working and studying Accounting and Finance for a few years, I strongly desired to explore my identity and connection to the world. To pursue this journey, I left the UK and moved to Japan, then lived in Australia, New Zealand, and Hong Kong. After eight years, I settled in Canada, where I have been living in Vancouver for the past eight years.
                </p>
                <p>
                  I have faced joblessness, discrimination, grief, housing insecurity, and food insecurity. These experiences motivated me to work with volunteers at the Richmond Food Bank to create and launch a food pantry outside the premises, ensuring access to food at any time.
                </p>
              </div>

              <a
                href="/autobiography"
                className="inline-flex items-center gap-2 mt-8 font-semibold text-orange hover:text-amber transition-colors group"
              >
                Read Full Autobiography
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="mt-10">
                <QuoteBlock text="We can all make a difference both individually and collectively." />
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                style={{ backgroundImage: `url('${COMMUNITY}')`, backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange/20 rounded-xl -z-10 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Election 2025 Section */}
      <section id="election" className="py-20 md:py-28">
        <div className="container">
          <div className="reveal grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                style={{ backgroundImage: `url('${VANCOUVER}')`, backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-orange/30 rounded-xl -z-10 hidden md:block" />
            </div>

            <div>
              <SectionHeader number="03 / The Election of 2025" title="What the 2025 election taught us" />

              <div className="space-y-5 text-base text-charcoal/85 leading-relaxed">
                <p>
                  The NDP Executive's primary concern is to set the party's goals and objectives and to serve as the basis for the Election Planning Committee. As a result of that strategy and Trump's tariffs, not only did we lose parliamentary status, but we are now in a fiscal dire situation.
                </p>
                <p>
                  It felt like a chokehold was placed on our campaign due to the centralization of everything. My campaign manager and I managed the visibility campaign well, given the circumstances, but we kept encountering roadblocks when we had to go to the central office to make a request or get something approved.
                </p>
                <p>
                  I don't want democracy to die on the last day of every convention; I want to ensure that our members' resolutions, once passed, actually DO something and affect the decisions of the Executive & Council.
                </p>
              </div>

              <div className="mt-10">
                <QuoteBlock text="I had the opportunity to meet with Emilie Taman, the Review and Renewal Process facilitator and give my thoughts at the roundtable for candidates in the Lower Mainland in October 2025." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section - Dark Theme */}
      <section id="work" className="py-20 md:py-28 bg-charcoal text-white">
        <div className="container">
          <div className="reveal max-w-3xl">
            <SectionHeader number="04 / Our Work is Unfinished" title="It's time to listen" light />

            <div className="space-y-5 text-lg text-white/85 leading-relaxed">
              <p>
                I want to bring my experience as a Candidate in one of the worst elections for the NDP in the last 30 years to the benefit of all our grassroots members. These very unique circumstances call for a 'reset', to stop and to contemplate and most importantly to listen.
              </p>
              <p>
                A lot of these issues could have been addressed if some aspects of approval were decentralized, and if we vetted and approved candidates well before an anticipated election and set a cut-off date for incoming prospective candidate applications, so that several prospective candidates could go through the vetting process.
              </p>
              <p>
                In order to re-empower EDAs, we need to set up regional councils that consist of members of several EDAs who can be given a level of autonomy and decision-making by Central and can act as a go-between for the EDA and Central, which in itself would be the first step towards decentralization.
              </p>
            </div>

            <div className="mt-12">
              <QuoteBlock text="it's important to be approachable and listen to different views; that's how 'Iron sharpens Iron'." light />
            </div>
          </div>
        </div>
      </section>

      {/* What I Stand For - Card Grid */}
      <section id="stand" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="reveal">
            <SectionHeader number="05 / What I Stand For" title="Core values that guide my work" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ValueCard
                icon={Users}
                title="Grassroots Democracy"
                description="Members' voices must shape party decisions, not just leadership directives."
              />
              <ValueCard
                icon={Globe}
                title="Decentralization"
                description="Regional councils should empower EDAs with autonomy and decision-making power."
              />
              <ValueCard
                icon={HandHeart}
                title="Inclusive Leadership"
                description="Approachable, listening to different views — that's how we grow stronger together."
              />
              <ValueCard
                icon={Leaf}
                title="Environmental Justice"
                description="Climate action and protecting our land, water, and air for future generations."
              />
              <ValueCard
                icon={Shield}
                title="Workers' Rights"
                description="Supporting unionization and ensuring everyday Canadians have a decent living wage."
              />
              <ValueCard
                icon={Heart}
                title="Community Care"
                description="Food security, housing, and support for those facing systemic barriers."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section - Full Width Orange */}
      <section id="involved" className="py-20 md:py-28 bg-orange text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="container relative z-10">
          <div className="reveal max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/80">
              Get Involved
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6">
              Join the grassroots movement
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-10">
              Whether you want to volunteer, donate, or simply stay informed about our work, there are many ways to get involved in building a stronger, more democratic NDP.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="https://www.ndp.ca/volunteer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white group"
              >
                Volunteer
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.ndp.ca/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white"
              >
                Donate
              </a>
              <a
                href="mailto:info@sukhisahota.ca"
                className="btn-outline-white"
              >
                Get in Touch
              </a>
            </div>

            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {/* About */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">About</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/autobiography" className="text-white/70 hover:text-white transition-colors">
                    My Story
                  </a>
                </li>
                <li>
                  <a href="#stand" className="text-white/70 hover:text-white transition-colors">
                    What I Stand For
                  </a>
                </li>
                <li>
                  <a href="#involved" className="text-white/70 hover:text-white transition-colors">
                    Get Involved
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.linkedin.com/in/sukhisahota" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sukhi4thepeople/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Sukhi4thepeople" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="mailto:info@sukhisahota.ca" className="text-white/70 hover:text-white transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Contact</h4>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Have a question or want to get involved? Reach out anytime.
              </p>
              <a
                href="mailto:info@sukhisahota.ca"
                className="inline-flex items-center gap-2 text-orange hover:text-amber transition-colors font-semibold"
              >
                <Mail className="w-4 h-4" />
                info@sukhisahota.ca
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-white/50">
              © 2026 Sukhi Sahota. Paid for by Sukhi Sahota. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
