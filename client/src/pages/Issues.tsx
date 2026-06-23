import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
const issues = [
  {
    title: "Climate & Environment",
    slug: "climate",
    image: "/issues/climate.jpg",
    credit: "Photo: Mike Benna / Unsplash",
    creditUrl: "https://unsplash.com/@mbenna?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    description:
      "Real climate action means ending fossil fuel subsidies, investing in renewable energy, and protecting communities from climate breakdown.",
  },
  {
    title: "Housing",
    slug: "housing",
    image: "/issues/housing.jpg",
    credit: "Photo: Chelaxy Designs / Unsplash",
    creditUrl: "https://unsplash.com/@chelaxydp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    description:
      "Everyone deserves stable housing; it's a Human right and an everyday part of our essential necessities just to live.",
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    image: "/issues/healthcare.jpg",
    credit: "Photo: Albert Stoynov / Unsplash",
    creditUrl: "https://unsplash.com/@albertstoynov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    description:
      "Public healthcare must be protected and expanded, including pharmacare, dental care, mental health care, and reproductive healthcare.",
  },
  {
    title: "Economic Security",
    slug: "economy",
    image: "/issues/economy.jpg",
    credit: "Photo: John McArthur / Unsplash",
    creditUrl: "https://unsplash.com/@snowjam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    description:
      "Workers, families, small businesses, and communities should be at the centre of economic decision-making.",
  },
  {
    title: "Democracy & Electoral Reform",
    slug: "democracy",
    image: "/issues/democracy.jpg",
    credit: "Photo: Aleksandr Galenko / Unsplash",
    creditUrl: "https://unsplash.com/@aleks_g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    description:
      "Grassroots democracy must be more than a slogan. People should have real power in political parties and public institutions.",
  },
  {
    title: "Technology & Artificial Intelligence",
    slug: "ai",
    image: "/issues/ai.jpg",
    credit: "Photo: Igor Omilaev / Unsplash",
    creditUrl: "https://unsplash.com/@omilaev?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    description:
      "AI and emerging technologies must be governed in the public interest, with transparency and worker protections.",
  },
  {
    title: "LGBTQ+ Rights",
    slug: "lgbtq-rights",
    image: "/issues/lgbtq-rights.jpg",
    credit: "Photo: Hannah Voggenhuber / Unsplash",
    creditUrl: "https://unsplash.com/@han1234i?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    description:
      "Queer and trans people deserve safety, dignity, healthcare, legal protection, and full participation in public life.",
  },
  {
    title: "Indigenous Reconciliation",
    slug: "reconciliation",
    image: "/issues/reconciliation.jpg",
    credit: "Photo: Rohit Tandon / Unsplash",
    creditUrl: "https://unsplash.com/@sepoys?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    description:
      "Reconciliation requires action, respect for Indigenous rights, clean water, land protection, and meaningful consent.",
  },
  {
    title: "Canadian Sovereignty",
    slug: "sovereignty",
    image: "/issues/sovereignty.jpg",
    credit: "Photo: Jason Hafso / Unsplash",
    creditUrl: "https://unsplash.com/@jasonhafso?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    description:
      "Canada must protect its public institutions, economic independence, democratic values, and ability to act in the public interest.",
  },
  {
    title: "Social Safety Net",
    slug: "social-safety-net",
    image: "/issues/social-safety-net.jpg",
    credit: "Photo: John Cameron / Unsplash",
    creditUrl: "https://unsplash.com/@john_cameron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    description:
      "A strong society is measured by how well it supports people during illness, disability, unemployment, caregiving, grief, and crisis.",
  },
  {
  title: "Affordability",
  slug: "affordability",
  image: "/issues/affordability.jpg",
  credit: "Photo: Victoriano Izquierdo / Unsplash",
  creditUrl: "https://unsplash.com/@victoriano?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  description:
    "Reducing the cost of living, making essentials more affordable, and building an economy where people can get ahead.",
},
{
  title: "Toxic Drug Crisis",
  slug: "toxic-drug-crisis",
  image: "/issues/toxic-drug-crisis.jpg",
  credit: "Photo: Jonathan Gonzalez / Unsplash",
  creditUrl: "https://unsplash.com/@jonogonzo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  description:
    "Treating the toxic drug crisis as a public health emergency with compassion, treatment, recovery, housing, and support.",
},
{
  title: "Disability & Accessibility",
  slug: "disability-accessibility",
  image: "/issues/disability-accessibility.jpg",
  credit: "Photo: Jon Tyson / Unsplash",
  creditUrl: "https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  description:
    "Building a society where disabled people have dignity, support, accessibility, and real opportunity.",
},
{
  title: "Misinformation",
  slug: "misinformation",
  image: "/issues/misinformation.jpg",
  credit: "Photo: Hartono Creative Studio / Unsplash",
  creditUrl: "https://unsplash.com/@hartonocreativestudio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  description:
    "Protecting democracy through media literacy, platform transparency, trusted journalism, and public accountability.",
},
{
  title: "Culture & Community",
  slug: "culture-community",
  image: "/issues/culture-community.jpg",
  credit: "Photo: Hardial Aujla / Unsplash",
  creditUrl: "https://unsplash.com/@hardialsingh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  description:
    "Celebrating cultural heritage, supporting gathering spaces, and strengthening community connection across Canada.",
},
{
  title: "Human Rights & Foreign Policy",
  slug: "human-rights-foreign-policy",
  image: "/issues/human-rights-foreign-policy.jpg",
  credit: "Photo: Lucas George Wendt / Unsplash",
  creditUrl: "https://unsplash.com/@lucasgwendt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
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
    className="w-full h-auto object-contain"
  />

  {issue.credit && (
  <div className="px-8 pt-3">
    <a
      href={issue.creditUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-[#6b7280] hover:text-[#e85d04]"
    >
      {issue.credit}
    </a>
  </div>
)}
  
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
          ))}
        </div>
      </section>
     </main>

    <SiteFooter />
  </>
);
}
