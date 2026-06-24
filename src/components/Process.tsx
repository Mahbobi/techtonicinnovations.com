import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = { icon: LucideIcon; number: string; title: string; description: string };

const steps: Step[] = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business objectives, technical landscape, and market position to define a winning strategy.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Architecture & Design",
    description:
      "Our architects design scalable, secure systems with beautiful interfaces that users love.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build & Iterate",
    description:
      "Agile development with 2-week sprints, continuous integration, and real-time collaboration with your team.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy & Scale",
    description:
      "Zero-downtime deployment, performance monitoring, and ongoing optimization to keep you ahead.",
  },
];

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="section-pad relative border-t border-line">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="eyebrow mb-4">Our process / how we deliver</p>
          <h2 className="font-display text-h1 font-extrabold uppercase text-bone">
            From brief to <span className="flux-gradient">production</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ash">
            A battle-tested methodology that turns complex requirements into
            production-ready solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative flex flex-col bg-surface p-8 transition-colors duration-300 hover:bg-elevated"
              >
                <span className="font-display text-sm font-bold text-acid">{step.number}</span>
                <div className="my-6 grid h-12 w-12 place-items-center rounded-xl border border-line bg-white/5 transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="h-6 w-6 text-bone" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-bold text-bone">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">{step.description}</p>
                <span className="mt-6 h-px w-full origin-left scale-x-0 bg-acid transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
