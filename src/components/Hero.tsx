import { lazy, Suspense, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useCountUp } from "../hooks/useCountUp";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { MagneticButton } from "./MagneticButton";
import { KineticText } from "./KineticText";
import { GridLines, RotatingBadge, ScrollIndicator } from "./HeroDecor";

const HeroScene = lazy(() =>
  import("../three/HeroScene").then((m) => ({ default: m.HeroScene }))
);

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "AI Models Deployed" },
];

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, isVisible } = useScrollAnimation(0.4);
  const count = useCountUp(value, isVisible);
  return (
    <div ref={ref}>
      <div className="font-display text-3xl font-bold text-bone sm:text-4xl">
        {count}
        <span className="text-acid">{suffix}</span>
      </div>
      <div className="mt-1 text-xs text-ash sm:text-sm">{label}</div>
    </div>
  );
}

/** Static, GPU-free fallback for reduced-motion users and Suspense loading. */
function HeroPoster() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="drift-1 absolute top-[8%] right-[6%] h-[42vw] max-h-[560px] w-[42vw] max-w-[560px] rounded-full bg-flux/25 blur-[120px]" />
      <div className="drift-2 absolute bottom-[6%] left-[2%] h-[34vw] max-h-[460px] w-[34vw] max-w-[460px] rounded-full bg-acid/15 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 h-[30vw] max-h-[380px] w-[30vw] max-w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azure/10 blur-[100px]" />
    </div>
  );
}

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.96]);
  const parallax = reduced ? {} : { y, opacity, scale };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* 3D scene / poster (full-bleed background) */}
      <div className="absolute inset-0 z-0">
        {reduced ? (
          <HeroPoster />
        ) : (
          <Suspense fallback={<HeroPoster />}>
            <HeroScene />
          </Suspense>
        )}
      </div>

      <GridLines />

      {/* readability scrim */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-ink/40 via-ink/10 to-ink" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-ink to-transparent" />

      <RotatingBadge />

      {/* Content — wrapper passes pointer events through so the blob still reacts */}
      <motion.div style={parallax} className="pointer-events-none relative z-10 shell w-full">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="eyebrow mb-7 flex items-center gap-3"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-acid pulse-dot" />
          Now accepting projects for 2026
        </motion.p>

        <h1 className="font-display text-mega font-extrabold uppercase leading-[0.86] text-bone">
          <span className="block overflow-hidden">
            <KineticText text="We build" delay={0.4} />
          </span>
          <span className="block overflow-hidden">
            <KineticText text="intelligent" delay={0.6} className="text-acid" />
          </span>
          <span className="block overflow-hidden">
            <KineticText
              text="software"
              delay={0.85}
              italic
              className="font-serif-accent font-normal normal-case text-bone-dim"
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-ash sm:text-lg"
        >
          AI-powered engineering, elite tech talent, and custom platforms — built to
          accelerate enterprise teams into the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.25 }}
          className="pointer-events-auto mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <MagneticButton href="#contact" variant="primary" aria-label="Start your project">
            Start your project
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
          <MagneticButton href="#work" variant="ghost" aria-label="View our process">
            View our process
          </MagneticButton>
        </motion.div>

        {/* Stats band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.45 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
