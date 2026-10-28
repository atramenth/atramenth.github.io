import { lazy, Suspense } from "react";
import { HashRouter, Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
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
  return (
    <main className="empty-page">
      <p>That page isn’t in this book.</p>
      <Link className="btn" to="/">
        Go home
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div className="reader__state">Opening…</div>}>
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
