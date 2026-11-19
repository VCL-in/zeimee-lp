/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Sans_JP, Outfit } from "next/font/google";
import { AdvisorForm } from "./AdvisorForm";
import { AdvisorEffects } from "./AdvisorEffects";
import "./ai-advisor.css";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});
const outfit = Outfit({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-outfit",
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
    <div className={`aia ${notoSansJp.variable} ${outfit.variable}`}>
      <header className="aa-header">
        <a href="#top" aria-label="Zeimee"><img src="/ai-advisor/logo.png" alt="Zeimee" /></a>
        <nav>
          <a href="#service">サービス</a>
          <a href="#tools">つくるツール</a>
          <a href="#pricing">料金</a>
          <a href="#cases">実績</a>
          <a href="#flow">始め方</a>
          <a href="#contact">お問い合わせ</a>
        </nav>
      </header>

      <main id="top">
      <section className="aa-fv aa-vfv">
        <div className="aa-stage">
          <div className="aa-shot aa-a"></div>
          <div className="aa-shot aa-b"></div>
          <div className="aa-shade"></div>
          <canvas className="aa-stroke" data-kind="stage"></canvas>
          <div className="aa-center">
            <h1><span>全ての現場に、</span><span>感動されるAXを届ける。</span></h1>
            <p>Zeimeeのエンジニアが、御社のAI担当として入ります。<br />御社専用のAIツールを毎月1つつくり、社員の方が使えるようになるまで付き合います。</p>
            <a className="aa-btn" href="#contact">30分の無料相談を申し込む</a>
          </div>
        </div>
        <div className="aa-inner aa-text">
          <ul className="aa-nums">
            <li><b>90<i>%以上</i></b><span>人の仕訳をAIが再現<small>成和税理士法人様（当社による検証結果）</small></span></li>
            <li><b>2,000<i>件超</i></b><span>の顧問先を持つ現場に入り、<br />作業を見ながら開発</span></li>
            <li><b className="aa-jp">準優勝</b><span>JAFCO SEED Pitch 2026</span></li>
            <li><b>2,000<i>万円</i></b><span>Skyland Venturesから<br />資金を調達</span></li>
          </ul>
        </div>
      </section>

      <section className="aa-sec">
        <div className="aa-inner aa-split">
          <h2 className="aa-label">よくある話</h2>
          <div>
          <p className="aa-h-m">AIを入れた会社で、<br />よく聞く話です。</p>
          <ul className="aa-rows aa-issue">
            <li><span className="aa-k">01</span><h3>「ChatGPTは契約した。使っているのは2、3人」</h3></li>
            <li><span className="aa-k">02</span><h3>「調べ物には使う。見積や日報は、今も手で作っている」</h3></li>
            <li><span className="aa-k">03</span><h3>「何を入力していいのか、社内に決まりがない」</h3></li>
            <li><span className="aa-k">04</span><h3>「担当を置きたいが、みんな自分の仕事で手一杯」</h3></li>
            <li><span className="aa-k">05</span><h3>「詳しかった社員が辞めて、元に戻った」</h3></li>
          </ul>
          <p className="aa-h-m aa-say">どれも、進める担当が<br />いないと起きます。</p>
          <p className="aa-lead">その担当を、Zeimeeが引き受けます。人を採る必要も、育てる必要もありません。</p>
          </div>
        </div>
      </section>

      <section className="aa-sec aa-service" id="service">
        <div className="aa-inner">
          <h2 className="aa-label">サービス</h2>
          <div className="aa-cols">
            <div>
              <p className="aa-wordmark">AI顧問</p>
              <div className="aa-under"><canvas className="aa-stroke" data-kind="under"></canvas></div>
              <p className="aa-h-s">毎月やることは、3つです。</p>
              <ul className="aa-three">
                <li><b>業務を聞く</b>面談で、いま手間がかかっている仕事を聞きます。次にどれをAIに任せるかを、その場で決めます。</li>
                <li><b>ツールをつくる</b>御社の見積書の書式、社内のルール、過去のデータに合わせてつくります。つくった後の直しも続けます。</li>
                <li><b>使えるようにする</b>SlackやChatworkで、社員の方から直接質問を受けます。使われていなければ、使われるまで直します。</li>
              </ul>
              <p className="aa-body">つくったツールと手順書は、御社の物として残ります。</p>
              <a className="aa-btn" href="#pricing">料金を見る</a>
            </div>
            <div>
              <div className="aa-device" aria-label="AIツールの画面のイメージ">
                <div className="aa-screen">
                  <p className="aa-who" style={{ textAlign: "right" }}>営業・田中</p>
                  <p className="aa-me">A社の見積、いつもの形でつくって</p>
                  <p className="aa-who">見積ツール</p>
                  <div className="aa-ai">つくりました。単価は前回（8月）の見積に合わせています。
                    <table><caption>御見積書　A社 御中</caption>
                <tbody>
                      <tr><td>設置工事一式</td><td>480,000</td></tr>
                      <tr><td>保守点検（年4回）</td><td>120,000</td></tr>
                      <tr><td>部材費</td><td>86,400</td></tr>
                      <tr><td>合計（税別）</td><td>686,400</td></tr>
                    </tbody>
              </table>
                  </div>
                </div>
              </div>
              <small>※画面はイメージです</small>
            </div>
          </div>
        </div>
      </section>

      <section className="aa-sec aa-tools" id="tools">
        <div className="aa-inner">
          <div className="aa-head-row"><h2 className="aa-label">つくるツール</h2><a className="aa-btn aa-line" href="#contact">うちの業務で聞く</a></div>
          <p className="aa-h-m" style={{ marginTop: 56 }}>月20万円のスタンダードなら、<br />毎月こういうツールを1つつくります。</p>
          <ul className="aa-rows">
            <li><span className="aa-k">01<span className="aa-tag">営業</span></span><div><h3>見積書・提案書</h3><q>A社の見積、いつもの形でつくって</q></div><p>会社の書式と過去の単価から、下書きを出します。担当者は確認して送るだけです。</p></li>
            <li><span className="aa-k">02<span className="aa-tag">共通</span></span><div><h3>会議の後片付け</h3><q>さっきの会議のタスク、出して</q></div><p>録音や議事録から、決まったことと、誰がいつまでに何をやるかを書き出します。</p></li>
            <li><span className="aa-k">03<span className="aa-tag">管理</span></span><div><h3>日報・週報のまとめ</h3><q>今週の日報、まとめて</q></div><p>全員分の日報を読んで、要点と、気になる点だけを社長に上げます。</p></li>
            <li><span className="aa-k">04<span className="aa-tag">営業</span></span><div><h3>問い合わせの返信</h3><q>この問い合わせ、返信の下書きを</q></div><p>届いた内容に合わせて返信文を用意し、担当者に回します。</p></li>
            <li><span className="aa-k">05<span className="aa-tag">共通</span></span><div><h3>社内ルールの質問</h3><q>出張の精算、どうするんだっけ</q></div><p>就業規則や手順書のどこに書いてあるかを示して答えます。同じ質問が上司に来なくなります。</p></li>
            <li><span className="aa-k">06<span className="aa-tag">管理</span></span><div><h3>毎月の決まった入力</h3><q>今月の分、いつもどおり入力して</q></div><p>毎月の請求書や交通費の入力を、代わりに済ませます。金額がおかしい物だけ、人に確認を回します。</p></li>
          </ul>
          <p className="aa-note">※どの業務から始めるかは、面談で一緒に決めます。ほかのソフトとつなぐ大きいツールは、2か月に分けてつくることがあります。</p>

          <p className="aa-h-s" style={{ marginTop: 110 }}>たとえば、社員30人の会社なら</p>
          <ol className="aa-road" style={{ marginTop: 36 }}>
            <li><span className="aa-k">1か月目</span><h3>ルールを決めて、1つ目</h3><p>AIに入力してよい情報を決め、全員が使えるようにします。1つ目のツールは、会議の後片付け。</p><div className="aa-pile"><i className="aa-n"></i><i></i><i></i></div></li>
            <li><span className="aa-k">2か月目</span><h3>2つ目</h3><p>見積書の下書きを出すツール。</p><div className="aa-pile"><i className="aa-f"></i><i className="aa-n"></i><i></i></div></li>
            <li><span className="aa-k">3か月目</span><h3>3つ目</h3><p>月次の報告をまとめるツール。</p><div className="aa-pile"><i className="aa-f"></i><i className="aa-f"></i><i className="aa-n"></i></div></li>
            <li><span className="aa-k">3か月後</span><h3>AIに任せられる仕事が3つ</h3><p>担当者が替わっても、ツールはそのまま使えます。</p><div className="aa-pile"><i className="aa-f"></i><i className="aa-f"></i><i className="aa-f"></i></div></li>
          </ol>
          <p className="aa-note">※進み方の例です。順番と中身は、御社の業務に合わせて面談で決めます。</p>
        </div>
      </section>

      <section className="aa-sec" id="pricing">
        <div className="aa-inner">
          <h2 className="aa-label">料金</h2>
          <p className="aa-h-m">料金は、3つです。</p>
          <div className="aa-plans">
            <div className="aa-plan"><p className="aa-nm">プロ</p><p className="aa-what">急いで進めたい会社に</p>
              <p className="aa-fee"><b>40</b><span>万円</span><small>／月（税別）</small></p>
              <dl><dt>つくるツール</dt><dd>毎月2つ</dd><dt>面談</dt><dd>毎週</dd><dt>チャット相談</dt><dd>あり（優先対応）</dd><dt>ほか</dt><dd>社内研修</dd></dl>
              <a className="aa-btn aa-line" href="#contact">このプランで相談する</a></div>
            <div className="aa-plan aa-best"><p className="aa-nm">スタンダード<span className="aa-tag">おすすめ</span></p><p className="aa-what">ツールを毎月1つ。迷ったらここから</p>
              <p className="aa-fee"><b>20</b><span>万円</span><small>／月（税別）</small></p>
              <dl><dt>つくるツール</dt><dd>毎月1つ</dd><dt>面談</dt><dd>月2回</dd><dt>チャット相談</dt><dd>あり</dd><dt>ほか</dt><dd>AIの設定とルールづくり</dd></dl>
              <a className="aa-btn" href="#contact" style={{ height: 48, fontSize: 15 }}>このプランで相談する</a></div>
            <div className="aa-plan"><p className="aa-nm">ライト</p><p className="aa-what">まず相談だけしたい会社に</p>
              <p className="aa-fee"><b>10</b><span>万円</span><small>／月（税別）</small></p>
              <dl><dt>つくるツール</dt><dd className="aa-no">なし</dd><dt>面談</dt><dd>月1回</dd><dt>チャット相談</dt><dd>あり</dd><dt>ほか</dt><dd className="aa-no">—</dd></dl>
              <a className="aa-btn aa-line" href="#contact">このプランで相談する</a></div>
          </div>
          <p className="aa-note">※ChatGPTやClaudeの利用料（1人あたり月4,000円前後）は別にかかります。<br />※ライトにはツールの開発は含みません。</p>

          <p className="aa-h-s" style={{ marginTop: 110 }}>専任を1人雇う場合と比べると</p>
          <table className="aa-cmp" style={{ marginTop: 36 }}>
            <thead><tr><th></th><th>専任を自社で雇う</th><th className="aa-us">ZeimeeのAI顧問</th></tr></thead>
            <tbody>
              <tr><th>費用</th><td data-h="専任を雇う">年収800万〜2,000万円の求人も ※</td><td className="aa-us" data-h="AI顧問">月20万円（年240万円）</td></tr>
              <tr><th>始めるまで</th><td data-h="専任を雇う">採用が決まるまで始められない</td><td className="aa-us" data-h="AI顧問">契約した月から始められる</td></tr>
              <tr><th>辞めたら</th><td data-h="専任を雇う">知識ごと失う</td><td className="aa-us" data-h="AI顧問">ツールと手順書が会社に残る</td></tr>
            </tbody>
          </table>
          <p className="aa-note">※国内の転職サイトに出ているFDE求人の例（2026年）</p>
        </div>
      </section>

      <section className="aa-sec" id="cases">
        <div className="aa-inner">
          <h2 className="aa-label">実績</h2>
          <p className="aa-h-m">これまでの仕事</p>
          <div className="aa-cases">
            <article className="aa-case">
              <figure><img src="/ai-advisor/case-seiwa.jpg" alt="成和税理士法人の現場で、作業を見ながら開発する様子" /></figure>
              <span className="aa-tag">広島県・税理士法人</span>
              <h3>成和税理士法人様<br />事務所に入って、2つの業務をAIに</h3>
              <p>顧問先が2,000件を超える事務所です。開発メンバーが事務所に入り、職員の方の作業を見ながらつくりました。</p>
              <div className="aa-big"><b>90<i>%以上</i></b><span>人の仕訳をAIが再現<small>※当社による検証結果です</small></span></div>
            </article>
            <article className="aa-case">
              <figure className="aa-shot"><img src="/ai-advisor/screen-dashboard.jpg" alt="顧問料と工数を一画面で見るツールの画面" /></figure>
              <span className="aa-tag">福岡県・会計事務所</span>
              <h3>顧問料と工数を、<br />1つの画面で見るツール</h3>
              <p>顧問先ごと・担当者ごとの顧問料と工数を、1つの画面で見られるようにしました。2026年10月から、毎月の直しを続けています。</p>
              <p className="aa-note" style={{ marginTop: 14 }}>※画面はデモ用の架空データです</p>
            </article>
          </div>
        </div>
      </section>

      <section className="aa-sec" id="team">
        <div className="aa-inner">
          <h2 className="aa-label">チーム</h2>
          <div className="aa-team-grid">
            <div>
              <p className="aa-h-m">つくる前に、<br />実際の作業を<br />見せてもらいます。</p>
              <p className="aa-team-p">話を聞くだけでは、本当に手間がかかっている所は分かりません。成和税理士法人でも、職員の方の作業を見るところから始めました。御社でも同じ順番で進めます。</p>
              <a className="aa-btn" href="#contact">30分の無料相談を申し込む</a>
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

      <section className="aa-sec" id="flow">
        <div className="aa-inner aa-split">
          <h2 className="aa-label">始め方</h2>
          <div>
          <p className="aa-h-m">始まるまでの流れ</p>
          <ol className="aa-rows">
            <li><span className="aa-k">STEP 01</span><div><h3>30分の相談（オンライン・無料）</h3><p>いま手間がかかっている作業を聞かせてください。AIに向くかどうかを、その場でお答えします。</p></div></li>
            <li><span className="aa-k">STEP 02</span><div><h3>ご提案</h3><p>最初の3か月でつくるツールの案と、合うプランをお出しします。</p></div></li>
            <li><span className="aa-k">STEP 03</span><div><h3>開始</h3><p>秘密保持の契約を交わしてから始めます。最初の面談で、1つ目のツールを決めます。</p></div></li>
            <li><span className="aa-k">STEP 04</span><div><h3>毎月</h3><p>ツールをつくって渡し、使い方を説明します。面談で、次につくる物を決めます。</p></div></li>
          </ol>
          </div>
        </div>
      </section>

      <section className="aa-sec">
        <div className="aa-inner aa-split">
          <h2 className="aa-label">よくある質問</h2>
          <div>
          <div className="aa-faq">
            <details open><summary>ITに詳しい社員がいなくても大丈夫ですか。</summary><p>大丈夫です。つくるところから使い方の説明まで、こちらでやります。</p></details>
            <details><summary>どんな業種でも頼めますか。</summary><p>頼めます。最初につくるのは、見積、報告、議事録、問い合わせの返信など、どの会社にもある事務の仕事です。</p></details>
            <details><summary>今使っているツールを変える必要はありますか。</summary><p>ありません。いま使っているチャットやソフトに合わせてつくります。</p></details>
            <details><summary>社内の情報をAIに渡して大丈夫ですか。</summary><p>始める前に秘密保持の契約を交わし、AIに渡してよい情報と渡さない情報を決めます。AIが出した物は、社員の方が確認してから使う形にします。</p></details>
            <details><summary>遠方でも頼めますか。</summary><p>頼めます。面談も日々の相談も、オンラインでやっています。</p></details>
          </div>
          </div>
        </div>
      </section>

      <section className="aa-contact" id="contact">
        <canvas className="aa-stroke" data-kind="contact"></canvas>
        <div className="aa-inner">
          <h2 className="aa-label">お問い合わせ</h2>
          <div className="aa-cols">
            <div>
              <p className="aa-h-m">30分、話を<br />聞かせてください。</p>
              <p className="aa-lead" style={{ fontWeight: "500", fontSize: 16, marginTop: 20 }}>いま手間がかかっている作業を教えてください。AIに向くかどうかを、その場でお答えします。</p>
              <ul className="aa-pts">
                <li>オンラインで30分、無料です</li>
                <li>送信すると、そのまま日時を選べます</li>
                <li>契約するかどうかは、話した後で決めてください</li>
              </ul>
            </div>
            <AdvisorForm />
          </div>
        </div>
      </section>
      </main>

      <footer>
        <div className="aa-inner">
          <div className="aa-cols">
            <img src="/ai-advisor/logo-white.png" alt="Zeimee" />
            <ul><li><a href="#service">サービス</a></li><li><a href="#tools">つくるツール</a></li><li><a href="#pricing">料金</a></li><li><a href="#cases">実績</a></li><li><a href="#contact">お問い合わせ</a></li></ul>
            <ul><li><Link href="/">会計事務所の方はこちら<small>税理士・会計事務所向けのAI導入・開発支援</small></Link></li><li><Link href="/company">会社情報</Link></li><li><Link href="/security">セキュリティ</Link></li></ul>
          </div>
          <p className="aa-copy">©Zeimee Inc. All Rights Reserved.</p>
        </div>
      </footer>

      <div className="aa-mcta"><a className="aa-btn" href="#contact">30分の無料相談を申し込む</a></div>
      <AdvisorEffects />
    </div>
  );
}
