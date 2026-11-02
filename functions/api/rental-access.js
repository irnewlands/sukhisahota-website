// Pages Function: validate access on the server; never ship a password or form URL in client code.
// The destination is encrypted using a password-derived key, so the public source contains neither.
const SALT = "t70+OkAdY5UeLuwyCj6pQg==";
const IV = "9NTWGUy2U5Kg0fXs";
const DESTINATION = "lIEoxVoRpUPh1Ms5J4k24626zbMek9CPALkkGGWR9hf3fFvS0ru6Ggjnsfd8NHAvumx50PZ76af/gINlMJC92eOPjOcoZrmEH6GdD/36zS/229uFishPUHIHZiqvOEFh6TP3JwOkTY/iuBwQdTbItJvW7Q==";

const HEADERS = {
  "Cache-Control": "no-store, max-age=0",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
  "X-Robots-Tag": "noindex, nofollow",
};

function messageResponse(title, message, status) {
  return new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title} | Sukhi Sahota</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f8f1e7;color:#1f2937;font:17px/1.65 system-ui,sans-serif}main{max-width:32rem;margin:1.5rem;padding:2.5rem;background:white;border:1px solid #d8d0c6;border-top:6px solid #a13a08;border-radius:1rem}p{margin:1rem 0}h1{font:700 2rem/1.2 Georgia,serif}button,a{font:inherit}button{border:0;border-radius:.65rem;background:#1f2937;color:white;padding:.8rem 1.3rem;cursor:pointer}a{color:#933708}small{display:block;margin-top:1.5rem}</style></head><body><main><p>Sukhi Sahota · Rental Housing Search</p><h1>${title}</h1><p>${message}</p><button type="button" onclick="window.close()">Close this window</button><small><a href="/resources-for-help#asked-sukhi">Return to Resources for Help</a></small></main></body></html>`, {
    status,
    headers: {
      ...HEADERS,
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
    },
  });
}

const invalidPassword = () => messageResponse("Password not valid", "Please close this tab and try again using the password Sukhi provided. Your original Resources for Help page is still open.", 403);
const decode = (value) => Uint8Array.from(atob(value), (character) => character.charCodeAt(0));

export async function onRequest({ request }) {
  if (request.method !== "POST") {
    const response = messageResponse("Open the questionnaire from Resources for Help", "Use the Rental Housing Search button on the Resources for Help page to enter your password.", 405);
    response.headers.set("Allow", "POST");
    return response;
  }

  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) return invalidPassword();
  const contentType = request.headers.get("Content-Type") || "";
  if (!contentType.toLowerCase().startsWith("application/x-www-form-urlencoded")) return invalidPassword();
  if (Number(request.headers.get("Content-Length") || "0") > 512) return invalidPassword();

  let password;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).length > 512) return invalidPassword();
    password = new URLSearchParams(body).get("password");
    if (!password || password.length > 64) return invalidPassword();
  } catch {
    return invalidPassword();
  }

  try {
    const material = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
    const key = await crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: decode(SALT), iterations: 100000, hash: "SHA-256" },
      material, { name: "AES-GCM", length: 256 }, false, ["decrypt"],
    );
    const plaintext = await crypto.subtle.decrypt({ name: "AES-GCM", iv: decode(IV) }, key, decode(DESTINATION));
    const destination = new TextDecoder().decode(plaintext);
    const target = new URL(destination);
    if (target.origin !== "https://docs.google.com" || !target.pathname.startsWith("/forms/d/e/") || !target.pathname.endsWith("/viewform")) throw new Error("Invalid destination");
    return new Response(null, { status: 303, headers: { ...HEADERS, Location: destination } });
  } catch {
    return invalidPassword();
  }
}
