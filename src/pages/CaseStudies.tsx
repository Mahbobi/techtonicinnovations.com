import { ArrowUpRight, ChevronRight } from "lucide-react";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { JsonLd } from "../components/JsonLd";
import {
  CASE_STUDIES_PATH,
  CASE_STUDY_CATEGORY_LABELS,
  caseStudies,
  caseStudyPath,
  type CaseStudyCategory,
} from "../data/caseStudies";
import { CASE_STUDIES_ROUTE } from "../data/routes";
import { SITE } from "../data/site";
import { useDocumentHead } from "../lib/head";
import { breadcrumbJsonLd } from "../lib/jsonld";
import { Link } from "../lib/router";

const GROUPS: { category: CaseStudyCategory; blurb: string }[] = [
  {
    category: "product",
    blurb: "AI products we designed, built, and operate ourselves under Techtonic Innovations LLC.",
  },
  {
    category: "client",
    blurb: "Websites we designed and built for clients, live on their own domains.",
  },
];

export function CaseStudiesPage() {
  useDocumentHead(CASE_STUDIES_ROUTE.meta);

  return (
    <div className="pt-32 pb-20 sm:pt-36">
      <JsonLd data={breadcrumbJsonLd("Case Studies", CASE_STUDIES_PATH)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: CASE_STUDIES_ROUTE.meta.title,
          description: CASE_STUDIES_ROUTE.meta.description,
          url: CASE_STUDIES_ROUTE.meta.canonical,
          publisher: { "@id": SITE.organizationId },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: caseStudies.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.name,
              url: `${SITE.url}${caseStudyPath(c)}`,
            })),
          },
        }}
      />

      <header className="shell">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-ash">
          <Link to="/" className="transition-colors hover:text-acid">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-bone-dim">Case Studies</span>
        </nav>
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Our work</p>
          <h1 className="font-display text-h1 font-extrabold uppercase leading-[0.95] text-bone">
            Case studies
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ash">
            Real projects, described from their code and live sites: what each one needed, what we
            built, and the facts you can check for yourself. No invented metrics, no made-up quotes.
          </p>
        </div>
      </header>

      {GROUPS.map((group) => {
        const items = caseStudies.filter((c) => c.category === group.category);
        return (
          <section key={group.category} aria-labelledby={`cs-${group.category}`} className="shell mt-16">
            <h2 id={`cs-${group.category}`} className="font-display text-h2 font-extrabold uppercase text-bone">
              {CASE_STUDY_CATEGORY_LABELS[group.category]}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-ash">{group.blurb}</p>
            <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((c) => (
                <li key={c.slug} className="min-w-0">
                  <CaseStudyCard study={c} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <section className="shell mt-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-surface/70 p-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-bone">Have a project like these?</h2>
            <p className="mt-2 text-base text-ash">
              Tell us what you're building. Every engagement starts with a free discovery call.
            </p>
          </div>
          <a
            href="/#contact"
            data-cta="case-studies-index"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-acid px-7 py-4 font-display font-semibold text-paper-ink transition-transform duration-300 hover:-translate-y-0.5"
          >
            Book a free call
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-6 text-sm text-ash-dim">
          Screenshots are our own captures of each project's public homepage. Results vary by
          project; see our <Link to="/terms" className="text-acid hover:underline">terms</Link>.
        </p>
      </section>
    </div>
  );
}
