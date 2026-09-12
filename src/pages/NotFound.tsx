import { ArrowUpRight } from "lucide-react";
import { SITE } from "../data/site";
import { services } from "../data/services";
import { useDocumentHead } from "../lib/head";
import { Link } from "../lib/router";

export function NotFoundPage() {
  useDocumentHead({
    title: `Page Not Found | ${SITE.name}`,
    description: "The page you're looking for doesn't exist. Explore our AI development, automation, and software engineering services instead.",
    canonical: `${SITE.url}/404`,
    ogImageAlt: SITE.homeOgImageAlt,
  });

  return (
    <section className="shell flex min-h-[70vh] flex-col items-center justify-center pt-32 pb-16 text-center sm:pt-36">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-display text-h1 font-extrabold uppercase text-bone">
        Page not <span className="acid-gradient">found</span>
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-ash">
        The page you're looking for doesn't exist or has moved. Head back home or explore
        one of our services below.
      </p>
      <Link
        to="/"
        className="group mt-9 inline-flex items-center gap-2 rounded-full bg-acid px-7 py-4 font-display font-semibold text-paper-ink transition-transform duration-300 hover:-translate-y-0.5"
      >
        Back to homepage
        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>

      <nav aria-label="Services" className="mt-14 grid w-full max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={`/${s.slug}`}
            className="rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm text-bone-dim transition-colors hover:border-acid/40 hover:text-bone"
          >
            {s.navLabel}
          </Link>
        ))}
      </nav>
    </section>
  );
}
