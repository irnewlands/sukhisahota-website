import { ACCESS_HEADERS, questionnaireMessages } from "../_shared/access-messages.js";

// Pages Function: validate access on the server; never ship a password or form URL in client code.
// The destination is encrypted using a password-derived key, so the public source contains neither.
const SALT = "t70+OkAdY5UeLuwyCj6pQg==";
const IV = "9NTWGUy2U5Kg0fXs";
const DESTINATION = "lIEoxVoRpUPh1Ms5J4k24626zbMek9CPALkkGGWR9hf3fFvS0ru6Ggjnsfd8NHAvumx50PZ76af/gINlMJC92eOPjOcoZrmEH6GdD/36zS/229uFishPUHIHZiqvOEFh6TP3JwOkTY/iuBwQdTbItJvW7Q==";

const decode = (value) => Uint8Array.from(atob(value), (character) => character.charCodeAt(0));

export async function onRequest({ request }) {
  const { invalidPassword, openFromDirectory } = questionnaireMessages(request, { en: "Rental Housing Search", fr: "Recherche de logement locatif" });
  if (request.method !== "POST") return openFromDirectory();

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
    return new Response(null, { status: 303, headers: { ...ACCESS_HEADERS, Location: destination } });
  } catch {
    return invalidPassword();
  }
}
