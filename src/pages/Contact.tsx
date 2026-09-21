import { ChevronRight } from "lucide-react";
import { Contact } from "../components/Contact";
import { JsonLd } from "../components/JsonLd";
import { CONTACT_ROUTE } from "../data/routes";
import { SITE } from "../data/site";
import { useDocumentHead } from "../lib/head";
import { breadcrumbJsonLd } from "../lib/jsonld";
import { Link } from "../lib/router";

const steps = [
  {
    title: "Tell us what you're working on",
    body: "Use the form below, email, or call. A few sentences about the problem, your current systems, and your timeline is plenty.",
  },
  {
    title: "Free discovery call",
    body: "We set up a call to understand your goals and constraints, answer questions, and tell you honestly whether we're the right fit.",
  },
  {
    title: "A written proposal",
    body: "If it makes sense to work together, you get a scoped proposal with deliverables, dates, and a fixed price or a transparent estimate.",
  },
];

export function ContactPage() {
  useDocumentHead(CONTACT_ROUTE.meta);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Contact", "/contact")} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: CONTACT_ROUTE.meta.title,
          description: CONTACT_ROUTE.meta.description,
          url: CONTACT_ROUTE.meta.canonical,
          about: { "@id": SITE.organizationId },
        }}
      />

      <header className="shell pt-32 sm:pt-36">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-ash">
          <Link to="/" className="transition-colors hover:text-acid">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-bone-dim">Contact</span>
        </nav>
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="font-display text-h1 font-extrabold uppercase leading-[0.95] text-bone">
            Talk to Techtonic Innovations
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ash">
            Whether you're weighing an AI project, need a build team, or want vetted engineers
            on your team, the first step is a free discovery call. Tell us about your project
            and we'll get back to you — we typically respond within 2–4 business hours.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-line bg-surface/60 p-6">
              <span className="font-display text-sm font-semibold text-acid">0{i + 1}</span>
              <h2 className="mt-2 font-display text-lg font-bold text-bone">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ash">{step.body}</p>
            </li>
          ))}
        </ol>
      </header>

      <div className="mt-16">
        <Contact />
      </div>

      <p className="shell pb-16 text-sm text-ash-dim">
        We use what you send only to respond to your inquiry. See our{" "}
        <Link to="/privacy" className="text-acid hover:underline">
          privacy policy
        </Link>{" "}
        for details.
      </p>
    </>
  );
}
