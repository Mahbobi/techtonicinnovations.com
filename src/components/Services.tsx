import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Users, Globe, Cpu } from "lucide-react";

const services = [
  {
    icon: Brain,
    number: "01",
    title: "AI Solution Engineering",
    description:
      "Custom machine learning models, NLP pipelines, and computer vision systems tailored to your business challenges.",
    tags: ["Machine Learning", "NLP", "Computer Vision", "LLMs"],
    gradient: "from-neon-cyan to-blue-500",
  },
  {
    icon: Users,
    number: "02",
    title: "Elite Tech Talent",
    description:
      "Access pre-vetted senior engineers, data scientists, and DevOps specialists ready to embed into your team.",
    tags: ["Staff Augmentation", "Dedicated Teams", "Recruitment"],
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    icon: Globe,
    number: "03",
    title: "Web Platform Development",
    description:
      "Full-stack web applications, SaaS platforms, and progressive web apps built with modern frameworks.",
    tags: ["React", "Node.js", "Cloud Native", "SaaS"],
    gradient: "from-neon-emerald to-neon-cyan",
  },
  {
    icon: Cpu,
    number: "04",
    title: "Intelligent Software Products",
    description:
      "End-to-end product development from ideation to launch, integrating AI capabilities from day one.",
    tags: ["Product Strategy", "MVP", "AI-Native", "Scale"],
    gradient: "from-neon-amber to-orange-500",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group glass rounded-2xl p-8 overflow-hidden cursor-default"
      style={{ perspective: "1000px" }}
    >
      {/* Mouse-tracking glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isHovered
            ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.08), transparent 60%)`
            : "none",
        }}
      />

      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Number */}
      <div className="text-6xl font-heading font-bold text-white/5 absolute top-4 right-6 group-hover:text-white/10 transition-colors duration-500">
        {service.number}
      </div>

      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className="w-7 h-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 leading-relaxed mb-6 text-sm">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-neon-cyan mb-4 tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Services That <span className="gradient-text">Transform</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From AI engineering to talent placement, we deliver end-to-end solutions
            that drive measurable business outcomes.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
