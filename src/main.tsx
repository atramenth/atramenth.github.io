import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/app.css";
import "./services/SettingsStore.ts";

// Links shared before the move to clean addresses (https://atramenth.github.io/#/surah/2/17) still open:
// the hash route is rewritten to the plain path before the app starts.
const legacy = /^#(\/.*)$/.exec(location.hash);
if (legacy) history.replaceState(null, "", legacy[1]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
