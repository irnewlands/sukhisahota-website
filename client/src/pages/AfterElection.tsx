import { isFrench, isPunjabi, isChinese, isTagalog, copy } from "@/lib/locale";
import { useEffect } from "react";
import { ArrowRight, CalendarDays, Download, ExternalLink, FileText, MessageCircle, ShieldCheck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const showEnglishDownloadLabels = isPunjabi || isChinese || isTagalog;

const PARTICIPATION_FORMS = [
  {
    id: "member-survey",
    title: copy("Independent member survey"),
    description:
      copy("Allow about 10–15 minutes. Participation consent is required; all 24 substantive questions are optional. Please avoid including identifying details in your answers."),
    url: "https://forms.gle/tCcxScxaaovLWBtf9",
    embedUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfOsZb03dth70HV1qHs0kNo6CkN2vGQUdD1AeVExuhUYLhxWA/viewform?embedded=true",
    linkLabel: copy("Open the survey in a new tab"),
    frameTitle: copy("Independent BC NDP Member Survey — Sukhi Sahota"),
  },
  {
    id: "listening-contact",
    title: copy("Request a listening conversation"),
    description:
      copy("This separate contact form is optional. You can request a conversation whether or not you complete the survey. Your contact details will not be matched with survey answers or used to subscribe you to campaign communications."),
    url: "https://forms.gle/vNLjTxaqj8rfWuu59",
    embedUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdu6mZDDCJZAtyUAVxmaY1SDYGzXdAyvamcIVlEUlIgvZtK2Q/viewform?embedded=true",
    linkLabel: copy("Open the contact form in a new tab"),
    frameTitle: copy("Listening Conversation with Sukhi Sahota — Personal Initiative"),
  },
] as const;

export default function AfterElection() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = copy("After the Defeat | Sukhi Sahota's Reflections on the 2026 BC Election");
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-cream text-charcoal">
        <header className="relative overflow-hidden border-b border-orange/20 bg-[#f8f1e7]">
          <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-orange/10 blur-3xl" aria-hidden="true" />
          <div className="container relative py-16 md:py-24">
            <div className="mb-7 inline-flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#ffd400] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#641b25]">
                {copy("Personal reflection")}
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/65">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {copy("October 25, 2026 · Sukhi Sahota")}
              </span>
            </div>
            <h1 className="max-w-5xl font-serif text-5xl font-bold leading-[1.06] tracking-tight md:text-7xl">
              {(isPunjabi || isChinese || isTagalog) ? copy("After the defeat") : <>{copy("After the")}{" "}<span className="text-orange">{copy("Defeat.")}</span></>}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-charcoal/80 md:text-2xl md:leading-10">
              {copy("My frustrations, my questions, and why I believe the BC NDP must listen carefully to its grassroots.")}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#my-reflections"
                className="inline-flex items-center gap-2 rounded-xl bg-charcoal px-6 py-3 font-semibold text-white no-underline transition hover:bg-orange"
              >
                {copy("Read my reflections")}{" "}<ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#share-your-voice"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-charcoal px-6 py-3 font-semibold text-charcoal no-underline transition hover:bg-white"
              >
                {copy("Take the member survey")}
              </a>
              <a
                href="#election-results-analysis"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-orange px-6 py-3 font-semibold text-charcoal no-underline transition hover:bg-white"
              >
                {copy("Read the riding analysis")}{" "}<FileText className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </header>

        <section id="my-reflections" aria-label={copy("My reflections")} className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-7 text-[1.08rem] leading-8 text-charcoal/85">
            <p className="font-serif text-2xl font-semibold leading-9 text-charcoal md:text-3xl md:leading-10">
              {copy("October's election result was devastating for the BC NDP. I'm disappointed, frustrated, and deeply concerned about what comes next.")}
            </p>
            <p>
              {copy("But disappointment alone gets us nowhere. If we care about this movement, we have to be willing to ask difficult questions, listen to uncomfortable answers, and learn from what happened.")}
            </p>
            <p>
              {copy("The initial count points to a substantial defeat, and David Eby has announced that he will step down as party leader. At the time of writing, these electoral results are still preliminary: Elections BC has scheduled its final count for November 6–10. That distinction matters, even as the wider political consequences become clear.")}
            </p>

            <h2 className="pt-6 font-serif text-3xl font-bold leading-tight text-charcoal md:text-4xl">
              {copy("My frustration goes beyond election night")}
            </h2>
            <p>
              {copy("One of my strongest convictions is that a political party should belong to the people who sustain it: its members, volunteers, local organizers, and the communities it seeks to represent.")}
            </p>
            <p>
              {copy("Membership must mean more than being asked to donate, canvass, or defend decisions already made. It should mean having a genuine voice in a party's direction, policies, leadership, and internal culture.")}
            </p>
            <p>
              {copy("I'm frustrated by what I see as too much distance between grassroots voices and decisions made at the top. I don't claim that everyone shares my experience. In fact, hearing from people who disagree is an essential part of what I want to do next.")}
            </p>

            <blockquote className="my-10 border-l-4 border-orange bg-white px-7 py-8 font-serif text-2xl font-semibold italic leading-9 text-charcoal shadow-sm">
              {copy("Replacing a leader is not, by itself, the same thing as renewing a movement.")}
            </blockquote>

            <h2 className="pt-3 font-serif text-3xl font-bold leading-tight text-charcoal md:text-4xl">
              {copy("We deserve an honest examination")}
            </h2>
            <p>
              {copy("The decision to call an election two years early was consequential. We should examine that decision honestly, alongside the campaign's priorities, the issues voters raised, and the extent to which people felt heard.")}
            </p>
            <p>
              {copy("This cannot simply be a search for one person to blame or one convenient explanation. We should recognize what worked, thank the people who gave their time in good faith, and listen especially carefully to communities whose experiences challenge our assumptions.")}
            </p>

            <h2 className="pt-6 font-serif text-3xl font-bold leading-tight text-charcoal md:text-4xl">
              {copy("The future cannot be decided from the top down")}
            </h2>
            <p>
              {copy("A leadership change creates an opportunity to discuss the party's values, internal democracy, accountability, policy development, and relationship with its grassroots.")}
            </p>
            <p>
              {copy("I believe those conversations should be open, respectful, and grounded in listening. I don't pretend to have all the answers, and this page is not an announcement of a leadership campaign.")}
            </p>
            <p>
              {copy("Before anyone rushes to propose a solution, I want to better understand the range of experiences and perspectives within and around the BC NDP — including positive experiences, criticism, disagreement, and fresh ideas.")}
            </p>
          </div>
        </section>

        <section id="election-results-analysis" aria-labelledby="election-analysis-heading" className="scroll-mt-24 border-y border-orange/20 bg-white py-16 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-orange">{copy("2026 election results")}</p>
              <h2 id="election-analysis-heading" className="font-serif text-3xl font-bold leading-tight text-charcoal md:text-4xl">
                {copy("Preliminary riding-by-riding analysis")}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-charcoal/80">
                {copy("Explore how the BC NDP, Conservatives and Greens performed in all 93 ridings compared with the certified 2024 election results. The report examines vote-share swings, regional patterns, riding leads and ballots counted.")}
              </p>
              <p className="mt-4 rounded-lg border-l-4 border-orange bg-[#fff6e9] px-5 py-4 text-sm leading-6 text-charcoal/80">
                <strong>{copy("Preliminary snapshot:")}</strong>{" "}{copy("Elections BC final count in progress. Snapshot November 6, 2026 at 7:00 p.m. PCT: BC NDP 707,284 votes (37.35%, leading in 28 ridings), Conservatives 908,337 (47.96%, leading in 63), and BC Greens 210,642 (11.12%, leading in 2). Compared with the November 5 revised initial count, 99,700 more ballots are now considered; no riding's leading party changed between these snapshots. Results remain uncertified and may change as counting continues.")}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a href={isFrench ? "/election-data/Analyse_preliminaire_elections_CB_2026_fr-CA.pdf" : "/election-data/BC_Election_2026_Preliminary_Analysis.pdf"} target="_blank" rel="noopener noreferrer"
                   className="group flex flex-col justify-between rounded-2xl border border-charcoal/15 bg-[#f8f1e7] p-6 no-underline transition hover:border-orange hover:shadow-md">
                  <span className="flex items-center gap-3 font-serif text-xl font-bold text-charcoal">
                    <FileText className="h-6 w-6 shrink-0 text-orange" aria-hidden="true" />{" "}{copy("Summary report (PDF)")}
                  </span>
                  <span className="mt-3 text-sm leading-6 text-charcoal/75">
                    {copy("Six-page report covering provincial results, regional vote-share shifts, changes since November 5 and close races.")}
                  </span>
                  {showEnglishDownloadLabels && <span className="mt-2 text-sm text-charcoal/75">{copy("Available in English")}</span>}
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-orange">{copy("View PDF")}{" "}<ExternalLink className="h-4 w-4" aria-hidden="true" /></span>
                </a>
                <a href={isFrench ? "/election-data/Analyse_circonscriptions_CB_2026_fr-CA.xlsx" : "/election-data/BC_Election_2026_Riding_Analysis_Preliminary.xlsx"} download
                   className="group flex flex-col justify-between rounded-2xl border border-charcoal/15 bg-[#f8f1e7] p-6 no-underline transition hover:border-orange hover:shadow-md">
                  <span className="flex items-center gap-3 font-serif text-xl font-bold text-charcoal">
                    <Download className="h-6 w-6 shrink-0 text-orange" aria-hidden="true" />{" "}{copy("Full riding analysis (Excel)")}
                  </span>
                  <span className="mt-3 text-sm leading-6 text-charcoal/75">
                    {copy("Download the nine-sheet workbook with all 93 ridings, 2024 comparisons, changes since November 5 and source notes.")}
                  </span>
                  {showEnglishDownloadLabels && <span className="mt-2 text-sm text-charcoal/75">{copy("Available in English")}</span>}
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-orange">{copy("Download Excel")}{" "}<Download className="h-4 w-4" aria-hidden="true" /></span>
                </a>
              </div>
              <p className="mt-6 text-sm leading-6 text-charcoal/65">
                {copy("Independent analysis based on official")}{" "}<a className="font-semibold text-orange underline" href="https://results.elections.bc.ca/" target="_blank" rel="noopener noreferrer">{copy("Elections BC results")}</a>.{" "}{copy("It is not an official Elections BC publication.")}
              </p>
            </div>
          </div>
        </section>

        <section id="share-your-voice" className="bg-charcoal py-16 text-white md:py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ffd400]">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {copy("A conversation worth having")}
              </p>
              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                {copy("What do you think?")}
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
                {copy("You can now complete")}{" "}<strong>{copy("BC NDP Member Voices: Reflections After the 2026 Election")}</strong>{copy(", an independent survey for current and former members, volunteers, and supporters to reflect on the election, party processes, priorities, and possible improvements.")}
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/85">
                {copy("You do not have to agree with my views to take part. I want to hear the positive experiences alongside the frustrations, and the ideas that may help inform a better conversation.")}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#member-survey" className="inline-flex items-center gap-2 rounded-xl bg-[#ffd400] px-5 py-3 font-bold text-[#641b25] no-underline transition hover:bg-[#ffe044]">
                  {copy("Complete the survey")}{" "}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#listening-contact" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-bold text-white no-underline transition hover:bg-white/10">
                  {copy("Request a conversation")}{" "}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              {(isFrench || isPunjabi || isChinese || isTagalog) && <p className="mt-6 text-sm text-white/85">{copy("The forms below are available in English.")}</p>}
              <div className="mt-9 space-y-10">
                {PARTICIPATION_FORMS.map((form) => (
                  <section key={form.id} id={form.id} aria-labelledby={`${form.id}-heading`} className="scroll-mt-28 overflow-hidden rounded-2xl border border-white/20 bg-white text-charcoal shadow-sm">
                    <div className="p-6 md:p-8">
                      <h3 id={`${form.id}-heading`} className="font-serif text-2xl font-bold md:text-3xl">
                        {form.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-charcoal/80">
                        {form.description}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-charcoal/70">
                        {copy("Complete the form below, or open it in a new tab if you prefer more space.")}
                      </p>
                      <a
                        href={form.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-charcoal px-5 py-3 font-semibold text-white no-underline transition hover:bg-orange"
                      >
                        {form.linkLabel}
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                    <iframe
                      src={form.embedUrl}
                      title={form.frameTitle}
                      width="100%"
                      height="1000"
                      loading="lazy"
                      className="block h-[80svh] min-h-[34rem] w-full border-0 bg-white sm:min-h-[42rem]"
                    />
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="privacy-heading" className="bg-[#f8f1e7] py-14 md:py-20">
          <div className="container">
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[auto_1fr] md:gap-7">
              <ShieldCheck className="h-10 w-10 text-orange" aria-hidden="true" />
              <div>
                <h2 id="privacy-heading" className="font-serif text-3xl font-bold text-charcoal">
                  {copy("Independent, voluntary, and respectful of privacy")}
                </h2>
                <p className="mt-4 leading-8 text-charcoal/80">
                  {copy("This is my personal initiative, not a survey commissioned or endorsed by the BC NDP, SCOEE, or any leadership candidacy. Participation is voluntary. Consent is required to submit either form; all 24 substantive survey questions are optional.")}
                </p>
                <p className="mt-4 leading-8 text-charcoal/80">
                  {copy("The survey does not request names or contact details. Submission timestamps and free-text answers may nevertheless identify someone, so absolute anonymity cannot be guaranteed. Responses will be reviewed as aggregate themes and counts, with quotations checked for identifying details. They will not be attached to individual political-opinion profiles.")}
                </p>
                <p className="mt-4 leading-8 text-charcoal/80">
                  {copy("Anyone who wishes to request a listening conversation can use the separate, optional contact form above. Contact information will not be matched with survey answers or treated as consent to receive campaign communications.")}
                </p>
                <p className="mt-5 text-sm text-charcoal/65">
                  {copy("Each Google Form explains its collection, storage, and retention arrangements. For privacy questions or requests, contact me at")}{" "}
                  <a href="mailto:info@sukhisahota.ca" className="font-semibold text-orange underline underline-offset-4">info@sukhisahota.ca</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label={copy("Sources and election results")} className="container py-10">
          <div className="mx-auto max-w-4xl text-sm leading-7 text-charcoal/65">
            <p>
              <strong>{copy("Election status:")}</strong>{" "}{copy("Results described here are preliminary as of October 25, 2026.")}{" "}
              <a className="font-semibold text-orange underline" href="https://elections.bc.ca/2026-provincial-election/" target="_blank" rel="noopener noreferrer">
                {copy("Elections BC official information")}
              </a>
              {" · "}
              <a className="font-semibold text-orange underline" href="https://vancouver.citynews.ca/2026/10/24/david-eby-steps-down-bc-ndp-leader/" target="_blank" rel="noopener noreferrer">
                {copy("Reporting on Eby's resignation announcement")}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
