import { useT } from "../hooks/useT.tsx";
import { LANGS } from "../i18n/index.ts";
import { locale } from "../services/LocaleStore.ts";

/** Compact EN | TR switch. One tap swaps language; the active code is lit. */
export function LangToggle() {
  const { lang, t } = useT();
  const other = lang === "en" ? "tr" : "en";
  const label = t("lang.switch", { name: t(`lang.name.${other}`) });
  return (
    <button type="button" className="lang" onClick={() => locale.toggle()} aria-label={label} title={label}>
      <span className="lang__pill" aria-hidden="true">
        {LANGS.map((l) => (
          <span key={l} className={`lang__opt${l === lang ? " is-on" : ""}`}>
            {l.toUpperCase()}
          </span>
        ))}
      </span>
    </button>
  );
}
