/**
 * Privacy policy content for /privacy. It must describe what the site
 * actually does — if you add a form processor, analytics tool, font host,
 * embed, or cookie, update this file in the same change.
 *
 * Current data flows (verify before editing):
 * - Contact form → Web3Forms (src/components/Contact.tsx) → our inbox
 * - Vercel hosting (request logs) + Vercel Web Analytics (src/lib/analytics.ts)
 * - Cloudflare Web Analytics beacon (index.html)
 * - Google Fonts stylesheet (index.html)
 */
import { SITE } from "./site";

export const PRIVACY_EFFECTIVE_DATE = "September 21, 2026";
export const PRIVACY_OPERATOR = "Techtonic Innovations LLC";

export type PrivacySection = { h2: string; paragraphs: string[]; bullets?: string[] };

export const privacySections: PrivacySection[] = [
  {
    h2: "Who we are",
    paragraphs: [
      `This website, ${SITE.url.replace("https://", "")}, is operated by ${PRIVACY_OPERATOR} ("Techtonic Innovations", "we", "us"), based in ${SITE.locationDisplay}. This policy explains what information the website collects, why, who it is shared with, and the choices you have. It covers this website only — work we do for clients is governed by the agreements we sign with them.`,
    ],
  },
  {
    h2: "Information you give us",
    paragraphs: [
      "When you use the contact form, you provide your name, email address, the service you're interested in, and a message. We use this only to respond to your inquiry and, if we work together, to scope and deliver that work. The form is delivered to us by Web3Forms, a form-processing service that relays submissions to our email inbox.",
      "If you email or call us directly, we receive whatever you choose to include, along with your email address or phone number. Please don't send passwords, payment card numbers, or other sensitive information through the form or by email.",
    ],
  },
  {
    h2: "Information collected automatically",
    paragraphs: [
      "We keep automatic collection to what's needed to run and improve the site. We don't use advertising trackers, and the website doesn't set cookies of its own.",
    ],
    bullets: [
      "Hosting logs: our host, Vercel, processes technical request data — such as IP address, browser user agent, requested URL, and time — to deliver pages and protect the site against abuse.",
      "Vercel Web Analytics: aggregated, cookieless measurement of page views and a small set of events — which page was viewed, the referring site, browser, operating system, device type, and approximate country. Vercel states that it doesn't use cookies for this and that the visitor identifier it derives from the request is discarded after 24 hours.",
      "Conversion events: when you click a link to contact us (the contact form, email, or phone) or successfully submit the form, we record that the event happened, which page it happened on, and which button was used. We never record what you type into the form as an analytics event.",
      "Cloudflare Web Analytics: a cookieless script that measures page visits and page-load performance in aggregate. Cloudflare states that it doesn't use cookies or local storage for this service.",
      "Google Fonts: the site's typefaces are loaded from Google's servers, so your browser sends its IP address and user agent to Google when fonts are requested.",
    ],
  },
  {
    h2: "How we use information",
    paragraphs: [
      "We use the information described above to respond to inquiries and provide the services you ask about; to understand which pages are useful and which need work; to keep the site secure and working; and to meet legal obligations. We don't use it for automated decisions that have legal or similarly significant effects on you.",
    ],
  },
  {
    h2: "Who we share it with",
    paragraphs: [
      "We share information only with service providers that help us run the website and our business, and only for that purpose: Vercel (hosting and web analytics), Cloudflare (web analytics), Web3Forms (contact-form delivery), Google (font delivery), and our email provider. We may also disclose information if required by law, to protect our rights or the safety of others, or as part of a merger or sale of our business.",
      "We don't sell personal information, and we don't share it for cross-context behavioral advertising.",
    ],
  },
  {
    h2: "How long we keep it",
    paragraphs: [
      "We keep inquiry emails and form submissions for as long as needed to respond and to maintain ordinary business records, and delete them on request unless we're legally required to keep them. Analytics data is held in aggregate by the providers above under their own retention policies.",
    ],
  },
  {
    h2: "Your choices and rights",
    paragraphs: [
      `You can ask us to tell you what personal information we hold about you, to correct it, or to delete it by emailing ${SITE.email}. Depending on where you live — for example Virginia, California, or other US states with consumer privacy laws — you may have additional rights, and we'll respond to requests as those laws require. We won't treat you differently for exercising your rights.`,
      "You can also limit automatic collection yourself: most browsers and content-blocking extensions can block analytics scripts and third-party font requests, and the site will continue to work.",
    ],
  },
  {
    h2: "Security",
    paragraphs: [
      "The site is served only over HTTPS, and we limit who can access inquiry data. No method of transmission or storage is completely secure, but we take reasonable measures to protect the information you send us.",
    ],
  },
  {
    h2: "Children",
    paragraphs: [
      "This website is intended for businesses and is not directed to children under 13. We don't knowingly collect personal information from children; if you believe a child has sent us information, contact us and we'll delete it.",
    ],
  },
  {
    h2: "Changes to this policy",
    paragraphs: [
      "If we change how the website handles information, we'll update this page and the effective date shown at the top.",
    ],
  },
  {
    h2: "Contact",
    paragraphs: [
      `Questions or requests about this policy: email ${SITE.email} or call ${SITE.phoneDisplay}. ${PRIVACY_OPERATOR}, ${SITE.addressLocality}, ${SITE.addressRegion}, United States.`,
    ],
  },
];
