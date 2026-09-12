import { renderToString } from "react-dom/server";
import App from "./App";
import { RouterProvider } from "./lib/router";
import { ALL_ROUTES } from "./data/routes";

/**
 * Server render entry point used only by the build-time prerender script
 * (scripts/prerender.mjs) — never served at runtime. Renders the app's body
 * markup (the contents of `#root`) for a given pathname; the prerender
 * script injects per-route <head> metadata into the static HTML template
 * separately, using the same `ALL_ROUTES` list re-exported here.
 */
// eslint-disable-next-line react-refresh/only-export-components -- this is a build-time-only SSR entry, never served to the browser or hot-reloaded
export function render(url: string): string {
  return renderToString(
    <RouterProvider initialPath={url}>
      <App />
    </RouterProvider>
  );
}

export { ALL_ROUTES };
