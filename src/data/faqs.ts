/**
 * FAQ content — single source of truth for the FAQ UI and the FAQPage
 * JSON-LD structured data in index.html. Keep these in sync.
 * Optimised for SEO + answer-engine (ChatGPT / Claude / Gemini / Perplexity) retrieval.
 */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What does TechTonic Innovations do?",
    a: "TechTonic Innovations is an enterprise technology company that delivers AI solution engineering, elite tech talent placement, modern web platform development, and intelligent software products. We help organizations design, build, and scale AI-powered software.",
  },
  {
    q: "What AI and machine learning services do you offer?",
    a: "We build custom AI systems including large language model (LLM) integrations, RAG pipelines, AI agents, natural language processing, computer vision, predictive analytics, and intelligent automation — architected for each client's specific business context.",
  },
  {
    q: "Where is TechTonic Innovations located?",
    a: "We are headquartered in the Washington, DC metro area (Reston, Virginia) and work with enterprise, SaaS, healthcare, finance, government, and e-commerce clients across the United States and remotely worldwide.",
  },
  {
    q: "How do you place engineers and tech talent?",
    a: "We connect organizations with rigorously vetted technology professionals — AI engineers, data scientists, machine learning specialists, full-stack developers, and technical leaders — through both contract staff augmentation and permanent placement.",
  },
  {
    q: "What technologies and frameworks do you work with?",
    a: "Our stack includes OpenAI and Anthropic Claude, AWS, Azure, and Google Cloud, plus React, Next.js, TypeScript, Node.js, Python, FastAPI, PyTorch, TensorFlow, Hugging Face, PostgreSQL, vector databases, Docker, Kubernetes, and Terraform.",
  },
  {
    q: "How long does a typical project take?",
    a: "We work in agile two-week sprints and deliver in weeks, not quarters. Many web platforms and AI MVPs launch within 6 to 12 weeks, depending on scope. Every engagement starts with a free discovery call to scope timelines precisely.",
  },
  {
    q: "How much does it cost to work with TechTonic Innovations?",
    a: "Pricing depends on project scope, team size, and engagement model (fixed-scope project, dedicated team, or staff augmentation). We provide a transparent estimate after a free discovery call where we understand your specific needs before proposing a solution.",
  },
  {
    q: "How do we get started?",
    a: "Reach out through the contact form on this site or email info@techtonicinnovations.com. We respond within 2 to 4 business hours and begin every engagement with a free discovery call to understand your goals.",
  },
];
