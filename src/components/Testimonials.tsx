import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, FinovateAI",
    quote:
      "TechTonic's AI engineering team delivered a fraud detection system that reduced false positives by 73%. Their technical depth is unmatched.",
    rating: 5,
    featured: true,
    avatar: "SC",
  },
  {
    name: "Marcus Rivera",
    role: "VP Engineering, ScalePoint",
    quote:
      "We hired three senior engineers through TechTonic. All three became key contributors within weeks. The vetting process is exceptional.",
    rating: 5,
    featured: false,
    avatar: "MR",
  },
  {
    name: "Emily Nakamura",
    role: "CEO, GreenTech Solutions",
    quote:
      "From concept to launch in 12 weeks. TechTonic built our entire SaaS platform with AI-powered analytics that our clients love.",
    rating: 5,
    featured: false,
    avatar: "EN",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-acid text-acid" : "text-ash-dim"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="section-pad relative">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[34vw] max-h-[420px] w-[34vw] max-w-[420px] rounded-full bg-acid/5 blur-[150px]" />

      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow mb-4">Voices / client outcomes</p>
          <h2 className="font-display text-h1 font-extrabold uppercase text-bone">
            Trusted by <span className="acid-gradient">innovators</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`lift flex flex-col justify-between rounded-3xl border p-8 ${
                t.featured
                  ? "border-acid/30 bg-acid/[0.04] md:row-span-1"
                  : "border-line bg-surface/70"
              }`}
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <Stars rating={t.rating} />
                  <span className="font-serif-accent text-5xl leading-none text-line-strong">&rdquo;</span>
                </div>
                <blockquote className="font-display text-lg font-medium leading-snug text-bone">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-acid to-flux font-display text-sm font-bold text-paper-ink">
                  {t.avatar}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-bone">{t.name}</span>
                  <span className="block text-xs text-ash">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
