/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { AdvisorForm } from "./AdvisorForm";
import { AdvisorEffects } from "./AdvisorEffects";
import "./ai-advisor.css";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "AI顧問｜中小企業のAI担当を、外から引き受ける｜Zeimee";
const description =
  "Zeimeeのエンジニアが、御社のAI担当として入ります。御社専用のAIツールを毎月1つつくり、社員の方が使えるようになるまで付き合います。社員20人以上の会社向け。";

// 公開の判断が出るまで、検索には載せない。
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ai-advisor" },
  robots: { index: false, follow: false },
  openGraph: { title, description, url: "/ai-advisor", type: "website" },
};

export default function AiAdvisorPage() {
  return (
    <div className={`aia ${notoSansJp.variable} ${inter.variable}`}>
      <div className="aa-notice"><span>社員20人以上の会社向け「AI顧問」の無料相談を受け付けています</span><a href="#aa-contact">申し込む</a></div>
      <header className="aa-header">
        <a href="#aa-top" aria-label="Zeimee"><img src="/ai-advisor/logo.png" alt="Zeimee" /></a>
        <nav>
          <a href="#aa-service">サービス</a>
          <a href="#aa-tools">つくるツール</a>
          <a href="#aa-pricing">料金</a>
          <a href="#aa-cases">実績</a>
          <a href="#aa-team">チーム</a>
          <a href="#aa-flow">始め方</a>
        </nav>
        <a className="aa-pill aa-dark" href="#aa-contact">無料相談</a>
      </header>

      <main id="aa-top">
      <section>
        <div className="aa-stage">
          <div className="aa-shot aa-a"></div>
          <div className="aa-shot aa-b"></div>
          <div className="aa-shade"></div>
          <h1><span>全ての現場に、</span><span>感動されるAXを届ける。</span></h1>
          <p className="aa-scroll">Scroll to Explore</p>
        </div>
      </section>

      <section className="aa-mission">
        <div className="aa-wrap">
          <p className="aa-eyebrow">AI Advisor</p>
          <h2 className="aa-h-l">御社専用のAIツールを、<br />毎月1つ、つくります。</h2>
          <p>Zeimeeのエンジニアが、御社のAI担当として入ります。業務を聞いてツールをつくり、社員の方が使えるようになるまで付き合います。社内にAIを進める人がいない、社員20人以上の会社に向けたサービスです。</p>
          <a className="aa-pill aa-light aa-arrow aa-lg" href="#aa-contact">30分の無料相談を申し込む</a>
        </div>
      </section>

      <section>
        <div className="aa-wrap">
          <ul className="aa-nums">
            <li><b>90<small>%以上</small></b><span>人の仕訳をAIが再現<small>成和税理士法人様（当社による検証結果）</small></span></li>
            <li><b>2,000<small>件超</small></b><span>の顧問先を持つ現場に入り、作業を見ながら開発</span></li>
            <li><b>準優勝</b><span>JAFCO SEED Pitch 2026</span></li>
            <li><b>2,000<small>万円</small></b><span>Skyland Venturesから資金を調達</span></li>
          </ul>
        </div>
      </section>

      <section className="aa-sec">
        <div className="aa-wrap">
          <h2 className="aa-h-l">AIを入れた会社で、<br />よく聞く話です。</h2>
          <ul className="aa-voices">
            <li><span>01</span>「ChatGPTは契約した。使っているのは2、3人」</li>
            <li><span>02</span>「調べ物には使う。見積や日報は、今も手で作っている」</li>
            <li><span>03</span>「何を入力していいのか、社内に決まりがない」</li>
            <li><span>04</span>「担当を置きたいが、みんな自分の仕事で手一杯」</li>
            <li><span>05</span>「詳しかった社員が辞めて、元に戻った」</li>
          </ul>
          <div className="aa-after">
            <h3 className="aa-h-l">どれも、進める担当が<br />いないと起きます。</h3>
            <p>その担当を、Zeimeeが引き受けます。人を採る必要も、育てる必要もありません。</p>
          </div>
        </div>
      </section>

      <section className="aa-sec aa-pale" id="aa-service">
        <div className="aa-wrap">
          <h2 className="aa-h-l">毎月やることは、<br />3つです。</h2>
          <div className="aa-cards">
            <article className="aa-card"><p className="aa-n">01</p><h3>業務を聞く</h3><p className="aa-s">面談で、次につくる物を決める</p><p>いま手間がかかっている仕事を聞きます。次にどれをAIに任せるかを、その場で決めます。</p></article>
            <article className="aa-card"><p className="aa-n">02</p><h3>ツールをつくる</h3><p className="aa-s">御社の書式とルールに合わせる</p><p>見積書の書式、社内のルール、過去のデータに合わせてつくります。つくった後の直しも続けます。</p></article>
            <article className="aa-card"><p className="aa-n">03</p><h3>使えるようにする</h3><p className="aa-s">使われるまで直す</p><p>SlackやChatworkで、社員の方から直接質問を受けます。使われていなければ、使われるまで直します。</p></article>
          </div>
          <div className="aa-below"><a className="aa-pill aa-light" href="#aa-pricing">料金を見る</a><span>つくったツールと手順書は、御社の物として残ります。</span></div>
        </div>
      </section>

      <section className="aa-sec" id="aa-tools">
        <div className="aa-wrap">
          <h2 className="aa-h-xl">毎月1つ、<i>こういうツールをつくります</i></h2>
          <div>
            <p className="aa-lead2">月20万円のスタンダードで、実際につくる物の例です。</p>
            <ul className="aa-list" style={{ marginTop: 28 }}>
              <li><div className="aa-thumb"><q>A社の見積、いつもの形でつくって</q></div><div><h3>見積書・提案書</h3><p>会社の書式と過去の単価から、下書きを出します。担当者は確認して送るだけです。</p></div><span className="aa-chip">営業</span></li>
              <li><div className="aa-thumb aa-k"><q>さっきの会議のタスク、出して</q></div><div><h3>会議の後片付け</h3><p>録音や議事録から、決まったことと、誰がいつまでに何をやるかを書き出します。</p></div><span className="aa-chip">共通</span></li>
              <li><div className="aa-thumb"><q>今週の日報、まとめて</q></div><div><h3>日報・週報のまとめ</h3><p>全員分の日報を読んで、要点と、気になる点だけを社長に上げます。</p></div><span className="aa-chip">管理</span></li>
              <li><div className="aa-thumb aa-k"><q>この問い合わせ、返信の下書きを</q></div><div><h3>問い合わせの返信</h3><p>届いた内容に合わせて返信文を用意し、担当者に回します。</p></div><span className="aa-chip">営業</span></li>
              <li><div className="aa-thumb"><q>出張の精算、どうするんだっけ</q></div><div><h3>社内ルールの質問</h3><p>就業規則や手順書のどこに書いてあるかを示して答えます。同じ質問が上司に来なくなります。</p></div><span className="aa-chip">共通</span></li>
              <li><div className="aa-thumb aa-k"><q>今月の分、いつもどおり入力して</q></div><div><h3>毎月の決まった入力</h3><p>毎月の請求書や交通費の入力を、代わりに済ませます。金額がおかしい物だけ、人に確認を回します。</p></div><span className="aa-chip">管理</span></li>
            </ul>
            <p className="aa-fine">※どの業務から始めるかは、面談で一緒に決めます。ほかのソフトとつなぐ大きいツールは、2か月に分けてつくることがあります。</p>
          </div>
        </div>
      </section>

      <section className="aa-sec aa-pale">
        <div className="aa-wrap">
          <h2 className="aa-h-l">たとえば、<br />社員30人の会社なら</h2>
          <div className="aa-road">
            <article className="aa-card"><p className="aa-n">1か月目</p><h3>ルールを決めて、1つ目</h3><p>AIに入力してよい情報を決め、全員が使えるようにします。1つ目のツールは、会議の後片付け。</p></article>
            <article className="aa-card"><p className="aa-n">2か月目</p><h3>2つ目</h3><p>見積書の下書きを出すツール。</p></article>
            <article className="aa-card"><p className="aa-n">3か月目</p><h3>3つ目</h3><p>月次の報告をまとめるツール。</p></article>
            <article className="aa-card"><p className="aa-n">3か月後</p><h3>AIに任せられる仕事が3つ</h3><p>担当者が替わっても、ツールはそのまま使えます。</p></article>
          </div>
          <p className="aa-fine">※進み方の例です。順番と中身は、御社の業務に合わせて面談で決めます。</p>
        </div>
      </section>

      <section className="aa-sec aa-pale" id="aa-pricing" style={{ paddingTop: "0" }}>
        <div className="aa-wrap">
          <h2 className="aa-h-l">料金は、3つです。</h2>
          <div className="aa-plans">
            <div className="aa-plan"><p className="aa-nm">プロ</p><p className="aa-what">急いで進めたい会社に</p>
              <p className="aa-fee"><b>40</b><span>万円</span><small>／月（税別）</small></p>
              <dl><dt>つくるツール</dt><dd>毎月2つ</dd><dt>面談</dt><dd>毎週</dd><dt>チャット相談</dt><dd>あり（優先対応）</dd><dt>ほか</dt><dd>社内研修</dd></dl>
              <a className="aa-pill aa-light aa-arrow" href="#aa-contact">このプランで相談する</a></div>
            <div className="aa-plan aa-best"><p className="aa-nm">スタンダード<span className="aa-chip">おすすめ</span></p><p className="aa-what">ツールを毎月1つ。迷ったらここから</p>
              <p className="aa-fee"><b>20</b><span>万円</span><small>／月（税別）</small></p>
              <dl><dt>つくるツール</dt><dd>毎月1つ</dd><dt>面談</dt><dd>月2回</dd><dt>チャット相談</dt><dd>あり</dd><dt>ほか</dt><dd>AIの設定とルールづくり</dd></dl>
              <a className="aa-pill aa-light aa-arrow" href="#aa-contact">このプランで相談する</a></div>
            <div className="aa-plan"><p className="aa-nm">ライト</p><p className="aa-what">まず相談だけしたい会社に</p>
              <p className="aa-fee"><b>10</b><span>万円</span><small>／月（税別）</small></p>
              <dl><dt>つくるツール</dt><dd className="aa-no">なし</dd><dt>面談</dt><dd>月1回</dd><dt>チャット相談</dt><dd>あり</dd><dt>ほか</dt><dd className="aa-no">—</dd></dl>
              <a className="aa-pill aa-light aa-arrow" href="#aa-contact">このプランで相談する</a></div>
          </div>
          <p className="aa-fine">※ChatGPTやClaudeの利用料（1人あたり月4,000円前後）は別にかかります。<br />※ライトにはツールの開発は含みません。</p>

          <h3 className="aa-sub-h">専任を1人雇う場合と比べると</h3>
          <table className="aa-cmp">
            <thead><tr><th></th><th>専任を自社で雇う</th><th>ZeimeeのAI顧問</th></tr></thead>
            <tbody>
              <tr><th>費用</th><td data-h="専任を雇う">年収800万〜2,000万円の求人も ※</td><td className="aa-us" data-h="AI顧問">月20万円（年240万円）</td></tr>
              <tr><th>始めるまで</th><td data-h="専任を雇う">採用が決まるまで始められない</td><td className="aa-us" data-h="AI顧問">契約した月から始められる</td></tr>
              <tr><th>辞めたら</th><td data-h="専任を雇う">知識ごと失う</td><td className="aa-us" data-h="AI顧問">ツールと手順書が会社に残る</td></tr>
            </tbody>
          </table>
          <p className="aa-fine">※国内の転職サイトに出ているFDE求人の例（2026年）</p>
        </div>
      </section>

      <section className="aa-sec" id="aa-cases">
        <div className="aa-wrap">
          <h2 className="aa-h-l">これまでの仕事</h2>
          <div className="aa-news">
            <article className="aa-post">
              <figure><img src="/ai-advisor/case-seiwa.jpg" alt="成和税理士法人の事務所で、作業を見ながら開発する様子" /></figure>
              <div className="aa-txt"><p className="aa-meta"><span>広島県</span><span className="aa-chip">税理士法人</span></p>
                <h3>成和税理士法人様　事務所に入って、2つの業務をAIに</h3>
                <p>顧問先が2,000件を超える事務所です。開発メンバーが事務所に入り、職員の方の作業を見ながらつくりました。</p>
                <div className="aa-big"><b>90<small>%以上</small></b><span>人の仕訳をAIが再現<br />※当社による検証結果です</span></div></div>
            </article>
            <article className="aa-post">
              <figure className="aa-shot2"><img src="/ai-advisor/screen-dashboard.jpg" alt="顧問料と工数を1つの画面で見るツールの画面" /></figure>
              <div className="aa-txt"><p className="aa-meta"><span>福岡県</span><span className="aa-chip">会計事務所</span></p>
                <h3>顧問料と工数を、1つの画面で見るツール</h3>
                <p>顧問先ごと・担当者ごとの顧問料と工数を、1つの画面で見られるようにしました。2026年10月から、毎月の直しを続けています。</p>
                <p className="aa-fine" style={{ marginTop: "auto", paddingTop: 20 }}>※画面はデモ用の架空データです</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="aa-sec" id="aa-team" style={{ paddingTop: "0" }}>
        <div className="aa-wrap">
          <div className="aa-team">
            <div>
              <h2 className="aa-h-l">つくる前に、<br />実際の作業を<br />見せてもらいます。</h2>
              <p>話を聞くだけでは、本当に手間がかかっている所は分かりません。成和税理士法人でも、職員の方の作業を見るところから始めました。御社でも同じ順番で進めます。</p>
              <a className="aa-pill aa-dark aa-arrow" href="#aa-contact">30分の無料相談を申し込む</a>
            </div>
            <div className="aa-members">
              <div className="aa-member"><figure><img src="/ai-advisor/member-iwasaki.jpg" alt="岩﨑 琉晟" /></figure><span>Co-CEO</span><b>岩﨑 琉晟</b></div>
              <div className="aa-member"><figure><img src="/ai-advisor/member-sajimoto.jpg" alt="佐次本 脩真" /></figure><span>Co-CEO</span><b>佐次本 脩真</b></div>
            </div>
          </div>
          <ul className="aa-facts">
            <li><span>設立</span>2026年3月</li>
            <li><span>JAFCO SEED Pitch 2026</span>準優勝</li>
            <li><span>Skyland Venturesから</span>2,000万円を調達</li>
            <li><span>成和税理士法人様で</span>2つの業務をAIに</li>
          </ul>
        </div>
      </section>

      <section className="aa-sec aa-pale" id="aa-flow">
        <div className="aa-wrap">
          <h2 className="aa-h-l">始まるまでの流れ</h2>
          <ol className="aa-steps">
            <li><span>01</span><h3>30分の相談（オンライン・無料）</h3><p>いま手間がかかっている作業を聞かせてください。AIに向くかどうかを、その場でお答えします。</p></li>
            <li><span>02</span><h3>ご提案</h3><p>最初の3か月でつくるツールの案と、合うプランをお出しします。</p></li>
            <li><span>03</span><h3>開始</h3><p>秘密保持の契約を交わしてから始めます。最初の面談で、1つ目のツールを決めます。</p></li>
            <li><span>04</span><h3>毎月</h3><p>ツールをつくって渡し、使い方を説明します。面談で、次につくる物を決めます。</p></li>
          </ol>
        </div>
      </section>

      <section className="aa-sec">
        <div className="aa-wrap">
          <h2 className="aa-h-l">よくある質問</h2>
          <div className="aa-faq">
            <details open><summary>ITに詳しい社員がいなくても大丈夫ですか。</summary><p>大丈夫です。つくるところから使い方の説明まで、こちらでやります。</p></details>
            <details><summary>どんな業種でも頼めますか。</summary><p>頼めます。最初につくるのは、見積、報告、議事録、問い合わせの返信など、どの会社にもある事務の仕事です。</p></details>
            <details><summary>今使っているツールを変える必要はありますか。</summary><p>ありません。いま使っているチャットやソフトに合わせてつくります。</p></details>
            <details><summary>社内の情報をAIに渡して大丈夫ですか。</summary><p>始める前に秘密保持の契約を交わし、AIに渡してよい情報と渡さない情報を決めます。AIが出した物は、社員の方が確認してから使う形にします。</p></details>
            <details><summary>遠方でも頼めますか。</summary><p>頼めます。面談も日々の相談も、オンラインでやっています。</p></details>
          </div>
        </div>
      </section>

      <section className="aa-contact" id="aa-contact">
        <div className="aa-wrap aa-cols">
          <div>
            <p className="aa-eyebrow">Contact</p>
            <h2 className="aa-h-l">30分、話を<br />聞かせてください。</h2>
            <p className="aa-lede">いま手間がかかっている作業を教えてください。AIに向くかどうかを、その場でお答えします。</p>
            <ul className="aa-pts">
              <li>オンラインで30分、無料です</li>
              <li>送信すると、そのまま日時を選べます</li>
              <li>契約するかどうかは、話した後で決めてください</li>
            </ul>
          </div>
          <AdvisorForm />
        </div>
      </section>
      </main>

      <footer>
        <div className="aa-wrap">
          <div className="aa-cols">
            <img src="/ai-advisor/logo-white.png" alt="Zeimee" />
            <div><h3>AI顧問</h3><ul><li><a href="#aa-service">サービス</a></li><li><a href="#aa-tools">つくるツール</a></li><li><a href="#aa-pricing">料金</a></li><li><a href="#aa-cases">実績</a></li><li><a href="#aa-contact">お問い合わせ</a></li></ul></div>
            <div><h3>Zeimee</h3><ul><li><Link href="/">会計事務所の方はこちら</Link></li><li><Link href="/company">会社情報</Link></li><li><Link href="/security">セキュリティ</Link></li></ul></div>
          </div>
          <div className="aa-end"><p className="aa-tag">Zeimee</p><p className="aa-copy">© 2026 Zeimee Inc.</p></div>
        </div>
      </footer>

      <div className="aa-mcta"><a className="aa-pill aa-dark aa-arrow aa-lg" href="#aa-contact">30分の無料相談を申し込む</a></div>
      <AdvisorEffects />
    </div>
  );
}
