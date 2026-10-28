import { CatalogItem, Surah } from "./Surah.ts";
import type { CatalogEntry, PartStart, SurahData } from "./types.ts";

/** Last printed page of the book (An-Nās is the final surah). */
export const LAST_BOOK_PAGE = 1197;

type Loader = () => Promise<{ default: SurahData }>;

/**
 * Single access point for the catalog, the 30 parts and the lazily loaded
 * surah files. Dropping `sNNN.ts` into `data/surahs/` is all that is needed
 * to make a surah readable; nothing else has to be registered.
 */
export class Library {
  readonly items: readonly CatalogItem[];
  private readonly partStarts: readonly PartStart[];
  private readonly loaders = new Map<number, Loader>();
  private readonly cache = new Map<number, Surah>();

  constructor(catalog: readonly CatalogEntry[], partStarts: readonly PartStart[]) {
    this.items = catalog.map((e) => new CatalogItem(e));
    this.partStarts = partStarts;
    const files = import.meta.glob<{ default: SurahData }>("../data/surahs/s*.ts");
    for (const [path, loader] of Object.entries(files)) {
      const n = Number(/s(\d+)\.ts$/.exec(path)?.[1]);
      if (Number.isInteger(n)) this.loaders.set(n, loader);
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

  async load(n: number): Promise<Surah | null> {
    const hit = this.cache.get(n);
    if (hit) return hit;
    const loader = this.loaders.get(n);
    if (!loader) return null;
    const surah = new Surah((await loader()).default);
    this.cache.set(n, surah);
    return surah;
  }

  /** Pages occupied by a surah in the printed book. */
  pageSpan(n: number): number {
    const next = this.items[n]?.bookPage ?? LAST_BOOK_PAGE;
    return next - this.items[n - 1].bookPage;
  }

  /** Part (1–30) in which a surah begins. */
  partOf(n: number): number {
    let part = 1;
    for (const s of this.partStarts) if (s.surah <= n) part = s.part;
    return part;
  }

  /** Surahs grouped by the part they begin in (parts starting mid-surah get an empty list). */
  byPart(): { part: number; items: CatalogItem[] }[] {
    const groups = new Map<number, CatalogItem[]>();
    for (const item of this.items) {
      const p = this.partOf(item.number);
      groups.set(p, [...(groups.get(p) ?? []), item]);
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
