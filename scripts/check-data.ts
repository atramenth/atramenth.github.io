// Sanity-checks the data files: run with `npm run check:data`.
import { readdirSync } from "node:fs";
import { CATALOG } from "../src/data/catalog.ts";
import { PART_STARTS } from "../src/data/parts.ts";
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
console.log(problems ? `${problems} problem(s)` : "All data checks passed");
process.exit(problems ? 1 : 0);
