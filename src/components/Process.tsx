import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business objectives, technical landscape, and market position to define a winning strategy.",
    gradient: "from-neon-cyan to-blue-500",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Architecture & Design",
    description:
      "Our architects design scalable, secure systems with beautiful interfaces that users love.",
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build & Iterate",
    description:
      "Agile development with 2-week sprints, continuous integration, and real-time collaboration with your team.",
    gradient: "from-neon-emerald to-neon-cyan",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy & Scale",
    description:
      "Zero-downtime deployment, performance monitoring, and ongoing optimization to keep you ahead.",
    gradient: "from-neon-amber to-orange-500",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-neon-cyan mb-4 tracking-wider uppercase">
            Our Process
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            How We <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A battle-tested methodology that turns complex requirements into
            production-ready solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Card */}
                <div className="glass rounded-2xl p-8 text-center hover:bg-white/8 transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                  {/* Step number */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="text-xs font-mono text-slate-500 mb-2">{step.number}</div>
                  <h3 className="font-heading text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>

                {/* Connector dot (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient}`} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
