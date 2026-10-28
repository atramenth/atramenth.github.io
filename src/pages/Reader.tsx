import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Hexagon, IconBack, IconNext, IconType } from "../components/Icons.tsx";
import { InlineText } from "../components/InlineText.tsx";
import { NoteSheet } from "../components/NoteSheet.tsx";
import { SettingsSheet } from "../components/SettingsSheet.tsx";
import type { BookPage, Surah } from "../domain/Surah.ts";
import { library } from "../services/library.ts";
import { progress } from "../services/ProgressStore.ts";

function PageView({ page, onNote, unfinished }: { page: BookPage; onNote: (id: number) => void; unfinished: boolean }) {
  return (
    <section className="page" aria-label={`Book page ${page.bookPage}`}>
      <div className="paper">
        {page.heading && (
          <header className="heading">
            <h1 className="heading__title">
              <InlineText text={page.heading.title} onNote={onNote} />
            </h1>
            {page.heading.lines.map((l, i) => (
              <p key={i} className={i === 0 ? "heading__sub" : "heading__line"}>
                <InlineText text={l} onNote={onNote} />
              </p>
            ))}
            <svg className="heading__rule" viewBox="0 0 240 14" aria-hidden="true">
              <path d="M0 7h98M142 7h98" />
              <polygon points="120,1.5 127,7 120,12.5 113,7" />
            </svg>
          </header>
        )}
        <div className="verses">
          {page.blocks.map((b, i) =>
            b.type === "bismillah" ? (
              <p key={i} className="bismillah">
                {b.lines.map((l, j) => (
                  <span key={j}>{l}</span>
                ))}
              </p>
            ) : b.type === "divider" ? (
              <div key={i} className="divider" role="separator" aria-hidden="true">
                <i /> <i /> <i />
              </div>
            ) : (
              <p key={i} className={`verse${b.continued ? " is-continued" : ""}${b.continues ? " is-continues" : ""}`}>
                {b.lines.map((l, j) => (
                  <span key={j} className="verse__line">
                    <InlineText text={l} onNote={onNote} />
                  </span>
                ))}
                {!b.continues && (
                  <span className="ayah" aria-label={`Verse ${b.number}`}>
                    <Hexagon size={30}>
                      <text x="16" y="20.2" textAnchor="middle" fill="currentColor" stroke="none">
                        {b.number}
                      </text>
                    </Hexagon>
                  </span>
                )}
              </p>
            ),
          )}
        </div>
        {unfinished && <p className="partial">The remaining pages of this sūrah haven’t been added yet.</p>}
      </div>
    </section>
  );
}

export default function Reader() {
  const params = useParams();
  const navigate = useNavigate();
  const n = Number(params.number);
  const entry = library.get(n);

  const [surah, setSurah] = useState<Surah | null | undefined>(undefined);
  const [current, setCurrent] = useState(0);
  const [noteId, setNoteId] = useState<number | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const track = useRef<HTMLDivElement>(null);
  const initial = useRef(Math.max(0, Number(params.page ?? 1) - 1));

  useEffect(() => {
    let live = true;
    library.load(n).then((s) => live && setSurah(s));
    return () => {
      live = false;
    };
  }, [n]);

  const go = useCallback((i: number, smooth = true) => {
    const el = track.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: smooth ? "smooth" : "instant" });
  }, []);

  // Jump to the requested page once the surah has loaded.
  useEffect(() => {
    if (!surah) return;
    const i = Math.min(initial.current, surah.pages.length - 1);
    go(i, false);
    setCurrent(i);
  }, [surah, go]);

  // Keep the position in sync with swipes; persist progress and the URL.
  const onScroll = useCallback(() => {
    const el = track.current;
    if (!el || !surah) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i === current) return;
    setCurrent(i);
    progress.save(n, i);
    history.replaceState(null, "", `#/surah/${n}/${i + 1}`);
  }, [current, n, surah]);

  useEffect(() => {
    if (surah) progress.save(n, current);
  }, [surah, n, current]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (noteId !== null || showSettings || !surah) return;
      if (e.key === "ArrowRight") go(Math.min(current + 1, surah.pages.length - 1));
      if (e.key === "ArrowLeft") go(Math.max(current - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go, noteId, showSettings, surah]);

  if (!entry) {
    return (
      <main className="empty-page">
        <p>There is no sūrah {params.number}.</p>
        <Link className="btn" to="/surahs">
          Browse sūrahs
        </Link>
      </main>
    );
  }

  const parts = library.partRange(entry.number);
  const page = surah?.pages[current];
  const noteIds = page?.noteIds ?? [];

  return (
    <div className="reader">
      <header className="reader__bar">
        <button type="button" className="icon-btn" onClick={() => (history.length > 1 ? navigate(-1) : navigate("/surahs"))} aria-label="Back">
          <IconBack />
        </button>
        <div className="reader__title">
          <strong>{entry.name}</strong>
          <span>
            Sūrah {entry.number} · {parts.first === parts.last ? `Part ${parts.first}` : `Parts ${parts.first}–${parts.last}`}
          </span>
        </div>
        <button type="button" className="icon-btn" onClick={() => setShowSettings(true)} aria-label="Reading settings">
          <IconType />
        </button>
      </header>

      {surah === undefined && <div className="reader__state">Opening…</div>}

      {surah === null && (
        <div className="reader__state">
          <div className="soon">
            <Hexagon size={54}>
              <text x="16" y="19.5" textAnchor="middle" fill="currentColor" stroke="none" fontSize="9">
                {entry.number}
              </text>
            </Hexagon>
            <h1>Not added yet</h1>
            <p>
              {entry.name} starts on page {entry.bookPage} of the book. Add <code>s{String(entry.number).padStart(3, "0")}.ts</code> to{" "}
              <code>src/data/surahs</code> and it opens here.
            </p>
            <Link className="btn" to="/surahs">
              Browse sūrahs
            </Link>
          </div>
        </div>
      )}

      {surah && (
        <>
          <div className="reader__track" ref={track} onScroll={onScroll} tabIndex={-1}>
            {surah.pages.map((p, i) => (
              <PageView key={p.bookPage} page={p} onNote={setNoteId} unfinished={surah.partial && i === surah.pages.length - 1} />
            ))}
          </div>

          <footer className="dock">
            <div className="dock__notes" aria-label="Notes on this page">
              {noteIds.length > 0 && <span className="dock__label">Notes</span>}
              {noteIds.map((id) => (
                <button key={id} type="button" className="chip" onClick={() => setNoteId(id)} aria-label={`Open note ${id}`}>
                  {id}
                </button>
              ))}
            </div>
            <div className="dock__pager">
              <button type="button" className="icon-btn" disabled={current === 0} onClick={() => go(current - 1)} aria-label="Previous page">
                <IconBack />
              </button>
              <span className="dock__pos" aria-live="polite">
                {current + 1} / {surah.pages.length}
                <small>book p. {page?.bookPage}</small>
              </span>
              <button type="button" className="icon-btn" disabled={current === surah.pages.length - 1} onClick={() => go(current + 1)} aria-label="Next page">
                <IconNext />
              </button>
            </div>
          </footer>
        </>
      )}

      {surah && noteId !== null && <NoteSheet surah={surah} noteId={noteId} onSelect={setNoteId} onClose={() => setNoteId(null)} />}
      {showSettings && <SettingsSheet onClose={() => setShowSettings(false)} />}
    </div>
  );
}
