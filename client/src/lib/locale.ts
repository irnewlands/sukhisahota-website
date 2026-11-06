import frenchCopy from "./french-copy.json";
import punjabiCopy from "./punjabi-copy.json";
import chineseCopy from "./chinese-copy.json";

export const languages = [
  { prefix: "", tag: "en-CA", label: "English" },
  { prefix: "/fr", tag: "fr-CA", label: "Français" },
  { prefix: "/pa", tag: "pa-Guru", label: "ਪੰਜਾਬੀ" },
  { prefix: "/zh", tag: "zh-Hans", label: "简体中文" },
] as const;

const [english, french, punjabi, chinese] = languages;
const legacyAutobiography = "/autobiography-fr";
const currentPath = window.location.pathname;
const isLegacyAutobiography = currentPath.replace(/\/$/, "") === legacyAutobiography;

export const language = isLegacyAutobiography
  ? french
  : languages.find(({ prefix }) => prefix && (currentPath === prefix || currentPath.startsWith(prefix + "/"))) ?? english;

export const isFrench = language === french;
export const isPunjabi = language === punjabi;
export const isChinese = language === chinese;
export const routePrefix = isLegacyAutobiography ? "" : language.prefix;

const translations: Readonly<Record<string, string>> = isChinese ? chineseCopy : isPunjabi ? punjabiCopy : isFrench ? frenchCopy : {};

export function copy(english: string): string {
  return translations[english] ?? english;
}

export function localizedHref(href: string): string;
export function localizedHref(href: string | undefined): string | undefined;
export function localizedHref(href: string | undefined) {
  if (!language.prefix || !href?.startsWith("/") || href.startsWith("//")) return href;
  return language.prefix + (href === "/" ? "" : href);
}

export function languageHref(target: (typeof languages)[number]): string {
  const { pathname, search, hash } = window.location;
  const route = isLegacyAutobiography ? "/autobiography" : pathname.slice(routePrefix.length).replace(/\/$/, "");
  return (target.prefix + route || "/") + search + hash;
}
