// Post-build verification of the prerendered site: metadata, headings, canonicals,
// JSON-LD, sitewide banner and internal links (including #anchors). No dependencies.
// Usage: npm run build && npm run check:site

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ORIGIN = "https://vendorreviewai.com";
const ROOT = ".next/server/app";
const NOINDEX_ROUTES = new Set(["/domain"]);
const failures = [];
const fail = (route, msg) => failures.push(`${route}: ${msg}`);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
const text = (html) => decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

const files = walk(ROOT).filter(
  (f) => f.endsWith(".html") && !/_not-found|_global-error|_next/.test(f),
);
const pages = new Map();
for (const file of files) {
  const rel = relative(ROOT, file).replace(/\.html$/, "");
  const route = rel === "index" ? "/" : `/${rel}`;
  pages.set(route, readFileSync(file, "utf8"));
}

const EXPECTED = [
  "/",
  "/what-is-vendor-review",
  "/ai-vendor-review",
  "/vendor-risk-assessment",
  "/vendor-review-checklist",
  "/use-cases",
  "/domain",
];
for (const r of EXPECTED) if (!pages.has(r)) fail(r, "route was not prerendered");

const meta = (html, attr, name) => {
  const re = new RegExp(`<meta[^>]+${attr}="${name}"[^>]*>`, "i");
  const tag = html.match(re)?.[0];
  return tag?.match(/content="([^"]*)"/i)?.[1];
};
const seen = { title: new Map(), description: new Map(), canonical: new Map() };
const noteDup = (kind, value, route) => {
  if (!value) return;
  if (seen[kind].has(value)) fail(route, `duplicate ${kind} also on ${seen[kind].get(value)}`);
  else seen[kind].set(value, route);
};

const externalLinks = new Set();
let internalLinkCount = 0;

