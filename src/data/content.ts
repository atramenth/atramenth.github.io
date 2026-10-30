import type { IntroductionData, TranslatorData } from "../domain/types.ts";
import type { Lang } from "../i18n/index.ts";
import { INTRODUCTION } from "./introduction.ts";
import { TRANSLATOR } from "./translator.ts";
import { INTRODUCTION_TR } from "./tr/introduction.ts";
import { TRANSLATOR_TR } from "./tr/translator.ts";

/** Localised book content (everything except the sūrahs, which live in `surahs/` and `surahs/<lang>/`). */
const CONTENT: Record<Lang, { introduction: IntroductionData; translator: TranslatorData }> = {
  en: { introduction: INTRODUCTION, translator: TRANSLATOR },
  tr: { introduction: INTRODUCTION_TR, translator: TRANSLATOR_TR },
};

export const introductionFor = (lang: Lang): IntroductionData => CONTENT[lang].introduction;
export const translatorFor = (lang: Lang): TranslatorData => CONTENT[lang].translator;
