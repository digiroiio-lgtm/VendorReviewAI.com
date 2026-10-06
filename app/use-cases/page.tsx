import Link from "next/link";
import { ArticleSection, ShortAnswer } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTA } from "@/components/CTA";
import { DefinitionBox } from "@/components/DefinitionBox";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedPages } from "@/components/RelatedPages";
import { UseCaseCard } from "@/components/UseCaseCard";
import { breadcrumbsFor, pageGraph } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { pages } from "@/lib/pages";
import { siteConfig } from "@/lib/site-config";
import { useCases } from "@/lib/use-cases";

export const metadata = pageMetadata("useCases");

export default function UseCasesPage() {
  return (
    <>
      <JsonLd data={pageGraph("useCases")} />

      <Hero
        title={pages.useCases.h1}
        breadcrumbs={breadcrumbsFor("useCases")}
        showDate
        lead="Twelve practical scenarios, each showing what AI can assist with and what people decide."
      >
        <DefinitionBox term="Definition">
          An AI vendor review use case is a specific review scenario in which AI assists with part of the evidence
          analysis, such as extraction, comparison, summarization or flagging, while accountable people make the
          decision. Each scenario below follows the same pattern: goal, evidence, AI-assisted task, human decision and
          output.
        </DefinitionBox>
      </Hero>

      <ArticleSection id="pattern" title="How Is Each Use Case Structured?">
        <ShortAnswer>
          Every use case moves from a goal and the evidence available, through an AI-assisted task, to a human decision
          and a documented output.
        </ShortAnswer>
        <ProcessSteps
          label="Use case structure"
          steps={[
            { title: "Goal", description: "What the review must establish." },
            { title: "Evidence", description: "The documents and information available." },
            { title: "AI-assisted task", description: "The part AI can help prepare." },
            { title: "Human decision", description: "What accountable people decide." },
            { title: "Output", description: "The documented result." },
          ]}
        />
        <h3>Jump to a use case</h3>
        <ul className="usecase-index">
          {useCases.map((useCase) => (
            <li key={useCase.id}>
              <a href={`#${useCase.id}`}>{useCase.title}</a>
            </li>
          ))}
        </ul>
      </ArticleSection>

      <ArticleSection id="scenarios" title="Vendor Review Scenarios" tone="tint">
        <div className="usecase-stack">
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.id} {...useCase} />
          ))}
        </div>
      </ArticleSection>

      <ArticleSection id="automation-vs-ai" title="Third-Party Risk Automation vs AI Assistance">
        <ShortAnswer>
          Automation moves work along a fixed path; AI assistance helps interpret unstructured evidence. Many review
          processes use both.
        </ShortAnswer>
        <ComparisonTable
          caption="Workflow automation compared with AI assistance in vendor review"
          columns={["Aspect", "Workflow automation", "AI assistance"]}
          rows={[
            { label: "Typical tasks", cells: ["Intake routing, reminders, evidence requests, status tracking.", "Reading documents, extracting facts, comparing evidence, drafting summaries."] },
            { label: "Input", cells: ["Structured data and defined rules.", "Unstructured documents and text."] },
            { label: "Main risk", cells: ["A rigid rule applied where judgment is needed.", "Plausible but wrong or incomplete output."] },
            { label: "Control", cells: ["Rules are reviewed and approved.", "Outputs are verified by a reviewer."] },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="choosing" title="Where Should a Team Start?" tone="tint">
        <ShortAnswer>
          With a task that is high-volume, text-heavy, repeatable and easy for a person to verify.
        </ShortAnswer>
        <ul>
          <li>Questionnaire and policy extraction is often easier to verify than open-ended risk judgments.</li>
          <li>Missing-evidence checks against a request list have clear right and wrong answers.</li>
          <li>Contract clause extraction can start as a locator that points legal reviewers to the right text.</li>
          <li>Decisions that depend on business context should stay manual.</li>
        </ul>
        <p>
          Before choosing a task, write the criteria using the{" "}
          <Link href={pages.vendorReviewChecklist.path}>vendor review checklist</Link>, and review the{" "}
          <Link href={`${pages.aiVendorReview.path}#risks-and-limitations`}>risks and limitations of AI vendor review</Link>.
        </p>
      </ArticleSection>

      <FAQ
        items={[
          { question: "Which vendor review use case benefits most from AI?", answer: "It depends on volume and evidence format. Teams with many questionnaires or long documents often see the clearest fit, while judgment-heavy decisions benefit least." },
          { question: "Do these use cases require specific software?", answer: "No. They describe tasks and decisions, not products. This site does not recommend or represent any specific tool." },
          {
            question: "Where can I learn the underlying frameworks?",
            answer: (
              <>
                Start with <Link href={pages.whatIsVendorReview.path}>what vendor review is</Link> and the{" "}
                <Link href={pages.vendorRiskAssessment.path}>vendor risk assessment framework</Link>.
              </>
            ),
          },
        ]}
      />

      <RelatedPages
        title="Related Frameworks"
        items={[
          { href: pages.whatIsVendorReview.path, title: "What Is Vendor Review?", description: "The process each use case applies." },
          { href: pages.vendorRiskAssessment.path, title: "Vendor Risk Assessment", description: "Risk categories, tiers and the decision framework." },
          { href: pages.vendorReviewChecklist.path, title: "Vendor Review Checklist", description: "Questions and evidence for each review area." },
          { href: pages.aiVendorReview.path, title: "AI Vendor Review", description: "Methodology, human oversight and limits." },
        ]}
      />

      <CTA
        title="Build on the framework"
        primary={{ href: pages.vendorRiskAssessment.path, label: "Vendor Risk Assessment" }}
        secondary={{ sale: true, label: siteConfig.cta.label }}
      >
        Use the risk framework and checklist to define what each use case should assess.
      </CTA>
    </>
  );
}
