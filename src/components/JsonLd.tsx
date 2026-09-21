/**
 * Renders a JSON-LD <script>. JSON.stringify output is safe to inline except
 * for "<", which could close the script element early — escape it.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
