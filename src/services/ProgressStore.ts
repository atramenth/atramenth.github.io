import { Store } from "./Store.ts";

export interface Progress {
  surah: number;
  pageIndex: number;
}

/** Remembers the last reading position (Continue reading). */
export class ProgressStore extends Store<{ last: Progress | null }> {
  constructor() {
    super("atramenth:progress", { last: null });
  }

  save(surah: number, pageIndex: number): void {
    const last = this.getSnapshot().last;
    if (last?.surah === surah && last.pageIndex === pageIndex) return;
    this.patch({ last: { surah, pageIndex } });
  }
}

export const progress = new ProgressStore();
