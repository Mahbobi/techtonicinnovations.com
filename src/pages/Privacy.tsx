import { ChevronRight } from "lucide-react";
import { JsonLd } from "../components/JsonLd";
import { PRIVACY_EFFECTIVE_DATE, PRIVACY_OPERATOR, privacySections } from "../data/privacy";
import { PRIVACY_ROUTE } from "../data/routes";
import { SITE } from "../data/site";
import { useDocumentHead } from "../lib/head";
import { breadcrumbJsonLd } from "../lib/jsonld";
import { Link } from "../lib/router";

export function PrivacyPage() {
  useDocumentHead(PRIVACY_ROUTE.meta);

  return (
    <article className="shell pt-32 pb-20 sm:pt-36">
      <JsonLd data={breadcrumbJsonLd("Privacy Policy", "/privacy")} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: PRIVACY_ROUTE.meta.title,
          description: PRIVACY_ROUTE.meta.description,
          url: PRIVACY_ROUTE.meta.canonical,
          publisher: { "@id": SITE.organizationId },
        }}
      />

      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-ash">
        <Link to="/" className="transition-colors hover:text-acid">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="text-bone-dim">Privacy Policy</span>
      </nav>

      <header className="max-w-3xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-display text-h1 font-extrabold uppercase leading-[0.95] text-bone">
          Privacy policy
        </h1>
        <p className="mt-6 text-sm text-ash">
          Effective {PRIVACY_EFFECTIVE_DATE} · {PRIVACY_OPERATOR}
        </p>
      </header>

      <div className="mt-12 max-w-3xl">
        {privacySections.map((section) => (
          <section key={section.h2} className="mb-10">
            <h2 className="font-display text-2xl font-bold text-bone">{section.h2}</h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ash">
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
