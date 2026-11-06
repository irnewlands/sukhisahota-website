import { copy, language, isFrench, isPunjabi, isChinese, isTagalog } from "@/lib/locale";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ExternalLink, LockKeyhole, Mail, MapPin, Phone, Search } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { HELP_CATEGORIES, HELP_RESOURCES, type HelpCategory, type HelpResource } from "@/data/helpResources";

// General help requests are collected separately from campaign communications.
const CONTACT_URL = "https://docs.google.com/forms/d/e/1FAIpQLScEa8lAJeTUmSxbQkCHEUj7wtpWfStpPpAJVbG_w4jGgjGqaQ/viewform";

function ResourceCard({ resource }: { resource: HelpResource }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-charcoal/15 bg-white p-6 shadow-sm md:p-7" aria-labelledby={`resource-${resource.id}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[#a13a08]">{resource.kind}</p>
      <h3 id={`resource-${resource.id}`} className="font-serif text-2xl font-bold leading-tight">{resource.name}</h3>
      <p className="mt-4 leading-7 text-charcoal/80">{resource.description}</p>
      <dl className="mt-6 space-y-5 text-sm leading-6">
        <div>
          <dt className="mb-1 flex items-center gap-2 font-bold"><Phone className="h-4 w-4 shrink-0 text-[#a13a08]" aria-hidden="true" />{copy("Phone")}</dt>
          <dd className="space-y-1">
            {resource.phones.map((phone) => (
              <p key={phone.number}><a className="font-semibold text-[#933708] underline underline-offset-4" href={`tel:${phone.number.replace(/[^0-9+]/g, "")}`}>{phone.number}</a><span className="text-charcoal/70"> · {phone.label}</span></p>
            ))}
          </dd>
        </div>
        <div>
          <dt className="mb-1 flex items-center gap-2 font-bold"><Mail className="h-4 w-4 shrink-0 text-[#a13a08]" aria-hidden="true" />{copy("Email / online intake")}</dt>
          <dd>
            {resource.email && <a className="break-all font-semibold text-[#933708] underline underline-offset-4" href={`mailto:${resource.email}`}>{resource.email}</a>}
            <p className={resource.email ? "mt-1 text-charcoal/70" : "text-charcoal/70"}>{resource.emailNote}</p>
          </dd>
        </div>
        <div>
          <dt className="mb-1 flex items-center gap-2 font-bold"><MapPin className="h-4 w-4 shrink-0 text-[#a13a08]" aria-hidden="true" />{copy("Location / access")}</dt>
          <dd><p>{resource.address}</p><p className="mt-1 text-charcoal/70">{resource.accessNote}</p></dd>
        </div>
      </dl>
      <div className="mt-auto pt-6">
        <a href={resource.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-[#933708] underline underline-offset-4">{copy("Official website & intake details")}<ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" /><span className="sr-only">{" "}{copy("(opens in a new tab)")}</span></a>
        <p className="mt-1 break-all text-xs leading-5 text-charcoal/65">{resource.website.replace(/^https?:\/\/(www\.)?/, "")}</p>
        {resource.sources?.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="mt-2 block text-xs text-charcoal/70 underline underline-offset-4">{source.label}<span className="sr-only">{" "}{copy("(opens in a new tab)")}</span></a>)}
      </div>
    </article>
  );
}

