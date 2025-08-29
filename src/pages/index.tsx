import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import TopSection from "../components/TopSection";
import "../css/custom.module.scss";

export default function Home(): ReactNode {
  return (
    <Layout wrapperClassName="layout-style">
      <Container
        sx={{
          maxWidth: 1600,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: { xs: 0, md: "80px 120px" },
          gap: { xs: 0, md: 60 },
        }}
      >
        <TopSection />
        <Stack direction={{ xs: "column-reverse", md: "row" }} gap={10}>
          <LeftSection />
          <RightSection />
        </Stack>
      </Container>
    </Layout>
  );
}
