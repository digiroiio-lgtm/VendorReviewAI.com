import type { ReactNode } from "react";

export type ChecklistItem = { label: string; detail?: string };

function Items({ items }: { items: ChecklistItem[] }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item.label}>
          <span className="checkbox" aria-hidden="true" />
          <span>
            <strong>{item.label}</strong>
            {item.detail ? <span className="checklist__detail"> {item.detail}</span> : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

type SectionProps = {
  id: string;
  title: string;
  intro?: ReactNode;
  items: ChecklistItem[];
  tone?: "default" | "tint";
};

/** Detailed checklist section (H2) with a print-style checkbox list. */
export function ChecklistSection({ id, title, intro, items, tone = "default" }: SectionProps) {
  return (
    <section id={id} className={`section section--${tone} checklist-section`} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <h2 id={`${id}-heading`}>{title}</h2>
        <div className="section-body">
          {intro ? <p>{intro}</p> : null}
          <Items items={items} />
        </div>
      </div>
    </section>
  );
}

/** Compact checklist group (H3) for the printable quick-reference sheet. */
export function ChecklistGroup({ title, items }: { title: string; items: ChecklistItem[] }) {
  return (
    <div className="checklist-group">
      <h3>{title}</h3>
      <Items items={items} />
    </div>
  );
}
