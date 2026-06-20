import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Mail, Instagram, Facebook, Linkedin, Code, Users, Megaphone, ClipboardList } from "lucide-react";

export default function GetInvolved() {
  return (
    <>
     <SiteHeader />
    <main className="min-h-screen bg-[#f8f1e7] text-[#111827]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#e85d04]">
          Get Involved
        </p>

        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-7xl">
          Help build a stronger grassroots movement.
        </h1>

        <p className="mb-12 max-w-3xl text-xl leading-8 text-[#374151]">
          Whether you want to stay informed, volunteer, support future campaigns,
          or help with digital organizing, there is a place for you in this work.
        </p>

        <div className="mb-16 rounded-3xl bg-[#e85d04] p-8 shadow-xl">
          <NewsletterSignup />
        </div>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Volunteer",
              text: "Help with outreach, events, canvassing, phone banking, and community organizing.",
            },
            {
              icon: Megaphone,
              title: "Spread the Word",
              text: "Share campaign updates, local issues, and organizing opportunities with your networks.",
            },
            {
              icon: ClipboardList,
              title: "Research & Policy",
              text: "Support issue research, community feedback, policy writing, and public education.",
            },
            {
              icon: Code,
              title: "Digital & Web",
              text: "Developers, designers, writers, and digital volunteers can help improve this website and future campaigns.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-6 shadow-lg">
              <item.icon className="mb-4 h-8 w-8 text-[#e85d04]" />
              <h2 className="mb-3 font-serif text-2xl font-bold">
                {item.title}
              </h2>
              <p className="leading-7 text-[#4b5563]">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-3xl bg-[#111827] p-8 text-white shadow-xl">
          <h2 className="mb-4 font-serif text-4xl font-bold">
            Questions or want to help directly?
          </h2>

          <p className="mb-6 text-lg leading-8 text-white/80">
            Reach out by email or connect through social media.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="mailto:info@sukhisahota.ca" className="inline-flex items-center gap-2 rounded-2xl bg-[#e85d04] px-6 py-3 font-bold text-black">
              <Mail className="h-5 w-5" />
              Email Sukhi
            </a>

            <a href="https://www.instagram.com/sukhi4thepeople/" className="inline-flex items-center gap-2 rounded-2xl border border-white px-6 py-3 font-bold text-white">
              <Instagram className="h-5 w-5" />
              Instagram
            </a>

            <a href="https://www.facebook.com/Sukhi4thepeople" className="inline-flex items-center gap-2 rounded-2xl border border-white px-6 py-3 font-bold text-white">
              <Facebook className="h-5 w-5" />
              Facebook
            </a>

            <a href="http://www.linkedin.com/in/sukhisahota" className="inline-flex items-center gap-2 rounded-2xl border border-white px-6 py-3 font-bold text-white">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </section>
      </section>
    </main>

<SiteFooter />
</>
);
}
