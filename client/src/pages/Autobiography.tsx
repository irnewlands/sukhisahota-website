import { useEffect } from "react";
import JourneyTimeline from "@/components/JourneyTimeline";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/**
 * Autobiography Page
 * Design: Warm Civic Modernism
 * - Fraunces serif for section headings
 * - Outfit sans-serif for body text
 * - Warm cream background with NDP orange accents
 * - Generous whitespace and editorial layout
 * - Pull quotes and visual hierarchy
 */

interface Section {
  title: string;
  content: string[];
  pullQuote?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
}

const sections: Section[] = [
  {
    title: "Getting Started",
    image: "/IMG-20170310-WA0002.jpg",
    imageAlt: "Sukhi as a young person growing up in the UK",
    imageCaption: "Growing up in the UK — early memories that shaped who I am",
    content: [
      "Originally from the UK but of South Asian origin, I grew up in a single-parent family with two siblings who have learning difficulties.",
      "It was a hard life for my mother, who herself experienced a disability that never got fully diagnosed and addressed. She had no choice but to have an arranged marriage and then to have kids. It was my Grandmother's way of setting up a structure of support for the long-term future.",
      "My sister developed learning difficulties when she was a toddler after an accident. My brother was born with Cerebral Palsy, and despite doctors stating he would never walk, my mother did everything she could to train my brother to walk, which turned out successful.",
      "I was initially taught to speak Punjabi as my first language. Still, I must have found it challenging to learn English simultaneously because by the time I turned 4, I didn't speak English. As a result, everyone in my household stopped speaking Punjabi to immerse me in English; whilst that did work, I have struggled to learn Punjabi ever since.",
      "When I was 11 years of age, my mother and father divorced; they had already separated for a few years before that. My mother also at the time converted from Sikhism to become a Jehovah's Witness, which my father did not accept. The custody battle took a toll on my well-being as I was torn between 2 parents who both wanted me.",
    ],
  },
  {
    title: "My Faith",
    content: [
      "From Sikh heritage, I was also brought up as a Jehovah's Witness; I got baptized on my 13th Birthday. I found a loving and caring community that supported me and my now single-parent mother during my teen years. I will never forget the individuals who either helped my mother and siblings or gave me that 'father figure role' as I went through puberty.",
      "I was blessed to have friends from different backgrounds and ethnicities, and I pursued a full-time minister role at the age of 16, but everything came crashing down when I got excommunicated as a young adult when I identified myself as part of the LGBTQ community.",
      "It was a painful time in my life; I lost all my friends and my entire support network overnight; all communication was severed as per their guidelines. I effectively had no one, and my mental health went south. I was fortunate to seek professional help in the form of Early Intervention; I would not be here today without it.",
    ],
    pullQuote: "I lost all my friends and my entire support network overnight. I was fortunate to seek professional help in the form of Early Intervention; I would not be here today without it.",
  },
  {
    title: "My Journey",
    image: "/SAM_2551.JPG",
    imageAlt: "Sukhi at a mountain summit at sunset",
    imageCaption: "Summit at sunset — adventures across the world",
    content: [
      "After having obtained a Diploma in Accounting & Finance and working for a few years, as well as seeing my siblings go into full-time government care, I wanted to learn more about myself and my connection to this world and society as a whole after being insulated in a secluded community for most of my childhood years.",
      "So I left the UK at 23, took advantage of the UK government's Youth Mobility (Working Holiday) program and moved to Japan on the other side of the world. I landed in Tokyo with a suitcase and a phrasebook in hand, only having learnt a few words at this stage but managed to find work as an English language Instructor within 1 month of arriving.",
      "Five months later, the 2011 Tōhoku earthquake and tsunami was the first test of how I would react to a crisis on my own without being able to seek the help of family and friends. It was a difficult time; not only was I concerned with the situation at Fukushima, but I was also listening to many of my new students telling me about how a relative or loved one lost their life.",
      "I then moved to Australia and struggled to find a job in Sydney; it took 3 months to get work in accounting finally, and I started to understand what it was like to be a temporary foreign worker. I experienced discrimination, too. I resorted to using an Anglo-phone pseudonym of my name to be considered by recruiters for job opportunities.",
      "I also remember doing so many different temporary jobs between longer job stints; I worked in removals, traffic control, a tempura cook, pizza delivery, and car valet, as well as a Cotton Gin worker in the outback working 12-hour shifts for 3 months to meet my 2nd-year visa working requirement.",
      "Moving to New Zealand gave me a fresh sense of awakening; I was no longer finding it difficult to get temporary accounting work, but I was also thriving. What I found refreshing was its Indigenous rights for the Māori, democracy being much stronger and harmonious, therefore less polarizing due to proportional representation, and the environment and its bio-diversity.",
      "My move to Hong Kong somewhat reminded me of the stark realities of life; the fight for a basic democracy was evident to me when I arrived around 18 months after the Umbrella movement. It made me value what I had and what I was brought up to believe in.",
    ],
    pullQuote: "I started to appreciate how valuable democracies and their institutions are, as they can be taken away by authoritarianism without much opposition in a short period of time.",
  },
  {
    title: "Return to the UK",
    content: [
      "I finally returned to the UK after 7 years, being slightly older and wiser, attending to my Grandmother, who recently had a fall and was diagnosed with Cancer and needed to go into a care home. This was after the Brexit vote, and I could see in my hometown that things hadn't improved; they were either the same or got somewhat worse.",
      "I applied for work in my accounting field and encountered the same question in most interviews I attended; 'Why did you come back here?' That question made me consider whether I could live in the UK again for the long term.",
    ],
  },
  {
    title: "Why Vancouver?",
    content: [
      "In April 2018, I moved to Canada, where I have lived in Vancouver for roughly the last 8 years.",
      "I chose Vancouver over Toronto because I love hiking and landscape photography, so the West Coast is perfect for pursuing my passions and interests in beauty and nature while living in a sizeable, LGBTQ-friendly city with all its services.",
      "I have also noticed a notable shift since the pandemic within our community as a whole; many people have also experienced joblessness, discrimination, grief, housing insecurity as well and food insecurity like me, which in turn led me to work with other volunteers at a Food Bank to create and launch a food pantry outside the premises.",
      "I felt so elated when we launched the food pantry and saw the handwritten notes we received from those so stigmatized in society that would never be seen at a food bank. This further impressed on me the need to take on more work in serving the community at large.",
      "I have been working for an Environmental NGO for nearly the last 3 years, and it gives me a sense of fulfilment that we can all make a difference individually as well as collectively at the same time.",
    ],
    pullQuote: "We can all make a difference both individually and collectively.",
  },
];

