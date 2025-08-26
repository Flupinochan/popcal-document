import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import HeroSection from "../components/HeroSection";
import HomepageHeader from "../components/HomepageHeader";
import SwiperSection from "../components/SwiperSection";

export default function Home(): ReactNode {
  return (
    <Layout>
      <HomepageHeader />
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          padding: "80px 120px 80px 120px",
          maxWidth: 1600,
          margin: "0 auto",
        }}
      >
        <HeroSection />
        <SwiperSection />
      </main>
    </Layout>
  );
}
