export const faqs: { question: string; answer: string }[] = [
  {
    question: "顧問先名を伏せれば、生成AIに入力してよいですか？",
    answer:
      "取引先名・金額・日付の組合せで特定できる場合があり、法人顧問先の売上などは名前を伏せても秘密としての性質が残り得ます。特定できないことと、入力先の学習利用・保持期間を確かめてから使ってください。",
  },
  {
    question: "ChatGPTなどの法人向けプランなら、顧問先の同意なしで使えますか？",
    answer:
      "一律にはいえません。個人データは、委託か第三者提供か、外国にある第三者への提供（個人情報保護法28条）に当たるかを契約と設定から確認します。守秘義務の観点から顧問先の許諾を得るかも別に検討します。",
  },
  {
    question: "学習に使わない設定にすれば、守秘義務違反になりませんか？",
    answer:
      "学習オフは確認点の1つにすぎません。一定期間の保持や人によるレビュー、フィードバック送信時の学習利用があるサービスもあります。38条の公的な解釈も確認できなかったため、許諾・契約・情報の絞り込みを組み合わせて判断してください。",
  },
  {
    question: "法人の顧問先だけなら、個人情報保護法は関係ありませんか？",
    answer:
      "法人そのものの情報は個人情報に当たりませんが、役員や従業員、取引先担当者の情報は個人情報です（通則編ガイドライン2-1）。給与データや請求書の担当者名を入力する場合は、個人情報保護法の整理も必要です。",
  },
  {
    question:
      "職員が個人アカウントで顧問先情報を入力してしまったら、どうなりますか？",
    answer:
      "職員本人の守秘義務（税理士法54条）に加え、所長の監督義務（41条の2）が問われ得ます。まず入力内容・日時・サービス・アカウント等を記録し、所長に報告した後、削除と保持条件の確認を行い、個人データを含むなら漏えい等報告の対象かを確認してください。",
  },
  {
    question: "税理士は生成AIの利用自体を禁止されていますか？",
    answer:
      "38条が禁じるのは正当な理由のない秘密の漏示・窃用です。生成AIの利用そのものを一律に禁止する規定は確認できませんでした。入力する情報と送信先の契約・取扱いを確認する必要があります。",
  },
  {
    question: "マイナンバーが写った書類を生成AIに読み取らせてもよいですか？",
    answer:
      "汎用の生成AIサービスには入力しない運用が基本と考えられます。番号法19条は提供できる場面の限定列挙で、同意があれば提供できる仕組みではありません。顧問先から個人番号関係事務の委託を受け、その処理をAI事業者に再委託する場合は、委託元の許諾と監督も必要です（10条・11条）。",
  },
  {
    question: "顧問先にAI利用を伝える必要はありますか？",
    answer:
      "守秘義務上の許諾、個人データの本人同意、顧問先との委託・再委託契約は別の論点です。サービス名・利用目的・入力範囲・取扱いを整理し、必要な説明や許諾を確認してください。同意書と顧問契約書の見直し方は記事10013で扱います。",
  },
];

