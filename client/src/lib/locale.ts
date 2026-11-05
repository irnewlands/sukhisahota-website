import frenchCopy from "./french-copy.json";

const frenchPrefix = "/fr";
const legacyAutobiography = "/autobiography-fr";
const currentPath = window.location.pathname;

export const isFrench =
  currentPath === frenchPrefix ||
  currentPath.startsWith(frenchPrefix + "/") ||
  currentPath === legacyAutobiography ||
  currentPath === legacyAutobiography + "/";

const translations: Readonly<Record<string, string>> = frenchCopy;

export function copy(english: string): string {
  return isFrench ? translations[english] ?? english : english;
}

export function localizedHref(href: string): string;
export function localizedHref(href: string | undefined): string | undefined;
export function localizedHref(href: string | undefined) {
  if (!isFrench || !href?.startsWith("/") || href.startsWith("//")) return href;
  return frenchPrefix + (href === "/" ? "" : href);
}

export function otherLanguageHref(): string {
  const { pathname, search, hash } = window.location;
  let otherPath = pathname === "/" ? frenchPrefix : frenchPrefix + pathname;
  if (isFrench) {
    otherPath = pathname.replace(/\/$/, "") === legacyAutobiography
      ? "/autobiography"
      : pathname.slice(frenchPrefix.length) || "/";
  }
  return otherPath + search + hash;
}
