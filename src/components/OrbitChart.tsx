import { useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useT } from "../hooks/useT.tsx";
import { LAST_BOOK_PAGE } from "../domain/Library.ts";
import { library } from "../services/library.ts";

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

/**
 * The whole book as one ring. Each sūrah is an arc whose length is its page
 * span; Makkan and Madīnan sūrahs run on separate tracks; 30 radial cuts mark
 * the parts; a ruler ring counts 1,196 pages. A slow scan sweeps the ring.
 */
export function OrbitChart() {
  const { t } = useT();
  const [active, setActive] = useState<number | null>(null);

  const arcs = useMemo(
    () =>
      library.items.map((item) => {
        const span = library.pageSpan(item.number);
        const start = deg(item.bookPage);
        const full = (span / TOTAL) * 360;
        const gap = Math.min(0.3, full * 0.25);
        const r = item.place === "Makkah" ? R_MAKKAH : R_MADINAH;
        return { item, d: arc(r, start + gap / 2, start + full - gap / 2) };
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

  const circ = 2 * Math.PI * R_RULER;
  const shown = active ? library.get(active) : null;

  return (
    <figure className="orbit">
      <svg viewBox="0 0 400 400" role="img" aria-label={t("orbit.aria")}>
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
          {arcs.map(({ item, d }) => (
            <g key={item.number} className={`orbit__arc ${item.place === "Madinah" ? "is-madinah" : ""}${active === item.number ? " is-active" : ""}`}>
              <path className="orbit__stroke" d={d} pathLength={1} style={{ "--i": item.number } as CSSProperties} />
              <path
                className="orbit__hit"
                d={d}
                onPointerEnter={() => setActive(item.number)}
                onClick={() => setActive(item.number)}
              />
            </g>
          ))}
        </g>
      </svg>

      <figcaption className="orbit__center" aria-live="polite">
        {shown ? (
          <>
            <span className="orbit__num">{shown.number}</span>
            <span className="orbit__name">{shown.name}</span>
            <span className="orbit__meta">
              {t(`place.${shown.place}`)} · {shown.ayahCount} {t("unit.ayat")} · {t("unit.pageShort")} {shown.bookPage}
            </span>
            <Link className="orbit__open" to={library.isAvailable(shown.number) ? `/surah/${shown.number}/1` : "/index"}>
              {library.isAvailable(shown.number) ? t("orbit.read") : t("orbit.inIndex")}
            </Link>
          </>
        ) : (
          <>
            <span className="orbit__word">Atramenth</span>
            <span className="orbit__meta">{t("orbit.tagline")}</span>
          </>
        )}
      </figcaption>
    </figure>
  );
}
