import {
  CalendarTodayOutlined,
  GroupOutlined,
  LocationCityOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import { Box, Grid, Stack } from "@mui/material";
import Heading from "@theme/Heading";
import cardStyles from "../css/card.module.scss";
import styles from "../css/hero-section.module.scss";
import type { CustomCardProps } from "../utils/CustomCard";
import CustomCard from "../utils/CustomCard";
import SubText from "../utils/SubText";

const cardDataList: CustomCardProps[] = [
  {
    Icon: CalendarTodayOutlined,
    stackClass: cardStyles.cardPurple,
    title: "カレンダー表示機能",
    description: "担当者を視覚的に一目で確認",
  },
  {
    Icon: GroupOutlined,
    stackClass: cardStyles.cardCyan,
    title: "順番管理機能",
    description: "休日や急な変更にも柔軟に対応",
  },
  {
    Icon: NotificationsOutlined,
    stackClass: cardStyles.cardPink,
    title: "通知機能",
    description: "オフライン対応で確実に通知",
  },
  {
    Icon: LocationCityOutlined,
    stackClass: cardStyles.cardGreen,
    title: "最終営業日通知機能",
    description: "毎月の最後の平日を通知",
  },
];

const LeftSection = () => {
  return (
    <Stack gap={4} justifyContent={"center"}>
      <Heading as="h1" className={`hero__title ${styles.heroTitle}`}>
        ポプカルで
        <Box />
        順番管理の悩みを解決
      </Heading>
      <Stack>
        <SubText text="カレンダー表示で次回の担当者が一目で分かります" />
        <SubText text="休日やスキップ機能を搭載した通知機能で柔軟な運用が可能です" />
      </Stack>
      <Stack direction={"row"} gap={4}>
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
      </Stack>
      <Grid container spacing={2}>
        {cardDataList.map((item, _) => (
          <Grid key={`${item}-card`} size={{ xs: 12, md: 6 }}>
            <CustomCard
              Icon={item.Icon}
              title={item.title}
              description={item.description}
              stackClass={item.stackClass}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default LeftSection;
