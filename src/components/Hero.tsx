import { motion } from "framer-motion";
import { ArrowRight, Brain, Users, Globe } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useCountUp } from "../hooks/useCountUp";
import { ParticleBackground } from "./ParticleBackground";

const floatingCards = [
  { icon: Brain, label: "AI Integration", className: "float-1 top-[20%] left-[5%] lg:left-[8%]" },
  { icon: Users, label: "Talent Placement", className: "float-2 top-[30%] right-[5%] lg:right-[8%]" },
  { icon: Globe, label: "Web Platforms", className: "float-3 bottom-[25%] left-[10%] lg:left-[15%]" },
];

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "AI Models Deployed" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, isVisible } = useScrollAnimation(0.5);
  const count = useCountUp(value, isVisible);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-heading font-bold text-white">
        {count}
        <span className="gradient-text">{suffix}</span>
      </div>
      <div className="text-sm text-slate-400 mt-1">{label}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-1 absolute -top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-neon-cyan/15 blur-[120px]" />
        <div className="glow-2 absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-neon-purple/15 blur-[100px]" />
        <div className="glow-3 absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-neon-emerald/10 blur-[80px]" />
      </div>

      {/* Particle canvas */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      {/* Floating cards (desktop) */}
      <div className="hidden lg:block">
        {floatingCards.map((card, i) => (
          <div
            key={i}
            className={`absolute z-10 ${card.className}`}
          >
            <div className="glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:bg-white/10 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                <card.icon className="w-5 h-5 text-neon-cyan" />
              </div>
              <span className="text-sm font-medium text-white">{card.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Hero content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-emerald pulse-dot" />
          <span className="text-sm text-slate-300">Now Accepting New Projects for 2026</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
        >
          We Build{" "}
          <span className="gradient-text">Intelligent</span>
          <br />
          Software Solutions
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI-powered engineering, elite tech talent, and custom platforms designed to
          accelerate your business into the future.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold shadow-lg shadow-neon-cyan/25 hover:shadow-neon-cyan/40 transition-shadow duration-300"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-white font-semibold hover:bg-white/10 transition-colors duration-300"
          >
            View Our Process
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 glass rounded-2xl p-8"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
