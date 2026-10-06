import Link from "next/link";
import { ArticleSection, ShortAnswer } from "@/components/ArticleSection";
import { AssetCTA } from "@/components/AssetCTA";
import { Cite } from "@/components/Cite";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DefinitionBox } from "@/components/DefinitionBox";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedPages } from "@/components/RelatedPages";
import { RiskCategoryGrid } from "@/components/RiskCategoryGrid";
import { Sources } from "@/components/Sources";
import { breadcrumbsFor, pageGraph } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { pages } from "@/lib/pages";

export const metadata = pageMetadata("vendorReviewSoftware");

const uc = pages.useCases.path;

export default function VendorReviewSoftwarePage() {
  return (
    <>
      <JsonLd data={pageGraph("vendorReviewSoftware")} />

      <Hero
        eyebrow="Software category guide"
        title={pages.vendorReviewSoftware.h1}
        breadcrumbs={breadcrumbsFor("vendorReviewSoftware")}
        showDate
        lead="A general guide to the software category. It does not review, rank or sell any product."
      >
        <DefinitionBox term="Direct answer">
          Vendor review software is a category of tools that help organizations run vendor reviews: collecting evidence,
          tracking questionnaires and findings, routing approvals and keeping an audit trail. Some tools add AI to
          extract and compare information in vendor documents. Buyers should evaluate workflow fit, evidence handling, AI
          controls and reporting, while people keep decision authority.
        </DefinitionBox>
      </Hero>

      <ArticleSection id="what-is" title="What Is Vendor Review Software?">
        <ShortAnswer>
          Software that supports the vendor review workflow, from intake and evidence requests to findings, approval and
          the decision record.
        </ShortAnswer>
        <p>
          A <Link href={pages.whatIsVendorReview.path}>vendor review</Link> is the structured evaluation of a third party
          before approval or renewal. Vendor review software digitizes that workflow so that evidence, findings and
          decisions live in one place rather than across email, shared drives and spreadsheets.
        </p>
        <p>
          It sits next to two neighboring categories. <Link href={pages.vendorRiskAssessmentSoftware.path}>Vendor risk
          assessment software</Link> concentrates on risk analysis, such as tiering, questionnaires and residual risk.{" "}
          <Link href={pages.thirdPartyRiskManagementSoftware.path}>Third-party risk management software</Link> covers the
          whole vendor lifecycle. In practice products overlap, so buyers compare what each actually does for their
          process rather than relying on the label.
        </p>
      </ArticleSection>

      <ArticleSection id="capabilities" title="What Capabilities Do Buyers Typically Evaluate?" tone="tint">
        <ShortAnswer>
          Workflow, evidence handling, analysis, findings tracking, approvals, reporting and data controls.
        </ShortAnswer>
        <RiskCategoryGrid
          variant="plain"
          columns={4}
          items={[
            { title: "Intake and scoping", description: "Capturing the service, owner and risk context so the right review depth is applied." },
            { title: "Evidence collection", description: "Requests, reminders and secure submission of questionnaires, policies, reports and contracts." },
            { title: "Document and questionnaire analysis", description: "Extraction, comparison and summarization of evidence, with AI where offered." },
            { title: "Requirements mapping", description: "Comparing evidence with the organization’s own control and contract requirements." },
            { title: "Findings and issue tracking", description: "Recording gaps, owners, due dates and remediation status." },
            { title: "Approval workflow", description: "Routing to security, privacy, legal and procurement, and recording who decided what." },
            { title: "Reporting and audit trail", description: "Retaining evidence, versions and rationale for renewal and audit." },
            { title: "Access and data controls", description: "Roles, permissions and handling of confidential vendor documents." },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="workflow" title="How Does a Vendor Review Workflow Run in Software?">
        <ShortAnswer>
          The software moves a vendor through defined stages and keeps evidence and decisions attached to each one.
        </ShortAnswer>
        <ProcessSteps
          label="Vendor review workflow in software"
          steps={[
            { title: "Intake", description: "The business owner submits the request and risk context." },
            { title: "Evidence request", description: "The vendor receives a request list matched to review depth." },
            { title: "Analysis", description: "Reviewers, or AI-assisted extraction, compare evidence with requirements." },
            { title: "Findings", description: "Gaps and open items are recorded and assigned." },
            { title: "Approval", description: "Accountable owners approve, condition or reject, with rationale." },
            { title: "Renewal and monitoring", description: "Dates and changes trigger the next review." },
          ]}
        />
        <p>
          This mirrors the <Link href={pages.whatIsVendorReview.path}>vendor review process</Link>. The software does not
          change the steps; it changes how consistently they are tracked. The methodology for the analysis step is
          covered in <Link href={pages.aiVendorReview.path}>AI vendor review</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="ai-vs-traditional" title="AI-Assisted vs Traditional Vendor Review Tools" tone="tint">
        <ShortAnswer>
          AI-assisted tools aim to reduce reading and organizing time; traditional tools aim to organize the workflow.
          Neither replaces reviewer judgment.
        </ShortAnswer>
        <ComparisonTable
          caption="Three common approaches to managing vendor reviews"
          columns={["Dimension", "Spreadsheets and email", "Workflow software", "Workflow software with AI assistance"]}
          rows={[
            { label: "Evidence collection", cells: ["Manual requests and file tracking.", "Structured requests, reminders and storage.", "Same, plus checks for missing or outdated items."] },
            { label: "Reading documents", cells: ["Entirely manual.", "Entirely manual.", "Extraction and summaries that a reviewer must verify."] },
            { label: "Consistency", cells: ["Depends on individual habits.", "Templates and required fields help.", "Adds repeatable comparison against requirements."] },
            { label: "Record keeping", cells: ["Scattered and hard to audit.", "Centralized history and approvals.", "Centralized, ideally with source references."] },
            { label: "Decisions", cells: ["People decide.", "People decide.", "People decide; AI output is an input."] },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="evaluation" title="How to Evaluate Vendor Review Software">
        <ShortAnswer>
          Define your process and requirements first, then test each tool against them, including how it handles your
          confidential data.
        </ShortAnswer>
        <ComparisonTable
          caption="Evaluation criteria for vendor review software"
          columns={["Criterion", "What to look for", "Question to ask"]}
          rows={[
            { label: "Workflow fit", cells: ["Stages, tiers and approvals that match how you review.", "Can the workflow be configured without custom development?"] },
            { label: "Evidence handling", cells: ["Support for the document types you request and for versioning.", "How are documents stored, dated and linked to findings?"] },
            { label: "AI transparency", cells: ["Outputs that cite source text and show the requirement compared.", "Can a reviewer see why something was flagged?"] },
            { label: "Data protection", cells: ["Clear terms on retention, access and reuse of submitted documents.", "Is customer data used to train or improve models?"] },
            { label: "Configurable requirements", cells: ["Your own criteria, not only fixed templates.", "Who maintains the requirements and how are changes tracked?"] },
            { label: "Integrations", cells: ["Connection to the procurement, ticketing and identity systems you already use.", "Which integrations exist today, and which are planned?"] },
            { label: "Reporting and audit", cells: ["Exportable records of evidence, findings and decisions.", "Can a past review be reconstructed in full?"] },
            { label: "The supplier itself", cells: ["The software supplier is a vendor too.", "Does it pass your own review process?"] },
          ]}
        />
        <p>
          The <Link href={pages.vendorReviewChecklist.path}>vendor review checklist</Link> can double as the requirements
          list, and the same checklist applies when you review the software supplier.
        </p>
      </ArticleSection>

      <ArticleSection id="use-cases" title="What Are Common Use Cases?" tone="tint">
        <RiskCategoryGrid
          variant="plain"
          columns={3}
          items={[
            { title: "SaaS vendor review", description: <>Track security and privacy evidence for a new SaaS provider. <Link href={`${uc}#saas-vendor-review`}>See the use case</Link>.</> },
            { title: "Vendor onboarding", description: <>Collect intake data consistently and route reviews. <Link href={`${uc}#vendor-onboarding`}>See the use case</Link>.</> },
            { title: "Renewal review", description: <>Compare current evidence with the prior review. <Link href={`${uc}#renewal-review`}>See the use case</Link>.</> },
            { title: "High-risk vendor review", description: <>Manage large evidence sets and remediation. <Link href={`${uc}#high-risk-vendor-review`}>See the use case</Link>.</> },
            { title: "Security vendor assessment", description: <>Map questionnaire responses to control requirements. <Link href={`${uc}#security-vendor-assessment`}>See the use case</Link>.</> },
            { title: "Procurement due diligence", description: <>Compare candidates on the same criteria. <Link href={`${uc}#procurement-due-diligence`}>See the use case</Link>.</> },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="limitations" title="Limitations and Human Oversight">
        <div className="notice">
          <p>
            <strong>
              Software supports vendor review; it does not replace accountable risk, legal, security or procurement
              judgment.
            </strong>
          </p>
        </div>
        <ul>
          <li>Software cannot fix unclear requirements. A tool applies the criteria it is given.</li>
          <li>AI extraction can be wrong or incomplete, and a clean result is not proof of low risk.</li>
          <li>Vendor evidence may be stale or partial regardless of how well it is organized.</li>
          <li>Confidential vendor and company documents need protection when processed by any system.</li>
          <li>
            Regulated organizations should confirm with their own compliance and legal teams what records and oversight
            they need. Supervisory guidance such as the{" "}
            <Cite source="interagencyGuidance">U.S. interagency guidance on third-party relationships</Cite> describes
            oversight across the relationship lifecycle, and a tool does not satisfy it by itself.
          </li>
        </ul>
        <p>
          The <Link href={`${pages.aiVendorReview.path}#risks-and-limitations`}>risks of AI in vendor review</Link>,
          including hallucinations, false negatives and confidentiality, apply to any AI-enabled tool. The{" "}
          <Cite source="nistAiRmf">NIST AI Risk Management Framework</Cite> is one reference for assessing them.
        </p>
      </ArticleSection>

      <FAQ
        tone="tint"
        items={[
          {
            question: "Is vendor review software the same as third-party risk management software?",
            answer: (
              <>
                They overlap. Vendor review software focuses on the review workflow for individual vendors, while{" "}
                <Link href={pages.thirdPartyRiskManagementSoftware.path}>TPRM software</Link> typically covers the whole
                vendor lifecycle, including inventory, monitoring and offboarding.
              </>
            ),
          },
          {
            question: "What should be defined before evaluating software?",
            answer: "Review tiers, required evidence per tier, approval roles and the decisions the tool must record. Without them, products cannot be compared on the same basis.",
          },
          {
            question: "Can the software approve a vendor automatically?",
            answer: "It can route and record approvals, but the approval decision should stay with accountable people. Automated rules are appropriate for routing and reminders, not for accepting risk.",
          },
        ]}
      />

      <RelatedPages
        items={[
          { href: pages.whatIsVendorReview.path, title: "What Is Vendor Review?", description: "The process and terminology this software supports." },
          { href: pages.vendorRiskAssessmentSoftware.path, title: "Vendor Risk Assessment Software", description: "The neighboring category focused on risk analysis." },
          { href: pages.thirdPartyRiskManagementSoftware.path, title: "Third-Party Risk Management Software", description: "Lifecycle-level platforms beyond a single review." },
          { href: pages.useCases.path, title: "AI Vendor Review Use Cases", description: "Twelve scenarios with goal, evidence, AI task and decision." },
        ]}
      />

      <Sources keys={["interagencyGuidance", "nistAiRmf"]} />

      <AssetCTA category="vendor review" related={pages.useCases.path} />
    </>
  );
}
