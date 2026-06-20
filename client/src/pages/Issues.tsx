const issues = [
  {
    title: "Climate & Environment",
    description:
      "Real climate action means ending fossil fuel subsidies, investing in renewable energy, and protecting communities from climate breakdown.",
  },
  {
    title: "Housing & Affordability",
    description:
      "Everyone deserves stable housing, affordable groceries, and an economy that works for working people, not just investors and speculators.",
  },
  {
    title: "Healthcare",
    description:
      "Public healthcare must be protected and expanded, including pharmacare, dental care, mental health care, and reproductive healthcare.",
  },
  {
    title: "Social Safety Net",
    description:
      "A strong society is measured by how well it supports people during illness, disability, unemployment, caregiving, grief, and crisis.",
  },
  {
    title: "Economic Security",
    description:
      "We need an economy where workers are respected, wealth is taxed fairly, and public investment builds long-term community prosperity.",
  },
  {
    title: "Democracy & Electoral Reform",
    description:
      "Grassroots democracy must be more than a slogan. People should have real power in political parties, communities, and public institutions.",
  },
  {
    title: "Technology & Artificial Intelligence",
    description:
      "AI and emerging technologies must be governed in the public interest, with transparency, worker protections, and democratic accountability.",
  },
  {
    title: "LGBTQ+ Rights",
    description:
      "Queer and trans people deserve safety, dignity, healthcare, legal protection, and full participation in public life.",
  },
  {
    title: "Indigenous Reconciliation",
    description:
      "Reconciliation requires action, respect for Indigenous rights, clean water, land protection, and meaningful consent.",
  },
  {
    title: "Canadian Sovereignty",
    description:
      "Canada must protect its public institutions, economic independence, democratic values, and ability to act in the public interest.",
  },
];

export default function Issues() {
  return (
    <main className="min-h-screen bg-[#f8f1e7] text-[#111827]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#e85d04]">
          Issues & Priorities
        </p>

        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-7xl">
          What I stand for.
        </h1>

        <p className="mb-12 max-w-3xl text-xl leading-8 text-[#374151]">
          These priorities reflect the issues that shaped my campaign, my lived
          experience, and my belief that politics should be grounded in care,
          fairness, climate responsibility, and grassroots democracy.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {issues.map((issue) => (
            <article
              key={issue.title}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="mb-4 font-serif text-3xl font-bold">
                {issue.title}
              </h2>

              <p className="text-lg leading-8 text-[#4b5563]">
                {issue.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
