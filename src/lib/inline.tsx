import type { ReactNode } from "react";
import { Link } from "./router";

const INLINE_LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/**
 * Renders content copy, turning `[label](/path)` into internal <Link>s.
 * Only site-relative paths ("/...") are linked; anything else stays literal
 * text, and React escapes everything, so copy can never inject markup.
 */
export function renderInline(text: string): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE_LINK)) {
    const [full, label, to] = m;
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    out.push(
      <Link key={`${to}-${at}`} to={to} className="text-bone underline decoration-acid/60 underline-offset-4 transition-colors hover:text-acid">
        {label}
      </Link>
    );
    last = at + full.length;
  }
  if (out.length === 0) return text;
  if (last < text.length) out.push(text.slice(last));
  return out;
}
