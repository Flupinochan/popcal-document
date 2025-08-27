import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import HeroSection from "../components/HeroSection";
import HomepageHeader from "../components/HomepageHeader";
import SwiperSection from "../components/SwiperSection";
import "../css/custom.css";

export default function Home(): ReactNode {
  return (
    <Layout wrapperClassName="layout-style">
      <main
        style={{
          maxWidth: 1600,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "80px 120px 80px 120px",
          gap: 60,
        }}
      >
        <HomepageHeader />
        <div
          style={{
            display: "flex",
            gap: 120,
          }}
        >
          <HeroSection />
          <SwiperSection />
        </div>
      </main>
    </Layout>
  );
}
