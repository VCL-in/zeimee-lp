import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteChromeFooter, SiteChromeHeader } from "@/components/SiteChrome";
import {
  FAX_CONTACT,
  FAX_INDUSTRIES,
  FAX_INDUSTRY_KEYS,
  isFaxIndustryKey,
} from "@/lib/fax-inquiry";
import { siteFontClass } from "@/lib/site-fonts";
import { FaxInquiryForm } from "../FaxInquiryForm";
import styles from "../fax.module.css";

// FAXのQRコードから開く問い合わせページ。業界ごとの文言は src/lib/fax-inquiry.ts にまとめてある。
// 検索には出さない（noindex）。サイトマップとナビゲーションにも入れない。
export const dynamicParams = false;

export function generateStaticParams() {
  return FAX_INDUSTRY_KEYS.map((industry) => ({ industry }));
}

type Props = { params: Promise<{ industry: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  if (!isFaxIndustryKey(industry)) return {};
  const d = FAX_INDUSTRIES[industry];
  return {
    title: `${d.task}を、AIで短くします｜株式会社Zeimee`,
    description: `FAXでご案内した「${d.task}」の無料お試しの、お申し込み・お問い合わせページです。`,
    robots: { index: false, follow: false },
  };
}

export default async function FaxInquiryPage({ params }: Props) {
  const { industry } = await params;
  if (!isFaxIndustryKey(industry)) notFound();
  const d = FAX_INDUSTRIES[industry];
  const steps = [
    [`${d.offer}をお借りします`, `ふだんお使いの${d.borrow}で構いません。`],
    [
      "AIで試して、結果をお返しします",
      "実際に何時間になったかを、30分のオンラインでお見せします。",
    ],
    [
      "続けるかどうかは、その後に決めてください",
      "お試しだけで終わっても、費用はかかりません。",
    ],
  ];

  return (
    <div className={`sc ${siteFontClass} ${styles.page}`}>
      <SiteChromeHeader cta={{ href: "#fax-form", label: "申し込む" }} />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>FAXでご案内した内容の続きです</p>
          <h1>{d.task}を、AIで短くします</h1>
          <div className={styles.nums}>
            <p>
              <small>今</small>
              <b>{d.before}</b>
            </p>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
            <p className={styles.after}>
              <small>AIを使うと</small>
              <b>約{d.after}</b>
            </p>
          </div>
          <p className={styles.unit}>（{d.unit}。当社の試算）</p>
          <a className={styles.heroButton} href="#fax-form">
            無料のお試しを申し込む
          </a>
          <p className={styles.heroNote}>
            「まず資料だけほしい」も歓迎です。こちらから売り込みの電話はしません。
          </p>
        </section>

        <section className={styles.section}>
          <h2>なぜ短くなるのか</h2>
          <p className={styles.lead}>
            4つの作業のうち3つを、AIが代わりにやります。
          </p>
          <div className={styles.flow}>
            <h3>
              今<span>{d.before}</span>
            </h3>
            <ol>
              {d.human.map((work) => (
                <li className={styles.byHuman} key={work}>
                  <i>人</i>
                  {work}
                </li>
              ))}
            </ol>
            <h3>
              AIを使うと<span>約{d.after}</span>
            </h3>
            <ol>
              {d.ai.map((work) => (
                <li className={styles.byAi} key={work}>
                  <i>AI</i>
                  {work}
                </li>
              ))}
              <li className={styles.byHuman}>
                <i>人</i>
                {d.left}
              </li>
            </ol>
          </div>
          <div className={styles.tool}>
            <h3>使う道具</h3>
            <p>{d.tool}</p>
          </div>
          <p className={styles.note}>
            ※ 時間は、{d.basis}
            実際に何時間になるかは、会社ごとに違います。だからまず、御社の実物でお試しします。
          </p>
        </section>

        <section className={styles.section}>
          <h2>{d.offer}で、実際に何時間になるか、無料でお試しします</h2>
          <ol className={styles.steps}>
            {steps.map(([title, body], i) => (
              <li key={title}>
                <span aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={styles.promise}>こちらから売り込みの電話はしません。</p>
        </section>

        <section className={styles.section} id="fax-form">
          <h2>お申し込み・お問い合わせ</h2>
          <p className={styles.lead}>
            4つの項目だけです。1営業日以内に、代表の岩﨑からご連絡します。
          </p>
          <FaxInquiryForm industry={industry} />
          <div className={styles.direct}>
            <h3>お電話・メールでも受け付けています</h3>
            <dl>
              <div>
                <dt>お電話</dt>
                <dd>
                  <a href={`tel:${FAX_CONTACT.tel.replaceAll("-", "")}`}>
                    {FAX_CONTACT.tel}
                  </a>
                </dd>
              </div>
              <div>
                <dt>メール</dt>
                <dd>
                  <a href={`mailto:${FAX_CONTACT.mail}`}>{FAX_CONTACT.mail}</a>
                </dd>
              </div>
            </dl>
            <p>
              代表の岩﨑が直接お受けします。出られないときは、折り返します。
              今後FAXのご案内が不要な場合も、こちらへ「FAX不要」とお知らせください。
            </p>
          </div>
        </section>

        <address className={styles.sender}>
          <b>{FAX_CONTACT.company}</b>
          <span>{FAX_CONTACT.sender}</span>
          <span>{FAX_CONTACT.address}</span>
        </address>
      </main>
      <SiteChromeFooter />
    </div>
  );
}
