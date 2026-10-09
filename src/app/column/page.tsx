import type { Metadata } from "next";
import Link from "next/link";
import { DetailShell } from "@/components/DetailShell";
import { columns } from "@/lib/columns";
import detail from "@/components/detail.module.css";
import styles from "@/components/column.module.css";

export const metadata: Metadata = {
  title: "コラム｜会計事務所のAI活用・記帳自動化｜Zeimee",
  description:
    "税理士・会計事務所の記帳自動化、仕訳AI、AI-OCR、記帳代行の効率化について、ツールの比較や選び方を解説します。",
  alternates: { canonical: "https://zeimee.com/column" },
};

export default function ColumnIndex() {
  return (
    <DetailShell label="コラム">
      <header className={detail.hero}>
        <p className={detail.eyebrow}>Column</p>
        <h1>会計事務所のAI活用コラム</h1>
        <p className={detail.lead}>
          記帳自動化・仕訳AI・AI-OCRなど、会計事務所の業務効率化に役立つツールの比較や選び方を解説します。
        </p>
      </header>
      {columns.length ? (
        <div className={styles.list}>
          {columns.map((c) => (
            <Link key={c.slug} className={styles.item} href={`/column/${c.slug}`}>
              <small>
                {c.category}・{c.updatedAt.slice(0, 10).replaceAll("-", ".")} 更新
              </small>
              <h2>{c.title}</h2>
              <p>{c.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className={styles.empty}>記事を準備中です。</p>
      )}
    </DetailShell>
  );
}
