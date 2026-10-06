import Link from "next/link";
import { ArticleSection, ShortAnswer } from "@/components/ArticleSection";
import { Cite } from "@/components/Cite";
import { ChecklistGroup, ChecklistSection } from "@/components/ChecklistSection";
import { CTA } from "@/components/CTA";
import { DefinitionBox } from "@/components/DefinitionBox";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedPages } from "@/components/RelatedPages";
import { Sources } from "@/components/Sources";
import { breadcrumbsFor, pageGraph } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { pages } from "@/lib/pages";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata("vendorReviewChecklist");

export default function VendorReviewChecklistPage() {
  return (
    <>
      <JsonLd data={pageGraph("vendorReviewChecklist")} />

      <Hero
        title={pages.vendorReviewChecklist.h1}
        breadcrumbs={breadcrumbsFor("vendorReviewChecklist")}
        showDate
        lead="Work through each section, request the evidence listed, and record what you find. Depth should match the vendor’s risk context."
      >
        <DefinitionBox term="Definition">
          A vendor review checklist is a structured list of questions and evidence requests used to assess a vendor before
          approval. It covers company background, security, privacy, compliance, financial and operational stability,
          contract terms and, where relevant, AI-related risk. It is also called a vendor due diligence checklist,
          supplier review checklist or third-party due diligence checklist.
        </DefinitionBox>
      </Hero>

      <ArticleSection id="how-to-use" title="How Do I Use This Checklist?">
        <ShortAnswer>
          Scope by risk, request the evidence, record a status for each item and carry open items into remediation and
          the approval decision.
        </ShortAnswer>
        <ProcessSteps
          variant="list"
          label="Using the vendor review checklist"
          steps={[
            { title: "Scope by risk context", description: "Decide which sections apply and how deep to go, using the factors in the vendor risk assessment guide.", input: "Data, access, criticality", output: "Applicable sections" },
            { title: "Request evidence", description: "Ask the vendor for the documents listed under each item.", input: "Checklist sections", output: "Evidence request" },
            { title: "Record status", description: "Mark each item Met, Partial, Gap or Not applicable, and note the source document.", input: "Vendor evidence", output: "Completed checklist" },
            { title: "Escalate and decide", description: "Carry Partial and Gap items into remediation and the approval decision.", input: "Completed checklist", output: "Findings and decision" },
          ]}
        />
        <p>
          The checklist is a starting point, not a standard or a guarantee. Applicable requirements depend on the
          vendor, the data and the buyer’s sector and jurisdiction. See the{" "}
          <Link href={pages.vendorRiskAssessment.path}>vendor risk assessment framework</Link> for how to scope depth.
          The checklist can also serve as the requirements list when evaluating{" "}
          <Link href={pages.vendorReviewSoftware.path}>vendor review software</Link>.
        </p>
      </ArticleSection>

      <ChecklistSection
        id="company-and-ownership"
        title="Company and Ownership"
        tone="tint"
        intro="Confirm who you are contracting with and what they depend on."
        items={[
          { label: "Legal entity.", detail: "Registered name, entity type and the exact entity signing the contract." },
          { label: "Operating history.", detail: "How long the vendor has operated and how long the service has been offered." },
          { label: "Ownership.", detail: "Parent company, major owners and any recent or pending ownership change." },
          { label: "Jurisdictions.", detail: "Where the vendor is incorporated and operates, and where staff and data sit." },
          { label: "Key dependencies.", detail: "Critical suppliers, hosting providers and subcontractors behind the service." },
        ]}
      />

      <ChecklistSection
        id="security"
        title="Security"
        intro={
          <>
            Evidence should cover the service you are buying. Certifications are useful inputs, for example{" "}
            <Cite source="iso27001">ISO/IEC 27001</Cite>, but check the scope, issuer, date and exclusions rather than
            treating the certificate as proof of fit.
          </>
        }
        items={[
          { label: "Security policies.", detail: "Current, approved documents covering information security governance." },
          { label: "Access controls.", detail: "How access is granted, reviewed and removed; use of multi-factor authentication and least privilege." },
          { label: "Encryption.", detail: "Protection of data in transit and at rest, and how keys are managed." },
          { label: "Incident response.", detail: "A documented plan, notification commitments and evidence it has been tested." },
          { label: "Vulnerability management.", detail: "Scanning, patching practice and summaries of independent security testing." },
          { label: "Certifications where applicable.", detail: "Reports or certificates that are current and in scope for the service." },
        ]}
      />

      <ChecklistSection
        id="privacy"
        title="Privacy"
        tone="tint"
        intro={
          <>
            Where the vendor processes personal data, confirm what it does with it. For example, EU rules on processors
            include requirements on subprocessors and processing terms (see{" "}
            <Cite source="gdpr">GDPR Article 28</Cite>); whether any law applies to you is a question for legal and
            privacy counsel.
          </>
        }
        items={[
          { label: "Personal data handled.", detail: "Categories of data and categories of individuals." },
          { label: "Processing purposes.", detail: "What the vendor does with the data and whether it uses it for its own purposes." },
          { label: "Subprocessors.", detail: "Who else processes the data, where, and how you are told about changes." },
          { label: "Retention.", detail: "How long data is kept, and deletion or return at the end of the contract." },
          { label: "Data location.", detail: "Where data is stored and accessed, including remote access, and transfer mechanisms." },
          { label: "Breach procedures.", detail: "Detection, notification timelines and cooperation with the buyer." },
        ]}
      />

      <ChecklistSection
        id="compliance"
        title="Compliance"
        intro="Confirm that the vendor can support the obligations that apply to you, as determined by your compliance and legal teams."
        items={[
          { label: "Applicable regulatory requirements.", detail: "Which sector, privacy or security rules relate to the service and who is responsible for each." },
          { label: "Policies.", detail: "Compliance, ethics, anti-corruption and related policies relevant to the relationship." },
          { label: "Attestations.", detail: "Independent reports or statements, with scope, period and noted exceptions." },
          { label: "Contractual obligations.", detail: "Commitments the vendor makes that flow from your own regulatory or customer duties." },
        ]}
      />

      <ChecklistSection
        id="financial-and-operational"
        title="Financial and Operational"
        tone="tint"
        intro="Assess whether the vendor can keep delivering the service."
        items={[
          { label: "Financial stability.", detail: "Financial summaries or other indicators of viability proportionate to the service’s criticality." },
          { label: "Service continuity.", detail: "Support model, capacity, key-person and single-point-of-failure risks." },
          { label: "Insurance.", detail: "Relevant coverage, such as cyber and professional liability, and its limits." },
          { label: "Disaster recovery.", detail: "Recovery objectives, backups and results of recovery tests." },
          { label: "Business continuity.", detail: "Plans for staff, site and supplier disruption, and how recently they were exercised." },
        ]}
      />

      <ChecklistSection
        id="contract"
        title="Contract"
        intro="Legal review interprets these terms; the checklist ensures they are examined."
        items={[
          { label: "Liability.", detail: "Caps, exclusions and how they compare with the potential impact of an incident." },
          { label: "Termination.", detail: "Rights to end the contract, notice periods and transition support." },
          { label: "SLAs.", detail: "Availability and support commitments, measurement and remedies." },
          { label: "Audit rights.", detail: "Your ability to request evidence or audit, directly or through an assessor." },
          { label: "Data obligations.", detail: "Use limits, security duties, breach notification, return and deletion." },
          { label: "Subcontracting.", detail: "Approval or notice for subcontractors and flow-down of obligations." },
        ]}
      />

      <ChecklistSection
        id="ai-vendor-risk"
        title="AI Vendor Risk"
        tone="tint"
        intro={
          <>
            Where the vendor uses AI in the service or with your data, add the items below. The{" "}
            <Cite source="nistAiRmf">NIST AI Risk Management Framework</Cite> is one reference for AI risk topics.
          </>
        }
        items={[
          { label: "AI use.", detail: "Which features use AI, what data they receive and whether they can be disabled." },
          { label: "Model providers.", detail: "Whether third-party models are used, who they are and how data is shared with them." },
          { label: "Training data claims.", detail: "Whether your data is used to train or improve models, and what the vendor states in writing." },
          { label: "Data retention.", detail: "How prompts, inputs and outputs are stored, for how long and who can access them." },
          { label: "Output risks.", detail: "Known error modes, such as inaccurate or biased outputs, and how they are mitigated." },
          { label: "Explainability.", detail: "Whether outputs can be traced to sources or reasons that a person can review." },
          { label: "Human oversight.", detail: "Where people review or can override AI outputs in the vendor’s process and in yours." },
        ]}
      />

      <ArticleSection id="printable-checklist" title="Printable Quick-Reference Checklist">
        <p className="no-print">
          A compact, one-page view of the checklist. Use your browser’s print function (Ctrl/Cmd + P) to print this page;
          navigation and banners are hidden in print. No PDF is required.
        </p>
        <div className="sheet">
          <div className="sheet__fields" aria-hidden="true">
            <div className="sheet__field">Vendor</div>
            <div className="sheet__field">Reviewer</div>
            <div className="sheet__field">Risk tier</div>
            <div className="sheet__field">Date</div>
          </div>
          <div className="sheet__groups">
            <ChecklistGroup title="Company and ownership" items={[{ label: "Legal entity confirmed" }, { label: "Ownership and changes understood" }, { label: "Jurisdictions identified" }, { label: "Key dependencies listed" }]} />
            <ChecklistGroup title="Security" items={[{ label: "Policies current" }, { label: "Access controls and encryption" }, { label: "Incident response tested" }, { label: "Vulnerability management" }, { label: "Certifications in scope and current" }]} />
            <ChecklistGroup title="Privacy" items={[{ label: "Personal data and purposes known" }, { label: "Subprocessors identified" }, { label: "Retention and deletion terms" }, { label: "Data location and transfers" }, { label: "Breach procedures" }]} />
            <ChecklistGroup title="Compliance" items={[{ label: "Applicable requirements identified" }, { label: "Policies reviewed" }, { label: "Attestations reviewed" }, { label: "Contract obligations aligned" }]} />
            <ChecklistGroup title="Financial and operational" items={[{ label: "Financial stability considered" }, { label: "Insurance confirmed" }, { label: "Disaster recovery tested" }, { label: "Business continuity plans" }]} />
            <ChecklistGroup title="Contract" items={[{ label: "Liability" }, { label: "Termination and exit" }, { label: "SLAs" }, { label: "Audit rights" }, { label: "Data obligations and subcontracting" }]} />
            <ChecklistGroup title="AI vendor risk (if relevant)" items={[{ label: "AI use and model providers" }, { label: "Training data and retention" }, { label: "Output risks and explainability" }, { label: "Human oversight" }]} />
          </div>
          <p className="status-key">
            Status key: <strong>Met</strong> · <strong>Partial</strong> · <strong>Gap</strong> · <strong>N/A</strong>. Record
            the status and the source document beside each item. Decision: Approve · Approve with conditions · Reject.
          </p>
        </div>
      </ArticleSection>

      <FAQ
        tone="tint"
        items={[
          { question: "Does every vendor need the full checklist?", answer: "No. Use the sections and depth that match the vendor’s data, access and criticality. Lower-risk vendors typically need fewer items." },
          { question: "Is a SOC 2 or ISO 27001 report enough?", answer: "It is useful evidence, but reviewers still confirm that the report covers the service being purchased, is recent and has no exceptions that matter for the use case." },
          { question: "Can the checklist be used for non-software suppliers?", answer: "Yes, with adjustments. Security and privacy items may matter less, while operational, financial, continuity and contract items usually matter more." },
          {
            question: "Where does AI fit in checklist review?",
            answer: (
              <>
                AI can help extract answers from documents and flag missing items against the checklist, with people
                verifying the results. See <Link href={pages.aiVendorReview.path}>AI vendor review</Link>.
              </>
            ),
          },
        ]}
      />

      <RelatedPages
        items={[
          { href: pages.aiVendorReview.path, title: "AI Vendor Review", description: "Next: how AI can help analyze the evidence this checklist asks for." },
          { href: pages.vendorRiskAssessment.path, title: "Vendor Risk Assessment", description: "The risk categories and tiering behind how deep to go." },
          { href: pages.useCases.path, title: "Use Cases", description: "Review scenarios from SaaS onboarding to renewals." },
        ]}
      />

      <Sources keys={["iso27001", "gdpr", "nistAiRmf"]} />

      <CTA
        title="Next: speed up evidence analysis"
        primary={{ href: pages.aiVendorReview.path, label: "AI Vendor Review" }}
        secondary={{ sale: true, label: siteConfig.cta.label }}
      >
        See where AI can assist with checklist evidence and where people must decide.
      </CTA>
    </>
  );
}
