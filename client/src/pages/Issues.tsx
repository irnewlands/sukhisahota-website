import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
const issues = [
  {
    title: "Climate & Environment",
    slug: "climate",
    image: "/issues/climate.jpg",
    description:
      "Real climate action means ending fossil fuel subsidies, investing in renewable energy, and protecting communities from climate breakdown.",
  },
  {
    title: "Housing",
    slug: "housing",
    image: "/issues/housing.jpg",
    description:
      "Everyone deserves stable housing; it's a Human right and an everyday part of our essential necessities just to live.",
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    image: "/issues/healthcare.jpg",
    description:
      "Public healthcare must be protected and expanded, including pharmacare, dental care, mental health care, and reproductive healthcare.",
  },
  {
    title: "Economic Security",
    slug: "economy",
    image: "/issues/economy.jpg",
    description:
      "Workers, families, small businesses, and communities should be at the centre of economic decision-making.",
  },
  {
    title: "Democracy & Electoral Reform",
    slug: "democracy",
    image: "/issues/democracy.jpg",
    description:
      "Grassroots democracy must be more than a slogan. People should have real power in political parties and public institutions.",
  },
  {
    title: "Technology & Artificial Intelligence",
    slug: "ai",
    image: "/issues/ai.jpg",
    description:
      "AI and emerging technologies must be governed in the public interest, with transparency and worker protections.",
  },
  {
    title: "LGBTQ+ Rights",
    slug: "lgbtq-rights",
    image: "/issues/lgbtq-rights.jpg",
    description:
      "Queer and trans people deserve safety, dignity, healthcare, legal protection, and full participation in public life.",
  },
  {
    title: "Indigenous Reconciliation",
    slug: "reconciliation",
    image: "/issues/reconciliation.jpg",
    description:
      "Reconciliation requires action, respect for Indigenous rights, clean water, land protection, and meaningful consent.",
  },
  {
    title: "Canadian Sovereignty",
    slug: "sovereignty",
    image: "/issues/sovereignty.jpg",
    description:
      "Canada must protect its public institutions, economic independence, democratic values, and ability to act in the public interest.",
  },
  {
    title: "Social Safety Net",
    slug: "social-safety-net",
    image: "/issues/social-safety-net.jpg",
    description:
      "A strong society is measured by how well it supports people during illness, disability, unemployment, caregiving, grief, and crisis.",
  },
  {
  title: "Affordability",
  slug: "affordability",
  image: "/issues/affordability.jpg",
  description:
    "Reducing the cost of living, making essentials more affordable, and building an economy where people can get ahead.",
},
{
  title: "Toxic Drug Crisis",
  slug: "toxic-drug-crisis",
  image: "/issues/toxic-drug-crisis.jpg",
  description:
    "Treating the toxic drug crisis as a public health emergency with compassion, treatment, recovery, housing, and support.",
},
{
  title: "Disability & Accessibility",
  slug: "disability-accessibility",
  image: "/issues/disability-accessibility.jpg",
  description:
    "Building a society where disabled people have dignity, support, accessibility, and real opportunity.",
},
{
  title: "Misinformation",
  slug: "misinformation",
  image: "/issues/misinformation.jpg",
  description:
    "Protecting democracy through media literacy, platform transparency, trusted journalism, and public accountability.",
},
{
  title: "Culture & Community",
  slug: "culture-community",
  image: "/issues/culture-community.jpg",
  description:
    "Celebrating cultural heritage, supporting gathering spaces, and strengthening community connection across Canada.",
},
{
  title: "Human Rights & Foreign Policy",
  slug: "human-rights-foreign-policy",
  image: "/issues/human-rights-foreign-policy.jpg",
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
  className="block overflow-hidden rounded-3xl bg-white text-inherit no-underline shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
>
  <img
    src={issue.image}
    alt={issue.title}
    className="h-56 w-full object-cover"
  />

  <div className="p-8">
    <h2 className="mb-4 font-serif text-3xl font-bold">
      {issue.title}
    </h2>

    <p className="text-lg leading-8 text-[#4b5563]">
      {issue.description}
    </p>

    <p className="mt-6 font-bold text-[#e85d04]">Learn more →</p>
  </div>
</a>
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
