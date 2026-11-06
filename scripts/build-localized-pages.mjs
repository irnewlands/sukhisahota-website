import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const origin = "https://www.sukhisahota.ca";
const frenchCopy = new URL("../client/src/lib/french-copy.json", import.meta.url);
const punjabiCopy = new URL("../client/src/lib/punjabi-copy.json", import.meta.url);
const chineseCopy = new URL("../client/src/lib/chinese-copy.json", import.meta.url);
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

const punjabiDescription = "ਸੁੱਖੀ ਸਹੋਤਾ ਦੀ ਅਧਿਕਾਰਤ ਵੈੱਬਸਾਈਟ। ਰਿਹਾਇਸ਼, ਜਲਵਾਯੂ, ਸਿਹਤ ਸੰਭਾਲ, ਲੋਕਤੰਤਰ, ਜੀਵਨ-ਖ਼ਰਚ, ਮੂਲ ਨਿਵਾਸੀ ਲੋਕਾਂ ਨਾਲ ਸੁਲ੍ਹਾ, LGBTQ+ ਹੱਕਾਂ, ਕ੍ਰਿਤ੍ਰਿਮ ਬੁੱਧੀ ਅਤੇ ਜਨ ਸੇਵਾ ਬਾਰੇ ਉਨ੍ਹਾਂ ਦੇ ਵਿਚਾਰ ਪੜ੍ਹੋ।";

const chineseDescription = "苏基·萨霍塔的官方网站。了解他对住房、气候、医疗、民主、生活成本、原住民和解、LGBTQ+ 权利、人工智能和公共服务的看法。";

function escapeMarkup(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function pageHtml(template, { url, alternates, lang, title, description }) {
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
      ...Object.entries(alternates).map(([tag, href]) => `<link rel="alternate" hreflang="${tag}" href="${href}" />`),
      `<meta property="og:locale" content="${lang === "pa-Guru" ? "pa_IN" : lang === "zh-Hans" ? "zh_CN" : lang.replace("-", "_")}" />`,
    ].join("\n  "))
    .replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/, (_, start, json, end) => {
      const data = JSON.parse(json);
      for (const item of data["@graph"]) {
        if (item["@type"] === "WebPage") {
          Object.assign(item, { "@id": `${url}#webpage`, url, name: title, description, inLanguage: lang });
        }
        if (item["@type"] === "WebSite") item.inLanguage = ["en-CA", "fr-CA", "pa-Guru", "zh-Hans"];
        if (item["@type"] === "Person" && lang === "fr-CA") {
          item.description = "Sukhi Sahota défend les intérêts de la communauté et les politiques publiques. Il a été candidat aux élections fédérales.";
          item.jobTitle = "Défenseur des intérêts de la communauté et des politiques publiques";
        }
        if (item["@type"] === "Person" && lang === "pa-Guru") {
          item.description = "ਸੁੱਖੀ ਸਹੋਤਾ ਭਾਈਚਾਰੇ ਅਤੇ ਜਨਤਕ ਨੀਤੀ ਲਈ ਕੰਮ ਕਰਦੇ ਹਨ। ਉਹ ਫੈਡਰਲ ਚੋਣਾਂ ਵਿੱਚ ਉਮੀਦਵਾਰ ਰਹਿ ਚੁੱਕੇ ਹਨ।";
          item.jobTitle = "ਭਾਈਚਾਰੇ ਅਤੇ ਜਨਤਕ ਨੀਤੀ ਦੇ ਹਿਮਾਇਤੀ";
        }
        if (item["@type"] === "Person" && lang === "zh-Hans") {
          item.description = "苏基·萨霍塔关注社区事务和公共政策，曾参选加拿大联邦众议院议员。";
          item.jobTitle = "社区与公共政策倡导者";
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
      const [french, punjabi, chinese] = await Promise.all(
        [frenchCopy, punjabiCopy, chineseCopy].map(async (path) => JSON.parse(await readFile(path, "utf8"))),
      );
      const sitemap = [];
      for (const [route, [english, explicitFrench]] of Object.entries(pages)) {
        const localizedPath = (prefix) => prefix + (route === "/" ? "" : route);
        const alternates = {
          "en-CA": origin + route,
          "fr-CA": origin + localizedPath("/fr"),
          "pa-Guru": origin + localizedPath("/pa"),
          "zh-Hans": origin + localizedPath("/zh"),
          "x-default": origin + route,
        };
        for (const [path, label, lang, description] of [
          [route, english, "en-CA", englishDescription],
          [localizedPath("/fr"), explicitFrench ?? french[english], "fr-CA", frenchDescription],
          [localizedPath("/pa"), punjabi[english], "pa-Guru", punjabiDescription],
          [localizedPath("/zh"), chinese[english], "zh-Hans", chineseDescription],
        ]) {
          if (!label) throw new Error(`Missing ${lang} page title for ${route}`);
          const url = origin + path;
          const name = lang === "pa-Guru" ? "ਸੁੱਖੀ ਸਹੋਤਾ" : lang === "zh-Hans" ? "苏基·萨霍塔" : "Sukhi Sahota";
          const title = label.includes(" | ") ? label : `${label} | ${name}`;
          const file = join(outputDir, path === "/" ? "index.html" : `${path.slice(1)}.html`);
          await mkdir(dirname(file), { recursive: true });
          await writeFile(file, pageHtml(template, { url, alternates, lang, title, description }));
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
