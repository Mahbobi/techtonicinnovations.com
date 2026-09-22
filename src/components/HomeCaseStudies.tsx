import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES_PATH, caseStudies } from "../data/caseStudies";
import { Link } from "../lib/router";
import { CaseStudyCard } from "./CaseStudyCard";

/** Homepage showcase of case studies (static markup, prerendered for crawlers). */
export function HomeCaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="home-case-studies" className="section-pad relative border-t border-line">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Case studies / selected work</p>
            <h2 id="home-case-studies" className="font-display text-h1 font-extrabold uppercase text-bone">
              Built and <span className="acid-gradient">shipped.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ash">
              Client websites and the AI products we build and run ourselves — each described from
              its code and live site.
            </p>
          </div>
          <Link
            to={CASE_STUDIES_PATH}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line px-6 py-3 font-display text-sm font-semibold text-bone transition-colors hover:border-acid/50 hover:text-acid"
          >
            All case studies
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <li key={c.slug} className="min-w-0">
              <CaseStudyCard study={c} headingLevel="h3" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
