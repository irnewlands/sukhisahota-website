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
}

const sections: Section[] = [
  {
    title: "Débuts",
    content: [
      "Originaire du Royaume-Uni mais d'origine sud-asiatique, j'ai grandi dans une famille monoparentale avec deux frères et sœurs ayant des difficultés d'apprentissage.",
      "C'était une vie difficile pour ma mère, qui elle-même a connu un handicap qui n'a jamais été entièrement diagnostiqué et traité. Elle n'avait pas le choix d'avoir un mariage arrangé puis d'avoir des enfants. C'était la façon de ma grand-mère de mettre en place une structure de soutien pour l'avenir à long terme.",
      "Ma sœur a développé des difficultés d'apprentissage quand elle était petite après un accident. Mon frère est né avec une paralysie cérébrale, et malgré les médecins affirmant qu'il ne marcherait jamais, ma mère a fait tout ce qu'elle pouvait pour entraîner mon frère à marcher, ce qui s'est avéré être un succès.",
      "On m'a d'abord appris à parler le pendjabi comme première langue. Cependant, j'ai dû trouver difficile d'apprendre l'anglais simultanément car à l'âge de 4 ans, je ne parlais pas l'anglais. En conséquence, tout le monde dans mon ménage a arrêté de parler le pendjabi pour m'immerger dans l'anglais ; bien que cela ait fonctionné, j'ai eu du mal à apprendre le pendjabi depuis.",
      "À l'âge de 11 ans, mes parents ont divorcé ; ils s'étaient déjà séparés quelques années auparavant. Ma mère s'était aussi convertie du sikhisme pour devenir Témoin de Jéhovah, ce que mon père n'acceptait pas. La bataille pour la garde a eu un impact sur mon bien-être car j'étais déchiré entre 2 parents qui me voulaient tous les deux.",
    ],
  },
  {
    title: "Ma Foi",
    content: [
      "Du patrimoine sikh, j'ai aussi été élevée comme Témoin de Jéhovah ; j'ai été baptisée le jour de mon 13e anniversaire. J'ai trouvé une communauté aimante et bienveillante qui m'a soutenue, ainsi que ma mère maintenant célibataire, pendant mes années d'adolescence. Je n'oublierai jamais les personnes qui ont aidé ma mère et mes frères et sœurs ou qui m'ont donné ce rôle de « figure paternelle » alors que je traversais la puberté.",
      "J'ai eu la chance d'avoir des amis de différents horizons et ethnies, et j'ai poursuivi un rôle de ministre à temps plein à l'âge de 16 ans, mais tout s'est effondré quand j'ai été excommuniée en tant que jeune adulte quand je me suis identifiée comme faisant partie de la communauté LGBTQ+.",
      "C'était une période douloureuse de ma vie ; j'ai perdu tous mes amis et tout mon réseau de soutien du jour au lendemain ; toute communication a été coupée selon leurs directives. Je n'avais effectivement personne, et ma santé mentale s'est détériorée. J'ai eu la chance de chercher de l'aide professionnelle sous la forme d'une intervention précoce ; je ne serais pas ici aujourd'hui sans elle.",
    ],
    pullQuote: "J'ai perdu tous mes amis et tout mon réseau de soutien du jour au lendemain. J'ai eu la chance de chercher de l'aide professionnelle sous la forme d'une intervention précoce ; je ne serais pas ici aujourd'hui sans elle.",
  },
  {
    title: "Mon Voyage",
    content: [
      "Après avoir obtenu un diplôme en comptabilité et finance et avoir travaillé pendant quelques années, ainsi qu'après avoir vu mes frères et sœurs entrer en soins gouvernementaux à temps plein, je voulais en savoir plus sur moi-même et ma connexion à ce monde et à la société dans son ensemble après avoir été isolée dans une communauté recluse pendant la majeure partie de mon enfance.",
      "J'ai donc quitté le Royaume-Uni à 23 ans, j'ai profité du programme de mobilité des jeunes du gouvernement britannique (vacances-travail) et j'ai déménagé au Japon de l'autre côté du monde. Je suis arrivée à Tokyo avec une valise et un guide de phrases à la main, n'ayant appris que quelques mots à ce stade, mais j'ai réussi à trouver du travail comme instructrice en langue anglaise en moins d'un mois après mon arrivée.",
      "Cinq mois plus tard, le tremblement de terre et le tsunami de Tōhoku en 2011 ont été le premier test de ma réaction face à une crise seule sans pouvoir chercher l'aide de ma famille et de mes amis. C'était une période difficile ; non seulement j'étais préoccupée par la situation à Fukushima, mais j'écoutais aussi de nombreux étudiants me raconter comment un proche ou un être cher avait perdu la vie.",
      "J'ai ensuite déménagé en Australie et j'ai eu du mal à trouver un emploi à Sydney ; il m'a fallu 3 mois pour finalement obtenir un emploi en comptabilité, et j'ai commencé à comprendre ce que c'était d'être une travailleuse étrangère temporaire. J'ai aussi connu de la discrimination. J'ai eu recours à l'utilisation d'un pseudonyme anglophone de mon nom pour être considérée par les recruteurs pour des opportunités d'emploi.",
      "Je me souviens aussi d'avoir fait tellement d'emplois différents entre des postes plus longs ; j'ai travaillé dans les déménagements, le contrôle du trafic, cuisinière de tempura, livreuse de pizza, et voiturier, ainsi que travailleuse dans une usine de coton dans l'outback travaillant 12 heures par jour pendant 3 mois pour répondre à mon exigence de travail de 2e année de visa.",
      "Mon déménagement en Nouvelle-Zélande m'a donné un sentiment d'illumination ; je n'avais plus de difficulté à obtenir du travail temporaire en comptabilité, mais je prospérais aussi. Ce que j'ai trouvé rafraîchissant, c'était ses droits autochtones pour les Māori, la démocratie étant beaucoup plus forte et harmonieuse, donc moins polarisante en raison de la représentation proportionnelle, et l'environnement et sa biodiversité.",
      "Mon déménagement à Hong Kong m'a quelque peu rappelé les réalités brutales de la vie ; la lutte pour une démocratie de base était évidente pour moi à mon arrivée environ 18 mois après le mouvement des parapluies. Cela m'a fait apprécier ce que j'avais et en quoi j'avais été élevée à croire.",
    ],
    pullQuote: "J'ai commencé à apprécier à quel point les démocraties et leurs institutions sont précieuses, car elles peuvent être enlevées par l'autoritarisme sans beaucoup d'opposition en peu de temps.",
  },
  {
    title: "Pourquoi Vancouver",
    content: [
      "J'ai finalement déménagé à Vancouver en 2018 et j'ai trouvé une communauté accueillante et diversifiée. J'ai découvert ma passion pour la photographie de paysage et la randonnée, explorant les montagnes côtières de la Colombie-Britannique. J'ai aussi commencé à m'engager dans le travail communautaire, en tant que bénévole à la banque alimentaire locale et en travaillant pour une ONG environnementale.",
      "Ce qui m'a vraiment attiré à Vancouver, c'est le sentiment d'appartenance à une communauté qui valorise la diversité, l'inclusion et l'action climatique. J'ai rejoint un syndicat et j'ai commencé à m'impliquer dans l'organisation communautaire, en parlant avec mes voisins de leurs préoccupations et de leurs rêves.",
      "Après des années de travail dans le secteur privé et sans but, j'ai réalisé que je voulais faire une différence réelle. Je voulais être une voix pour ceux qui n'en ont pas. Je voulais lutter pour une économie plus juste, une action climatique plus forte et une démocratie plus participative.",
    ],
    pullQuote: "J'ai réalisé que je voulais faire une différence réelle. Je voulais être une voix pour ceux qui n'en ont pas.",
  },
  {
    title: "Pourquoi le NPD",
    content: [
      "Le NPD a toujours représenté les valeurs qui me sont chères : la justice sociale, l'égalité économique et l'action climatique. C'est le seul parti qui prend vraiment au sérieux la lutte contre les inégalités et la construction d'une économie qui fonctionne pour tout le monde, pas seulement pour les riches.",
      "J'ai vu comment les politiques du NPD ont amélioré les vies des gens en Colombie-Britannique et au Canada. Je veux être une part de ce mouvement, en apportant mon expérience unique et ma perspective à la table.",
      "Je crois que nous pouvons construire un avenir meilleur ensemble. Un avenir où tout le monde a accès à un logement abordable, à des soins de santé, à une éducation de qualité et à une économie verte. Un avenir où les voix des gens ordinaires sont entendues et respectées.",
    ],
  },
  {
    title: "Candidature pour le NPD",
    content: [
      "Je me présente comme candidate du NPD pour Vancouver Granville parce que je crois que c'est le moment d'une nouvelle génération de leadership. Je crois que nous avons besoin de plus de voix diverses à la table, des gens qui ont vécu des expériences réelles et qui comprennent les défis auxquels font face les gens ordinaires.",
      "Je suis prête à me battre pour vous. À vous écouter. À travailler avec vous pour construire une communauté plus juste et plus durable. Je suis prête à être une voix pour ceux qui n'en ont pas.",
      "Ensemble, nous pouvons faire une différence. Ensemble, nous pouvons construire un avenir meilleur pour tous.",
    ],
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
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}
          >
            <img src="/Forthepeople_-original.png" alt="For the People" style={{ height: "36px", width: "auto" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--foreground)", lineHeight: 1.2 }}>
                Sukhi Sahota
              </span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-ndp-orange)" }}>
                Ancien Candidat Fédéral
              </span>
            </div>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <LanguageSwitcher />
            <a
              href="/"
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
            L'Histoire Complète
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
            Une Autobiographie
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
            Un parcours personnel façonné par la résilience, l'identité et la communauté — du Royaume-Uni au monde et de retour.
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
      <section
        style={{
          backgroundColor: "var(--color-ndp-charcoal)",
          color: "white",
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: "1.75rem",
              marginBottom: "1rem",
            }}
          >
            Prêt à Faire la Différence?
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
            Rejoignez-moi dans la lutte pour une économie plus juste, une action climatique plus forte et une démocratie plus participative.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                padding: "0.75rem 1.5rem",
                backgroundColor: "var(--color-ndp-orange)",
                color: "white",
                textDecoration: "none",
                borderRadius: "4px",
                display: "inline-block",
                transition: "all 0.2s ease-out",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Retour à l'accueil
            </a>
            <a
              href="/"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                padding: "0.75rem 1.5rem",
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid white",
                textDecoration: "none",
                borderRadius: "4px",
                display: "inline-block",
                transition: "all 0.2s ease-out",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "white";
                (e.target as HTMLElement).style.color = "var(--color-ndp-charcoal)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
                (e.target as HTMLElement).style.color = "white";
              }}
            >
              Nous Contacter
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
          href="/"
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
