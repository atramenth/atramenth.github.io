import { useMemo, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import { LAST_BOOK_PAGE } from "../domain/Library.ts";
import { useStore } from "../hooks/useStore.ts";
import { useT } from "../hooks/useT.tsx";
import { library } from "../services/library.ts";
import { progress } from "../services/ProgressStore.ts";

const C = 200;
const TOTAL = LAST_BOOK_PAGE - 1;
const deg = (page: number) => ((page - 1) / TOTAL) * 360;

function pt(r: number, d: number): [number, number] {
  const a = ((d - 90) * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)];
}
function arc(r: number, a0: number, a1: number): string {
  const [x0, y0] = pt(r, a0);
  const [x1, y1] = pt(r, a1);
  return `M${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}
function sector(r: number, a0: number, a1: number): string {
  const [x0, y0] = pt(r, a0);
  const [x1, y1] = pt(r, a1);
  return `M${C} ${C}L${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}Z`;
}

const R_MAKKAH = 150;
const R_MADINAH = 159;
const R_RULER = 136;

/** The sūrah that holds a printed page. */
function surahAtPage(page: number): number {
  const items = library.items;
  let lo = 0;
  let hi = items.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (items[mid].bookPage <= page) lo = mid;
    else hi = mid - 1;
  }
  return items[lo].number;
}

/**
 * The whole book as one ring. Each sūrah is an arc whose length is its page span; Makkan and Madīnan sūrahs run
 * on separate tracks; 30 radial cuts mark the parts; a ruler ring counts the pages. A slow scan sweeps the ring.
 *
 * Touch it anywhere around the ring and drag: the centre names the sūrah under your finger. A lantern dot marks
 * where you stopped reading, finished sūrahs are drawn in the lantern colour, and sūrahs not added yet are faint.
 */
export function OrbitChart() {
  const { t } = useT();
  const prog = useStore(progress);
  const [active, setActive] = useState<number | null>(null);
  const box = useRef<SVGSVGElement>(null);
  const dragging = useRef(false);

  const arcs = useMemo(
    () =>
      library.items.map((item) => {
        const span = library.pageSpan(item.number);
        const start = deg(item.bookPage);
        const full = (span / TOTAL) * 360;
        const gap = Math.min(0.3, full * 0.25);
        const r = item.place === "Makkah" ? R_MAKKAH : R_MADINAH;
        return { item, d: arc(r, start + gap / 2, start + full - gap / 2), ready: library.isAvailable(item.number) };
      }),
    [],
  );

  const parts = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => {
        const a = deg(library.partStartPage(i + 1));
        const [x0, y0] = pt(104, a);
        const [x1, y1] = pt(146, a);
        return { i, d: `M${x0.toFixed(2)} ${y0.toFixed(2)}L${x1.toFixed(2)} ${y1.toFixed(2)}` };
      }),
    [],
  );

  // Where the reader stopped: a lantern dot just outside the ring.
  const here = useMemo(() => {
    const last = prog.last;
    if (!last) return null;
    const item = library.get(last.surah);
    if (!item) return null;
    const total = prog.surahs[last.surah]?.total || 0;
    const f = total > 0 ? Math.min(1, last.pageIndex / total) : 0;
    const a = deg(item.bookPage + f * library.pageSpan(item.number));
    const [x0, y0] = pt(165, a);
    const [x1, y1] = pt(177, a);
    return { x0, y0, x1, y1 };
  }, [prog.last, prog.surahs]);

  const circ = 2 * Math.PI * R_RULER;
  const shown = active ? library.get(active) : null;

  const pick = (e: PointerEvent<SVGSVGElement>) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const d = Math.hypot(dx, dy) / (r.width / 2);
    if (d < 0.4 || d > 1) return;
    const angle = ((Math.atan2(dx, -dy) * 180) / Math.PI + 360) % 360;
    const page = 1 + (angle / 360) * TOTAL;
    const n = surahAtPage(page);
    setActive((prev) => {
      if (prev !== n) navigator.vibrate?.(3);
      return n;
    });
  };

  const onKey = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const base = active ?? prog.last?.surah ?? 1;
    const next = Math.max(1, Math.min(114, base + (e.key === "ArrowRight" ? 1 : -1)));
    setActive(active === null ? base : next);
  };

  return (
    <figure className="orbit" tabIndex={0} onKeyDown={onKey} aria-label={t("orbit.aria")}>
      <svg
        ref={box}
        viewBox="0 0 400 400"
        role="img"
        aria-hidden="true"
        onPointerDown={(e) => {
          dragging.current = true;
          pick(e);
        }}
        onPointerMove={(e) => (dragging.current || e.pointerType === "mouse") && pick(e)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        onPointerLeave={(e) => e.pointerType === "mouse" && setActive(null)}
      >
        <g className="orbit__rings" transform={`rotate(-90 ${C} ${C})`}>
          <circle className="orbit__ruler" cx={C} cy={C} r={R_RULER} strokeWidth="6" strokeDasharray={`${(circ / TOTAL) * 0.3} ${(circ / TOTAL) * 0.7}`} />
          <circle className="orbit__ruler orbit__ruler--major" cx={C} cy={C} r={R_RULER} strokeWidth="13" strokeDasharray={`0.5 ${circ / (TOTAL / 100) - 0.5}`} />
        </g>
        <circle className="orbit__inner" cx={C} cy={C} r="96" strokeDasharray="1 5.2" />
        <circle className="orbit__inner orbit__inner--solid" cx={C} cy={C} r="74" />

        <g className="orbit__parts">
          {parts.map((p) => (
            <path key={p.i} d={p.d} style={{ "--i": p.i } as CSSProperties} />
          ))}
        </g>

        <g className="orbit__scan" aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => (
            <path key={i} d={sector(168, -3 * (i + 1), -3 * i)} style={{ opacity: 0.1 - i * 0.011 }} />
          ))}
          <path className="orbit__lead" d={`M${C} ${C}L${C} ${C - 168}`} />
        </g>

        <g>
          {arcs.map(({ item, d, ready }) => {
            const done = progress.fraction(item.number) >= 1;
            return (
              <path
                key={item.number}
                className={`orbit__stroke${item.place === "Madinah" ? " is-madinah" : ""}${ready ? "" : " is-soon"}${done ? " is-done" : ""}${active === item.number ? " is-active" : ""}`}
                d={d}
                pathLength={1}
                style={{ "--i": item.number } as CSSProperties}
              />
            );
          })}
        </g>

        {here && (
          <g className="orbit__here">
            <path d={`M${here.x0.toFixed(2)} ${here.y0.toFixed(2)}L${here.x1.toFixed(2)} ${here.y1.toFixed(2)}`} />
            <circle cx={here.x1} cy={here.y1} r="4.2" />
          </g>
        )}
      </svg>

      <figcaption className="orbit__center" aria-live="polite">
        {shown ? (
          <>
            <span className="orbit__num">{shown.number}</span>
            <span className="orbit__name">{shown.name}</span>
            <span className="orbit__meta">
              {t(`place.${shown.place}`)} · {shown.ayahCount} {t("unit.ayat")} · {t("unit.pageShort")} {shown.bookPage}
            </span>
            <Link className="orbit__open" to={library.isAvailable(shown.number) ? `/surah/${shown.number}/1` : "/surahs?view=index"}>
              {library.isAvailable(shown.number) ? t("orbit.read") : t("orbit.inIndex")}
            </Link>
          </>
        ) : (
          <>
            <span className="orbit__word">Atramenth</span>
            <span className="orbit__meta">{t("orbit.tagline")}</span>
            <span className="orbit__hint">{t("orbit.hint")}</span>
          </>
        )}
      </figcaption>
    </figure>
  );
}
