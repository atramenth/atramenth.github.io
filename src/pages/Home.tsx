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
  const { last } = useStore(progress);
  const resume = last ? library.get(last.surah) : undefined;

  return (
    <main className="home">
      <div className="home__lang">
        <LangToggle />
      </div>
      <OrbitChart />
      <Link className="home__credit" to="/translator" aria-label={t("home.creditAria", { name: TRANSLATOR.name })}>
        <small>{t("home.translatedBy")}</small>
        <strong>{TRANSLATOR.name}</strong>
        <IconNext />
      </Link>
      <div className="home__foot">
        <p className="home__line">{t("home.line")}</p>
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
        </div>
        <div className="home__actions">
          {resume && last ? (
            <Link className="btn btn--primary" to={`/surah/${last.surah}/${last.pageIndex + 1}`}>
              {t("home.continue", { name: resume.name })}
            </Link>
          ) : (
            <Link className="btn btn--primary" to="/surah/1/1">
              {t("home.begin")}
            </Link>
          )}
          <Link className="btn" to="/surahs">
            {t("home.browse")}
          </Link>
        </div>
      </div>
    </main>
  );
}
