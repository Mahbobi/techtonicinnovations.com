import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#work" },
  { label: "Voices", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function Wordmark() {
  return (
    <a href="#hero" className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-acid font-display text-lg font-extrabold text-paper-ink transition-transform duration-300 group-hover:rotate-6">
        T
      </span>
      <span className="font-display text-base font-bold tracking-tight text-bone sm:text-lg">
        TechTonic<span className="hidden text-ash sm:inline"> Innovations</span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="shell">
          <div
            className={`mt-3 flex h-16 items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5 ${
              scrolled ? "glass-strong shadow-2xl shadow-black/40" : "border border-transparent"
            }`}
          >
            <Wordmark />

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3.5 py-2 text-sm text-bone-dim transition-colors duration-200 hover:bg-white/5 hover:text-bone"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden items-center gap-1.5 rounded-full bg-acid px-5 py-2.5 font-display text-sm font-semibold text-paper-ink transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
              >
                Let's talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="grid h-10 w-10 place-items-center rounded-lg text-bone-dim hover:bg-white/5 hover:text-bone lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-ink/97 backdrop-blur-xl lg:hidden"
          >
            <div className="shell flex h-[4.75rem] items-center justify-between">
              <Wordmark />
              <button
                onClick={() => setMobileOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-lg text-bone-dim hover:text-bone"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-start justify-center gap-1 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="font-display text-4xl font-bold text-bone transition-colors hover:text-acid"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-acid px-7 py-3.5 font-display text-lg font-semibold text-paper-ink"
              >
                Let's talk
                <ArrowUpRight className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
