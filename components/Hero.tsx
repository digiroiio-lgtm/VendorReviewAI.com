import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { Crumb } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";

type Props = {
  title: string;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
  /** Direct answer directly beneath the H1 (usually a DefinitionBox). */
  children?: ReactNode;
  /** Supporting sentence shown after the direct answer. */
  lead?: ReactNode;
  actions?: ReactNode;
  /** Optional visual on the right at large widths. */
  aside?: ReactNode;
  /** Show the visible "last updated" line (matches Article JSON-LD dates). */
  showDate?: boolean;
  size?: "large" | "default";
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function Hero({ title, eyebrow, breadcrumbs, children, lead, actions, aside, showDate, size = "default" }: Props) {
  const modified = siteConfig.contentDates.modified;
  return (
    <header className={`hero hero--${size}`}>
      <div className="container">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <div className={aside ? "hero__layout hero__layout--split" : "hero__layout"}>
          <div className="hero__main">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1>{title}</h1>
            {children}
            {lead ? <p className="hero__lead">{lead}</p> : null}
            {actions ? <div className="hero__actions">{actions}</div> : null}
            {showDate ? (
              <p className="page-meta">
                Last updated <time dateTime={modified}>{formatDate(modified)}</time>
              </p>
            ) : null}
          </div>
          {aside ? <div className="hero__aside">{aside}</div> : null}
        </div>
      </div>
    </header>
  );
}
