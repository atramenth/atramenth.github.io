import { useStore } from "../hooks/useStore.ts";
import { SettingsStore, settings, type ThemeChoice } from "../services/SettingsStore.ts";
import { Sheet } from "./Sheet.tsx";

const THEMES: { id: ThemeChoice; label: string; hint: string }[] = [
  { id: "auto", label: "Auto", hint: "Follows your device" },
  { id: "light", label: "Paper", hint: "Cool ink on soft grey" },
  { id: "dark", label: "Slate", hint: "Bone on near-black" },
];

export function SettingsSheet({ onClose }: { onClose: () => void }) {
  const s = useStore(settings);
  return (
    <Sheet label="Reading settings" onClose={onClose} header="Reading">
      <div className="setting">
        <div className="setting__label">Text size</div>
        <div className="stepper">
          <button type="button" className="btn" onClick={() => settings.stepText(-1)} disabled={s.textStep <= SettingsStore.MIN_STEP} aria-label="Smaller text">
            <span style={{ fontSize: "0.85rem" }}>A</span>
          </button>
          <div className="stepper__dots" aria-hidden="true">
            {Array.from({ length: SettingsStore.MAX_STEP - SettingsStore.MIN_STEP + 1 }, (_, i) => (
              <i key={i} className={i + SettingsStore.MIN_STEP <= s.textStep ? "on" : ""} />
            ))}
          </div>
          <button type="button" className="btn" onClick={() => settings.stepText(1)} disabled={s.textStep >= SettingsStore.MAX_STEP} aria-label="Larger text">
            <span style={{ fontSize: "1.3rem" }}>A</span>
          </button>
        </div>
      </div>
      <div className="setting">
        <div className="setting__label">Theme</div>
        <div className="seg" role="radiogroup" aria-label="Theme">
          {THEMES.map((t) => (
            <button key={t.id} type="button" role="radio" aria-checked={s.theme === t.id} className={s.theme === t.id ? "is-on" : ""} onClick={() => settings.setTheme(t.id)}>
              <strong>{t.label}</strong>
              <small>{t.hint}</small>
            </button>
          ))}
        </div>
      </div>
    </Sheet>
  );
}
