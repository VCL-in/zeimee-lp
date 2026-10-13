import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
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
  description = "業務の整理から、AI・システムの開発、運用改善まで。Zeimeeの支援内容をご紹介します。",
}: {
  description?: string;
}) {
  return (
    <aside
      className={styles.resourceCta}
      id="zeimee-resources"
      aria-labelledby="zeimee-resources-title"
    >
      <div className={styles.resourceHeader}>
        <p className={styles.resourceEyebrow}>ZeimeeのAI導入・開発支援</p>
        <h2 id="zeimee-resources-title">
          会計事務所のAI活用を、
          <br />
          もっと詳しく知りたい方へ
        </h2>
        <p className={styles.resourceDescription}>{description}</p>
      </div>
      <div className={styles.resourceGrid}>
        <div className={styles.resourceCard}>
          <div className={`${styles.resourceVisual} ${styles.resourceGuide}`}>
            <Image
              className={styles.resourceImage}
              src="/images/column/zeimee-workflow-banner-v1.webp"
              alt=""
              fill
              sizes="(max-width: 640px) calc(100vw - 88px), (max-width: 1100px) 36vw, 380px"
            />
            <div className={styles.resourceGuideCopy}>
              <Image
                className={styles.resourceLogo}
                src="/lp/zeimee-logo.png"
                alt="Zeimee"
                width={1397}
                height={289}
                sizes="130px"
              />
              <strong>
                事務所の業務に、
                <br />
                AIを合わせる。
              </strong>
              <span>会計事務所に特化したAI導入・開発支援</span>
            </div>
          </div>
          <h3>Zeimeeサービス資料</h3>
          <p>支援内容やAI導入の進め方をご案内します。</p>
          <Link className={styles.resourceButton} href="/#contact">
            <span>無料の資料を請求する</span>
            <span className={styles.resourceButtonIcon} aria-hidden="true">
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className={styles.resourceCard}>
          <div className={styles.resourceVisual}>
            <Image
              className={styles.resourceImage}
              src="/images/column/assets/ai-adoption-photo.webp"
              alt="AI導入について資料を見ながら打ち合わせるイメージ"
              fill
              sizes="(max-width: 640px) calc(100vw - 88px), (max-width: 1100px) 36vw, 380px"
            />
          </div>
          <h3>AI導入・開発支援の進め方</h3>
          <p>
            業務のヒアリングから開発・運用改善まで、Zeimeeの支援をご紹介します。
          </p>
          <Link className={styles.resourceButton} href="/#about">
            <span>導入支援について見る</span>
            <span className={styles.resourceButtonIcon} aria-hidden="true">
              <ArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <Link className={styles.resourceMore} href="/">
        <span>Zeimeeのサービスを見る</span>
        <span className={styles.resourceButtonIcon} aria-hidden="true">
          <ArrowRight />
        </span>
      </Link>
    </aside>
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
