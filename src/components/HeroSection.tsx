import Heading from "@theme/Heading";
import styles from "../css/hero-section.module.css";
import SubText from "../utils/SubText";
import CardSection from "./CardSection";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Heading as="h1" className={`hero__title ${styles.heroTitle}`}>
        ポプカルで
        <br />
        順番管理の悩みを解決
      </Heading>
      <div>
        <SubText text="カレンダー表示で次回の担当者が一目で分かります" />
        <SubText text="休日やスキップ機能を搭載した通知機能で柔軟な運用が可能です" />
      </div>
      <div className={styles.buttonContainer}>
        <a
          className="button button--lg button--primary button--outline"
          href="/popcal-document/downloads/app-release.apk"
          download="app-release.apk"
        >
          今すぐダウンロード
        </a>
        <a
          className="button button--lg button--primary button--outline button--info"
          href="./docs/category/アーキテクチャ"
        >
          詳細を見る
        </a>
      </div>
      <CardSection />
    </section>
  );
};

export default HeroSection;