for (const [route, html] of pages) {
  const indexable = !NOINDEX_ROUTES.has(route);

  // title / description / canonical
  const titles = [...html.matchAll(/<title>([^<]*)<\/title>/g)];
  if (titles.length !== 1) fail(route, `expected 1 <title>, found ${titles.length}`);
  const title = decode(titles[0]?.[1] ?? "");
  const description = decode(meta(html, "name", "description") ?? "");
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]*>/i)?.[0]?.match(/href="([^"]*)"/)?.[1];
  const expectedCanonical = route === "/" ? ORIGIN : `${ORIGIN}${route}`;
  if (!title) fail(route, "missing title");
  if (!description) fail(route, "missing meta description");
  if (canonical !== expectedCanonical) fail(route, `canonical ${canonical} !== ${expectedCanonical}`);
  noteDup("title", title, route);
  noteDup("description", description, route);
  noteDup("canonical", canonical, route);
  if (indexable) {
    if (title.length < 40 || title.length > 65) console.warn(`  note: ${route} title length ${title.length}`);
    if (description.length < 120 || description.length > 170) console.warn(`  note: ${route} description length ${description.length}`);
  }

  // Open Graph / Twitter
  for (const key of ["og:title", "og:description", "og:image", "og:url"]) {
    if (!meta(html, "property", key)) fail(route, `missing ${key}`);
  }
  for (const key of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"]) {
    if (!meta(html, "name", key)) fail(route, `missing ${key}`);
  }
  if (decode(meta(html, "property", "og:title") ?? "") !== title) fail(route, "og:title differs from title");

  // robots meta
  const robots = meta(html, "name", "robots") ?? "";
  if (NOINDEX_ROUTES.has(route)) {
    if (!/noindex/.test(robots) || !/follow/.test(robots) || /nofollow/.test(robots)) fail(route, `robots meta should be noindex, follow (got "${robots}")`);
  } else if (/noindex/.test(robots)) {
    fail(route, "indexable page has noindex");
  }

  // headings: exactly one h1, no skipped levels
  const headings = [...html.matchAll(/<h([1-6])[\s>][\s\S]*?<\/h\1>/g)].map((m) => ({ level: Number(m[1]), text: text(m[0]) }));
  const h1s = headings.filter((h) => h.level === 1);
  if (h1s.length !== 1) fail(route, `expected exactly 1 <h1>, found ${h1s.length}`);
  let prev = 0;
  for (const h of headings) {
    if (prev && h.level > prev + 1) fail(route, `heading level jumps h${prev} -> h${h.level} ("${h.text}")`);
    prev = h.level;
  }

  // sitewide banner + landmarks
  if (!html.includes("sale-banner")) fail(route, "domain sale banner missing");
  if (!html.includes("This domain is for sale")) fail(route, "mobile banner copy missing");
  if (!html.includes("is available for acquisition")) fail(route, "desktop banner copy missing");
  if (!/<main[\s>]/.test(html)) fail(route, "missing <main>");

  // JSON-LD
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (indexable && ld.length === 0) fail(route, "missing JSON-LD");
  if (!indexable && ld.length > 0) fail(route, "unexpected JSON-LD on noindex page");
  for (const [, raw] of ld) {
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      fail(route, `invalid JSON-LD: ${e.message}`);
      continue;
    }
    const nodes = data["@graph"] ?? [data];
    const types = nodes.map((n) => n["@type"]);
    const article = nodes.find((n) => n["@type"] === "Article");
    const crumbs = nodes.find((n) => n["@type"] === "BreadcrumbList");
    if (article) {
      if (article.headline !== h1s[0]?.text) fail(route, `Article.headline "${article.headline}" differs from visible H1 "${h1s[0]?.text}"`);
      for (const bad of ["author", "aggregateRating", "review"]) if (bad in article) fail(route, `Article contains ${bad}`);
      if (!html.toLowerCase().includes(`datetime="${article.dateModified}"`)) fail(route, "Article.dateModified is not visible on the page");
    }
    if (route !== "/" && !types.includes("BreadcrumbList")) fail(route, "missing BreadcrumbList");
    if (crumbs) {
      const visible = [...(html.match(/<nav[^>]+aria-label="Breadcrumb"[\s\S]*?<\/nav>/)?.[0].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g) ?? [])].map((m) => text(m[1]));
      const ldNames = crumbs.itemListElement.map((i) => i.name);
      if (JSON.stringify(visible) !== JSON.stringify(ldNames)) fail(route, `breadcrumb JSON-LD ${JSON.stringify(ldNames)} != visible ${JSON.stringify(visible)}`);
    }
    if (types.includes("WebPage") && route === "/" && !types.includes("WebSite")) fail(route, "home missing WebSite");
  }
}

// Links
const idsByRoute = new Map(
  [...pages].map(([route, html]) => [route, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))]),
);
const OK_NON_PAGES = new Set(["/sitemap.xml", "/robots.txt", "/favicon.ico", "/og-default.png"]);
for (const [route, html] of pages) {
  for (const m of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
    const href = decode(m[1]);
    if (/^(https?:)?\/\//.test(href)) {
      externalLinks.add(href);
      continue;
    }
    if (href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    internalLinkCount++;
    const [pathPart, hash] = href.split("#");
    const target = pathPart === "" ? route : pathPart.replace(/\/$/, "") || "/";
    if (!pages.has(target) && !OK_NON_PAGES.has(target)) {
      fail(route, `broken internal link ${href}`);
      continue;
    }
    if (hash && pages.has(target) && !idsByRoute.get(target).has(hash)) fail(route, `broken anchor ${href}`);
  }
}

// Every indexable page should be reachable from at least one other page.
for (const r of EXPECTED.filter((r) => r !== "/")) {
  const inbound = [...pages].filter(([from, html]) => from !== r && new RegExp(`href="${r}(#[^"]*)?"`).test(html)).length;
  if (inbound === 0) fail(r, "no inbound internal links");
  else console.log(`  inbound links to ${r}: ${[...pages].filter(([from, html]) => from !== r && new RegExp(`href="${r}(#[^"]*)?"`).test(html)).length} pages`);
}

console.log(`\nChecked ${pages.size} pages, ${internalLinkCount} internal links.`);
console.log(`External links (not fetched; verify manually):\n  ${[...externalLinks].sort().join("\n  ")}`);
if (failures.length) {
  console.error(`\n${failures.length} problem(s):\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log("\nAll site checks passed.");
