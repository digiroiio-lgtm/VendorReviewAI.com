import { pages } from "@/lib/pages";

export type UseCase = {
  id: string;
  title: string;
  goal: string;
  evidence: string;
  aiTask: string;
  humanDecision: string;
  output: string;
  related: { href: string; label: string }[];
};

const checklist = (anchor: string, label: string) => ({
  href: `${pages.vendorReviewChecklist.path}#${anchor}`,
  label,
});
const risk = { href: pages.vendorRiskAssessment.path, label: "Vendor risk assessment framework" };

export const useCases: UseCase[] = [
  {
    id: "saas-vendor-review",
    title: "SaaS Vendor Review",
    goal: "Determine whether a SaaS provider creates material security, privacy or operational risk.",
    evidence: "Security policies, questionnaires, agreements, certifications, architecture documents and privacy materials.",
    aiTask: "Extract relevant information, identify missing evidence, summarize findings and compare responses against predefined requirements.",
    humanDecision: "Risk, security, privacy, legal or procurement teams decide whether the vendor should be approved, remediated or rejected.",
    output: "Structured vendor review with documented findings and follow-up items.",
    related: [checklist("security", "Security checklist"), checklist("privacy", "Privacy checklist")],
  },
  {
    id: "technology-vendor-review",
    title: "Technology Vendor Review",
    goal: "Determine whether a technology provider’s service, architecture and support model fit security and operational requirements.",
    evidence: "Architecture documents, service levels, support terms, security descriptions, test summaries and integration documentation.",
    aiTask: "Extract dependencies and architecture details, compare service levels with requirements and flag unsupported claims or missing documents.",
    humanDecision: "IT, security and procurement decide on technical fit, integration constraints and any compensating controls.",
    output: "Technical fit summary with risks, conditions and open questions.",
    related: [checklist("financial-and-operational", "Operational checklist"), risk],
  },
  {
    id: "ai-vendor-review",
    title: "AI Vendor Review",
    goal: "Assess the risks created by a vendor’s AI features, including data use, model providers and oversight.",
    evidence: "AI feature documentation, data-use and retention terms, model provider disclosures, acceptable-use terms and security materials.",
    aiTask: "Extract statements about training data, retention and third-party models, and flag inconsistencies between documents.",
    humanDecision: "Privacy, legal, security and the business owner decide whether the AI use is acceptable and what guardrails apply.",
    output: "AI-risk addendum to the vendor review with open questions and conditions.",
    related: [checklist("ai-vendor-risk", "AI vendor risk checklist"), { href: `${pages.aiVendorReview.path}#ai-vendors`, label: "AI vendor review vs reviewing AI vendors" }],
  },
  {
    id: "security-vendor-assessment",
    title: "Security Vendor Assessment",
    goal: "Determine whether a vendor’s security controls are adequate for the data and access involved.",
    evidence: "Security questionnaire responses, policies, penetration test summaries, certification or attestation reports and the incident response plan.",
    aiTask: "Map responses to control requirements, spot non-responsive or contradictory answers and summarize exceptions noted in reports.",
    humanDecision: "The security team judges adequacy and severity and decides which remediation is required.",
    output: "Security findings list with reviewer-assigned severity and requested follow-ups.",
    related: [checklist("security", "Security checklist"), { href: `${pages.vendorRiskAssessment.path}#risk-categories`, label: "Cybersecurity risk category" }],
  },
  {
    id: "privacy-vendor-review",
    title: "Privacy Vendor Review",
    goal: "Understand how a vendor handles personal data and whether the buyer’s privacy obligations can be met.",
    evidence: "Data processing terms, privacy notice, subprocessor list, data flow descriptions, retention and deletion terms and transfer mechanisms.",
    aiTask: "Extract data categories, purposes, subprocessors, locations and retention periods, and compare them with privacy requirements.",
    humanDecision: "Privacy and legal teams decide whether the terms are acceptable and assess transfers and jurisdictions.",
    output: "Privacy review record with identified data flows and open items.",
    related: [checklist("privacy", "Privacy checklist"), { href: `${pages.vendorRiskAssessment.path}#risk-categories`, label: "Privacy risk category" }],
  },
  {
    id: "procurement-due-diligence",
    title: "Procurement Due Diligence",
    goal: "Confirm that a vendor is a suitable and viable counterparty before a contract is signed.",
    evidence: "Company and ownership information, financial summaries, insurance certificates, proposals and draft contracts.",
    aiTask: "Summarize proposals, normalize information across bidders and flag inconsistencies or missing documents.",
    humanDecision: "Procurement, with legal and finance, decides on counterparty selection and commercial terms.",
    output: "Due diligence summary with a comparison across candidate vendors.",
    related: [checklist("company-and-ownership", "Company and ownership checklist"), checklist("contract", "Contract checklist")],
  },
  {
    id: "supplier-evaluation",
    title: "Supplier Evaluation",
    goal: "Evaluate non-software suppliers, such as manufacturers, logistics providers or professional services firms, on capability, quality and continuity.",
    evidence: "Capability statements, quality documentation, facility and location information, certifications, continuity plans and supplier questionnaires.",
    aiTask: "Extract capability and certification details, compare suppliers on the same criteria and flag gaps in documentation.",
    humanDecision: "Procurement and operations decide which suppliers meet requirements and what follow-up is needed.",
    output: "Supplier evaluation summary with strengths, gaps and conditions.",
    related: [checklist("financial-and-operational", "Financial and operational checklist"), { href: pages.whatIsVendorReview.path, label: "What is vendor review?" }],
  },
  {
    id: "renewal-review",
    title: "Renewal Review",
    goal: "Determine whether an existing vendor still meets requirements before the contract renews.",
    evidence: "The previous review, updated documents, incident history, service-level reports, contract changes and product changes.",
    aiTask: "Compare current evidence with the prior review to highlight changes, expired documents and new subprocessors.",
    humanDecision: "The business owner and risk team decide whether to renew, renegotiate or exit.",
    output: "Renewal review with a change log and any new conditions.",
    related: [{ href: `${pages.whatIsVendorReview.path}#when`, label: "When vendors should be reviewed" }, risk],
  },
  {
    id: "high-risk-vendor-review",
    title: "High-Risk Vendor Review",
    goal: "Conduct a deeper review of a vendor with sensitive data, critical dependency or regulatory exposure.",
    evidence: "The full evidence set, independent reports, architecture documents, continuity test results, subcontractor information and contract audit rights.",
    aiTask: "Organize large evidence sets, cross-reference documents, surface contradictions and unresolved items and draft follow-up questions.",
    humanDecision: "Senior risk, security and legal leaders approve, require remediation or reject, and may require independent or on-site verification.",
    output: "Detailed review file with an executive summary, remediation plan and approval record.",
    related: [{ href: `${pages.vendorRiskAssessment.path}#deeper-review`, label: "Which vendors need deeper review" }, risk],
  },
  {
    id: "vendor-onboarding",
    title: "Vendor Onboarding",
    goal: "Collect required information consistently at intake and route each vendor to the right reviews.",
    evidence: "Intake form, business context, data types involved and basic company documents.",
    aiTask: "Check intake completeness, classify responses and suggest which review types may apply, for a person to confirm.",
    humanDecision: "Procurement and risk owners confirm the risk tier and approve the vendor to proceed to review.",
    output: "Complete onboarding record with routed review tasks.",
    related: [{ href: `${pages.vendorRiskAssessment.path}#prioritization`, label: "How vendors are prioritized" }, checklist("how-to-use", "How to use the checklist")],
  },
  {
    id: "m-and-a-third-party-review",
    title: "M&A Third-Party Review",
    goal: "Understand the target company’s vendor dependencies and contractual commitments during due diligence.",
    evidence: "Material vendor contracts, vendor lists, change-of-control provisions, data processing terms and concentration information.",
    aiTask: "Extract key terms such as change of control, assignment and termination, summarize dependencies and flag contracts for counsel.",
    humanDecision: "The deal team, legal and risk decide how significant each dependency is and what integration steps are needed.",
    output: "Third-party dependency summary with flagged contracts and open questions.",
    related: [checklist("contract", "Contract checklist"), { href: `${pages.vendorRiskAssessment.path}#risk-categories`, label: "Concentration and fourth-party risk" }],
  },
  {
    id: "continuous-monitoring-support",
    title: "Continuous Monitoring Support",
    goal: "Keep a vendor review current between formal review cycles.",
    evidence: "Updated certificates and reports, vendor notices of change, public incident information, service-level reports and expiry dates.",
    aiTask: "Summarize changes in new documents, flag expiring or lapsed evidence and route items for review.",
    humanDecision: "Risk owners decide whether a change warrants reassessment, remediation or escalation.",
    output: "Monitoring log with triggers, follow-ups and next review dates.",
    related: [{ href: `${pages.vendorRiskAssessment.path}#after-findings`, label: "What happens after findings" }, { href: `${pages.aiVendorReview.path}#what-can-ai-automate`, label: "Monitoring support" }],
  },
];
