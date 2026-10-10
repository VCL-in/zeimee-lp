import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import detail from "./detail.module.css";
import styles from "./column.module.css";

export function ColumnInformationTable({
  label,
  headers,
  rows,
}: {
  label: string;
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div
      className={styles.informationTableWrap}
      role="region"
      aria-label={label}
      tabIndex={0}
    >
      <table className={styles.informationTable}>
        <caption>
          {label}
          <span className={styles.smallTableHint}>
            表は左右にスクロールできます。
          </span>
        </caption>
        <thead>
          <tr>
            {headers.map((h) => (
              <th scope="col" key={h}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, i) =>
                i === 0 ? (
                  <th scope="row" key={i}>
                    {cell}
                  </th>
                ) : (
                  <td key={i}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ColumnSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={detail.section} id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function ColumnNote({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={detail.note}>
      <strong>{title}</strong>
      {children}
    </div>
  );
}

export function ColumnFaq({
  items,
}: {
  items: { question: string; answer: ReactNode }[];
}) {
  return (
    <ColumnSection id="faq" title="よくある質問">
      {items.map((item) => (
        <div className={detail.faq} key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </ColumnSection>
  );
}

export function ColumnCta({
  description = "AI導入の進め方・事例をまとめた資料をご用意しています。",
}: {
  description?: string;
}) {
  return (
    <div className={styles.bottomCta}>
      <div>
        <h2>お問い合わせ・資料ダウンロードはこちらから</h2>
        <p>{description}</p>
      </div>
      <Link className={styles.ctaButton} href="/#contact">
        資料ダウンロード
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </div>
  );
}

export function ColumnComparisonTable({
  label,
  columns,
  rows,
}: {
  label: string;
  columns: {
    id: string;
    name: string;
    description?: string;
    sectionId?: string;
  }[];
  rows: { label: string; cells: ReactNode[] }[];
}) {
  return (
    <>
      <p className={styles.tableHint}>
        <span aria-hidden="true">↔</span> 表は左右にスクロールできます。
      </p>
      <div
        className={styles.tableWrap}
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">比較項目</th>
              {columns.map((column) => (
                <th scope="col" key={column.id}>
                  {column.sectionId ? (
                    <a href={`#${column.sectionId}`}>{column.name}</a>
                  ) : (
                    column.name
                  )}
                  {column.description && <span>{column.description}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {row.cells.map((cell, i) => (
                  <td key={columns[i].id}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
