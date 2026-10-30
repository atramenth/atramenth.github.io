import { lazy, Suspense } from "react";
import { HashRouter, Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useT } from "./hooks/useT.tsx";
import { TabBar } from "./components/TabBar.tsx";
import Home from "./pages/Home.tsx";
import IndexPage from "./pages/IndexPage.tsx";
import Introduction from "./pages/Introduction.tsx";
import Surahs from "./pages/Surahs.tsx";
import Translator from "./pages/Translator.tsx";

const Reader = lazy(() => import("./pages/Reader.tsx"));

function Shell() {
  const reading = useLocation().pathname.startsWith("/surah/");
  return (
    <>
      <Outlet />
      {!reading && <TabBar />}
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

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Shell />}>
            <Route index element={<Home />} />
            <Route path="surahs" element={<Surahs />} />
            <Route path="index" element={<IndexPage />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="translator" element={<Translator />} />
            <Route path="surah/:number/:page?" element={<Reader />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
