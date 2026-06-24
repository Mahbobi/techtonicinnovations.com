import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Shield, Lightbulb, BarChart3 } from "lucide-react";

const features = [
  { icon: Rocket, text: "5× Faster Deployment Cycles" },
  { icon: Shield, text: "Enterprise-Grade Security" },
  { icon: Lightbulb, text: "AI-First Architecture" },
  { icon: BarChart3, text: "Data-Driven Decision Making" },
];

const metrics = [
  { value: "5×", label: "Faster deploy", accent: "text-acid" },
  { value: "24/7", label: "AI monitoring", accent: "text-azure" },
  { value: "98%", label: "Satisfaction", accent: "text-flux" },
  { value: "6 wk", label: "Avg. to launch", accent: "text-ember" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vw] max-h-[640px] w-[60vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flux/10 blur-[150px]" />

      <div className="shell grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — editorial copy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <p className="eyebrow mb-5">Why TechTonic</p>
          <h2 className="font-display text-h1 font-extrabold uppercase leading-[0.95] text-bone">
            Engineering the future,{" "}
            <span className="font-serif-accent text-h1 font-normal normal-case italic text-acid">
              today
            </span>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ash">
            We combine deep technical expertise with strategic thinking to deliver
            software that doesn't just work — it transforms. Our AI-first approach
            means every solution is built to learn, adapt, and scale.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.text}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="lift flex items-center gap-3 rounded-2xl border border-line bg-surface/60 p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5">
                    <Icon className="h-5 w-5 text-acid" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm font-medium text-bone-dim">{f.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right — metric stack with rotating accent ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="spin-slow absolute inset-0 rounded-full border border-dashed border-line">
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-acid shadow-[0_0_20px] shadow-acid" />
            </div>
            <div className="spin-slow absolute inset-8 rounded-full border border-dashed border-line/60" style={{ animationDirection: "reverse" }}>
              <span className="absolute bottom-0 right-6 h-2.5 w-2.5 rounded-full bg-flux shadow-[0_0_16px] shadow-flux" />
            </div>
            <div className="absolute inset-0 grid grid-cols-2 place-items-center gap-2 p-10">
              {metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className={`font-display text-3xl font-extrabold sm:text-4xl ${m.accent}`}>
                    {m.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-ash">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
