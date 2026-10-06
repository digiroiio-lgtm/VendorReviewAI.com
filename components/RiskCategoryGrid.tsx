import type { ReactNode } from "react";

export type Card = {
  title: string;
  description: ReactNode;
  /** Optional short tag shown above the title (e.g. a category label). */
  tag?: string;
  /** Optional bullet list shown under the description. */
  points?: string[];
  pointsLabel?: string;
};

type Props = {
  items: Card[];
  variant?: "risk" | "plain";
  columns?: 2 | 3 | 4;
};

/** Grid of subtle cards. The "risk" variant adds a category marker built in CSS. */
export function RiskCategoryGrid({ items, variant = "risk", columns = 4 }: Props) {
  return (
    <ul className={`card-grid card-grid--${columns} card-grid--${variant}`}>
      {items.map((item) => (
        <li key={item.title} className="card">
          {item.tag ? <p className="card__tag">{item.tag}</p> : null}
          <h3 className="card__title">{item.title}</h3>
          <p>{item.description}</p>
          {item.points ? (
            <>
              {item.pointsLabel ? <p className="card__label">{item.pointsLabel}</p> : null}
              <ul className="card__points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
