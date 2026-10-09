/* eslint-disable @next/next/no-html-link-for-pages -- Native navigation replaces the previous homepage hash when returning to the contact section. */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { toolPages } from "@/lib/tool-pages";
import { DetailShell } from "@/components/DetailShell";
import styles from "@/components/detail.module.css";
export const dynamicParams = false;
export function generateStaticParams() { return toolPages.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = toolPages.find((t) => t.slug === slug);
  if (!tool) return {};
  return { title: `${tool.title}｜Zeimee`, description: tool.description, alternates: { canonical: `https://zeimee.com/tools/${slug}` }, openGraph: { title: `${tool.title}｜Zeimee`, description: tool.description, url: `https://zeimee.com/tools/${slug}`, type: "website", locale: "ja_JP" } };
}
export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = toolPages.find((t) => t.slug === slug);
  if (!tool) notFound();
  return <DetailShell label={tool.name}>
    <header className={styles.hero}><p className={styles.eyebrow}>{tool.name}</p><h1>{tool.headline}</h1><p className={styles.lead}>{tool.intro}</p><a className={styles.button} href="/#contact">このツールについて相談する <span aria-hidden="true">↗</span></a></header>
    <figure className={styles.preview}><Image src={`/lp/tools/${tool.slug}.svg`} alt={`${tool.name}の画面イメージ`} width={1000} height={620} sizes="(max-width: 1080px) 100vw, 1000px" /><figcaption>画面は開発イメージです。表示データは架空で、導入時の仕様は個別に設計します。</figcaption></figure>
    <div className={styles.body}>
      <section className={styles.section}><h2>こんな業務を見直したい事務所へ</h2><ul>{tool.problems.map((p) => <li key={p}>{p}</li>)}</ul></section>
      <section className={styles.section}><h2>{tool.name}で支援する流れ</h2><div className={styles.steps}>{tool.steps.map(([title, body], i) => <div className={styles.step} key={title}><h3>{i + 1}. {title}</h3><p>{body}</p></div>)}</div></section>
      <section className={styles.section}><h2>現場での開発から</h2><p>{tool.example}</p><Link href="/cases/field-development">税理士事務所での1ヶ月の開発事例を読む →</Link></section>
      <section className={styles.section}><h2>対応範囲と導入について</h2><p>{tool.scope}</p><p>業務のヒアリング、サンプルでの検証、運用への導入、改善までを一緒に進めます。費用と期間は、対象業務と開発範囲を確認してご案内します。</p><Link href="/security">セキュリティと承認の考え方 →</Link></section>
      <section className={styles.section}><h2>よくある質問</h2>{tool.faqs.map(([q,a]) => <div className={styles.faq} key={q}><h3>{q}</h3><p>{a}</p></div>)}</section>
      <nav className={styles.related} aria-label="関連ツール">{toolPages.filter((t) => t.slug !== slug).map((t) => <Link href={`/tools/${t.slug}`} key={t.slug}>{t.name} →</Link>)}</nav>
    </div>
  </DetailShell>;
}
