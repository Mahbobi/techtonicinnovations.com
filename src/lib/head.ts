import { useEffect } from "react";

/**
 * Per-route <head> metadata. The prerender script injects this into the
 * static HTML at build time (so crawlers and social scrapers always see the
 * right tags without running JS); this module keeps `document.title` and
 * the head meta tags in sync during client-side navigation between routes
 * so they never go stale after the first load.
 */
export type HeadMeta = {
  title: string;
  description: string;
  canonical: string;
  ogImageAlt: string;
};

function setMetaByAttr(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function applyHead(meta: HeadMeta) {
  document.title = meta.title;
  setMetaByAttr("name", "description", meta.description);
  setMetaByAttr("property", "og:title", meta.title);
  setMetaByAttr("property", "og:description", meta.description);
  setMetaByAttr("property", "og:url", meta.canonical);
  setMetaByAttr("property", "og:image:alt", meta.ogImageAlt);
  setMetaByAttr("name", "twitter:title", meta.title);
  setMetaByAttr("name", "twitter:description", meta.description);
  setMetaByAttr("name", "twitter:image:alt", meta.ogImageAlt);
  setCanonical(meta.canonical);
}

/** Keeps document head metadata in sync when navigating client-side. No-op during SSR. */
export function useDocumentHead(meta: HeadMeta) {
  useEffect(() => {
    applyHead(meta);
    // Intentionally depend on the primitive fields rather than `meta` itself:
    // callers pass a fresh object literal on every render, which would
    // otherwise re-run this effect on every render instead of only when the
    // actual metadata changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta.title, meta.description, meta.canonical, meta.ogImageAlt]);
}