export const references: {
  group: string;
  items: { title: string; meta: string; url?: string }[];
}[] = [
  {
    group: "法令（e-Gov法令検索）",
    items: [
      {
        title: "税理士法（昭和26年法律第237号）",
        meta: "デジタル庁 e-Gov法令検索、2025年10月1日施行分まで反映した現行版、2026-10-10確認",
        url: "https://laws.e-gov.go.jp/law/326AC1000000237",
      },
      {
        title: "個人情報の保護に関する法律（平成15年法律第57号）",
        meta: "デジタル庁 e-Gov法令検索、2026年10月1日施行分まで反映した現行版（令和8年法律第56号による改正は未施行）、2026-10-10確認",
        url: "https://laws.e-gov.go.jp/law/415AC0000000057",
      },
      {
        title:
          "行政手続における特定の個人を識別するための番号の利用等に関する法律（番号法）",
        meta: "デジタル庁 e-Gov法令検索、現行版、2026-10-10確認",
        url: "https://laws.e-gov.go.jp/law/425AC0000000027",
      },
      {
        title: "公認会計士法（昭和23年法律第103号）",
        meta: "デジタル庁 e-Gov法令検索、2026年8月12日施行分まで反映した現行版、2026-10-10確認",
        url: "https://laws.e-gov.go.jp/law/323AC0000000103",
      },
    ],
  },
  {
    group: "国税庁",
    items: [
      {
        title: "税理士法基本通達（第38条関係、第41条の2関係）",
        meta: "国税庁、令和7年6月1日現在、2026-10-10確認",
        url: "https://www.nta.go.jp/law/tsutatsu/kihon/zeirishi/02.htm",
      },
      {
        title:
          "税理士等・税理士法人に対する懲戒処分等の考え方（令和5年4月1日以後にした不正行為に係る懲戒処分等に適用）",
        meta: "財務省告示第104号（平成20年3月31日）、令和5年2月17日財務省告示第49号による改正、国税庁掲載、2026-10-10確認",
        url: "https://www.nta.go.jp/taxes/zeirishi/chokai/shobun/230401.htm",
      },
    ],
  },
  {
    group: "個人情報保護委員会",
    items: [
      {
        title:
          "個人情報の保護に関する法律についてのガイドライン（通則編）（2-1、3-4-4、3-5-1-2、3-6-3）",
        meta: "個人情報保護委員会、平成28年11月（令和8年6月一部改正）、2026-10-10確認",
        url: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/",
      },
      {
        title:
          "「個人情報の保護に関する法律についてのガイドライン」に関するQ&A Q7-37",
        meta: "個人情報保護委員会、平成30年12月追加、2026-10-10確認",
        url: "https://www.ppc.go.jp/all_faq_index/faq1-q7-37/",
      },
      {
        title: "同Q&A Q7-53",
        meta: "個人情報保護委員会、ページ上の更新日表示なし、2026-10-10確認",
        url: "https://www.ppc.go.jp/all_faq_index/faq1-q7-53/",
      },
      {
        title: "同Q&A Q7-54",
        meta: "個人情報保護委員会、2026-10-10確認",
        url: "https://www.ppc.go.jp/all_faq_index/faq1-q7-54/",
      },
      {
        title: "同Q&A Q12-1",
        meta: "個人情報保護委員会、令和3年9月更新、2026-10-10確認",
        url: "https://www.ppc.go.jp/all_faq_index/faq1-q12-1/",
      },
      {
        title: "同Q&A Q12-3",
        meta: "個人情報保護委員会、令和3年9月更新、2026-10-10確認",
        url: "https://www.ppc.go.jp/all_faq_index/faq1-q12-3/",
      },
      {
        title: "同Q&A Q12-4",
        meta: "個人情報保護委員会、令和3年9月更新、2026-10-10確認",
        url: "https://www.ppc.go.jp/all_faq_index/faq1-q12-4/",
      },
      {
        title: "生成AIサービスの利用に関する注意喚起等について",
        meta: "個人情報保護委員会、2023年6月2日、2026-10-10確認",
        url: "https://www.ppc.go.jp/news/careful_information/230602_AI_utilize_alert/",
      },
      {
        title:
          "クラウドサービス提供事業者が個人情報保護法上の個人情報取扱事業者に該当する場合の留意点について（注意喚起）",
        meta: "個人情報保護委員会、2024年3月25日、2026-10-10確認",
        url: "https://www.ppc.go.jp/files/pdf/240325_alert_cloud_service_provider.pdf",
      },
      {
        title: "特定個人情報の適正な取扱いに関するガイドライン（事業者編）",
        meta: "個人情報保護委員会、平成26年12月11日（令和7年6月一部改正）、2026-10-10確認",
        url: "https://www.ppc.go.jp/files/pdf/2506_my_number_guideline_jigyosha.pdf",
      },
      {
        title:
          "特定個人情報の適正な取扱いに関するガイドライン（事業者編）Q&A Q3-12",
        meta: "個人情報保護委員会、2026-10-10確認",
        url: "https://www.ppc.go.jp/all_faq_index/faq5-q3-12/",
      },
      {
        title: "令和8年 改正個人情報保護法について",
        meta: "個人情報保護委員会、2026年10月1日更新、2026-10-10確認",
        url: "https://www.ppc.go.jp/personalinfo/legal/r8kaiseihogohou/",
      },
      {
        title: "個人情報保護法等の一部を改正する法律について（概要資料）",
        meta: "個人情報保護委員会事務局、2026年7月、2026-10-10確認",
        url: "https://www.ppc.go.jp/files/pdf/260717_kaiseihounitsuite.pdf",
      },
    ],
  },
  {
    group: "総務省・経済産業省",
    items: [
      {
        title: "AI事業者ガイドライン（第1.2版）",
        meta: "総務省・経済産業省、2026年3月31日公表、2026-10-10確認",
        url: "https://www.soumu.go.jp/main_sosiki/kenkyu/ai_network/02ryutsu20_04000019.html",
      },
    ],
  },
  {
    group: "業界団体",
    items: [
      {
        title:
          "品質管理基準報告書第1号実務指針第1号「公認会計士業務における情報セキュリティの指針」",
        meta: "日本公認会計士協会、2008年1月16日制定・2022年10月13日最終改正、2026-10-10確認",
        url: "https://jicpa.or.jp/specialized_field/2-24-hkh1j_1-2-20221013.pdf",
      },
      {
        title:
          "「税理士事務所のためのAI・クラウド活用ガイドラインの策定について」（会員向けお知らせ）",
        meta: "日本税理士会連合会、2026年9月30日、本文は会員専用のため内容は未確認、2026-10-10確認",
      },
      {
        title:
          "TKC全国会「AIの活用に関する基本方針および会計事務所における必要な対応」",
        meta: "株式会社TKC ニュースリリース（TKC全国会）、2026年6月3日、2026-10-10確認",
      },
    ],
  },
  {
    group: "生成AIサービス提供会社の公開情報（リンクは設けていません）",
    items: [
      {
        title: "OpenAI「OpenAI におけるエンタープライズプライバシー」",
        meta: "OpenAI、2026年1月8日更新、2026-10-10確認",
      },
      {
        title:
          "OpenAI Help Center「モデルのパフォーマンスを向上させるためのデータの使用方法」",
        meta: "OpenAI、更新日はページ上の相対表示のみ、2026-10-10確認",
      },
      {
        title: "Google「Gemini アプリのプライバシー ハブ」",
        meta: "Google、2026年9月24日最終更新、2026-10-10確認",
      },
      {
        title: "Google「Google Workspace の生成 AI に関するプライバシー ハブ」",
        meta: "Google、2026年10月6日最終更新、2026-10-10確認",
      },
      {
        title: "Google「Gemini API Additional Terms of Service」",
        meta: "Google、2026年4月28日最終更新、2026-10-10確認",
      },
      {
        title:
          "Microsoft Learn「Microsoft Copilot のデータ、プライバシー、セキュリティ」",
        meta: "Microsoft、2026年7月9日（翻訳更新2026年10月8日）、2026-10-10確認",
      },
      {
        title:
          "Anthropic Privacy Center「How long do you store my data?」（Consumers）",
        meta: "Anthropic、2026年7月1日表示、2026-10-10確認",
      },
      {
        title:
          "Anthropic Privacy Center「Is my data used for model training?」（Commercial Customers）",
        meta: "Anthropic、ページ上の更新日表示に従う、2026-10-10確認",
      },
    ],
  },
];
