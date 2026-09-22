// Build-time static-site generation for the Techtonic Innovations site.
//
// Runs after `vite build` (client bundle in dist/) and
// `vite build --ssr src/entry-server.tsx --outDir dist-ssr` (server bundle).
// For every route it renders the app's body markup with react-dom/server's
// renderToString, injects per-route <head> metadata into a copy of the
// client-built index.html, and writes a static dist/<route>/index.html —
// so every URL has real, crawlable HTML in View Source, no JS required.
//
// Zero new dependencies: everything here is Node built-ins + our own
// compiled SSR bundle.
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const distDir = resolve(root, "dist");
const ssrDir = resolve(root, "dist-ssr");
const serverEntry = join(ssrDir, "entry-server.js");

// A route with fewer real words than this is treated as a build failure —
// it means prerendering silently produced an (almost) empty shell instead
// of real content, which is exactly the bug this whole pipeline exists to
// prevent.
const MIN_WORDS = 150;

function fail(message) {
  console.error(`\n[prerender] ${message}\n`);
  process.exit(1);
}

if (!existsSync(distDir)) {
  fail('dist/ not found. Run "vite build" before the prerender script.');
}
if (!existsSync(serverEntry)) {
  fail(
    'dist-ssr/entry-server.js not found. Run "vite build --ssr src/entry-server.tsx --outDir dist-ssr" before the prerender script.'
  );
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function countWords(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// Pages without their own social image (HeadMeta.ogImage) keep the site-wide one.
const DEFAULT_OG_IMAGE = "https://www.techtonicinnovations.com/og-image.png";

const HEAD_REPLACEMENTS = [
  [/<title>[\s\S]*?<\/title>/, (m) => `<title>${escapeHtml(m.title)}</title>`],
  [
    /<meta name="description" content="[^"]*"\s*\/?>/,
    (m) => `<meta name="description" content="${escapeHtml(m.description)}" />`,
  ],
  [
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    (m) => `<meta property="og:title" content="${escapeHtml(m.title)}" />`,
  ],
  [
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    (m) => `<meta property="og:description" content="${escapeHtml(m.description)}" />`,
  ],
  [
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    (m) => `<meta property="og:url" content="${m.canonical}" />`,
  ],
  [
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    (m) => `<meta property="og:image" content="${escapeHtml(m.ogImage ?? DEFAULT_OG_IMAGE)}" />`,
  ],
  [
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    (m) => `<meta name="twitter:image" content="${escapeHtml(m.ogImage ?? DEFAULT_OG_IMAGE)}" />`,
  ],
  [
    /<meta property="og:image:alt" content="[^"]*"\s*\/?>/,
    (m) => `<meta property="og:image:alt" content="${escapeHtml(m.ogImageAlt)}" />`,
  ],
  [
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    (m) => `<meta name="twitter:title" content="${escapeHtml(m.title)}" />`,
  ],
  [
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    (m) => `<meta name="twitter:description" content="${escapeHtml(m.description)}" />`,
  ],
  [
    /<meta name="twitter:image:alt" content="[^"]*"\s*\/?>/,
    (m) => `<meta name="twitter:image:alt" content="${escapeHtml(m.ogImageAlt)}" />`,
  ],
  [
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    (m) => `<link rel="canonical" href="${m.canonical}" />`,
  ],
];

function injectHead(template, meta, { noindex = false } = {}) {
  let html = template;
  for (const [regex, build] of HEAD_REPLACEMENTS) {
    if (!regex.test(html)) {
      fail(`index.html is missing an expected <head> tag matching ${regex}. Update the template or this script.`);
    }
    html = html.replace(regex, build(meta));
  }
  if (noindex) {
    html = html.replace("</head>", '  <meta name="robots" content="noindex" />\n  </head>');
  }
  return html;
}

function writeRoute(template, path, meta, bodyHtml, { noindex = false } = {}) {
  const words = countWords(bodyHtml);
  if (!noindex && words < MIN_WORDS) {
    fail(
      `route "${path}" rendered only ${words} words of visible text (minimum ${MIN_WORDS}). Refusing to ship a thin page — check for a component that isn't rendering server-side.`
    );
  }
  const page = injectHead(template, meta, { noindex }).replace(
    '<div id="root"></div>',
    `<div id="root">${bodyHtml}</div>`
  );
  const outPath = path === "/" ? join(distDir, "index.html") : join(distDir, path.slice(1), "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, page, "utf-8");
  return words;
}

async function main() {
  const template = readFileSync(join(distDir, "index.html"), "utf-8");
  const { render, ALL_ROUTES } = await import(pathToFileURL(serverEntry).href);

  console.log(`[prerender] rendering ${ALL_ROUTES.length} routes...`);
  const results = [];
  for (const route of ALL_ROUTES) {
    const bodyHtml = render(route.path);
    const words = writeRoute(template, route.path, route.meta, bodyHtml);
    results.push({ path: route.path, words });
  }

  // Static 404 — Vercel serves this file (with a real 404 status, see
  // vercel.json) for any path that doesn't match a prerendered route.
  const notFoundHtml = render("/this-page-does-not-exist");
  writeRoute(
    template,
    "/404",
    {
      title: "Page Not Found | Techtonic Innovations",
      description:
        "The page you're looking for doesn't exist. Explore our AI development, automation, and software engineering services instead.",
      canonical: "https://www.techtonicinnovations.com/404",
      ogImageAlt: "Techtonic Innovations",
    },
    notFoundHtml,
    { noindex: true }
  );
  // writeRoute() above wrote dist/404/index.html; Vercel's static 404
  // handling expects dist/404.html at the output root.
  // A 404 must not declare a canonical URL: it's served at whatever path was
  // requested, and "/404" isn't a real page.
  const generated404 = readFileSync(join(distDir, "404", "index.html"), "utf-8")
    .replace(/[ \t]*<link rel="canonical" href="[^"]*"\s*\/?>\r?\n?/, "");
  writeFileSync(join(distDir, "404.html"), generated404, "utf-8");
  rmSync(join(distDir, "404"), { recursive: true, force: true });

  // sitemap.xml — generated from the same route list used for prerendering,
  // so it can never drift out of sync with what actually got built. Full
  // page URLs only, no #fragments.
  const lastmod = "2026-09-21";
  const urlEntries = ALL_ROUTES.map(
    (r) =>
      `  <url>\n` +
      `    <loc>${r.meta.canonical}</loc>\n` +
      `    <lastmod>${lastmod}</lastmod>\n` +
      `    <changefreq>weekly</changefreq>\n` +
      `    <priority>${r.priority.toFixed(1)}</priority>\n` +
      `  </url>`
  ).join("\n");
  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
  writeFileSync(join(distDir, "sitemap.xml"), sitemap, "utf-8");

  // The SSR bundle is a build tool, not part of the deployed static site.
  rmSync(ssrDir, { recursive: true, force: true });

  console.log(`[prerender] wrote ${results.length} routes + 404.html + sitemap.xml:`);
  for (const r of results) {
    console.log(`  ${r.path.padEnd(38)} ${r.words} words`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
