import type { Metadata } from "next";
import { ColumnArticle } from "@/components/ColumnArticle";
import { columnUrl, getColumn } from "@/lib/columns";
import detail from "@/components/detail.module.css";
import styles from "@/components/column.module.css";

const column = getColumn("accounting-firm-bookkeeping-automation-comparison");
const CHECKED = "2026年10月9日";

export const metadata: Metadata = {
  title: column.title,
  description: column.description,
  alternates: { canonical: columnUrl(column.slug) },
  openGraph: {
    title: column.title,
    description: column.description,
    url: columnUrl(column.slug),
    type: "article",
    publishedTime: column.publishedAt,
    modifiedTime: column.updatedAt,
    locale: "ja_JP",
    siteName: "Zeimee",
  },
};

const toc = [
  { id: "types", label: "記帳自動化ツールは4タイプに分かれる" },
  { id: "checklist", label: "選ぶ前に確認したい5つのこと" },
  { id: "table", label: "比較早見表" },
  { id: "services", label: "会計事務所向け 記帳自動化・仕訳AIツール10選" },
  { id: "how-to-choose", label: "事務所のタイプ別の選び方" },
  { id: "steps", label: "導入の進め方とつまずきやすい点" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

type Service = {
  name: string;
  company: string;
  type: string;
  software: string;
  input: string;
  price: string;
  fit: string;
  overview: string;
  points: string[];
  caution: string;
  sources: { label: string; url: string }[];
};

const services: Service[] = [
  {
    name: "STREAMED",
    company: "株式会社マネーフォワード",
    type: "証憑データ化（AI＋人の確認）",
    software: "マネーフォワード、freee、弥生など多数の会計ソフトへ出力",
    input: "スキャン・撮影した領収書、通帳など",
    price:
      "基本料金 月11,000円＋1仕訳22円（税込）、初期費用0円、顧問先数無制限",
    fit: "紙の証憑が多く、会計ソフトが顧問先ごとに異なる事務所",
    overview:
      "領収書や通帳をスキャンしてアップロードすると、仕訳データに変換して会計ソフト用に出力できる記帳代行支援サービスです。",
    points: [
      "顧問先の追加料金がなく、事務所内の利用人数も無制限",
      "1仕訳あたりの従量課金のため、処理量に応じて費用が変わる",
      "複数の会計ソフトへの出力に対応",
    ],
    caution:
      "データ化した仕訳の確認・修正や、顧問先ごとの処理ルールの整備は事務所側で行う前提です。",
    sources: [{ label: "STREAMED 公式サイト", url: "https://streamedup.com/" }],
  },
  {
    name: "弥生 記帳代行支援サービス",
    company: "弥生株式会社",
    type: "証憑データ化＋口座連携",
    software: "弥生会計",
    input: "証憑画像、口座・カード明細",
    price:
      "有償プラン 月10,000円（10ライセンス）＋追加ライセンス500〜900円＋証憑データ化18円／明細（税抜）。最大3か月の無料体験プランあり",
    fit: "弥生会計の顧問先が中心の事務所（弥生PAP会員）",
    overview:
      "弥生PAP会員の会計事務所向けに、証憑のデータ化や口座連携、証憑管理をまとめて提供するサービスです。",
    points: [
      "証憑データ化は2名のオペレーターによる目視確認で、精度99.9%と公表",
      "無料体験プランで実際の顧問先データを試せる",
      "弥生会計との連携を前提とした運用",
    ],
    caution:
      "弥生PAPへの加入が前提で、弥生会計以外の顧問先には使いにくい点に注意が必要です。",
    sources: [
      {
        label: "弥生 記帳代行支援サービス",
        url: "https://www.yayoi-kk.co.jp/pap/service/efficiency/kichodaiko/",
      },
    ],
  },
  {
    name: "freee会計 記帳代行プラン",
    company: "フリー株式会社",
    type: "会計ソフト内蔵の自動化",
    software: "freee会計",
    input: "銀行・カード連携、証憑のOCR",
    price:
      "プライム 月1,000円×3事業所〜、シンプル 月500円×10事業所〜（税抜、事業所単位の従量課金あり）",
    fit: "freee会計の顧問先が多く、顧問先側の費用負担をなくしたい事務所",
    overview:
      "freee認定アドバイザー向けのプランで、顧問先の費用負担なく、事務所がfreee会計で記帳を代行できます。",
    points: [
      "1事業所あたりの料金で始めやすい",
      "銀行・カード連携による明細の自動取込と仕訳の自動登録",
      "2026年8月には記帳・月次チェックなどを支援する「freee顧問先管理 | AIエージェント」も発表",
    ],
    caution:
      "認定アドバイザー制度への加入が前提です。freee会計以外の顧問先は対象外です。",
    sources: [
      {
        label: "freee 記帳代行プラン",
        url: "https://adv.freee.co.jp/advisor/bookkeeping",
      },
      {
        label: "freee顧問先管理 | AIエージェント 発表（PR TIMES）",
        url: "https://prtimes.jp/main/html/rd/p/000002128.000006428.html",
      },
    ],
  },
  {
    name: "マネーフォワード クラウド会計 記帳代行プラン",
    company: "株式会社マネーフォワード",
    type: "会計ソフト内蔵の自動化",
    software: "マネーフォワード クラウド会計",
    input: "金融機関などのデータ連携、STREAMEDとの併用",
    price:
      "月50,000円（STREAMED併用時は月35,000円）、顧問先数無制限、職員10IDまで。11ID目から1IDにつき3,000円",
    fit: "マネーフォワードの顧問先が多く、顧問先数が多い事務所",
    overview:
      "マネーフォワード クラウドの公認メンバー向けに、顧問先数無制限で記帳代行ができるプランです。",
    points: [
      "顧問先数に関係なく定額で利用できる",
      "STREAMEDと組み合わせて紙証憑のデータ化にも対応",
      "金融機関などとのデータ連携による明細取込",
    ],
    caution:
      "公認メンバー制度の条件を満たす必要があります。顧問先数が少ないと割高になりやすい料金体系です。",
    sources: [
      {
        label: "マネーフォワード クラウド 記帳代行プラン",
        url: "https://biz.moneyforward.com/mfc-partner/migration/",
      },
    ],
  },
  {
    name: "JDL AI-OCR・仕訳入力システム",
    company: "株式会社日本デジタル研究所（JDL）",
    type: "会計事務所向けシステムのAI-OCR",
    software: "JDLのシステム",
    input: "通帳・証憑のAI-OCR、明細データ",
    price: "要問い合わせ",
    fit: "JDLのシステムで記帳業務を行っている事務所",
    overview:
      "会計事務所向けシステムを提供するJDLの、AI-OCRや仕訳入力を支援する機能です。",
    points: [
      "通帳や証憑の読み取りから仕訳入力までをJDLのシステム内で完結",
      "既存のJDL運用を大きく変えずに導入しやすい",
    ],
    caution:
      "料金や対象機能は契約内容によって異なるため、販売窓口への確認が必要です。",
    sources: [
      { label: "JDL 公式サイト", url: "https://www.jdl.co.jp/ah/strength/" },
    ],
  },
  {
    name: "ACELINK NX-Pro 会計大将（AI-OCR・AI仕訳）",
    company: "株式会社ミロク情報サービス（MJS）",
    type: "会計事務所向けシステムのAI-OCR",
    software: "MJSのシステム",
    input: "通帳・領収書のAI-OCR、明細データ",
    price: "要問い合わせ",
    fit: "MJSのシステムを利用している事務所",
    overview:
      "MJSの会計事務所向けERPに搭載されたAI-OCR機能です。2024年に機能強化が発表されています。",
    points: [
      "通帳やレシート、手書き領収書などの読み取りに対応",
      "MJSのシステム内で仕訳まで処理できる",
    ],
    caution: "料金は非公開のため、見積もりが必要です。",
    sources: [
      {
        label: "MJS ニュースリリース（2024年）",
        url: "https://www.mjs.co.jp/news/news_2024/000000350.000018493/",
      },
    ],
  },
  {
    name: "TKC FXシリーズ 証憑保存機能（AI読取り）",
    company: "株式会社TKC",
    type: "会計ソフト内蔵の自動化",
    software: "TKC FXシリーズ",
    input: "証憑の読み取り",
    price: "要問い合わせ",
    fit: "TKC会員事務所で、顧問先がFXシリーズを利用している場合",
    overview:
      "TKCのFXシリーズで、電子取引やスキャナ保存に対応しながら証憑を保存・活用できる機能です。",
    points: [
      "電子帳簿保存法への対応と証憑保存を一体で運用できる",
      "TKC会員事務所経由での導入",
    ],
    caution: "TKCの会員事務所・FXシリーズ利用が前提です。",
    sources: [
      {
        label: "TKC FXシリーズ 証憑保存機能",
        url: "https://www.tkc.jp/fx/tds/",
      },
    ],
  },
  {
    name: "ソリマチ 会計事務所クラウド",
    company: "ソリマチ株式会社",
    type: "会計事務所向けシステムの自動化",
    software: "MA1など（ソリマチ製品）",
    input: "明細の取込など",
    price: "要問い合わせ",
    fit: "ソリマチ製品を利用している事務所",
    overview:
      "記帳代行の自動化やMA1との連携、経営診断などを提供する会計事務所向けクラウドサービスです。",
    points: ["記帳代行の自動化をうたう", "MA1との連携"],
    caution: "料金は非公開のため、見積もりが必要です。",
    sources: [
      {
        label: "ソリマチ 会計事務所クラウド",
        url: "https://sorimachi.co.jp/officecloud/",
      },
    ],
  },
  {
    name: "BIZUPクラウド発展会計",
    company: "株式会社日本ビズアップ",
    type: "会計ソフト内蔵の自動化",
    software: "発展会計",
    input: "ネットバンキングの取込、通帳・領収書などの読み取り",
    price: "公式サイトで要確認",
    fit: "発展会計を利用している事務所・顧問先",
    overview:
      "クラウド型の会計ソフトで、明細の取込や証憑の読み取りによる仕訳作成の機能を備えています。",
    points: [
      "ネットバンキング明細の取込",
      "通帳や領収書などの読み取りから仕訳を作成",
    ],
    caution: "機能・料金は公式サイトで最新情報を確認してください。",
    sources: [
      {
        label: "BIZUPクラウド発展会計 機能紹介",
        url: "https://www.bizup.co.jp/cloud_k/function/",
      },
    ],
  },
];

const faqs = [
  {
    question: "記帳自動化ツールを入れれば、記帳業務はすべて自動になりますか？",
    answer:
      "いいえ。多くのサービスはデータ化や仕訳候補の作成を自動化しますが、仕訳の確認・修正、顧問先ごとのルール整備、不足資料の確認は事務所側に残ります。導入前に、どの工程が残るかを確認することが重要です。",
  },
  {
    question: "顧問先によって会計ソフトがバラバラでも使えますか？",
    answer:
      "STREAMEDのように複数の会計ソフトへ出力できるサービスもあれば、弥生・freee・マネーフォワードの記帳代行プランのように自社の会計ソフトが前提のサービスもあります。顧問先の会計ソフト構成を先に洗い出してから選ぶのがおすすめです。",
  },
  {
    question: "料金はどのように比較すればよいですか？",
    answer:
      "料金体系は、仕訳・明細ごとの従量課金、事業所ごとの課金、顧問先数無制限の定額などに分かれます。顧問先数と月間の仕訳数をもとに、自事務所の規模で試算して比較してください。",
  },
  {
    question: "AIが作った仕訳の精度はどのくらいですか？",
    answer:
      "精度は証憑の種類や顧問先の取引内容によって大きく変わります。公表値はサービスごとの条件で測定されたものなので、無料体験や試験導入で、自事務所の実際の顧問先データを使って確認するのが確実です。",
  },
  {
    question:
      "既存のツールでは対応できない業務がある場合はどうすればよいですか？",
    answer:
      "特殊な帳票や事務所独自の処理ルール、複数システム間のデータ加工などは、パッケージでは対応しきれないことがあります。その場合は、業務に合わせて仕組みを設計・開発する導入支援サービスを検討する方法があります。",
  },
];

export default function Page() {
  return (
    <ColumnArticle
      column={column}
      toc={toc}
      faqs={faqs}
      disclosure={
        <>
          本記事は、記事内で紹介している「Zeimee」を提供する株式会社Zeimeeが執筆・運営しています。他社サービスの情報は
          {CHECKED}
          時点の各社公式情報に基づき、出典を記載しています。料金・機能は変更される場合があるため、最新情報は各社公式サイトでご確認ください。
        </>
      }
    >
      <div className={detail.body}>
        <section className={detail.section}>
          <p>
            記帳代行や月次の記帳業務を効率化するため、記帳自動化ツールや仕訳AI、AI-OCRの導入を検討する会計事務所・税理士事務所が増えています。一方で、比較記事の多くは一般企業の経理部門向けで、「会計事務所が顧問先の記帳に使う」という視点で整理された情報は多くありません。
          </p>
          <p>
            この記事では、会計事務所向けの記帳自動化・仕訳AIツールを4つのタイプに分け、代表的なサービスの特徴と料金、事務所に合う選び方を解説します。
          </p>
          <div className={detail.note}>
            <strong>この記事の結論</strong>
            <ul>
              <li>
                紙の証憑が多く、会計ソフトが顧問先ごとに異なる →
                証憑データ化サービス（STREAMEDなど）
              </li>
              <li>
                顧問先の会計ソフトがほぼ統一されている →
                その会計ソフトの記帳代行プラン（弥生・freee・マネーフォワード）や既存システムのAI-OCR
              </li>
              <li>
                特殊な帳票や事務所独自のルールが多く、パッケージで対応しきれない
                → 業務に合わせて設計・開発する導入支援
              </li>
            </ul>
          </div>
        </section>

        <section className={detail.section} id="types">
          <h2>記帳自動化ツールは4タイプに分かれる</h2>
          <p>
            会計事務所で使われる記帳自動化の手段は、大きく次の4タイプに分けられます。
          </p>
          <h3>1. 証憑データ化サービス</h3>
          <p>
            領収書や通帳などをスキャン・撮影してアップロードすると、AIや人の確認を経て仕訳データに変換するサービスです。複数の会計ソフトに出力できるものが多く、顧問先の会計ソフトが混在している事務所でも使いやすいのが特徴です。
          </p>
          <h3>2. 会計ソフト内蔵の自動化（記帳代行プラン）</h3>
          <p>
            弥生・freee・マネーフォワードなどの会計ソフトが、会計事務所向けに提供している記帳代行用のプランや機能です。明細の自動取込や仕訳の自動登録を会計ソフト内で完結できる一方、その会計ソフトを使う顧問先が対象になります。
          </p>
          <h3>3. 会計事務所向けシステムのAI-OCR</h3>
          <p>
            JDL・MJS・TKCなど、会計事務所向けシステムに搭載されたAI-OCRや仕訳入力の機能です。既存の運用を大きく変えずに使えるのが利点です。
          </p>
          <h3>4. 業務に合わせて設計・開発する導入支援</h3>
          <p>
            パッケージをそのまま使うのではなく、事務所の帳票や処理ルールに合わせて、AIの読み取り・仕訳候補・チェック・データ加工の仕組みを設計・開発するタイプです。対応範囲を広げられる反面、要件の整理や導入期間が必要です。
          </p>
        </section>

        <section className={detail.section} id="checklist">
          <h2>選ぶ前に確認したい5つのこと</h2>
          <ol>
            <li>
              <strong>顧問先の会計ソフト構成</strong>
              ：会計ソフトごとの顧問先数。1つに偏っていれば記帳代行プラン、混在していれば複数ソフトに出力できるサービスが候補になります。
            </li>
            <li>
              <strong>証憑の形式</strong>
              ：紙・PDF・明細データ・手書き帳票の比率。手書きや独自帳票が多いと、読み取り精度や追加の加工が課題になります。
            </li>
            <li>
              <strong>月間の仕訳数と顧問先数</strong>
              ：従量課金と定額のどちらが有利かは、処理量で変わります。
            </li>
            <li>
              <strong>確認・修正の流れ</strong>
              ：AIが作った仕訳を誰がどの画面で確認し、どう会計ソフトへ反映するか。
            </li>
            <li>
              <strong>セキュリティと顧問先データの扱い</strong>
              ：データの保存場所、アクセス権限、外部サービスへの送信範囲。
            </li>
          </ol>
        </section>

        <section className={detail.section} id="table">
          <h2>比較早見表</h2>
          <p>
            料金は{CHECKED}
            時点の公式サイトの記載です。税込・税抜の区分は各サービスの表記に従っています。
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">サービス</th>
                  <th scope="col">タイプ</th>
                  <th scope="col">対応会計ソフト</th>
                  <th scope="col">料金</th>
                  <th scope="col">向いている事務所</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <th scope="row">{s.name}</th>
                    <td>{s.type}</td>
                    <td>{s.software}</td>
                    <td>{s.price}</td>
                    <td>{s.fit}</td>
                  </tr>
                ))}
                <tr>
                  <th scope="row">Zeimee</th>
                  <td>業務に合わせて設計・開発する導入支援</td>
                  <td>利用中の会計ソフトに合わせて連携・取込方法を設計</td>
                  <td>個別見積もり</td>
                  <td>特殊な帳票や事務所独自のルールが多い事務所</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={detail.section} id="services">
          <h2>会計事務所向け 記帳自動化・仕訳AIツール10選</h2>
          <p>掲載順は順位ではありません。タイプごとに並べています。</p>
          {services.map((s) => (
            <div className={styles.card} key={s.name}>
              <h3>{s.name}</h3>
              <p>{s.overview}</p>
              <ul>
                {s.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <dl>
                <dt>提供会社</dt>
                <dd>{s.company}</dd>
                <dt>入力データ</dt>
                <dd>{s.input}</dd>
                <dt>料金</dt>
                <dd>{s.price}</dd>
                <dt>注意点</dt>
                <dd>{s.caution}</dd>
              </dl>
              <p className={styles.sources}>
                出典（{CHECKED}確認）：
                {s.sources.map((src, i) => (
                  <span key={src.url}>
                    {i > 0 && "、"}
                    <a href={src.url} target="_blank" rel="noopener noreferrer">
                      {src.label}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          ))}
          <div className={styles.card}>
            <h3>Zeimee（業務に合わせて設計・開発する導入支援）</h3>
            <p>
              Zeimeeは、会計士・税理士事務所に特化したAI導入・開発支援サービスです。エンジニアが事務所の業務を確認し、帳票の読み取り、仕訳候補の作成、チェック、会計ソフトへの取込データ作成など、事務所の業務に合わせた仕組みを設計・実装します。
            </p>
            <ul>
              <li>
                手書きの日計表や事務所独自の帳票など、パッケージでは対応しにくい業務も対象にできる
              </li>
              <li>AIが作成した候補は担当者が確認・修正・承認する設計</li>
              <li>導入後も、現場の使われ方を見ながら改善を続ける</li>
            </ul>
            <dl>
              <dt>提供会社</dt>
              <dd>株式会社Zeimee（本記事の運営会社）</dd>
              <dt>料金</dt>
              <dd>対象業務・帳票・連携要件を確認したうえで個別見積もり</dd>
              <dt>注意点</dt>
              <dd>
                業務の確認と設計に時間をかけるため、標準的な証憑のデータ化だけが目的であれば、既存のパッケージの方が早く始められます。
              </dd>
            </dl>
            <p className={styles.sources}>
              <a href="/cases/field-development">
                導入事例：日計表の転記を削減、Excelの5工程を1画面に
              </a>
            </p>
          </div>
        </section>

        <section className={detail.section} id="how-to-choose">
          <h2>事務所のタイプ別の選び方</h2>
          <h3>顧問先の会計ソフトが混在している事務所</h3>
          <p>
            複数の会計ソフトに出力できる証憑データ化サービスが候補です。顧問先の追加料金や従量課金の単価を、自事務所の仕訳数で試算して比較しましょう。
          </p>
          <h3>特定の会計ソフトに顧問先が集中している事務所</h3>
          <p>
            その会計ソフトの記帳代行プランや、既存システムのAI-OCRを使うと、データの受け渡しが少なく運用がシンプルになります。パートナー制度への加入条件を確認してください。
          </p>
          <h3>独自の帳票や処理ルールが多い事務所</h3>
          <p>
            手書きの日計表や顧問先独自の帳票、Excelでの加工が多い場合、パッケージのデータ化だけでは手作業が残りがちです。どの工程に時間がかかっているかを洗い出し、業務に合わせた仕組みづくりを検討する価値があります。
          </p>
        </section>

        <section className={detail.section} id="steps">
          <h2>導入の進め方とつまずきやすい点</h2>
          <div className={detail.steps}>
            <div className={detail.step}>
              <h3>1. 対象業務と顧問先を決める</h3>
              <p>
                最初から全顧問先に広げず、証憑の種類が似た顧問先から試すと効果を測りやすくなります。
              </p>
            </div>
            <div className={detail.step}>
              <h3>2. 実データで試す</h3>
              <p>
                無料体験や試験導入で、実際の証憑を使って精度と確認の手間を確かめます。
              </p>
            </div>
            <div className={detail.step}>
              <h3>3. 確認と反映の流れを決める</h3>
              <p>
                誰が確認し、どのタイミングで会計ソフトへ反映するかを決め、担当者ごとのやり方のばらつきを防ぎます。
              </p>
            </div>
            <div className={detail.step}>
              <h3>4. 効果を測って広げる</h3>
              <p>
                1顧問先あたりの作業時間や修正件数を記録し、対象を広げるか判断します。
              </p>
            </div>
          </div>
          <p>
            よくあるつまずきは、データ化の後に残る「確認・修正」と「会計ソフトに合わせた加工」の工程を見落とすことです。ツールの比較だけでなく、導入後に残る作業まで含めて検討しましょう。
          </p>
        </section>

        <section className={detail.section} id="faq">
          <h2>よくある質問</h2>
          {faqs.map((f) => (
            <div className={detail.faq} key={f.question}>
              <h3>{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}
        </section>

        <section className={detail.section} id="summary">
          <h2>まとめ</h2>
          <p>
            会計事務所向けの記帳自動化ツールは、証憑データ化サービス、会計ソフト内蔵の記帳代行プラン、会計事務所向けシステムのAI-OCR、業務に合わせた導入支援の4タイプに分かれます。顧問先の会計ソフト構成、証憑の形式、処理量、確認の流れを整理したうえで、自事務所に合うタイプを選ぶことが大切です。
          </p>
          <p>
            Zeimeeでは、AI導入の進め方や事例をまとめた資料を無料でお届けしています。パッケージでは対応しきれない業務がある場合は、お気軽にご相談ください。
          </p>
        </section>
      </div>
    </ColumnArticle>
  );
}
