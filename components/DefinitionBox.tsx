import type { ReactNode } from "react";

/** Explicit, quotable definition or direct answer. */
export function DefinitionBox({ term, children }: { term?: string; children: ReactNode }) {
  return (
    <div className="definition">
      {term ? <p className="definition__label">{term}</p> : null}
      <p>{children}</p>
    </div>
  );
}
