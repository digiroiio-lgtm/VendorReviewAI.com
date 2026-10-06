# VendorReviewAI.com

Informational category resource on AI-assisted vendor review, third-party risk and vendor due diligence. Built with Next.js (App Router) and TypeScript. It is deliberately **not** a product site: no pricing, logins, dashboards, customers, scores or integrations.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run verify       # typecheck + lint + production build + site checks
```

`npm run check:site` inspects the prerendered output (run after `npm run build`): one H1 per page, no skipped heading levels, unique titles/descriptions, canonicals, Open Graph/Twitter tags, JSON-LD validity and parity with visible content, the sitewide sale banner, `/domain` noindex, and every internal link and `#anchor`.

## Configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_DOMAIN_SALE_URL` | Destination for the sitewide banner and "Domain for Sale" CTAs. Unset → `/domain`. |
| `NEXT_PUBLIC_DOMAIN_INQUIRY_URL` | Destination for "Make an Inquiry" on `/domain` (form URL or `mailto:`). Falls back to the sale URL if that is external; otherwise no button is shown. |

Both accept an absolute `http(s)` URL, a `mailto:` link or (sale URL only, in practice) a site-relative path. They are inlined at build time, so redeploy after changing them. See `.env.example`.

## Structure

- `lib/pages.ts`: registry of indexable pages (path, title, description, H1, nav and breadcrumb labels). Sitemap, nav, metadata and JSON-LD all derive from it.
- `lib/site-config.ts`: origin (`https://vendorreviewai.com`), site name/description, sale URLs, navigation, disclaimer, content dates.
- `lib/metadata.ts`, `lib/jsonld.ts`, `lib/sources.ts`, `lib/use-cases.ts`: metadata builders, structured data, cited sources, use-case content.
- `components/`: reusable UI. Only `HeaderNav` is a client component.
- `app/`: routes, `robots.ts`, `sitemap.ts`, `not-found.tsx`, icons.
- `public/og-default.png`: default Open Graph image (1200×630).

## Content maintenance

Update `siteConfig.contentDates` when page content changes; the date is shown on pages and emitted in `Article` JSON-LD. Keep claims educational: no fabricated customers, ratings, certifications or regulatory conclusions.
