/**
 * Service page content — single source of truth for the /<slug> pages.
 * Consumed by <ServicePage>, the sitemap generator, and the prerender script
 * for per-route <head> metadata + Service/FAQPage/BreadcrumbList JSON-LD.
 *
 * Content is sourced from existing site copy (Services.tsx, About.tsx,
 * Process.tsx, data/faqs.ts, llms.txt, index.html JSON-LD). No clients, case
 * studies, testimonials, stats, certifications, awards, team size, founding
 * year, or prices are invented — cost and timeline questions point to the
 * free discovery call / two-week-sprint model already used sitewide.
 */
import { SITE } from "./site";

export type ServiceFaq = { q: string; a: string };

export type ServiceSection = {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: { h3: string; body: string }[];
};

export type ServiceDef = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  ogImageAlt: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: ServiceSection[];
  faqs: ServiceFaq[];
};

const DISCOVERY_CALL =
  "Every engagement starts with a free discovery call, where we learn your goals, systems, and constraints before proposing a scope.";

const PRICING_ANSWER =
  "Pricing depends on scope, team composition, and engagement model (fixed-scope project, dedicated team, or staff augmentation). We don't publish flat rates because a two-week automation and a multi-quarter platform build cost very differently — instead, we scope your specific project on a free discovery call and follow up with a transparent, itemized estimate.";

const TIMELINE_ANSWER =
  "We work in agile two-week sprints with visible progress every cycle. Many MVPs and first production releases ship in 6 to 12 weeks depending on scope; larger platforms are broken into sprint-sized milestones so you see working software early and often.";

