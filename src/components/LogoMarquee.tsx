/**
 * Infinite tech-stack marquee — a trust strip of technologies we work with.
 * Pure CSS animation (perf-friendly), duplicated track for seamless looping.
 */
const stack = [
  "OpenAI", "Anthropic Claude", "AWS", "Azure", "React", "Next.js",
  "TypeScript", "Python", "PyTorch", "TensorFlow", "Kubernetes", "PostgreSQL",
  "Hugging Face", "Terraform", "FastAPI", "Redis",
];

export function LogoMarquee() {
  return (
    <section aria-label="Technologies we work with" className="relative border-y border-line bg-void/60 py-8">
      <p className="eyebrow mb-6 text-center">Trusted across the modern AI &amp; cloud stack</p>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track gap-12 pr-12">
          {[...stack, ...stack].map((name, i) => (
            <span
              key={i}
              className="shrink-0 font-display text-xl font-semibold text-ash-dim transition-colors duration-300 hover:text-bone sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
