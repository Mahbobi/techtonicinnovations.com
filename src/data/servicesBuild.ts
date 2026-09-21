import type { ServiceDef } from "./services";
import { DISCOVERY_CALL, PRICING_ANSWER, TIMELINE_ANSWER } from "./serviceCopy";

/**
 * Build services: AI, agents, automation, custom software, and web apps.
 * See services.ts for the content rules that apply to every page.
 */
export const buildServices: ServiceDef[] = [
  {
    slug: "ai-development-services",
    navLabel: "AI Development",
    group: "build",
    related: ["ai-readiness-audit", "ai-discovery-sprint", "ai-agent-development", "managed-ai-services"],
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
          "For teams that need software to take multi-step action rather than just answer questions, we design AI agents that call tools, query APIs, and complete workflows end-to-end, with guardrails, logging, and human approval steps where the stakes call for it. See our dedicated page on [AI agent development](/ai-agent-development) for more on agent architecture and evaluation.",
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
    group: "build",
    related: ["ai-agent-development", "ai-discovery-sprint", "managed-ai-services"],
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
    group: "build",
    related: ["ai-discovery-sprint", "ai-security-audit", "managed-ai-services", "ai-automation-agency"],
    metaTitle: "AI Agent Development Company | Techtonic Innovations",
    metaDescription:
      "Custom AI agent development: single and multi-agent systems that call your tools, with evals, guardrails, and handover docs your team can run.",
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
        h2: "Multi-agent system design",
        paragraphs: [
          "Most problems should start with one agent. A single agent with a well-defined set of tools is easier to test, cheaper to run, and simpler to debug. We move to a multi-agent design only when a single agent's instructions and tool list grow large enough that its accuracy drops, when parts of the work need different permissions, or when independent sub-tasks can run in parallel.",
          "When a multi-agent system is the right call, we design it explicitly: an orchestrator that plans and delegates, specialist agents with narrow instructions and their own tool sets, a shared state or message format so hand-offs are structured rather than free text, and hard limits on recursion depth, retries, and total spend per task. Every hand-off is traced, so when something goes wrong you can see which agent made which decision and why.",
        ],
        subsections: [
          {
            h3: "Orchestrator and specialists",
            body: "A planner agent breaks the goal into steps and routes each one to a specialist — for example a retrieval agent, a drafting agent, and a verification agent that checks the draft against source data before anything leaves the system.",
          },
          {
            h3: "Least-privilege permissions",
            body: "Each agent gets only the tools and data it needs. The agent that reads your CRM doesn't also get write access to billing, which limits the blast radius of a bad instruction or a prompt-injection attempt.",
          },
        ],
      },
      {
        h2: "Tool integrations",
        paragraphs: [
          "An agent is only as useful as the systems it can act on. We build typed tool definitions against the APIs you already run — CRM, help desk, ERP, ticketing, internal databases, document stores, email, and calendars — and, where it fits your stack, expose them through the Model Context Protocol (MCP) so the same tools can be reused across agents and models. Each tool validates its inputs, returns structured errors the agent can recover from, and separates read actions from write actions so write actions can require approval.",
        ],
        bullets: [
          "Typed function and tool schemas with input validation",
          "MCP servers for reusable, model-agnostic tool access",
          "Read/write separation with approval gates on writes",
          "Idempotent write actions so retries don't duplicate work",
          "Secrets kept in your vault, never in prompts or logs",
          "Rate limits and timeouts on every external call",
        ],
      },
      {
        h2: "Evaluation and guardrails",
        paragraphs: [
          "An agent that works in a demo and an agent that's safe to run unattended in production are different engineering problems. We build evaluation suites against representative real-world inputs, rate-limit and cost-cap agent actions, and design fallback behavior for when the agent is uncertain — so agents fail safely rather than confidently taking the wrong action.",
          "Concretely, that means a versioned evaluation set drawn from your real cases (with sensitive data removed), automated scoring for task success, tool-call correctness, and groundedness, and regression runs on every prompt, model, or tool change so a quiet model update can't degrade behavior unnoticed. On the input side we test against prompt injection hidden in documents, emails, and web pages the agent reads; on the output side we validate structured results before they reach another system. For a dedicated review of an agent you already run, see our [AI security audit](/ai-security-audit).",
        ],
      },
      {
        h2: "Handover documentation",
        paragraphs: [
          "You should be able to run, change, and audit the agent without us. Every agent we ship comes with an architecture overview, the full tool catalog with permissions, the prompt and model versions in source control, the evaluation set and how to run it, a runbook for common failures, and a cost model showing what drives spend per task. If you'd rather we keep operating it, our [managed AI services](/managed-ai-services) retainer picks up from exactly that documentation.",
        ],
      },
      {
        h2: "From proof of concept to production",
        paragraphs: [
          DISCOVERY_CALL +
            " We typically scope the first agent narrowly around one well-defined workflow, prove it out, and expand its action space as confidence grows. " +
            TIMELINE_ANSWER,
          "The engagement usually has three stages. First, a short proof of concept — often as a fixed-price [AI discovery sprint](/ai-discovery-sprint) — that runs the agent against real inputs in a sandbox with read-only tools and an evaluation baseline. Second, a hardening phase that adds write actions behind approvals, observability, cost caps, and security testing. Third, a staged rollout: shadow mode where the agent proposes and a person decides, then supervised autonomy on low-risk cases, then wider autonomy only where the evaluation results support it.",
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
        q: "When do we need a multi-agent system instead of a single agent?",
        a: "Usually later than people expect. We start with one agent and move to an orchestrator with specialist agents only when a single agent's tool list gets too large to stay accurate, when parts of the work need different permissions, or when independent sub-tasks can run in parallel.",
      },
      {
        q: "What documentation do we get at handover?",
        a: "An architecture overview, the tool catalog with permissions, versioned prompts and model settings, the evaluation set and instructions to run it, a failure runbook, and a cost model — enough for your team to operate and change the agent without us.",
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
    group: "build",
    related: ["web-application-development", "mobile-app-development", "ai-discovery-sprint"],
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
    group: "build",
    related: ["shopify-development", "mobile-app-development", "custom-software-development"],
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
];
