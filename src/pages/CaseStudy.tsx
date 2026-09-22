import { ArrowUpRight, ChevronRight, ExternalLink } from "lucide-react";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { JsonLd } from "../components/JsonLd";
import {
  CASE_STUDIES_PATH,
  CASE_STUDIES_PUBLISHED,
  CASE_STUDY_CATEGORY_LABELS,
  caseStudies,
  caseStudyImage,
  caseStudyOgImage,
  caseStudyPath,
  type CaseStudy,
} from "../data/caseStudies";
import { getServiceBySlug } from "../data/services";
import { SITE } from "../data/site";
import { useDocumentHead } from "../lib/head";
import { renderInline } from "../lib/inline";
import { Link } from "../lib/router";

function caseStudyJsonLd(study: CaseStudy): Record<string, unknown>[] {
  const url = `${SITE.url}${caseStudyPath(study)}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: study.metaTitle,
      description: study.metaDescription,
      url,
      mainEntityOfPage: url,
      image: caseStudyOgImage(study),
      datePublished: CASE_STUDIES_PUBLISHED,
      dateModified: CASE_STUDIES_PUBLISHED,
      author: { "@id": SITE.organizationId },
      publisher: { "@id": SITE.organizationId },
      about: {
        "@type": study.category === "product" ? "SoftwareApplication" : "WebSite",
        name: study.name,
        url: study.liveUrl,
        creator: { "@id": SITE.organizationId },
      },
      keywords: study.tags.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE.url}${CASE_STUDIES_PATH}` },
        { "@type": "ListItem", position: 3, name: study.name, item: url },
      ],
    },
  ];
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  useDocumentHead({
    title: study.metaTitle,
    description: study.metaDescription,
    canonical: `${SITE.url}${caseStudyPath(study)}`,
    ogImageAlt: study.imageAlt,
    ogImage: caseStudyOgImage(study),
  });

  const services = study.services
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);
  const links = [{ label: study.liveLabel, url: study.liveUrl }, ...(study.extraLinks ?? [])];

  return (
    <article className="pt-32 pb-16 sm:pt-36">
      {caseStudyJsonLd(study).map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      <header className="shell">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-ash">
          <Link to="/" className="transition-colors hover:text-acid">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <Link to={CASE_STUDIES_PATH} className="transition-colors hover:text-acid">
            Case Studies
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-bone-dim">{study.name}</span>
        </nav>
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">
            {CASE_STUDY_CATEGORY_LABELS[study.category]} · {study.sector}
          </p>
          <h1 className="font-display text-h1 font-extrabold uppercase leading-[0.95] break-words text-bone">
            {study.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ash">{study.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-bone transition-colors hover:border-acid/50 hover:text-acid"
              >
                Visit {l.label}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <figure className="mt-12 overflow-hidden rounded-3xl border border-line bg-ink">
          <img
            src={caseStudyImage(study, "webp")}
            alt={study.imageAlt}
            width={1200}
            height={630}
            fetchPriority="high"
            className="h-auto w-full"
          />
          <figcaption className="border-t border-line px-5 py-3 text-xs text-ash-dim">
            Screenshot of the public homepage, captured by Techtonic Innovations on September 21, 2026.
          </figcaption>
        </figure>
      </header>

      <div className="shell mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="min-w-0 lg:col-span-8">
          {study.sections.map((section) => (
            <section key={section.h2} className="mb-14">
              <h2 className="font-display text-h2 font-extrabold uppercase text-bone">{section.h2}</h2>
              <div className="mt-5 space-y-5">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="max-w-2xl text-base leading-relaxed text-ash sm:text-[17px]">
                    {renderInline(p)}
                  </p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-6 space-y-3">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex max-w-2xl items-start gap-2.5 text-base leading-relaxed text-ash">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" aria-hidden="true" />
                      <span>{renderInline(b)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section aria-labelledby="results" className="mb-14 rounded-3xl border border-acid/30 bg-surface/60 p-7">
            <h2 id="results" className="font-display text-h2 font-extrabold uppercase text-bone">
              Results
            </h2>
            <ul className="mt-5 space-y-3">
              {study.results.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-base leading-relaxed text-bone-dim">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" aria-hidden="true" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-ash-dim">
              Facts verified against the project's repository and live site. Past results don't
              guarantee future results; every project is different.
            </p>
          </section>
        </div>

        <aside className="min-w-0 lg:col-span-4">
          <div className="rounded-3xl border border-line bg-surface/70 p-7">
            <h2 className="font-display text-lg font-bold uppercase text-bone">At a glance</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-ash-dim">Type</dt>
                <dd className="mt-1 text-bone-dim">{CASE_STUDY_CATEGORY_LABELS[study.category]}</dd>
              </div>
              {study.timeline && (
                <div>
                  <dt className="text-ash-dim">Timeline</dt>
                  <dd className="mt-1 text-bone-dim">{study.timeline}</dd>
                </div>
              )}
              <div>
                <dt className="text-ash-dim">Tech stack</dt>
                <dd className="mt-1">
                  <ul className="space-y-1.5 text-bone-dim">
                    {study.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          {services.length > 0 && (
            <nav aria-label="Related services" className="mt-6 rounded-3xl border border-line p-7">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-bone">
                Related services
              </h2>
              <ul className="mt-4 space-y-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/${s.slug}`}
                      className="flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm text-ash transition-colors hover:bg-white/5 hover:text-bone"
                    >
                      {s.navLabel}
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="mt-6 rounded-3xl border border-line bg-surface/70 p-7">
            <h2 className="font-display text-lg font-bold uppercase text-bone">Build something similar</h2>
            <p className="mt-3 text-sm leading-relaxed text-ash">
              Tell us about your project. Every engagement starts with a free discovery call.
            </p>
            <a
              href="/#contact"
              data-cta="case-study-sidebar"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-acid px-6 py-3.5 font-display text-sm font-semibold text-paper-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book a free call
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </aside>
      </div>

      <section aria-labelledby="more-case-studies" className="shell mt-8 border-t border-line pt-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="more-case-studies" className="font-display text-h2 font-extrabold uppercase text-bone">
            More case studies
          </h2>
          <Link to={CASE_STUDIES_PATH} className="inline-flex items-center gap-1 text-sm text-ash hover:text-acid">
            All case studies <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((c) => (
            <li key={c.slug} className="min-w-0">
              <CaseStudyCard study={c} headingLevel="h3" />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
