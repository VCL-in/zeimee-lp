/** 記事10008（インボイス7割控除の仕訳と記帳対応）で使う表・参考資料のデータ。確認日はすべて2026-10-10。 */

export const CHECKED = "2026年10月10日";

export const rateRows: string[][] = [
  ["2023年10月1日〜2026年9月30日", "80%", "附則52条1項"],
  ["2026年10月1日〜2028年9月30日", "70%", "附則53条1項1号"],
  ["2028年10月1日〜2030年9月30日", "50%", "附則53条1項2号"],
  ["2030年10月1日〜2031年9月30日", "30%", "附則53条1項3号"],
  ["2031年10月1日以後", "控除不可（経過措置なし）", "—"],
];

export const capStartRows: string[][] = [
  ["9月決算の法人", "2026年9月期まで", "2026年10月1日開始の事業年度から"],
  [
    "12月決算の法人・個人事業者",
    "2026年12月期（2026年分）まで",
    "2027年1月1日開始の課税期間から",
  ],
  ["3月決算の法人", "2027年3月期まで", "2027年4月1日開始の事業年度から"],
  [
    "課税期間を短縮している事業者",
    "2026年10月1日前に開始した課税期間",
    "2026年10月1日以後に開始する課税期間から（集計方法は個別に確認）",
  ],
];

export const filingRows: string[][] = [
  [
    "本則課税",
    "仕入税額を実額で計算するため控除額が変わる",
    "70%の税区分、帳簿の記載、自動仕訳ルール",
  ],
  [
    "簡易課税",
    "納付税額には直接影響しない",
    "仮払消費税等の計上方法、本則課税に戻る可能性",
  ],
  [
    "2割特例",
    "2026年9月30日を含む課税期間で終了。納付税額には直接影響しない",
    "終了後の申告方法",
  ],
  [
    "3割特例（個人事業者のみ）",
    "2027年分・2028年分。納付税額には直接影響しない",
    "免税事業者から登録した個人事業者か、特例を使える課税期間かを確認",
  ],
];

export const entryRows: string[][] = [
  [
    "10%・税抜経理・70%（免税事業者への外注費）",
    "外注費 103,000／仮払消費税等 7,000",
    "普通預金 110,000",
  ],
  [
    "10%・税抜経理・80%（9月以前の外注費）",
    "外注費 102,000／仮払消費税等 8,000",
    "普通預金 110,000",
  ],
  [
    "10%・登録事業者（適格請求書あり）",
    "外注費 100,000／仮払消費税等 10,000",
    "普通預金 110,000",
  ],
  [
    "8%軽減・70%（食品仕入10,800円）",
    "仕入 10,240／仮払消費税等 560",
    "普通預金 10,800",
  ],
  [
    "10%・70%（建物購入1,100万円）",
    "建物 10,300,000／仮払消費税等 700,000",
    "普通預金 11,000,000",
  ],
  [
    "10%・税込経理・70%",
    "外注費 110,000（税区分：70%控除対象）",
    "普通預金 110,000",
  ],
];

export const boundaryRows: string[][] = [
  ["9月28日納品、10月に請求・支払", "引渡日", "80%"],
  ["9月21日〜10月20日の清掃業務", "役務の完了日", "70%"],
  [
    "9月分と10月分の納品をまとめた請求書",
    "明細ごとの納品日",
    "9月分80%、10月分70%",
  ],
  ["9月に仕入れた商品を10月に返品", "元の課税仕入れ", "80%"],
  [
    "2026年1月に支払った1年分の保守料（短期前払費用）",
    "短期前払費用の要件を満たし継続処理する場合の支出日",
    "全額80%（Q&A問113-4の事例）",
  ],
  [
    "9月分と10月分を月単位で完了する保守サービス",
    "契約上の役務の単位・完了日",
    "9月完了分80%、10月完了分70%",
  ],
  [
    "9月にカード購入・納品、10月に口座引落し",
    "引渡日（カード引落日ではない）",
    "80%",
  ],
  [
    "職員が9月に立替購入・納品、10月に精算",
    "事務所が受けた課税仕入れの引渡日",
    "80%（立替・精算日だけで判定しない）",
  ],
];

