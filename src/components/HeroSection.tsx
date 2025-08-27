import { Download } from "@mui/icons-material";
import { Button } from "@mui/material";
import Heading from "@theme/Heading";
import SubText from "../utils/SubText";
import CardSection from "./CardSection";

const HeroSection = () => {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 30 }}>
      <Heading
        as="h1"
        className="hero__title"
        style={{ lineHeight: 1.45, margin: 0, marginTop: 90 }}
      >
        ポプカルで
        <br />
        順番管理の悩みを解決
      </Heading>
      <div>
        <SubText text="カレンダー表示で次回の担当者が一目で分かります" />
        <SubText text="休日やスキップ機能を搭載した通知機能で、柔軟な設定が可能です" />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
        <Button variant="contained" size="large" startIcon={<Download />}>
          今すぐダウンロード
        </Button>
        <Button variant="outlined" size="large">
          詳細を見る
        </Button>
      </div>
      <CardSection />
    </section>
  );
};

export default HeroSection;
