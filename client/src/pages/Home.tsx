/**
 * DESIGN PHILOSOPHY: Contemporary Progressive
 * Bold typography, dynamic layouts, intentional asymmetry
 * Color: Cream bg, NDP orange primary, charcoal text, sage accents
 * Typography: Fraunces (display) + Outfit (body)
 */

import { useEffect, useState } from "react";
import { Mail, Linkedin, Instagram, Facebook, ChevronDown, ArrowRight, Users, Globe, Heart, Shield, Leaf, HandHeart, Chrome as HomeIcon, Stethoscope, GraduationCap, Scale, TreePine, DollarSign, Wrench } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import NewsletterSignup from "@/components/NewsletterSignup";

// ─── Asset URLs ──────────────────────────────────────────────────────────────
const PORTRAIT_PHOTO = "/006A7069a.webp";
const CANVASSING_PHOTO = "/151341v3.webp";
const CLASSROOM_PHOTO = "/20250110_113015v2.webp";

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
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Election 2025", href: "/election-2025" },
  { label: "Renewal", href: "/renewal-report" },
  { label: "Issues", href: "/issues" },
  { label: "Get Involved", href: "/get-involved" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-3 no-underline">
          <img
            src="/Forthepeople_-original.png"
            alt="For the People"
            className="h-9 w-auto flex-shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-charcoal group-hover:text-orange transition-colors leading-tight">
              Sukhi Sahota
            </span>
            <span className="text-xs font-semibold tracking-widest text-[#b84300] uppercase">
              Former Federal Candidate
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link px-3 py-2 text-sm font-medium rounded transition-colors text-charcoal hover:text-orange"
            >
              {l.label}
            </a>
          ))}
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
          <a href="/get-involved" className="btn-primary ml-3 text-sm py-2 px-4">
            Join
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
        href="/get-involved"
        className="block mt-4 py-3 text-center font-semibold text-white bg-orange rounded"
      >
        Join
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

