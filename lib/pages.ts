/**
 * Page registry: the single source of truth for every indexable page's route,
 * metadata, H1 and breadcrumb label. Sitemap, navigation, metadata and JSON-LD
 * are all derived from here.
 */

export type PageConfig = {
  path: string;
  /** <title> and Open Graph / Twitter title. */
  title: string;
  /** Meta description and Open Graph / Twitter description. */
  description: string;
  /** The single visible H1. */
  h1: string;
  /** Label used in the primary navigation. */
  navLabel: string;
  /** Label used in breadcrumbs. */
  breadcrumb: string;
  /** Subjects the page is about (used for JSON-LD `about`). */
  about: string[];
};

export const pages = {
  home: {
    path: "/",
    title: "AI Vendor Review | VendorReviewAI.com",
    description:
      "Learn how AI can assist vendor review, third-party risk, security checks, compliance evidence analysis and procurement due diligence.",
    h1: "AI Vendor Review for Faster, More Consistent Third-Party Decisions",
    navLabel: "Home",
    breadcrumb: "Home",
    about: ["AI vendor review", "Vendor review", "Third-party risk management"],
  },
  whatIsVendorReview: {
    path: "/what-is-vendor-review",
    title: "What Is Vendor Review? Process, Purpose & Examples",
    description:
      "Learn how vendor review works, what companies assess, when vendors should be reviewed and how vendor review differs from audits and risk assessments.",
    h1: "What Is a Vendor Review?",
    navLabel: "Vendor Review",
    breadcrumb: "What Is Vendor Review",
    about: ["Vendor review", "Vendor assessment", "Vendor due diligence"],
  },
  aiVendorReview: {
    path: "/ai-vendor-review",
    title: "AI Vendor Review: Automation, Risks & Use Cases",
    description:
      "Explore how AI can help analyze vendor documents, questionnaires, security evidence and compliance information while preserving human oversight.",
    h1: "AI Vendor Review: How Artificial Intelligence Can Assist Third-Party Risk Teams",
    navLabel: "AI Review",
    breadcrumb: "AI Vendor Review",
    about: ["AI vendor review", "Document analysis", "Human oversight"],
  },
  vendorRiskAssessment: {
    path: "/vendor-risk-assessment",
    title: "Vendor Risk Assessment: Framework, Risks & Process",
    description:
      "Understand how to assess vendor cybersecurity, privacy, compliance, financial and operational risk using a structured review framework.",
    h1: "Vendor Risk Assessment: A Practical Review Framework",
    navLabel: "Risk Assessment",
    breadcrumb: "Vendor Risk Assessment",
    about: ["Vendor risk assessment", "Inherent risk", "Residual risk"],
  },
  vendorReviewChecklist: {
    path: "/vendor-review-checklist",
    title: "Vendor Review Checklist: Security, Privacy & Compliance",
    description:
      "Use a practical vendor review checklist covering security, privacy, compliance, contracts, financial risk, operations and AI-related vendor risks.",
    h1: "Vendor Review Checklist: What to Assess Before Approval",
    navLabel: "Checklist",
    breadcrumb: "Vendor Review Checklist",
    about: ["Vendor due diligence checklist", "Vendor review", "Third-party due diligence"],
  },
  useCases: {
    path: "/use-cases",
    title: "AI Vendor Review Use Cases for Third-Party Risk Teams",
    description:
      "Explore AI vendor review use cases across SaaS, security, privacy, procurement, supplier evaluation, renewals and third-party due diligence.",
    h1: "AI Vendor Review Use Cases",
    navLabel: "Use Cases",
    breadcrumb: "Use Cases",
    about: ["AI vendor review use cases", "Third-party risk automation", "Procurement due diligence"],
  },
} as const satisfies Record<string, PageConfig>;

export type PageKey = keyof typeof pages;

/** Pages that appear in the sitemap. `/domain` is deliberately excluded. */
export const indexablePageKeys = Object.keys(pages) as PageKey[];

/** The acquisition page: noindex, follow, never in the sitemap. */
export const domainPage = {
  path: "/domain",
  title: "Acquire VendorReviewAI.com | Domain Details",
  description:
    "VendorReviewAI.com is a category domain for businesses in vendor risk, third-party risk, procurement technology, compliance automation and GRC software.",
  h1: "Acquire VendorReviewAI.com",
  breadcrumb: "Domain Details",
} as const;
