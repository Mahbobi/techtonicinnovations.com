/**
 * In-house product case studies — products Techtonic Innovations LLC designed,
 * built, and operates. Sources (verify before editing):
 * - Co-Help: the Co-help repo (README.md, CLAUDE.md, package.json, lib/*,
 *   services/co-help-api/{README.md,Dockerfile,src/**}, website/**,
 *   .github/workflows/ci.yml) and https://co-help.com.
 * - Justice Genie: the legal-agent repo (README.md, CLAUDE.md,
 *   requirements.txt, legalai/**, scripts/smoke_test_*.py) and
 *   https://justicegenie.help.
 * - NexGen QA: the nexgen-qa-omniplatform repo (README.md,
 *   docs/BYOK_GUIDE.md, prisma/schema.prisma, server/src/**) and the marketing
 *   repo (package.json, server/audit/**) plus https://qa-automation.com.
 * Audit scores were measured by running the NexGen QA website-audit engine
 * (server/audit/auditor.ts) against each live homepage on 2026-09-21.
 * See the content rules in caseStudies.ts.
 */
import type { CaseStudy } from "./caseStudies";

export const productCaseStudies: CaseStudy[] = [
  {
    slug: "co-help",
    name: "Co-Help",
    category: "product",
    sector: "AI desktop app",
    metaTitle: "Co-Help: Multi-Model AI Desktop App | Techtonic Innovations",
    metaDescription:
      "How we built Co-Help, our real-time AI desktop assistant: live transcription, a parallel race across AI providers, and local-first storage.",
    outcome: "Shipping v5.11.1 for Windows and macOS, backed by a managed API that races AI providers in parallel.",
    intro:
      "Co-Help is a desktop app we designed, built, and run. It listens to a live interview or meeting, transcribes it, and races several AI models in parallel to put a well-formed answer on a private on-screen overlay — with the user's data kept on their own machine.",
    liveUrl: "https://co-help.com/",
    liveLabel: "co-help.com",
    image: "co-help",
    imageAlt: "Homepage of co-help.com with the headline Your real-time AI interview co-pilot",
    timeline: "February 13 – September 11, 2026 (first to latest commit of the desktop app repository)",
    tags: ["Electron", "Multi-LLM", "Cloud Run", "Stripe"],
    stack: [
      "Electron (Windows NSIS installer, macOS DMG, Linux AppImage)",
      "Node.js + vanilla JavaScript renderer",
      "electron-store (local JSON), scrypt password hashing; license and GitHub tokens encrypted with DPAPI/Keychain",
      "OpenAI, Anthropic, Google Gemini, Groq, DeepSeek, Mistral",
      "Managed API: Node.js 20, Express, Zod, Helmet, pino",
      "Google Cloud Run, Firestore, Secret Manager",
      "Stripe payments + webhooks",
      "Static marketing site on nginx in Docker",
      "GitHub Actions CI and release pipeline",
    ],
    sections: [
      {
        h2: "The product and the goal",
        paragraphs: [
          "In a live conversation, a helpful answer that arrives ten seconds late is no help at all. Co-Help's goal is speed without setup: install the app, sign in, and get transcription and AI answers during a Zoom, Teams, or Meet call — no API keys, no provider accounts to configure.",
        ],
      },
      {
        h2: "The challenge",
        paragraphs: [
          "Three constraints pulled against each other. Latency: any single AI provider can be slow or down at the worst moment. Security: a desktop app can't safely ship provider API keys to every user's machine. Privacy: transcripts, resumes, and notes are personal, and shouldn't sit on our servers.",
        ],
      },
      {
        h2: "What we built",
        paragraphs: [
          "An Electron app with separate windows for sign-in, a three-step setup wizard, the live overlay, session reports, and an owner-only admin dashboard — plus a managed backend and a marketing site.",
        ],
        bullets: [
          "A click-through overlay window that stays on top while you work in other apps, with the operating system's screen-capture protection enabled on it.",
          "System-audio capture with silence detection, so both sides of a call are transcribed; transcription runs server-side on Groq's Whisper endpoint.",
          "Screenshot Q&A for code, diagrams, or shared content, routed only to vision-capable models.",
          "A personal knowledge base built from uploaded PDF, Word, and text files or fetched web pages, so answers draw on the user's own background.",
          "Stripe checkout for one-time, monthly, and annual plans, and auto-updates from GitHub Releases with a server-enforced minimum version.",
        ],
      },
      {
        h2: "Architecture: a parallel model race",
        paragraphs: [
          "With managed access, questions go to our API on Google Cloud Run. It holds the provider keys in Secret Manager, so users need no keys of their own and none ship in the app. Requests pick a tier — fast, balanced, or deep — and the server fires every configured provider model in that tier at once, returns the first valid answer (Promise.any), and cancels the rest with an AbortController. The API races 12 server-pinned models from six providers in three tiers: OpenAI, Anthropic, Google Gemini, Groq, DeepSeek, and Mistral.",
          "Clients can't request arbitrary models — tiers map to server-pinned models — and output is capped at 4,096 tokens per call to bound cost. Access uses opaque bearer tokens checked against Firestore with a 60-second cache, rate limits apply per token and per plan, and Stripe webhooks activate, cancel, or refund tokens. Provider error messages are reduced to safe codes before logging, because they can echo request data.",
        ],
      },
      {
        h2: "Local-first privacy and security hardening",
        paragraphs: [
          "The user's profile, conversations, transcripts, and knowledge base are stored on their own device, not on our servers; license and GitHub tokens are encrypted with the operating system's credential store, and passwords are hashed with scrypt. The account server keeps only the basics needed for sign-in and billing.",
          "The desktop app runs every window with context isolation, sandboxing, and Node integration off; the renderer reaches the main process only through an allowlisted IPC bridge. A tested SSRF guard blocks the URL-fetch feature from reaching local files, loopback, private networks, cloud metadata addresses, or URLs with embedded credentials, and saved HTML reports pass through a sanitizer. The API container runs as a non-root user, and the CI pipeline runs syntax checks, unit tests, npm audit, installer-content verification, and Docker builds.",
        ],
      },
      {
        h2: "SEO and the marketing site",
        paragraphs: [
          "co-help.com is a static site served by nginx with clean URLs, permanent redirects for trailing slashes and .html paths, and a real 404 page. It adds landing pages for Zoom, Teams, Google Meet, coding, system-design, and Mac use, competitor comparison pages, and a blog; SoftwareApplication, FAQPage, and Organization structured data; an llms.txt; and a robots.txt that welcomes AI answer-engine crawlers. It sends a strict Content-Security-Policy, preload-ready HSTS, and frame-ancestors protection.",
          "Co-Help is a working example of our [AI development](/ai-development-services) and [custom software](/custom-software-development) practice — and of the multi-provider routing we bring to client [AI agents](/ai-agent-development).",
        ],
      },
    ],
    results: [
      "Live at co-help.com; the current release is v5.11.1 for Windows 10/11 and macOS 11+.",
      "Scores 98/100 on our own website audit tool (measured September 21, 2026).",
      "The live sitemap lists 17 URLs, and the homepage is served with a strict Content-Security-Policy and preload-ready HSTS.",
      "114 commits in the desktop app repository between February 13 and September 11, 2026.",
    ],
    services: ["ai-development-services", "custom-software-development", "ai-agent-development"],
  },
  {
    slug: "justice-genie",
    name: "Justice Genie",
    category: "product",
    sector: "Legal AI (RAG)",
    metaTitle: "Justice Genie: Grounded Legal AI | Techtonic Innovations",
    metaDescription:
      "How we built Justice Genie: a FastAPI + RAG app that answers from a user's own documents and cited public law, abstains when unsure, and runs mock hearings.",
    outcome: "Live at justicegenie.help; audit score raised from 77 to 94 after one day of security and SEO hardening.",
    intro:
      "Justice Genie helps people who are representing themselves prepare their case. Users upload their documents and ask questions in plain English; answers are designed to be grounded in those documents and cited public law — and when there's no source, it says so instead of guessing. It provides legal information for education and practice, not legal advice.",
    liveUrl: "https://justicegenie.help/",
    liveLabel: "justicegenie.help",
    image: "justice-genie",
    imageAlt: "Homepage of justicegenie.help with the headline Representing yourself? Prepare your case with AI that reads your documents and cites real law",
    timeline: "June 24 – September 21, 2026 (first to latest commit)",
    tags: ["FastAPI", "RAG", "PostgreSQL", "Multi-LLM"],
    stack: [
      "Python 3.11+, FastAPI, uvicorn, WebSockets, Pydantic v2",
      "Async SQLAlchemy 2.0 + Alembic; Neon PostgreSQL in production, SQLite in development",
      "Per-case vector index (NumPy) with keyword fallback",
      "PyMuPDF, python-docx, openpyxl, Pillow for document extraction",
      "Anthropic, OpenAI, and Google Gemini with cross-provider fallback, with Groq/OpenRouter backup routing",
      "argon2 password hashing + JWT",
      "Stripe subscriptions",
      "Docker; Electron shell for live-hearing audio capture",
    ],
    sections: [
      {
        h2: "The product and the goal",
        paragraphs: [
          "Self-represented litigants face deadlines, forms, and hearings without a lawyer. General-purpose chatbots are risky here because they can invent statutes and quotes. Justice Genie's goal is the opposite: answers you can trace to a page in your own evidence or to an authoritative public source, with clear warnings and referrals to free legal aid where an app isn't enough.",
        ],
      },
      {
        h2: "The challenge",
        paragraphs: [
          "Legal accuracy is non-negotiable, so \"grounded or abstain\" had to be enforced by the system, not just requested in a prompt. The app also had to keep each user's cases strictly isolated, resist prompt injection hidden in documents from an opposing party, and stay usable when an AI provider fails mid-request.",
        ],
      },
      {
        h2: "What we built",
        bullets: [
          "Accounts with a required educational-use consent, and cases across 23 case types with a 54-entry jurisdiction picker (every US state, federal, and other).",
          "Document ingestion for PDF, Word, Excel, text, and images: extracted, chunked, embedded, and remembered per case.",
          "Grounded chat with citations, a plain confidence score, a caution on weakly grounded answers, and abstention when no source supports an answer.",
          "Live law retrieval from authoritative public sources — including eCFR, CourtListener, GovInfo, Regulations.gov, and Open States — with a verification step that checks each claim against the fetched text before a citation is shown.",
          "A mock-hearing practice mode where the AI plays opposing counsel, a judge, or a witness and asks case-grounded questions, plus live hearing and deposition modes with cited suggestions.",
          "Grounded drafting of letters, declarations, and motions with a line-by-line verifier, and fillable PDF court forms stamped \"PRACTICE DRAFT — not legal advice\" on every page.",
          "Deadline tracking with a reminder bell, high-risk case warnings (criminal, family, immigration, housing, bankruptcy), and a built-in directory of free legal-help resources.",
        ],
        paragraphs: [
          "A multi-tenant FastAPI application that serves both the web app and a JSON API.",
        ],
      },
      {
        h2: "Architecture highlights",
        paragraphs: [
          "Uploads flow through an idempotent pipeline — extract, chunk, embed — into a per-case vector index. At question time, retrieval over the user's documents is combined with on-demand law lookups restricted to an allowlist of authoritative sources, and the answer engine refuses to answer without support. Every prompt that includes document or on-screen content tells the model to treat it as data, never as instructions.",
          "Model calls are routed across Anthropic, OpenAI, and Gemini by task complexity, with fallback between providers and a clean, disclaimed message if all of them fail. A tenant-isolation guard checks case ownership before any case data is read or changed.",
        ],
      },
      {
        h2: "Security, SEO, and performance",
        paragraphs: [
          "On September 21, 2026 we hardened the public site: a Content-Security-Policy that analytics now comply with, preload-eligible HSTS on every response, frame protection, gzip compression, an HTML 404 page, and a pricing page, alongside existing structured data, sitemap, robots.txt, and llms.txt. A smoke-test suite covers security headers, auth, ingestion, RAG, hearing, practice, law retrieval, drafts, and forms.",
          "Justice Genie shows how we approach [AI agent development](/ai-agent-development) and [AI security](/ai-security-audit) for high-stakes domains: retrieval-grounded answers, verification, abstention, and prompt-injection defenses by design.",
        ],
      },
    ],
    results: [
      "Live at justicegenie.help.",
      "Scores 94/100 on our own website audit tool as of September 21, 2026, up from 77 before that day's security and SEO hardening.",
      "Supports 23 case types and 54 jurisdictions, with answers that cite sources or abstain.",
      "Dozens of commits between June and September 2026.",
    ],
    services: ["ai-agent-development", "ai-development-services", "ai-security-audit"],
  },
  {
    slug: "nexgen-qa",
    name: "NexGen QA",
    category: "product",
    sector: "AI testing platform",
    metaTitle: "NexGen QA: AI Test Automation Platform | Techtonic",
    metaDescription:
      "How we built NexGen QA: a multi-tenant AI testing platform with 35+ modules, a BYOK GitHub Actions runner, and an SSRF-hardened public website audit tool.",
    outcome: "Live at qa-automation.com and app.qa-automation.com, with a BYOK runner that never sees customer API keys.",
    intro:
      "NexGen QA is our AI-powered quality assurance platform for web applications, APIs, LLMs, and AI agents. It brings more than 35 testing and QA modules into one multi-tenant product, and lets enterprise and government customers run AI tests with their own keys inside their own GitHub Actions.",
    liveUrl: "https://qa-automation.com/",
    liveLabel: "qa-automation.com",
    extraLinks: [{ label: "app.qa-automation.com", url: "https://app.qa-automation.com/" }],
    image: "nexgen-qa",
    imageAlt: "Homepage of qa-automation.com with the headline Enterprise QA Reimagined with AI and a preview of the NexGen QA dashboard",
    timeline: "January 25 – September 16, 2026 for the platform; February 8 – September 21, 2026 for the marketing site (first to latest commit)",
    tags: ["React 19", "Node.js", "Prisma", "Playwright"],
    stack: [
      "React 19, Vite, TypeScript, Tailwind CSS",
      "Node.js + Express + TypeScript API",
      "Prisma ORM with PostgreSQL (Neon), Redis",
      "Playwright and axe-core for browser and accessibility testing",
      "OpenAI, Anthropic, Google, DeepSeek, Mistral, Groq",
      "OpenTelemetry, Helmet, AES-256-GCM field-level encryption",
      "Vitest and Playwright test suites",
      "Docker on Google Cloud Run",
    ],
    sections: [
      {
        h2: "The product and the goal",
        paragraphs: [
          "Teams testing modern software juggle separate tools for test management, security scanning, accessibility, performance, API testing, and — increasingly — evaluating LLMs and AI agents. NexGen QA's goal is one platform for all of it, built for organizations with real compliance requirements.",
        ],
      },
      {
        h2: "The challenge",
        paragraphs: [
          "Enterprise and government buyers often can't send their AI provider keys, or their test traffic, through a vendor. The platform needed a way to run AI-powered tests without ever holding a customer's keys — and a public website audit tool that fetches arbitrary URLs without becoming a server-side request forgery hole.",
        ],
      },
      {
        h2: "What we built",
        paragraphs: [
          "A multi-tenant web application with organization-scoped data, and a separate prerendered marketing site.",
        ],
        bullets: [
          "Modules spanning test management, an AI walkthrough recorder, scheduled tests with alerts and public status badges, security scanning, Section 508 / WCAG accessibility with VPAT/ACR export, performance and load testing, REST/GraphQL/WebSocket testing, and AI model evaluation.",
          "Omni-Scan, a browser engine that combines Playwright, deterministic checks, and AI analysis to score a site.",
          "Autonomous testing with a director agent that plans work for specialized worker agents.",
          "Continuous testing on push and pull request via a GitHub App, shareable reports with PDF export, organization API keys with scopes, RBAC, and audit logging.",
        ],
      },
      {
        h2: "Architecture: a BYOK GitHub Actions runner",
        paragraphs: [
          "With Bring Your Own Key, the platform stores only the names of a customer's GitHub Secrets — never the values. Using a fine-grained token the customer provides, it commits a workflow and a sample test into their repository. When a run is dispatched, it executes in the customer's own GitHub Actions, calls the AI provider with the key from their secrets, and posts results back authenticated with a per-run HMAC-SHA256 callback token.",
          "Behind the app, a Prisma schema of 60 models backs the multi-tenant data layer, with Redis for rate limiting and agent coordination, OpenTelemetry instrumentation, and field-level AES-256-GCM encryption for sensitive values.",
        ],
      },
      {
        h2: "Security, SEO, and performance",
        paragraphs: [
          "The free website audit tool on the marketing site fetches user-supplied URLs, so every request goes through an SSRF guard: HTTP(S) on ports 80 and 443 only, no embedded credentials, DNS resolved by the server with any non-public address rejected, the connection pinned to the validated IP to defeat DNS rebinding, and every redirect re-validated. It's also rate-limited to 10 audits per 10 minutes per IP, capped on concurrency, and limited to 4 KB request bodies.",
          "The marketing site is server-rendered and prerendered for crawlers, with SEO landing pages, a pricing page, compression, immutable caching for hashed assets, a lazily loaded 3D hero, and a permanent redirect from www to the apex domain. NexGen QA reflects our [AI development](/ai-development-services), [AI security audit](/ai-security-audit), and [managed AI](/managed-ai-services) work.",
        ],
      },
    ],
    results: [
      "Live at qa-automation.com, with the application at app.qa-automation.com.",
      "Scores 95/100 on its own website audit tool (measured September 21, 2026); the live sitemap lists 23 URLs.",
      "140 backend test files (Vitest) in the platform repository, and 582 commits between January 25 and September 16, 2026.",
      "BYOK runs keep AI provider keys inside the customer's GitHub Secrets.",
    ],
    services: ["ai-development-services", "ai-security-audit", "managed-ai-services"],
  },
];
