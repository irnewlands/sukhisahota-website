import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const origin = "https://www.sukhisahota.ca";
const translationsPath = new URL("../client/src/lib/french-copy.json", import.meta.url);
const reflectionTitle = "After the Defeat | Sukhi Sahota's Reflections on the 2026 BC Election";
const directoryTitle = "Resources for Help | Vancouver Support & Advocacy | Sukhi Sahota";

const pages = {
  "/": ["Sukhi Sahota | Platform, Community & Public Service", "Sukhi Sahota | Programme, engagement communautaire et service public"],
  "/about": ["About"],
  "/autobiography": ["Autobiography", "Autobiographie"],
  "/election-2025": ["Election 2025"],
  "/after-the-election": [reflectionTitle],
  "/renewal-report": ["Renewal"],
  "/issues": ["Issues"],
  "/get-involved": ["Get Involved"],
  "/resources-for-help": [directoryTitle],
  "/issues/affordability": ["Affordability"],
  "/issues/climate": ["Climate & Environment"],
  "/issues/housing": ["Housing"],
  "/issues/economy": ["Economic Security"],
  "/issues/democracy": ["Democracy & Electoral Reform"],
  "/issues/ai": ["Artificial Intelligence"],
  "/issues/lgbtq-rights": ["LGBTQ+ Rights"],
  "/issues/reconciliation": ["Indigenous Reconciliation"],
  "/issues/sovereignty": ["Canadian Sovereignty"],
  "/issues/social-safety-net": ["Social Safety Net"],
  "/issues/healthcare": ["Healthcare"],
  "/issues/toxic-drug-crisis": ["Toxic drug crisis"],
  "/issues/disability-accessibility": ["Disability& Accessibility"],
  "/issues/misinformation": ["Misinformation"],
  "/issues/culture-community": ["Culture & Community"],
  "/issues/human-rights-foreign-policy": ["Human rights & Foreign policy"],
};

const englishDescription = "Official website of Sukhi Sahota. Explore Sukhi's platform on housing, climate, healthcare, democracy, affordability, reconciliation, LGBTQ+ rights, AI, and public service.";
const frenchDescription = "Site officiel de Sukhi Sahota. Découvrez ses positions sur le logement, le climat, la santé, la démocratie, le coût de la vie, la réconciliation, les droits LGBTQ+, l’IA et le service public.";

function escapeMarkup(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function pageHtml(template, { url, englishUrl, frenchUrl, lang, title, description }) {
  const safeTitle = escapeMarkup(title);
  const safeDescription = escapeMarkup(description);
  return template
    .replace('<html lang="en-CA">', `<html lang="${lang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${safeDescription}"`)
    .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*"/g, `$1${safeTitle}"`)
    .replace(/(<meta\s+(?:property="og:description"|name="twitter:description")\s+content=")[^"]*"/g, `$1${safeDescription}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, [
      `<link rel="canonical" href="${url}" />`,
      `<link rel="alternate" hreflang="en-CA" href="${englishUrl}" />`,
      `<link rel="alternate" hreflang="fr-CA" href="${frenchUrl}" />`,
      `<link rel="alternate" hreflang="x-default" href="${englishUrl}" />`,
      `<meta property="og:locale" content="${lang.replace("-", "_")}" />`,
    ].join("\n  "))
    .replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/, (_, start, json, end) => {
      const data = JSON.parse(json);
      for (const item of data["@graph"]) {
        if (item["@type"] === "WebPage") {
          Object.assign(item, { "@id": `${url}#webpage`, url, name: title, description, inLanguage: lang });
        }
        if (item["@type"] === "WebSite") item.inLanguage = ["en-CA", "fr-CA"];
        if (item["@type"] === "Person" && lang === "fr-CA") {
          item.description = "Sukhi Sahota défend les intérêts de la communauté et les politiques publiques. Il a été candidat aux élections fédérales.";
          item.jobTitle = "Défenseur des intérêts de la communauté et des politiques publiques";
        }
      }
      return `${start}\n${JSON.stringify(data, null, 2).replaceAll("<", "\\u003c")}\n${end}`;
    });
}

export function localizedPages(outputDir) {
  return {
    name: "localized-pages",
    apply: "build",
    async closeBundle() {
      const template = await readFile(join(outputDir, "index.html"), "utf8");
      const translations = JSON.parse(await readFile(translationsPath, "utf8"));
      const sitemap = [];
      for (const [route, [english, explicitFrench]] of Object.entries(pages)) {
        const frenchRoute = route === "/" ? "/fr" : "/fr" + route;
        const englishUrl = origin + route;
        const frenchUrl = origin + frenchRoute;
        const french = explicitFrench ?? translations[english];
        if (!french) throw new Error(`Missing French page title for ${route}`);
        for (const [path, label, lang, description] of [
          [route, english, "en-CA", englishDescription],
          [frenchRoute, french, "fr-CA", frenchDescription],
        ]) {
          const url = origin + path;
          const title = label.includes(" | ") ? label : `${label} | Sukhi Sahota`;
          const file = join(outputDir, path === "/" ? "index.html" : `${path.slice(1)}.html`);
          await mkdir(dirname(file), { recursive: true });
          await writeFile(file, pageHtml(template, { url, englishUrl, frenchUrl, lang, title, description }));
          sitemap.push(`  <url><loc>${url}</loc></url>`);
        }
      }
      await writeFile(join(outputDir, "sitemap.xml"), [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...sitemap,
        '</urlset>',
        '',
      ].join("\n"));
    },
  };
}
