import { useCallback, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Props = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
  strength?: number;
  "aria-label"?: string;
};

/**
 * A button/link that magnetically follows the cursor with spring physics.
 * Disables the effect for touch users and prefers-reduced-motion.
 */
export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  strength = 0.4,
  "aria-label": ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 150, mass: 0.1 });
  const springY = useSpring(y, { damping: 15, stiffness: 150, mass: 0.1 });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced) return;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
      y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
    },
    [reduced, strength, x, y]
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-display font-semibold transition-colors duration-300 focus-visible:outline-none";
  const variants = {
    primary: "bg-acid text-paper-ink hover:bg-[#d8ff5c]",
    ghost: "border border-line-strong text-bone hover:bg-white/5",
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onMouseMove={onMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.97 }}
      style={{ x: springX, y: springY }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
