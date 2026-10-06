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
import { RiskCategoryGrid } from "@/components/RiskCategoryGrid";
import { Sources } from "@/components/Sources";
import { breadcrumbsFor, pageGraph } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { pages } from "@/lib/pages";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata("vendorRiskAssessment");

export default function VendorRiskAssessmentPage() {
  return (
    <>
      <JsonLd data={pageGraph("vendorRiskAssessment")} />

      <Hero
        title={pages.vendorRiskAssessment.h1}
        breadcrumbs={breadcrumbsFor("vendorRiskAssessment")}
        showDate
        lead="Use this framework to organize vendor risk by category, evidence and decision, without relying on a single score."
      >
        <DefinitionBox term="Definition">
          A vendor risk assessment is the process of identifying, analyzing and evaluating the risks a third-party vendor
          could introduce, such as cybersecurity, privacy, regulatory, operational and financial risk, so that decision
          makers can proceed, require remediation or decline. It is also called third-party risk assessment, supplier
          risk assessment or vendor risk review.
        </DefinitionBox>
      </Hero>

      <ArticleSection id="what-is" title="What Is a Vendor Risk Assessment?">
        <ShortAnswer>
          The risk-analysis part of vendor review: it asks what could go wrong with this vendor, how likely and how
          severe it would be, and what controls reduce it.
        </ShortAnswer>
        <p>
          A <Link href={pages.whatIsVendorReview.path}>vendor review</Link> covers the whole path from intake to approval.
          The risk assessment is the analysis inside it. Both belong to the wider third-party risk management program,
          which also covers inventory, tiering, monitoring and offboarding.{" "}
          <Cite source="nist80016">NIST SP 800-161 Rev. 1</Cite> is a widely referenced source for supply chain risk
          management practices, particularly for cybersecurity.
        </p>
        <p>
          This page deliberately avoids a scoring formula. Scoring models are specific to each organization’s risk
          appetite, data and regulatory context, and a generic formula can suggest precision that does not exist.
        </p>
      </ArticleSection>

      <ArticleSection id="framework" title="The Vendor Risk Assessment Framework" tone="tint">
        <ShortAnswer>
          Vendor → Context → Inherent Risk → Evidence → Findings → Remediation → Decision → Monitoring.
        </ShortAnswer>
        <ProcessSteps
          label="Vendor risk assessment framework"
          steps={[
            { title: "Vendor", description: "Identify the vendor, service and owner." },
            { title: "Context", description: "Define data, systems, processes and criticality." },
            { title: "Inherent Risk", description: "Judge risk before considering the vendor’s controls." },
            { title: "Evidence", description: "Collect proof of controls that reduce that risk." },
            { title: "Findings", description: "Record gaps and the residual risk that remains." },
            { title: "Remediation", description: "Agree fixes, compensating controls or contract terms." },
            { title: "Decision", description: "Approve, approve with conditions or reject." },
            { title: "Monitoring", description: "Track changes and reassess on schedule or on events." },
          ]}
        />
        <ComparisonTable
          caption="Framework stages: key question and typical output"
          columns={["Stage", "Key question", "Typical output"]}
          rows={[
            { label: "Vendor", cells: ["Who is the vendor and what will it do?", "Vendor record and business owner"] },
            { label: "Context", cells: ["What does the vendor touch and how critical is it?", "Documented risk context"] },
            { label: "Inherent risk", cells: ["How risky is this relationship by nature?", "Risk tier or qualitative rating"] },
            { label: "Evidence", cells: ["What proves controls exist and work?", "Evidence package"] },
            { label: "Findings", cells: ["Where does evidence fall short of requirements?", "Findings with residual risk"] },
            { label: "Remediation", cells: ["What will close or reduce each gap?", "Plan with owners and dates"] },
            { label: "Decision", cells: ["Is the remaining risk acceptable?", "Documented approval, conditions or rejection"] },
            { label: "Monitoring", cells: ["What changes would alter the risk?", "Review schedule and triggers"] },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="deeper-review" title="Which Vendors Require Deeper Review?">
        <ShortAnswer>
          Vendors whose failure or compromise would cause greater harm: those with sensitive data, deep system access,
          critical services or regulatory exposure.
        </ShortAnswer>
        <p>Factors commonly used to decide review depth include:</p>
        <ul>
          <li>Access to sensitive, regulated or large volumes of personal data.</li>
          <li>Connections to production systems, networks or identity infrastructure.</li>
          <li>Criticality of the service and how hard the vendor would be to replace.</li>
          <li>Regulatory exposure created by the relationship.</li>
          <li>Reliance on subcontractors or concentration with a single provider.</li>
          <li>Operations in jurisdictions with different legal or geopolitical conditions.</li>
          <li>Use of AI in the service, especially with company or customer data.</li>
          <li>Prior incidents or unresolved findings.</li>
        </ul>
        <p>
          Each organization sets its own thresholds. The <Link href={pages.vendorReviewChecklist.path}>vendor review
          checklist</Link> shows how deeper reviews extend the evidence requested.
        </p>
      </ArticleSection>

      <ArticleSection id="risk-categories" title="Vendor Risk Categories" tone="tint">
        <ShortAnswer>
          Eleven categories cover most vendor risk. A given vendor may be material in only a few of them.
        </ShortAnswer>
        <RiskCategoryGrid
          columns={3}
          items={[
            { tag: "Category 1", title: "Cybersecurity risk", description: "Exposure from weak controls, compromise or unpatched systems at the vendor.", pointsLabel: "Typical evidence", points: ["Security policies", "Access control and encryption descriptions", "Test summaries and incident response plan"] },
            { tag: "Category 2", title: "Privacy risk", description: "Mishandling of personal data, unauthorized processing or unclear subprocessing.", pointsLabel: "Typical evidence", points: ["Data processing terms", "Subprocessor list", "Retention and breach procedures"] },
            { tag: "Category 3", title: "Regulatory risk", description: "The relationship causes or fails to meet obligations that apply to the buyer.", pointsLabel: "Typical evidence", points: ["Applicable attestations", "Compliance policies", "Contract obligations"] },
            { tag: "Category 4", title: "Operational risk", description: "Service failure, poor support or inability to deliver as promised.", pointsLabel: "Typical evidence", points: ["Service levels and history", "Support model", "Capacity and dependency information"] },
            { tag: "Category 5", title: "Financial risk", description: "Vendor instability that threatens continued delivery.", pointsLabel: "Typical evidence", points: ["Financial summaries", "Insurance certificates", "Ownership and funding information"] },
            { tag: "Category 6", title: "Concentration risk", description: "Over-reliance on one vendor, or many critical services sharing one provider.", pointsLabel: "Typical evidence", points: ["Dependency map", "Alternatives and exit options", "Shared infrastructure information"] },
            { tag: "Category 7", title: "Business continuity", description: "Inability to recover and continue service after a disruption.", pointsLabel: "Typical evidence", points: ["Continuity and recovery plans", "Test results", "Recovery objectives"] },
            { tag: "Category 8", title: "Geographic risk", description: "Exposure from where the vendor, its staff or its data operate.", pointsLabel: "Typical evidence", points: ["Data locations", "Operating jurisdictions", "Transfer mechanisms"] },
            { tag: "Category 9", title: "Reputational risk", description: "Vendor conduct or incidents that harm the buyer’s standing.", pointsLabel: "Typical evidence", points: ["Public incident history", "Litigation or enforcement information", "Business practices"] },
            { tag: "Category 10", title: "Subcontractor and fourth-party risk", description: "Risk from the vendor’s own suppliers, which the buyer does not contract with directly.", pointsLabel: "Typical evidence", points: ["Subcontractor list", "Flow-down terms", "Oversight of critical subcontractors"] },
            { tag: "Category 11", title: "AI-related vendor risk", description: "Risks from AI features: data use, model providers, output errors and limited oversight.", pointsLabel: "Typical evidence", points: ["AI use and model provider disclosures", "Data-use and retention terms", "Human oversight and explainability"] },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="evidence" title="What Evidence Should Be Collected?">
        <ShortAnswer>
          Evidence that shows whether the controls relevant to each risk category exist, are current and cover the
          service being purchased.
        </ShortAnswer>
        <p>
          The evidence listed under each risk category above is a starting point. Principles that apply across all of
          them:
        </p>
        <ul>
          <li>Match the request to the vendor’s risk context so that low-risk vendors are not over-burdened.</li>
          <li>Prefer evidence that is dated and scoped to the actual service.</li>
          <li>Treat certifications and attestation reports as inputs and check their scope and exclusions.</li>
          <li>Keep source documents with the findings so decisions can be traced.</li>
        </ul>
        <p>
          The <Link href={pages.vendorReviewChecklist.path}>vendor review checklist</Link> lists specific questions and
          evidence by area, and AI can help with{" "}
          <Link href={pages.aiVendorReview.path}>extracting and comparing that evidence</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="prioritization" title="How Are Vendors Prioritized?" tone="tint">
        <ShortAnswer>
          Most programs group vendors into tiers based on risk context, then apply deeper review to higher tiers.
        </ShortAnswer>
        <ComparisonTable
          caption="Illustrative tiering approach (tier names and criteria vary by organization)"
          columns={["Tier", "Typical characteristics", "Typical review depth"]}
          rows={[
            { label: "Critical or high", cells: ["Sensitive data, deep access or a service the business cannot easily do without.", "Full evidence set, detailed analysis, remediation follow-up and frequent reassessment."] },
            { label: "Moderate", cells: ["Limited data or access, or a replaceable service.", "Standard questionnaire and key documents, with periodic reassessment."] },
            { label: "Low", cells: ["No sensitive data and little operational impact.", "Lightweight screening and review at renewal."] },
          ]}
        />
        <p>
          This is an illustration, not a standard or a formula. Organizations should define their own tiers and criteria,
          document them and apply them consistently.
        </p>
      </ArticleSection>

      <ArticleSection id="inherent-risk" title="What Is Inherent Risk?">
        <ShortAnswer>
          The level of risk a vendor relationship carries by its nature, before accounting for the vendor’s controls.
        </ShortAnswer>
        <p>
          Inherent risk depends on the data involved, the access granted, how critical the service is and the regulatory
          setting. A payroll provider that handles employee records has a higher inherent risk than a vendor that supplies
          office furniture, regardless of how well either operates.
        </p>
      </ArticleSection>

      <ArticleSection id="residual-risk" title="What Is Residual Risk?" tone="tint">
        <ShortAnswer>
          The risk that remains after considering the vendor’s controls, the evidence for them and any remediation.
        </ShortAnswer>
        <p>
          Residual risk is what decision makers accept, reduce further or reject. Continuing the example, the payroll
          provider’s inherent risk is high. If review shows strong access controls, encryption and tested recovery
          plans, residual risk may be lower; if evidence is thin, it may remain high. The conclusion belongs to the
          reviewers, and it can change as the vendor changes.
        </p>
        <ProcessSteps
          label="From inherent to residual risk"
          steps={[
            { title: "Inherent risk", description: "Risk by nature, before controls." },
            { title: "Controls and evidence", description: "What the vendor does and can show." },
            { title: "Residual risk", description: "Risk that remains after controls." },
            { title: "Remediation", description: "Actions to reduce what remains." },
            { title: "Decision", description: "Accept, condition or reject." },
            { title: "Monitoring", description: "Revisit as conditions change." },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="after-findings" title="What Happens After Findings?">
        <ShortAnswer>
          Remediation, a documented risk decision and monitoring.
        </ShortAnswer>
        <ul>
          <li><strong>Remediate:</strong> the vendor closes the gap, ideally with an agreed date.</li>
          <li><strong>Compensate:</strong> the buyer adds a control on its side, such as restricting data shared.</li>
          <li><strong>Contract:</strong> terms address the exposure through liability, audit rights, notification duties or exit provisions.</li>
          <li><strong>Accept:</strong> an accountable owner formally accepts the remaining risk and records why.</li>
          <li><strong>Decline:</strong> the relationship does not proceed.</li>
        </ul>
        <p>
          Monitoring then keeps the decision current through renewal reviews, expiring evidence and event-driven
          reassessment. See the <Link href={pages.useCases.path}>use cases</Link> for renewal and monitoring scenarios.
        </p>
      </ArticleSection>

      <FAQ
        tone="tint"
        items={[
          { question: "What is the difference between vendor risk assessment and vendor risk management?", answer: "Assessment is the analysis of a specific vendor’s risk. Management is the continuing program that includes assessment, tiering, monitoring and offboarding." },
          { question: "Do I need a numeric risk score?", answer: "Not necessarily. Many teams use qualitative tiers. If a score is used, its inputs and limits should be documented, and it should support rather than replace judgment." },
          { question: "How often should vendors be reassessed?", answer: "Frequency usually follows risk tier and events such as incidents, scope changes or renewals. There is no universal interval." },
          {
            question: "Can AI assess vendor risk?",
            answer: (
              <>
                AI can assist with extracting evidence and flagging gaps, but people judge risk and decide. See{" "}
                <Link href={pages.aiVendorReview.path}>AI vendor review</Link>.
              </>
            ),
          },
        ]}
      />

      <RelatedPages
        items={[
          { href: pages.vendorReviewChecklist.path, title: "Vendor Review Checklist", description: "Next: the questions and evidence that put this framework into practice." },
          { href: pages.whatIsVendorReview.path, title: "What Is Vendor Review?", description: "How the assessment fits into the larger review process." },
          { href: pages.aiVendorReview.path, title: "AI Vendor Review", description: "How AI can assist evidence analysis in the framework." },
        ]}
      />

      <Sources keys={["nist80016"]} />

      <CTA
        title="Next: put the framework into practice"
        primary={{ href: pages.vendorReviewChecklist.path, label: "Use the Checklist" }}
        secondary={{ sale: true, label: siteConfig.cta.label }}
      >
        The checklist turns each risk category into specific questions and evidence requests.
      </CTA>
    </>
  );
}
