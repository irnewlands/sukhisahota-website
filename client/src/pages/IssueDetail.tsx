import { issueDetails } from "@/data/issues";
import { useLocation } from "wouter";

export default function IssueDetail() {
  const [location] = useLocation();
  const slug = location.split("/").pop() || "";
  const issue = issueDetails[slug as keyof typeof issueDetails];

  if (!issue) {
    return (
      <main className="min-h-screen bg-[#f8f1e7] px-6 py-20">
        <h1 className="font-serif text-5xl font-bold">Issue not found</h1>
        <a href="/issues" className="mt-8 inline-block text-[#e85d04] font-bold">
          ← Back to Issues
        </a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f1e7] text-[#111827]">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <a href="/issues" className="mb-8 inline-block font-bold text-[#e85d04]">
          ← Back to Issues
        </a>

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#e85d04]">
          Issues & Priorities
        </p>

        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-7xl">
          {issue.title}
        </h1>

        <p className="mb-12 text-xl leading-8 text-[#374151]">
          {issue.summary}
        </p>

        <div className="space-y-8">
          {issue.sections.map((section) => (
            <article key={section.heading} className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="mb-4 font-serif text-3xl font-bold">
                {section.heading}
              </h2>
              <p className="text-lg leading-8 text-[#4b5563]">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        {issue.related && issue.related.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-8 font-serif text-4xl font-bold">
              Related Issues
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {issue.related.map((relatedSlug) => {
                const related =
                  issueDetails[relatedSlug as keyof typeof issueDetails];

                return (
                  <a
                    key={relatedSlug}
                    href={`/issues/${relatedSlug}`}
                    className="block rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <h3 className="mb-3 font-serif text-2xl font-bold">
                      {related.title}
                    </h3>

                    <p className="leading-7 text-[#4b5563]">
                      {related.summary}
                    </p>

                    <p className="mt-4 font-bold text-[#e85d04]">
                      Learn more →
                    </p>
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