export default function Autobiography() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      {/* Header / Navigation */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "var(--background)",
          borderBottom: "1px solid var(--border)",
          backdropFilter: "blur(8px)",
        }}
      >
        <nav
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "1rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}
          >
            <img src="/Forthepeople_-original.png" alt="For the People" style={{ height: "36px", width: "auto" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--foreground)", lineHeight: 1.2 }}>
                Sukhi Sahota
              </span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-ndp-orange)" }}>
                Former Federal Candidate
              </span>
            </div>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <LanguageSwitcher />
            <a
              href="/"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                color: "var(--color-ndp-orange)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              ← Back to Home
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <div style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto",
            border: "4px solid var(--color-ndp-orange)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          }}>
            <img
              src="/006A7069a.jpg"
              alt="Sukhi Sahota"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        </div>
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            color: "var(--color-ndp-orange)",
            textTransform: "uppercase",
          }}
        >
          Full Story
        </span>
        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
            margin: "1rem 0 2rem",
            color: "var(--foreground)",
          }}
        >
          An Autobiography
        </h1>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          A personal journey shaped by resilience, identity, and community — from the UK to the world and back again.
        </p>
      </section>

      {/* Content Sections */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem 4rem" }}>
        {sections.map((section, idx) => (
          <article
            key={idx}
            style={{
              marginBottom: "4rem",
              paddingBottom: "3rem",
              borderBottom: idx < sections.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                color: "var(--foreground)",
              }}
            >
              {section.title}
            </h2>

            {section.image && (
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ borderRadius: "1rem", overflow: "visible", maxHeight: "none" }}>
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    style={{ width: "100%", height: "auto", objectFit: "contain", objectPosition: "center", display: "block" }}
                  />
                </div>
                {section.imageCaption && (
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "var(--muted-foreground)", textAlign: "center", marginTop: "0.5rem" }}>
                    {section.imageCaption}
                  </p>
                )}
              </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
              <div>
                {section.content.slice(0, Math.ceil(section.content.length / 2)).map((para, pIdx) => (
                  <p
                    key={pIdx}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1rem",
                      lineHeight: 1.85,
                      marginBottom: "1.25rem",
                      color: "var(--foreground)",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div>
                {section.content.slice(Math.ceil(section.content.length / 2)).map((para, pIdx) => (
                  <p
                    key={pIdx}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1rem",
                      lineHeight: 1.85,
                      marginBottom: "1.25rem",
                      color: "var(--foreground)",
                    }}
                  >
                    {para}
                  </p>
                ))}

                {section.pullQuote && (
                  <blockquote
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontStyle: "italic",
                      fontSize: "1.05rem",
                      lineHeight: 1.6,
                      color: "var(--foreground)",
                      borderLeft: "3px solid var(--color-ndp-orange)",
                      paddingLeft: "1.5rem",
                      marginTop: "2rem",
                      margin: "2rem 0 0 0",
                    }}
                  >
                    "{section.pullQuote}"
                  </blockquote>
                )}
              </div>
            </div>

            {/* Mobile: Stack layout */}
            <style>{`
              @media (max-width: 768px) {
                article > div {
                  grid-template-columns: 1fr !important;
                  gap: 1.5rem !important;
                }
              }
            `}</style>
          </article>
        ))}
      </main>

      {/* Journey Timeline */}
      <JourneyTimeline />

      {/* CTA Footer */}
      <section
        style={{
          backgroundColor: "var(--color-ndp-charcoal)",
          color: "white",
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 700,
            fontSize: "1.75rem",
            marginBottom: "1rem",
          }}
        >
          Ready to support grassroots change?
        </h3>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "2rem",
            color: "oklch(0.78 0.01 285)",
          }}
        >
          Join Sukhi in building a more organized, inclusive NDP from the ground up.
        </p>
        <a
          href="/"
          style={{
            display: "inline-block",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            padding: "0.75rem 2rem",
            backgroundColor: "var(--color-ndp-orange)",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            transition: "all 0.2s ease-out",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "oklch(0.65 0.2 30)";
            (e.target as HTMLElement).style.transform = "scale(0.98)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "var(--color-ndp-orange)";
            (e.target as HTMLElement).style.transform = "scale(1)";
          }}
        >
          Back to Home
        </a>
      </section>
    </div>
  );
}
