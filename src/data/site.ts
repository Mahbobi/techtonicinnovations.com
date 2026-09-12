/**
 * Single source of truth for brand / NAP (name, address, phone) and other
 * site-wide constants. Used by React components, the prerender script, and
 * the generated sitemap/robots/llms files — keep everything in sync here.
 */
export const SITE = {
  name: "Techtonic Innovations",
  shortName: "Techtonic",
  url: "https://www.techtonicinnovations.com",
  email: "info@techtonicinnovations.com",
  phone: "+1-571-268-6448",
  phoneDisplay: "+1 (571) 268-6448",
  telHref: "tel:+15712686448",
  mailHref: "mailto:info@techtonicinnovations.com",
  addressLocality: "Reston",
  addressRegion: "VA",
  addressCountry: "US",
  locationDisplay: "Reston, Virginia (Washington, DC metro)",
  areaServed: "US",
  logo: "https://www.techtonicinnovations.com/og-image.png",
  ogImage: "https://www.techtonicinnovations.com/og-image.png",
  organizationId: "https://www.techtonicinnovations.com/#organization",
  websiteId: "https://www.techtonicinnovations.com/#website",
  homeTitle: "AI Development & Automation Company | Techtonic Innovations",
  homeDescription:
    "Custom AI solutions, AI agents, workflow automation and web apps, plus vetted AI engineers on demand. Reston, VA team serving businesses across the US.",
  homeOgImageAlt: "Techtonic Innovations software and AI solutions",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "AI Agents",
    "Workflow Automation",
    "Web Development",
    "Software Engineering",
    "IT Staff Augmentation",
  ],
} as const;
