import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { HexNumber, IconBack, IconBookmark, IconJump, IconNext, IconType, Ornament } from "../components/Icons.tsx";
import { JumpSheet } from "../components/JumpSheet.tsx";
import { MarkedLines, Tokens } from "../components/InlineText.tsx";
import { NoteSheet } from "../components/NoteSheet.tsx";
import { SettingsSheet } from "../components/SettingsSheet.tsx";
import { InlineParser } from "../domain/InlineParser.ts";
import type { BookPage, CatalogItem, Surah } from "../domain/Surah.ts";
import { useStore } from "../hooks/useStore.ts";
import { useT } from "../hooks/useT.tsx";
import { bookmarks } from "../services/BookmarkStore.ts";
import { library } from "../services/library.ts";
import { progress } from "../services/ProgressStore.ts";
import { settings } from "../services/SettingsStore.ts";
import { toast } from "../services/ToastStore.ts";

const HINT_KEY = "atramenth:hint-reader";

interface PageProps {
  page: BookPage;
  onNote: (id: number) => void;
  unfinished: boolean;
  contentLang: string;
  target: number | null;
}

function PageView({ page, onNote, unfinished, contentLang, target }: PageProps) {
  const { t } = useT();
  // The heading's title and sub-lines are one passage: a bracket opened in one stays open in the next.
  const heading = useMemo(() => (page.heading ? InlineParser.readLines([page.heading.title, ...page.heading.lines]).lines : null), [page.heading]);
  return (
    <section className="page" aria-label={t("reader.bookPage", { n: page.bookPage })}>
      <div className="paper" lang={contentLang}>
        {page.heading && heading && (
          <header className="heading">
            <h1 className="heading__title">
              <Tokens tokens={heading[0]} onNote={onNote} />
            </h1>
            {heading.slice(1).map((tokens, i) => (
              <p key={i} className={i === 0 ? "heading__sub" : "heading__line"}>
                <Tokens tokens={tokens} onNote={onNote} />
              </p>
            ))}
            <Ornament className="heading__rule" />
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
              <p
                key={i}
                data-verse={b.number}
                className={`verse${b.continued ? " is-continued" : ""}${b.continues ? " is-continues" : ""}${target === b.number ? " is-target" : ""}`}
              >
                <MarkedLines
                  lines={b.lines}
                  depth={page.openDepths[i] ?? 0}
                  onNote={onNote}
                  tail={
                    !b.continues && (
                      <span className="ayah" role="img" aria-label={t("reader.verse", { n: b.number })}>
                        <HexNumber n={b.number} size={30} />
                      </span>
                    )
                  }
                />
              </p>
            ),
          )}
        </div>
        {unfinished && <p className="partial">{t("reader.partial")}</p>}
        <footer className="folio" aria-hidden="true">
          <i />
          <span>{page.bookPage}</span>
          <i />
        </footer>
      </div>
    </section>
  );
}

