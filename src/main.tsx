import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "./lib/router";
import { initAnalytics } from "./lib/analytics";

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>
);

// The prerender script fills #root with real markup for every route; when
// that markup is present we hydrate onto it instead of re-rendering from
// scratch, so search engines and first paint get the prerendered HTML while
// the app becomes interactive without a flash of empty content.
initAnalytics();

if (container.innerHTML.trim().length > 0) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
