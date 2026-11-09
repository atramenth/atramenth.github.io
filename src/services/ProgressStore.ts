import { Store } from "./Store.ts";

export interface Progress {
  surah: number;
  pageIndex: number;
}

/** What is remembered about one sūrah. */
export interface SurahProgress {
  /** Page the reader was last on (0-based). */
  at: number;
  /** Furthest page reached (0-based). */
  max: number;
  /** Pages the sūrah had when last opened. */
  total: number;
  /** The end of the sūrah was reached. */
  done?: boolean;
}

interface State {
  last: Progress | null;
  surahs: Record<number, SurahProgress>;
}

/** Remembers where the reader is in every sūrah, and which one was open last (Continue reading). */
export class ProgressStore extends Store<State> {
  constructor() {
    super("atramenth:progress", { last: null, surahs: {} });
  }

  save(surah: number, pageIndex: number, total = 0): void {
    const { last, surahs } = this.getSnapshot();
    const prev = surahs[surah];
    const nextTotal = total || prev?.total || 0;
    const max = Math.max(prev?.max ?? 0, pageIndex);
    if (last?.surah === surah && last.pageIndex === pageIndex && prev?.max === max && prev?.total === nextTotal) return;
    this.patch({
      last: { surah, pageIndex },
      surahs: { ...surahs, [surah]: { ...prev, at: pageIndex, max, total: nextTotal } },
    });
  }

  /** The reader has turned past the last page of a sūrah. */
  finish(surah: number): void {
    const { surahs } = this.getSnapshot();
    const prev = surahs[surah];
    if (prev?.done) return;
    this.patch({ surahs: { ...surahs, [surah]: { at: prev?.at ?? 0, max: prev?.max ?? 0, total: prev?.total ?? 0, done: true } } });
  }

  of(surah: number): SurahProgress | undefined {
    return this.getSnapshot().surahs[surah];
  }

  /** 0 to 1: how much of a sūrah has been read. */
  fraction(surah: number): number {
    const p = this.getSnapshot().surahs[surah];
    if (!p) return 0;
    if (p.done) return 1;
    return p.total > 0 ? Math.min(1, (p.max + 1) / p.total) : 0;
  }
}

export const progress = new ProgressStore();