function EndCard({ entry, surah, onRestart }: { entry: CatalogItem; surah: Surah; onRestart: () => void }) {
  const { t } = useT();
  const next = library.get(entry.number + 1);
  const nextReady = next ? library.isAvailable(next.number) : false;
  return (
    <section className="page page--end" aria-label={t("reader.end")}>
      <div className="paper endcard">
        <HexNumber n={entry.number} size={64} progress={surah.partial ? undefined : 1} />
        <h2>{surah.partial ? t("reader.endPartialTitle") : t("reader.endTitle", { name: entry.name })}</h2>
        <p>{surah.partial ? t("reader.endPartial") : t("reader.endBody")}</p>
        <Ornament />
        <div className="endcard__actions">
          {!surah.partial && next && nextReady && (
            <Link className="btn btn--primary" to={`/surah/${next.number}/1`} replace>
              {t("reader.nextSurah", { name: next.name })} <IconNext />
            </Link>
          )}
          {!surah.partial && next && !nextReady && <span className="endcard__soon">{t("reader.nextSoon", { name: next.name })}</span>}
          <button type="button" className="btn" onClick={onRestart}>
            {t("reader.again")}
          </button>
          <Link className="btn btn--quiet" to="/surahs">
            {t("reader.toLibrary")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Reader() {
  const { t, rich, lang } = useT();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const n = Number(params.number);
  const entry = library.get(n);
  const contentLang = library.contentLang(n, lang);
  const from = (location.state as { from?: string } | null)?.from;
  const marks = useStore(bookmarks).marks;
  const prefs = useStore(settings);

  const [surah, setSurah] = useState<Surah | null | undefined>(undefined);
  const [current, setCurrent] = useState(0);
  const [noteId, setNoteId] = useState<number | null>(null);
  const [panel, setPanel] = useState<"settings" | "jump" | null>(null);
  const [chrome, setChrome] = useState(true);
  const [target, setTarget] = useState<number | null>(null);
  const [hint, setHint] = useState(false);
  const track = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const seenParam = useRef<string | null>(null);
  const tap = useRef<{ x: number; y: number; t: number } | null>(null);
  position.current = current;

  const pageParam = params.page ?? "1";
  const total = surah?.pages.length ?? 0;
  const atEnd = surah ? current >= total : false;
  const pageIndex = surah ? Math.min(current, total - 1) : 0;
  const page = surah?.pages[pageIndex];

  // Load the text. Reloads only when the text itself changes (a sūrah, or its translation arriving).
  useEffect(() => {
    let live = true;
    library.load(n, contentLang).then((s) => live && setSurah(s));
    return () => {
      live = false;
    };
  }, [n, contentLang]);

  const go = useCallback((i: number, smooth = true) => {
    const el = track.current;
    if (!el) return;
    const last = el.children.length - 1;
    const to = Math.max(0, Math.min(i, last));
    el.scrollTo({ left: to * el.clientWidth, behavior: smooth && !matchMedia("(prefers-reduced-motion: reduce)").matches ? "smooth" : "instant" });
  }, []);

  // Open at the requested place: a page number (/surah/2/5) or a verse (/surah/10/v92) from a reference.
  // A language change reloads the text but keeps the reader where they are.
  useEffect(() => {
    if (!surah) return;
    const changed = seenParam.current !== pageParam;
    seenParam.current = pageParam;
    let i = Math.min(position.current, surah.pages.length);
    if (changed) {
      const v = /^v(\d+)$/.exec(pageParam)?.[1];
      if (v) {
        const at = surah.pageIndexOfVerse(Number(v));
        if (at < 0) {
          toast.show(t("jump.verseMissing", { n: Number(v) }));
          i = 0;
        } else {
          i = at;
          setTarget(Number(v));
        }
      } else i = Math.max(0, Math.min((Number(pageParam) || 1) - 1, surah.pages.length));
      setNoteId(null);
      setPanel(null);
    }
    go(i, false);
    setCurrent(i);
    if (changed && /^v\d+$/.test(pageParam)) {
      // Bring the verse into view inside a tall page.
      requestAnimationFrame(() => {
        const pageEl = track.current?.children[i] as HTMLElement | undefined;
        const verseEl = pageEl?.querySelector<HTMLElement>(`[data-verse="${pageParam.slice(1)}"]`);
        if (pageEl && verseEl) pageEl.scrollTop = Math.max(0, verseEl.offsetTop - pageEl.clientHeight / 3);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surah, pageParam, go]);

  useEffect(() => {
    if (target === null) return;
    const timer = window.setTimeout(() => setTarget(null), 3200);
    return () => window.clearTimeout(timer);
  }, [target]);

  // Keep the position in sync with swipes; persist progress and the URL (keeping the router's history state).
  const onScroll = useCallback(() => {
    const el = track.current;
    if (!el || !surah || !el.clientWidth) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i === position.current) return;
    setCurrent(i);
    progress.save(n, Math.min(i, surah.pages.length - 1), surah.pages.length);
    if (i >= surah.pages.length && !surah.partial) progress.finish(n);
    history.replaceState(history.state, "", `/surah/${n}/${i + 1}`);
  }, [n, surah]);

  useEffect(() => {
    if (surah) progress.save(n, Math.min(current, surah.pages.length - 1), surah.pages.length);
  }, [surah, n, current]);

  // Rotating the phone or resizing the window changes the page width: stay on the same page.
  useEffect(() => {
    const el = track.current;
    if (!el || !surah) return;
    let width = el.clientWidth;
    const ro = new ResizeObserver(() => {
      if (el.clientWidth !== width) {
        width = el.clientWidth;
        el.scrollTo({ left: position.current * width, behavior: "instant" });
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [surah]);

  // Keyboard.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (panel !== null || noteId !== null || !surah || tag === "INPUT" || tag === "TEXTAREA") return;
      const cur = position.current;
      if (e.key === "ArrowRight" || e.key === "PageDown") go(Math.min(cur + 1, surah.pages.length));
      else if (e.key === "ArrowLeft" || e.key === "PageUp") go(Math.max(cur - 1, 0));
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(surah.pages.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, noteId, panel, surah]);

  // Keep the screen awake while reading, when the reader asked for it.
  useEffect(() => {
    if (!prefs.awake || !surah || !("wakeLock" in navigator)) return;
    let lock: WakeLockSentinel | null = null;
    let live = true;
    const request = async () => {
      try {
        const l = await navigator.wakeLock.request("screen");
        if (live) lock = l;
        else void l.release();
      } catch {
        /* denied or unsupported: reading still works */
      }
    };
    const onVisible = () => document.visibilityState === "visible" && void request();
    void request();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      live = false;
      document.removeEventListener("visibilitychange", onVisible);
      void lock?.release();
    };
  }, [prefs.awake, surah]);

  // One-time hint about the gestures.
  useEffect(() => {
    if (!surah) return;
    try {
      if (!localStorage.getItem(HINT_KEY)) setHint(true);
    } catch {
      /* storage unavailable: no hint */
    }
  }, [surah]);
  const dismissHint = () => {
    setHint(false);
    try {
      localStorage.setItem(HINT_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  // Tap the middle to show or hide the controls; tap an edge to turn the page; a swipe hides the controls.
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (hint) dismissHint();
    tap.current = e.isPrimary ? { x: e.clientX, y: e.clientY, t: performance.now() } : null;
  };
  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const start = tap.current;
    tap.current = null;
    if (!start || !surah) return;
    const dx = Math.abs(e.clientX - start.x);
    const dy = Math.abs(e.clientY - start.y);
    if (dx > 36 && dx > dy) {
      setChrome(false);
      return;
    }
    if (dx > 10 || dy > 10 || performance.now() - start.t > 400) return;
    if ((e.target as HTMLElement).closest("button, a, input, .ref")) return;
    if (window.getSelection()?.toString()) return;
    const box = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width;
    if (x < 0.2) go(position.current - 1);
    else if (x > 0.8) go(position.current + 1);
    else setChrome((c) => !c);
  };

  const marked = marks.some((m) => m.surah === n && m.page === pageIndex);
  const toggleMark = () => {
    if (!page) return;
    const now = bookmarks.toggle(n, pageIndex, page.bookPage);
    toast.show(now ? t("reader.saved") : t("reader.unsaved"));
  };

  if (!entry) {
    return (
      <main className="empty-page">
        <p>{t("reader.noSurah", { n: params.number ?? "" })}</p>
        <Link className="btn" to="/surahs">
          {t("home.browse")}
        </Link>
      </main>
    );
  }

  const parts = library.partRange(entry.number);
  const noteIds = !atEnd ? (page?.noteIds ?? []) : [];
  const fraction = surah ? (atEnd ? 1 : (pageIndex + 1) / total) : 0;
  const here = page ? `${entry.name}, ${t("unit.pageShort")} ${page.bookPage}` : entry.name;
  const back = () => ((history.state?.idx ?? 0) > 0 ? navigate(-1) : navigate("/surahs", { replace: true }));

  return (
    <div className={`reader${chrome ? "" : " is-immersive"}${from ? " has-return" : ""}`}>
      <div className="reader__progress" aria-hidden="true">
        <i style={{ transform: `scaleX(${fraction})` }} />
      </div>

      <header className="reader__bar">
        <button type="button" className="icon-btn" onClick={back} aria-label={t("reader.back")}>
          <IconBack />
        </button>
        <button type="button" className="reader__title" onClick={() => surah && setPanel("jump")} aria-label={t("jump.title")} disabled={!surah}>
          <strong>{entry.name}</strong>
          <span>
            {t("reader.subtitle", { n: entry.number, part: parts.first === parts.last ? t("reader.part", { n: parts.first }) : t("reader.parts", { a: parts.first, b: parts.last }) })}
          </span>
        </button>
        <div className="reader__tools">
          <button type="button" className={`icon-btn${marked ? " is-on" : ""}`} onClick={toggleMark} disabled={!page} aria-pressed={marked} aria-label={marked ? t("reader.unsave") : t("reader.save")}>
            <IconBookmark filled={marked} />
          </button>
          <button type="button" className="icon-btn" onClick={() => setPanel("settings")} aria-label={t("reader.settings")}>
            <IconType />
          </button>
        </div>
        {from && (
          <button type="button" className="returnpill" onClick={() => navigate(-1)}>
            <IconBack /> {t("reader.returnTo", { name: from })}
          </button>
        )}
      </header>

      {surah && !chrome && (
        <div className="reader__ghost" aria-hidden="true">
          <span>{entry.name}</span>
          <span>{atEnd ? t("reader.end") : `${pageIndex + 1} / ${total}`}</span>
        </div>
      )}

      {surah === undefined && <div className="reader__state">{t("app.opening")}</div>}

      {surah === null && (
        <div className="reader__state">
          <div className="soon">
            <HexNumber n={entry.number} size={64} />
            <h1>{t("reader.notAddedTitle")}</h1>
            <p>{rich("reader.notAddedBody", { name: entry.name, page: entry.bookPage, file: `s${String(entry.number).padStart(3, "0")}.ts` })}</p>
            <Link className="btn" to="/surahs">
              {t("home.browse")}
            </Link>
          </div>
        </div>
      )}

      {surah && (
        <>
          <div className="reader__track" ref={track} onScroll={onScroll} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={() => (tap.current = null)} tabIndex={-1}>
            {surah.pages.map((p, i) => (
              <PageView key={p.bookPage} page={p} onNote={setNoteId} unfinished={surah.partial && i === surah.pages.length - 1} contentLang={contentLang} target={target} />
            ))}
            <EndCard entry={entry} surah={surah} onRestart={() => go(0)} />
          </div>

          {hint && (
            <button type="button" className="reader__hint" onClick={dismissHint}>
              {t("reader.hint")}
            </button>
          )}

          <footer className="dock">
            {noteIds.length > 0 && (
              <div className="dock__notes" role="group" aria-label={t("reader.notesOnPage")}>
                <span className="dock__label">{t("reader.notes")}</span>
                {noteIds.map((id) => (
                  <button key={id} type="button" className="chip" onClick={() => setNoteId(id)} aria-label={t("note.open", { n: id })}>
                    {id}
                  </button>
                ))}
              </div>
            )}
            <div className="dock__pager">
              <button type="button" className="icon-btn" disabled={current === 0} onClick={() => go(current - 1)} aria-label={t("reader.prevPage")}>
                <IconBack />
              </button>
              <button type="button" className="dock__pos" onClick={() => setPanel("jump")} aria-label={t("jump.title")}>
                <span aria-live="polite">{atEnd ? t("reader.end") : `${pageIndex + 1} / ${total}`}</span>
                <small>{atEnd ? entry.name : t("reader.bookPageShort", { n: page?.bookPage ?? "" })}</small>
                <IconJump />
              </button>
              <button type="button" className="icon-btn" disabled={atEnd} onClick={() => go(current + 1)} aria-label={t("reader.nextPage")}>
                <IconNext />
              </button>
            </div>
          </footer>
        </>
      )}

      {surah && noteId !== null && <NoteSheet surah={surah} contentLang={contentLang} noteId={noteId} from={here} onSelect={setNoteId} onClose={() => setNoteId(null)} />}
      {surah && panel === "jump" && <JumpSheet surah={surah} entry={entry} current={pageIndex} onGo={(i) => go(i, false)} onClose={() => setPanel(null)} />}
      {panel === "settings" && <SettingsSheet onClose={() => setPanel(null)} />}
    </div>
  );
}