export default function ResourcesForHelp() {
  const [category, setCategory] = useState<HelpCategory>("All resources");
  const [search, setSearch] = useState("");
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [careerPasswordOpen, setCareerPasswordOpen] = useState(false);
  const [showCareerPassword, setShowCareerPassword] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = copy("Resources for Help | Vancouver Support & Advocacy | Sukhi Sahota");
    return () => { document.title = previousTitle; };
  }, []);

  const resources = useMemo(() => {
    const term = search.trim().toLocaleLowerCase();
    return HELP_RESOURCES.filter((resource) =>
      (category === "All resources" || resource.category === category) &&
      (!term || [resource.name, resource.description, resource.kind, copy(resource.category), resource.category, resource.address].join(" ").toLocaleLowerCase().includes(term))
    );
  }, [category, search]);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-cream text-charcoal">
        <header className="border-b border-orange/20 bg-[#f8f1e7]">
          <div className="container py-14 md:py-20">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#a13a08]">{copy("Community care · Vancouver & BC")}</p>
            <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl">{(isPunjabi || isChinese || isTagalog) ? copy("Resources for Help") : <>{copy("Resources")}<br className="hidden sm:block" />{" "}{copy("for Help")}</>}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-charcoal/80">{copy("Find someone who can help you take the next step.")}</p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-charcoal/80">{copy("A practical directory of advocacy organizations, community supports and public services for Vancouver residents. You can contact these services directly.")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#help-directory" className="inline-flex items-center gap-2 rounded-xl bg-charcoal px-6 py-3 font-semibold text-white no-underline hover:bg-[#a13a08]">{copy("Find a service")}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              <a href="#asked-sukhi" className="inline-flex items-center gap-2 rounded-xl border-2 border-charcoal px-6 py-3 font-semibold text-charcoal no-underline hover:bg-white">{copy("Have you asked Sukhi for help?")}</a>
            </div>
          </div>
        </header>

        <section className="container py-10" aria-label={copy("Getting started")}>
          <div className="grid gap-6 rounded-2xl border border-charcoal/15 bg-white p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
            <div>
              <h2 className="font-serif text-2xl font-bold">{copy("Not sure where to start?")}</h2>
              <p className="mt-3 leading-7 text-charcoal/80">{copy("Call or text")}{" "}<a className="font-bold text-[#933708] underline underline-offset-4" href="tel:211">211</a>{" "}{copy("for help finding the right community service. If someone is in immediate danger, call")}{" "}<a className="font-bold text-[#933708] underline underline-offset-4" href="tel:911">911</a>.</p>
            </div>
            <div className="border-t border-charcoal/15 pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
              <p className="text-sm leading-6 text-charcoal/75">{copy("Contact details checked")}{" "}<strong>{copy("November 1, 2026")}</strong>.{" "}{copy("Eligibility and availability vary. Check the official intake details before visiting; some addresses are for mail only.")}</p>
              <p className="mt-3 text-sm leading-6 text-charcoal/75"><strong>{copy("Tenancy terms:")}</strong>{" "}{copy("RTB means Residential Tenancy Branch. RTA means Residential Tenancy Act, the law that applies to many BC tenancies.")}</p>
            </div>
          </div>
        </section>

        <section id="help-directory" className="container scroll-mt-24 pb-16 md:pb-20" aria-labelledby="directory-heading">
          <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#a13a08]">{copy("Help by issue")}</p><h2 id="directory-heading" className="font-serif text-3xl font-bold md:text-4xl">{copy("Who can I contact?")}</h2></div>
            <div className="w-full md:max-w-sm">
              <label htmlFor="resource-search" className="mb-2 block text-sm font-semibold">{copy("Search the directory")}</label>
              <div className="relative"><Search className="pointer-events-none absolute left-3 top-3.5 h-5 w-5 text-charcoal/60" aria-hidden="true" /><input id="resource-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder={copy("Try rent, disability, work…")} className="w-full rounded-xl border border-charcoal/35 bg-white py-3 pl-10 pr-4 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal" /></div>
            </div>
          </div>
          <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label={copy("Filter resources by issue")}>
            {HELP_CATEGORIES.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal ${category === item ? "border-charcoal bg-charcoal text-white" : "border-charcoal/25 bg-white text-charcoal hover:border-charcoal"}`}>{copy(item)}</button>)}
          </div>
          <p className="mb-6 text-sm text-charcoal/75" role="status" aria-live="polite">{resources.length} {copy(resources.length === 1 ? "resource shown" : "resources shown")}</p>
          <div className="grid items-stretch gap-6 md:grid-cols-2">{resources.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}</div>
          {resources.length === 0 && <div className="rounded-2xl border border-charcoal/15 bg-white p-8"><p className="font-semibold">{copy("No matching resources in this directory.")}</p><p className="mt-2 text-charcoal/75">{copy("Try a broader search, choose another issue, or contact 211.")}</p><button type="button" onClick={() => { setSearch(""); setCategory("All resources"); }} className="mt-4 font-bold text-[#933708] underline underline-offset-4">{copy("Show all resources")}</button></div>}
        </section>

        <section id="asked-sukhi" className="scroll-mt-24 border-t border-orange/20 bg-[#f2e8d9] py-16 md:py-20" aria-labelledby="asked-sukhi-heading">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#a13a08]">{copy("Personal help from Sukhi")}</p>
              <h2 id="asked-sukhi-heading" className="font-serif text-3xl font-bold leading-tight md:text-5xl">{copy("Have you asked Sukhi for help?")}</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/85">{copy("This section is specifically for people who have already reached out to Sukhi for help and received a response from him.")}</p>
              <p className="mt-4 text-lg leading-8 text-charcoal/85">{copy("If you would like help from Sukhi, please use the Contact form first and wait for his reply before using the questionnaires below.")}</p>
              {(isFrench || isPunjabi || isChinese || isTagalog) && <p className="mt-4 text-sm text-charcoal/75">{copy("The forms linked on this page are in English.")}</p>}
              <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-charcoal bg-white px-6 py-3 font-bold text-charcoal no-underline hover:bg-cream"><Mail className="h-5 w-5" aria-hidden="true" />{copy("Contact form")}<ExternalLink className="h-4 w-4" aria-hidden="true" /><span className="sr-only">{" "}{copy("(opens in a new tab)")}</span></a>

              <div className="mt-10 rounded-2xl border border-charcoal/15 bg-white p-6 shadow-sm md:p-9">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f2e8d9]"><LockKeyhole className="h-5 w-5 text-[#933708]" aria-hidden="true" /></div>
                <h3 className="font-serif text-2xl font-bold md:text-3xl">{copy("Rental housing search questionnaire")}</h3>
                <p className="mt-4 max-w-2xl leading-7 text-charcoal/80">{copy("Already in touch about finding a home? Share your budget, location preferences, household needs and timing so Sukhi can look for suitable rental options.")}</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-charcoal/75">{copy("Use the password Sukhi provided. The questionnaire opens in a new tab, and your answers are collected privately through Google Forms for your housing search.")}</p>
                <Dialog open={passwordOpen} onOpenChange={(open) => { setPasswordOpen(open); setShowPassword(false); }}>
                  <DialogTrigger asChild><button type="button" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-charcoal px-6 py-3 font-bold text-white hover:bg-[#a13a08]"><LockKeyhole className="h-4 w-4" aria-hidden="true" />{copy("Rental Housing Search")}<ExternalLink className="h-4 w-4" aria-hidden="true" /></button></DialogTrigger>
                  <DialogContent className="border-charcoal/20 bg-cream text-charcoal sm:max-w-md">
                    <DialogHeader><DialogTitle className="font-serif text-2xl">{copy("Rental Housing Search")}</DialogTitle><DialogDescription className="pt-2 leading-6 text-charcoal/80">{copy("Enter the password Sukhi gave you. The questionnaire will open in a new tab after your password is checked.")}</DialogDescription></DialogHeader>
                    <form action={language.prefix ? `/api/rental-access?lang=${language.tag}` : "/api/rental-access"} method="post" target="_blank" rel="noopener" className="mt-2 space-y-5">
                      <div>
                        <label htmlFor="rental-password" className="mb-2 block text-sm font-bold">{copy("Password")}</label>
                        <input id="rental-password" name="password" type={showPassword ? "text" : "password"} required autoComplete="off" maxLength={64} spellCheck={false} autoCapitalize="none" aria-describedby="rental-password-hint" className="w-full rounded-lg border border-charcoal/40 bg-white px-4 py-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal" />
                        <label className="mt-2 inline-flex cursor-pointer items-center gap-2 py-2 text-sm font-medium">
                          <input type="checkbox" checked={showPassword} onChange={(event) => setShowPassword(event.target.checked)} aria-controls="rental-password" className="h-4 w-4 accent-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal" />
                          {copy("Show password")}
                        </label>
                        <p id="rental-password-hint" className="mt-1 text-xs text-charcoal/70">{copy("Passwords are case-sensitive.")}</p>
                      </div>
                      <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-charcoal px-5 py-3 font-bold text-white hover:bg-[#a13a08]">{copy("Open questionnaire")}<ExternalLink className="h-4 w-4" aria-hidden="true" /></button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="mt-6 rounded-2xl border border-charcoal/15 bg-white p-6 shadow-sm md:p-9">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f2e8d9]"><LockKeyhole className="h-5 w-5 text-[#933708]" aria-hidden="true" /></div>
                <h3 className="font-serif text-2xl font-bold md:text-3xl">{copy("Career Search Scan questionnaire")}</h3>
                <p className="mt-4 max-w-2xl leading-7 text-charcoal/80">{copy("Already in touch about your job search? Share your experience, strengths, goals, pay expectations and practical needs so Sukhi can look for suitable vacancies and useful career steps.")}</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-charcoal/75">{copy("Use the password Sukhi provided. The questionnaire opens in a new tab. You can attach a PDF or Word résumé (one file, up to 10 MB); Google sign-in is required because this form accepts uploads. Your responses and résumé are kept private for your career search.")}</p>
                <Dialog open={careerPasswordOpen} onOpenChange={(open) => { setCareerPasswordOpen(open); setShowCareerPassword(false); }}>
                  <DialogTrigger asChild><button type="button" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-charcoal px-6 py-3 font-bold text-white hover:bg-[#a13a08]"><LockKeyhole className="h-4 w-4" aria-hidden="true" />{copy("Career Search Scan")}<ExternalLink className="h-4 w-4" aria-hidden="true" /></button></DialogTrigger>
                  <DialogContent className="border-charcoal/20 bg-cream text-charcoal sm:max-w-md">
                    <DialogHeader><DialogTitle className="font-serif text-2xl">{copy("Career Search Scan")}</DialogTitle><DialogDescription className="pt-2 leading-6 text-charcoal/80">{copy("Enter the password Sukhi gave you. The questionnaire will open in a new tab after your password is checked.")}</DialogDescription></DialogHeader>
                    <form action={language.prefix ? `/api/career-access?lang=${language.tag}` : "/api/career-access"} method="post" target="_blank" rel="noopener" className="mt-2 space-y-5">
                      <div>
                        <label htmlFor="career-password" className="mb-2 block text-sm font-bold">{copy("Password")}</label>
                        <input id="career-password" name="password" type={showCareerPassword ? "text" : "password"} required autoComplete="off" maxLength={64} spellCheck={false} autoCapitalize="none" aria-describedby="career-password-hint" className="w-full rounded-lg border border-charcoal/40 bg-white px-4 py-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal" />
                        <label className="mt-2 inline-flex cursor-pointer items-center gap-2 py-2 text-sm font-medium">
                          <input type="checkbox" checked={showCareerPassword} onChange={(event) => setShowCareerPassword(event.target.checked)} aria-controls="career-password" className="h-4 w-4 accent-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal" />
                          {copy("Show password")}
                        </label>
                        <p id="career-password-hint" className="mt-1 text-xs text-charcoal/70">{copy("Passwords are case-sensitive.")}</p>
                      </div>
                      <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-charcoal px-5 py-3 font-bold text-white hover:bg-[#a13a08]">{copy("Open questionnaire")}<ExternalLink className="h-4 w-4" aria-hidden="true" /></button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
