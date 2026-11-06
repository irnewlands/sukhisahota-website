import { localizedHref } from "@/lib/locale";
import { useEffect } from "react";
import JourneyTimeline from "@/components/JourneyTimeline";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/**
 * Autobiography Page (French)
 * Design: Warm Civic Modernism
 * - Fraunces serif for section headings
 * - Outfit sans-serif for body text
 * - Warm cream background with NDP orange accents
 * - Generous whitespace and editorial layout
 * - Pull quotes and visual hierarchy
 */

interface Section {
  title: string;
  content: string[];
  pullQuote?: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
}

const sections: Section[] = [
  {
    title: "Mes débuts",
    image: {
      src: "/IMG-20170310-WA0002.jpg",
      alt: "Sukhi entouré d’enfants dans une salle de classe",
      caption: "Un souvenir de mon parcours, en salle de classe",
      width: 1600,
      height: 1200,
    },
    content: [
      "Originaire du Royaume-Uni et d’ascendance sud-asiatique, j’ai grandi dans une famille monoparentale avec un frère et une sœur qui ont tous deux des difficultés d’apprentissage.",
      "La vie était difficile pour ma mère, qui vivait elle-même avec un handicap qui n’a jamais été complètement diagnostiqué ni pris en charge. Elle n’a pas eu le choix de se marier dans le cadre d’un mariage arrangé, puis d’avoir des enfants. C’était la façon dont ma grand-mère cherchait à mettre en place un réseau de soutien à long terme.",
      "Ma sœur a développé des difficultés d’apprentissage à la suite d’un accident alors qu’elle était toute petite. Mon frère est né avec une paralysie cérébrale. Même si les médecins disaient qu’il ne marcherait jamais, ma mère a fait tout ce qu’elle pouvait pour lui apprendre à marcher, et elle y est parvenue.",
      "Le pendjabi est la première langue qu’on m’a apprise. J’ai dû avoir du mal à apprendre l’anglais en même temps, puisqu’à quatre ans, je ne le parlais toujours pas. À la maison, tout le monde a donc cessé de parler pendjabi pour que je sois complètement immergé dans l’anglais. Ça a fonctionné, mais depuis, j’ai du mal à apprendre le pendjabi.",
      "Mes parents ont divorcé quand j’avais 11 ans, après quelques années de séparation. À cette époque, ma mère a aussi quitté le sikhisme pour devenir témoin de Jéhovah, ce que mon père n’acceptait pas. La bataille pour ma garde a pesé sur mon bien-être. J’étais déchiré entre mes deux parents, qui voulaient tous deux ma garde.",
    ],
  },
  {
    title: "Ma foi",
    content: [
      "Je suis issu d’une famille sikhe et j’ai aussi été élevé comme témoin de Jéhovah. J’ai été baptisé le jour de mes 13 ans. J’y ai trouvé une communauté aimante et bienveillante qui nous a soutenus, ma mère, qui élevait désormais seule ses enfants, et moi, pendant mon adolescence. Je n’oublierai jamais les personnes qui ont aidé ma mère, mon frère et ma sœur, ou qui ont été pour moi des figures paternelles pendant cette période.",
      "J’ai eu la chance de me faire des amis de milieux et d’origines diverses. À 16 ans, j’ai entrepris un ministère à temps plein. Puis tout s’est effondré quand, au début de l’âge adulte, j’ai été excommunié après avoir affirmé mon appartenance à la communauté LGBTQ+.",
      "Ça a été une période douloureuse. Du jour au lendemain, j’ai perdu tous mes amis et tout mon réseau de soutien. Selon les directives de la communauté, toute communication a été coupée. Je n’avais pratiquement plus personne, et ma santé mentale s’est détériorée. J’ai eu la chance d’obtenir de l’aide professionnelle grâce à une intervention précoce. Sans cette aide, je ne serais pas ici aujourd’hui.",
    ],
    pullQuote: "Du jour au lendemain, j’ai perdu tous mes amis et tout mon réseau de soutien. J’ai eu la chance d’obtenir de l’aide professionnelle grâce à une intervention précoce. Sans cette aide, je ne serais pas ici aujourd’hui.",
  },
  {
    title: "Mon parcours",
    image: {
      src: "/SAM_2552v2.JPG",
      alt: "Sukhi au sommet du Mauna Kea au lever du soleil",
      caption: "Lever du soleil au sommet du Mauna Kea en 2011, au fil de mes aventures à travers le monde",
      width: 3074,
      height: 1962,
    },
    content: [
      "Après avoir obtenu un diplôme en comptabilité et en finance, travaillé quelques années et vu mon frère et ma sœur être pris en charge à temps plein par les services publics, j’ai voulu mieux me connaître et comprendre ma place dans le monde et dans la société. J’avais passé la majeure partie de mon enfance dans une communauté repliée sur elle-même.",
      "J’ai donc quitté le Royaume-Uni à 23 ans. Grâce au programme de mobilité des jeunes du gouvernement britannique, dans le cadre d’un séjour vacances-travail, je suis parti vivre au Japon, à l’autre bout du monde. Je suis arrivé à Tokyo avec une valise et un guide de conversation. Je ne connaissais que quelques mots de japonais, mais en moins d’un mois, j’ai trouvé un emploi comme enseignant d’anglais.",
      "Cinq mois plus tard, le séisme et le tsunami de Tōhoku, en 2011, m’ont mis à l’épreuve pour la première fois. Je devais faire face à une crise seul, sans pouvoir me tourner vers ma famille ou mes amis. Ça a été une période difficile. La situation à Fukushima m’inquiétait, et plusieurs de mes nouveaux élèves me racontaient comment ils avaient perdu un proche.",
      "J’ai ensuite déménagé en Australie, où j’ai eu du mal à trouver du travail à Sydney. Il m’a fallu trois mois pour décrocher un emploi en comptabilité. J’ai commencé à comprendre ce que c’était que d’être un travailleur étranger temporaire. J’ai aussi subi de la discrimination. J’ai fini par utiliser un nom d’emprunt à consonance anglophone pour que les recruteurs prennent ma candidature en considération.",
      "Entre des emplois de plus longue durée, j’ai occupé toutes sortes de postes temporaires. J’ai travaillé dans le déménagement et la gestion de la circulation, préparé des tempuras, livré des pizzas et travaillé comme voiturier. J’ai aussi fait des quarts de 12 heures pendant trois mois dans une usine d’égrenage du coton, dans l’arrière-pays australien, pour satisfaire à l’exigence de travail de la deuxième année de mon visa.",
      "Mon déménagement en Nouvelle-Zélande m’a ouvert de nouvelles perspectives. Je trouvais facilement des contrats temporaires en comptabilité et je m’épanouissais dans mon travail. J’y ai apprécié les droits reconnus aux Māori, la biodiversité et une démocratie plus solide, plus harmonieuse et moins polarisée grâce à la représentation proportionnelle.",
      "En déménageant à Hong Kong, j’ai été ramené à certaines dures réalités. À mon arrivée, environ 18 mois après le mouvement des parapluies, la lutte pour des droits démocratiques fondamentaux était manifeste. Ça m’a fait apprécier ce que j’avais et les convictions qui m’avaient été transmises.",
    ],
    pullQuote: "J’ai commencé à mesurer à quel point les démocraties et leurs institutions sont précieuses. L’autoritarisme peut les emporter en peu de temps, sans rencontrer beaucoup d’opposition.",
  },
  {
    title: "Retour au Royaume-Uni",
    content: [
      "Après sept ans à l’étranger, je suis finalement rentré au Royaume-Uni, un peu plus âgé et un peu plus sage. Je suis retourné auprès de ma grand-mère, qui avait récemment fait une chute, avait reçu un diagnostic de cancer et devait emménager dans un établissement de soins. C’était après le vote sur le Brexit. Dans ma ville natale, je voyais que les choses étaient restées à peu près pareilles ou s’étaient détériorées.",
      "J’ai postulé à des emplois en comptabilité et, dans la plupart de mes entrevues, on me posait la même question : « Pourquoi êtes-vous revenu ici? » Ça m’a amené à me demander si je pouvais de nouveau vivre au Royaume-Uni à long terme.",
    ],
  },
  {
    title: "Pourquoi Vancouver?",
    content: [
      "En avril 2018, j’ai déménagé au Canada. Depuis, je vis à Vancouver, où j’habite depuis environ huit ans.",
      "J’ai choisi Vancouver plutôt que Toronto parce que j’aime la randonnée et la photographie de paysages. La côte Ouest me permet de profiter de la nature et de sa beauté tout en vivant dans une grande ville accueillante pour les personnes LGBTQ+ et qui offre tous les services dont j’ai besoin.",
      "Depuis la pandémie, j’ai aussi constaté un changement marqué dans notre communauté. Comme moi, beaucoup de gens ont connu le chômage, la discrimination, le deuil, l’insécurité en matière de logement ou l’insécurité alimentaire. Ça m’a amené à travailler avec d’autres bénévoles d’une banque alimentaire pour aménager et ouvrir un garde-manger communautaire à l’extérieur de ses locaux.",
      "J’étais ravi quand nous avons ouvert le garde-manger et découvert les petits mots manuscrits laissés par des personnes qui se sentaient tellement stigmatisées qu’elles n’auraient jamais osé se rendre dans une banque alimentaire. Ça m’a convaincu de m’investir davantage au service de la communauté.",
      "Je viens de terminer trois années de travail pour une ONG environnementale. Ce travail m’a donné le sentiment que chacun de nous peut faire une différence, à la fois individuellement et collectivement.",
    ],
    pullQuote: "Nous pouvons tous faire une différence, individuellement et collectivement.",
  },
];

