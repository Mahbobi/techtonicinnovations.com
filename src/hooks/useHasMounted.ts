import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Returns `false` on the server and during the client's hydrating render,
 * then `true` on every render after hydration has committed. Use this to
 * gate anything that must never run during SSR (WebGL, canvas,
 * `matchMedia`-driven layout branches) — because the server snapshot and the
 * client's first snapshot are identical, hydration never mismatches; the
 * real client-only content mounts a tick later.
 *
 * Implemented with `useSyncExternalStore` (React's own recommended pattern
 * for "is this the server or client" checks) rather than a
 * `useState` + `useEffect` pair, which the react-hooks lint rules flag as an
 * anti-pattern.
 */
export function useHasMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
