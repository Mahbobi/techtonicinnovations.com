import { Zap } from "lucide-react";

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
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-xl font-bold text-white">
                Tech<span className="gradient-text">Tonic</span> Innovations
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              AI-powered software engineering and elite tech talent. We build
              intelligent solutions that transform businesses.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-emerald pulse-dot" />
              <span className="text-sm text-slate-400">Available for new projects</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white mb-4 text-sm">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-neon-cyan transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} TechTonic Innovations. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
