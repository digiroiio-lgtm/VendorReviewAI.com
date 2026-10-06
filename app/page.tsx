import Link from "next/link";
import { ArticleSection, ShortAnswer } from "@/components/ArticleSection";
import { CategoryMap } from "@/components/CategoryMap";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTA } from "@/components/CTA";
import { Cite } from "@/components/Cite";
import { DefinitionBox } from "@/components/DefinitionBox";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedPages } from "@/components/RelatedPages";
import { RiskCategoryGrid } from "@/components/RiskCategoryGrid";
import { SaleLink } from "@/components/SaleLink";
import { Sources } from "@/components/Sources";
import { pageGraph } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { pages } from "@/lib/pages";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata("home");

const useCasesPath = pages.useCases.path;

export default function HomePage() {
  return (
    <>
      <JsonLd data={pageGraph("home")} />

      <Hero
        size="large"
        eyebrow="Vendor review · Third-party risk · AI-assisted due diligence"
        title={pages.home.h1}
        lead="Review vendor evidence, security information, privacy materials, compliance documents and procurement risk using an AI-assisted approach."
        actions={
          <>
            <Link href={pages.whatIsVendorReview.path} className="btn btn--primary">
              Explore Vendor Review
            </Link>
            <SaleLink className="btn btn--outline">{siteConfig.cta.label}</SaleLink>
          </>
        }
        aside={<CategoryMap />}
      >
        <DefinitionBox term="AI vendor review, defined">
          AI vendor review is the use of artificial intelligence to help teams read, extract, compare and summarize the
          evidence used to evaluate third-party vendors, such as security questionnaires, policies, contracts and
          certifications. It speeds up first-pass analysis and improves consistency, while risk, security, privacy, legal
          and procurement professionals stay accountable for findings and approval decisions.
        </DefinitionBox>
      </Hero>

      <ArticleSection id="what-is-vendor-review" title="What Is Vendor Review?">
        <ShortAnswer>
          Vendor review is the structured evaluation of a third party before a company buys from it, renews it or relies
          on it. Teams collect evidence, identify issues, agree remediation and document an approval decision.
        </ShortAnswer>
        <p>
          Vendor review sits inside <strong>third-party risk management</strong> and overlaps with procurement, security
          review, privacy review and compliance review. Each lens asks a different question about the same vendor: can we
          trust it with our systems, how does it handle personal data, does the relationship create regulatory or
          contractual obligations, and is it commercially and operationally sound?
        </p>
        <p>
          Terms such as vendor assessment, vendor evaluation, supplier review and vendor due diligence are often used for
          the same activity. Cybersecurity supply chain guidance such as{" "}
          <Cite source="nist80016">NIST SP 800-161 Rev. 1</Cite> addresses part of the same problem from a security
          angle. The guide on{" "}
          <Link href={pages.whatIsVendorReview.path}>what a vendor review is and how it works</Link> explains the
          differences, and the{" "}
          <Link href={pages.vendorRiskAssessment.path}>vendor risk assessment framework</Link> shows how risk is analyzed
          inside a review.
        </p>
      </ArticleSection>

      <ArticleSection id="what-can-ai-assist-with" title="What Can AI Assist With?" tone="tint">
        <ShortAnswer>
          AI is most useful on text-heavy, repeatable tasks: reading documents, extracting facts, comparing them with
          requirements and organizing the results for a reviewer to verify.
        </ShortAnswer>
        <RiskCategoryGrid
          variant="plain"
          columns={4}
          items={[
            { title: "Security questionnaires", description: "Extract answers, align them to a standard question set and flag inconsistent or non-responsive entries." },
            { title: "Vendor policies", description: "Summarize security, privacy and continuity policies and compare them with internal requirements." },
            { title: "Compliance evidence", description: "Map reports and attestations to the requirements a team has defined and note gaps." },
            { title: "Privacy documentation", description: "Pull out data categories, purposes, subprocessors, retention terms and transfer mechanisms." },
            { title: "Contracts", description: "Locate clauses such as liability, termination, audit rights and data obligations for legal review." },
            { title: "Certifications", description: "Capture scope, issuer, dates and exclusions so reviewers can judge fit and currency." },
            { title: "Risk findings", description: "Group observations into draft findings with source references for human validation." },
            { title: "Missing evidence", description: "Compare submitted materials with a request list to show what is absent, outdated or incomplete." },
          ]}
        />
        <p>
          Document analysis, evidence extraction, risk flagging and questionnaire analysis are the core tasks. See{" "}
          <Link href={pages.aiVendorReview.path}>how AI can assist third-party risk teams</Link> for inputs, outputs and
          limits of each.
        </p>
      </ArticleSection>

      <ArticleSection id="vendor-review-workflow" title="Vendor Review Workflow">
        <ShortAnswer>
          A vendor review moves from identifying the vendor and its risk context, through evidence and findings, to a
          decision and ongoing monitoring.
        </ShortAnswer>
        <ProcessSteps
          label="Vendor review workflow"
          steps={[
            { title: "Vendor", description: "Identify the vendor, the service and the business owner." },
            { title: "Risk Context", description: "Establish what data, systems and processes the vendor touches." },
            { title: "Evidence", description: "Request and collect questionnaires, policies, reports and contracts." },
            { title: "Review", description: "Analyze evidence against requirements. AI can help with the first pass." },
            { title: "Findings", description: "Document gaps, risks and open questions with their sources." },
            { title: "Remediation", description: "Agree corrective actions, compensating controls or contract changes." },
            { title: "Decision", description: "Accountable owners approve, approve with conditions or reject." },
            { title: "Monitoring", description: "Track changes, renewals and incidents; reassess when needed." },
          ]}
        />
        <p>
          AI assistance typically applies to the Evidence, Review and Findings steps. The Decision step stays with
          people. The <Link href={pages.vendorReviewChecklist.path}>vendor review checklist</Link> turns these steps into
          concrete questions and evidence requests.
        </p>
      </ArticleSection>

      <ArticleSection id="key-risk-areas" title="Key Vendor Risk Areas" tone="tint">
        <ShortAnswer>
          Vendor risk is not a single score. It spans several areas that different teams own and evaluate with different
          evidence.
        </ShortAnswer>
        <RiskCategoryGrid
          items={[
            { tag: "Risk area", title: "Cybersecurity", description: "Access control, encryption, vulnerability management and incident response." },
            { tag: "Risk area", title: "Privacy", description: "Personal data handling, processing purposes, subprocessors and breach procedures." },
            { tag: "Risk area", title: "Compliance", description: "Regulatory exposure, attestations, policies and contractual obligations." },
            { tag: "Risk area", title: "Financial", description: "Vendor stability, insurance and dependence on a single revenue source or funder." },
            { tag: "Risk area", title: "Operational", description: "Service quality, support, capacity and dependence on subcontractors." },
            { tag: "Risk area", title: "Business continuity", description: "Disaster recovery, backup and tested plans for service disruption." },
            { tag: "Risk area", title: "Contractual", description: "Liability, termination, service levels, audit rights and data return." },
            { tag: "Risk area", title: "AI risk", description: "Use of AI features, model providers, training data claims and human oversight." },
          ]}
        />
        <p>
          The <Link href={pages.vendorRiskAssessment.path}>vendor risk assessment guide</Link> defines each category and
          explains inherent risk, residual risk, remediation and monitoring.
        </p>
      </ArticleSection>

      <ArticleSection id="use-cases" title="Vendor Review Use Cases">
        <p>
          AI-assisted review applies differently depending on the vendor type and the decision being made. Each use case
          follows one pattern: goal, evidence, AI-assisted task, human decision and output.
        </p>
        <RiskCategoryGrid
          variant="plain"
          columns={3}
          items={[
            { title: "SaaS vendor review", description: <>Assess material security, privacy and operational risk from a SaaS provider. <Link href={`${useCasesPath}#saas-vendor-review`}>See the use case</Link>.</> },
            { title: "AI vendor review", description: <>Evaluate vendors that embed AI, including data use and model providers. <Link href={`${useCasesPath}#ai-vendor-review`}>See the use case</Link>.</> },
            { title: "Security vendor assessment", description: <>Compare security evidence with defined control requirements. <Link href={`${useCasesPath}#security-vendor-assessment`}>See the use case</Link>.</> },
            { title: "Procurement due diligence", description: <>Confirm a counterparty is suitable before contracting. <Link href={`${useCasesPath}#procurement-due-diligence`}>See the use case</Link>.</> },
            { title: "Renewal review", description: <>Check whether an existing vendor still meets requirements. <Link href={`${useCasesPath}#renewal-review`}>See the use case</Link>.</> },
            { title: "Continuous monitoring support", description: <>Keep reviews current between formal cycles. <Link href={`${useCasesPath}#continuous-monitoring-support`}>See the use case</Link>.</> },
          ]}
        />
        <p>
          All twelve scenarios, including M&amp;A third-party review and high-risk vendor review, are on the{" "}
          <Link href={useCasesPath}>AI vendor review use cases</Link> page.
        </p>
      </ArticleSection>

      <ArticleSection id="ai-vs-manual" title="AI-Assisted vs Manual Vendor Review" tone="tint">
        <ShortAnswer>
          AI-assisted review is stronger at volume and first-pass consistency; manual review is stronger at context,
          negotiation and accountability. Neither is universally better, and the practical question is which steps
          benefit from assistance.
        </ShortAnswer>
        <ComparisonTable
          caption="AI-assisted and manual vendor review compared"
          columns={["Dimension", "AI-assisted review", "Manual review"]}
          rows={[
            { label: "Data volume", cells: ["Can process large document sets and many questionnaires in one cycle.", "Capacity is limited by reviewer time; queues build as volume grows."] },
            { label: "Document analysis", cells: ["Extracts and summarizes content quickly, but can misread or omit details and needs verification.", "Reviewers read in full and notice nuance, but more slowly."] },
            { label: "Consistency", cells: ["Applies the same checks every time; quality depends on how requirements are defined and tested.", "Varies between reviewers unless standards and templates guide the work."] },
            { label: "Speed", cells: ["Faster first-pass triage and summarization.", "Slower first pass, with verification built into the reading."] },
            { label: "Contextual judgment", cells: ["Limited; lacks business context unless supplied and cannot weigh trade-offs.", "Strong where reviewers know the business, the vendor and the regulatory setting."] },
            { label: "Negotiation", cells: ["Can prepare issue lists and clause comparisons, but does not negotiate.", "People negotiate terms, remediation plans and exceptions."] },
            { label: "Accountability", cells: ["A tool cannot be accountable; every output needs a human owner.", "Named reviewers and approvers own the outcome."] },
            { label: "Final approval", cells: ["Should not make the final decision.", "Risk, legal, security, privacy or procurement owners decide under internal policy."] },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="evidence-reviewed" title="What Evidence Is Usually Reviewed?">
        <ShortAnswer>
          Reviewers typically examine documents that describe how the vendor operates, protects data and commits
          contractually. What is requested depends on the vendor’s risk context, not on a universal list.
        </ShortAnswer>
        <ComparisonTable
          caption="Common evidence by review area"
          columns={["Area", "Typical documents", "What reviewers look for"]}
          rows={[
            { label: "Security", cells: ["Security policies, questionnaire responses, penetration test summaries, certification or attestation reports", "Control coverage, scope, exceptions and recency"] },
            { label: "Privacy", cells: ["Privacy notice, data processing terms, subprocessor list, data flow descriptions", "Data types, purposes, locations, retention and subprocessing"] },
            { label: "Compliance", cells: ["Compliance policies, attestations, regulatory statements where relevant", "Fit with the obligations that apply to the buyer"] },
            { label: "Contract", cells: ["Master agreement, service levels, order forms, data terms", "Liability, termination, audit rights and data return"] },
            { label: "Financial and operational", cells: ["Financial summaries, insurance certificates, continuity and recovery plans", "Stability, coverage and tested recovery"] },
            { label: "AI use", cells: ["AI feature documentation, model provider and data-use terms", "Data handling, oversight and output risk"] },
          ]}
        />
        <p>
          Certifications and reports are one input, not proof of fit: reviewers check what is in scope, who issued the
          report and how current it is, for example for <Cite source="iso27001">ISO/IEC 27001</Cite> certificates. The full set of questions is in the{" "}
          <Link href={pages.vendorReviewChecklist.path}>vendor review checklist</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="by-team" title="Who Uses Vendor Review?" tone="tint">
        <ShortAnswer>
          Vendor review is cross-functional. Procurement usually coordinates, and security, privacy, legal, compliance,
          finance and operations contribute the expertise they own.
        </ShortAnswer>
        <RiskCategoryGrid
          variant="plain"
          columns={4}
          items={[
            { title: "Procurement", description: "Coordinates intake, commercial terms and supplier selection." },
            { title: "Security", description: "Evaluates controls, architecture and incident readiness." },
            { title: "GRC", description: "Maintains the review program, risk tiers and records." },
            { title: "Privacy", description: "Reviews personal data handling, transfers and subprocessors." },
            { title: "Legal", description: "Interprets contract terms, liability and regulatory exposure." },
            { title: "Compliance", description: "Maps vendor evidence to regulatory and policy requirements." },
            { title: "Finance", description: "Considers vendor stability, spend and insurance." },
            { title: "Operations", description: "Judges service fit, dependency and continuity impact." },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="limitations" title="Limitations and Human Oversight">
        <div className="notice">
          <p>
            <strong>
              AI-assisted vendor review should support human decision-making, not replace accountable risk, legal,
              security or procurement judgment.
            </strong>
          </p>
        </div>
        <p>
          AI outputs can be wrong, incomplete or out of date. Language models can state unsupported details with
          confidence, vendor evidence is often partial, and documents can be stale. A tool also lacks the business
          context that determines how much a given finding matters. Confidential vendor and company data needs
          protection when it is processed by any AI system, and no tool can guarantee that a vendor is safe.
        </p>
        <p>
          The <Link href={`${pages.aiVendorReview.path}#risks-and-limitations`}>risks and limitations of AI vendor review</Link>{" "}
          are covered in detail, and the status of this site is explicit: {siteConfig.statusNote}
        </p>
      </ArticleSection>

      <FAQ
        tone="tint"
        items={[
          {
            question: "What is AI vendor review?",
            answer: "AI vendor review is the use of AI to help analyze vendor evidence, such as questionnaires, policies, contracts and certifications, by extracting facts, comparing them with requirements and flagging gaps for human reviewers.",
          },
          {
            question: "How is vendor review different from vendor risk assessment?",
            answer: (
              <>
                Vendor review is the full evaluation, from evidence collection to an approval decision. Vendor risk
                assessment is the part focused on identifying and evaluating risk. See{" "}
                <Link href={pages.whatIsVendorReview.path}>what vendor review includes</Link> and the{" "}
                <Link href={pages.vendorRiskAssessment.path}>risk assessment framework</Link>.
              </>
            ),
          },
          {
            question: "Can AI approve or reject a vendor?",
            answer: "AI can prepare findings and flag issues, but approval and rejection should remain with accountable people who understand the business context and the applicable obligations.",
          },
          {
            question: "Is AI vendor review the same as vendor due diligence?",
            answer: "No. Vendor due diligence is the broader goal of verifying a vendor before commitment. AI vendor review is one way to assist with the evidence analysis that due diligence requires.",
          },
          {
            question: "Does VendorReviewAI.com provide vendor review software?",
            answer: (
              <>
                No. {siteConfig.statusNote} The domain is available for acquisition; see the{" "}
                <Link href={siteConfig.sale.domainPagePath}>domain details</Link>.
              </>
            ),
          },
        ]}
      />

      <RelatedPages
        title="Explore the Guides"
        items={[
          { href: pages.whatIsVendorReview.path, title: "What Is Vendor Review?", description: "Purpose, scope, timing and how it differs from audits and risk assessments." },
          { href: pages.aiVendorReview.path, title: "AI Vendor Review", description: "What AI can assist with, what stays human and where it can go wrong." },
          { href: pages.vendorRiskAssessment.path, title: "Vendor Risk Assessment", description: "A practical framework from context and inherent risk to monitoring." },
          { href: pages.vendorReviewChecklist.path, title: "Vendor Review Checklist", description: "What to assess before approval, in a printable layout." },
          { href: pages.useCases.path, title: "Use Cases", description: "Twelve scenarios from SaaS review to continuous monitoring." },
        ]}
      />

      <Sources keys={["nist80016", "iso27001"]} />

      <CTA
        title="Start with the fundamentals"
        primary={{ href: pages.whatIsVendorReview.path, label: "Explore Vendor Review" }}
        secondary={{ sale: true, label: siteConfig.cta.label }}
      >
        Learn what a vendor review covers, then move to risk assessment, the checklist and AI-assisted workflows.
      </CTA>
    </>
  );
}
