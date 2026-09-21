import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import { Link } from "../lib/router";

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Our Process", href: "/#work" },
  { label: "FAQ", href: "/#faq" },
];

// Internal routes with their own prerendered pages (client-side navigation).
const companyRoutes = [
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      {/* CTA band */}
      <div className="shell border-b border-line py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="font-display text-h1 font-extrabold uppercase leading-[0.95] text-bone">
            Let's engineer<br />
            <span className="acid-gradient">what's next.</span>
          </h2>
          <a
            href="/#contact"
            data-cta="footer-band"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-acid px-8 py-4 font-display text-lg font-semibold text-paper-ink transition-transform duration-300 hover:-translate-y-1"
          >
            Start a project
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Links */}
      <div className="shell grid grid-cols-2 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
          <a href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-acid font-display text-lg font-extrabold text-paper-ink">T</span>
            <span className="font-display text-lg font-bold text-bone">Techtonic Innovations</span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ash">
            AI-powered software engineering and elite tech talent. We build
            intelligent solutions that transform businesses.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-acid pulse-dot" />
            <span className="text-sm text-ash">Available for new projects</span>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-2">
          <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-bone">
            Services
          </h3>
          <ul className="gap-x-8 sm:columns-2 [&>li]:mb-3 [&>li]:break-inside-avoid">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/${s.slug}`}
                  className="text-sm text-ash transition-colors duration-200 hover:text-acid"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-bone">
            Company
          </h3>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-ash transition-colors duration-200 hover:text-acid">
                  {link.label}
                </a>
              </li>
            ))}
            {companyRoutes.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-ash transition-colors duration-200 hover:text-acid">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="shell flex flex-col items-center justify-between gap-4 border-t border-line py-8 sm:flex-row">
        <p className="text-sm text-ash-dim">
          &copy; {new Date().getFullYear()} Techtonic Innovations. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-sm text-ash-dim transition-colors hover:text-bone-dim">Privacy</Link>
          <Link to="/contact" className="text-sm text-ash-dim transition-colors hover:text-bone-dim">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
