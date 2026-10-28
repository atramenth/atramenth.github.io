# Atramenth

A quiet, mobile-first reader for the Qur’ān in English. React 19 · TypeScript (OOP domain layer) · Vite. Deployed to **https://atramenth.github.io** with GitHub Actions.

## Deploy
1. Create the repo **`atramenth/atramenth.github.io`** and push this folder to `main`.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` builds and publishes (`.github/workflows/deploy.yml`).

Routing is hash-based (`/#/surah/1/2`), so deep links work on Pages with no 404 hack.

## Develop
```
npm install
npm run dev
npm run check:data   # validates catalog, parts and every surah file
npm run build
```

## The three parts
| Part | Where |
|---|---|
| Sūrahs (30 parts) | `src/data/surahs/sNNN.ts` — one file per sūrah, picked up automatically |
| Index | `src/data/catalog.ts` (all 114 names, Makkah/Madīnah, book page, āyah counts) and `src/data/parts.ts` |
| Introduction | `src/data/introduction.ts` — add `sections` and the page fills in |

## Adding a sūrah
Copy `s001.ts`. Each entry in `pages` is one printed book page, so the reader matches the book page for page.

- `{4}` footnote marker · `[ … ]` translator’s insertion (may span lines) · `\n` printed line break
- `continued` / `continues` on a verse that crosses a page break
- A footnote that runs across two printed pages is written **once, in full**
- Definitions inside a note (“Verse:”, “Lord:”) use `{ kind: "definition", term, senses: [] }`

`npm run check:data` confirms every marker has a note, every note is cited, and the last verse number matches the catalog.

## Structure
```
src/domain     Surah, BookPage, Footnote, Library, InlineParser (OOP, no React)
src/services   Store base class, SettingsStore, ProgressStore
src/components OrbitChart (home art), Sheet, NoteSheet, SettingsSheet, TabBar
src/pages      Home, Surahs, IndexPage, Introduction, Reader
```
