import Link from "next/link";

type Item = { href: string; title: string; description: string };

export function RelatedPages({ items, title = "Continue Reading" }: { items: Item[]; title?: string }) {
  return (
    <section className="section section--tint" aria-labelledby="related-heading">
      <div className="container">
        <h2 id="related-heading">{title}</h2>
        <ul className="related">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="related__link">
                <span className="related__title">{item.title}</span>
                <span className="related__desc">{item.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
