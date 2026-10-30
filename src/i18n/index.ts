import { en } from "./en.ts";
import { tr } from "./tr.ts";

export const LANGS = ["en", "tr"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export type MessageKey = keyof typeof en;
export type Params = Record<string, string | number>;

const MESSAGES: Record<Lang, Record<MessageKey, string>> = { en, tr };

export const isLang = (v: unknown): v is Lang => typeof v === "string" && (LANGS as readonly string[]).includes(v);

/** First visit: follow the browser language when it is supported, otherwise English. */
export function detectLang(): Lang {
  try {
    for (const l of navigator.languages ?? [navigator.language]) {
      const base = l.slice(0, 2).toLowerCase();
      if (isLang(base)) return base;
    }
  } catch {
    /* no navigator: fall through */
  }
  return DEFAULT_LANG;
}

/** Looks a message up and fills `{placeholders}`. */
export function translate(lang: Lang, key: MessageKey, params?: Params): string {
  const raw = MESSAGES[lang][key] ?? MESSAGES[DEFAULT_LANG][key];
  return params ? raw.replace(/\{(\w+)\}/g, (m, k: string) => (k in params ? String(params[k]) : m)) : raw;
}
