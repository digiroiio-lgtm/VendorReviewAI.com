import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  goal: ReactNode;
  evidence: ReactNode;
  aiTask: ReactNode;
  humanDecision: ReactNode;
  output: ReactNode;
  related: { href: string; label: string }[];
};

/** One use case: Goal → Evidence → AI-assisted task → Human decision → Output. */
export function UseCaseCard({ id, title, goal, evidence, aiTask, humanDecision, output, related }: Props) {
  const rows: [string, ReactNode][] = [
    ["Goal", goal],
    ["Evidence", evidence],
    ["AI-assisted task", aiTask],
    ["Human decision", humanDecision],
    ["Output", output],
  ];
  return (
    <article id={id} className="usecase">
      <h3>{title}</h3>
      <dl className="usecase__rows">
        {rows.map(([label, value], i) => (
          <div key={label} className={label === "Human decision" ? "usecase__row usecase__row--human" : "usecase__row"}>
            <dt>
              <span className="usecase__num" aria-hidden="true">
                {i + 1}
              </span>
              {label}
            </dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <p className="usecase__related">
        <span>Related:</span>{" "}
        {related.map((link, i) => (
          <span key={link.href}>
            {i > 0 ? " · " : ""}
            <Link href={link.href}>{link.label}</Link>
          </span>
        ))}
      </p>
    </article>
  );
}
