import { Store } from "./Store.ts";

/** One short message at a time, shown by <Toaster /> for a couple of seconds. */
export class ToastStore extends Store<{ message: string; id: number }> {
  constructor() {
    super("atramenth:toast", { message: "", id: 0 });
  }

  show(message: string): void {
    this.patch({ message, id: this.getSnapshot().id + 1 });
  }

  /** The toast is transient: never keep it between visits. */
  protected override patch(partial: Partial<{ message: string; id: number }>): void {
    super.patch(partial);
    try {
      localStorage.removeItem("atramenth:toast");
    } catch {
      /* storage unavailable */
    }
  }
}

export const toast = new ToastStore();
