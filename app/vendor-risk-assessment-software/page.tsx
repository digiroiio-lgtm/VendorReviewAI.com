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

export const metadata = pageMetadata("vendorRiskAssessmentSoftware");

const uc = pages.useCases.path;
const vra = pages.vendorRiskAssessment.path;

export default function VendorRiskAssessmentSoftwarePage() {
  return (
    <>
      <JsonLd data={pageGraph("vendorRiskAssessmentSoftware")} />

      <Hero
        eyebrow="Software category guide"
        title={pages.vendorRiskAssessmentSoftware.h1}
        breadcrumbs={breadcrumbsFor("vendorRiskAssessmentSoftware")}
        showDate
        lead="A general guide to the software category. It does not review, rank or sell any product."
      >
        <DefinitionBox term="Direct answer">
          Vendor risk assessment software is a category of tools that help teams assess third-party risk: issuing
          questionnaires, collecting evidence, tiering vendors by inherent risk, recording findings and residual risk,
          and tracking remediation. AI features may extract answers and flag gaps. Buyers should confirm that risk logic
          is configurable and transparent and that accountable people make the risk decisions.
        </DefinitionBox>
      </Hero>

      <ArticleSection id="what-is" title="What Is Vendor Risk Assessment Software?">
        <ShortAnswer>
          Software that supports the analysis of vendor risk, from context and inherent risk through evidence, findings
          and remediation.
        </ShortAnswer>
        <p>
          A <Link href={vra}>vendor risk assessment</Link> is the risk-analysis part of a vendor review. The software
          category implements that analysis in a system: questionnaires and evidence requests feed findings, findings
          lead to residual risk judgments, and remediation items are tracked to closure.
        </p>
        <p>
          It differs from <Link href={pages.vendorReviewSoftware.path}>vendor review software</Link>, which centers on the
          end-to-end review and approval workflow, and from{" "}
          <Link href={pages.thirdPartyRiskManagementSoftware.path}>third-party risk management software</Link>, which
          spans the whole vendor lifecycle. Products often combine these, so the label matters less than the functions.
        </p>
      </ArticleSection>

      <ArticleSection id="capabilities" title="What Capabilities Do Buyers Typically Evaluate?" tone="tint">
        <ShortAnswer>
          Tiering, questionnaires, evidence, risk category coverage, findings, remediation tracking and reassessment.
        </ShortAnswer>
        <RiskCategoryGrid
          variant="plain"
          columns={4}
          items={[
            { title: "Risk tiering", description: "Inherent risk questions that place a vendor in a tier and set review depth." },
            { title: "Questionnaires", description: "Standard or custom question sets with response tracking and follow-up." },
            { title: "Evidence collection", description: "Requests and storage for policies, reports, certificates and contracts." },
            { title: "Risk category coverage", description: "Cybersecurity, privacy, regulatory, operational, financial, concentration, continuity and AI risk." },
            { title: "Findings and residual risk", description: "Recording gaps and the risk that remains after controls are considered." },
            { title: "Remediation tracking", description: "Owners, due dates, status and verification of closure." },
            { title: "Reassessment scheduling", description: "Triggers by tier, date or event such as an incident or scope change." },
            { title: "Reporting", description: "Views of risk by vendor, tier or category for risk owners and auditors." },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="workflow" title="How Does the Assessment Workflow Map to Software?">
        <ShortAnswer>
          Each stage of the assessment framework corresponds to a function the software should support.
        </ShortAnswer>
        <ProcessSteps
          label="Vendor risk assessment workflow in software"
          steps={[
            { title: "Vendor", description: "Vendor record, service and owner." },
            { title: "Context", description: "Data, access and criticality captured in intake." },
            { title: "Inherent Risk", description: "Tier assigned from context answers." },
            { title: "Evidence", description: "Questionnaires and documents requested and stored." },
            { title: "Findings", description: "Gaps recorded against requirements." },
            { title: "Remediation", description: "Actions tracked with owners and dates." },
            { title: "Decision", description: "Approval or rejection recorded with rationale." },
            { title: "Monitoring", description: "Reassessment triggered by tier, date or event." },
          ]}
        />
        <p>
          The framework itself, including inherent and residual risk, is explained in the{" "}
          <Link href={vra}>vendor risk assessment guide</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="ratings" title="How Transparent Should Risk Ratings Be?" tone="tint">
        <ShortAnswer>
          Transparent enough that a reviewer can see the inputs, challenge the logic and explain the result to a decision
          maker.
        </ShortAnswer>
        <p>
          Many tools produce a tier, rating or score. A rating can organize work, but it can also suggest precision that
          does not exist. When evaluating a tool, check:
        </p>
        <ul>
          <li>Which inputs drive the rating, and whether you can see them.</li>
          <li>Whether tiers and criteria are configurable to your risk appetite.</li>
          <li>Whether a reviewer can override a rating and record why.</li>
          <li>Whether any externally sourced signals are treated as inputs rather than verdicts.</li>
        </ul>
        <p>This site does not publish a scoring formula; criteria belong to each organization.</p>
      </ArticleSection>

      <ArticleSection id="ai-vs-manual" title="AI-Assisted vs Manual Vendor Risk Assessment">
        <ComparisonTable
          caption="Where AI assistance and manual work differ in risk assessment"
          columns={["Task", "AI-assisted", "Manual"]}
          rows={[
            { label: "Questionnaire review", cells: ["Maps answers to requirements and flags blank or inconsistent responses.", "Reviewer reads each response."] },
            { label: "Evidence extraction", cells: ["Pulls dates, scope and exceptions from reports for verification.", "Reviewer locates and records them."] },
            { label: "Tiering", cells: ["Can suggest a tier from intake answers for a person to confirm.", "Reviewer applies tier criteria directly."] },
            { label: "Findings", cells: ["Drafts findings with source references.", "Reviewer writes findings from notes."] },
            { label: "Residual risk judgment", cells: ["Not a task to delegate; may inform the reviewer.", "Reviewers and risk owners decide."] },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="evaluation" title="How to Evaluate Vendor Risk Assessment Software" tone="tint">
        <ComparisonTable
          caption="Evaluation criteria for vendor risk assessment software"
          columns={["Criterion", "What to look for", "Question to ask"]}
          rows={[
            { label: "Methodology fit", cells: ["Support for your tiers, categories and residual risk logic.", "Can we reflect our existing framework without distortion?"] },
            { label: "Category coverage", cells: ["Coverage of the risk categories relevant to your vendors, including AI-related risk.", "Which categories are supported natively?"] },
            { label: "Questionnaire flexibility", cells: ["Standard sets and custom questions with conditional logic.", "How are questionnaires versioned and reused?"] },
            { label: "Rating transparency", cells: ["Visible inputs and reviewer override.", "Can every rating be explained from its inputs?"] },
            { label: "Remediation management", cells: ["Owners, dates, evidence of closure and reminders.", "How is closure verified?"] },
            { label: "AI controls", cells: ["Source citations, error handling and clear data-use terms.", "How are AI errors detected and corrected?"] },
            { label: "Reporting", cells: ["Views by tier, category and status for risk owners.", "Can reports be reproduced for an audit?"] },
          ]}
        />
        <p>
          Use the <Link href={pages.vendorReviewChecklist.path}>vendor review checklist</Link> to define the evidence the
          tool must support.
        </p>
      </ArticleSection>

      <ArticleSection id="use-cases" title="What Are Common Use Cases?">
        <RiskCategoryGrid
          variant="plain"
          columns={3}
          items={[
            { title: "Security vendor assessment", description: <>Compare security evidence with control requirements. <Link href={`${uc}#security-vendor-assessment`}>See the use case</Link>.</> },
            { title: "Privacy vendor review", description: <>Assess data handling and subprocessors. <Link href={`${uc}#privacy-vendor-review`}>See the use case</Link>.</> },
            { title: "AI vendor review", description: <>Assess AI-related vendor risk. <Link href={`${uc}#ai-vendor-review`}>See the use case</Link>.</> },
            { title: "High-risk vendor review", description: <>Deeper analysis and remediation follow-up. <Link href={`${uc}#high-risk-vendor-review`}>See the use case</Link>.</> },
            { title: "Renewal review", description: <>Reassess against the previous review. <Link href={`${uc}#renewal-review`}>See the use case</Link>.</> },
            { title: "Continuous monitoring support", description: <>Trigger reassessment when evidence changes. <Link href={`${uc}#continuous-monitoring-support`}>See the use case</Link>.</> },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="limitations" title="Limitations and Human Oversight" tone="tint">
        <div className="notice">
          <p>
            <strong>
              Assessment software can organize evidence and flag gaps. People judge risk and decide whether to accept it.
            </strong>
          </p>
        </div>
        <ul>
          <li>Ratings can create false precision and hide the reasoning behind them.</li>
          <li>False negatives are the costly error: a clean result does not mean low risk.</li>
          <li>Evidence can be stale, incomplete or outside the scope of the service.</li>
          <li>Context, such as how the vendor will actually be used, sits with people.</li>
        </ul>
        <p>
          Supply chain guidance such as <Cite source="nist80016">NIST SP 800-161 Rev. 1</Cite> frames supplier risk as
          something to identify, assess and respond to over time, which is a process no tool completes alone. The{" "}
          <Link href={`${pages.aiVendorReview.path}#risks-and-limitations`}>limits of AI in vendor review</Link> apply to
          AI features in these tools.
        </p>
      </ArticleSection>

      <FAQ
        items={[
          {
            question: "Is vendor risk assessment software just a questionnaire tool?",
            answer: "Questionnaires are one part. A complete assessment process also needs context and tiering, evidence handling, findings, remediation tracking and reassessment.",
          },
          {
            question: "Does the software decide how risky a vendor is?",
            answer: "It can calculate or suggest a rating from configured inputs. The judgment about whether residual risk is acceptable remains with accountable people.",
          },
          {
            question: "How should AI-generated findings be validated?",
            answer: "Check each finding against the source document, confirm the requirement it was compared with, and record who verified it before it influences a decision.",
          },
        ]}
      />

      <RelatedPages
        items={[
          { href: vra, title: "Vendor Risk Assessment", description: "The framework this software category implements." },
          { href: pages.vendorReviewSoftware.path, title: "Vendor Review Software", description: "The neighboring category focused on the review workflow." },
          { href: pages.thirdPartyRiskManagementSoftware.path, title: "Third-Party Risk Management Software", description: "Lifecycle platforms beyond assessment." },
          { href: pages.vendorReviewChecklist.path, title: "Vendor Review Checklist", description: "Evidence and questions to define requirements." },
        ]}
      />

      <Sources keys={["nist80016", "nistAiRmf"]} />

      <AssetCTA category="vendor risk" related={pages.vendorReviewChecklist.path} />
    </>
  );
}
