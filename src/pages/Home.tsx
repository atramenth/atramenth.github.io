import { Link } from "react-router-dom";
import { IconNext } from "../components/Icons.tsx";
import { LangToggle } from "../components/LangToggle.tsx";
import { OrbitChart } from "../components/OrbitChart.tsx";
import { TRANSLATOR } from "../data/translator.ts";
import { useStore } from "../hooks/useStore.ts";
import { useT } from "../hooks/useT.tsx";
import { library } from "../services/library.ts";
import { progress } from "../services/ProgressStore.ts";

export default function Home() {
  const { t } = useT();
  const prog = useStore(progress);
  const last = prog.last;
  const resume = last ? library.get(last.surah) : undefined;
  const info = last ? prog.surahs[last.surah] : undefined;
  const pct = last ? Math.round(progress.fraction(last.surah) * 100) : 0;

  return (
    <main className="home">
      <div className="home__lang">
        <LangToggle />
      </div>
      <OrbitChart />

      <div className="home__foot">
        {resume && last ? (
          <Link className="resume resume--hero" to={`/surah/${last.surah}/${last.pageIndex + 1}`}>
            <small>{t("home.resumeKicker")}</small>
            <strong>{resume.name}</strong>
            <span>{info?.total ? t("home.resumeMeta", { n: last.pageIndex + 1, total: info.total }) : t("surahs.page", { n: last.pageIndex + 1 })}</span>
            <IconNext />
            <i className="resume__bar" aria-hidden="true">
              <b style={{ width: `${Math.max(pct, 3)}%` }} />
            </i>
          </Link>
        ) : (
          <Link className="btn btn--primary btn--wide" to="/surah/1/1">
            {t("home.begin")}
          </Link>
        )}

        <div className="home__actions">
          <Link className="btn" to="/surahs">
            {t("home.browse")}
          </Link>
          <Link className="btn btn--quiet" to="/translator" aria-label={t("home.creditAria", { name: TRANSLATOR.name })}>
            <span className="credit">
              <small>{t("home.translatedBy")}</small> {TRANSLATOR.name}
            </span>
          </Link>
        </div>

        <div className="home__legend" aria-hidden="true">
          <span>
            <i className="key key--makkah" /> {t("place.Makkah")} {library.count("Makkah")}
          </span>
          <span>
            <i className="key key--madinah" /> {t("place.Madinah")} {library.count("Madinah")}
          </span>
          <span>
            <i className="key key--part" /> {t("home.parts")}
          </span>
          <span>
            <i className="key key--here" /> {t("orbit.here")}
          </span>
        </div>
      </div>
    </main>
  );
}
