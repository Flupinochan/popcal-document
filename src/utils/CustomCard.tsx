import { Stack } from "@mui/material";
import type { SvgIconProps } from "@mui/material/SvgIcon";

export interface CustomCardProps {
  Icon: React.ComponentType<SvgIconProps>;
  stackClass: string;
  title: string;
  description: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  Icon,
  stackClass,
  description,
  title,
}) => {
  return (
    <Stack
      justifyContent={"center"}
      gap={1}
      padding={2}
      minHeight={175}
      borderRadius={3}
      className={stackClass}
    >
      <Icon />
      <h3 style={{ margin: 0, paddingTop: 6 }}>{title}</h3>
      <p style={{ margin: 0 }}>{description}</p>
    </Stack>
  );
};

export default CustomCard;
