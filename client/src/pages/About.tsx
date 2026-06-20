import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
export default function About() {
  return (
     <>
    <SiteHeader />
    <main className="min-h-screen bg-[#f8f1e7] text-[#111827]">
      ...existing page content...
    </main>
    <SiteFooter />
  </>
);
    <main className="min-h-screen bg-[#f8f1e7] text-[#111827]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#e85d04]">
          About Sukhi
        </p>

        <h1 className="mb-8 font-serif text-5xl font-bold leading-tight md:text-7xl">
          A life shaped by resilience, community, and public service.
        </h1>

        <div className="mb-12 rounded-3xl bg-[#111827] p-8 text-white shadow-xl">
          <p className="font-serif text-2xl leading-relaxed md:text-3xl">
            “It’s time for us to be truly organized from a grassroots level.”
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-lg leading-8">
            <p>
              My name is Sukhi Sahota, and I ran as the NDP candidate for
              Vancouver Granville in the last federal election.
            </p>

            <p>
              I am originally from the UK and was raised in a single-parent
              family with two siblings who have learning difficulties. I have
              fought my whole life for my mother, my brother, my sister, and my
              grandmother.
            </p>

            <p>
              I was brought up as a Jehovah’s Witness, but I was excommunicated
              as a young adult when I embraced my identity as a member of the
              LGBTQ+ community. I lost every friend I had up to that point in my
              life. I was alone and isolated, and I had to learn who I really was.
            </p>

            <p>
              After working and studying Accounting and Finance for a few years,
              I wanted to explore my identity and my connection to the world. That
              journey took me from the UK to Japan, Australia, New Zealand, Hong
              Kong, and eventually Canada.
            </p>

            <p>
              I have faced joblessness, discrimination, grief, housing insecurity,
              and food insecurity. These experiences shaped my belief that
              politics must be grounded in compassion, dignity, and practical
              support for everyday people.
            </p>

            <p>
              My community work has included volunteering with the Richmond Food
              Bank, where I helped support the launch of a food pantry so people
              could access food outside regular hours.
            </p>

            <p>
              I enjoy hiking and landscape photography, and I am grateful for the
              land, water, and air we depend on. That gratitude also makes me
              deeply aware of the climate emergency we face.
            </p>

            <p>
              I believe in strong public services, grassroots democracy,
              union rights, climate responsibility, and building a politics that
              listens to ordinary people.
            </p>
          </div>

          <aside className="h-fit rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="mb-4 font-serif text-3xl font-bold">
              What guides my work
            </h2>

            <ul className="space-y-4 text-lg">
              <li>Grassroots democracy</li>
              <li>Social and economic justice</li>
              <li>Climate action</li>
              <li>Public services</li>
              <li>Union rights</li>
              <li>Community-led organizing</li>
            </ul>
          </aside>
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <a
            href="/autobiography"
            className="rounded-2xl bg-[#e85d04] px-8 py-4 text-lg font-bold text-black shadow-lg transition hover:scale-105"
          >
            Read Full Autobiography →
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
  );
}
