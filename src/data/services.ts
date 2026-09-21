/**
 * Service page content — single source of truth for the /<slug> pages.
 * Consumed by <ServicePage>, the navbar services menu, the footer, the
 * sitemap generator, and the prerender script for per-route <head> metadata
 * + Service/FAQPage/BreadcrumbList JSON-LD.
 *
 * The page definitions themselves live in grouped files (servicesBuild,
 * servicesCommerce, servicesPlan, servicesOperate) to keep each file small;
 * this module owns the types, the canonical ordering, and lookups.
 *
 * Content rules (apply to every file): no clients, case studies,
 * testimonials, stats, certifications, awards, team size, founding year, or
 * prices are invented — cost and timeline questions point to the free
 * discovery call / fixed-price-scoped-on-a-call model used sitewide.
 */
import { buildServices } from "./servicesBuild";
import { commerceServices } from "./servicesCommerce";
import { planServices } from "./servicesPlan";
import { operateServices } from "./servicesOperate";

export type ServiceFaq = { q: string; a: string };

export type ServiceSection = {
  h2: string;
  /**
   * Plain text. Internal links may be written as `[label](/path)` — only
   * site-relative paths are turned into links (see renderInline in
   * ServicePage); anything else renders as literal text.
   */
  paragraphs: string[];
  bullets?: string[];
  subsections?: { h3: string; body: string }[];
};

/** Navigation grouping for the services menu. */
export type ServiceGroup = "build" | "plan" | "operate" | "local";

export type ServiceDef = {
  slug: string;
  navLabel: string;
  group: ServiceGroup;
  metaTitle: string;
  metaDescription: string;
  ogImageAlt: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  /** Slugs of closely related service pages, rendered as in-content links. */
  related?: string[];
};

export const SERVICE_GROUP_LABELS: Record<ServiceGroup, string> = {
  build: "Build",
  plan: "Strategy & audits",
  operate: "Run & scale",
  local: "Location",
};

export const SERVICE_GROUP_ORDER: readonly ServiceGroup[] = ["build", "plan", "operate", "local"];

export const services: ServiceDef[] = [
  ...buildServices,
  ...commerceServices,
  ...planServices,
  ...operateServices,
];

export function getServiceBySlug(slug: string): ServiceDef | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByGroup(group: ServiceGroup): ServiceDef[] {
  return services.filter((s) => s.group === group);
}
