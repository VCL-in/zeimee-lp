import type { Metadata } from "next";
import Link from "next/link";
import { ColumnShell } from "@/components/ColumnShell";
import { ColumnCover } from "@/components/ColumnCover";
import { ArrowUpRight } from "lucide-react";
import { columns } from "@/lib/columns";
import styles from "@/components/column.module.css";

export const metadata: Metadata = {
  title: "コラム｜会計事務所のAI活用・記帳自動化｜Zeimee",
  description:
    "税理士・会計事務所の記帳自動化、仕訳AI、AI-OCR、記帳代行の効率化について、ツールの比較や選び方を解説します。",
  alternates: { canonical: "https://zeimee.com/column" },
};

export default function ColumnIndex() {
  return (
    <ColumnShell>
      <header className={styles.indexHero}>
        <p className={styles.eyebrow}>ZEIMEE EDITORIAL</p>
        <h1>
          会計の現場に、
          <br />
          新しい視点を。
        </h1>
        <p className={styles.indexLead}>
          記帳自動化・仕訳AI・AI-OCRなど、会計事務所の業務効率化に役立つツールの比較や選び方を解説します。
        </p>
      </header>
      {columns.length ? (
        <div className={styles.list}>
          {columns.map((c) => (
            <Link
              key={c.id}
              className={styles.item}
              href={`/column/${c.id}`}
            >
              <ColumnCover column={c} compact />
              <div className={styles.itemBody}>
                <small>
                  {c.category}・{c.updatedAt.slice(0, 10).replaceAll("-", ".")}{" "}
                  更新
                </small>
                <h2>{c.title}</h2>
                <p>{c.description}</p>
                <span className={styles.itemRead}>
                  記事を読む <ArrowUpRight aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className={styles.empty}>記事を準備中です。</p>
      )}
    </ColumnShell>
  );
}
