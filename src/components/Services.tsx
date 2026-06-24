import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Users, Globe, Cpu, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;     // text/icon accent
  span: string;       // bento column span
};

const services: Service[] = [
  {
    icon: Brain,
    number: "01",
    title: "AI Solution Engineering",
    description:
      "Custom machine learning models, NLP pipelines, LLM integrations, and computer vision systems architected around your business context.",
    tags: ["Machine Learning", "NLP", "Computer Vision", "LLMs", "RAG"],
    accent: "text-acid",
    span: "lg:col-span-3",
  },
  {
    icon: Users,
    number: "02",
    title: "Elite Tech Talent",
    description:
      "Pre-vetted senior engineers, data scientists, and DevOps specialists ready to embed into your team.",
    tags: ["Staff Augmentation", "Dedicated Teams", "Recruitment"],
    accent: "text-flux",
    span: "lg:col-span-2",
  },
  {
    icon: Globe,
    number: "03",
    title: "Web Platform Development",
    description:
      "High-performance web apps, SaaS platforms, and PWAs built with React, Next.js, and a modern cloud-native stack.",
    tags: ["React", "Next.js", "Cloud Native", "SaaS"],
    accent: "text-azure",
    span: "lg:col-span-2",
  },
  {
    icon: Cpu,
    number: "04",
    title: "Intelligent Software Products",
    description:
      "End-to-end product development from ideation to launch, integrating AI capabilities from day one to scale.",
    tags: ["Product Strategy", "MVP", "AI-Native", "Scale"],
    accent: "text-ember",
    span: "lg:col-span-3",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, on: false });
  const Icon = service.icon;

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setGlow({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, on: false }))}
      className={`group lift relative overflow-hidden rounded-3xl border border-line bg-surface/70 p-7 sm:p-9 ${service.span}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: glow.on
            ? `radial-gradient(520px circle at ${glow.x}px ${glow.y}px, rgba(204,255,51,0.07), transparent 60%)`
            : "none",
        }}
      />
      <span className="absolute right-6 top-5 font-display text-7xl font-extrabold leading-none outline-text sm:text-8xl">
        {service.number}
      </span>

      <div className="relative flex h-full flex-col">
        <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-line bg-white/5 transition-transform duration-300 group-hover:-translate-y-1">
          <Icon className={`h-7 w-7 ${service.accent}`} strokeWidth={1.5} />
        </div>

        <h3 className="font-display text-2xl font-bold text-bone sm:text-[1.7rem]">
          {service.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ash sm:text-[15px]">
          {service.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-7 inline-flex items-center gap-1.5 self-start font-display text-sm font-semibold text-bone-dim transition-colors hover:text-acid"
        >
          Explore service
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="section-pad relative">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="eyebrow mb-4">What we do / 004</p>
            <h2 className="font-display text-h1 font-extrabold uppercase text-bone">
              Services that <span className="acid-gradient">transform</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ash">
            From AI engineering to talent placement, we deliver end-to-end solutions
            that drive measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
          {services.map((s, i) => (
            <ServiceCard key={s.number} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
