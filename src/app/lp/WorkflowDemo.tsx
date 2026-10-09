"use client";
import { useRef, useState } from "react";
import { ArrowRight, Check, FileText, Search } from "lucide-react";
const labels = ["資料", "候補と根拠", "人が確認"];
export function WorkflowDemo() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function move(index: number) {
    setActive(index);
    tabs.current[index]?.focus();
  }
  return (
    <div className="visual-panel review-visual">
      <div className="visual-label">仕訳レビュー</div>
      <div
        className="review-tabs"
        role="tablist"
        aria-label="仕訳レビューの流れ"
      >
        {labels.map((label, i) => (
          <button
            key={label}
            ref={(n) => {
              tabs.current[i] = n;
            }}
            role="tab"
            id={`review-tab-${i}`}
            aria-controls="review-panel"
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                move((i + 1) % 3);
              }
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                move((i + 2) % 3);
              }
              if (e.key === "Home") {
                e.preventDefault();
                move(0);
              }
              if (e.key === "End") {
                e.preventDefault();
                move(2);
              }
            }}
          >
            <span>0{i + 1}</span>
            {label}
          </button>
        ))}
      </div>
      <div
        className="review-card"
        id="review-panel"
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={`review-tab-${active}`}
      >
        <div className="review-state" key={active}>
          {active === 0 ? (
            <>
              <FileText className="review-icon" />
              <h4>証憑を読み取る</h4>
              <p>
                証憑を読み取り、
                <br />
                仕訳に必要な情報を整理します。
              </p>
              <div className="review-status">
                <Check />
                資料の受け取り
              </div>
            </>
          ) : active === 1 ? (
            <>
              <Search className="review-icon" />
              <h4>仕訳候補と根拠を確認</h4>
              <div className="candidate">
                <span>勘定科目の候補</span>
                <strong>消耗品費</strong>
              </div>
              <p>参照：過去の仕訳・事務所のルール</p>
              <div className="review-status">AIによる候補・未承認</div>
            </>
          ) : (
            <>
              <Check className="review-icon" />
              <h4>担当者が承認</h4>
              <p>
                資料と候補を照らし合わせ、
                <br />
                確認・承認して次の仕事へ。
              </p>
              <div className="review-status">
                <Check />
                確認・承認の流れを設計
              </div>
            </>
          )}
        </div>
      </div>
      <div className="demo-bottom">
        <button
          type="button"
          onClick={() => setActive((active + 1) % 3)}
          aria-label="レビューの次のステップを見る"
        >
          次へ
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
