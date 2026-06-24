import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, Loader2, AlertCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "704ca11a-48a8-4d4b-a584-fd4c8ea6d469";

const contactInfo = [
  { icon: Mail, label: "info@techtonicinnovations.com", href: "mailto:info@techtonicinnovations.com" },
  { icon: Phone, label: "+1-571-268-6448", href: "tel:+15712686448" },
  { icon: MapPin, label: "Washington, DC", href: null },
];

const services = [
  "AI Solution Engineering",
  "Elite Tech Talent",
  "Web Platform Development",
  "Intelligent Software Products",
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${formData.name} — ${formData.service}`,
          from_name: "TechTonic Innovations Website",
          ...formData,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", service: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClasses =
    "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3.5 text-sm text-bone placeholder-ash-dim transition-all duration-300 focus:border-acid/60 focus:bg-white/[0.05] focus:outline-none";

  return (
    <section id="contact" ref={ref} className="section-pad relative overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[50vw] max-h-[560px] w-[50vw] max-w-[560px] -translate-x-1/2 rounded-full bg-flux/10 blur-[150px]" />

      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — statement + info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <p className="eyebrow mb-4">Get in touch</p>
          <h2 className="font-display text-display font-extrabold uppercase leading-[0.9] text-bone">
            Let's build something{" "}
            <span className="acid-gradient">amazing</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ash">
            Ready to transform your business with intelligent software? Tell us about
            your project and we'll get back to you within 24 hours.
          </p>

          <ul className="mt-10 space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-white/5">
                    <Icon className="h-5 w-5 text-acid" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm text-bone-dim">{info.label}</span>
                </>
              );
              return (
                <li key={info.label}>
                  {info.href ? (
                    <a href={info.href} className="flex items-center gap-3 transition-colors hover:text-acid">
                      {inner}
                    </a>
                  ) : (
                    <span className="flex items-center gap-3">{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-line bg-surface/70 p-6 sm:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-ash">
                  Your name
                </label>
                <input id="name" type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Jane Cooper" required className={fieldClasses} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-ash">
                  Email address
                </label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="jane@company.com" required className={fieldClasses} />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="service" className="mb-2 block text-xs font-medium uppercase tracking-wider text-ash">
                Service of interest
              </label>
              <select id="service" name="service" value={formData.service} onChange={handleChange}
                required className={`${fieldClasses} appearance-none`}>
                <option value="" className="bg-card">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-card">{s}</option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-ash">
                About your project
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                placeholder="Tell us what you're building..." rows={5} required
                className={`${fieldClasses} resize-none`} />
            </div>

            {error && (
              <div className="mt-4 flex items-center gap-2 text-sm text-ember">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}

            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              disabled={submitted || loading}
              className={`mt-7 flex w-full items-center justify-center gap-2 rounded-full py-4 font-display font-semibold transition-all duration-300 ${
                submitted
                  ? "bg-acid-deep text-paper-ink"
                  : "bg-acid text-paper-ink hover:-translate-y-0.5 hover:bg-[#d8ff5c] disabled:opacity-70"
              }`}
            >
              {submitted ? (
                <><CheckCircle2 className="h-5 w-5" /> Message sent</>
              ) : loading ? (
                <><Loader2 className="h-5 w-5 animate-spin" /> Sending…</>
              ) : (
                <>Send message <ArrowUpRight className="h-5 w-5" /></>
              )}
            </motion.button>
            <p className="mt-4 text-center text-xs text-ash-dim">
              We typically respond within 2–4 business hours.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
