import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./CompanySections.module.css";

export function TeamIntroduction() {
  return (
    <div className={styles.team} id="team">
      <h3>
        AIに知見のある税理士と
        <br />
        エンジニアが一丸となって開発しています。
      </h3>
      <p className={styles.intro}>
        Zeimeeは、記帳・証憑回収・消込に時間を取られている税理士事務所の声をもとに開発しています。現場で起きる判断のばらつき、資料回収、確認待ちの課題に向き合い、担当者の確認・修正・承認を支援するプロダクトを目指しています。
      </p>
      <div className={styles.members}>
        {[
          {
            name: "畠山謙人",
            role: "アドバイザー",
            title: "公認会計士・税理士",
            image: "team-tax-advisor.png",
            bio: "大和工業で連結決算等を担当後、監査法人トーマツで国内監査に従事。サイバーエージェントでは連結決算やAbemaTV経理、決算早期化を担当。税理士法人赤坂共同事務所を経て、2025年に畠山謙人税理士事務所を開業。シードスタートアップを中心に支援している。",
          },
          {
            name: "佐次本脩真",
            role: "代表取締役",
            title: "元メルカリエンジニア",
            image: "team-ai-engineer.png",
            bio: "電気通信大学大学院 情報理工学研究科を卒業。大学院ではソフトウェア開発やAI活用の知見を深め、2025年8月から2026年4月までメルカリにてSWEとしてプロダクト開発を経験。月次業務の実務負担をAIで減らすため、Zeimeeを立ち上げる。",
          },
        ].map((member) => (
          <article key={member.name}>
            <div className={styles.portrait}>
              <Image
                src={`/lp/${member.image}`}
                alt={`${member.role} ${member.name}`}
                fill
                sizes="(max-width: 700px) 100vw, 500px"
              />
              <div className={styles.identity}>
                <h4>
                  <span>{member.role}</span> {member.name}
                </h4>
                <p>{member.title}</p>
              </div>
            </div>
            <p className={styles.bio}>{member.bio}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function CompanyInformation() {
  return (
    <section className={styles.company} id="company-info">
      <div className={styles.companyInner}>
        <div>
          <h2>会社情報</h2>
          <p className={styles.mission}>
            会計に向き合う人が、
            <br />
            もっと価値ある仕事に
            <br />
            集中できる社会へ。
          </p>
        </div>
        <div>
          <dl>
            <div>
              <dt>会社名</dt>
              <dd>株式会社Zeimee</dd>
            </div>
            <div>
              <dt>代表者</dt>
              <dd>代表取締役　佐次本 脩真</dd>
            </div>
            <div>
              <dt>所在地</dt>
              <dd>
                東京都調布市調布ヶ丘1-5-1
                <br />
                電気通信大学 西11号館4階411号室
              </dd>
            </div>
            <div>
              <dt>事業内容</dt>
              <dd>
                月次経理AIエージェント「Zeimee」の開発・提供
                <br />
                会計事務所向けAI導入・FDE支援
              </dd>
            </div>
          </dl>
          <a className={styles.contactLink} href="#contact">
            <span>
              <small>資料ダウンロード</small>Zeimee・FDEの資料を受け取る
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
