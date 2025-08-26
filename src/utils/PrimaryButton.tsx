import { Download } from "@mui/icons-material";
import { Button } from "@mui/material";

const PrimaryButton = ({ onClick, children = "今すぐダウンロード" }) => {
  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={onClick}
        startIcon={<Download />}
      >
        {children}
      </Button>

      <Button variant="outlined" size="large">
        詳細を見る
      </Button>
    </>
  );
};

export default PrimaryButton;
