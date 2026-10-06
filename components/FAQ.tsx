import type { ReactNode } from "react";
import { ArticleSection } from "@/components/ArticleSection";

export type FAQItem = { question: string; answer: ReactNode };

type Props = {
  title?: string;
  id?: string;
  items: FAQItem[];
  tone?: "default" | "tint";
};

/** Visible question/answer pairs (H3 + paragraph); no JS and always crawlable. */
export function FAQ({ title = "Frequently Asked Questions", id = "faq", items, tone = "default" }: Props) {
  return (
    <ArticleSection id={id} title={title} tone={tone}>
      <div className="faq">
        {items.map((item) => (
          <div key={item.question} className="faq__item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </ArticleSection>
  );
}
