const issues = [
  {
    title: "Climate & Environment",
    slug: "climate",
    description:
      "Real climate action means ending fossil fuel subsidies, investing in renewable energy, and protecting communities from climate breakdown.",
  },
  {
    title: "Housing & Affordability",
    slug: "housing",
    description:
      "Everyone deserves stable housing, affordable groceries, and an economy that works for working people.",
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    description:
      "Public healthcare must be protected and expanded, including pharmacare, dental care, mental health care, and reproductive healthcare.",
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
            <a
              key={issue.title}
              href={`/issues/${issue.slug}`}
              className="block rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl no-underline text-inherit"
            >
              <h2 className="mb-4 font-serif text-3xl font-bold">
                {issue.title}
              </h2>

              <p className="text-lg leading-8 text-[#4b5563]">
                {issue.description}
              </p>

              <p className="mt-6 font-bold text-[#e85d04]">
                Learn more →
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
