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

export const CONTACT_ROUTE: RouteEntry = {
  path: "/contact",
  meta: {
    title: `Contact Us | ${SITE.name}`,
    description:
      "Contact Techtonic Innovations about AI development, AI agents, automation, software builds, or AI engineers. Book a free discovery call.",
    canonical: `${SITE.url}/contact`,
    ogImageAlt: `Contact ${SITE.name}`,
  },
  priority: 0.6,
};

export const PRIVACY_ROUTE: RouteEntry = {
  path: "/privacy",
  meta: {
    title: `Privacy Policy | ${SITE.name}`,
    description:
      "How the Techtonic Innovations website handles contact-form submissions, cookieless analytics, and hosting data, and how to exercise your privacy rights.",
    canonical: `${SITE.url}/privacy`,
    ogImageAlt: `${SITE.name} privacy policy`,
  },
  priority: 0.3,
};

export const PAGE_ROUTES: RouteEntry[] = [CONTACT_ROUTE, PRIVACY_ROUTE];

export const ALL_ROUTES: RouteEntry[] = [HOME_ROUTE, ...SERVICE_ROUTES, ...PAGE_ROUTES];
