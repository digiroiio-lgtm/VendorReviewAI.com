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
  vendorReviewSoftware: {
    path: "/vendor-review-software",
    title: "Vendor Review Software: Features, Workflow & Evaluation",
    description:
      "Learn what vendor review software does, which features buyers evaluate, how AI assists review workflows and where human oversight still matters.",
    h1: "Vendor Review Software: What It Does and How to Evaluate It",
    navLabel: "Vendor Review Software",
    breadcrumb: "Vendor Review Software",
    about: ["Vendor review software", "Vendor review workflow", "AI-assisted vendor review"],
  },
  vendorRiskAssessmentSoftware: {
    path: "/vendor-risk-assessment-software",
    title: "Vendor Risk Assessment Software: Capabilities & Criteria",
    description:
      "Understand vendor risk assessment software: risk tiering, questionnaires, evidence, remediation tracking, AI assistance and how to evaluate the category.",
    h1: "Vendor Risk Assessment Software: Capabilities Buyers Evaluate",
    navLabel: "Vendor Risk Assessment Software",
    breadcrumb: "Vendor Risk Assessment Software",
    about: ["Vendor risk assessment software", "Inherent risk", "Residual risk"],
  },
  thirdPartyRiskManagementSoftware: {
    path: "/third-party-risk-management-software",
    title: "Third-Party Risk Management Software: Features & Criteria",
    description:
      "Explore third-party risk management software: lifecycle coverage, key capabilities, AI assistance, limitations and criteria for evaluating the category.",
    h1: "Third-Party Risk Management Software: Scope, Features and Evaluation Criteria",
    navLabel: "Third-Party Risk Management Software",
    breadcrumb: "Third-Party Risk Management Software",
    about: ["Third-party risk management software", "Third-party risk management", "Vendor lifecycle"],
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
