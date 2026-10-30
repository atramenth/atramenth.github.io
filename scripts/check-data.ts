// Sanity-checks the data files: run with `npm run check:data`.
import { readdirSync } from "node:fs";
import { CATALOG } from "../src/data/catalog.ts";
import { INTRODUCTION } from "../src/data/introduction.ts";
import { INTRODUCTION_TR } from "../src/data/tr/introduction.ts";
import { TRANSLATOR } from "../src/data/translator.ts";
import { TRANSLATOR_TR } from "../src/data/tr/translator.ts";
import type { IntroductionData } from "../src/domain/types.ts";
import { PART_STARTS } from "../src/data/parts.ts";
import { InlineParser } from "../src/domain/InlineParser.ts";
import { Surah } from "../src/domain/Surah.ts";

let problems = 0;
const fail = (m: string) => {
  problems++;
  console.error("✗", m);
};

if (CATALOG.length !== 114) fail(`catalog has ${CATALOG.length} entries, expected 114`);
if (PART_STARTS.length !== 30) fail(`parts has ${PART_STARTS.length} entries, expected 30`);
const ayahs = CATALOG.reduce((s, c) => s + c.ayahCount, 0);
if (ayahs !== 6236) fail(`ayah total is ${ayahs}, expected 6236`);
CATALOG.forEach((c, i) => {
  if (c.number !== i + 1) fail(`catalog order broken at ${c.name}`);
  if (i > 0 && c.bookPage <= CATALOG[i - 1].bookPage) fail(`page order broken at ${c.name}`);
});

const dir = new URL("../src/data/surahs/", import.meta.url);
for (const f of readdirSync(dir).filter((f) => /^s\d{3}\.ts$/.test(f))) {
  const { default: data } = await import(new URL(f, dir).href);
  const n = Number(f.slice(1, 4));
  if (data.number !== n) fail(`${f}: number is ${data.number}`);
  try {
    const s = new Surah(data);
    const last = s.pages.flatMap((p) => p.verses).at(-1)?.number;
    if (s.partial) {
      if (last === CATALOG[n - 1].ayahCount) fail(`${f}: reaches the last verse, remove "partial: true"`);
    } else if (last !== CATALOG[n - 1].ayahCount) {
      fail(`${f}: last verse ${last}, catalog says ${CATALOG[n - 1].ayahCount} (set "partial: true" if pages are missing)`);
    }
    const cited = new Set(s.pages.flatMap((p) => p.noteIds));
    for (const id of s.footnotes.keys()) if (!cited.has(id)) fail(`${f}: footnote ${id} is never cited`);
    console.log(`✓ ${f}: ${s.pages.length} pages, ${s.footnotes.size} notes${s.partial ? ", partial (ends at verse " + last + ")" : ""}`);
  } catch (e) {
    fail(`${f}: ${(e as Error).message}`);
  }
}
// Translated sūrahs (src/data/surahs/<lang>/sNNN.ts): same validation, and they need an English base file.
for (const lang of readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)) {
  const ldir = new URL(`../src/data/surahs/${lang}/`, import.meta.url);
  for (const f of readdirSync(ldir).filter((f) => /^s\d{3}\.ts$/.test(f))) {
    const { default: data } = await import(new URL(f, ldir).href);
    const n = Number(f.slice(1, 4));
    if (data.number !== n) fail(`${lang}/${f}: number is ${data.number}`);
    if (!readdirSync(dir).includes(f)) fail(`${lang}/${f}: no English base file ${f}`);
    try {
      const s = new Surah(data);
      const cited = new Set(s.pages.flatMap((p) => p.noteIds));
      for (const id of s.footnotes.keys()) if (!cited.has(id)) fail(`${lang}/${f}: footnote ${id} is never cited`);
      console.log(`✓ ${lang}/${f}: ${s.pages.length} pages, ${s.footnotes.size} notes`);
    } catch (e) {
      fail(`${lang}/${f}: ${(e as Error).message}`);
    }
  }
}
// Introduction: markers 1..N in reading order, each with exactly one footnote, each footnote cited.
function checkIntroduction(label: string, intro: IntroductionData) {
  const texts = intro.blocks.flatMap((b) => ("text" in b ? [b.text] : "lines" in b ? b.lines : []));
  const cited = texts.flatMap((t) => InlineParser.noteIds(t));
  const have = intro.footnotes.map((f) => f.id);
  if (new Set(have).size !== have.length) fail(`${label}: duplicate footnote ids`);
  cited.forEach((id, i) => {
    if (id !== i + 1) fail(`${label}: marker {${id}} is out of order (expected {${i + 1}})`);
    if (!have.includes(id)) fail(`${label}: marker {${id}} has no footnote`);
  });
  for (const id of have) if (!cited.includes(id)) fail(`${label}: footnote ${id} is never cited`);
  if (intro.blocks.length) console.log(`✓ ${label}: ${intro.blocks.length} blocks, ${have.length} notes`);
}
checkIntroduction("introduction", INTRODUCTION);
checkIntroduction("introduction (tr)", INTRODUCTION_TR);

// The Turkish edition must mirror the English one: same block types in the same order, same footnote ids.
if (INTRODUCTION_TR.blocks.length !== INTRODUCTION.blocks.length) fail("introduction (tr): block count differs from English");
INTRODUCTION.blocks.forEach((b, i) => {
  const t = INTRODUCTION_TR.blocks[i];
  if (t?.type !== b.type) fail(`introduction (tr): block ${i + 1} is "${t?.type}", English has "${b.type}"`);
  else if ("lines" in b && "lines" in t && b.lines.length !== t.lines.length) fail(`introduction (tr): block ${i + 1} has a different number of lines`);
  // Arabic is never translated: every Arabic run in the English must survive in the Turkish.
  if ("text" in b && "text" in t) {
    const runs = (x: string) => InlineParser.splitArabic(x).filter((r) => r.arabic).map((r) => r.text.trim());
    if (runs(b.text).join("|") !== runs(t.text).join("|")) fail(`introduction (tr): block ${i + 1} Arabic text differs from English`);
  }
});
if (INTRODUCTION_TR.footnotes.map((f) => f.id).join() !== INTRODUCTION.footnotes.map((f) => f.id).join()) fail("introduction (tr): footnote ids differ from English");

// Translator page: same number of paragraphs, same bold emphasis count.
if (TRANSLATOR_TR.paragraphs.length !== TRANSLATOR.paragraphs.length) fail("translator (tr): paragraph count differs from English");
TRANSLATOR.paragraphs.forEach((p, i) => {
  const bold = (x: string) => (x.match(/\*\*/g) ?? []).length;
  if (bold(p) !== bold(TRANSLATOR_TR.paragraphs[i] ?? "")) fail(`translator (tr): paragraph ${i + 1} bold markers differ from English`);
});
console.log(problems ? `${problems} problem(s)` : "All data checks passed");
process.exit(problems ? 1 : 0);
