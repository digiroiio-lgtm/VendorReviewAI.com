import { CTA } from "@/components/CTA";
import { siteConfig } from "@/lib/site-config";

type Props = {
  /** Category phrase, e.g. "vendor risk". */
  category: string;
  /** Informational destination for "Explore related category content". */
  related: string;
};

/** Subtle end-of-page asset notice with an informational primary action. */
export function AssetCTA({ category, related }: Props) {
  return (
    <CTA
      title={`Building in ${category}? ${siteConfig.name} is available for acquisition.`}
      primary={{ href: related, label: "Explore related category content" }}
      secondary={{ sale: true, label: siteConfig.cta.label }}
    >
      This page is a category resource. It does not describe or offer a product.
    </CTA>
  );
}
