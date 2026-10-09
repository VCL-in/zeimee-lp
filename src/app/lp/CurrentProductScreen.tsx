import {
  Inbox,
  Files,
  Users,
  Settings,
  ChevronsLeft,
  ChevronDown,
  Search,
  Play,
  LogOut,
  FileText,
  Check,
  X,
} from "lucide-react";
const rows = [
  ["09/02", "事務用品の購入", "消耗品費", "12,800", "普通預金"],
  ["09/03", "クラウドサービス利用料", "通信費", "8,800", "普通預金"],
  ["09/05", "オフィス賃料", "地代家賃", "165,000", "普通預金"],
  ["09/06", "振込手数料", "支払手数料", "330", "普通預金"],
  ["09/08", "業務用備品の購入", "消耗品費", "24,200", "普通預金"],
];
export function CurrentProductScreen() {
  return (
    <div
      className="current-product"
      role="img"
      aria-label="現行ZeimeeのレビューUIをもとにした架空データの画面モック"
    >
      <aside className="product-sidebar">
        <ChevronsLeft className="sidebar-collapse" />
        <small>業務</small>
        <div className="selected">
          <Inbox />
          レビュー
        </div>
        <div>
          <Files />
          ファイル
        </div>
        <small>管理</small>
        <div>
          <Users />
          顧問先
        </div>
        <div>
          <Settings />
          設定
        </div>
        <div className="demo-office">
          <span>Z</span>デモ事務所
          <ChevronDown />
        </div>
        <div>
          <LogOut />
          ログアウト
        </div>
        <footer>
          ヘルプ
          <br />
          プライバシー
          <br />
          利用規約
        </footer>
      </aside>
      <div className="product-workspace">
        <header className="product-toolbar">
          <span className="product-primary">
            <Play />
            会計ソフト反映（5件）
          </span>
          <span className="product-company">
            <Users />
            サンプル株式会社
            <ChevronDown />
          </span>
        </header>
        <div className="product-filters">
          {[
            ["対象月", "2026年09月"],
            ["明細口座", "すべての明細口座"],
            ["入出金", "すべて"],
            ["顧問先確認", "すべて"],
            ["取引日", "年 / 月 / 日"],
            ["金額", "最小値 〜 最大値"],
            ["取引内容", "摘要・取引先など"],
          ].map(([label, value]) => (
            <div key={label}>
              <small>{label}</small>
              <span>
                {value}
                <ChevronDown />
              </span>
            </div>
          ))}
          <div className="product-filter-bottom">
            <span>5件</span>
            <span className="product-primary">
              <Search />
              検索
            </span>
            <span>条件をクリア</span>
          </div>
        </div>
        <div className="product-category">
          すべて <b>5</b>
        </div>
        <div className="product-file">
          <FileText />
          入出金明細_202609.pdf <span>5件</span>
        </div>
        <div className="product-table">
          <div className="product-table-head">
            <span>日付</span>
            <span>摘要</span>
            <span>借方｜科目・補助科目</span>
            <span>借方｜金額・税区分</span>
            <span>貸方｜科目・補助科目</span>
            <span>貸方｜金額・税区分</span>
            <span />
          </div>
          {rows.map(([date, memo, account, amount, credit]) => (
            <div className="product-table-row" key={date}>
              <div>
                <span className="product-input">{date}</span>
                <small className="product-out">出金</small>
              </div>
              <div>
                <span className="product-input">{memo}</span>
              </div>
              <div>
                <span className="product-input">
                  {account}
                  <ChevronDown />
                </span>
                <small>補助科目</small>
              </div>
              <div>
                <span className="product-input amount">{amount}</span>
                <small>課税仕入 10%</small>
              </div>
              <div>
                <span className="product-input">
                  {credit}
                  <ChevronDown />
                </span>
                <small>普通預金</small>
              </div>
              <div>
                <span className="product-input amount">{amount}</span>
                <small>対象外</small>
              </div>
              <div className="product-actions">
                <span>
                  <X />
                  却下
                </span>
                <span>
                  <Check />
                  承認
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="product-add">
          仕訳を直接入力 <small>必須項目を入力すると自動保存されます</small>
          <span>＋</span>
        </div>
      </div>
    </div>
  );
}
