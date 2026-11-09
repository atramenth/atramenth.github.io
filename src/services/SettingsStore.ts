import { Store } from "./Store.ts";

export type ThemeChoice = "auto" | "light" | "dark" | "dawn";
/** How the printed line breaks of a verse are treated. `auto` keeps them only where a printed line fits on one line. */
export type LinesChoice = "auto" | "printed" | "flow";
/** How the translator's own words in [brackets] are drawn. */
export type AdditionsChoice = "highlight" | "italic";

export interface Settings {
  theme: ThemeChoice;
  /** Reading size step, 0 = default. */
  textStep: number;
  /** Line spacing: 0 compact, 1 standard, 2 relaxed. */
  leading: number;
  lines: LinesChoice;
  additions: AdditionsChoice;
  /** Keep the screen awake while a sūrah is open. */
  awake: boolean;
}

const THEME_COLOR: Record<"dark" | "light" | "dawn", string> = { dark: "#08090b", light: "#d5d9d8", dawn: "#e4dac6" };
const LEADING = [1.38, 1.5, 1.68];

export class SettingsStore extends Store<Settings> {
  static readonly MIN_STEP = -2;
  static readonly MAX_STEP = 4;
  static readonly MAX_LEADING = 2;

  constructor() {
    super("atramenth:settings", { theme: "auto", textStep: 0, leading: 1, lines: "auto", additions: "highlight", awake: false });
    this.apply();
    // Follow the device while the theme is "auto".
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => this.apply());
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

  setLeading(leading: number): void {
    this.patch({ leading: Math.min(SettingsStore.MAX_LEADING, Math.max(0, leading)) });
    this.apply();
  }

  setLines(lines: LinesChoice): void {
    this.patch({ lines });
    this.apply();
  }

  setAdditions(additions: AdditionsChoice): void {
    this.patch({ additions });
    this.apply();
  }

  setAwake(awake: boolean): void {
    this.patch({ awake });
  }

  /** Reflect settings onto <html> so CSS can react. */
  private apply(): void {
    const { theme, textStep, leading, lines, additions } = this.getSnapshot();
    const root = document.documentElement;
    if (theme === "auto") delete root.dataset.theme;
    else root.dataset.theme = theme;
    root.dataset.lines = lines;
    root.dataset.additions = additions;
    root.style.setProperty("--read-scale", String(1 + textStep * 0.0875));
    root.style.setProperty("--leading", String(LEADING[leading] ?? LEADING[1]));
    const resolved = theme === "auto" ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[resolved]);
  }
}

export const settings = new SettingsStore();
