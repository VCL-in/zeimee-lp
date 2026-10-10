import Link from "next/link";
import type { ReactNode } from "react";
import { ColumnShell } from "@/components/ColumnShell";
import { ColumnCover } from "@/components/ColumnCover";
import { ArrowUpRight, BookOpen, ChevronRight } from "lucide-react";
import {
  COLUMN_AUTHOR,
  columns,
  columnUrl,
  type ColumnMeta,
} from "@/lib/columns";
import styles from "./column.module.css";

function formatDate(iso: string) {
  return iso.slice(0, 10).replaceAll("-", ".");
}

export function ColumnArticle({
  column,
  toc,
  disclosure,
  editorialPolicy,
  structuredData = true,
  children,
}: {
  column: ColumnMeta;
  toc: { id: string; label: string }[];
  disclosure?: ReactNode;
  editorialPolicy?: ReactNode;
  structuredData?: boolean;
  children: ReactNode;
}) {
  const url = columnUrl(column.id);
  const graph: object[] = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      url,
      headline: column.title,
      description: column.description,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      ...(column.coverImage && {
        image: new URL(column.coverImage, "https://zeimee.com").href,
      }),
      datePublished: column.publishedAt,
      dateModified: column.updatedAt,
      author: {
        "@type": "Organization",
        "@id": `${url}#editorial-policy`,
        ...COLUMN_AUTHOR,
        url: `${url}#editorial-policy`,
      },
      publisher: {
        "@type": "Organization",
        name: "株式会社Zeimee",
        url: "https://zeimee.com/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "ホーム",
          item: "https://zeimee.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "コラム",
          item: "https://zeimee.com/column",
        },
        { "@type": "ListItem", position: 3, name: column.title, item: url },
      ],
    },
  ];
  const schema = { "@context": "https://schema.org", "@graph": graph };

  return (
    <ColumnShell>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <article className={styles.article}>
        <header className={styles.header}>
          <p className={styles.category}>
            {column.category}
            {disclosure && <span className={styles.pr}>PR</span>}
          </p>
          <h1>
            {column.titleParts?.join("") === column.title
              ? column.titleParts.map((part) => (
                  <span className={styles.titlePhrase} key={part}>
                    {part}
                  </span>
                ))
              : column.title}
          </h1>
          <div className={styles.meta}>
            <time dateTime={column.updatedAt}>
              更新日：{formatDate(column.updatedAt)}
            </time>
          </div>
        </header>
        <div className={styles.articleGrid}>
          <div className={styles.articleMain}>
            <ColumnCover column={column} />
            <nav className={styles.toc} aria-label="記事の目次">
              <div className={styles.tocHeading}>
                <BookOpen aria-hidden="true" />
                <p>この記事の目次</p>
                <span>CONTENTS</span>
              </div>
              <ol>
                {toc.map((t, i) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {t.label}
                      <ChevronRight aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            {disclosure && (
              <details className={styles.disclosure}>
                <summary>運営元・掲載情報について</summary>
                <p>{disclosure}</p>
              </details>
            )}
            <div className={styles.prose}>{children}</div>
            <section
              id="editorial-policy"
              className={styles.editorialPolicy}
              aria-labelledby="editorial-policy-heading"
            >
              <h2 id="editorial-policy-heading">この記事の編集方針・執筆者</h2>
              <p>
                Zeimee編集部は、会計事務所のAI導入・開発を支援する株式会社Zeimeeの編集部です。
              </p>
              {editorialPolicy}
            </section>
            <div className={styles.articleEnd}>
              <span>執筆：{COLUMN_AUTHOR.name}</span>
              <Link href="/column">
                コラム一覧へ <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <aside className={styles.sidebar} aria-label="記事の関連情報">
            <div className={styles.sideCta}>
              <h2>Zeimeeの導入資料</h2>
              <p>AI導入の進め方・事例をご紹介します。</p>
              <Link className={styles.ctaButton} href="/#contact">
                資料ダウンロード <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.sideRelated}>
              <h2>あわせて読みたい</h2>
              {[
                ...columns.filter(
                  (c) => c.id !== column.id && c.category === column.category,
                ),
                ...columns.filter(
                  (c) => c.id !== column.id && c.category !== column.category,
                ),
              ]
                .slice(0, 3)
                .map((c) => (
                  <Link key={c.id} href={`/column/${c.id}`}>
                    <ColumnCover column={c} compact />
                    <p>{c.title}</p>
                  </Link>
                ))}
              <Link className={styles.caseLink} href="/cases/field-development">
                <span>CASE STUDY</span>
                <strong>
                  日計表の転記を削減。
                  <br />
                  Excelの5工程を1画面に。
                </strong>
                <span>
                  導入事例を読む <ArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </div>
            <nav className={styles.sideToc} aria-label="サイドバーの目次">
              <p>この記事の目次</p>
              <ol>
                {toc.map((t, i) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
              <a className={styles.backTop} href="#column-main">
                記事の先頭へ ↑
              </a>
            </nav>
          </aside>
        </div>
      </article>
    </ColumnShell>
  );
}