export const accountingRows: string[][] = [
  [
    "原則",
    "70%相当だけを仮払消費税等とし、30%相当は費用・取得価額に含める",
    "取引ごとに税区分を付ける",
  ],
  [
    "10/110で計上し、決算で差額を処理",
    "問7の例は消耗品費。差額を雑損失としても申告調整不要とする例示がある",
    "交際費等・資産に一律適用しない。資産は取得価額への調整を確認（問8）。70%への改訂未確認",
  ],
  [
    "特例①（簡易課税・2割特例の事業年度）",
    "継続適用を条件に、すべての課税仕入れで10/110を仮払消費税等にできる",
    "本則課税に戻る年度に注意。3割特例への取扱いの拡張は未確認",
  ],
];

export const softwareRows: string[][] = [
  [
    "freee会計",
    "「課対仕入（控70）10%」「課対仕入（控70）8%（軽）」などの税区分",
    "ヘルプ「消費税の仕入税額控除の経過措置について」（更新日は確認資料の表示に従う）",
  ],
  [
    "マネーフォワード クラウド会計",
    "仕訳の「インボイス」欄で70%・50%・30%を選択。取引先の登録内容と期間で自動反映する設定あり。お知らせ時点では消費税申告機能が新しい割合に未対応と記載（その後は確認できなかった）",
    "お知らせ「令和8年度税制改正への対応を行いました」（2026年7月9日）",
  ],
  [
    "マネーフォワード クラウド経費",
    "2026年8月6日に「70%控除」を追加。それ以前に登録した10月以降の日付の明細は手動で編集が必要",
    "お知らせ「インボイス経過措置の『70%控除』への対応について」（2026年6月29日公開・8月10日追記）",
  ],
  [
    "弥生会計（やよいの青色申告）",
    "70%への対応を「弥生会計（やよいの青色申告）27」で提供すると案内。税区分名は確認できなかった",
    "サポート情報 ID:ida31318（掲載日の記載なし）",
  ],
];

export const lookupRows: string[][] = [
  [
    "公表サイトで検索",
    "登録番号で取引時点の有効性を確認。一度に10件まで",
    "氏名・法人名では検索できない",
  ],
  [
    "全件データ",
    "前月末時点の全件を毎月作成（CSV・XML・JSON）",
    "個人事業者は氏名・屋号・所在地など10項目が削除",
  ],
  ["差分データ", "新規・取消・失効などを日次で作成。過去40日分", "同上"],
  [
    "Web-API",
    "登録番号や期間（差分）を指定して自社システムで取得",
    "アプリケーションIDの審査（新規発行に1か月から1か月半程度）、利用規約への同意。APIを使うサービスでは規約に沿った出典等の明示",
  ],
];

export const aiScopeRows: string[][] = [
  [
    "証憑の読み取り",
    "日付・金額・取引先名・登録番号",
    "読み取り誤り、明細ごとの納品日",
  ],
  [
    "登録番号の照合",
    "形式チェック、マスタ・公表データとの照合",
    "該当なし・名称不一致の確認",
  ],
  [
    "税区分の候補付け",
    "取引日と登録状況から80%・70%・通常の候補",
    "課税仕入れを行った日の確定",
  ],
  ["またぎ取引・返品", "9月・10月が混在する請求書、返品の抽出", "割合の確定"],
  ["1億円上限", "取引先ごとの累計", "超えた部分の扱い"],
  ["適用可否の判断", "任せない", "申告方法・特例の判断は税理士"],
  ["帳簿の確定", "任せない", "担当者が確認・承認"],
];

export type Reference = { title: string; meta: string; url: string };

export const qaItems: { label: string; url: string }[] = [
  {
    label: "問106-2",
    url: "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/pdf/qa/106-2.pdf",
  },
  {
    label: "問109",
    url: "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/pdf/qa/109.pdf",
  },

  {
    label: "問112",
    url: "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/pdf/qa/112.pdf",
  },
  {
    label: "問113",
    url: "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/pdf/qa/113.pdf",
  },
  {
    label: "問113-2",
    url: "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/pdf/qa/113-2.pdf",
  },
  {
    label: "問113-3",
    url: "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/pdf/qa/113-3.pdf",
  },
  {
    label: "問113-4",
    url: "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/pdf/qa/113-4.pdf",
  },
  {
    label: "問130",
    url: "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/pdf/qa/130.pdf",
  },
];

