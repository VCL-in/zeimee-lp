import Image from "next/image";
import { ArrowUpRight, Check, ChevronUp } from "lucide-react";
import styles from "./column.module.css";

export type Service = {
  name: string;
  company: string;
  type: string;
  software: string;
  input: string;
  price: string;
  priceSummary?: string;
  fit: string;
  overview: string;
  points: string[];
  caution: string;
  automation: string;
  reviewFlow: string;
  posting: string;
  handwritten: string;
  passbook: string;
  trial: string;
  sources: { label: string; url: string }[];
};

export function ColumnService({
  service: s,
  id,
  checked,
  featured = false,
}: {
  service: Service;
  id: string;
  checked: string;
  featured?: boolean;
}) {
  const official = s.sources[0]?.url || "#table";
  return (
    <div
      id={id}
      className={`${styles.reviewProduct} ${featured ? styles.reviewProductSelected : ""}`}
    >
      <div className={styles.reviewProductContent}>
        <div className={styles.reviewProductHeader}>
          <div className={styles.productMark} aria-hidden="true">
            {featured ? (
              <Image
                src="/lp/zeimee-logo.png"
                alt=""
                width={1397}
                height={289}
                sizes="96px"
              />
            ) : (
              <span>
                {s.name.startsWith("STREAMED")
                  ? "ST"
                  : s.name.startsWith("freee")
                    ? "freee"
                    : s.name.startsWith("マネー")
                      ? "MF"
                      : s.name.startsWith("ACELINK")
                        ? "MJS"
                        : s.name.startsWith("BIZUP")
                          ? "BIZUP"
                          : s.name.split(" ")[0].slice(0, 4)}
              </span>
            )}
          </div>
          <div className={styles.reviewProductIdentity}>
            <h3>{s.name}</h3>
            <p>{s.company}</p>
            <span>{s.type}</span>
          </div>
        </div>
        {featured && (
          <div className={styles.reviewProductActions}>
            <a
              href={official}
              target={official.startsWith("/") ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              製品ページを確認する
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        )}
        <p className={styles.reviewProductOverview}>{s.overview}</p>
        <details className={styles.reviewProductDetails} open>
          <summary>
            <span className={styles.reviewShow}>詳細を開く</span>
            <span className={styles.reviewHide}>詳細を閉じる</span>
            <ChevronUp aria-hidden="true" />
          </summary>
          <div className={styles.reviewProductBody}>
            <dl className={styles.serviceSummary}>
              {[
                ["対応会計ソフト", s.software],
                ["入力データ", s.input],
                ["対象の事務所", s.fit],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.reviewPrice}>
              <strong>料金：</strong>
              <span>{s.price}</span>
            </p>
            <ul className={styles.reviewFeatures}>
              {s.points.map((point) => (
                <li key={point}>
                  <Check aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <dl className={styles.serviceWorkflow}>
              {[
                ["自動化する工程", s.automation],
                ["人が行う確認", s.reviewFlow],
                ["会計ソフトへの反映", s.posting],
                [
                  "手書き・紙通帳",
                  `手書き：${s.handwritten} 通帳：${s.passbook}`,
                ],
                ["試用・契約条件", s.trial],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.reviewCaution}>
              <strong>確認したい点：</strong>
              {s.caution}
            </p>
            <div className={styles.reviewProductBottom}>
              <span>{s.type}</span>
              {featured && (
                <a
                  href={official}
                  target={official.startsWith("/") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  サービス詳細を見る
                  <ArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
            <div className={styles.productSources}>
              <span>出典（{checked}確認）</span>
              {s.sources.map((src) =>
                featured ? (
                  <a
                    key={src.url}
                    href={src.url}
                    target={src.url.startsWith("/") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {src.label}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  <span key={src.url}>{src.label}</span>
                ),
              )}
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
