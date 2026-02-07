import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { APP_DESCRIPTION, APP_NAME, THEME_COLOR } from "@repo/tokens";
import "./index.css";
import App from "./App.tsx";

document.title = APP_NAME;
const themeMeta = document.querySelector("meta[name=theme-color]");
if (themeMeta) {
  themeMeta.setAttribute("content", THEME_COLOR);
}
const descMeta = document.querySelector("meta[name=description]");
if (descMeta) {
  descMeta.setAttribute("content", APP_DESCRIPTION);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
