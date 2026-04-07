import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Shield, Lightbulb, BarChart3 } from "lucide-react";

const features = [
  { icon: Rocket, text: "5x Faster Deployment Cycles" },
  { icon: Shield, text: "Enterprise-Grade Security" },
  { icon: Lightbulb, text: "AI-First Architecture" },
  { icon: BarChart3, text: "Data-Driven Decision Making" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — 3D visual */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          {/* Morphing shape */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 morph-shape bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 blur-sm" />
            <div className="absolute inset-4 morph-shape bg-gradient-to-br from-neon-cyan/15 to-neon-purple/15" style={{ animationDelay: "-2s" }} />

            {/* Orbit ring */}
            <div className="absolute inset-[-20px] border border-dashed border-white/10 rounded-full orbit-ring">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-neon-cyan shadow-lg shadow-neon-cyan/50" />
            </div>
            <div className="absolute inset-[-50px] border border-dashed border-white/5 rounded-full orbit-ring-reverse">
              <div className="absolute -bottom-1.5 right-1/4 w-2.5 h-2.5 rounded-full bg-neon-purple shadow-lg shadow-neon-purple/50" />
            </div>

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-heading font-bold gradient-text">AI</div>
                <div className="text-sm text-slate-400 mt-1">Powered</div>
              </div>
            </div>
          </div>

          {/* Floating metric cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -top-4 -right-4 md:top-4 md:right-0 glass rounded-xl px-4 py-3 float-1"
          >
            <div className="text-lg font-bold text-neon-cyan">5x</div>
            <div className="text-xs text-slate-400">Faster Deploy</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-4 -left-4 md:bottom-8 md:left-0 glass rounded-xl px-4 py-3 float-2"
          >
            <div className="text-lg font-bold text-neon-emerald">24/7</div>
            <div className="text-xs text-slate-400">AI Monitoring</div>
          </motion.div>
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-sm font-medium text-neon-cyan mb-4 tracking-wider uppercase">
            Why TechTonic Innovations
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Engineering the Future,{" "}
            <span className="gradient-text-warm">Today</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            We combine deep technical expertise with strategic thinking to deliver
            software that doesn't just work — it transforms. Our AI-first approach
            means every solution is built to learn, adapt, and scale.
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 glass rounded-xl p-4 hover:bg-white/8 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan/15 to-neon-purple/15 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-neon-cyan" />
                </div>
                <span className="text-sm font-medium text-slate-200">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
