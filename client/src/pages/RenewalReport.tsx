const themes = [
  {
    title: "Grassroots Democracy",
    text: "Members should have a meaningful voice in shaping party direction, not just during leadership races or after election losses.",
  },
  {
    title: "Campaign Readiness",
    text: "Candidate approval, nomination planning, translations, design support, and local organizing need to begin long before the writ drops.",
  },
  {
    title: "Decentralization",
    text: "Local EDAs and regional councils should be trusted with more autonomy so they can respond quickly to community needs.",
  },
  {
    title: "Member Engagement",
    text: "Consultation should be ongoing, not something that only happens after a difficult election result.",
  },
  {
    title: "Transparency",
    text: "Members deserve clear communication about decisions, priorities, campaign resources, and organizational reform.",
  },
  {
    title: "Volunteer Development",
    text: "The party needs practical systems to recruit, train, retain, and empower volunteers between elections.",
  },
];

export default function RenewalReport() {
  return (
    <main className="min-h-screen bg-[#f8f1e7] text-[#111827]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#e85d04]">
          NDP Renewal
        </p>

        <h1 className="mb-8 font-serif text-5xl font-bold leading-tight md:text-7xl">
          Building a stronger, more democratic movement.
        </h1>

        <div className="mb-12 rounded-3xl bg-[#111827] p-8 text-white shadow-xl">
          <p className="font-serif text-2xl leading-relaxed md:text-3xl">
            “I don’t want democracy to die on the last day of every convention.”
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-lg leading-8">
            <p>
              The 2025 federal election exposed serious organizational
              challenges for the NDP. The party faced difficult national
              conditions, but many local campaigns also experienced preventable
              barriers around timing, approvals, resources, and support.
            </p>

            <p>
              Renewal cannot simply mean changing messages after an election
              loss. It must mean rebuilding trust with grassroots members,
              empowering local organizers, and creating structures that allow
              people to participate meaningfully in decision-making.
            </p>

            <p>
              As a candidate, I experienced firsthand how centralization can
              limit local initiative. Faster approvals, earlier candidate
              readiness, stronger regional support, and ongoing member
              consultation would help campaigns respond to local conditions
              more effectively.
            </p>

            <p>
              This renewal work should begin now. With new leadership, members
              have an opportunity to strengthen party democracy, modernize
              organizing, and build a movement capable of fighting for everyday
              Canadians from coast to coast to coast.
            </p>
          </div>

          <aside className="h-fit rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="mb-4 font-serif text-3xl font-bold">
              Core belief
            </h2>
            <p className="text-lg leading-8 text-[#4b5563]">
              Political parties are strongest when members are trusted,
              consulted, organized, and empowered between elections — not only
              mobilized during them.
            </p>
          </aside>
        </div>

        <section>
          <h2 className="mb-8 font-serif text-4xl font-bold">
            Renewal priorities
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme) => (
              <article
                key={theme.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="mb-4 font-serif text-2xl font-bold">
                  {theme.title}
                </h3>
                <p className="leading-7 text-[#4b5563]">{theme.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-[#e85d04] p-8 shadow-xl">
          <h2 className="mb-4 font-serif text-4xl font-bold text-black">
            What comes next?
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-black">
            This page will continue to evolve as a living document for party
            renewal, grassroots democracy, and campaign modernization.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/election-2025"
              className="rounded-2xl bg-black px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105"
            >
              Read Election Reflections →
            </a>

            <a
              href="/get-involved"
              className="rounded-2xl border-2 border-black px-8 py-4 text-lg font-bold text-black transition hover:bg-black hover:text-white"
            >
              Get Involved →
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
