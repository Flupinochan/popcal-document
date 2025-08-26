import Heading from "@theme/Heading";
import PrimaryButton from "../utils/PrimaryButton";
import SubText from "../utils/SubText";

const HeroSection = () => {
  return (
    <section>
      <Heading as="h1" className="hero__title" style={{ lineHeight: 1.45 }}>
        ポプカルで
        <br />
        順番管理の悩みを解決
      </Heading>
      <SubText text="カレンダー表示で次回の担当者が一目で分かります" />
      <SubText text="休日やスキップ機能を搭載した通知機能で、柔軟な設定が可能です" />
      <PrimaryButton onClick={null} />
    </section>
  );
};

export default HeroSection;
