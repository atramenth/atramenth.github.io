import { Store } from "./Store.ts";

export interface Bookmark {
  surah: number;
  /** 0-based page index inside the sūrah. */
  page: number;
  /** Printed book page, shown in lists. */
  bookPage: number;
  at: number;
}

/** Saved pages. One bookmark per page; tapping the ribbon again removes it. */
export class BookmarkStore extends Store<{ marks: Bookmark[] }> {
  constructor() {
    super("atramenth:bookmarks", { marks: [] });
  }

  has(surah: number, page: number): boolean {
    return this.getSnapshot().marks.some((m) => m.surah === surah && m.page === page);
  }

  toggle(surah: number, page: number, bookPage: number): boolean {
    const { marks } = this.getSnapshot();
    if (this.has(surah, page)) {
      this.patch({ marks: marks.filter((m) => !(m.surah === surah && m.page === page)) });
      return false;
    }
    this.patch({ marks: [{ surah, page, bookPage, at: Date.now() }, ...marks] });
    return true;
  }

  remove(surah: number, page: number): void {
    this.patch({ marks: this.getSnapshot().marks.filter((m) => !(m.surah === surah && m.page === page)) });
  }
}

export const bookmarks = new BookmarkStore();
