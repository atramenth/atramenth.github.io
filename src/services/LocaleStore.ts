import { DEFAULT_LANG, detectLang, isLang, translate, type Lang } from "../i18n/index.ts";
import { Store } from "./Store.ts";

/** The reader's language. Persisted, and mirrored onto <html lang> so fonts, hyphenation and screen readers follow. */
export class LocaleStore extends Store<{ lang: Lang }> {
  constructor() {
    super("atramenth:locale", { lang: detectLang() });
    if (!isLang(this.getSnapshot().lang)) this.patch({ lang: DEFAULT_LANG });
    this.apply();
  }

  setLang(lang: Lang): void {
    if (lang === this.getSnapshot().lang) return;
    this.patch({ lang });
    this.apply();
  }

  toggle(): void {
    this.setLang(this.getSnapshot().lang === "en" ? "tr" : "en");
  }

  private apply(): void {
    const { lang } = this.getSnapshot();
    document.documentElement.lang = lang;
    document.querySelector('meta[name="description"]')?.setAttribute("content", translate(lang, "meta.description"));
  }
}

export const locale = new LocaleStore();
