import { SITE } from "../data/site";

/** Two-level Home → page breadcrumb, matching the service-page pattern. */
export function breadcrumbJsonLd(name: string, path: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name, item: `${SITE.url}${path}` },
    ],
  };
}
