import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ColumnMeta } from "@/lib/columns";
import styles from "./column.module.css";

export function ColumnCover({
  column,
  compact = false,
}: {
  column: ColumnMeta;
  compact?: boolean;
}) {
  const design = column.coverDesign;
  if (!compact && design) {
    return (
      <div className={styles.comparisonCover}>
        <p className={styles.comparisonCoverIntro}>{design.intro}</p>
        <p className={styles.comparisonCoverTitle}>{design.title}</p>
        <div className={styles.comparisonCoverMain}>
          {design.illustration && (
            <Image
              className={styles.comparisonCoverIllustration}
              src={design.illustration}
              alt=""
              width={600}
              height={670}
              sizes="(max-width: 600px) 64px, (max-width: 1200px) 90px, 180px"
              preload
            />
          )}
          {design.count !== undefined && (
            <p className={styles.comparisonCoverCount}>
              <strong>{design.count}</strong>
              <span>選</span>
            </p>
          )}
          <div className={styles.comparisonCoverMessage}>
            <p>{design.message}</p>
            <span>{design.caption}</span>
          </div>
        </div>
      </div>
    );
  }
  if (compact && column.coverImage) {
    return (
      <div className={styles.coverPreview}>
        <Image
          src={column.coverImage}
          alt=""
          width={1200}
          height={630}
          sizes="(max-width: 600px) 100vw, 600px"
        />
      </div>
    );
  }
  return (
    <div className={`${styles.cover} ${compact ? styles.coverCompact : ""}`}>
      <Image
        className={styles.coverArt}
        src="/images/column/bookkeeping-ai-cover-v1.webp"
        alt=""
        fill
        sizes={
          compact
            ? "(max-width: 600px) 100vw, 600px"
            : "(max-width: 900px) 100vw, 824px"
        }
        preload={!compact}
      />
      <div className={styles.coverCopy}>
        <span className={styles.coverEyebrow}>
          ZEIMEE EDITORIAL / {column.category}
        </span>
        <p className={styles.coverSubtitle}>
          {column.coverSubtitle ?? "会計事務所のAI活用ガイド"}
        </p>
        <p className={styles.coverTitle}>{column.coverTitle ?? column.title}</p>
        <span className={styles.coverLabel}>
          {column.coverLabel ?? "現場に合う、業務改善のヒント"}
          <ArrowRight aria-hidden="true" />
        </span>
      </div>
      <span className={styles.coverEdition}>COMPARISON GUIDE</span>
    </div>
  );
}
