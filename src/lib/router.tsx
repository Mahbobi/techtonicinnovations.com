import {
  createContext,
  useContext,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

/**
 * Minimal pathname router — no new dependency. Supports server rendering
 * (pass `initialPath` explicitly, e.g. from the prerender script) and
 * client-side navigation via `<Link>` / `useRouter().navigate`, with a
 * `popstate` listener for back/forward. Hash and query strings are stripped
 * from the tracked pathname; same-page hash anchors (`/#contact`) are left
 * as plain `<a>` tags elsewhere so the browser's native scroll handles them.
 */

type RouterContextValue = {
  pathname: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

function normalize(pathname: string): string {
  const clean = pathname.split("?")[0].split("#")[0] || "/";
  if (clean.length > 1 && clean.endsWith("/")) return clean.slice(0, -1);
  return clean;
}

export function RouterProvider({
  initialPath,
  children,
}: {
  initialPath?: string;
  children: ReactNode;
}) {
  const [pathname, setPathname] = useState(() =>
    normalize(initialPath ?? (typeof window !== "undefined" ? window.location.pathname : "/"))
  );

  useEffect(() => {
    const onPopState = () => setPathname(normalize(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (to: string) => {
    const target = normalize(to);
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", to);
      window.scrollTo(0, 0);
    }
    setPathname(target);
  };

  return <RouterContext.Provider value={{ pathname, navigate }}>{children}</RouterContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components -- this module intentionally pairs the provider with its hook and Link component
export function useRouter(): RouterContextValue {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used within a RouterProvider");
  return ctx;
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

/** Internal-route link: client-side navigation with a real href for crawlers/SSR. */
export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
