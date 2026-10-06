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

export const metadata = pageMetadata("aiVendorReview");

export default function AiVendorReviewPage() {
  return (
    <>
      <JsonLd data={pageGraph("aiVendorReview")} />

      <Hero
        title={pages.aiVendorReview.h1}
        breadcrumbs={breadcrumbsFor("aiVendorReview")}
        showDate
        lead={
          <>
            AI-assisted vendor review should support human decision-making, not replace accountable risk, legal, security
            or procurement judgment.
          </>
        }
      >
        <DefinitionBox term="Definition">
          AI vendor review is the use of artificial intelligence, typically language models plus document extraction and
          classification, to assist reviewers in analyzing vendor evidence such as questionnaires, policies, contracts
          and certifications. It produces extracted data, comparisons, draft findings and flags that people verify before
          any decision is made.
        </DefinitionBox>
      </Hero>

      <ArticleSection id="core-concepts" title="What Are the Core Tasks in AI Vendor Review?">
        <ShortAnswer>
          Four tasks do most of the work: document analysis, evidence extraction, questionnaire analysis and risk
          flagging, all under human oversight.
        </ShortAnswer>
        <dl className="defs">
          <dt>Document analysis</dt>
          <dd>Reading vendor documents such as policies, reports and contracts and summarizing or classifying their content.</dd>
          <dt>Evidence extraction</dt>
          <dd>Pulling specific facts, such as data locations, certificate dates or clause terms, into structured fields with source references.</dd>
          <dt>Questionnaire analysis</dt>
          <dd>Reviewing questionnaire responses for completeness, consistency and fit with the questions asked and the requirements set.</dd>
          <dt>Risk flagging</dt>
          <dd>Marking gaps, contradictions or deviations from requirements so a reviewer can examine them first.</dd>
          <dt>Human oversight</dt>
          <dd>The verification, judgment and approval that people perform on every AI output used in a decision.</dd>
        </dl>
        <p>
          These tasks sit inside a normal <Link href={pages.whatIsVendorReview.path}>vendor review process</Link>. They
          change how evidence is read, not who is accountable for the decision.
        </p>
      </ArticleSection>

      <ArticleSection id="what-can-ai-automate" title="What Can AI Automate in Vendor Review?" tone="tint">
        <ShortAnswer>
          AI can automate or accelerate first-pass reading, extraction, comparison and organization of evidence. It does
          not automate judgment.
        </ShortAnswer>
        <ComparisonTable
          caption="AI-assisted tasks, their inputs and the human check each needs"
          columns={["Task", "Input", "AI-assisted output", "Human check"]}
          rows={[
            { label: "Document extraction", cells: ["Policies, reports, certificates", "Structured fields such as dates, scope and named systems", "Verify against the source"] },
            { label: "Questionnaire review", cells: ["Completed questionnaires", "Answers mapped to questions; blank, vague or inconsistent responses flagged", "Judge whether answers are adequate"] },
            { label: "Policy comparison", cells: ["Vendor policies, internal requirements", "Side-by-side gaps and deviations", "Decide which gaps matter"] },
            { label: "Security evidence analysis", cells: ["Test summaries, control descriptions, architecture notes", "Summary of controls, exceptions and unsupported claims", "Security team confirms severity"] },
            { label: "Privacy evidence review", cells: ["Privacy notices, data processing terms, subprocessor lists", "Data types, purposes, locations, retention and subprocessors", "Privacy and legal teams assess"] },
            { label: "Compliance evidence review", cells: ["Attestations, policies, regulatory statements", "Evidence mapped to defined requirements", "Compliance confirms applicability"] },
            { label: "Contract clause extraction", cells: ["Agreements and addenda", "Located clauses: liability, termination, audit rights, data terms", "Legal interprets the language"] },
            { label: "Risk flagging", cells: ["All collected evidence", "Prioritized list of potential issues", "Reviewer validates each flag"] },
            { label: "Missing evidence detection", cells: ["Evidence request list, submitted files", "List of absent, outdated or incomplete items", "Reviewer decides what to request"] },
            { label: "Vendor comparison", cells: ["Evidence from several vendors", "Normalized comparison on the same criteria", "Procurement weighs commercial and risk trade-offs"] },
            { label: "Issue summarization", cells: ["Findings and notes", "Draft summaries and follow-up questions", "Reviewer edits and owns the wording"] },
            { label: "Review prioritization", cells: ["Intake data, risk context", "Suggested order or depth of review", "GRC or risk owner sets the final tier"] },
            { label: "Monitoring support", cells: ["Updated documents, change notices, expiry dates", "Alerts about changes or lapsed evidence", "Risk owner decides whether to reassess"] },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="human-controlled" title="What Should Remain Human-Controlled?">
        <ShortAnswer>
          Decisions that involve judgment, accountability, interpretation or negotiation.
        </ShortAnswer>
        <ul>
          <li><strong>Approval, conditional approval and rejection</strong> of a vendor.</li>
          <li><strong>Risk acceptance</strong>, which needs a named owner who answers for it.</li>
          <li><strong>Legal interpretation</strong> of contract terms and regulatory obligations.</li>
          <li><strong>Materiality and context</strong>: how much a finding matters for this vendor, data and business process.</li>
          <li><strong>Negotiation</strong> of remediation, exceptions and contract changes.</li>
          <li><strong>Communication with the vendor</strong> about findings and conditions.</li>
        </ul>
        <p>
          Reviewers should also verify any AI output that feeds a decision, preferably against cited source text. The
          boundary between assistance and decision is the most important design choice in an AI-assisted process.
        </p>
      </ArticleSection>

      <ArticleSection id="workflow" title="AI Vendor Review Workflow" tone="tint">
        <ShortAnswer>
          Define requirements first, then let AI process evidence against them, and put human verification before any
          finding or decision is final.
        </ShortAnswer>
        <ProcessSteps
          variant="list"
          label="AI-assisted vendor review workflow"
          steps={[
            { title: "Define requirements", description: "Write the criteria the vendor will be assessed against, since AI output is only as good as the criteria it is given.", input: "Internal policies, control requirements, tier definitions", output: "Review criteria" },
            { title: "Collect evidence", description: "Gather the documents requested from the vendor.", input: "Evidence request list", output: "Evidence package" },
            { title: "Ingest and extract", description: "Convert documents to analyzable text and extract the relevant facts with source references.", input: "Evidence package", output: "Structured, source-linked data" },
            { title: "Analyze against criteria", description: "Compare extracted facts with requirements and with other documents.", input: "Structured data and criteria", output: "Draft comparison, gaps and inconsistencies" },
            { title: "Flag and summarize", description: "Produce draft findings, missing-evidence lists and follow-up questions.", input: "Draft comparison", output: "Draft findings for review" },
            { title: "Human verification", description: "Reviewers check each finding against source documents, correct errors and add context.", input: "Draft findings, source documents", output: "Validated findings" },
            { title: "Decision and remediation", description: "Accountable owners decide and agree remediation with the vendor.", input: "Validated findings", output: "Decision record and remediation plan" },
            { title: "Record and monitor", description: "Store the evidence and rationale and watch for changes that trigger reassessment.", input: "Decision record", output: "Review file and monitoring triggers" },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="benefits" title="Benefits of AI-Assisted Vendor Review">
        <ShortAnswer>
          Faster first-pass analysis, more consistent structure and better use of reviewer time, provided outputs are
          verified.
        </ShortAnswer>
        <RiskCategoryGrid
          variant="plain"
          columns={3}
          items={[
            { title: "Speed of first pass", description: "Reading and extracting from many documents takes less reviewer time, so people start with organized material." },
            { title: "Consistent structure", description: "The same requirements are applied each time, which makes findings easier to compare across vendors and cycles." },
            { title: "Broader coverage", description: "Long documents and large queues can be read in full rather than sampled." },
            { title: "Reviewer focus", description: "Specialists spend more time on judgment and vendor dialogue and less on locating information." },
            { title: "Traceability", description: "When outputs link back to source text, reviewers can verify claims and keep a clearer record." },
            { title: "Prioritization", description: "Flags and gap lists help teams decide where deeper review is needed first." },
          ]}
        />
        <p>
          These benefits depend on implementation quality and on verification by people. No benefit here is guaranteed,
          and this site does not claim specific time savings or accuracy rates.
        </p>
      </ArticleSection>

      <ArticleSection id="risks-and-limitations" title="Risks and Limitations of AI Vendor Review" tone="tint">
        <ShortAnswer>
          AI can be wrong in fluent ways, and vendor evidence is often incomplete. Each risk below needs a control, and
          human accountability applies to all of them.
        </ShortAnswer>
        <p>
          The <Cite source="nistAiRmf">NIST AI Risk Management Framework</Cite> is one reference for thinking about AI
          risk, including reliability, explainability, privacy and accountability.
        </p>
        <h3>Hallucinations</h3>
        <p>Language models can state details that are not in the document. Require source citations and check them.</p>
        <h3>Incomplete vendor evidence</h3>
        <p>
          A model can only analyze what it is given. Missing or partial documents should be reported as gaps, not
          silently filled in.
        </p>
        <h3>Stale documents</h3>
        <p>An outdated policy or report may look complete. Capture document dates and flag expired or old evidence.</p>
        <h3>False positives</h3>
        <p>Over-flagging wastes reviewer time and can bury real issues. Track and tune the criteria that cause noise.</p>
        <h3>False negatives</h3>
        <p>
          Missed issues are the more dangerous error, because a clean output can create unwarranted confidence. Sample
          and test outputs, and never treat “no flags” as “no risk.”
        </p>
        <h3>Jurisdiction differences</h3>
        <p>
          Privacy, security and sector rules differ by location. A model may apply the wrong standard unless the
          applicable jurisdiction is specified, and legal teams should confirm applicability.
        </p>
        <h3>Contextual risk</h3>
        <p>
          The same finding matters differently depending on the data, process and alternatives involved. Context sits
          with people who know the business.
        </p>
        <h3>Model explainability</h3>
        <p>
          If a reviewer cannot see why something was flagged, it is hard to trust or challenge. Prefer outputs that show
          the source text and the requirement they were compared with.
        </p>
        <h3>Confidential data</h3>
        <p>
          Vendor documents and internal requirements may be confidential. Check how any AI system stores, retains and
          reuses submitted data, and what the contract with the AI provider says.
        </p>
        <h3>Human accountability</h3>
        <p>
          A tool cannot be accountable. Name the person who verifies outputs and the person who approves the decision,
          and record both.
        </p>
      </ArticleSection>

      <ArticleSection id="ai-vendors" title="AI Vendor Review vs Reviewing AI Vendors">
        <ShortAnswer>
          “AI vendor review” can mean using AI to review vendors, or reviewing vendors that use AI. They are different
          tasks and often both apply.
        </ShortAnswer>
        <ComparisonTable
          caption="Two meanings of AI vendor review"
          columns={["Aspect", "Using AI to review vendors", "Reviewing vendors that use AI"]}
          rows={[
            { label: "Question", cells: ["How can AI help us analyze vendor evidence?", "What risks does the vendor’s AI create for us?"] },
            { label: "Focus", cells: ["Reviewer workflow, accuracy, confidential data handling", "Model providers, training data claims, retention, output risk, oversight"] },
            { label: "Where to go next", cells: [<>This page and the <Link key="uc" href={pages.useCases.path}>use cases</Link></>, <><Link key="ck" href={`${pages.vendorReviewChecklist.path}#ai-vendor-risk`}>AI vendor risk checklist</Link> and the <Link key="ra" href={`${pages.vendorRiskAssessment.path}#risk-categories`}>risk categories</Link></>] },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="questions-to-ask" title="Questions to Ask Before Relying on AI Outputs" tone="tint">
        <ul>
          <li>Does every finding link to the source text it came from?</li>
          <li>Which requirements was the evidence compared against, and who maintains them?</li>
          <li>How are errors found, measured and corrected over time?</li>
          <li>How is confidential vendor and company data stored, retained and reused?</li>
          <li>Who verifies outputs, and who approves the final decision?</li>
          <li>What happens when evidence is missing, outdated or ambiguous?</li>
        </ul>
      </ArticleSection>

      <FAQ
        items={[
          { question: "Can AI do a vendor risk assessment on its own?", answer: "No. AI can extract, compare and flag, but assessing risk requires business context, legal interpretation and accountable judgment." },
          { question: "Is automated vendor review reliable?", answer: "Reliability varies by implementation, document quality and criteria. Treat outputs as drafts and verify them against sources." },
          { question: "Does AI replace security questionnaires?", answer: "No. It helps analyze questionnaire responses and other evidence. The underlying evidence and the vendor’s accountability for it remain necessary." },
          {
            question: "Where do I start?",
            answer: (
              <>
                Define review criteria with the <Link href={pages.vendorReviewChecklist.path}>vendor review checklist</Link>,
                then pick a high-volume, text-heavy task from the <Link href={pages.useCases.path}>use cases</Link>.
              </>
            ),
          },
        ]}
      />

      <RelatedPages
        items={[
          { href: pages.useCases.path, title: "AI Vendor Review Use Cases", description: "Next: twelve scenarios with goal, evidence, AI task, human decision and output." },
          { href: pages.vendorReviewChecklist.path, title: "Vendor Review Checklist", description: "The requirements that AI-assisted analysis should compare evidence against." },
          { href: pages.vendorRiskAssessment.path, title: "Vendor Risk Assessment", description: "The framework that gives AI-assisted findings their risk context." },
        ]}
      />

      <Sources keys={["nistAiRmf"]} />

      <CTA
        title="Next: see AI vendor review in practice"
        primary={{ href: pages.useCases.path, label: "Explore Use Cases" }}
        secondary={{ sale: true, label: siteConfig.cta.label }}
      >
        Twelve review scenarios, each showing what AI can assist with and what people decide.
      </CTA>
    </>
  );
}
