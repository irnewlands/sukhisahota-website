import { useState } from "react";

/**
 * Journey Timeline Component
 * Design: Warm Civic Modernism
 * - Vertical timeline with country stops
 * - Interactive hover states with expanded details
 * - NDP orange accents and smooth animations
 * - Responsive design for mobile
 */

interface TimelineStop {
  country: string;
  period: string;
  years: string;
  icon: string;
  milestones: string[];
  description: string;
  color: string;
}

const journeyStops: TimelineStop[] = [
  {
    country: "United Kingdom",
    period: "1987 – 2010",
    years: "23 years",
    icon: "🇬🇧",
    milestones: [
      "Raised in single-parent family",
      "Jehovah's Witness upbringing",
      "Excommunicated at young adulthood",
      "Diploma in Accounting & Finance",
    ],
    description:
      "Born and raised in the UK with two siblings who have learning difficulties. Faced identity challenges and isolation after coming out as LGBTQ+.",
    color: "oklch(0.65 0.15 30)",
  },
  {
    country: "Japan",
    period: "2010 – 2011",
    years: "1 year and 2 momths",
    icon: "🇯🇵",
    milestones: [
      "Moved to Tokyo independently",
      "English language instructor",
      "Survived 2011 Tōhoku earthquake aftermath",
      "Explored identity and freedom",
    ],
    description:
      "Left the UK at 23 to explore the world. Landed in Tokyo with a suitcase and a phrasebook, found work within a month, and experienced resilience during crisis.",
    color: "oklch(0.68 0.18 35)",
  },
  {
    country: "Australia",
    period: "2011 – 2014",
    years: "2 years and 6 months",
    icon: "🇦🇺",
    milestones: [
      "Struggled with job discrimination",
      "Temporary foreign worker experience",
      "Diverse temporary jobs (removals, pizza delivery, cotton gin)",
      "2nd-year visa requirement work",
    ],
    description:
      "Faced employment discrimination and used an Anglo-phone pseudonym to get interviews. Worked 12-hour shifts in the outback and learned about systemic inequality.",
    color: "oklch(0.70 0.20 40)",
  },
  {
    country: "New Zealand",
    period: "2014 – 2016",
    years: "2 years",
    icon: "🇳🇿",
    milestones: [
      "Thriving in accounting work",
      "Discovered Indigenous rights (Māori)",
      "Appreciated proportional representation",
      "Valued environmental biodiversity",
    ],
    description:
      "Found a fresh sense of awakening. Appreciated stronger democracy, Indigenous rights, and the stunning natural environment of Aotearoa.",
    color: "oklch(0.72 0.22 45)",
  },
  {
    country: "Hong Kong",
    period: "2016 – 2017",
    years: "1 year and 4 momths",
    icon: "🇭🇰",
    milestones: [
      "Witnessed Umbrella Movement aftermath",
      "Learned value of democracy",
      "Understood authoritarianism risks",
      "Appreciated Canadian freedoms",
    ],
    description:
      "Arrived 18 months after the Umbrella Movement. Witnessed the fight for basic democracy and realized how precious democratic institutions truly are.",
    color: "oklch(0.74 0.24 50)",
  },
  {
    country: "Canada",
    period: "2018 – Present",
    years: "8 years",
    icon: "🇨🇦",
    milestones: [
      "Settled in Vancouver",
      "Hiking and landscape photography",
      "Food pantry volunteer work",
      "Environmental NGO employment",
      "Union member",
      "NDP candidate for Vancouver Granville",
    ],
    description:
      "Found home on the West Coast. Pursued passions in nature, served the community, and now running for BC Regional Rep Executive to organize from the grassroots.",
    color: "var(--color-ndp-orange)",
  },
];

