import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
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
  {
    title: "Economic Security",
    slug: "economy",
    description:
      "Workers, families, small businesses, and communities should be at the centre of economic decision-making.",
  },
  {
    title: "Democracy & Electoral Reform",
    slug: "democracy",
    description:
      "Grassroots democracy must be more than a slogan. People should have real power in political parties and public institutions.",
  },
  {
    title: "Technology & Artificial Intelligence",
    slug: "ai",
    description:
      "AI and emerging technologies must be governed in the public interest, with transparency and worker protections.",
  },
  {
    title: "LGBTQ+ Rights",
    slug: "lgbtq-rights",
    description:
      "Queer and trans people deserve safety, dignity, healthcare, legal protection, and full participation in public life.",
  },
  {
    title: "Indigenous Reconciliation",
    slug: "reconciliation",
    description:
      "Reconciliation requires action, respect for Indigenous rights, clean water, land protection, and meaningful consent.",
  },
  {
    title: "Canadian Sovereignty",
    slug: "sovereignty",
    description:
      "Canada must protect its public institutions, economic independence, democratic values, and ability to act in the public interest.",
  },
  {
    title: "Social Safety Net",
    slug: "social-safety-net",
    description:
      "A strong society is measured by how well it supports people during illness, disability, unemployment, caregiving, grief, and crisis.",
  },
  {
  title: "Affordability",
  slug: "affordability",
  description:
    "Reducing the cost of living, making essentials more affordable, and building an economy where people can get ahead.",
},
{
  title: "Toxic Drug Crisis",
  slug: "toxic-drug-crisis",
  description:
    "Treating the toxic drug crisis as a public health emergency with compassion, treatment, recovery, housing, and support.",
},
{
  title: "Disability & Accessibility",
  slug: "disability-accessibility",
  description:
    "Building a society where disabled people have dignity, support, accessibility, and real opportunity.",
},
{
  title: "Misinformation",
  slug: "misinformation",
  description:
    "Protecting democracy through media literacy, platform transparency, trusted journalism, and public accountability.",
},
{
  title: "Culture & Community",
  slug: "culture-community",
  description:
    "Celebrating cultural heritage, supporting gathering spaces, and strengthening community connection across Canada.",
},
{
  title: "Human Rights & Foreign Policy",
  slug: "human-rights-foreign-policy",
  description:
    "Putting human rights, international law, peace, diplomacy, and humanitarian values at the centre of Canada’s role in the world.",
},
];

export default function Issues() {
return (
  <>
    <SiteHeader />
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
              className="block rounded-3xl bg-white p-8 text-inherit no-underline shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="mb-4 font-serif text-3xl font-bold">
                {issue.title}
              </h2>

              <p className="text-lg leading-8 text-[#4b5563]">
                {issue.description}
              </p>

              <p className="mt-6 font-bold text-[#e85d04]">Learn more →</p>
            </a>
          ))}
        </div>
      </section>
     </main>

    <SiteFooter />
  </>
);
}
