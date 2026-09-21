import type { ServiceDef } from "./services";
import { DISCOVERY_CALL, FIXED_PRICE_ANSWER, PRICING_ANSWER, TIMELINE_ANSWER } from "./serviceCopy";

/**
 * Strategy and audit services: consulting, readiness audit, discovery sprint, security audit.
 * See services.ts for the content rules that apply to every page.
 */
export const planServices: ServiceDef[] = [
  {
    slug: "ai-consulting",
    navLabel: "AI Consulting",
    group: "plan",
    related: ["ai-readiness-audit", "ai-discovery-sprint", "ai-security-audit", "ai-automation-agency"],
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
        h2: "Two fixed-price ways to start",
        paragraphs: [
          "If you want a defined starting point rather than an open-ended conversation, consulting work can start with one of two packaged engagements. An [AI readiness audit](/ai-readiness-audit) takes two to four weeks and ends with a written AI-use roadmap and a build estimate — the right choice when you know AI should help but not yet where. An [AI discovery sprint](/ai-discovery-sprint) takes four to six weeks and ends with a working prototype and a production roadmap — the right choice when you already have one use case in mind and want proof it works on your data before committing to a full build.",
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
    slug: "ai-readiness-audit",
    navLabel: "AI Readiness Audit",
    group: "plan",
    related: ["ai-discovery-sprint", "ai-consulting", "ai-security-audit", "ai-development-services"],
    metaTitle: "AI Readiness Audit & Roadmap | Techtonic Innovations",
    metaDescription:
      "A 2–4 week paid AI readiness audit: we review your workflows, data, and systems and deliver a written AI-use roadmap with a build estimate.",
    ogImageAlt: "AI readiness audit by Techtonic Innovations",
    eyebrow: "AI readiness audit",
    h1: "An AI readiness audit that ends with a roadmap you can act on",
    intro:
      "The AI readiness audit is a two-to-four-week paid engagement for businesses that know AI should help but aren't sure where to start, what it will take, or what it will cost. We study how work actually gets done, what data and systems you have, and where the risks are — then hand you a written AI-use roadmap and a build estimate for the opportunities worth pursuing.",
    sections: [
      {
        h2: "Who the audit is for",
        paragraphs: [
          "The audit is built for owners, operators, and technology leaders who are being asked about AI and want a grounded answer. It fits well when you have several possible use cases and no clear way to rank them, when a vendor has pitched an AI product and you want an independent view, when leadership wants a budget number before approving a build, or when teams are already using AI tools informally and you need to understand the exposure.",
          "It is not a sales exercise for a build. Some audits conclude that the best next step is an off-the-shelf tool, a process change, or waiting until your data is in better shape. The roadmap says so plainly, and you're free to take it to any team — ours or someone else's.",
        ],
      },
      {
        h2: "What's included",
        paragraphs: [
          "Every audit covers the same core areas, weighted toward what matters most for your business. We agree the scope, the people we'll interview, and the systems we'll review in writing before the audit starts.",
        ],
        bullets: [
          "Stakeholder interviews with the people who do the work, not just leadership",
          "Workflow mapping for the processes with the most manual effort",
          "Data review: what you have, where it lives, its quality, and who can access it",
          "Systems and integration review of your CRM, ERP, help desk, and internal tools",
          "Risk review covering privacy, security, compliance, and vendor lock-in",
          "Review of AI tools already in use across the business",
          "Build-versus-buy analysis for each opportunity",
          "Prioritized roadmap with effort, dependencies, and a build estimate",
        ],
      },
      {
        h2: "Timeline",
        paragraphs: [
          "Most audits run two to four weeks, depending on how many teams and systems are in scope. A typical shape looks like this:",
        ],
        subsections: [
          {
            h3: "Week 1 — Kickoff and interviews",
            body: "We confirm goals and success criteria, get read access to the documents and systems in scope, and interview the people closest to the work to find where time and money actually go.",
          },
          {
            h3: "Weeks 2–3 — Analysis",
            body: "We map the highest-effort workflows, test data quality against each candidate use case, check integration paths, and assess risk. Where it helps, we run quick feasibility checks — for example, testing whether a model can reliably extract fields from a sample of your real documents.",
          },
          {
            h3: "Final week — Roadmap and readout",
            body: "We write the roadmap and walk your team through it in a live readout, answering questions and adjusting priorities before the final version is delivered.",
          },
        ],
      },
      {
        h2: "Deliverables",
        paragraphs: [
          "You receive a written AI-use roadmap and a build estimate. The roadmap ranks each opportunity by expected value, effort, risk, and data readiness, and explains the reasoning so your team can challenge it. For the top opportunities, it describes the proposed approach, the systems it touches, what a first version would include, and how success would be measured.",
          "The build estimate breaks the recommended work into phases with a scope and a price range for each, so you can budget for the first step without committing to the whole program. You also get the interview notes, the workflow maps, and the data and risk findings — the raw material behind the recommendations, not just the conclusions.",
        ],
      },
      {
        h2: "What happens after the audit",
        paragraphs: [
          "A common next step is to take the top-ranked opportunity into a fixed-price [AI discovery sprint](/ai-discovery-sprint) and prove it on real data before committing to a full build. You can also go straight to production with our [AI development services](/ai-development-services), hand the roadmap to your internal team, or use it to evaluate vendors. If the review surfaces concerns with AI systems you already run, our [AI security audit](/ai-security-audit) goes deeper on those. " +
            DISCOVERY_CALL,
        ],
      },
    ],
    faqs: [
      {
        q: "What is an AI readiness audit?",
        a: "A short, paid engagement — usually two to four weeks — where we review your workflows, data, systems, and risks, then deliver a written AI-use roadmap and a build estimate showing which AI opportunities are worth pursuing and in what order.",
      },
      {
        q: "How much does the AI readiness audit cost?",
        a: FIXED_PRICE_ANSWER,
      },
      {
        q: "Do we have to hire you for the build afterward?",
        a: "No. The roadmap and estimate are yours to use however you choose — with us, with your internal team, or with another vendor. We write them so any competent engineering team can act on them.",
      },
      {
        q: "How much of our team's time does the audit take?",
        a: "Mostly interviews of about an hour with the people closest to each workflow, plus a named point of contact to arrange system access. We agree the list in advance so nobody is surprised.",
      },
      {
        q: "What if the audit finds AI isn't a good fit right now?",
        a: "Then the roadmap says so and explains why — for example, data that needs cleanup first or a process that an off-the-shelf tool already handles well. A clear 'not yet' is a useful result.",
      },
    ],
  },
  {
    slug: "ai-discovery-sprint",
    navLabel: "AI Discovery Sprint",
    group: "plan",
    related: ["ai-readiness-audit", "ai-agent-development", "ai-development-services", "managed-ai-services"],
    metaTitle: "AI Discovery Sprint: Fixed-Price AI PoC | Techtonic",
    metaDescription:
      "A fixed-price 4–6 week AI proof-of-concept sprint: a working prototype on your real data, an evaluation report, and a production roadmap.",
    ogImageAlt: "AI discovery sprint proof of concept by Techtonic Innovations",
    eyebrow: "AI discovery sprint",
    h1: "A fixed-price AI discovery sprint: a working prototype in weeks",
    intro:
      "The AI discovery sprint is a fixed-price, four-to-six-week proof-of-concept engagement. You bring one well-defined use case; we build a working prototype against your real data, measure how well it performs, and deliver a production roadmap — so the decision to invest in a full build is based on evidence instead of a demo.",
    sections: [
      {
        h2: "Why a sprint before a full build",
        paragraphs: [
          "AI projects tend to stall for predictable reasons: the data turns out messier than expected, the model is accurate on clean examples but not on the real ones, the integration is harder than it looked, or the running cost doesn't make sense at volume. A discovery sprint surfaces those problems in weeks, at a fixed price, before you've committed to a production budget.",
          "It works best when you already know the use case — support ticket triage, document extraction, an internal knowledge assistant, a lead-qualification agent, a forecasting model. If you're not there yet, start with an [AI readiness audit](/ai-readiness-audit) to find and rank the opportunities first.",
        ],
      },
      {
        h2: "Who the sprint is for",
        paragraphs: [
          "The sprint suits product and operations leaders who need a go or no-go decision on a specific AI idea, technology teams asked to validate a vendor's claims against their own data, and founders who need a working prototype to show stakeholders. It needs a sponsor who can make decisions weekly and someone who knows the data — the sprint moves fast, and waiting on access or approvals is the most common thing that slows it down.",
        ],
      },
      {
        h2: "What the sprint includes",
        paragraphs: [
          "The scope is agreed in writing up front: one use case, the success criteria, the data we'll use, and the systems the prototype may read from. Within that scope the sprint covers:",
        ],
        bullets: [
          "Use-case definition with measurable success criteria",
          "Data access, sampling, and a data-quality assessment",
          "Model and approach selection, including build-versus-buy",
          "A working prototype running on your real data",
          "An evaluation set and scored results against the success criteria",
          "Cost-per-task and latency measurements",
          "Security and privacy review of the proposed design",
          "Weekly demos so you see progress and can steer",
        ],
      },
      {
        h2: "Timeline",
        paragraphs: [
          "Sprints run four to six weeks depending on data access and integration complexity. Each week ends with a demo of working software.",
        ],
        subsections: [
          {
            h3: "Week 1 — Frame and baseline",
            body: "We confirm the use case and success criteria, get access to data, build an evaluation set from real examples, and measure how the task is done today so there's a baseline to beat.",
          },
          {
            h3: "Weeks 2–4 — Build and evaluate",
            body: "We build the prototype in short iterations, scoring every version against the evaluation set. When an approach isn't working, you hear about it that week — not at the end.",
          },
          {
            h3: "Final weeks — Stress-test and plan production",
            body: "We test edge cases and failure modes, measure cost and latency at realistic volume, and write the production roadmap. The sprint closes with a readout and a live demo for stakeholders.",
          },
        ],
      },
      {
        h2: "Deliverables",
        paragraphs: [
          "You receive a working prototype — running code in a repository you own, not slides — along with an evaluation report showing how it performed against the agreed criteria, including where it failed. The production roadmap covers the architecture for a production version, the integrations and guardrails it needs, the security and monitoring work, an estimate of running costs, and a phased build estimate.",
          "Sometimes the honest finding is that the use case isn't viable yet. When that happens, the report explains exactly why — data, accuracy, cost, or integration — and what would need to change. That's still a good outcome: you learned it in weeks, at a known price.",
        ],
      },
      {
        h2: "From prototype to production",
        paragraphs: [
          "If the prototype meets its criteria, the natural next step is a production build with our [AI agent development](/ai-agent-development) or [AI development services](/ai-development-services) team, following the roadmap from the sprint. Once it's live, [managed AI services](/managed-ai-services) can keep it monitored, evaluated, and cost-controlled. You're equally free to take the code and the roadmap to your own engineers. " +
            DISCOVERY_CALL,
        ],
      },
    ],
    faqs: [
      {
        q: "What is an AI discovery sprint?",
        a: "A fixed-price, four-to-six-week proof-of-concept engagement focused on one use case. It produces a working prototype on your real data, an evaluation report, and a production roadmap with a build estimate.",
      },
      {
        q: "How much does the discovery sprint cost?",
        a: FIXED_PRICE_ANSWER,
      },
      {
        q: "What do we need to provide?",
        a: "A clear use case, a decision-maker who can join weekly demos, and access to a representative sample of the real data — with sensitive fields masked where needed. We agree the details before the sprint starts.",
      },
      {
        q: "Who owns the prototype code?",
        a: "You do. The code lives in a repository you control, and the evaluation set and roadmap are yours to use with any team.",
      },
      {
        q: "What if the prototype doesn't meet the success criteria?",
        a: "The evaluation report shows where and why it fell short and what would need to change. Stopping after the sprint, adjusting the approach, or choosing a different use case are all legitimate outcomes.",
      },
    ],
  },
  {
    slug: "ai-security-audit",
    navLabel: "AI Security Audit",
    group: "plan",
    related: ["ai-agent-development", "managed-ai-services", "ai-readiness-audit", "ai-development-services"],
    metaTitle: "AI Security Audit & LLM Red Teaming | Techtonic",
    metaDescription:
      "An AI code, security, and cost audit: LLM red teaming, prompt-injection testing, evaluation harnesses, and an API cost review for AI systems.",
    ogImageAlt: "AI security audit and LLM red teaming by Techtonic Innovations",
    eyebrow: "AI security audit",
    h1: "AI security, code, and cost audits for LLM systems",
    intro:
      "If you already run chatbots, AI agents, or LLM features in production — or you're about to launch one — the AI security audit tells you how they fail. We review the code, attack the system the way an adversary would, build the evaluation harness you need to catch regressions, and review what you're spending on model APIs and why.",
    sections: [
      {
        h2: "Why AI systems need their own audit",
        paragraphs: [
          "A conventional penetration test checks your network, authentication, and web application. LLM systems add new ways to fail: instructions hidden in a document or email that the model obeys, an agent tricked into calling a tool it shouldn't, sensitive data surfacing in a response, answers that drift after a quiet model update, and API bills that grow faster than usage. These risks sit in prompts, retrieval pipelines, and tool permissions — places a traditional security review rarely looks.",
          "Our audit is scoped to those risks, using the OWASP Top 10 for LLM Applications as a baseline checklist and adapting it to how your system is actually built. We test against a staging environment wherever possible, and agree rules of engagement in writing — scope, timing, and what's off-limits — before any testing starts.",
        ],
      },
      {
        h2: "What we test",
        paragraphs: [
          "The audit combines hands-on adversarial testing with a review of the code and architecture behind it, so every finding comes with a root cause rather than just a symptom.",
        ],
        subsections: [
          {
            h3: "LLM red teaming",
            body: "Structured adversarial testing of your chatbot or agent: jailbreaks, attempts to extract the system prompt or other users' data, harmful or off-brand output, and social-engineering the model into skipping a business rule.",
          },
          {
            h3: "Prompt-injection testing",
            body: "Direct injection through the chat box and indirect injection through anything the model reads — uploaded files, web pages, emails, tickets, and retrieved documents. For agents, we test whether injected instructions can trigger tool calls, data exfiltration, or actions outside the intended scope.",
          },
          {
            h3: "Code and architecture review",
            body: "How prompts are built, how user input and retrieved content are separated, where secrets live, how tool permissions are enforced, how model output is validated before other systems act on it, and what gets logged.",
          },
        ],
      },
      {
        h2: "Evaluation harnesses",
        paragraphs: [
          "Many teams have no automated way to know whether their AI system got better or worse after a change. As part of the audit we build or extend an evaluation harness: a versioned set of test cases drawn from real usage and from the attacks we found, automated scoring for accuracy, groundedness, refusal behavior, and injection resistance, and a script your CI pipeline can run on every prompt, model, or retrieval change. It stays with you after the audit, so every fix we recommend comes with a test that proves it holds.",
        ],
      },
      {
        h2: "API cost review",
        paragraphs: [
          "Model API spend can become one of the fastest-growing lines in an AI budget, and much of it is often avoidable. We trace where tokens go and look for the usual causes: oversized prompts and context windows, missing prompt caching, a large model doing work a smaller one handles equally well, retries and agent loops without limits, and repeated retrieval of the same content. Every recommendation is checked against the evaluation harness so cost savings don't quietly cost accuracy.",
        ],
        bullets: [
          "Token usage breakdown by feature and prompt",
          "Model right-sizing and routing recommendations",
          "Prompt caching and context-trimming opportunities",
          "Loop, retry, and rate-limit controls",
          "Spend alerts and per-feature budgets",
        ],
      },
      {
        h2: "Deliverables and next steps",
        paragraphs: [
          "You receive a written report with every finding rated by severity and likelihood, reproduction steps, and a specific fix — plus an executive summary for non-technical stakeholders, the evaluation harness, and the cost review with an estimated saving for each change. We walk your engineers through the findings and retest the fixes once they're in. If you'd rather we implement them, we can, and [managed AI services](/managed-ai-services) can keep running the evaluations and cost monitoring on an ongoing basis. Building a new agent? See how we design guardrails into [AI agent development](/ai-agent-development) from the start. " +
            DISCOVERY_CALL,
        ],
      },
    ],
    faqs: [
      {
        q: "What is LLM red teaming?",
        a: "Structured adversarial testing of an AI system — trying to make a chatbot or agent leak data, ignore its rules, produce harmful output, or take actions it shouldn't — so weaknesses are found and fixed before real attackers or users find them.",
      },
      {
        q: "What is prompt injection, and why does it matter for agents?",
        a: "Prompt injection is when text the model reads — a user message, document, email, or web page — contains instructions the model follows instead of yours. For agents with tool access, a successful injection can trigger real actions, so it's the first thing we test.",
      },
      {
        q: "Is this a replacement for a traditional penetration test?",
        a: "No. It complements one. A standard pen test covers your network and application security; this audit covers the prompt, retrieval, tool, and model layers that a traditional test typically doesn't examine.",
      },
      {
        q: "How much does an AI security audit cost?",
        a: FIXED_PRICE_ANSWER,
      },
      {
        q: "Will testing affect our production system?",
        a: "We test against staging wherever possible. When production testing is necessary, we agree the scope, timing, and limits in writing first and avoid anything that could affect real users or data.",
      },
    ],
  },
];
