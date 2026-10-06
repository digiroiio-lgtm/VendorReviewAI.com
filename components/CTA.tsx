import Link from "next/link";
import type { ReactNode } from "react";
import { SaleLink } from "@/components/SaleLink";

type Action = { href: string; label: string };

type Props = {
  title: string;
  children?: ReactNode;
  primary: Action;
  /** When set to "sale", the secondary action uses the configured sale destination. */
  secondary?: Action | { sale: true; label: string };
};

export function CTA({ title, children, primary, secondary }: Props) {
  return (
    <section className="cta" aria-label={title}>
      <div className="container cta__inner">
        <div>
          <h2 className="cta__title">{title}</h2>
          {children ? <p>{children}</p> : null}
        </div>
        <div className="cta__actions">
          <Link href={primary.href} className="btn btn--primary">
            {primary.label}
          </Link>
          {secondary ? (
            "sale" in secondary ? (
              <SaleLink className="btn btn--outline">{secondary.label}</SaleLink>
            ) : (
              <Link href={secondary.href} className="btn btn--outline">
                {secondary.label}
              </Link>
            )
          ) : null}
        </div>
      </div>
    </section>
  );
}
