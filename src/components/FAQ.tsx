import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data/faqs";

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-lg font-semibold text-bone sm:text-xl">{q}</span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${
            open ? "rotate-45 bg-acid text-paper-ink" : "text-bone-dim"
          }`}
        >
          <Plus className="h-5 w-5" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-ash">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="section-pad relative border-t border-line">
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <p className="eyebrow mb-4">FAQ / answers</p>
          <h2 className="font-display text-h2 font-extrabold uppercase text-bone">
            Questions, <span className="acid-gradient">answered</span>
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-ash">
            Everything you need to know about working with TechTonic Innovations. Still
            curious?{" "}
            <a href="#contact" className="text-acid underline-offset-4 hover:underline">
              Talk to our team
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-8"
        >
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
