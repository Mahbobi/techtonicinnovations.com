import { services } from "./services";
import { SITE } from "./site";
import type { HeadMeta } from "../lib/head";

export type RouteEntry = {
  path: string; // "/" or "/<slug>", no trailing slash
  meta: HeadMeta;
  priority: number;
};

export const HOME_ROUTE: RouteEntry = {
  path: "/",
  meta: {
    title: SITE.homeTitle,
    description: SITE.homeDescription,
    canonical: `${SITE.url}/`,
    ogImageAlt: SITE.homeOgImageAlt,
  },
  priority: 1.0,
};

export const SERVICE_ROUTES: RouteEntry[] = services.map((s) => ({
  path: `/${s.slug}`,
  meta: {
    title: s.metaTitle,
    description: s.metaDescription,
    canonical: `${SITE.url}/${s.slug}`,
    ogImageAlt: s.ogImageAlt,
  },
  priority: 0.8,
}));

export const ALL_ROUTES: RouteEntry[] = [HOME_ROUTE, ...SERVICE_ROUTES];
