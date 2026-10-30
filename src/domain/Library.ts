import { CatalogItem, Surah } from "./Surah.ts";
import type { Lang } from "../i18n/index.ts";
import type { CatalogEntry, PartStart, SurahData } from "./types.ts";

/** Last printed page of the book (An-Nās is the final surah). */
export const LAST_BOOK_PAGE = 1197;

type Loader = () => Promise<{ default: SurahData }>;

/**
 * Single access point for the catalog, the 30 parts and the lazily loaded
 * surah files. Dropping `sNNN.ts` into `data/surahs/` is all that is needed
 * to make a surah readable; nothing else has to be registered. A translation
 * goes in `data/surahs/<lang>/sNNN.ts`; until it exists the English file is used.
 */
export class Library {
  readonly items: readonly CatalogItem[];
  private readonly partStarts: readonly PartStart[];
  private readonly loaders = new Map<number, Loader>();
  private readonly translated = new Map<Lang, Map<number, Loader>>();
  private readonly cache = new Map<string, Surah>();

  constructor(catalog: readonly CatalogEntry[], partStarts: readonly PartStart[]) {
    this.items = catalog.map((e) => new CatalogItem(e));
    this.partStarts = partStarts;
    const files = import.meta.glob<{ default: SurahData }>("../data/surahs/s*.ts");
    for (const [path, loader] of Object.entries(files)) {
      const n = Number(/s(\d+)\.ts$/.exec(path)?.[1]);
      if (Number.isInteger(n)) this.loaders.set(n, loader);
    }
    const localised = import.meta.glob<{ default: SurahData }>("../data/surahs/*/s*.ts");
    for (const [path, loader] of Object.entries(localised)) {
      const m = /surahs\/([a-z]{2})\/s(\d+)\.ts$/.exec(path);
      if (!m) continue;
      const lang = m[1] as Lang;
      this.translated.set(lang, (this.translated.get(lang) ?? new Map()).set(Number(m[2]), loader));
    }
  }

  get(n: number): CatalogItem | undefined {
    return this.items[n - 1];
  }

  isAvailable(n: number): boolean {
    return this.loaders.has(n);
  }

  get availableCount(): number {
    return this.loaders.size;
  }

  /** How many sūrahs have their own text in `lang`. */
  translatedCount(lang: Lang): number {
    return lang === "en" ? this.loaders.size : (this.translated.get(lang)?.size ?? 0);
  }

  /** True when a sūrah has its own text in `lang` (English is the base and always counts). */
  hasTranslation(n: number, lang: Lang): boolean {
    return lang === "en" ? this.loaders.has(n) : (this.translated.get(lang)?.has(n) ?? false);
  }

  /** The language the sūrah text will actually be shown in: `lang`, or English when not translated yet. */
  contentLang(n: number, lang: Lang): Lang {
    return this.hasTranslation(n, lang) ? lang : "en";
  }

  async load(n: number, lang: Lang = "en"): Promise<Surah | null> {
    const shown = this.contentLang(n, lang);
    const key = `${shown}:${n}`;
    const hit = this.cache.get(key);
    if (hit) return hit;
    const loader = shown === "en" ? this.loaders.get(n) : this.translated.get(shown)?.get(n);
    if (!loader) return null;
    const surah = new Surah((await loader()).default);
    this.cache.set(key, surah);
    return surah;
  }

  /** Pages occupied by a surah in the printed book. */
  pageSpan(n: number): number {
    const next = this.items[n]?.bookPage ?? LAST_BOOK_PAGE;
    return next - this.items[n - 1].bookPage;
  }

  /** Part (1–30) that contains a given verse. Compares (surah, ayah), not just the surah. */
  partAt(surah: number, ayah: number): number {
    let part = 1;
    for (const s of this.partStarts) {
      if (s.surah < surah || (s.surah === surah && s.ayah <= ayah)) part = s.part;
    }
    return part;
  }

  /** Part (1–30) in which a surah begins. */
  partOf(n: number): number {
    return this.partAt(n, 1);
  }

  /** First and last part a surah runs through (Al-Baqarah: 1 to 3). */
  partRange(n: number): { first: number; last: number } {
    return { first: this.partOf(n), last: this.partAt(n, this.items[n - 1].ayahCount) };
  }

  /**
   * Surahs listed under every part they run through. `continues` is true when
   * the surah began in an earlier part.
   */
  byPart(): { part: number; items: { item: CatalogItem; continues: boolean }[] }[] {
    const groups = new Map<number, { item: CatalogItem; continues: boolean }[]>();
    for (const item of this.items) {
      const { first, last } = this.partRange(item.number);
      for (let p = first; p <= last; p++) {
        groups.set(p, [...(groups.get(p) ?? []), { item, continues: p > first }]);
      }
    }
    return this.partStarts.map((s) => ({ part: s.part, items: groups.get(s.part) ?? [] }));
  }

  /** Approximate book page where a part begins (interpolated inside its surah). */
  partStartPage(part: number): number {
    const s = this.partStarts[part - 1];
    const item = this.items[s.surah - 1];
    return item.bookPage + ((s.ayah - 1) / item.ayahCount) * this.pageSpan(s.surah);
  }

  count(place: CatalogEntry["place"]): number {
    return this.items.filter((i) => i.place === place).length;
  }
}
