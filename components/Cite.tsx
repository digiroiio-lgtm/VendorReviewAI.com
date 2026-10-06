import type { ReactNode } from "react";
import { sources, type SourceKey } from "@/lib/sources";

/** Inline citation link to a source from lib/sources.ts. */
export function Cite({ source, children }: { source: SourceKey; children: ReactNode }) {
  return (
    <a href={sources[source].url} rel="noopener noreferrer" target="_blank">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
