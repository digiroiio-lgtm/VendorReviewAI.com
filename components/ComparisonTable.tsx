import type { ReactNode } from "react";

type Row = { label: string; cells: ReactNode[] };

type Props = {
  caption: string;
  /** Header for the first (row-label) column, followed by the data columns. */
  columns: string[];
  rows: Row[];
};

export function ComparisonTable({ caption, columns, rows }: Props) {
  return (
    <div className="table-wrap" role="region" aria-label={caption} tabIndex={0}>
      <table className="table">
        <caption>{caption}</caption>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} scope="col">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {row.cells.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
