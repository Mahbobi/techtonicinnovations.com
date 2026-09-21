import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "../lib/router";
import { SERVICE_GROUP_LABELS, SERVICE_GROUP_ORDER, getServicesByGroup } from "../data/services";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#work" },
  { label: "FAQ", href: "/#faq" },
];

/** Service groups shown as columns in the menu; "local" is shown as a footer link. */
const MENU_GROUPS = SERVICE_GROUP_ORDER.filter((g) => g !== "local").map((g) => ({
  key: g,
  label: SERVICE_GROUP_LABELS[g],
  items: getServicesByGroup(g),
}));
const LOCAL_SERVICES = getServicesByGroup("local");

function Wordmark() {
  return (
    <a href="/" className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-acid font-display text-lg font-extrabold text-paper-ink transition-transform duration-300 group-hover:rotate-6">
        T
      </span>
      <span className="font-display text-base font-bold tracking-tight text-bone sm:text-lg">
        Techtonic<span className="hidden text-ash sm:inline"> Innovations</span>
      </span>
    </a>
  );
}

/**
 * Desktop services menu. Opens on hover and keyboard focus via CSS (so it
 * works before hydration and the links are present in the prerendered HTML
 * for crawlers), and on click via state for touch devices.
 */
function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // After choosing a link, drop both the click state and keyboard focus —
  // otherwise :focus-within would keep the CSS-driven menu visible.
  const closeMenu = () => {
    setOpen(false);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  };

  // Close on outside click and Escape.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="group/menu relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm text-bone-dim transition-colors duration-200 hover:bg-white/5 hover:text-bone"
      >
        Services
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 group-hover/menu:rotate-180 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        id="services-menu"
        className={`absolute left-1/2 top-full z-50 w-[min(52rem,calc(100vw-3rem))] -translate-x-1/2 pt-3 transition-all duration-200 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0 group-focus-within/menu:visible group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 group-hover/menu:opacity-100"
        }`}
      >
        <div className="rounded-2xl border border-line bg-ink/97 p-6 shadow-2xl shadow-black/60 backdrop-blur-xl">
          <div className="grid grid-cols-3 gap-6">
            {MENU_GROUPS.map((group) => (
              <div key={group.key}>
                <p className="mb-3 font-display text-xs font-semibold uppercase tracking-wider text-ash-dim">
                  {group.label}
                </p>
                <ul className="space-y-0.5">
                  {group.items.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/${s.slug}`}
                        onClick={closeMenu}
                        className="block rounded-lg px-2.5 py-2 text-sm text-bone-dim transition-colors duration-150 hover:bg-white/5 hover:text-acid"
                      >
                        {s.navLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-sm">
            {LOCAL_SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                onClick={closeMenu}
                className="text-ash transition-colors hover:text-acid"
              >
                Based in Reston, VA — {s.navLabel}
              </Link>
            ))}
            <a href="/#services" className="inline-flex items-center gap-1 text-ash transition-colors hover:text-acid">
              Services overview <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

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

            <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
              <ServicesMenu />
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
                href="/#contact"
                data-cta="nav"
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
            <div className="shell flex h-[4.75rem] shrink-0 items-center justify-between">
              <Wordmark />
              <button
                onClick={closeMobile}
                className="grid h-10 w-10 place-items-center rounded-lg text-bone-dim hover:text-bone"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-start gap-1 overflow-y-auto px-8 py-8">
              <motion.button
                type="button"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services"
                onClick={() => setMobileServicesOpen((o) => !o)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 font-display text-4xl font-bold text-bone transition-colors hover:text-acid"
              >
                Services
                <ChevronDown
                  className={`h-7 w-7 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </motion.button>
              {mobileServicesOpen && (
                <div id="mobile-services" className="mb-3 mt-2 grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
                  {[...MENU_GROUPS, { key: "local", label: SERVICE_GROUP_LABELS.local, items: LOCAL_SERVICES }].map(
                    (group) => (
                      <div key={group.key}>
                        <p className="mb-1.5 font-display text-xs font-semibold uppercase tracking-wider text-ash-dim">
                          {group.label}
                        </p>
                        <ul>
                          {group.items.map((s) => (
                            <li key={s.slug}>
                              <Link
                                to={`/${s.slug}`}
                                onClick={closeMobile}
                                className="block py-1.5 text-base text-bone-dim transition-colors hover:text-acid"
                              >
                                {s.navLabel}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              )}
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 1) * 0.07 }}
                  className="font-display text-4xl font-bold text-bone transition-colors hover:text-acid"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/#contact"
                data-cta="nav-mobile"
                onClick={closeMobile}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.07 }}
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
