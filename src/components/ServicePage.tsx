import { useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight, ChevronRight, Plus } from "lucide-react";
import type { ServiceDef } from "../data/services";
import { getServiceBySlug, services } from "../data/services";
import { SITE } from "../data/site";
import { useDocumentHead } from "../lib/head";
import { Link } from "../lib/router";

const INLINE_LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/**
 * Renders service copy, turning `[label](/path)` into internal <Link>s.
 * Only site-relative paths ("/...") are linked; anything else stays literal
 * text, and React escapes everything, so copy can never inject markup.
 */
function renderInline(text: string): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE_LINK)) {
    const [full, label, to] = m;
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    out.push(
      <Link key={`${to}-${at}`} to={to} className="text-bone underline decoration-acid/60 underline-offset-4 transition-colors hover:text-acid">
        {label}
      </Link>
    );
    last = at + full.length;
  }
  if (out.length === 0) return text;
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function BreadcrumbJsonLd({ service }: { service: ServiceDef }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: service.navLabel,
        item: `${SITE.url}/${service.slug}`,
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function ServiceJsonLd({ service }: { service: ServiceDef }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.metaDescription,
    serviceType: service.navLabel,
    url: `${SITE.url}/${service.slug}`,
    areaServed: SITE.areaServed,
    provider: { "@id": SITE.organizationId },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function FaqJsonLd({ service }: { service: ServiceDef }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function Breadcrumb({ service }: { service: ServiceDef }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-ash">
      <Link to="/" className="transition-colors hover:text-acid">
        Home
      </Link>
      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="text-bone-dim">{service.navLabel}</span>
    </nav>
  );
}

function ServiceFaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-lg font-semibold text-bone sm:text-xl">{q}</span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${
            open ? "rotate-45 bg-acid text-paper-ink" : "text-bone-dim"
          }`}
        >
          <Plus className="h-5 w-5" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-ash">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServicePage({ service }: { service: ServiceDef }) {
  useDocumentHead({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: `${SITE.url}/${service.slug}`,
    ogImageAlt: service.ogImageAlt,
  });

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const siblings = services.filter((s) => s.slug !== service.slug);
  const related = (service.related ?? [])
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s) && s?.slug !== service.slug);

  return (
    <article ref={ref} className="pt-32 pb-16 sm:pt-36">
      <BreadcrumbJsonLd service={service} />
      <ServiceJsonLd service={service} />
      <FaqJsonLd service={service} />

      <header className="shell">
        <Breadcrumb service={service} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-4">{service.eyebrow}</p>
          <h1 className="font-display text-h1 font-extrabold uppercase leading-[0.95] text-bone">
            {service.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ash">{service.intro}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/#contact"
              data-cta="service-hero"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-acid px-7 py-4 font-display font-semibold text-paper-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start your project
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </header>

      <div className="shell mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          {service.sections.map((section) => (
            <section key={section.h2} className="mb-14">
              <h2 className="font-display text-h2 font-extrabold uppercase text-bone">{section.h2}</h2>
              <div className="mt-5 space-y-5">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="max-w-2xl text-base leading-relaxed text-ash sm:text-[17px]">
                    {renderInline(p)}
                  </p>
                ))}
              </div>
              {section.subsections && (
                <div className="mt-6 space-y-6">
                  {section.subsections.map((sub) => (
                    <div key={sub.h3}>
                      <h3 className="font-display text-lg font-bold text-bone">{sub.h3}</h3>
                      <p className="mt-2 max-w-2xl text-base leading-relaxed text-ash">{renderInline(sub.body)}</p>
                    </div>
                  ))}
                </div>
              )}
              {section.bullets && (
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {section.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 rounded-xl border border-line bg-surface/60 p-4 text-sm text-bone-dim"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" aria-hidden="true" />
                      <span>{renderInline(b)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {related.length > 0 && (
            <section aria-labelledby="related-services" className="mb-14">
              <h2 id="related-services" className="font-display text-h2 font-extrabold uppercase text-bone">
                Related services
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/${r.slug}`}
                      className="group flex h-full flex-col rounded-xl border border-line bg-surface/60 p-5 transition-colors duration-200 hover:border-acid/40"
                    >
                      <span className="flex items-center justify-between gap-2 font-display font-semibold text-bone group-hover:text-acid">
                        {r.navLabel}
                        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </span>
                      <span className="mt-2 text-sm leading-relaxed text-ash">{r.metaDescription}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Visible FAQ — must match the FAQPage JSON-LD above exactly */}
          <section id="faq" className="mt-4 border-t border-line pt-12">
            <h2 className="font-display text-h2 font-extrabold uppercase text-bone">
              Frequently asked <span className="acid-gradient">questions</span>
            </h2>
            <div className="mt-6">
              {service.faqs.map((f, i) => (
                <ServiceFaqItem key={f.q} q={f.q} a={f.a} index={i} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar — CTA + sibling service links */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 rounded-3xl border border-line bg-surface/70 p-7">
            <h2 className="font-display text-lg font-bold uppercase text-bone">Let's talk</h2>
            <p className="mt-3 text-sm leading-relaxed text-ash">
              Tell us about your project and we'll get back to you within 24 hours. Every
              engagement starts with a free discovery call.
            </p>
            <a
              href="/#contact"
              data-cta="service-sidebar"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-acid px-6 py-3.5 font-display text-sm font-semibold text-paper-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-center text-xs text-ash-dim">
              Or email{" "}
              <a href={SITE.mailHref} className="text-acid hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>

          <nav aria-label="All services" className="mt-8">
            <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-bone">
              All services
            </h2>
            <ul className="space-y-1">
              {siblings.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    className="flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm text-ash transition-colors duration-200 hover:bg-white/5 hover:text-bone"
                  >
                    {s.navLabel}
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </article>
  );
}
