import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "AI Engineering", href: "#services" },
    { label: "Tech Talent", href: "#services" },
    { label: "Web Platforms", href: "#services" },
    { label: "Software Products", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#work" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Careers", href: "#" },
  ],
};

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
            href="#contact"
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
          <a href="#hero" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-acid font-display text-lg font-extrabold text-paper-ink">T</span>
            <span className="font-display text-lg font-bold text-bone">TechTonic Innovations</span>
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

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-bone">
              {title}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-ash transition-colors duration-200 hover:text-acid">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="shell flex flex-col items-center justify-between gap-4 border-t border-line py-8 sm:flex-row">
        <p className="text-sm text-ash-dim">
          &copy; {new Date().getFullYear()} TechTonic Innovations. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-ash-dim transition-colors hover:text-bone-dim">Privacy Policy</a>
          <a href="#" className="text-sm text-ash-dim transition-colors hover:text-bone-dim">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
