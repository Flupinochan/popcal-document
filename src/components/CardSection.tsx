import {
  BeachAccess,
  CalendarTodayOutlined,
  Group,
  Notifications,
} from "@mui/icons-material";

const CardSection = () => {
  return (
    <section
      style={{ display: "grid", gridTemplate: "1fr 1fr / 1fr 1fr", gap: 20 }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 8,
          border: "1px solid rgba(173, 70, 255, 0.5)",
          borderRadius: 10,
          minHeight: 175,
          padding: 20,
        }}
      >
        <CalendarTodayOutlined sx={{ fontSize: 30, color: "#ad46ff" }} />
        <h3 style={{ margin: 0, paddingTop: 6 }}>通知機能</h3>
        <p style={{ margin: 0 }}>担当日の事前通知で忘れ防止</p>
      </div>
      <div
        style={{
          flex: 1,
          border: "1px solid rgba(0, 184, 219, 0.5)",
          borderRadius: 10,
          minHeight: 175,
          padding: 20,
        }}
      >
        <Group sx={{ fontSize: 30, color: "#00b8db" }} />
        <h3 style={{ margin: 0 }}>test</h3>
        <p style={{ margin: 0 }}>testees</p>
      </div>
      <div
        style={{
          flex: 1,
          border: "1px solid rgba(246, 51, 154, 0.5)",
          borderRadius: 10,
          minHeight: 175,
          padding: 20,
        }}
      >
        <Notifications sx={{ fontSize: 30, color: "#f6339a" }} />
        <h3 style={{ margin: 0 }}>test</h3>
        <p style={{ margin: 0 }}>testees</p>
      </div>
      <div
        style={{
          flex: 1,
          border: "1px solid rgba(0, 201, 80, 0.5)",
          borderRadius: 10,
          minHeight: 175,
          padding: 20,
        }}
      >
        <BeachAccess sx={{ fontSize: 30, color: "#00c950" }} />
        <h3 style={{ margin: 0 }}>test</h3>
        <p style={{ margin: 0 }}>testees</p>
      </div>
    </section>
  );
};

export default CardSection;
