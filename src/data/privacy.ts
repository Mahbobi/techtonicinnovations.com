/**
 * Privacy policy content for /privacy. It must describe what the site
 * actually does — if you add a form processor, analytics tool, font host,
 * embed, or cookie, update this file in the same change.
 *
 * Current data flows (verify before editing):
 * - Contact form → Web3Forms (src/components/Contact.tsx) → our inbox
 * - Vercel hosting (request logs) + Vercel Web Analytics, enabled in the
 *   Vercel project (src/lib/analytics.ts)
 * - Cloudflare Web Analytics beacon (index.html)
 * - Google Fonts stylesheet (index.html)
 * - Case-study screenshots in public/case-studies are our own captures of
 *   public websites; no visitor data is involved
 * No cookies, localStorage, or advertising pixels are set by the site's code.
 */
import type { LegalSection } from "../components/LegalDocument";
import { SITE } from "./site";

export const PRIVACY_EFFECTIVE_DATE = "September 21, 2026";
export const PRIVACY_OPERATOR = "Techtonic Innovations LLC";

export type PrivacySection = LegalSection;

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
      "Vercel Web Analytics (enabled on this site): aggregated, cookieless measurement of page views and a small set of events — which page was viewed, the referring site, browser, operating system, device type, and approximate country. Vercel states that it doesn't use cookies for this and that the visitor identifier it derives from the request is discarded after 24 hours.",
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
      `You can ask us what personal information we hold about you, and ask us to correct or delete it, by emailing ${SITE.email}. We'll verify your request using the contact details we already have (for example, by replying to the email address you used), respond within the time the applicable law requires — generally 45 days under US state laws and one month under the GDPR — and explain any reason we can't fully comply. You can appeal a decision by replying to our response with "Appeal" in the subject line. We won't discriminate against you for exercising your rights.`,
      "You can also limit automatic collection yourself: most browsers and content-blocking extensions can block analytics scripts and third-party font requests, and the site will continue to work.",
    ],
  },
  {
    h2: "Global Privacy Control",
    paragraphs: [
      "We honor the Global Privacy Control (GPC) signal. If your browser sends GPC, we treat it as a request to opt out of the sale or sharing of your personal information and of targeted advertising. Because we don't sell or share personal information or use it for targeted advertising, nothing further changes when GPC is on — but the signal is respected, and it applies to the browser that sends it.",
      "Do Not Track: there is no agreed standard, so we do not respond to DNT signals separately; we honor Global Privacy Control.",
    ],
  },
  {
    h2: "California residents (CCPA/CPRA)",
    paragraphs: [
      "If you're a California resident, the California Consumer Privacy Act as amended by the CPRA gives you the right to know the categories and specific pieces of personal information we collect, the sources, the purposes, and the categories of recipients; to delete it; to correct it; to opt out of its sale or sharing; and to limit the use of sensitive personal information. In the past 12 months we collected: identifiers and contact details (name, email, phone if you provide it); the content of your inquiry; and internet or network activity (pages viewed, referrer, browser, device type, approximate location derived from IP address). We collected these from you and from your browser, for the purposes described above, and disclosed them only to the service providers listed above for business purposes.",
      "We don't sell personal information, don't share it for cross-context behavioral advertising, and don't collect sensitive personal information through the site. You may use an authorized agent to make a request; we may ask the agent for proof of authorization and ask you to verify your identity.",
    ],
  },
  {
    h2: "Virginia and other US state residents (VCDPA and similar laws)",
    paragraphs: [
      "If you live in Virginia, the Virginia Consumer Data Protection Act gives you the right to confirm whether we process your personal data and to access it, correct it, delete it, obtain a portable copy, and opt out of targeted advertising, the sale of personal data, and profiling that produces legal or similarly significant effects. Residents of other states with comprehensive privacy laws (such as Colorado, Connecticut, Texas, and Oregon) have similar rights. We don't sell personal data, use it for targeted advertising, or profile you in that way. To exercise a right or appeal a decision, email us as described above; if we deny your appeal, you may contact your state attorney general (in Virginia, the Office of the Attorney General).",
    ],
  },
  {
    h2: "Visitors in the EEA, UK, and Switzerland (GDPR)",
    paragraphs: [
      `${PRIVACY_OPERATOR} is the controller of personal data collected through this website. We rely on these legal bases: taking steps at your request before entering into a contract, and our legitimate interest in responding to business inquiries, when you contact us; and our legitimate interests in operating, securing, and understanding the use of the site, for hosting logs and cookieless analytics.`,
      "You have the right to access, correct, erase, restrict, or object to our processing of your personal data, and to data portability. Where we rely on legitimate interests you can object at any time. You also have the right to lodge a complaint with your local data protection authority. To exercise these rights, email us.",
    ],
  },
  {
    h2: "International transfers",
    paragraphs: [
      "We're based in the United States, and our service providers may process information in the United States and other countries. If you use the site from outside the United States, your information will be transferred to and processed in the US, where data protection laws may differ from those in your country. Where the GDPR or UK GDPR applies, we rely on appropriate safeguards for these transfers, such as the EU-US Data Privacy Framework where the recipient participates in it, or the European Commission's Standard Contractual Clauses in our providers' data processing terms.",
    ],
  },
  {
    h2: "Case-study screenshots",
    paragraphs: [
      "Screenshots shown in our case studies are images we captured of publicly accessible websites. They show only content those websites publish to everyone and don't contain personal information about visitors to this site.",
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
      "This website is intended for businesses and is not directed to children. We don't knowingly collect personal information from anyone under 16, and we don't sell or share any personal information, including that of minors. If you believe a child has sent us information, contact us and we'll delete it.",
    ],
  },
  {
    h2: "Changes to this policy",
    paragraphs: [
      "If we change how the website handles information, we'll update this page and the effective date shown at the top. If a change materially affects how we use information we already hold, we'll apply it only going forward or ask for your consent where the law requires.",
    ],
  },
  {
    h2: "Contact",
    paragraphs: [
      `Questions or requests about this policy: email ${SITE.email} or call ${SITE.phoneDisplay}. ${PRIVACY_OPERATOR}, ${SITE.addressLocality}, ${SITE.addressRegion}, United States.`,
    ],
  },
];
