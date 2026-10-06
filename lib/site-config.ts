import { pages } from "@/lib/pages";

/** Returns a safe URL (site-relative path, http(s) or mailto) or null. */
function sanitizeUrl(value: string | undefined): string | null {
  const v = value?.trim();
  if (!v) return null;
  if (v.startsWith("/") && !v.startsWith("//")) return v;
  try {
    const url = new URL(v);
    if (["https:", "http:", "mailto:"].includes(url.protocol)) return url.toString();
  } catch {
    // fall through
  }
  return null;
}

const DOMAIN_PAGE_PATH = "/domain";

const configuredSaleUrl = sanitizeUrl(process.env.NEXT_PUBLIC_DOMAIN_SALE_URL);
const saleUrl = configuredSaleUrl ?? DOMAIN_PAGE_PATH;
const configuredInquiryUrl = sanitizeUrl(process.env.NEXT_PUBLIC_DOMAIN_INQUIRY_URL);
const saleUrlIsExternal = !saleUrl.startsWith("/");

export const siteConfig = {
  name: "VendorReviewAI.com",
  shortName: "VendorReviewAI",
  domain: "vendorreviewai.com",
  /** Canonical production origin. Change here only. */
  url: "https://vendorreviewai.com",
  description:
    "An informational resource on AI-assisted vendor review, third-party risk, vendor risk assessment and vendor due diligence.",
  language: "en",
  locale: "en_US",
  themeColor: "#0b2545",
  ogImage: {
    path: "/og-default.png",
    width: 1200,
    height: 630,
    alt: "VendorReviewAI.com: AI vendor review, third-party risk and vendor due diligence",
  },
  /** Update when substantive content changes; surfaced on pages and in JSON-LD. */
  contentDates: {
    published: "2026-10-06",
    modified: "2026-10-06",
  },
  sale: {
    /** Banner / CTA destination. NEXT_PUBLIC_DOMAIN_SALE_URL, else /domain. */
    url: saleUrl,
    isExternal: saleUrlIsExternal,
    /** "Make an Inquiry" destination on /domain; null renders no button. */
    inquiryUrl: configuredInquiryUrl ?? (saleUrlIsExternal ? saleUrl : null),
    domainPagePath: DOMAIN_PAGE_PATH,
  },
  nav: [
    { label: pages.whatIsVendorReview.navLabel, href: pages.whatIsVendorReview.path },
    { label: pages.aiVendorReview.navLabel, href: pages.aiVendorReview.path },
    { label: pages.vendorRiskAssessment.navLabel, href: pages.vendorRiskAssessment.path },
    { label: pages.vendorReviewChecklist.navLabel, href: pages.vendorReviewChecklist.path },
    { label: pages.useCases.navLabel, href: pages.useCases.path },
  ],
  cta: { label: "Domain for Sale" },
  disclaimer:
    "VendorReviewAI.com provides general educational information about vendor review, third-party risk and AI-assisted review workflows. It does not provide legal, security, compliance, procurement or professional risk advice.",
  statusNote:
    "VendorReviewAI.com is an informational resource. It does not currently operate vendor-risk software or provide vendor review services.",
} as const;

/** Absolute canonical URL for a site path. "/" resolves to the bare origin (no trailing slash). */
export function absoluteUrl(path: string): string {
  return path === "/" ? siteConfig.url : new URL(path, siteConfig.url).toString();
}
