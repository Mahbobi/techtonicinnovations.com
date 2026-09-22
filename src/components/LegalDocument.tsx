import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "../lib/router";

export type LegalSection = { h2: string; paragraphs: string[]; bullets?: string[] };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Shared layout for /privacy and /terms: breadcrumb, header, table of contents, sections. */
export function LegalDocument({
  title,
  breadcrumb,
  effectiveDate,
  operator,
  intro,
  notice,
  sections,
  children,
}: {
  title: string;
  breadcrumb: string;
  effectiveDate: string;
  operator: string;
  intro?: string;
  /** Important notice rendered as a bold, boxed callout below the intro. */
  notice?: string;
  sections: LegalSection[];
  children?: ReactNode;
}) {
  return (
    <article className="shell pt-32 pb-20 sm:pt-36">
      {children}

      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-ash">
        <Link to="/" className="transition-colors hover:text-acid">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="text-bone-dim">{breadcrumb}</span>
      </nav>

      <header className="max-w-3xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-display text-h1 font-extrabold uppercase leading-[0.95] text-bone">{title}</h1>
        <p className="mt-6 text-sm text-ash">
          Effective {effectiveDate} · {operator}
        </p>
        {intro && <p className="mt-6 text-base leading-relaxed text-ash">{intro}</p>}
        {notice && (
          <aside
            role="note"
            aria-label="Important notice"
            className="mt-6 rounded-2xl border-2 border-acid bg-surface/80 p-5 sm:p-6"
          >
            <p className="text-base font-bold leading-relaxed text-bone">{notice}</p>
          </aside>
        )}
      </header>

      <nav aria-label="Contents" className="mt-10 max-w-3xl rounded-2xl border border-line bg-surface/60 p-6">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-bone">Contents</p>
        <ol className="mt-3 grid grid-cols-1 gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
          {sections.map((s, i) => (
            <li key={s.h2}>
              <a href={`#${slugify(s.h2)}`} className="text-ash transition-colors hover:text-acid">
                {i + 1}. {s.h2}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 max-w-3xl">
        {sections.map((section, i) => (
          <section key={section.h2} id={slugify(section.h2)} className="mb-10 scroll-mt-28">
            <h2 className="font-display text-2xl font-bold text-bone">
              {i + 1}. {section.h2}
            </h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-base leading-relaxed text-ash">
                  {p}
                </p>
              ))}
            </div>
            {section.bullets && (
              <ul className="mt-4 space-y-3">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-base leading-relaxed text-ash">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
