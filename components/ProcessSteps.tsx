import type { ReactNode } from "react";

export type Step = {
  title: string;
  description?: ReactNode;
  /** Explicit input to the step (list variant only). */
  input?: string;
  /** Explicit output of the step (list variant only). */
  output?: string;
};

type Props = {
  steps: Step[];
  /** "flow": HTML/CSS diagram with connectors. "list": numbered steps with inputs and outputs. */
  variant?: "flow" | "list";
  label: string;
};

export function ProcessSteps({ steps, variant = "flow", label }: Props) {
  if (variant === "list") {
    return (
      <ol className="steps-list" aria-label={label}>
        {steps.map((step) => (
          <li key={step.title} className="steps-list__item">
            <h3>{step.title}</h3>
            {step.description ? <p>{step.description}</p> : null}
            {step.input || step.output ? (
              <dl className="io">
                {step.input ? (
                  <div>
                    <dt>Input</dt>
                    <dd>{step.input}</dd>
                  </div>
                ) : null}
                {step.output ? (
                  <div>
                    <dt>Output</dt>
                    <dd>{step.output}</dd>
                  </div>
                ) : null}
              </dl>
            ) : null}
          </li>
        ))}
      </ol>
    );
  }

  const cols = steps.length === 5 ? "c5" : steps.length === 6 || steps.length === 3 ? "c3" : "c4";
  return (
    <ol className={`flow flow--${cols}`} aria-label={label}>
      {steps.map((step) => (
        <li key={step.title} className="flow__step">
          <span className="flow__title">{step.title}</span>
          {step.description ? <span className="flow__desc">{step.description}</span> : null}
        </li>
      ))}
    </ol>
  );
}
