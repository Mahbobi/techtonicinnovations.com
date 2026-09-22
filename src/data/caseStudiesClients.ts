/**
 * Client-project case studies. Sources (verify before editing):
 * - Bagram Events: github.com/Mahbobi/bagram-events-website (DEPLOYMENT.md,
 *   package.json, src/app/**) and the live site https://www.bagram.us.
 * - Design by Masuma: github.com/Mahbobi/designbymasuma (README.md, DEPLOY.md,
 *   package.json, vercel.json, server/app.js, api/index.js, public/js/*) and
 *   the live site https://designbymasuma.com.
 * See the content rules in caseStudies.ts.
 */
import type { CaseStudy } from "./caseStudies";

export const clientCaseStudies: CaseStudy[] = [
  {
    slug: "bagram-events",
    name: "Bagram Events",
    category: "client",
    sector: "Community events",
    metaTitle: "Bagram Events Website Case Study | Techtonic Innovations",
    metaDescription:
      "How we built bagram.us for Bagram Events: a Next.js site for Afghan cultural events in the DC area, with ticket links and a Resend-powered contact form.",
    outcome: "Live at bagram.us: event listings, ticket links, and a Resend-powered contact form.",
    intro:
      "Bagram Events produces Afghan cultural celebrations, festivals, and community gatherings in the Washington, D.C. metro area. We designed and built their website — a fast, animated single-page site that puts the next event, its tickets, and a way to reach the team front and center.",
    liveUrl: "https://www.bagram.us/",
    liveLabel: "bagram.us",
    image: "bagram-events",
    imageAlt: "Homepage of the Bagram Events website at bagram.us, showing the logo and the headline Bagram Events",
    timeline: "August 4–10, 2026 (first to latest commit)",
    tags: ["Next.js", "React 19", "Three.js", "Resend"],
    stack: [
      "Next.js 16 (App Router)",
      "React 19 + TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
      "React Three Fiber / Three.js",
      "TanStack Query",
      "Zod",
      "Resend email API",
      "Vercel hosting + custom domain",
    ],
    sections: [
      {
        h2: "The client and the goal",
        paragraphs: [
          "Bagram Events brings the Afghan community together through music, food, art, and tradition. Their events are promoted on social media and ticketed through Eventbrite, but they needed a home of their own: one address to send people to that explains who they are, shows what's coming up, and lets anyone get in touch.",
          "The first event the site had to carry was the 107th anniversary of Afghanistan's independence — an evening of talks, poetry, cuisine, and live music in Annandale, Virginia — so the site needed to be live, and trustworthy, well before event day.",
        ],
      },
      {
        h2: "The challenge",
        paragraphs: [
          "Speed and reliability mattered more than breadth. The site had to look polished on phones, make buying a ticket a single tap, and make sure every message from the contact form actually arrived.",
          "That last point turned out to be the real engineering problem. The first version of the contact form sent mail through Gmail SMTP. It worked from a normal server, but Google rejected the same credentials when the login came from Vercel's shared cloud IP ranges. We replaced it with Resend, a transactional email API designed for serverless platforms, so delivery no longer depends on how Gmail treats a hosting provider's IP addresses.",
        ],
      },
      {
        h2: "What we built",
        paragraphs: [
          "A single-page Next.js site with four sections — hero, upcoming events, about, and contact — plus social links to the team's Facebook, Instagram, and TikTok profiles.",
        ],
        bullets: [
          "An animated hero with a drifting gold particle field rendered in WebGL (React Three Fiber), loaded client-side only so it never blocks the server-rendered page.",
          "Event cards with an auto-rotating flyer gallery that pauses on hover and has per-image dot controls, plus date, time, venue, and a Get Tickets button linking to the event's Eventbrite page.",
          "Get Tickets links in the header, hero, event card, and footer, so buying a ticket is one tap from anywhere on the page.",
          "A contact form backed by a Next.js API route that validates input with Zod, emails the team through Resend with reply-to set to the sender, and HTML-escapes everything a visitor types.",
          "Friendly failure handling: if email can't be sent, the visitor gets a clear message with a direct email address, and the detailed error is logged on the server — never shown in the browser.",
        ],
      },
      {
        h2: "Security and SEO",
        paragraphs: [
          "No secrets live in the code: the Resend key and destination inbox come from environment variables, with a documented .env.example and a deployment guide for the client. Page metadata and Open Graph tags are defined once in the root layout with the custom domain as the base URL, so shared links preview correctly.",
          "It's the kind of focused [web application development](/web-application-development) we do for small businesses: a modern stack, handled edge cases, and a handover document the client can actually follow.",
        ],
      },
    ],
    results: [
      "Live on the client's own domain at www.bagram.us (the bare bagram.us redirects to it).",
      "Contact-form delivery moved from Gmail SMTP to the Resend API after SMTP logins from Vercel were rejected.",
      "Built in one week: the repository's first commit is August 4, 2026 and the latest is August 10, 2026.",
      "Every event card links straight to its Eventbrite ticket page.",
    ],
    services: ["web-application-development", "custom-software-development"],
  },
  {
    slug: "design-by-masuma",
    name: "Design by Masuma",
    category: "client",
    sector: "Floral & event design",
    metaTitle: "Design by Masuma Case Study | Techtonic Innovations",
    metaDescription:
      "How we built designbymasuma.com: a photography-led site for a floral and event design studio, with a live consultation calendar, inquiry API, and email alerts.",
    outcome: "Live at designbymasuma.com with a portfolio API, open-slot consultation calendar, and emailed inquiries.",
    intro:
      "Design by Masuma is a floral and event design studio for weddings, celebrations, and installations. We designed and built a full-stack website around large, full-bleed photography — with a live consultation calendar and an inquiry flow that emails the studio every time someone reaches out.",
    liveUrl: "https://designbymasuma.com/",
    liveLabel: "designbymasuma.com",
    image: "design-by-masuma",
    imageAlt: "Homepage of the Design by Masuma website, showing the headline Flowers that hold a room over a close-up of a peony",
    timeline: "August 1–2, 2026 (first to latest commit)",
    tags: ["Node.js", "Express", "GSAP", "Vercel"],
    stack: [
      "Node.js 20.6+ with Express 4",
      "Helmet (Content-Security-Policy) + express-rate-limit",
      "Nodemailer",
      "Vanilla JavaScript front end",
      "GSAP (from cdnjs)",
      "Flat-file JSON storage with atomic writes",
      "Vercel (Express app as a serverless function) + custom domain",
    ],
    sections: [
      {
        h2: "The client and the goal",
        paragraphs: [
          "For a floral and event design studio, the work sells itself — if the website gets out of its way. The goal was a site that feels like walking into the studio: photography first, calm motion, and a short path from \"this is beautiful\" to \"is my date available?\".",
        ],
      },
      {
        h2: "The challenge",
        paragraphs: [
          "Heavy imagery and cinematic motion can easily make a site slow or inaccessible. The studio also needed real booking logic — offering only consultation slots that are genuinely open — and a guarantee that no inquiry is ever lost, even on serverless hosting where the filesystem is read-only.",
        ],
      },
      {
        h2: "What we built",
        paragraphs: [
          "A single-page front end in plain JavaScript on top of a small Express JSON API, deployed so the same app runs as a normal Node server locally and as one serverless function on Vercel.",
        ],
        bullets: [
          "A persistent photographic \"garden\" layer: a real flower irises open from its center on load, parallaxes and scales as you scroll, and crossfades to a new bloom for each section, with a warm gradient fallback if a photo fails to load.",
          "GSAP-assisted entrance animations with a guaranteed CSS settle, scroll reveals, a scroll-progress bar, a custom cursor, and curtain wipes between sections.",
          "A palette switcher on the Services page that crossfades the house centerpiece between four seasonal palettes.",
          "A filterable portfolio loaded from the API, with an accessible lightbox.",
          "A live consultation calendar that offers only open slots, and an inquiry form that returns a reference number on submission.",
          "Full respect for prefers-reduced-motion: motion is disabled throughout and the hero flower shows as a still image.",
        ],
      },
      {
        h2: "Architecture and security",
        paragraphs: [
          "The API exposes four endpoints — health, portfolio, availability, and inquiries. A valid inquiry is saved, its slot reserved, and the studio emailed via Nodemailer. Email is treated as the durable record on Vercel (where local writes are best-effort), and a failed send never blocks the visitor's confirmation.",
          "Security is built in rather than bolted on: Helmet sets a Content-Security-Policy that allows exactly the external origins the site uses (Google Fonts, the GSAP CDN, and the image host), JSON bodies are capped at 32 KB, inquiries are rate-limited to 20 per 15 minutes per IP, the proxy is trusted correctly so limits apply to real client IPs, and mail credentials come only from environment variables.",
          "This combination of a design-led front end and a small, careful backend is typical of our [custom software](/custom-software-development) and [web application](/web-application-development) work.",
        ],
      },
    ],
    results: [
      "Live on the client's own domain at designbymasuma.com (www redirects to it).",
      "The site's health endpoint and portfolio API respond in production (checked September 21, 2026).",
      "Built across August 1–2, 2026, per the repository's commit history.",
      "Every inquiry is emailed to the studio, so nothing depends on serverless disk storage.",
    ],
    services: ["web-application-development", "custom-software-development"],
  },
];
