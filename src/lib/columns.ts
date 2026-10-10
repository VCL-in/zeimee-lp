export type ColumnMeta = {
  id: string;
  title: string;
  titleParts?: string[];
  description: string;
  category: string;
  coverTitle?: string;
  coverSubtitle?: string;
  coverLabel?: string;
  coverImage?: string;
  coverDesign?: {
    intro: string;
    title: string;
    count?: number;
    message: string;
    caption: string;
    illustration?: string;
  };
  publishedAt: string;
  updatedAt: string;
};

// 記事IDは10001から連番で採番し、公開後は変更・再利用しない。
// 新しい記事は先頭に追加する。一覧・サイトマップはこの配列から生成される。
export const columns: ColumnMeta[] = [
  {
    id: "10002",
    coverImage: "/images/column/10002-og.png",
    title: "税理士・会計事務所のAI活用｜どの業務に使うべきか12業務の早見表",
    description:
      "税理士・会計事務所がAIを使うべき業務を、記帳、自計化顧問先のチェック、年末調整、確定申告、相続、経営資料など12業務の早見表で整理します。AIが読む・写す・照合する工程と人が判断する工程の線引き、最初の1業務の選び方も解説します。",
    category: "AI活用",
    coverDesign: {
      intro: "どの業務にAIを使うべきか",
      title: "税理士事務所のAI活用",
      message: "12業務の早見表",
      caption: "人が判断する工程との線引きも解説",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10003",
    coverImage: "/images/column/10003-og.png",
    title: "会計事務所のChatGPT・生成AIの使い方｜業務別プロンプト例と確認手順",
    description:
      "会計事務所でChatGPTなどの生成AIを有効に使う方法を、資料依頼文、面談記録の要約、月次コメント、手順書づくり、税務の調べものの業務別プロンプト例で解説します。入力前の仮名化、数値を計算させない渡し方、出力の4点チェックも紹介します。",
    category: "生成AI",
    coverDesign: {
      intro: "すぐ使える指示文と確認手順",
      title: "会計事務所の生成AI活用",
      message: "使い方ガイド",
      caption: "業務別プロンプト例つき",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10004",
    coverImage: "/images/column/10004-og.png",
    title:
      "会計事務所の生成AIセキュリティ対策｜顧問先情報を守るために確認する7項目",
    description:
      "会計業務でAIを使うときに事務所が確認すべきセキュリティ対策を7項目で解説します。入力する情報、入力先の契約、顧問先ごとの境界と権限、会計ソフトの認証情報、承認と反映の区別、記録と事故対応、最終確認の責任を、業務の流れに沿って整理します。",
    category: "セキュリティ",
    coverDesign: {
      intro: "顧問先情報を守るために",
      title: "会計事務所のAIセキュリティ",
      message: "7つの確認項目",
      caption: "業務の流れに沿って整理",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10005",
    coverImage: "/images/column/10005-og.png",
    title: "会計事務所のAI導入の進め方｜業務の洗い出しから定着まで7ステップ",
    description:
      "会計事務所のAI導入を7ステップで解説します。目的と判断者の決め方、顧問先×帳票×会計ソフトでの業務の洗い出し、最初の業務の選び方、確認・承認の線引き、試験導入、本番切替と定着まで、つまずきやすい点と記入例を付けて紹介します。",
    category: "導入ガイド",
    coverDesign: {
      intro: "何から始めて、どう定着させるか",
      title: "会計事務所のAI導入",
      message: "7ステップ",
      caption: "業務の洗い出しから定着まで",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10006",
    coverImage: "/images/column/10006-og.png",
    title: "記帳代行業務のAI活用｜会計事務所の入力部門・経理BPOの工程別分担",
    description:
      "会計事務所の入力部門や記帳代行・経理BPOでAIを使う工程を、受付、仕分け、読み取り、仕訳候補、確認、会計ソフトへの取込、納品に分けて解説します。AIと人の分担、KPI、電子帳簿保存法の注意、税理士業務との境界まで整理します。",
    category: "記帳自動化",
    coverDesign: {
      intro: "入力部門・経理BPOのための",
      title: "記帳代行のAI活用",
      message: "工程別の分担",
      caption: "AIと人の役割を整理",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10007",
    coverImage: "/images/column/10007-og.png",
    title:
      "年末調整でAIを使える工程・使えない工程【令和8年分】マイナンバー対策つき",
    description:
      "会計事務所が受託する令和8年分の年末調整で、AIを使える工程と人が判断する工程を解説します。控除証明書の読み取り、記載漏れの検知、案内文の作成、マイナンバーをAIに渡さない設計と再委託の許諾まで整理します。",
    category: "AI活用",
    coverDesign: {
      intro: "令和8年分の年末調整",
      title: "年末調整とAI",
      message: "使える工程・使えない工程",
      caption: "マイナンバーの扱いも解説",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10008",
    coverImage: "/images/column/10008-og.png",
    title: "インボイス7割控除（経過措置70%）の仕訳と記帳対応【2026年10月〜】",
    description:
      "2026年10月から免税事業者等からの仕入れは7割控除になりました。会計事務所・記帳代行が見直す税区分と取引日による切替、帳簿への記載、控除できない部分の処理、登録番号の確認手順と、AIに任せられる範囲を解説します。",
    category: "記帳自動化",
    coverDesign: {
      intro: "2026年10月からの経過措置",
      title: "インボイス7割控除",
      message: "仕訳と記帳対応",
      caption: "会計事務所の実務ポイント",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10009",
    coverImage: "/images/column/10009-og.png",
    title: "税理士の守秘義務と生成AI｜顧問先情報を入力してよいかの整理と判断表",
    description:
      "顧問先情報を生成AIに入力してよいかを、税理士法38条・54条の守秘義務と、個人情報保護法の委託・外国にある第三者の規律から整理します。法人の情報と個人データの違いを押さえ、入力先×情報の種類の判断表で、事務所が自分で判断できるようにします。",
    category: "セキュリティ",
    coverDesign: {
      intro: "顧問先情報を入力してよいか",
      title: "税理士の守秘義務と生成AI",
      message: "判断表つき",
      caption: "法令をもとに整理",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10010",
    coverImage: "/images/column/10010-og.png",
    title: "税理士のAIガイドライン一覧【2026年10月時点】日税連・TKC・国の指針",
    description:
      "2026年10月時点で税理士・会計事務所が押さえるAI利用の指針を一覧にしました。日税連「税理士事務所のためのAI・クラウド活用ガイドライン」の公表状況、TKC全国会の方針、AI推進法、AI事業者ガイドライン第1.2版を整理します。",
    category: "セキュリティ",
    coverDesign: {
      intro: "2026年10月時点",
      title: "税理士のAIガイドライン",
      message: "指針の一覧",
      caption: "業界団体と国の枠組み",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10011",
    coverImage: "/images/column/10011-og.png",
    title:
      "個人情報保護法の令和8年改正と会計事務所のAI利用｜委託・漏えい報告の変更点",
    description:
      "2026年7月に公布された令和8年改正個人情報保護法のうち、会計事務所・記帳代行のAI利用と外部委託に関わる点を解説します。委託先の新しい規律、漏えい等報告の見直し、統計作成等の同意不要化、課徴金、施行時期を、現行法と分けて整理します。",
    category: "セキュリティ",
    coverDesign: {
      intro: "会計事務所への影響",
      title: "個人情報保護法の改正",
      message: "AI利用の変更点",
      caption: "委託・漏えい報告を整理",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10012",
    coverImage: "/images/column/10012-og.png",
    title: "確定申告の資料整理と入力にAIを使う｜会計事務所の工程別の使いどころ",
    description:
      "会計事務所の確定申告業務で、AIを使える工程と人が判断する工程を解説します。資料回収の案内、医療費の明細・源泉徴収票・不動産収支・寄附金の受領証の読み取りと集計、前年比較による漏れの検知、マイナポータル連携との使い分けを整理します。",
    category: "AI活用",
    coverDesign: {
      intro: "資料整理と入力の効率化",
      title: "確定申告とAI",
      message: "工程別の使いどころ",
      caption: "会計事務所の実務目線で解説",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10013",
    coverImage: "/images/column/10013-og.png",
    title:
      "AI利用に顧問先の同意は必要？同意書・顧問契約書・個人情報保護方針の見直し方",
    description:
      "会計事務所がAIを使うときの顧問先への同意・通知と、同意書・個人情報保護方針・顧問契約書の見直し方を解説します。書類に書く項目、外的環境の把握の記載、既存の顧問先への展開手順と記録の残し方を、チェック表で整理します。",
    category: "セキュリティ",
    coverDesign: {
      intro: "AI利用の説明と契約",
      title: "顧問先の同意とAI",
      message: "見直しのポイント",
      caption: "同意書・顧問契約書・方針",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10014",
    coverImage: "/images/column/10014-og.png",
    title:
      "会計事務所のAIツール選定セキュリティチェックシート｜ベンダーに送る質問票",
    description:
      "会計事務所・記帳代行がAIツールや開発会社を選ぶときのセキュリティ確認項目を、ベンダーに送れる質問票の形で整理します。学習利用と保持期間、処理地域、顧問先単位の境界、会計ソフトの認証情報、処理記録、再委託先、契約終了時の削除まで網羅します。",
    category: "セキュリティ",
    coverDesign: {
      intro: "ベンダー選定で使える",
      title: "AIツールのセキュリティ確認",
      message: "質問票",
      caption: "そのまま使えるチェックシート",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10015",
    coverImage: "/images/column/10015-og.png",
    title:
      "仕訳インポート形式への変換手順｜顧問先のExcel・明細を生成AIで整える",
    description:
      "顧問先から届くExcelや明細CSV、手書き帳票の読み取り結果を、会計ソフトの仕訳インポート形式へ変換する手順です。実データを渡さず変換ルール（数式・Power Query・VBA）だけを生成AIに作らせる方法と、取込前の検証項目を解説します。",
    category: "生成AI",
    coverDesign: {
      intro: "顧問先のExcel・明細を整える",
      title: "仕訳インポートへの変換",
      message: "変換手順",
      caption: "生成AIの使い方と確認方法",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10016",
    coverImage: "/images/column/10016-og.png",
    title:
      "会計事務所のAI費用対効果の測り方｜確認・修正時間まで含める計算と判定",
    description:
      "会計事務所・記帳代行のAI導入で費用対効果を測る方法を解説します。導入前に記録する5つの時間、確認・修正・差し戻しの時間まで含めた計算式、試験導入での判定基準と判定日の決め方を、記録シート付きで紹介します。",
    category: "導入ガイド",
    coverDesign: {
      intro: "確認・修正時間まで含める",
      title: "会計事務所のAI費用対効果",
      message: "測り方と判定",
      caption: "計算方法を具体例で解説",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10017",
    coverImage: "/images/column/10017-og.png",
    title: "会計事務所のAI導入は内製・外注・パッケージのどれ？5つの方法を比較",
    description:
      "会計事務所がAIを入れる5つの方法（パッケージ・SaaS、所内での自作、開発会社への外注、記帳BPOへの外注、FDE型の伴走開発）を比べます。費用の決まり方、必要な体制、保守、データの扱い、向く事務所・向かない事務所を整理します。",
    category: "導入ガイド",
    coverDesign: {
      intro: "内製・外注・パッケージ",
      title: "会計事務所のAI導入方法",
      message: "5つの方法を比較",
      caption: "事務所に合う選び方",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10018",
    coverImage: "/images/column/10018-og.png",
    title:
      "顧問先別の仕訳ルール台帳の作り方｜記帳マニュアルを担当者とAIで共有する",
    description:
      "顧問先ごとに違う仕訳ルールを台帳にして管理する方法を解説します。台帳に書く項目、過去の確定仕訳からルールを起こして再現できるか確かめる手順、会計ソフトの自動仕訳ルールとの使い分け、変更履歴と承認、AIにルールを渡すときの注意まで紹介します。",
    category: "記帳自動化",
    coverDesign: {
      intro: "担当者とAIで共有する",
      title: "顧問先別の仕訳ルール台帳",
      message: "作り方",
      caption: "記帳マニュアルの整え方",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10019",
    coverImage: "/images/column/10019-og.png",
    title:
      "自計化顧問先の仕訳と証憑をAIで照合する｜月次チェックの手順と確認範囲",
    description:
      "自計化している顧問先が入力した仕訳と、レシートや請求書などの証憑を突き合わせる月次チェックに、AIを使う方法を解説します。照合の単位と手順、不一致の分類、顧問先の自動仕訳を後から確認する観点、人が判断する範囲を整理します。",
    category: "AI活用",
    coverDesign: {
      intro: "月次チェックの手順",
      title: "自計化顧問先の証憑照合",
      message: "AIで効率化",
      caption: "確認範囲の決め方",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10020",
    coverImage: "/images/column/10020-og.png",
    title:
      "仕訳チェックにAIを使う範囲｜月次の科目・税区分から決算・申告書の整合まで",
    description:
      "会計事務所の上長レビューにAIを使う範囲を、仕訳・月次・決算申告の3層で解説します。科目・税区分・金額・計上時期のチェック項目を『ルールで見る・AIが候補を出す・人が判断する』に分け、指摘の記録と最終確認の残し方まで整理します。",
    category: "AI活用",
    coverDesign: {
      intro: "月次から決算・申告書まで",
      title: "仕訳チェックとAI",
      message: "使う範囲",
      caption: "チェック項目を整理",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10021",
    coverImage: "/images/column/10021-og.png",
    title:
      "ChatGPTで仕訳はどこまで作れる？会計事務所の実務範囲とAI-OCRの使い分け",
    description:
      "ChatGPTなどの汎用生成AIで通帳・領収書・手書き帳票から仕訳を作れるかを、会計事務所・記帳代行の実務の観点で解説します。起きやすい誤りと、残高検算・件数照合による確かめ方、AI-OCRとの使い分けを整理します。",
    category: "生成AI",
    coverDesign: {
      intro: "実務でどこまで使えるか",
      title: "ChatGPTで仕訳",
      message: "実務範囲を解説",
      caption: "AI-OCRとの使い分け",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10022",
    coverImage: "/images/column/10022-og.png",
    title:
      "会計ソフトとAIの連携方法を比較｜CSV・API・MCPの違いと権限・承認の設計",
    description:
      "CSV取込・API・MCP・会計ソフト内蔵のAIを、準備・必要な権限・誤登録の戻しやすさ・処理記録で比べます。APIとMCPを組み合わせる構成、認証情報の管理、承認と反映の区別、一部反映・結果不明への対応も整理します。",
    category: "セキュリティ",
    coverDesign: {
      intro: "CSV・API・MCPの違い",
      title: "会計ソフトとAIの連携",
      message: "方法を比較",
      caption: "権限と承認の設計",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10023",
    coverImage: "/images/column/10023-og.png",
    title:
      "税理士事務所の生成AI利用規程の作り方｜入力区分・確認・教育のひな形つき",
    description:
      "税理士事務所の生成AI利用規程の作り方を、ひな形付きで解説します。日税連の内部規律指針にAIの章を足す考え方、規程に入れる10項目、帳票ごとの入力区分の決め方、業務別の利用可否、誤入力時の対応、導入と年1回の見直しまで整理します。",
    category: "セキュリティ",
    coverDesign: {
      intro: "入力区分・確認・教育",
      title: "生成AI利用規程",
      message: "作り方",
      caption: "ひな形つきで解説",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10024",
    coverImage: "/images/column/10024-og.png",
    title: "記帳代行の品質管理｜AI-OCR導入後に要確認を優先する体制へ",
    description:
      "会計事務所の入力部門や記帳代行のダブルチェックを見直す方法です。全件検査と要確認の抽出、人の確認範囲、抜き取り検証、全件確認へ戻す条件、品質指標の運用をまとめます。",
    category: "記帳自動化",
    coverDesign: {
      intro: "AI-OCR導入後の体制づくり",
      title: "記帳代行の品質管理",
      message: "要確認を優先する",
      caption: "ダブルチェックの見直し方",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10025",
    coverImage: "/images/column/10025-og.png",
    title:
      "記帳代行・経理BPOのセキュリティ対策｜委託元の確認項目とAI利用・再委託",
    description:
      "記帳代行・経理BPOのセキュリティ対策を、委託元が確認する項目と受託側の答え方の両面から解説します。AIサービスの利用と再委託、マイナンバーの再委託の許諾、在宅オペレーター、顧客ごとのデータ区分、契約終了時の削除までを整理します。",
    category: "記帳自動化",
    coverDesign: {
      intro: "委託元が確認すること",
      title: "記帳代行・経理BPOのセキュリティ",
      message: "確認項目",
      caption: "AI利用・再委託の注意点",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10026",
    coverImage: "/images/column/10026-og.png",
    title:
      "相続税申告の預金取引履歴の整理にAIを使う｜複数口座を日付順に一覧化する手順",
    description:
      "相続税申告で取り寄せた複数口座の取引履歴を、日付順の一覧に整理する作業にAIを使う方法です。PDFの読み取り、口座をまたいだ並べ替え、残高による検算、大口の入出金の抽出をAIとプログラムで行い、名義預金などの判断は人が行う線引きを示します。",
    category: "AI活用",
    coverDesign: {
      intro: "相続税申告の実務",
      title: "預金取引履歴の整理",
      message: "AIで一覧化",
      caption: "複数口座を日付順にまとめる",
    },
    publishedAt: "2026-10-10T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
  {
    id: "10001",
    title: "記帳自動化ツールおすすめ10選を比較！選び方も解説",
    titleParts: ["記帳自動化ツール", "おすすめ10選を比較！", "選び方も解説"],
    description:
      "会計事務所・税理士事務所向けの記帳自動化ツールと導入支援10サービスを公式情報で調査比較。Zeimee、STREAMED、弥生、freeeなどの料金・対応会計ソフト・AIが担う工程・残る確認作業を整理し、事務所に合う選び方を解説します。",
    category: "記帳自動化",
    coverTitle: "記帳自動化ツール",
    coverSubtitle: "会計事務所のためのツール比較",
    coverLabel: "10の選択肢と、事務所に合う選び方",
    coverImage: "/images/column/bookkeeping-comparison-og-v2.png",
    coverDesign: {
      intro: "特徴・料金・選び方をわかりやすく解説",
      title: "記帳自動化ツール",
      count: 10,
      message: "徹底比較",
      caption: "選び方のポイントも解説",
      illustration: "/images/column/bookkeeping-ai-illustration-v2.webp",
    },
    publishedAt: "2026-10-09T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
];

export const COLUMN_AUTHOR = {
  name: "Zeimee編集部",
  url: "https://zeimee.com/column/10001#editorial-policy",
};

export function columnUrl(id: string) {
  return `https://zeimee.com/column/${id}`;
}

export function getColumn(id: string) {
  const column = columns.find((c) => c.id === id);
  if (!column) throw new Error(`Unknown column: ${id}`);
  return column;
}
