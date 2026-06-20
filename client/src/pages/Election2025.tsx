import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
export default function Election2025() {
  return (
    <>
     <SiteHeader />

    <main className="min-h-screen bg-[#f8f1e7] text-[#111827]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#e85d04]">
          Election 2025
        </p>

        <h1 className="mb-8 font-serif text-5xl font-bold leading-tight md:text-7xl">
          Lessons from Vancouver Granville.
        </h1>

        <div className="mb-12 rounded-3xl bg-[#111827] p-8 text-white shadow-xl">
          <p className="font-serif text-2xl leading-relaxed md:text-3xl">
            “Despite difficult circumstances, our campaign showed what is
            possible when grassroots members step forward.”
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-lg leading-8">
            <p>
              I ran as the NDP candidate for Vancouver Granville in the 2025
              federal election, becoming the candidate only days after the writ
              was dropped and less than five weeks before election day.
            </p>

            <p>
              We started with fewer than ten volunteers, limited time, and a
              campaign that had to be built quickly. Despite those challenges,
              we worked hard to run a visible, values-driven campaign rooted in
              community, compassion, and democratic socialism.
            </p>

            <p>
              Given the circumstances, I was proud that Vancouver Granville
              achieved one of the stronger NDP vote shares among non-incumbent
              Metro Vancouver ridings.
            </p>

            <p>
              The campaign also revealed serious challenges around
              centralization, candidate approval timelines, campaign support,
              translation approvals, design approvals, and the need for stronger
              local campaign readiness.
            </p>

            <p>
              These experiences shaped my belief that we need to rebuild from
              the grassroots, empower Electoral District Associations, support
              candidates earlier, and listen more closely to members and local
              organizers.
            </p>

            <p>
              Election losses should not simply trigger temporary reflection.
              They should lead to democratic renewal, better organizing, and a
              party culture where members’ voices continue to matter long after
              convention ends.
            </p>
          </div>

          <aside className="h-fit rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="mb-4 font-serif text-3xl font-bold">
              Key takeaways
            </h2>

            <ul className="space-y-4 text-lg leading-7">
              <li>Candidate readiness must begin earlier.</li>
              <li>Local EDAs need more support and autonomy.</li>
              <li>Approvals should be faster and less centralized.</li>
              <li>Grassroots members need ongoing consultation.</li>
              <li>Campaigns need practical tools before the writ drops.</li>
            </ul>
          </aside>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#e85d04]">
              Campaign
            </p>
            <h3 className="font-serif text-3xl font-bold">5 weeks</h3>
            <p className="mt-3 leading-7 text-[#4b5563]">
              Less than five weeks to build and run the campaign.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#e85d04]">
              Volunteers
            </p>
            <h3 className="font-serif text-3xl font-bold">Under 10</h3>
            <p className="mt-3 leading-7 text-[#4b5563]">
              The campaign began with a very small volunteer base.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#e85d04]">
              Lesson
            </p>
            <h3 className="font-serif text-3xl font-bold">Organize early</h3>
            <p className="mt-3 leading-7 text-[#4b5563]">
              Strong local campaigns need support long before election day.
            </p>
          </div>
        </section>

        <div className="mt-14 flex flex-wrap gap-4">
          <a
            href="/renewal-report"
            className="rounded-2xl bg-[#e85d04] px-8 py-4 text-lg font-bold text-black shadow-lg transition hover:scale-105"
          >
            Read Renewal Ideas →
          </a>

          <a
            href="/get-involved"
            className="rounded-2xl border-2 border-[#111827] px-8 py-4 text-lg font-bold text-[#111827] transition hover:bg-[#111827] hover:text-white"
          >
            Get Involved →
          </a>
        </div>
      </section>
    </main>

<SiteFooter />
</>
);
}
