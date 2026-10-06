import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";

type Props = {
  className?: string;
  children: ReactNode;
  /** Override the destination (defaults to the configured sale URL). */
  href?: string;
};

/**
 * Link to the configured sale destination. Internal paths use next/link;
 * http(s) URLs open in a new tab; other safe schemes (mailto:) are plain anchors.
 */
export function SaleLink({ className, children, href = siteConfig.sale.url }: Props) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  if (href.startsWith("http")) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
