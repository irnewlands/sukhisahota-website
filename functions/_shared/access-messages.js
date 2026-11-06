export const ACCESS_HEADERS = {
  "Cache-Control": "no-store, max-age=0",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
  "X-Robots-Tag": "noindex, nofollow",
};

function messageResponse({ title, message, status, language, label, close, back, backHref }) {
  return new Response(`<!doctype html><html lang="${language}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title} | Sukhi Sahota</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f8f1e7;color:#1f2937;font:17px/1.65 system-ui,sans-serif}main{max-width:32rem;margin:1.5rem;padding:2.5rem;background:white;border:1px solid #d8d0c6;border-top:6px solid #a13a08;border-radius:1rem}p{margin:1rem 0}h1{font:700 2rem/1.2 Georgia,serif}button,a{font:inherit}button{border:0;border-radius:.65rem;background:#1f2937;color:white;padding:.8rem 1.3rem;cursor:pointer}a{color:#933708}small{display:block;margin-top:1.5rem}</style></head><body><main><p>Sukhi Sahota · ${label}</p><h1>${title}</h1><p>${message}</p><button type="button" onclick="window.close()">${close}</button><small><a href="${backHref}">${back}</a></small></main></body></html>`, {
    status,
    headers: {
      ...ACCESS_HEADERS,
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
    },
  });
}

export function questionnaireMessages(request, labels) {
  const french = new URL(request.url).searchParams.get("lang") === "fr-CA";
  const label = french ? labels.fr : labels.en;
  const common = {
    language: french ? "fr-CA" : "en",
    label,
    close: french ? "Fermer cette fenêtre" : "Close this window",
    back: french ? "Retour aux ressources d’aide" : "Return to Resources for Help",
    backHref: french ? "/fr/resources-for-help#asked-sukhi" : "/resources-for-help#asked-sukhi",
  };

  return {
    invalidPassword: () => messageResponse({
      ...common,
      status: 403,
      title: french ? "Mot de passe invalide" : "Password not valid",
      message: french
        ? "Fermez cet onglet et réessayez avec le mot de passe fourni par Sukhi. La page de ressources d’aide est toujours ouverte dans l’onglet d’origine."
        : "Please close this tab and try again using the password Sukhi provided. Your original Resources for Help page is still open.",
    }),
    openFromDirectory: () => {
      const response = messageResponse({
        ...common,
        status: 405,
        title: french ? "Ouvrez le questionnaire à partir de la page de ressources d’aide" : "Open the questionnaire from Resources for Help",
        message: french
          ? `Utilisez le bouton « ${label} » sur la page de ressources d’aide pour entrer votre mot de passe.`
          : `Use the ${label} button on the Resources for Help page to enter your password.`,
      });
      response.headers.set("Allow", "POST");
      return response;
    },
  };
}
