import { inject, track } from "@vercel/analytics";

/**
 * Vercel Web Analytics + conversion events.
 *
 * - Page views: `inject()` loads Vercel's cookieless script from the site's
 *   own origin (/_vercel/insights/*). It is inert until Web Analytics is
 *   enabled for the project in the Vercel dashboard.
 * - Conversions: one delegated click listener records `cta_click` for every
 *   link that leads to the contact form, the /contact page, email, or phone,
 *   so new CTAs are tracked without per-button wiring. Add
 *   `data-cta="<location>"` to a link to label where the click came from.
 *   Successful form submissions are recorded separately as
 *   `contact_form_submit` (see Contact.tsx).
 *
 * Event properties are deliberately limited to page path, CTA location, and
 * target type — never form contents or anything a visitor typed.
 */

export const CTA_EVENT = "cta_click";
export const CONTACT_SUBMIT_EVENT = "contact_form_submit";

type CtaTarget = "contact" | "email" | "phone";

function classifyHref(href: string): CtaTarget | null {
  const h = href.trim().toLowerCase();
  if (h.startsWith("mailto:")) return "email";
  if (h.startsWith("tel:")) return "phone";
  if (h === "#contact" || h === "/#contact" || h === "/contact" || h.startsWith("/contact?") || h.startsWith("/contact#")) {
    return "contact";
  }
  return null;
}

function onDocumentClick(event: MouseEvent) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const anchor = target.closest("a[href]");
  if (!anchor) return;
  const kind = classifyHref(anchor.getAttribute("href") ?? "");
  if (!kind) return;
  const location = anchor.closest("[data-cta]")?.getAttribute("data-cta") ?? "untagged";
  try {
    track(CTA_EVENT, { target: kind, location, page: window.location.pathname });
  } catch (err) {
    // Analytics must never break navigation; surface the problem for debugging only.
    console.warn("[analytics] failed to record CTA click", err);
  }
}

let initialized = false;

/** Call once from the client entry point. No-op on repeat calls. */
export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  inject({ mode: import.meta.env.DEV ? "development" : "production" });
  document.addEventListener("click", onDocumentClick, { capture: true });
}

/** Records a successful contact-form submission (the primary conversion). */
export function trackContactSubmit(service: string) {
  try {
    track(CONTACT_SUBMIT_EVENT, { service: service || "unspecified", page: window.location.pathname });
  } catch (err) {
    console.warn("[analytics] failed to record form submission", err);
  }
}
