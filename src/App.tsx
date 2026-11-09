import { lazy, Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes, useLocation, useNavigationType, useParams } from "react-router-dom";
import { Toaster } from "./components/Toaster.tsx";
import { useT } from "./hooks/useT.tsx";
import { TabBar } from "./components/TabBar.tsx";
import Home from "./pages/Home.tsx";
import IndexPage from "./pages/IndexPage.tsx";
import Introduction from "./pages/Introduction.tsx";
import Surahs from "./pages/Surahs.tsx";
import Translator from "./pages/Translator.tsx";

const Reader = lazy(() => import("./pages/Reader.tsx"));

/** A new screen starts at its top; going back returns to where the reader had scrolled to. */
function useScrollMemory() {
  const location = useLocation();
  const type = useNavigationType();
  const saved = useRef(new Map<string, number>());
  const previous = useRef(location.key);

  useEffect(() => {
    const onScroll = () => saved.current.set(previous.current, window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    previous.current = location.key;
    const y = type === "POP" ? (saved.current.get(location.key) ?? 0) : 0;
    window.scrollTo({ top: y, behavior: "instant" });
    // Filtering inside a screen only changes the search string: do not jump.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.key]);
}

function Shell() {
  const location = useLocation();
  const reading = location.pathname.startsWith("/surah/");
  useScrollMemory();
  return (
    <>
      <div className="route" key={reading ? "reader" : location.pathname}>
        <Outlet />
      </div>
      {!reading && <TabBar />}
      <Toaster />
    </>
  );
}

function NotFound() {
  const { t } = useT();
  return (
    <main className="empty-page">
      <p>{t("app.notFound")}</p>
      <Link className="btn" to="/">
        {t("app.goHome")}
      </Link>
    </main>
  );
}

function Loading() {
  const { t } = useT();
  return <div className="reader__state">{t("app.opening")}</div>;
}

/** One reader per sūrah: moving to another sūrah (a reference, "next sūrah") starts clean at the requested place. */
function ReaderRoute() {
  const { number } = useParams();
  return <Reader key={number} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Shell />}>
            <Route index element={<Home />} />
            <Route path="surahs" element={<Surahs />} />
            <Route path="index" element={<IndexPage />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="translator" element={<Translator />} />
            <Route path="surah/:number/:page?" element={<ReaderRoute />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
