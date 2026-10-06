import Link from "next/link";
import { ArticleSection, ShortAnswer } from "@/components/ArticleSection";
import { Cite } from "@/components/Cite";
import { ComparisonTable } from "@/components/ComparisonTable";
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

export const metadata = pageMetadata("whatIsVendorReview");

export default function WhatIsVendorReviewPage() {
  return (
    <>
      <JsonLd data={pageGraph("whatIsVendorReview")} />

      <Hero
        title={pages.whatIsVendorReview.h1}
        breadcrumbs={breadcrumbsFor("whatIsVendorReview")}
        showDate
        lead="This guide explains what a vendor review examines, when it happens and how it fits with assessments, audits and third-party risk management."
      >
        <DefinitionBox term="Definition">
          A vendor review is a structured evaluation of a third-party vendor’s ability to deliver a product or service
          without creating unacceptable risk for the buyer. It combines evidence collection, issue identification,
          remediation and a documented approval decision. It is also called vendor assessment, vendor evaluation or
          supplier review, and it is one activity within third-party risk management.
        </DefinitionBox>
      </Hero>

      <ArticleSection id="purpose" title="What Is the Purpose of a Vendor Review?">
        <ShortAnswer>
          To decide, using documented evidence, whether and under what conditions the company should rely on a vendor.
        </ShortAnswer>
        <p>Companies review vendors for several connected reasons:</p>
        <ul>
          <li>
            <strong>Protect data and systems.</strong> Vendors often process company, customer or employee data or
            connect to internal systems, so their controls become part of the company’s own exposure.
          </li>
          <li>
            <strong>Avoid operational disruption.</strong> A vendor failure can interrupt a process the company depends
            on. Review tests whether the vendor can sustain the service and recover from incidents.
          </li>
          <li>
            <strong>Meet obligations.</strong> Contracts, internal policies and, in some sectors, supervisory
            expectations require oversight of third parties.
          </li>
          <li>
            <strong>Make consistent decisions.</strong> A repeatable review lets procurement and risk teams compare
            vendors on the same basis and record why an approval was given.
          </li>
        </ul>
        <p>
          Some regulated sectors have explicit expectations. Examples include the U.S. banking agencies’{" "}
          <Cite source="interagencyGuidance">interagency guidance on third-party relationships</Cite> and the EU’s{" "}
          <Cite source="dora">Digital Operational Resilience Act</Cite> for financial entities. Whether any such rule
          applies to a specific company depends on its sector and jurisdiction, and this site does not provide legal
          advice.
        </p>
      </ArticleSection>

      <ArticleSection id="what-it-includes" title="What Does a Vendor Review Include?" tone="tint">
        <ShortAnswer>
          Scoping, evidence collection, evidence analysis, issue identification, remediation, an approval decision and
          documentation.
        </ShortAnswer>
        <ComparisonTable
          caption="Components of a vendor review"
          columns={["Component", "What happens", "Typical output"]}
          rows={[
            { label: "Scoping", cells: ["Identify the service, business owner, data and systems involved.", "Risk context and review depth"] },
            { label: "Evidence collection", cells: ["Request questionnaires, policies, reports, certifications and contract terms.", "Evidence package"] },
            { label: "Evidence analysis", cells: ["Compare evidence with requirements and with the vendor’s own claims.", "Notes mapped to requirements"] },
            { label: "Issue identification", cells: ["Record gaps, inconsistencies, missing evidence and open questions.", "List of findings"] },
            { label: "Remediation", cells: ["Agree fixes, compensating controls or contract protections with the vendor.", "Remediation plan with owners and dates"] },
            { label: "Approval decision", cells: ["Accountable owners approve, approve with conditions or reject.", "Documented decision and conditions"] },
            { label: "Documentation", cells: ["Store the evidence, findings and decision rationale.", "Review record for renewal and audit"] },
          ]}
        />
        <p>
          The review is usually split across security, privacy, compliance and procurement lenses. Each is a form of
          review in its own right: <strong>security review</strong> examines controls, <strong>privacy review</strong>{" "}
          examines personal data handling, <strong>compliance review</strong> examines regulatory and contractual
          obligations, and <strong>procurement review</strong> examines commercial and supplier suitability.
        </p>
      </ArticleSection>

      <ArticleSection id="when" title="When Should a Vendor Be Reviewed?">
        <ShortAnswer>
          Before contracting, at renewal, on a periodic schedule that reflects risk, and whenever something material about
          the vendor or the relationship changes.
        </ShortAnswer>
        <ComparisonTable
          caption="Common triggers for vendor review"
          columns={["Review type", "When it happens", "Typical focus"]}
          rows={[
            { label: "Pre-contract review", cells: ["Before signing or onboarding a new vendor.", "Whether to proceed and on what conditions"] },
            { label: "Periodic review", cells: ["On a recurring schedule, often tied to risk tier.", "Whether evidence and risk are still current"] },
            { label: "Renewal review", cells: ["Ahead of a contract renewal or extension.", "Changes since the last review and contract terms"] },
            { label: "High-risk vendor review", cells: ["For vendors with sensitive data, critical services or regulatory exposure.", "Deeper evidence, testing and remediation follow-up"] },
            { label: "Event-driven review", cells: ["After an incident, ownership change, scope expansion or new data use.", "The specific change and its impact"] },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="review-vs-assessment" title="Vendor Review vs Vendor Assessment" tone="tint">
        <ShortAnswer>
          The terms are often used interchangeably. Where teams distinguish them, assessment usually names the evaluation
          of evidence or risk, and review includes the decision and follow-up as well.
        </ShortAnswer>
        <p>
          There is no single industry definition, so the safest approach is to define the terms inside your own process.
          This site uses <strong>vendor review</strong> for the end-to-end activity, <strong>vendor assessment</strong>{" "}
          and <strong>vendor evaluation</strong> for the analysis step, and{" "}
          <strong>vendor due diligence</strong> for verifying a vendor before commitment. The{" "}
          <Link href={pages.vendorRiskAssessment.path}>vendor risk assessment framework</Link> covers the risk-analysis
          part in detail.
        </p>
      </ArticleSection>

      <ArticleSection id="review-vs-audit" title="Vendor Review vs Vendor Audit">
        <ShortAnswer>
          A review typically relies on evidence the vendor provides; an audit is a formal examination against defined
          criteria that tests that evidence more directly.
        </ShortAnswer>
        <ComparisonTable
          caption="Vendor review compared with vendor audit"
          columns={["Dimension", "Vendor review", "Vendor audit"]}
          rows={[
            { label: "Purpose", cells: ["Decide whether to approve, remediate or reject a vendor.", "Verify conformance with a defined standard, contract term or control set."] },
            { label: "Evidence basis", cells: ["Mostly vendor-provided documents and responses.", "Tested evidence, which may include interviews, sampling or on-site work."] },
            { label: "Performed by", cells: ["Internal procurement, security, privacy, legal and risk teams.", "Internal audit, an independent assessor or the customer under contractual audit rights."] },
            { label: "Depth", cells: ["Scaled to the vendor’s risk context.", "Defined by the audit scope and criteria."] },
            { label: "Output", cells: ["Findings and an approval decision.", "Audit findings or a report against the criteria."] },
          ]}
        />
        <p>
          A review can trigger an audit when evidence is insufficient for a high-risk vendor, and contract{" "}
          <Link href={`${pages.vendorReviewChecklist.path}#contract`}>audit rights</Link> are what make that possible.
        </p>
      </ArticleSection>

      <ArticleSection id="review-vs-tprm" title="Vendor Review vs Third-Party Risk Management" tone="tint">
        <ShortAnswer>
          Third-party risk management (TPRM) is the ongoing program; vendor review is one activity inside it.
        </ShortAnswer>
        <p>
          A TPRM program usually covers a vendor inventory, risk tiering, policies, reviews, issue tracking, monitoring
          and offboarding. Vendor review is the point in that lifecycle where evidence is examined and a decision is
          made. Guidance such as <Cite source="nist80016">NIST SP 800-161 Rev. 1</Cite> describes supply chain risk
          management at the program level, and vendor reviews supply the vendor-level evidence that such a program needs.
        </p>
      </ArticleSection>

      <ArticleSection id="who" title="Who Performs Vendor Reviews?">
        <ShortAnswer>
          No single team. Procurement or vendor management typically coordinates, and security, privacy, legal,
          compliance and the business owner each review the areas they own.
        </ShortAnswer>
        <p>
          In smaller organizations one person may cover several lenses. In larger ones a governance, risk and compliance
          (GRC) or third-party risk team often owns the process and routes work to specialists. Whoever participates, the
          approval should be made by someone accountable for the risk being accepted. The homepage summarizes{" "}
          <Link href={`${pages.home.path}#by-team`}>who uses vendor review and why</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="process" title="Vendor Review Process" tone="tint">
        <ShortAnswer>
          Eight steps: intake, risk context, evidence request, analysis, findings, remediation, decision and monitoring.
        </ShortAnswer>
        <ProcessSteps
          variant="list"
          label="Vendor review process"
          steps={[
            { title: "Intake and scoping", description: "The business owner describes what the vendor will do and for whom.", input: "Service description, business owner, estimated spend", output: "Defined scope of the review" },
            { title: "Risk context", description: "The team determines what data, systems and processes the vendor will touch and how critical the service is.", input: "Data types, system access, criticality", output: "Risk tier and review depth" },
            { title: "Evidence request", description: "The vendor is asked for the documents that match the review depth.", input: "Evidence request list", output: "Questionnaire, policies, reports, draft contract" },
            { title: "Evidence analysis", description: "Reviewers compare evidence with requirements and check claims against supporting documents.", input: "Vendor evidence and internal requirements", output: "Annotated evidence mapped to requirements" },
            { title: "Findings", description: "Gaps, inconsistencies and missing evidence are recorded and rated by the reviewing team.", input: "Annotated evidence", output: "Findings list with sources" },
            { title: "Remediation", description: "The vendor fixes issues, or the team agrees compensating controls or contract protections.", input: "Findings", output: "Remediation plan with owners and dates" },
            { title: "Decision", description: "Accountable owners approve, approve with conditions, or reject and record why.", input: "Findings and remediation status", output: "Documented decision" },
            { title: "Monitoring", description: "The team tracks conditions, incidents, changes and the next review date.", input: "Decision conditions, vendor updates", output: "Review schedule and change log" },
          ]}
        />
        <h3>An illustrative example</h3>
        <p>
          Consider a hypothetical company adopting a cloud tool that will store employee records. The data is sensitive,
          so the review is deep: security reviews controls, privacy reviews data location and subprocessors, and legal
          reviews liability and data return terms. The reviewers find that the vendor supplied a policy but no recent
          testing evidence. The vendor provides a summary, the team records one condition in the contract, and the
          business owner approves. The record then drives the next renewal review. This example is illustrative and does
          not describe a real vendor.
        </p>
        <p>
          AI can assist with the analysis and findings steps by extracting facts and flagging gaps. Read{" "}
          <Link href={pages.aiVendorReview.path}>how AI-assisted vendor review works</Link> for the boundaries.
        </p>
      </ArticleSection>

      <FAQ
        title="Common Vendor Review Questions"
        id="faq"
        items={[
          { question: "How long does a vendor review take?", answer: "There is no universal duration. It depends on the vendor’s risk context, how quickly evidence arrives and how many findings need remediation." },
          { question: "Do all vendors need the same depth of review?", answer: "No. Depth is usually scaled to risk: data sensitivity, system access, criticality and regulatory exposure. Lower-risk vendors typically receive a lighter review." },
          { question: "Is a certification or attestation report enough?", answer: "It is useful evidence, but reviewers still check its scope, issuer, date and exclusions, and whether it covers the service being purchased." },
          { question: "What happens if a vendor has findings?", answer: "The team can ask for remediation, accept the risk with a named owner, add contract protections or decline the vendor. The choice belongs to accountable decision makers." },
          {
            question: "Can AI be used in vendor review?",
            answer: (
              <>
                Yes, for tasks such as extracting information and flagging missing evidence, with human verification and
                decision-making. See <Link href={pages.aiVendorReview.path}>AI vendor review</Link> for details.
              </>
            ),
          },
        ]}
      />

      <RelatedPages
        items={[
          { href: pages.vendorRiskAssessment.path, title: "Vendor Risk Assessment", description: "Next: how risk is categorized, tiered and evaluated inside a review." },
          { href: pages.vendorReviewChecklist.path, title: "Vendor Review Checklist", description: "What to ask and which evidence to request before approval." },
          { href: pages.aiVendorReview.path, title: "AI Vendor Review", description: "Where AI can assist the process, and where it should not." },
        ]}
      />

      <Sources keys={["interagencyGuidance", "dora", "nist80016"]} />

      <CTA
        title="Next: assess vendor risk"
        primary={{ href: pages.vendorRiskAssessment.path, label: "Vendor Risk Assessment" }}
        secondary={{ sale: true, label: siteConfig.cta.label }}
      >
        Move from the review process to the risk categories, inherent and residual risk, and a practical framework.
      </CTA>
    </>
  );
}
