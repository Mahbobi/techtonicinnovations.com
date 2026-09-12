import { useSyncExternalStore } from "react";

/**
 * Tracks the user's `prefers-reduced-motion` setting.
 * Used to disable WebGL / heavy animation for accessibility.
 *
 * Built on `useSyncExternalStore` — the correct primitive for subscribing to
 * an external browser API — instead of `useState` + `useEffect`. The server
 * snapshot always returns `false`, matching the client's first (hydrating)
 * render, so this can never cause a hydration mismatch even when a visitor
 * has reduced motion enabled; the real value takes over on the next render.
 */
const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
