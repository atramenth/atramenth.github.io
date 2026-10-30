import { Fragment, useMemo, type ReactNode } from "react";
import { translate, type Lang, type MessageKey, type Params } from "../i18n/index.ts";
import { locale } from "../services/LocaleStore.ts";
import { useStore } from "./useStore.ts";

export interface T {
  lang: Lang;
  t: (key: MessageKey, params?: Params) => string;
  /** Like `t`, but text between `backticks` is set as <code>. */
  rich: (key: MessageKey, params?: Params) => ReactNode;
}

export function useT(): T {
  const { lang } = useStore(locale);
  return useMemo<T>(() => {
    const t = (key: MessageKey, params?: Params) => translate(lang, key, params);
    const rich = (key: MessageKey, params?: Params) =>
      t(key, params)
        .split("`")
        .map((part, i) => (i % 2 ? <code key={i}>{part}</code> : <Fragment key={i}>{part}</Fragment>));
    return { lang, t, rich };
  }, [lang]);
}
