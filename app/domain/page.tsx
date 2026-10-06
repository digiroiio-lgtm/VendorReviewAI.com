import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { DefinitionBox } from "@/components/DefinitionBox";
import { Hero } from "@/components/Hero";
import { domainMetadata } from "@/lib/metadata";
import { domainPage, pages } from "@/lib/pages";
import { siteConfig } from "@/lib/site-config";

export const metadata = domainMetadata();

const fits = [
  "Vendor risk management",
  "Third-party risk management",
  "Procurement technology",
  "Security review",
  "Compliance automation",
  "Supplier intelligence",
  "AI governance",
  "Vendor due diligence",
  "GRC software",
];

export default function DomainPage() {
  const inquiryUrl = siteConfig.sale.inquiryUrl;
  const external = inquiryUrl?.startsWith("http");

  return (
    <>
      <Hero
        title={domainPage.h1}
        breadcrumbs={[
          { name: pages.home.breadcrumb, href: pages.home.path },
          { name: domainPage.breadcrumb, href: siteConfig.sale.domainPagePath },
        ]}
        actions={
          inquiryUrl ? (
            <a
              href={inquiryUrl}
              className="btn btn--primary"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              Make an Inquiry
              {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
            </a>
          ) : null
        }
      >
        <DefinitionBox>
          {siteConfig.name} is a premium category domain for businesses working in vendor review and third-party risk,
          with a clear connection to AI-assisted due diligence.
        </DefinitionBox>
      </Hero>

      <ArticleSection id="suitable-for" title="Who Is the Domain Suitable For?">
        <p>
          The name combines two commercial concepts, vendor review and AI. It may suit businesses in areas such as:
        </p>
        <ul className="domain-list">
          {fits.map((fit) => (
            <li key={fit}>{fit}</li>
          ))}
        </ul>
      </ArticleSection>

      <ArticleSection id="what-is-included" title="What Would a Buyer Acquire?" tone="tint">
        <div className="notice">
          <p>
            <strong>
              The buyer is acquiring the domain name and the associated informational website asset, not an operating
              vendor-risk software company, unless separately agreed.
            </strong>
          </p>
        </div>
        <p>
          The website is an informational resource with six guides on{" "}
          <Link href={pages.whatIsVendorReview.path}>vendor review</Link>,{" "}
          <Link href={pages.aiVendorReview.path}>AI vendor review</Link>,{" "}
          <Link href={pages.vendorRiskAssessment.path}>vendor risk assessment</Link>, the{" "}
          <Link href={pages.vendorReviewChecklist.path}>vendor review checklist</Link> and{" "}
          <Link href={pages.useCases.path}>use cases</Link>. It does not include software, customers, ratings, data sets
          or partnerships, because none exist.
        </p>
        <p>
          The page structure, internal linking and topic coverage are designed to be extended, so a buyer can build on
          the existing content rather than starting from nothing. Any terms of a transaction would be agreed separately.
        </p>
      </ArticleSection>

      <ArticleSection id="inquire" title="Make an Inquiry">
        {inquiryUrl ? (
          <p>Use the inquiry link below to start a conversation about acquiring {siteConfig.name}.</p>
        ) : (
          <p>An inquiry link has not been published yet. Please check back later.</p>
        )}
        {inquiryUrl ? (
          <p>
            <a
              href={inquiryUrl}
              className="btn btn--primary"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              Make an Inquiry
              {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
            </a>
          </p>
        ) : null}
      </ArticleSection>
    </>
  );
}
