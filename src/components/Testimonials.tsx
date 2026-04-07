import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, FinovateAI",
    quote:
      "TechTonic Innovations' AI engineering team delivered a fraud detection system that reduced false positives by 73%. Their technical depth is unmatched.",
    rating: 5,
    featured: false,
    avatar: "SC",
  },
  {
    name: "Marcus Rivera",
    role: "VP Engineering, ScalePoint",
    quote:
      "We hired three senior engineers through TechTonic Innovations. All three became key contributors within weeks. The vetting process is exceptional.",
    rating: 5,
    featured: true,
    avatar: "MR",
  },
  {
    name: "Emily Nakamura",
    role: "CEO, GreenTech Solutions",
    quote:
      "From concept to launch in 12 weeks. TechTonic Innovations built our entire SaaS platform with AI-powered analytics that our clients love.",
    rating: 5,
    featured: false,
    avatar: "EN",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-neon-amber fill-neon-amber" : "text-slate-600"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative py-32 px-6" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-neon-cyan mb-4 tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="gradient-text">Innovators</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Hear from the leaders who chose TechTonic Innovations to power their most
            ambitious projects.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`glass rounded-2xl p-8 flex flex-col justify-between ${
                t.featured
                  ? "border-neon-cyan/30 bg-neon-cyan/5 ring-1 ring-neon-cyan/10"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <StarRating rating={t.rating} />
                  <Quote className="w-8 h-8 text-white/10" />
                </div>
                <p className="text-slate-300 leading-relaxed mb-8 text-[15px]">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-sm font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
