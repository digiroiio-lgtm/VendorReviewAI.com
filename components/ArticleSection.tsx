import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  tone?: "default" | "tint";
  children: ReactNode;
};

/** Semantic section with an H2. Use <h3> inside for subsections. */
export function ArticleSection({ id, title, tone = "default", children }: Props) {
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <h2 id={`${id}-heading`}>{title}</h2>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}

/** "Short answer" lead-in placed before deeper explanation. */
export function ShortAnswer({ children }: { children: ReactNode }) {
  return (
    <p className="short-answer">
      <strong>Short answer:</strong> {children}
    </p>
  );
}
