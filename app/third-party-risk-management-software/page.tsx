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

export const metadata = pageMetadata("thirdPartyRiskManagementSoftware");

const uc = pages.useCases.path;

export default function ThirdPartyRiskManagementSoftwarePage() {
  return (
    <>
      <JsonLd data={pageGraph("thirdPartyRiskManagementSoftware")} />

      <Hero
        eyebrow="Software category guide"
        title={pages.thirdPartyRiskManagementSoftware.h1}
        breadcrumbs={breadcrumbsFor("thirdPartyRiskManagementSoftware")}
        showDate
        lead="A general guide to the software category. It does not review, rank or sell any product."
      >
        <DefinitionBox term="Direct answer">
          Third-party risk management (TPRM) software is a category of platforms that support the whole third-party
          lifecycle: vendor inventory, tiering, onboarding and due diligence, assessments, issue management, monitoring
          and offboarding. Some add AI for document analysis and monitoring support. Buyers should assess lifecycle
          coverage, integrations, reporting and governance, while accountable teams retain risk decisions.
        </DefinitionBox>
      </Hero>

      <ArticleSection id="what-is" title="What Is Third-Party Risk Management Software?">
        <ShortAnswer>
          Software that supports a third-party risk management program across the vendor lifecycle, not only a single
          review.
        </ShortAnswer>
        <p>
          Third-party risk management is the ongoing program that governs how an organization selects, oversees and exits
          third parties. A <Link href={pages.whatIsVendorReview.path}>vendor review</Link> is one activity inside it. TPRM
          software provides the shared record and workflow for the whole program.
        </p>
        <p>
          It relates to several neighboring categories. <Link href={pages.vendorReviewSoftware.path}>Vendor review
          software</Link> centers on the review workflow, and{" "}
          <Link href={pages.vendorRiskAssessmentSoftware.path}>vendor risk assessment software</Link> centers on risk
          analysis. TPRM software may include both, and it may also connect to governance, risk and compliance (GRC),
          procurement and contract management systems.
        </p>
      </ArticleSection>

      <ArticleSection id="lifecycle" title="What Lifecycle Does It Cover?" tone="tint">
        <ShortAnswer>
          From planning and inventory through due diligence, contracting and monitoring to termination.
        </ShortAnswer>
        <ProcessSteps
          label="Third-party lifecycle and software support"
          steps={[
            { title: "Inventory and tiering", description: "A register of third parties, their services and risk tier." },
            { title: "Due diligence", description: "Evidence collection, assessment and approval before commitment." },
            { title: "Contracting", description: "Tracking of key terms, obligations and conditions." },
            { title: "Monitoring", description: "Reassessment, change tracking and issue follow-up." },
            { title: "Offboarding", description: "Exit steps, data return and record retention." },
          ]}
        />
        <p>
          Supervisory guidance describes a similar lifecycle. The U.S.{" "}
          <Cite source="interagencyGuidance">interagency guidance on third-party relationships</Cite> sets out planning,
          due diligence and selection, contract negotiation, ongoing monitoring and termination as stages of risk
          management. Whether and how it applies depends on the organization.
        </p>
      </ArticleSection>

      <ArticleSection id="capabilities" title="What Capabilities Do Buyers Typically Evaluate?">
        <RiskCategoryGrid
          variant="plain"
          columns={4}
          items={[
            { title: "Vendor inventory", description: "A single register of third parties, owners, services and data involved." },
            { title: "Tiering", description: "Risk-based tiers that drive review depth and reassessment frequency." },
            { title: "Onboarding workflows", description: "Intake, routing and approval before a vendor goes live." },
            { title: "Assessments", description: "Questionnaires, evidence and findings, as in risk assessment tools." },
            { title: "Issue and remediation management", description: "Tracked findings with owners, dates and closure evidence." },
            { title: "Monitoring and reassessment", description: "Scheduled and event-driven reviews, with triage of incoming signals." },
            { title: "Subcontractor mapping", description: "Visibility into fourth parties and concentration across vendors." },
            { title: "Records and reporting", description: "Auditable history and regulatory registers where required." },
          ]}
        />
        <p>
          Some obligations are specific. For example, the EU’s{" "}
          <Cite source="dora">Digital Operational Resilience Act</Cite> requires in-scope financial entities to maintain a
          register of information on arrangements with ICT third-party service providers. A tool can help maintain such a
          register, but it does not determine whether the rule applies to you.
        </p>
      </ArticleSection>

      <ArticleSection id="ai-vs-traditional" title="AI-Assisted vs Traditional Third-Party Risk Management" tone="tint">
        <ComparisonTable
          caption="Traditional and AI-assisted approaches across the third-party lifecycle"
          columns={["Lifecycle area", "Traditional approach", "AI-assisted approach"]}
          rows={[
            { label: "Due diligence", cells: ["Reviewers read each document and record notes.", "Extraction and gap checks prepare material for reviewers to verify."] },
            { label: "Contract terms", cells: ["Manual search of agreements.", "Clause location and extraction for legal review."] },
            { label: "Monitoring", cells: ["Calendar reminders and periodic review.", "Summaries of changes and flags for expiring evidence, triaged by people."] },
            { label: "Reporting", cells: ["Manually assembled from spreadsheets.", "Generated from structured data; still reviewed by owners."] },
            { label: "Risk decisions", cells: ["Made by accountable owners.", "Made by accountable owners; AI output is an input."] },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="evaluation" title="How to Evaluate Third-Party Risk Management Software">
        <ShortAnswer>
          Compare lifecycle coverage, data model flexibility, integrations, governance controls and exit options against
          your own program.
        </ShortAnswer>
        <ComparisonTable
          caption="Evaluation criteria for third-party risk management software"
          columns={["Criterion", "What to look for", "Question to ask"]}
          rows={[
            { label: "Lifecycle coverage", cells: ["Support for the stages your program runs, from inventory to offboarding.", "Which stages are native and which need workarounds?"] },
            { label: "Data model", cells: ["Flexible vendor, service and relationship records.", "Can we represent subsidiaries, services and subcontractors?"] },
            { label: "Integrations", cells: ["Connections to procurement, contract, ticketing and identity systems already in use.", "Which integrations exist today, and who maintains them?"] },
            { label: "Monitoring signals", cells: ["Clear sources, triage and ownership of alerts.", "How are low-value alerts kept from burying real issues?"] },
            { label: "Regulatory fit", cells: ["Records and registers relevant to your obligations.", "How does the tool support, without claiming to guarantee, our obligations?"] },
            { label: "Governance", cells: ["Roles, approvals, segregation of duties and audit history.", "Who can change tiers, ratings and decisions?"] },
            { label: "AI controls", cells: ["Source citations, error handling and data-use terms.", "Is our data used for model training?"] },
            { label: "Exit and portability", cells: ["Export of vendor records, findings and evidence.", "What happens to our data if we leave?"] },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="use-cases" title="What Are Common Use Cases?" tone="tint">
        <RiskCategoryGrid
          variant="plain"
          columns={3}
          items={[
            { title: "Vendor onboarding", description: <>Consistent intake and routing. <Link href={`${uc}#vendor-onboarding`}>See the use case</Link>.</> },
            { title: "Renewal review", description: <>Compare current evidence with the last review. <Link href={`${uc}#renewal-review`}>See the use case</Link>.</> },
            { title: "Continuous monitoring support", description: <>Keep reviews current between cycles. <Link href={`${uc}#continuous-monitoring-support`}>See the use case</Link>.</> },
            { title: "High-risk vendor review", description: <>Deeper oversight of critical vendors. <Link href={`${uc}#high-risk-vendor-review`}>See the use case</Link>.</> },
            { title: "Supplier evaluation", description: <>Evaluate non-software suppliers. <Link href={`${uc}#supplier-evaluation`}>See the use case</Link>.</> },
            { title: "M&A third-party review", description: <>Understand a target’s vendor dependencies. <Link href={`${uc}#m-and-a-third-party-review`}>See the use case</Link>.</> },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="limitations" title="Limitations and Human Oversight">
        <div className="notice">
          <p>
            <strong>
              Software supports a third-party risk management program; it does not replace governance or accountable
              human judgment.
            </strong>
          </p>
        </div>
        <ul>
          <li>A platform records a program; it does not create policies, tiers or ownership.</li>
          <li>No software eliminates third-party risk or guarantees regulatory compliance.</li>
          <li>Monitoring signals can be noisy or incomplete and need human triage.</li>
          <li>AI features carry the usual risks of errors, stale inputs and confidentiality.</li>
        </ul>
        <p>
          For program-level guidance, <Cite source="nist80016">NIST SP 800-161 Rev. 1</Cite> describes supply chain risk
          management practices. See also the{" "}
          <Link href={`${pages.aiVendorReview.path}#risks-and-limitations`}>risks and limitations of AI vendor review</Link>.
        </p>
      </ArticleSection>

      <FAQ
        tone="tint"
        items={[
          {
            question: "Is TPRM software the same as vendor risk management software?",
            answer: "The terms are used interchangeably in many places. TPRM is the broader label, since third parties include suppliers, partners and service providers beyond traditional vendors.",
          },
          {
            question: "Do regulations require TPRM software?",
            answer: "Supervisory and legal texts generally describe oversight outcomes, such as due diligence, monitoring and records, rather than naming software. Whether a tool is needed depends on scale and obligations, which legal and compliance teams should confirm.",
          },
          {
            question: "Does TPRM software cover fourth parties?",
            answer: "Some tools can record subcontractors and show concentration, but the information usually depends on what vendors disclose. Visibility is only as good as the evidence supplied.",
          },
        ]}
      />

      <RelatedPages
        items={[
          { href: pages.whatIsVendorReview.path, title: "What Is Vendor Review?", description: "The review activity inside a TPRM program." },
          { href: pages.vendorReviewSoftware.path, title: "Vendor Review Software", description: "Tools for the review workflow." },
          { href: pages.vendorRiskAssessmentSoftware.path, title: "Vendor Risk Assessment Software", description: "Tools for risk analysis and remediation tracking." },
          { href: pages.useCases.path, title: "AI Vendor Review Use Cases", description: "Scenarios from onboarding to monitoring." },
        ]}
      />

      <Sources keys={["interagencyGuidance", "dora", "nist80016"]} />

      <AssetCTA category="third-party risk" related={pages.whatIsVendorReview.path} />
    </>
  );
}