export default function JourneyTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
          Global Journey
        </span>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            lineHeight: 1.2,
            margin: "1rem 0 1.5rem",
            color: "var(--foreground)",
          }}
        >
          A Journey Across Continents
        </h2>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          From the UK to Japan, Australia, New Zealand, Hong Kong, and finally Vancouver — a 30-year journey shaped by resilience, discovery, and community.
        </p>
      </div>

      {/* Timeline Container */}
      <div
        style={{
          position: "relative",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        {/* Vertical Line */}
        <div
          style={{
            position: "absolute",
            left: "calc(50% - 2px)",
            top: 0,
            bottom: 0,
            width: "4px",
            backgroundColor: "var(--border)",
            zIndex: 0,
          }}
        />

        {/* Timeline Items */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {journeyStops.map((stop, index) => (
            <div
              key={index}
              style={{
                marginBottom: "3rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              {/* Alternating layout for visual interest */}
              {index % 2 === 0 ? (
                <>
                  {/* Left content */}
                  <div style={{ textAlign: "right", paddingRight: "2rem" }}>
                    <div
                      style={{
                        fontFamily: "'Fraunces', serif",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "var(--foreground)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {stop.icon} {stop.country}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--color-ndp-orange)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {stop.period}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.85rem",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {stop.years}
                    </div>
                  </div>

                  {/* Center dot */}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: stop.color,
                        border: "4px solid var(--background)",
                        cursor: "pointer",
                        transition: "all 0.3s ease-out",
                        boxShadow:
                          expandedIndex === index
                            ? `0 0 0 8px ${stop.color}33`
                            : "0 2px 8px rgba(0,0,0,0.1)",
                        transform:
                          expandedIndex === index ? "scale(1.3)" : "scale(1)",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.transform = "scale(1.2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.transform =
                          expandedIndex === index ? "scale(1.3)" : "scale(1)";
                      }}
                    />
                  </div>

                  {/* Right content - Hidden until expanded */}
                  <div style={{ paddingLeft: "2rem", minHeight: "80px" }}>
                    {expandedIndex === index && (
                      <div
                        style={{
                          animation: "fadeIn 0.3s ease-out",
                          backgroundColor: "var(--card)",
                          border: `2px solid ${stop.color}`,
                          borderRadius: "8px",
                          padding: "1.5rem",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.95rem",
                            lineHeight: 1.7,
                            color: "var(--foreground)",
                            marginBottom: "1rem",
                            margin: 0,
                          }}
                        >
                          {stop.description}
                        </p>
                        <div style={{ marginTop: "1rem" }}>
                          <div
                            style={{
                              fontFamily: "'Fraunces', serif",
                              fontSize: "0.9rem",
                              fontWeight: 600,
                              color: "var(--foreground)",
                              marginBottom: "0.5rem",
                            }}
                          >
                            Key Milestones
                          </div>
                          <ul
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.85rem",
                              color: "var(--muted-foreground)",
                              paddingLeft: "1.5rem",
                              margin: 0,
                            }}
                          >
                            {stop.milestones.map((milestone, mIdx) => (
                              <li key={mIdx} style={{ marginBottom: "0.4rem" }}>
                                {milestone}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Left content - Hidden until expanded */}
                  <div style={{ paddingRight: "2rem", minHeight: "80px" }}>
                    {expandedIndex === index && (
                      <div
                        style={{
                          animation: "fadeIn 0.3s ease-out",
                          backgroundColor: "var(--card)",
                          border: `2px solid ${stop.color}`,
                          borderRadius: "8px",
                          padding: "1.5rem",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.95rem",
                            lineHeight: 1.7,
                            color: "var(--foreground)",
                            margin: 0,
                            marginBottom: "1rem",
                          }}
                        >
                          {stop.description}
                        </p>
                        <div style={{ marginTop: "1rem" }}>
                          <div
                            style={{
                              fontFamily: "'Fraunces', serif",
                              fontSize: "0.9rem",
                              fontWeight: 600,
                              color: "var(--foreground)",
                              marginBottom: "0.5rem",
                            }}
                          >
                            Key Milestones
                          </div>
                          <ul
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.85rem",
                              color: "var(--muted-foreground)",
                              paddingLeft: "1.5rem",
                              margin: 0,
                            }}
                          >
                            {stop.milestones.map((milestone, mIdx) => (
                              <li key={mIdx} style={{ marginBottom: "0.4rem" }}>
                                {milestone}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: stop.color,
                        border: "4px solid var(--background)",
                        cursor: "pointer",
                        transition: "all 0.3s ease-out",
                        boxShadow:
                          expandedIndex === index
                            ? `0 0 0 8px ${stop.color}33`
                            : "0 2px 8px rgba(0,0,0,0.1)",
                        transform:
                          expandedIndex === index ? "scale(1.3)" : "scale(1)",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.transform = "scale(1.2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.transform =
                          expandedIndex === index ? "scale(1.3)" : "scale(1)";
                      }}
                    />
                  </div>

                  {/* Right content */}
                  <div style={{ textAlign: "left", paddingLeft: "2rem" }}>
                    <div
                      style={{
                        fontFamily: "'Fraunces', serif",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "var(--foreground)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {stop.icon} {stop.country}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--color-ndp-orange)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {stop.period}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.85rem",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {stop.years}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          div[style*="position: absolute"][style*="left: calc(50%"] {
            left: 12px !important;
          }
          
          div[style*="text-align: right"] {
            text-align: left !important;
            padding-right: 0 !important;
            padding-bottom: 1rem !important;
          }
          
          div[style*="text-align: left"][style*="padding-left: 2rem"] {
            padding-left: 0 !important;
          }
          
          div[style*="padding-left: 2rem"][style*="min-height: 80px"] {
            padding-left: 0 !important;
          }
          
          div[style*="padding-right: 2rem"][style*="min-height: 80px"] {
            padding-right: 0 !important;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