export const services: ServiceDef[] = [
  {
    slug: "ai-development-services",
    navLabel: "AI Development",
    metaTitle: "AI Development Services | Techtonic Innovations",
    metaDescription:
      "Custom AI development services: LLM integrations, RAG pipelines, computer vision and predictive analytics engineered around your business context.",
    ogImageAlt: "AI development services by Techtonic Innovations",
    eyebrow: "AI development services",
    h1: "AI development services built around your business",
    intro:
      "Techtonic Innovations designs and ships custom artificial intelligence systems for enterprise and growing businesses alike. Rather than bolting a generic model onto your product, we architect each AI solution around your specific data, workflows, and constraints — so the system holds up in production, not just in a demo.",
    sections: [
      {
        h2: "What our AI development services cover",
        paragraphs: [
          "Our AI development work spans the full stack of modern applied AI: large language model (LLM) integrations, retrieval-augmented generation (RAG) pipelines, AI agents, natural language processing, computer vision, predictive analytics, and intelligent process automation. We treat each of these as engineering disciplines with their own failure modes — prompt injection, hallucination, data drift, latency, and cost — and design accordingly rather than shipping a thin wrapper around a single API call.",
          "Every engagement begins with an assessment of your existing data, systems, and team, because the right AI architecture for a healthcare records system looks nothing like the right architecture for an e-commerce recommendation engine. We scope the model, the data pipeline, the evaluation strategy, and the human-in-the-loop checkpoints before writing production code.",
        ],
      },
      {
        h2: "Large language models, RAG, and AI agents",
        paragraphs: [
          "We build custom LLM integrations on top of OpenAI, Anthropic Claude, and open models, including fine-tuning where it genuinely improves outcomes and retrieval-augmented generation where grounding responses in your own documents and data matters more than fine-tuning. RAG pipelines connect your knowledge base, product catalog, or internal documentation to an LLM so answers stay accurate and current without retraining a model every time your content changes.",
          "For teams that need software to take multi-step action rather than just answer questions, we design AI agents that call tools, query APIs, and complete workflows end-to-end, with guardrails, logging, and human approval steps where the stakes call for it. See our dedicated page on AI agent development for more on agent architecture and evaluation.",
        ],
      },
      {
        h2: "Computer vision, NLP, and predictive analytics",
        paragraphs: [
          "Beyond generative AI, we build computer vision systems for image classification, object detection, and quality inspection; NLP pipelines for classification, extraction, and summarization of unstructured text; and predictive analytics models that turn historical data into forward-looking decisions — demand forecasting, churn prediction, and anomaly detection among them.",
        ],
        bullets: [
          "Machine learning model development, training, and evaluation",
          "Natural language processing and document intelligence",
          "Computer vision for classification, detection, and inspection",
          "Predictive analytics and forecasting models",
          "LLM integration, fine-tuning, and RAG pipelines",
          "AI agents that take action across your existing tools",
        ],
      },
      {
        h2: "Our stack",
        paragraphs: [
          "Our AI/ML stack includes OpenAI and Anthropic Claude for language models, AWS, Azure, and Google Cloud for infrastructure, PyTorch, TensorFlow, and Hugging Face for model development, and PostgreSQL and vector databases for retrieval and storage. On the application layer we build with React, Next.js, TypeScript, Node.js, and Python/FastAPI, and we deploy with Docker, Kubernetes, and Terraform so AI systems are reproducible and observable in production, not one-off notebooks.",
        ],
      },
      {
        h2: "How an engagement runs",
        paragraphs: [
          DISCOVERY_CALL +
            " From there we move in agile two-week sprints — discovery and strategy, architecture and design, build and iterate, then deploy and scale — so you see working software early and can redirect scope before it compounds into rework. " +
            TIMELINE_ANSWER,
        ],
      },
    ],
    faqs: [
      {
        q: "What AI and machine learning services does Techtonic Innovations offer?",
        a: "We build custom AI systems including large language model (LLM) integrations, RAG pipelines, AI agents, natural language processing, computer vision, predictive analytics, and intelligent automation — architected for each client's specific business context.",
      },
      {
        q: "Do you work with our existing data and systems, or start from scratch?",
        a: "Almost always the former. We start every AI engagement by assessing your existing data, APIs, and infrastructure, then design the model and pipeline to fit — rather than requiring you to migrate everything to a new stack first.",
      },
      {
        q: "How much does custom AI development cost?",
        a: PRICING_ANSWER,
      },
      {
        q: "How long does it take to build an AI MVP?",
        a: TIMELINE_ANSWER,
      },
      {
        q: "What technologies do you use for AI development?",
        a: "OpenAI and Anthropic Claude, AWS, Azure, and Google Cloud, plus PyTorch, TensorFlow, Hugging Face, PostgreSQL, and vector databases, integrated with React, Next.js, TypeScript, Node.js, and Python/FastAPI application layers.",
      },
    ],
  },
  {
    slug: "ai-automation-agency",
    navLabel: "AI Automation",
    metaTitle: "AI Automation Agency | Techtonic Innovations",
    metaDescription:
      "AI-powered workflow automation that removes manual work and connects your tools. Free discovery call, transparent scope, delivery in weeks.",
    ogImageAlt: "AI automation agency services by Techtonic Innovations",
    eyebrow: "AI automation agency",
    h1: "AI automation that removes manual work from your team",
    intro:
      "Techtonic Innovations is an AI automation agency that replaces repetitive, rule-based, and judgment-heavy manual work with intelligent workflows. We combine business process automation with applied AI — so automations don't just move data between systems, they can also read, classify, summarize, and decide.",
    sections: [
      {
        h2: "Business process automation, powered by AI",
        paragraphs: [
          "Traditional automation handles structured, predictable steps well but breaks the moment a workflow needs judgment — reading a free-form email, interpreting a scanned document, or deciding which of ten possible next actions applies. We design AI workflow automation that handles exactly that gap: LLMs and classification models sit inside the workflow to make the judgment calls that used to require a person, while deterministic logic still handles everything that should stay deterministic.",
          "The result is automation that scales without scaling headcount — support tickets triaged and drafted before a human ever opens them, invoices extracted and reconciled without manual data entry, leads qualified and routed the moment they arrive, and internal reports generated on a schedule instead of assembled by hand.",
        ],
      },
      {
        h2: "Where AI automation pays off fastest",
        paragraphs: [
          "Not every process is worth automating — the highest-return targets are high-volume, repetitive, and rule-describable, even if some of those rules currently live in someone's head rather than a document. We prioritize the workflows that free up the most human time relative to build effort, and we're upfront when a process is better left manual for now.",
        ],
        bullets: [
          "Document and email processing — extraction, classification, and routing",
          "Customer support triage, drafting, and escalation",
          "Lead qualification and CRM enrichment",
          "Invoice, order, and data reconciliation across systems",
          "Internal reporting and scheduled data pipelines",
          "AI chatbot development for support, sales, or internal knowledge lookup",
        ],
      },
      {
        h2: "AI chatbots and internal knowledge automation",
        paragraphs: [
          "A large share of automation requests turn into an AI chatbot — customer-facing, or internal-facing over your own documentation and knowledge base. We build these on retrieval-augmented generation (RAG) so answers are grounded in your actual content and update automatically as that content changes, rather than requiring a model retrain every time your policies or product catalog shift.",
        ],
      },
      {
        h2: "Integrating with the tools you already use",
        paragraphs: [
          "Automation only works if it lives inside the tools your team already touches — your CRM, help desk, ERP, spreadsheets, or internal admin tools — rather than becoming one more dashboard nobody opens. We build integrations against the APIs those systems expose, and where no API exists, we design a pragmatic workaround rather than blocking the project.",
        ],
      },
      {
        h2: "How we scope an automation engagement",
        paragraphs: [
          DISCOVERY_CALL +
            " We typically start with a single high-impact workflow, ship it as a working automation within a sprint or two, measure the time it saves, and use that as the template for the next one. " +
            TIMELINE_ANSWER,
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between an AI agent and a traditional automation or chatbot?",
        a: "A traditional automation follows fixed rules; a chatbot answers questions. An AI agent can plan multi-step work, call tools and APIs, and complete a task end-to-end — for example not just answering 'what's my order status' but actually looking it up, updating a record, and drafting a follow-up email.",
      },
      {
        q: "Which processes should we automate first?",
        a: "High-volume, repetitive workflows with describable rules pay off fastest — document processing, support triage, lead routing, and reporting are common starting points. We help identify and prioritize these on the discovery call rather than guessing.",
      },
      {
        q: "Will AI automation work with our existing software?",
        a: "In almost all cases, yes. We integrate through the APIs your CRM, help desk, ERP, or internal tools already expose, so automation happens inside your existing systems rather than requiring you to adopt a new platform.",
      },
      {
        q: "How much does AI workflow automation cost?",
        a: PRICING_ANSWER,
      },
      {
        q: "How long does an automation project take?",
        a: TIMELINE_ANSWER,
      },
    ],
  },
  {
    slug: "ai-agent-development",
    navLabel: "AI Agents",
    metaTitle: "AI Agent Development Company | Techtonic Innovations",
    metaDescription:
      "Custom AI agent development: LLM-powered agents that plan, call tools, and complete multi-step work inside your existing systems.",
    ogImageAlt: "AI agent development by Techtonic Innovations",
    eyebrow: "AI agent development",
    h1: "AI agents that complete work, not just answer questions",
    intro:
      "Techtonic Innovations builds custom AI agents — LLM-powered systems that plan a sequence of steps, call tools and APIs, retrieve and reason over your data, and carry a task through to completion, with the guardrails a production system needs.",
    sections: [
      {
        h2: "AI agent vs. chatbot vs. automation",
        paragraphs: [
          "These three terms get used interchangeably, but they solve different problems. A chatbot answers questions in a conversation. A traditional automation executes a fixed sequence of steps triggered by an event. An AI agent sits between the two: it's given a goal, decides which tools or APIs to call and in what order, adapts when a step returns an unexpected result, and keeps going until the task is done or it needs human input.",
          "We design agents for the second category of problem — work that has a clear goal but a variable path to get there, like triaging an inbound request, researching and drafting a response, reconciling records across two systems, or running a multi-step research task against your own data.",
        ],
      },
      {
        h2: "How we build production AI agents",
        paragraphs: [
          "Production agents need more engineering than a demo agent, because the cost of a wrong tool call in production is real. We build agents with retrieval-augmented generation (RAG) so they reason over your actual documents and data rather than a model's general training, explicit tool and function definitions so the agent's action space is bounded and auditable, logging and tracing so every decision the agent made is reviewable after the fact, and human-in-the-loop checkpoints for actions that are costly, irreversible, or sensitive.",
        ],
        bullets: [
          "Goal-directed agents that plan and execute multi-step tasks",
          "Tool-calling and API integrations scoped to a defined action space",
          "RAG-grounded agents that reason over your own knowledge base",
          "Human-in-the-loop approval steps for high-stakes actions",
          "Observability: logging, tracing, and evaluation of agent decisions",
          "Multi-agent systems where specialized agents hand off work",
        ],
      },
      {
        h2: "Where AI agents are already delivering value",
        paragraphs: [
          "Common agent use cases we build include customer support agents that look up account and order data, take action, and escalate only what genuinely needs a human; internal research and analysis agents that pull from company documents, spreadsheets, and databases to answer complex questions; and operations agents that reconcile data, flag exceptions, and draft the follow-up work for a human to review and approve.",
        ],
      },
      {
        h2: "Evaluation and guardrails",
        paragraphs: [
          "An agent that works in a demo and an agent that's safe to run unattended in production are different engineering problems. We build evaluation suites against representative real-world inputs, rate-limit and cost-cap agent actions, and design fallback behavior for when the agent is uncertain — so agents fail safely rather than confidently taking the wrong action.",
        ],
      },
      {
        h2: "Getting started",
        paragraphs: [
          DISCOVERY_CALL +
            " We typically scope the first agent narrowly around one well-defined workflow, prove it out, and expand its action space as confidence grows. " +
            TIMELINE_ANSWER,
        ],
      },
    ],
    faqs: [
      {
        q: "What is an AI agent, exactly?",
        a: "An AI agent is an LLM-powered system given a goal rather than a fixed script. It decides which tools, APIs, or data sources to use, adapts to intermediate results, and carries a task through to completion — as opposed to a chatbot, which only answers questions, or a traditional automation, which follows a fixed sequence of steps.",
      },
      {
        q: "How do you keep an AI agent from taking the wrong action?",
        a: "We scope the agent's action space explicitly (which tools and APIs it can call), add human-in-the-loop approval for costly or irreversible actions, log every decision for review, and build evaluation suites against realistic inputs before anything runs unattended in production.",
      },
      {
        q: "Can an AI agent work with our internal tools and data?",
        a: "Yes — we build agents on retrieval-augmented generation so they reason over your actual documents, databases, and APIs, integrating with the systems you already run rather than requiring a separate platform.",
      },
      {
        q: "How much does AI agent development cost?",
        a: PRICING_ANSWER,
      },
      {
        q: "How long does it take to build and ship an AI agent?",
        a: TIMELINE_ANSWER,
      },
    ],
  },
  {
    slug: "custom-software-development",
    navLabel: "Custom Software",
    metaTitle: "Custom Software Development Company | Techtonic Innovations",
    metaDescription:
      "Custom software development from concept to launch, with AI capabilities built in from day one when they help. Free discovery call.",
    ogImageAlt: "Custom software development by Techtonic Innovations",
    eyebrow: "Custom software development",
    h1: "Custom software development, engineered for scale",
    intro:
      "Techtonic Innovations builds custom software products end-to-end — from early product strategy through MVP, launch, and scale — for teams that need something purpose-built rather than assembled from off-the-shelf tools that almost fit.",
    sections: [
      {
        h2: "Full-cycle product development",
        paragraphs: [
          "We work across the entire product lifecycle: product strategy and scoping, technical architecture, UI/UX design, engineering, QA, deployment, and ongoing iteration after launch. Where it genuinely helps the product, we build AI capabilities in from the start — intelligent search, automated classification, recommendation logic — rather than treating AI as a bolt-on feature added after the fact.",
          "Our engineering approach favors proven, maintainable architecture over novelty for its own sake. That means clear API boundaries, automated testing where it matters, infrastructure as code, and documentation your team can actually use after we hand the codebase over — not a system only we understand.",
        ],
      },
      {
        h2: "What we build",
        paragraphs: [
          "Custom software development at Techtonic covers internal tools and admin systems, SaaS products, marketplaces and multi-sided platforms, data and analytics platforms, and AI-native products such as QA automation platforms, content intelligence engines, and decision-support systems. Whatever the category, we scope it around your actual users and workflows rather than a generic template.",
        ],
        bullets: [
          "Product strategy, technical architecture, and MVP scoping",
          "Full-stack engineering: frontend, backend, database, and infrastructure",
          "AI-native features built in where they add real value",
          "Internal tools, SaaS platforms, and data/analytics products",
          "QA, deployment pipelines, and post-launch iteration",
        ],
      },
      {
        h2: "Our process",
        paragraphs: [
          "We follow a four-stage process on every build: discovery and strategy, where we dive into your business objectives and technical landscape; architecture and design, where we design scalable, secure systems and interfaces; build and iterate, agile development in two-week sprints with continuous integration and real-time collaboration with your team; and deploy and scale, with zero-downtime deployment and ongoing performance monitoring.",
        ],
      },
      {
        h2: "Our stack",
        paragraphs: [
          "We build with React, Next.js, TypeScript, and Node.js on the application layer, Python and FastAPI where Python's ecosystem fits better (data-heavy or ML-adjacent products), PostgreSQL and vector databases for storage and retrieval, and Docker, Kubernetes, and Terraform for infrastructure — a modern, well-supported stack chosen for maintainability, not resume-driven architecture.",
        ],
      },
      {
        h2: "Engagement models and getting started",
        paragraphs: [
          DISCOVERY_CALL +
            " Custom software projects can run as a fixed-scope build, a dedicated product team, or a hybrid where our engineers augment yours. " +
            TIMELINE_ANSWER,
        ],
      },
    ],
    faqs: [
      {
        q: "Do you build the whole product, or just parts of it?",
        a: "Both. We run full end-to-end builds from product strategy through launch, and we also join existing codebases and teams to build specific features, modules, or a dedicated workstream — whichever fits your situation.",
      },
      {
        q: "Will AI be part of our product even if we don't ask for it?",
        a: "No — we only add AI capabilities where they genuinely improve the product. Plenty of custom software we build has no AI in it at all; we scope that on the discovery call based on what actually helps your users.",
      },
      {
        q: "What does a typical custom software engagement look like?",
        a: "Discovery and strategy, then architecture and design, then build and iterate in two-week sprints, then deploy and scale with ongoing monitoring. You see working software every sprint rather than waiting until the end of a long build.",
      },
      {
        q: "How much does custom software development cost?",
        a: PRICING_ANSWER,
      },
      {
        q: "How long does it take to build an MVP?",
        a: TIMELINE_ANSWER,
      },
    ],
  },
  {
    slug: "web-application-development",
    navLabel: "Web Apps",
    metaTitle: "Web Application Development Company | Techtonic Innovations",
    metaDescription:
      "High-performance web application development with React and Next.js — SaaS platforms, dashboards, and marketing sites built to convert.",
    ogImageAlt: "Web application development by Techtonic Innovations",
    eyebrow: "Web application development",
    h1: "Web application development that's fast, accessible, and built to convert",
    intro:
      "Techtonic Innovations builds modern, high-performance web applications and digital platforms — marketing websites, SaaS products, e-commerce experiences, and progressive web apps — all optimized for speed, accessibility, SEO, and conversion from the first line of code.",
    sections: [
      {
        h2: "Modern web platforms, built to last",
        paragraphs: [
          "We build with React, Next.js, and a modern cloud-native stack, choosing server-side rendering, static generation, or client-side rendering based on what a given page actually needs — a marketing page and an authenticated dashboard have very different performance and SEO requirements, and we architect each accordingly rather than defaulting to one pattern everywhere.",
          "Performance and accessibility aren't an afterthought pass at the end of a project — they're design constraints from day one, because a web application that's slow or inaccessible loses users and search visibility regardless of how good the feature set is underneath.",
        ],
      },
      {
        h2: "What we build",
        paragraphs: [
          "Our web application development covers marketing and content websites optimized for organic search, SaaS platforms and customer dashboards, e-commerce storefronts, internal web tools, and progressive web apps that work reliably across devices and network conditions.",
        ],
        bullets: [
          "Marketing websites engineered for SEO and conversion",
          "SaaS platforms, dashboards, and customer portals",
          "E-commerce and multi-sided marketplace platforms",
          "Progressive web apps and mobile-responsive experiences",
          "API design, integrations, and backend services",
        ],
      },
      {
        h2: "Performance, SEO, and accessibility by default",
        paragraphs: [
          "We treat Core Web Vitals, semantic HTML, proper heading hierarchy, and crawlable content as baseline requirements rather than optional polish — a lesson we apply to our own site as much as our clients'. For AI-heavy or JavaScript-rendered applications specifically, we know firsthand that a client-rendered single-page app with an empty HTML shell is invisible to most crawlers and AI answer engines, which is why we architect for server-rendered or prerendered output whenever a page needs to be found in search.",
        ],
      },
      {
        h2: "Our stack",
        paragraphs: [
          "React, Next.js, TypeScript, and Node.js form our core web stack, backed by Python/FastAPI for data-heavy backends, PostgreSQL for relational data, and Docker, Kubernetes, and Terraform for deployment and infrastructure — chosen for long-term maintainability and hiring availability, not novelty.",
        ],
      },
      {
        h2: "How we scope a build",
        paragraphs: [
          DISCOVERY_CALL +
            " We work in agile two-week sprints with continuous integration, so you see and can test the application incrementally rather than waiting for a single big-bang launch. " +
            TIMELINE_ANSWER,
        ],
      },
    ],
    faqs: [
      {
        q: "Do you build with Next.js or a plain React SPA?",
        a: "We choose per project and even per page. Marketing and content pages that need to rank in search typically get server-side rendering or static generation via Next.js; authenticated, app-like experiences may use client-side rendering where SEO doesn't matter and interactivity does.",
      },
      {
        q: "Will our web application be optimized for search engines?",
        a: "Yes — semantic HTML, proper heading structure, crawlable server-rendered or prerendered content, and Core Web Vitals performance are built in from the start, not retrofitted after launch.",
      },
      {
        q: "Can you take over or extend an existing web application?",
        a: "Yes. We regularly join existing codebases to add features, fix performance or SEO issues, or take over ongoing development, in addition to building new platforms from scratch.",
      },
      {
        q: "How much does web application development cost?",
        a: PRICING_ANSWER,
      },
      {
        q: "How long does a web platform take to launch?",
        a: TIMELINE_ANSWER,
      },
    ],
  },
  {
    slug: "hire-ai-engineers",
    navLabel: "Hire AI Engineers",
    metaTitle: "Hire AI Engineers | Techtonic Innovations",
    metaDescription:
      "Hire vetted AI engineers and machine learning specialists on contract or permanent placement. Embed senior AI talent into your team fast.",
    ogImageAlt: "Hire AI engineers through Techtonic Innovations",
    eyebrow: "Hire AI engineers",
    h1: "Hire AI engineers who can ship on day one",
    intro:
      "Techtonic Innovations connects organizations with rigorously vetted AI engineers, machine learning specialists, and data scientists — through contract staff augmentation or permanent placement — so you can scale an AI initiative without a months-long hiring cycle.",
    sections: [
      {
        h2: "Why teams hire AI engineers through Techtonic",
        paragraphs: [
          "Hiring a strong AI engineer directly is slow: sourcing, screening for genuine machine learning depth rather than API-wrapper familiarity, and closing a competitive candidate can take months, during which your AI roadmap sits idle. We maintain a pipeline of pre-vetted AI and ML engineers who can embed into your existing team on a contract basis, or move into a permanent role if that's the fit — evaluated for both technical depth and the ability to work inside someone else's codebase and process from week one.",
        ],
      },
      {
        h2: "Roles we place",
        paragraphs: [
          "We place AI engineers and machine learning specialists across the AI stack — from LLM application engineers who build on top of OpenAI and Anthropic Claude, to ML engineers who train and deploy custom models, to data scientists who turn data into decisions, to full-stack engineers comfortable shipping AI features end-to-end.",
        ],
        bullets: [
          "AI / LLM application engineers",
          "Machine learning engineers and MLOps specialists",
          "Data scientists and data engineers",
          "Computer vision and NLP specialists",
          "Full-stack engineers with applied AI experience",
        ],
      },
      {
        h2: "How vetting works",
        paragraphs: [
          "Every engineer we place is screened for technical depth in the specific area you need — not a generic coding test, but evaluation against the kind of problems your team actually faces, plus a check on communication and collaboration ability, since a senior engineer who can't work with your existing team and codebase isn't a fit regardless of raw skill.",
        ],
      },
      {
        h2: "Contract staffing or permanent placement",
        paragraphs: [
          "We support both models. Contract staff augmentation lets you scale a team up quickly for a defined initiative without a long-term headcount commitment, while permanent placement is built for roles you know you need on your team indefinitely. Many engagements start as contract and convert to permanent once both sides confirm the fit — we structure the arrangement around what you actually need rather than pushing one model by default.",
        ],
      },
      {
        h2: "Getting started",
        paragraphs: [
          DISCOVERY_CALL +
            " Tell us the role, the tech stack, and the timeline, and we'll share vetted candidates rather than a stack of resumes to screen yourself.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you vet AI engineers before placing them?",
        a: "We screen for technical depth in the specific area a role needs — LLM applications, ML engineering, computer vision, and so on — plus communication and collaboration ability, since a strong engineer who can't work inside your existing team and codebase isn't a fit.",
      },
      {
        q: "Can we hire on contract first and convert to permanent later?",
        a: "Yes. Many engagements start as contract staff augmentation for a defined initiative and convert to permanent placement once both sides confirm the fit.",
      },
      {
        q: "What AI and ML roles do you place?",
        a: "AI/LLM application engineers, machine learning engineers, MLOps specialists, data scientists, computer vision and NLP specialists, and full-stack engineers with applied AI experience.",
      },
      {
        q: "How fast can you place an AI engineer?",
        a: "Because we maintain a pipeline of pre-vetted candidates, placements typically move far faster than a from-scratch hiring search. Exact timelines depend on the specificity of the role — we'll give you a realistic estimate on the discovery call.",
      },
      {
        q: "What does it cost to hire an AI engineer through Techtonic?",
        a: PRICING_ANSWER,
      },
    ],
  },
  {
    slug: "it-staff-augmentation",
    navLabel: "Staff Augmentation",
    metaTitle: "IT Staff Augmentation Services | Techtonic Innovations",
    metaDescription:
      "IT staff augmentation with pre-vetted senior engineers, data scientists, and DevOps specialists who embed into your team on contract.",
    ogImageAlt: "IT staff augmentation services by Techtonic Innovations",
    eyebrow: "IT staff augmentation",
    h1: "IT staff augmentation with engineers who embed, not observe",
    intro:
      "Techtonic Innovations provides IT staff augmentation — pre-vetted senior engineers, data scientists, and DevOps specialists who join your existing team, use your tools, follow your process, and start contributing inside your sprint cadence instead of running a separate parallel workstream.",
    sections: [
      {
        h2: "Staff augmentation vs. outsourcing",
        paragraphs: [
          "These two models solve different problems, and mixing them up leads to the wrong engagement. Outsourcing hands an entire project or workstream to an external team that owns delivery, working largely independently against a spec. Staff augmentation embeds individual engineers directly into your team, under your management and process, to add capacity where you're short — you keep architectural control and day-to-day direction; we supply the vetted people.",
          "Staff augmentation is the better fit when you already have technical leadership and process in place and simply need more hands, when the work is too tied to internal context to hand off wholesale, or when you need specialized skills — like AI/ML engineering — that are hard to hire directly and hard to justify a full separate outsourced team for. Outsourcing tends to fit better for a clearly-scoped, self-contained project your team doesn't have bandwidth to manage closely.",
        ],
      },
      {
        h2: "Who we place",
        paragraphs: [
          "We staff senior full-stack developers, machine learning and AI engineers, data scientists, DevOps and platform engineers, and technical leads — vetted for both technical depth and the ability to be productive inside an existing codebase and team quickly.",
        ],
        bullets: [
          "Senior full-stack developers (React, Next.js, Node.js, Python)",
          "AI / machine learning engineers and data scientists",
          "DevOps, platform, and cloud infrastructure engineers",
          "Technical leads and architects",
          "QA and test automation engineers",
        ],
      },
      {
        h2: "How engagements are structured",
        paragraphs: [
          "You define the role, tech stack, and expected time commitment; we match vetted candidates against that spec rather than sending a broad pool for you to filter. Engineers work inside your existing tools, standups, and sprint process from day one — the goal is that within the first sprint or two, an augmented engineer is contributing at the same level as someone you hired directly, without the multi-month hiring cycle.",
        ],
      },
      {
        h2: "Scaling up or down as needs change",
        paragraphs: [
          "Staff augmentation is built for flexibility — scale a team up for a specific initiative, a migration, a launch push, or a skills gap, and scale back down once that need passes, without the overhead of a permanent hire or a long-term outsourcing contract.",
        ],
      },
      {
        h2: "Getting started",
        paragraphs: [
          DISCOVERY_CALL +
            " Share the role, stack, and timeline and we'll respond with vetted candidates rather than a lengthy sourcing process on your end.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between staff augmentation and outsourcing?",
        a: "Outsourcing hands a project to an external team that owns delivery independently. Staff augmentation embeds individual vetted engineers into your existing team, under your management and process, to add capacity — you keep control of architecture and direction.",
      },
      {
        q: "When does staff augmentation make more sense than outsourcing?",
        a: "When you already have technical leadership and process in place and need more hands, when the work is too tied to internal context to hand off wholesale, or when you need specialized skills like AI/ML engineering that are hard to hire directly.",
      },
      {
        q: "How quickly can an augmented engineer start contributing?",
        a: "Because candidates are pre-vetted and matched to your specific stack, most augmented engineers are contributing meaningfully within the first sprint or two, well inside your existing process rather than ramping up separately.",
      },
      {
        q: "Can we scale the team up and down as needs change?",
        a: "Yes — that flexibility is the core benefit of staff augmentation. Add engineers for a defined initiative or crunch period and scale back down once it passes.",
      },
      {
        q: "What does IT staff augmentation cost?",
        a: PRICING_ANSWER,
      },
    ],
  },
  {
    slug: "ai-consulting",
    navLabel: "AI Consulting",
    metaTitle: "AI Consulting for Small Business | Techtonic Innovations",
    metaDescription:
      "AI consulting for small and mid-size businesses — a practical roadmap and MVP build, scoped to your budget with no long-term lock-in.",
    ogImageAlt: "AI consulting for small business by Techtonic Innovations",
    eyebrow: "AI consulting for small business",
    h1: "AI consulting built for small business budgets and timelines",
    intro:
      "Techtonic Innovations offers AI consulting for small and mid-size businesses that want practical results — not a slide deck about the future of AI, but a scoped, working solution that fits your budget, team size, and timeline.",
    sections: [
      {
        h2: "AI consulting without the enterprise price tag or timeline",
        paragraphs: [
          "Most AI consulting is built for enterprise budgets and multi-quarter timelines that don't fit a small or growing business. We scope engagements the other direction: start with the single highest-impact use case, prove it out fast and cheap enough to justify the investment on its own, and expand from there — rather than requiring a large upfront commitment before you see any return.",
          "That means an AI consulting engagement with us might be a focused MVP that automates one painful manual process, a proof-of-concept chatbot for customer support, or an assessment that tells you honestly where AI will and won't help your business right now — sometimes the most useful consulting outcome is a clear 'not yet, and here's why.'",
        ],
      },
      {
        h2: "What small business AI consulting covers",
        paragraphs: [
          "We help small and mid-size businesses identify where AI can realistically save time or money given their actual data, tools, and team size, then build the smallest version of that solution that delivers real value — an AI chatbot, a document-processing automation, a predictive report, or a custom internal tool.",
        ],
        bullets: [
          "AI opportunity assessment scoped to your business, not a generic checklist",
          "MVP builds for chatbots, automation, and AI-powered features",
          "Guidance on off-the-shelf AI tools vs. custom-built solutions",
          "Data readiness review — what you have vs. what a given AI use case needs",
          "A clear, jargon-free explanation of what a solution will and won't do",
        ],
      },
      {
        h2: "Build vs. buy guidance",
        paragraphs: [
          "Not every problem needs custom AI development — sometimes an existing tool solves it well enough, and we'll tell you that rather than pitching a custom build we don't think you need. Where a custom solution is the right call, we explain why in plain terms: what an off-the-shelf tool can't do for your specific workflow, data, or integration needs.",
        ],
      },
      {
        h2: "No long-term lock-in",
        paragraphs: [
          "Small business engagements are scoped project-by-project rather than requiring a retainer or long-term contract. If the first project delivers value, most clients come back for the next one — but that's a decision you make after seeing results, not a condition of getting started.",
        ],
      },
      {
        h2: "Getting started",
        paragraphs: [
          DISCOVERY_CALL +
            " Tell us your business, your team size, and the problem you're trying to solve, and we'll give you an honest read on whether AI is the right tool for it. " +
            PRICING_ANSWER,
        ],
      },
    ],
    faqs: [
      {
        q: "Is AI consulting worth it for a small business?",
        a: "It depends on the use case. We scope every engagement to start with the highest-impact, lowest-risk opportunity so you see a return before committing further — and we'll tell you directly if AI isn't the right fit for a given problem yet.",
      },
      {
        q: "Do we need a lot of data to use AI in our business?",
        a: "Not always. Many high-value use cases — document processing, chatbots grounded in your existing content, workflow automation — don't require large historical datasets. We assess your actual data and tools during the discovery call rather than assuming you need a big-data setup.",
      },
      {
        q: "Should we buy an existing AI tool or build something custom?",
        a: "Often an existing tool is the right call, and we'll say so. Custom development makes sense when your workflow, data, or integration needs don't fit what off-the-shelf products offer — we walk through that tradeoff honestly before recommending a build.",
      },
      {
        q: "How much does AI consulting for a small business cost?",
        a: PRICING_ANSWER,
      },
      {
        q: "How fast can we see results?",
        a: TIMELINE_ANSWER,
      },
    ],
  },
  {
    slug: "ai-development-company-virginia",
    navLabel: "Virginia / DC Metro",
    metaTitle: "AI Development Company in Virginia | Techtonic Innovations",
    metaDescription:
      "Techtonic Innovations is an AI development company based in Reston, VA, serving Northern Virginia, DC, and businesses across the US.",
    ogImageAlt: "AI development company in Reston, Virginia",
    eyebrow: "AI development company in Virginia",
    h1: "An AI development company based in Reston, Virginia",
    intro:
      "Techtonic Innovations is an AI development and software engineering company headquartered in Reston, Virginia, in the Washington, DC metro area. We work with businesses across Northern Virginia, DC, and Maryland directly, and with clients across the United States remotely.",
    sections: [
      {
        h2: "Local roots, national reach",
        paragraphs: [
          "Being based in Reston puts us close to the dense concentration of enterprise, government-adjacent, and technology companies across Northern Virginia and the greater Washington, DC metro area — a region with a strong bench of technical talent and a business culture that values rigor and security as much as speed. At the same time, our delivery model — agile two-week sprints, async-friendly communication, and cloud-native infrastructure — works the same whether a client is a few miles away in Tysons or across the country, so our services aren't limited to the region.",
          "For businesses in Northern Virginia, DC, or Maryland who prefer working with a nearby team, we're available for in-person discovery conversations and check-ins alongside our standard remote-first delivery process.",
        ],
      },
      {
        h2: "What we offer businesses in the DC metro area",
        paragraphs: [
          "We offer the same full range of services to local and national clients alike: AI solution engineering, AI agent development, workflow automation, custom software and web application development, and IT staff augmentation with vetted AI engineers and full-stack developers.",
        ],
        bullets: [
          "AI development services — LLMs, RAG, computer vision, predictive analytics",
          "AI automation agency work — workflow automation and AI chatbots",
          "AI agent development for multi-step, tool-using workflows",
          "Custom software and web application development",
          "IT staff augmentation and AI engineer placement",
        ],
      },
      {
        h2: "Industries we serve",
        paragraphs: [
          "Given the region's mix of enterprise, government-adjacent contractors, healthcare systems, and financial institutions, we've built experience delivering AI and software projects with the compliance, security, and reliability expectations those industries carry — alongside the SaaS, e-commerce, and startup clients we also serve across the country.",
        ],
      },
      {
        h2: "Why work with a Northern Virginia AI company",
        paragraphs: [
          "A regional team that also operates at a national delivery standard gives you the best of both: the option of a face-to-face relationship when it's useful, backed by the same modern AI/ML and cloud engineering stack — OpenAI, Anthropic Claude, AWS, Azure, Google Cloud, React, Next.js, Python, and Kubernetes — that we use on every project, local or remote.",
        ],
      },
      {
        h2: "Get started",
        paragraphs: [
          `${DISCOVERY_CALL} Reach out through the contact form on this site or email ${SITE.email} — we respond within 2 to 4 business hours. ` +
            TIMELINE_ANSWER,
        ],
      },
    ],
    faqs: [
      {
        q: "Where is Techtonic Innovations located?",
        a: "We are headquartered in Reston, Virginia, in the Washington, DC metro area, and work with clients across Northern Virginia, DC, and Maryland in person, and across the United States remotely.",
      },
      {
        q: "Do you only work with local Virginia and DC-area clients?",
        a: "No — we serve businesses across the United States remotely. Being based in Reston means we can also offer in-person discovery conversations and check-ins for clients in the DC metro area who prefer that.",
      },
      {
        q: "What industries do you serve in the DC metro area?",
        a: "Enterprise, government-adjacent, healthcare, finance, SaaS, and e-commerce clients, among others — a mix shaped by the region's business landscape alongside our broader national client base.",
      },
      {
        q: "What services are available to Northern Virginia businesses?",
        a: "The same full range we offer nationally: AI development services, AI automation and agents, custom software and web application development, and IT staff augmentation with vetted engineers.",
      },
      {
        q: "How do we get started?",
        a: `Reach out through the contact form on this site or email ${SITE.email}. We respond within 2 to 4 business hours and begin every engagement with a free discovery call.`,
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDef | undefined {
  return services.find((s) => s.slug === slug);
}
