import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle2, Mail, Phone, MapPin, Loader2, AlertCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "704ca11a-48a8-4d4b-a584-fd4c8ea6d469";

const contactInfo = [
  { icon: Mail, label: "info@techtonicinnovations.com" },
  { icon: Phone, label: "+1-571-268-6448" },
  { icon: MapPin, label: "Washington DC" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          subject: `New inquiry from ${formData.name} \u2014 ${formData.service}`,
          from_name: "TechTonic Innovations Website",
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
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

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/25 transition-all duration-300 text-sm";

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon-purple/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-neon-cyan mb-4 tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Ready to transform your business with intelligent software? Tell us
            about your project and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Contact info */}
              <div className="lg:col-span-2 space-y-6">
                <h3 className="font-heading text-xl font-bold text-white mb-6">
                  Contact Info
                </h3>
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <span className="text-sm text-slate-300">{info.label}</span>
                  </div>
                ))}

                <div className="pt-6 border-t border-white/5">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    We typically respond within 2-4 business hours. For urgent
                    inquiries, give us a call.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className={inputClasses}
                  />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClasses + " appearance-none"}
                  required
                >
                  <option value="" className="bg-card">Select a Service</option>
                  <option value="AI Solution Engineering" className="bg-card">AI Solution Engineering</option>
                  <option value="Elite Tech Talent" className="bg-card">Elite Tech Talent</option>
                  <option value="Web Platform Development" className="bg-card">Web Platform Development</option>
                  <option value="Intelligent Software Products" className="bg-card">Intelligent Software Products</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className={inputClasses + " resize-none"}
                />
                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted || loading}
                  className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                    submitted
                      ? "bg-neon-emerald shadow-lg shadow-neon-emerald/25"
                      : "bg-gradient-to-r from-neon-cyan to-neon-purple shadow-lg shadow-neon-cyan/25 hover:shadow-neon-cyan/40"
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