export default function AutobiographyFr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "var(--background)",
          borderBottom: "2px dashed var(--color-ndp-orange)",
          padding: "1.5rem 2rem",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a
            href={localizedHref("/")}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}
          >
            <img src="/Forthepeople_-original.png" alt="For the People" style={{ height: "36px", width: "auto" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--foreground)", lineHeight: 1.2 }}>
                Sukhi Sahota
              </span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-ndp-orange)" }}>
                Ancien candidat fédéral
              </span>
            </div>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <LanguageSwitcher />
            <a
              href={localizedHref("/")}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                color: "var(--color-ndp-orange)",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              ← Retour à l'accueil
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>
        {/* Hero Section */}
        <section style={{ marginBottom: "4rem", textAlign: "center" }}>
          <img
            src="/006A7069a.jpg"
            alt="Portrait de Sukhi Sahota"
            width={140}
            height={140}
            className="mx-auto mb-8 size-[140px] rounded-full border-4 border-orange object-cover object-top shadow-lg"
          />
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "var(--color-ndp-orange)",
              textTransform: "uppercase",
            }}
          >
            L’histoire complète
          </span>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              margin: "1rem 0 1.5rem",
              color: "var(--foreground)",
            }}
          >
            Une autobiographie
          </h1>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--muted-foreground)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Un parcours personnel façonné par la résilience, l’identité et la communauté, du Royaume-Uni à plusieurs pays du monde, puis au Canada.
          </p>
        </section>

        {/* Sections */}
        {sections.map((section, idx) => (
          <article key={idx} style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                color: "var(--foreground)",
              }}
            >
              {section.title}
            </h2>

            {section.image && (
              <figure className="mb-8">
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  width={section.image.width}
                  height={section.image.height}
                  loading="lazy"
                  className="block h-auto w-full rounded-2xl"
                />
                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                  {section.image.caption}
                </figcaption>
              </figure>
            )}

            {/* Two-column layout for content */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                marginBottom: section.pullQuote ? "2rem" : "0",
              }}
            >
              {section.content.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "var(--foreground)",
                    margin: 0,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Pull Quote */}
            {section.pullQuote && (
              <blockquote
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "1.3rem",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "var(--color-ndp-orange)",
                  borderLeft: `4px solid var(--color-ndp-orange)`,
                  paddingLeft: "1.5rem",
                  margin: "2rem 0",
                  fontWeight: 600,
                }}
              >
                "{section.pullQuote}"
              </blockquote>
            )}
          </article>
        ))}
      </main>

      {/* Journey Timeline */}
      <JourneyTimeline />

      {/* CTA Footer */}
      <section className="bg-[#111827] px-8 py-12 text-center text-white">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: "1.75rem",
              marginBottom: "1rem",
            }}
          >
            Prêt à soutenir le changement à la base?
          </h2>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "2rem",
              opacity: 0.95,
            }}
          >
            Joignez-vous à moi pour bâtir un NPD mieux organisé et plus inclusif, en partant de la base.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={localizedHref("/")}
              className="inline-block rounded border-2 border-cream bg-cream px-6 py-3 font-semibold text-charcoal no-underline transition-colors hover:border-white hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Retour à l'accueil
            </a>
            <a
              href="mailto:info@sukhisahota.ca"
              className="inline-block rounded border-2 border-white px-6 py-3 font-semibold text-white no-underline transition-colors hover:bg-white hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer
        style={{
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
          padding: "2rem",
          textAlign: "center",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.9rem",
        }}
      >
        <a
          href={localizedHref("/")}
          style={{
            color: "var(--background)",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Retour à l'accueil
        </a>
      </footer>
    </div>
  );
}
