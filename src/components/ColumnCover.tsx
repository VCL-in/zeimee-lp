import Image from "next/image";
import {
  ArrowRight,
  ChartNoAxesCombined,
  ClipboardCheck,
  FileSpreadsheet,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { ColumnMeta } from "@/lib/columns";
import styles from "./column.module.css";

function CoverArtwork({
  column,
  asset,
  photo,
  compact,
}: {
  column: ColumnMeta;
  asset?: string;
  photo: boolean;
  compact: boolean;
}) {
  if (asset) {
    return (
      <div
        className={`${styles.editorialCoverArtwork} ${photo ? styles.editorialCoverPhoto : ""}`}
      >
        <Image
          src={asset}
          alt=""
          fill
          sizes={
            compact
              ? "(max-width: 600px) 42vw, 240px"
              : "(max-width: 900px) 42vw, 400px"
          }
          preload={!compact}
        />
        {photo && (
          <span className={styles.editorialCoverPhotoLabel}>生成イメージ</span>
        )}
      </div>
    );
  }

  const topic = `${column.category} ${column.coverDesign?.title ?? column.title}`;
  const theme = /セキュリティ|守秘|個人情報|同意|規程|ガイドライン/.test(topic)
    ? "security"
    : /費用|効果|自計化|月次/.test(topic)
      ? "analysis"
      : /導入|開発|API|MCP|変換|自動化/.test(topic)
        ? "workflow"
        : "documents";
  const TopicIcon =
    theme === "security"
      ? ShieldCheck
      : theme === "analysis"
        ? ChartNoAxesCombined
        : theme === "workflow"
          ? Workflow
          : ClipboardCheck;

  return (
    <div
      className={`${styles.editorialCoverArtwork} ${styles.editorialCoverDrawing}`}
      aria-hidden="true"
    >
      <div className={styles.editorialDrawingHalo} />
      <div className={styles.editorialDrawingSheet}>
        <div className={styles.editorialDrawingDots}>
          <i />
          <i />
          <i />
        </div>
        <FileSpreadsheet className={styles.editorialDrawingDocument} />
        <div className={styles.editorialDrawingLines}>
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className={styles.editorialDrawingBadge}>
        <TopicIcon />
      </div>
    </div>
  );
}

function EditorialCover({
  column,
  compact,
}: {
  column: ColumnMeta;
  compact: boolean;
}) {
  const design = column.coverDesign!;
  const asset = design.asset ?? design.illustration;
  const photo = design.assetKind === "photo" && Boolean(asset);
  const hasCount = design.count !== undefined;
  const countLabel = design.countLabel ?? "選";
  const titleLines = design.titleLines?.length
    ? design.titleLines
    : [design.title];

  return (
    <div className={styles.editorialCoverFrame} data-column-cover="editorial">
      <div
        className={[
          styles.editorialCover,
          hasCount ? styles.editorialCoverWithCount : "",
          photo ? styles.editorialCoverWithPhoto : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <p className={styles.editorialCoverIntro}>{design.intro}</p>
        <p className={styles.editorialCoverTitle}>
          {titleLines.map((line, index) => (
            <span key={`${index}-${line}`}>{line}</span>
          ))}
        </p>
        <div className={styles.editorialCoverMain}>
          <CoverArtwork
            column={column}
            asset={asset}
            photo={photo}
            compact={compact}
          />
          {hasCount && (
            <p
              className={`${styles.editorialCoverCount} ${countLabel.length > 2 ? styles.editorialCoverCountStacked : ""}`}
            >
              <strong>{design.count}</strong>
              <span>{countLabel}</span>
            </p>
          )}
          <div className={styles.editorialCoverMessage}>
            <p>{design.message}</p>
            <span>{design.caption}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ColumnCover({
  column,
  compact = false,
}: {
  column: ColumnMeta;
  compact?: boolean;
}) {
  const design = column.coverDesign;
  // The list uses the exported version of the same cover to keep rendering light.
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
  if (design && column.id !== "10001") {
    return <EditorialCover column={column} compact={compact} />;
  }
  if (!compact && design) {
    return (
      <div className={styles.comparisonCover} data-column-cover="comparison">
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
