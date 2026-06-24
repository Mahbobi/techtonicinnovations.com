import { motion } from "framer-motion";

/** Masked technical grid overlay. */
export function GridLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
      }}
    />
  );
}

/** Rotating circular wordmark badge (desktop only). */
export function RotatingBadge() {
  return (
    <motion.div
      className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      aria-hidden="true"
    >
      <div className="spin-slow relative h-28 w-28">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <path id="badge-arc" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text fontSize="8.4" letterSpacing="3.4" fill="rgba(236,235,228,0.45)" fontFamily="'Space Grotesk', monospace">
            <textPath href="#badge-arc">ENTERPRISE · AI · AGENCY · 2026 ·</textPath>
          </text>
        </svg>
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid" />
      </div>
    </motion.div>
  );
}

/** Animated scroll indicator with a traveling line. */
export function ScrollIndicator() {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 1 }}
      aria-hidden="true"
    >
      <span className="eyebrow">Scroll</span>
      <div className="relative h-14 w-px overflow-hidden bg-white/15">
        <motion.div
          className="absolute left-0 top-0 w-full bg-acid"
          style={{ height: "40%" }}
          animate={{ y: ["-100%", "300%"] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
