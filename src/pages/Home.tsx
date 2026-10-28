import { Link } from "react-router-dom";
import { OrbitChart } from "../components/OrbitChart.tsx";
import { useStore } from "../hooks/useStore.ts";
import { library } from "../services/library.ts";
import { progress } from "../services/ProgressStore.ts";

export default function Home() {
  const { last } = useStore(progress);
  const resume = last ? library.get(last.surah) : undefined;

  return (
    <main className="home">
      <OrbitChart />
      <div className="home__foot">
        <p className="home__line">The Qur’ān in English, read closely.</p>
        <div className="home__legend" aria-hidden="true">
          <span>
            <i className="key key--makkah" /> Makkah {library.count("Makkah")}
          </span>
          <span>
            <i className="key key--madinah" /> Madīnah {library.count("Madinah")}
          </span>
          <span>
            <i className="key key--part" /> 30 parts
          </span>
        </div>
        <div className="home__actions">
          {resume && last ? (
            <Link className="btn btn--primary" to={`/surah/${last.surah}/${last.pageIndex + 1}`}>
              Continue · {resume.name}
            </Link>
          ) : (
            <Link className="btn btn--primary" to="/surah/1/1">
              Begin with Fātiha
            </Link>
          )}
          <Link className="btn" to="/surahs">
            Browse sūrahs
          </Link>
        </div>
      </div>
    </main>
  );
}
