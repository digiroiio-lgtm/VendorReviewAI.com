import { sources, type SourceKey } from "@/lib/sources";

/** Citation list for external factual claims made on the page. */
export function Sources({ keys }: { keys: SourceKey[] }) {
  return (
    <section id="sources" className="section section--default sources" aria-labelledby="sources-heading">
      <div className="container">
        <h2 id="sources-heading">Sources and Further Reading</h2>
        <ul>
          {keys.map((key) => {
            const source = sources[key];
            return (
              <li key={key}>
                <a href={source.url} rel="noopener noreferrer" target="_blank">
                  {source.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>{" "}
                <span className="sources__publisher">— {source.publisher}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
