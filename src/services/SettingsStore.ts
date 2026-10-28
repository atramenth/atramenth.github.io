import { Store } from "./Store.ts";

export type ThemeChoice = "auto" | "light" | "dark";

export interface Settings {
  theme: ThemeChoice;
  /** Reading size step, 0 = default. */
  textStep: number;
}

export class SettingsStore extends Store<Settings> {
  static readonly MIN_STEP = -2;
  static readonly MAX_STEP = 4;

  constructor() {
    super("atramenth:settings", { theme: "auto", textStep: 0 });
    this.apply();
  }

  setTheme(theme: ThemeChoice): void {
    this.patch({ theme });
    this.apply();
  }

  stepText(delta: number): void {
    const next = Math.min(SettingsStore.MAX_STEP, Math.max(SettingsStore.MIN_STEP, this.getSnapshot().textStep + delta));
    this.patch({ textStep: next });
    this.apply();
  }

  /** Reflect settings onto <html> so CSS can react. */
  private apply(): void {
    const { theme, textStep } = this.getSnapshot();
    const root = document.documentElement;
    if (theme === "auto") delete root.dataset.theme;
    else root.dataset.theme = theme;
    root.style.setProperty("--read-scale", String(1 + textStep * 0.0875));
    const dark = theme === "dark" || (theme === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#08090b" : "#d5d9d8");
  }
}

export const settings = new SettingsStore();
