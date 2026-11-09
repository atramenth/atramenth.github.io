import { useStore } from "../hooks/useStore.ts";
import { useT } from "../hooks/useT.tsx";
import { LANGS, type MessageKey } from "../i18n/index.ts";
import { library } from "../services/library.ts";
import { locale } from "../services/LocaleStore.ts";
import { SettingsStore, settings, type AdditionsChoice, type LinesChoice, type ThemeChoice } from "../services/SettingsStore.ts";
import { MarkedLines } from "./InlineText.tsx";
import { Sheet } from "./Sheet.tsx";

const THEMES: { id: ThemeChoice; label: MessageKey; hint: MessageKey }[] = [
  { id: "auto", label: "settings.auto", hint: "settings.autoHint" },
  { id: "dark", label: "settings.dark", hint: "settings.darkHint" },
  { id: "light", label: "settings.light", hint: "settings.lightHint" },
  { id: "dawn", label: "settings.dawn", hint: "settings.dawnHint" },
];
const LINES: { id: LinesChoice; label: MessageKey; hint: MessageKey }[] = [
  { id: "auto", label: "settings.linesAuto", hint: "settings.linesAutoHint" },
  { id: "printed", label: "settings.linesPrinted", hint: "settings.linesPrintedHint" },
  { id: "flow", label: "settings.linesFlow", hint: "settings.linesFlowHint" },
];
const ADDITIONS: { id: AdditionsChoice; label: MessageKey }[] = [
  { id: "highlight", label: "settings.addHighlight" },
  { id: "italic", label: "settings.addItalic" },
];
const LEADING: MessageKey[] = ["settings.leadClose", "settings.leadEven", "settings.leadAiry"];

/** Printed lines with a translator's insertion that runs across two of them: the live preview of every choice below. */
const SAMPLE = ["The path of those upon whom you", "Bestowed the blessing [of salvation], not", "[The path] of those [who due to their", "Denial of the Truth] were inflicted by", "Your Wrath, nor those gone astray."];

export function SettingsSheet({ onClose }: { onClose: () => void }) {
  const { t, lang } = useT();
  const s = useStore(settings);
  return (
    <Sheet label={t("reader.settings")} onClose={onClose} header={t("settings.title")} tall>
      <div className="preview" lang="en" aria-hidden="true">
        <p className="verse">
          <MarkedLines lines={SAMPLE} />
        </p>
      </div>

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
        <div className="setting__label">{t("settings.spacing")}</div>
        <div className="seg seg--tight" role="radiogroup" aria-label={t("settings.spacing")}>
          {LEADING.map((key, i) => (
            <button key={key} type="button" role="radio" aria-checked={s.leading === i} className={s.leading === i ? "is-on" : ""} onClick={() => settings.setLeading(i)}>
              {t(key)}
            </button>
          ))}
        </div>
      </div>

      <div className="setting">
        <div className="setting__label">{t("settings.theme")}</div>
        <div className="themes" role="radiogroup" aria-label={t("settings.theme")}>
          {THEMES.map((th) => (
            <button key={th.id} type="button" role="radio" aria-checked={s.theme === th.id} className={`theme theme--${th.id}${s.theme === th.id ? " is-on" : ""}`} onClick={() => settings.setTheme(th.id)}>
              <span className="theme__swatch" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <strong>{t(th.label)}</strong>
              <small>{t(th.hint)}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="setting">
        <div className="setting__label">{t("settings.lines")}</div>
        <div className="seg" role="radiogroup" aria-label={t("settings.lines")}>
          {LINES.map((l) => (
            <button key={l.id} type="button" role="radio" aria-checked={s.lines === l.id} className={s.lines === l.id ? "is-on" : ""} onClick={() => settings.setLines(l.id)}>
              <strong>{t(l.label)}</strong>
              <small>{t(l.hint)}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="setting">
        <div className="setting__label">{t("settings.additions")}</div>
        <div className="seg seg--tight" role="radiogroup" aria-label={t("settings.additions")}>
          {ADDITIONS.map((a) => (
            <button key={a.id} type="button" role="radio" aria-checked={s.additions === a.id} className={s.additions === a.id ? "is-on" : ""} onClick={() => settings.setAdditions(a.id)}>
              {t(a.label)}
            </button>
          ))}
        </div>
      </div>

      <div className="setting setting--row">
        <div>
          <div className="setting__label setting__label--solo">{t("settings.awake")}</div>
          <p className="setting__hint">{t("settings.awakeHint")}</p>
        </div>
        <button type="button" role="switch" aria-checked={s.awake} aria-label={t("settings.awake")} className={`switch${s.awake ? " is-on" : ""}`} onClick={() => settings.setAwake(!s.awake)}>
          <i />
        </button>
      </div>

      <div className="setting">
        <div className="setting__label">{t("lang.label")}</div>
        <div className="seg seg--tight" role="radiogroup" aria-label={t("lang.label")}>
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
