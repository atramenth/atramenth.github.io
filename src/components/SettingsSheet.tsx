import { useStore } from "../hooks/useStore.ts";
import { useT } from "../hooks/useT.tsx";
import { LANGS } from "../i18n/index.ts";
import { library } from "../services/library.ts";
import { locale } from "../services/LocaleStore.ts";
import { SettingsStore, settings, type ThemeChoice } from "../services/SettingsStore.ts";
import type { MessageKey } from "../i18n/index.ts";
import { Sheet } from "./Sheet.tsx";

const THEMES: { id: ThemeChoice; label: MessageKey; hint: MessageKey }[] = [
  { id: "auto", label: "settings.auto", hint: "settings.autoHint" },
  { id: "light", label: "settings.light", hint: "settings.lightHint" },
  { id: "dark", label: "settings.dark", hint: "settings.darkHint" },
];

export function SettingsSheet({ onClose }: { onClose: () => void }) {
  const { t, lang } = useT();
  const s = useStore(settings);
  return (
    <Sheet label={t("reader.settings")} onClose={onClose} header={t("settings.title")}>
      <div className="setting">
        <div className="setting__label">{t("settings.textSize")}</div>
        <div className="stepper">
          <button type="button" className="btn" onClick={() => settings.stepText(-1)} disabled={s.textStep <= SettingsStore.MIN_STEP} aria-label={t("settings.smaller")}>
            <span style={{ fontSize: "0.85rem" }}>A</span>
          </button>
          <div className="stepper__dots" aria-hidden="true">
            {Array.from({ length: SettingsStore.MAX_STEP - SettingsStore.MIN_STEP + 1 }, (_, i) => (
              <i key={i} className={i + SettingsStore.MIN_STEP <= s.textStep ? "on" : ""} />
            ))}
          </div>
          <button type="button" className="btn" onClick={() => settings.stepText(1)} disabled={s.textStep >= SettingsStore.MAX_STEP} aria-label={t("settings.larger")}>
            <span style={{ fontSize: "1.3rem" }}>A</span>
          </button>
        </div>
      </div>
      <div className="setting">
        <div className="setting__label">{t("settings.theme")}</div>
        <div className="seg" role="radiogroup" aria-label={t("settings.theme")}>
          {THEMES.map((th) => (
            <button key={th.id} type="button" role="radio" aria-checked={s.theme === th.id} className={s.theme === th.id ? "is-on" : ""} onClick={() => settings.setTheme(th.id)}>
              <strong>{t(th.label)}</strong>
              <small>{t(th.hint)}</small>
            </button>
          ))}
        </div>
      </div>
      <div className="setting">
        <div className="setting__label">{t("lang.label")}</div>
        <div className="seg" role="radiogroup" aria-label={t("lang.label")}>
          {LANGS.map((l) => (
            <button key={l} type="button" role="radio" lang={l} aria-checked={lang === l} className={lang === l ? "is-on" : ""} onClick={() => locale.setLang(l)}>
              <strong>{t(`lang.native.${l}`)}</strong>
            </button>
          ))}
        </div>
        {lang !== "en" && library.translatedCount(lang) === 0 && <p className="setting__hint">{t("lang.note")}</p>}
      </div>
    </Sheet>
  );
}
