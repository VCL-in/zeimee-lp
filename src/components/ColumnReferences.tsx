import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import detail from "./detail.module.css";
import styles from "./column.module.css";

type PrimarySource = {
  title: string;
  publisher: string;
  url?: string;
  context?: string;
};

/** Keep source metadata intact; omit the shared confirmation date in its display. */
export function formatReferenceMeta(meta: string, checkedAt: string) {
  return meta
    .replaceAll(`、${checkedAt}確認`, "")
    .replaceAll(`, ${checkedAt}確認`, "")
    .replaceAll(`${checkedAt}確認`, "");
}

export function ColumnReferences({
  checkedAt,
  primarySources,
  note,
  children,
}: {
  checkedAt: string;
  primarySources: PrimarySource[];
  note?: ReactNode;
  children: ReactNode;
}) {
  const checkedDate = checkedAt.replace(
    /^(\d{4})-(\d{2})-(\d{2})$/,
    (_, year, month, day) => `${year}年${Number(month)}月${Number(day)}日`,
  );

  return (
    <section
      id="references"
      className={`${detail.section} ${styles.references}`}
      data-column-references
    >
      <h2>参考資料</h2>
      <p className={styles.referenceChecked}>
        情報の確認日：{checkedDate}。別日の資料は個別に記載しています。
      </p>
      {note && <p className={styles.referenceNote}>{note}</p>}
      <h3 className={styles.referencePrimaryHeading}>主な出典</h3>
      <ul className={styles.referencePrimaryList} data-primary-sources>
        {primarySources.map((source) => (
          <li key={`${source.publisher}-${source.title}`}>
            <div>
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.title}
                </a>
              ) : (
                <strong>{source.title}</strong>
              )}
              <span className={styles.referencePublisher}>
                （{source.publisher}）
              </span>
            </div>
            {source.context && <p>{source.context}</p>}
          </li>
        ))}
      </ul>
      <details className={styles.referenceDetails} data-reference-details>
        <summary>
          <span>出典の詳細を見る</span>
          <ChevronDown aria-hidden="true" />
        </summary>
        <div className={styles.referenceDetailsBody}>{children}</div>
      </details>
    </section>
  );
}