export const impactRows: string[][] = [
  ["11万円", "1,000円", "12,000円"],
  ["33万円", "3,000円", "36,000円"],
  ["55万円", "5,000円", "60,000円"],
];

export const references: Reference[] = [
  {
    title: "Web-APIに関するよくある質問（アプリケーションID・出典等）",
    meta: "国税庁、適格請求書発行事業者公表サイト",
    url: "https://www.invoice-kohyo.nta.go.jp/faq/faq-category/400/faq0017.html",
  },
  {
    title: "インボイス制度 令和8年度税制改正特集",
    meta: "国税庁、令和8年度改正の特集",
    url: "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice-review/index.htm",
  },
  {
    title: "インボイス制度に関する令和8年度税制改正について（リーフレット）",
    meta: "国税庁、令和8年4月（令和8年5月改訂）",
    url: "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice-review/pdf/0026004-099-01-1.pdf",
  },
  {
    title: "多く寄せられるご質問（インボイス制度）",
    meta: "国税庁、令和8年4月1日更新",
    url: "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/pdf/0521-1334-faq.pdf",
  },
  {
    title: "消費税経理通達関係Q&A",
    meta: "国税庁、令和3年2月（令和5年12月改訂）",
    url: "https://www.nta.go.jp/law/joho-zeikaishaku/hojin/shouhizei_faq/pdf/r0512/all.pdf",
  },
  {
    title: "消費税法等の施行に伴う法人税の取扱いについて（法令解釈通達）",
    meta: "国税庁、最終改正 令和5年12月27日",
    url: "https://www.nta.go.jp/law/tsutatsu/kobetsu/hojin/890301/index.htm",
  },
  {
    title: "消費税法基本通達 第11章第3節（課税仕入れ等の時期）",
    meta: "国税庁",
    url: "https://www.nta.go.jp/law/tsutatsu/kihon/shohi/11/03.htm",
  },
  {
    title: "消費税法（本法及び掲載されている改正法附則）",
    meta: "e-Gov法令検索（デジタル庁）、2026年10月1日施行版",
    url: "https://laws.e-gov.go.jp/law/363AC0000000108",
  },
  {
    title: "税理士法",
    meta: "e-Gov法令検索（デジタル庁）、2025年10月1日施行版",
    url: "https://laws.e-gov.go.jp/law/326AC1000000237",
  },
  {
    title: "特集 令和8年度 税制改正（国税）等について（ファイナンス）",
    meta: "財務省、2026年4月号",
    url: "https://www.mof.go.jp/public_relations/finance/202604/202604c.html",
  },
  {
    title: "適格請求書発行事業者公表サイト",
    meta: "国税庁",
    url: "https://www.invoice-kohyo.nta.go.jp/",
  },
  {
    title: "登録番号とは（適格請求書発行事業者公表サイト）",
    meta: "国税庁",
    url: "https://www.invoice-kohyo.nta.go.jp/about-toroku/index.html",
  },
  {
    title: "よくある質問（公表事項）",
    meta: "国税庁（適格請求書発行事業者公表サイト）",
    url: "https://www.invoice-kohyo.nta.go.jp/faq/faq-category/100/faq0025.html",
  },
  {
    title: "公表情報ダウンロード",
    meta: "国税庁（適格請求書発行事業者公表サイト）",
    url: "https://www.invoice-kohyo.nta.go.jp/download/index.html",
  },
  {
    title: "全件データファイル及び差分データファイルの提供再開について",
    meta: "国税庁、令和4年9月26日公開・令和5年4月4日更新",
    url: "https://www.invoice-kohyo.nta.go.jp/news/r04/r04news04.html",
  },
  {
    title: "適格請求書発行事業者公表システムWeb-API機能",
    meta: "国税庁",
    url: "https://www.invoice-kohyo.nta.go.jp/web-api/index.html",
  },
  {
    title: "適格請求書発行事業者公表システムWeb-API機能利用規約",
    meta: "国税庁、令和8年9月21日施行の一部改正",
    url: "https://www.invoice-kohyo.nta.go.jp/web-api/riyou_kiyaku.html",
  },
];
