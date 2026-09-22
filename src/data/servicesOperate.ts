import type { ServiceDef } from "./services";
import { DISCOVERY_CALL, PRICING_ANSWER, TIMELINE_ANSWER } from "./serviceCopy";
import { SITE } from "./site";

/**
 * Run-and-scale services: managed AI, AI engineers, staff augmentation, plus the Virginia location page.
 * See services.ts for the content rules that apply to every page.
 */
export const operateServices: ServiceDef[] = [
  {
    slug: "managed-ai-services",
    navLabel: "Managed AI Services",
    group: "operate",
    related: ["ai-security-audit", "ai-agent-development", "ai-automation-agency", "hire-ai-engineers"],
    metaTitle: "Managed AI Services & AI Ops Retainer | Techtonic",
    metaDescription:
      "Managed AI services on a monthly retainer: we run your AI systems — monitoring, evals, model and prompt updates, and API cost control.",
    ogImageAlt: "Managed AI services by Techtonic Innovations",
    eyebrow: "Managed AI services",
    h1: "Managed AI services: we run your AI systems so you don't have to",
    intro:
      "Shipping an AI system is the start, not the finish. Models change underneath you, data drifts, prompts that worked last quarter degrade, and API costs creep up. Our managed AI services retainer keeps your chatbots, agents, and LLM features healthy month after month — monitored, evaluated, updated, and cost-controlled — without you hiring a dedicated AI operations team.",
    sections: [
      {
        h2: "Why AI systems need ongoing operation",
        paragraphs: [
          "Traditional software mostly stays the way you left it. AI systems don't. Model providers release new versions and retire old ones on their own schedule, and even a minor version change can shift how a prompt behaves. The documents your retrieval pipeline depends on get updated, moved, or deleted. Users find inputs nobody tested for. And because usage-based pricing scales with every token, a small inefficiency becomes a large bill as adoption grows.",
          "None of that shows up as an outage. It shows up as answers that are slightly worse, an agent that escalates more often, or an invoice that is higher than last month. A managed service exists to catch those changes early and act on them.",
        ],
      },
      {
        h2: "What the retainer covers",
        paragraphs: [
          "Every retainer is built from the same core responsibilities, scaled to how many systems you run and how critical they are.",
        ],
        subsections: [
          {
            h3: "Monitoring and alerting",
            body: "Dashboards and alerts for error rates, latency, tool-call failures, escalation rates, and user feedback, plus sampled review of real conversations and agent runs so problems are caught before customers report them.",
          },
          {
            h3: "Evaluations",
            body: "A versioned evaluation suite that runs on a schedule and before every change, scoring accuracy, groundedness, safety, and task success so you can see whether the system is getting better or worse — and prove it.",
          },
          {
            h3: "Model and prompt updates",
            body: "We track provider releases and deprecations, test new model versions against your evaluation suite before switching, tune prompts and retrieval as your content changes, and roll updates out behind a documented, reversible release process.",
          },
          {
            h3: "Cost control",
            body: "Monthly spend reporting by feature, model right-sizing, prompt caching, context trimming, and budgets with alerts — with every optimization checked against the evaluations so savings never quietly cost quality.",
          },
        ],
      },
      {
        h2: "Service tiers",
        paragraphs: [
          "Retainers come in three broad shapes. They're described qualitatively here because the right level depends on your systems, usage, and response-time needs — the fee is fixed monthly and scoped on a free call.",
        ],
        bullets: [
          "Monitor — for a single, lower-risk AI feature: monitoring, alerting, a monthly evaluation run, a monthly cost report, and provider-change tracking",
          "Operate — for business-critical systems: everything in Monitor plus continuous evaluations, proactive model and prompt updates, cost optimization, and a small monthly block of improvement work",
          "Embedded — for teams running several AI systems: a named AI engineer or a small pod working in your stack, priority response, a quarterly roadmap review, and ongoing feature work alongside operations",
        ],
      },
      {
        h2: "How onboarding works",
        paragraphs: [
          "If we built the system, onboarding is short: the handover documentation from our [AI agent development](/ai-agent-development) process becomes the operating manual. If someone else built it, we start with a review of the code, prompts, tools, and costs — often a lighter version of our [AI security audit](/ai-security-audit) — so we know what we're taking on, set up monitoring and a baseline evaluation, and agree the response times, change process, and escalation contacts in writing.",
          "You keep ownership of everything: the code, the prompts, the evaluation data, and the cloud and model-provider accounts. We work in your repositories and your accounts, with access you control and can revoke.",
        ],
      },
      {
        h2: "Is a managed service the right fit?",
        paragraphs: [
          "It suits teams whose AI systems matter to customers or operations but who don't have — or don't want to hire — specialists to watch them full time. If you'd rather build that capability in-house, we can [place AI engineers](/hire-ai-engineers) with you instead, or run a managed retainer while your team ramps up and then hand over. " +
            DISCOVERY_CALL,
        ],
      },
    ],
    faqs: [
      {
        q: "What are managed AI services?",
        a: "An ongoing monthly retainer where we operate your AI systems — monitoring, scheduled evaluations, model and prompt updates, and API cost control — so they keep performing after launch without a dedicated in-house AI operations team.",
      },
      {
        q: "Can you manage an AI system another company built?",
        a: "Yes. We start with a review of the code, prompts, tools, and costs, set up monitoring and a baseline evaluation, and document what we find before taking over day-to-day operation.",
      },
      {
        q: "How much does a managed AI services retainer cost?",
        a: "It's a fixed monthly fee, scoped on a free call. The price depends on how many systems are in scope, how critical they are, and the response times you need — you get a written proposal with the tier, the responsibilities, and the fee before anything starts.",
      },
      {
        q: "What happens when a model provider retires or changes a model?",
        a: "We test the replacement against your evaluation suite before switching, adjust prompts where behavior changed, and roll it out through a reversible release, so a provider change doesn't become a surprise for your users.",
      },
      {
        q: "Do we keep ownership of our code and data?",
        a: "Yes. We work in your repositories and accounts with access you control. The code, prompts, evaluation data, and documentation remain yours if the retainer ends.",
      },
    ],
  },
  {
    slug: "hire-ai-engineers",
    navLabel: "Hire AI Engineers",
    group: "operate",
    related: ["it-staff-augmentation", "managed-ai-services", "ai-agent-development"],
    metaTitle: "Hire AI Engineers | Techtonic Innovations",
    metaDescription:
      "Hire vetted AI engineers and ML specialists on contract or permanent placement, or as a forward-deployed AI pod embedded in your stack.",
    ogImageAlt: "Hire AI engineers through Techtonic Innovations",
    eyebrow: "Hire AI engineers",
    h1: "Hire AI engineers who can ship on day one",
    intro:
      "Techtonic Innovations connects organizations with rigorously vetted AI engineers, machine learning specialists, and data scientists — through contract staff augmentation, permanent placement, or a forward-deployed AI pod — so you can scale an AI initiative without a months-long hiring cycle.",
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
        h2: "Forward-deployed AI pods",
        paragraphs: [
          "Sometimes one engineer isn't enough, but handing the work to an outside team isn't right either. A forward-deployed AI pod is a small embedded team — typically an AI engineer, a full-stack or data engineer, and a technical lead who owns delivery — that works inside your stack: your repositories, your cloud accounts, your ticketing, your standups. The pod brings the AI-specific practices many teams don't have yet, such as evaluation suites, prompt and model versioning, and cost monitoring, and leaves them behind in your codebase.",
          "Pods fit well when you have a defined AI initiative — an agent, a retrieval system, an automation program — and want it built by people who sit with your team rather than behind a statement of work. The pod's size and mix change as the work does, and the goal is always transfer: your engineers pair with the pod, own the system by the end, and can hire from it if that's the fit. If you'd rather hand over a defined project entirely, see our [AI agent development](/ai-agent-development) service instead; if you only need ongoing operation after launch, see [managed AI services](/managed-ai-services).",
        ],
        bullets: [
          "Small cross-functional team embedded in your tools and rituals",
          "A technical lead accountable for delivery, reporting to your leadership",
          "Works in your repositories and cloud accounts, under your access controls",
          "Brings evaluation, versioning, and cost-monitoring practices with it",
          "Pairs with your engineers so knowledge stays when the pod leaves",
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
        q: "What is a forward-deployed AI pod?",
        a: "A small embedded team — usually an AI engineer, a full-stack or data engineer, and a technical lead — that works inside your stack and process to deliver a defined AI initiative, then transfers ownership to your team.",
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
    group: "operate",
    related: ["hire-ai-engineers", "managed-ai-services", "custom-software-development"],
    metaTitle: "IT Staff Augmentation Services | Techtonic Innovations",
    metaDescription:
      "IT staff augmentation with pre-vetted senior engineers, data scientists, and DevOps specialists who embed into your team on contract.",
    ogImageAlt: "IT staff augmentation services by Techtonic Innovations",
    eyebrow: "IT staff augmentation",
    h1: "IT staff augmentation with engineers who embed, not observe",
    intro:
      "Techtonic Innovations provides IT staff augmentation — pre-vetted senior engineers, data scientists, and DevOps specialists who join your existing team, use your tools, follow your process, and start contributing inside your sprint cadence instead of running a separate parallel workstream. For AI initiatives, we also offer forward-deployed AI pods: small embedded teams that work in your stack.",
    sections: [
      {
        h2: "Staff augmentation vs. outsourcing",
        paragraphs: [
          "These two models solve different problems, and mixing them up leads to the wrong engagement. Outsourcing hands an entire project or workstream to an external team that owns delivery, working largely independently against a spec. Staff augmentation embeds individual engineers directly into your team, under your management and process, to add capacity where you're short — you keep architectural control and day-to-day direction; we supply the vetted people.",
          "Staff augmentation is the better fit when you already have technical leadership and process in place and simply need more hands, when the work is too tied to internal context to hand off wholesale, or when you need specialized skills — like AI/ML engineering — that are hard to hire directly and hard to justify a full separate outsourced team for. Outsourcing tends to fit better for a clearly-scoped, self-contained project your team doesn't have bandwidth to manage closely.",
        ],
      },
      {
        h2: "A third option: forward-deployed AI pods",
        paragraphs: [
          "For AI work specifically, there's a model between individual staff augmentation and outsourcing. A forward-deployed AI pod is a small embedded team — for example an AI engineer, a data or full-stack engineer, and a technical lead — that joins your organization the way augmented engineers do, working in your repositories, tools, and sprint cadence, but arrives as a unit that already knows how to work together and takes responsibility for delivering a defined AI outcome.",
          "You keep architectural control and day-to-day direction, as with staff augmentation. The difference is that the pod brings its own delivery lead and the AI-specific engineering practices — evaluation suites, prompt and model versioning, guardrails, and cost monitoring — that a single augmented engineer would have to establish alone. Pods are sized to the work and scale up or down like any augmentation engagement, with an explicit plan to hand ownership to your team. Read more about pods on our [hire AI engineers](/hire-ai-engineers) page.",
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
        q: "How is a forward-deployed AI pod different from staff augmentation?",
        a: "Staff augmentation adds individual engineers under your management. A forward-deployed AI pod adds a small team with its own technical lead that takes responsibility for delivering a defined AI initiative inside your stack, while you keep architectural control and direction.",
      },
      {
        q: "What does IT staff augmentation cost?",
        a: PRICING_ANSWER,
      },
    ],
  },
  {
    slug: "ai-development-company-virginia",
    navLabel: "Virginia / DC Metro",
    group: "local",
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
          `${DISCOVERY_CALL} Reach out through the contact form on this site or email ${SITE.email} — we respond within one business day. ` +
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
        a: `Reach out through the contact form on this site or email ${SITE.email}. We respond within one business day and begin every engagement with a free discovery call.`,
      },
    ],
  },
];
