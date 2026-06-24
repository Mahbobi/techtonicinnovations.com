import { motion } from "framer-motion";

/**
 * Per-character reveal for kinetic display typography. The visible letters are
 * aria-hidden and the whole word is exposed once to assistive tech via aria-label.
 */
export function KineticText({
  text,
  delay = 0,
  className = "",
  italic = false,
}: {
  text: string;
  delay?: number;
  className?: string;
  italic?: boolean;
}) {
  return (
    <span className={`inline-flex overflow-hidden ${italic ? "italic" : ""} ${className}`} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          initial={{ y: "115%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: delay + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
          style={{ minWidth: char === " " ? "0.28em" : undefined }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}
