/**
 * Case studies — single source of truth for /case-studies and
 * /case-studies/<slug>. Consumed by the index and detail pages, the homepage
 * showcase, the route list (sitemap + prerender head metadata) and llms.txt.
 *
 * Content rules (apply to every entry — keep them when editing):
 * - Every claim must be traceable to the project's repository or its live
 *   site. Feature descriptions come from code we verified, not from memory.
 * - No invented metrics, revenue, traffic, testimonials, quotes, or client
 *   statements. "Results" lists only facts anyone can check (it's live at X,
 *   it ships feature Y, our audit tool scores it Z on a stated date).
 * - Timelines come from the first and latest commit dates in the repo.
 * - Client projects are the client's own business; we don't repeat claims
 *   from their marketing copy (awards, founding year, etc.) as our facts.
 * - Screenshots are our own captures of the public homepage (public/case-studies).
 */
import { SITE } from "./site";
import { clientCaseStudies } from "./caseStudiesClients";
import { productCaseStudies } from "./caseStudiesProducts";

export type CaseStudyCategory = "client" | "product";

export const CASE_STUDY_CATEGORY_LABELS: Record<CaseStudyCategory, string> = {
  client: "Client project",
  product: "Our products",
};

export type CaseStudySection = {
  h2: string;
  /** Plain text; `[label](/path)` becomes an internal link (see lib/inline). */
  paragraphs: string[];
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  name: string;
  category: CaseStudyCategory;
  /** Short industry / product-type label shown on cards. */
  sector: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line, verifiable outcome for cards. */
  outcome: string;
  /** Hero intro paragraph. */
  intro: string;
  liveUrl: string;
  liveLabel: string;
  /** Additional public URLs (e.g. an app subdomain). */
  extraLinks?: { label: string; url: string }[];
  /** Base filename in public/case-studies (".webp" for the page, ".jpg" for og:image). */
  image: string;
  imageAlt: string;
  /** Derived from first/latest commit dates; omit if not derivable. */
  timeline?: string;
  /** Short tech tags for cards. */
  tags: string[];
  /** Full stack list for the detail page. */
  stack: string[];
  sections: CaseStudySection[];
  /** Verifiable facts only. */
  results: string[];
  /** Service page slugs this project demonstrates. */
  services: string[];
};

export const CASE_STUDIES_PATH = "/case-studies";
export const CASE_STUDIES_PUBLISHED = "2026-09-21";

export const caseStudies: CaseStudy[] = [...productCaseStudies, ...clientCaseStudies];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function caseStudyPath(c: CaseStudy): string {
  return `${CASE_STUDIES_PATH}/${c.slug}`;
}

export function caseStudyImage(c: CaseStudy, ext: "webp" | "jpg"): string {
  return `/case-studies/${c.image}.${ext}`;
}

export function caseStudyOgImage(c: CaseStudy): string {
  // JPEG for social cards: some scrapers still reject WebP og:images.
  return `${SITE.url}${caseStudyImage(c, "jpg")}`;
}
