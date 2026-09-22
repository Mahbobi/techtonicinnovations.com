import { ArrowUpRight } from "lucide-react";
import {
  CASE_STUDY_CATEGORY_LABELS,
  caseStudyImage,
  caseStudyPath,
  type CaseStudy,
} from "../data/caseStudies";
import { Link } from "../lib/router";

/** Card used on /case-studies and the homepage showcase. */
export function CaseStudyCard({ study, headingLevel = "h2" }: { study: CaseStudy; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Link
      to={caseStudyPath(study)}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 transition-colors duration-300 hover:border-acid/40"
    >
      <div className="aspect-[40/21] overflow-hidden border-b border-line bg-ink">
        <img
          src={caseStudyImage(study, "webp")}
          alt={study.imageAlt}
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-acid">
          {CASE_STUDY_CATEGORY_LABELS[study.category]} · {study.sector}
        </p>
        <Heading className="mt-2 flex items-center justify-between gap-3 font-display text-2xl font-bold text-bone group-hover:text-acid">
          {study.name}
          <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
        </Heading>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ash">{study.outcome}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {study.tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-bone-dim">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