// ─── Platform Card Component ───────────────────────────────────────────────────────
function PlatformCard({ icon: Icon, title, points }: { icon: React.ElementType; title: string; points: string[] }) {
  return (
    <div className="platform-card group p-6 bg-white rounded-xl border border-border/50 hover:border-orange/50 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
          <Icon className="w-5 h-5 text-orange" />
        </div>
        <h3 className="font-serif text-lg font-bold text-charcoal">{title}</h3>
      </div>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
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

// ─── Main Component ───────────────────────────────────────────────────
export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen bg-cream">
      <Nav />

    <main>  
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-cream">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange/5 hidden lg:block" style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }} />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-20">
            {/* Text content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                <span className="text-sm font-semibold tracking-wider uppercase text-orange">
                  NDP · Former Candidate for Vancouver Granville
                </span>
              </div>

              <h1 className="font-serif text-5xl md:text-7xl font-bold text-charcoal leading-none mb-6">
                Fighting for
                <span className="block text-orange">every Canadian</span>
              </h1>

              <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8 max-w-lg">
                My name is Sukhi Sahota. I ran as the NDP Candidate for Vancouver Granville — fighting for regular people, not billionaires, and working to build a fairer, more equitable Canada.
              </p>

              {/* Highlight Quote */}
              <div className="bg-charcoal text-white p-6 rounded-xl mb-8 max-w-md">
                <p className="font-sans text-lg font-semibold">
                  "Society can only be judged by how it looks after our most vulnerable individuals."
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

            {/* Portrait photo */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[540px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={PORTRAIT_PHOTO}
                    alt="Sukhi Sahota"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative frame */}
                <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border-4 border-orange/30 -z-10" />
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

            {/* Photo + Stats */}
            <div className="space-y-4 lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <img
                  src={CANVASSING_PHOTO}
                  alt="Sukhi Sahota canvassing door-to-door in Vancouver Granville"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">Canvassing door-to-door in Vancouver Granville</p>
                </div>
              </div>
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

      {/* About Me Section - Biography */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="reveal grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeader number="02 / About Me" title="A life shaped by resilience" />

              <div className="space-y-5 text-base text-charcoal/85 leading-relaxed">
                <p>
                  Before settling in Vancouver, I lived in the UK, Japan, New Zealand, Australia, and Hong Kong. My experience growing up with family members struggling with health issues and disabilities taught me the importance of a social safety net and the need to protect universal healthcare.
                </p>
                <p>
                  A proud member of the 2SLGBTQIA+ community, I believe society can only be judged by how it looks after our most vulnerable individuals.
                </p>
                <p>
                  I studied Accounting and Finance and work for an environmental NGO focused on the climate crisis. My commitment to the community led me to launch a food pantry during the pandemic, supporting those facing housing and food insecurity.
                </p>
                <p>
                  I was brought up as a Jehovah's Witness, but I was excommunicated as a young adult when I embraced my identity as a member of the LGBTQ+ community. I lost every friend I had up to that point in my life. I have faced joblessness, discrimination, grief, housing insecurity, and food insecurity — and these experiences drive my commitment to public service.
                </p>
              </div>

            <a
  href="/autobiography"
  className="inline-flex items-center gap-3 rounded-2xl bg-[#f25c05] px-8 py-5 text-white font-bold text-xl shadow-lg hover:scale-105 transition"
>
  Learn More About My Journey
  <span>→</span>
</a>

              <div className="mt-10">
                <QuoteBlock text="We can all make a difference both individually and collectively." />
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={CLASSROOM_PHOTO}
                  alt="Sukhi Sahota as a young person growing up in the UK"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange/20 rounded-xl -z-10 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Why I'm Running Section */}
      <section id="why" className="py-20 md:py-28 bg-charcoal text-white">
        <div className="container">
          <div className="reveal max-w-4xl mx-auto">
            <SectionHeader number="03 / Why I Run" title="A protector for the vulnerable" light />

            <div className="space-y-6 text-lg text-white/85 leading-relaxed">
              <p>
                I want to give back hope, love, and compassion to everyday Canadians and be a voice and advocate for the voiceless and vulnerable in our society.
              </p>
              <p>
                I was brought up in the UK in a single-parent family household. My mother suffers from mild learning difficulties and brought up my brother who has Cerebral Palsy and my sister who also suffers from learning difficulties due to a brain injury when young. I watched my mother navigate these difficult circumstances, and I started to take on more responsibilities and become an adult and advocate for my family at the age of 13.
              </p>
              <p>
                My mother didn't struggle alone — she had a social support worker who would visit nearly every day, my Grandmother who lived with us, special schools for my siblings, and income assistance from the government. I cannot imagine how my mother would have coped without all the governmental assistance she received, but I am aware that today here in Canada, many other families face far less support.
              </p>
              <p>
                I genuinely believe that society can only be judged by how far it looks after its most vulnerable and voiceless. I must carry the torch of democratic socialism — to see any government take away social support for our most vulnerable breaks my heart, and I cannot allow that to happen.
              </p>
            </div>

            <div className="mt-12 bg-orange-600 p-8 rounded-xl">
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed">
                "This is why I'm here — I vow to be a protector of the defenceless and vulnerable for the rest of my life, whatever service I can carry out is what will fulfil my purpose in life."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section - NDP Commitments */}
      <section id="platform" className="py-20 md:py-28">
        <div className="container">
          <div className="reveal">
            <SectionHeader number="04 / Platform" title="Fighting for you" />

            <p className="max-w-2xl text-lg text-charcoal/85 leading-relaxed mb-12">
              As your representative, I'll fight for regular people, not billionaires. Here are the key areas where I'll work tirelessly to build a fairer, more equitable Canada.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PlatformCard
                icon={HomeIcon}
                title="Affordability & Housing"
                points={[
                  "Remove GST permanently from essentials like groceries, diapers, and monthly bills",
                  "Build 20% non-market housing in every neighbourhood",
                  "Ban predatory financial landlords from buying affordable housing",
                  "Fight soaring rents with strong tenant protections",
                  "$16 billion national housing strategy"
                ]}
              />
              <PlatformCard
                icon={Stethoscope}
                title="Healthcare"
                points={[
                  "Universal pharmacare covering essential medicines within 4 years",
                  "Cover diabetes medications and birth control for all Canadians irregardless of Geographic location",
                  "Pan-Canadian licensure for medical professionals",
                  "$5,000 tax credit for nurses and PSWs",
                  "Expand mental health coverage for psychotherapy and counselling"
                ]}
              />
              <PlatformCard
                icon={Globe}
                title="Climate Action"
                points={[
                  "Cut emissions to 50% below 2005 levels by 2035",
                  "Eliminate fossil fuel subsidies by end of 2026",
                  "Free energy retrofits for 2.3 million low-income households",
                  "Build an East-West clean energy grid",
                  "100% non-emitting electricity by 2045"
                ]}
              />
              <PlatformCard
                icon={Heart}
                title="Indigenous Rights"
                points={[
                  "End all long-term boil water advisories on First Nations",
                  "Free, prior and informed consent for all decisions affecting land rights",
                  "Expand Red Dress Alert nationwide",
                  "Combat residential school denialism with legislation",
                  "Support Indigenous jurisdiction over child welfare"
                ]}
              />
              <PlatformCard
                icon={Shield}
                title="Workers & Jobs"
                points={[
                  "Counter-tariff revenues go directly to support workers",
                  "Train 100,000+ skilled workers for the green economy",
                  "Develop sector-specific industrial strategies",
                  "Protect workers affected by trade disputes",
                  "Strengthen Employment Insurance benefits"
                ]}
              />
              <PlatformCard
                icon={Scale}
                title="Democratic Reform"
                points={[
                  "Establish independent citizens assembly for proportional representation",
                  "Lower voting age to 16",
                  "Indigenous languages on election ballots in Indigenous territories",
                  "Foreign agent registry to protect democratic institutions",
                  "Strengthen transparency in federal budget-making"
                ]}
              />
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
              Join the movement
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-10">
              Whether you want to volunteer, donate, or simply stay informed, there are many ways to get involved in building a stronger, more democratic Canada.
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

    </main>

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
                  <a href="#why" className="text-white/70 hover:text-white transition-colors">
                    Why I Run
                  </a>
                </li>
                <li>
                  <a href="#platform" className="text-white/70 hover:text-white transition-colors">
                    Platform
                  </a>
                </li>
                <li>
                  <a href="#stand" className="text-white/70 hover:text-white transition-colors">
                    What I Stand For
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
