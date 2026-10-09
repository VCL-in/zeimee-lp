import Link from "next/link";
import type { ReactNode } from "react";
import { DetailShell } from "@/components/DetailShell";
import { COLUMN_AUTHOR, columnUrl, type ColumnMeta } from "@/lib/columns";
import styles from "./column.module.css";

type Faq = { question: string; answer: string };

function formatDate(iso: string) {
  return iso.slice(0, 10).replaceAll("-", ".");
}

export function ColumnArticle({
  column,
  toc,
  faqs = [],
  disclosure,
  children,
}: {
  column: ColumnMeta;
  toc: { id: string; label: string }[];
  faqs?: Faq[];
  disclosure?: ReactNode;
  children: ReactNode;
}) {
  const url = columnUrl(column.slug);
  const graph: object[] = [
    {
      "@type": "Article",
      headline: column.title,
      description: column.description,
      mainEntityOfPage: url,
      datePublished: column.publishedAt,
      dateModified: column.updatedAt,
      author: { "@type": "Organization", ...COLUMN_AUTHOR },
      publisher: {
        "@type": "Organization",
        name: "株式会社Zeimee",
        url: "https://zeimee.com/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://zeimee.com/" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://zeimee.com/column" },
        { "@type": "ListItem", position: 3, name: column.title, item: url },
      ],
    },
  ];
  if (faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }
  const schema = { "@context": "https://schema.org", "@graph": graph };

  return (
    <DetailShell label="コラム">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <article>
        <header className={styles.header}>
          <p className={styles.category}>
            <Link href="/column">コラム</Link> / {column.category}
          </p>
          <h1>{column.title}</h1>
          <div className={styles.meta}>
            <span>公開日 {formatDate(column.publishedAt)}</span>
            <span>更新日 {formatDate(column.updatedAt)}</span>
            <span>執筆 {COLUMN_AUTHOR.name}</span>
            {disclosure && <span className={styles.pr}>PR</span>}
          </div>
          {disclosure && <p className={styles.disclosure}>{disclosure}</p>}
        </header>
        <nav className={styles.toc} aria-label="目次">
          <p>目次</p>
          <ol>
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`}>{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>
        {children}
      </article>
    </DetailShell>
  );
}
