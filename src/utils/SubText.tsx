interface SubTextProps {
  text: string;
}

const SubText = ({ text }: SubTextProps) => {
  return (
    <p style={{ fontSize: 18, color: "#ccc", lineHeight: 1.8, margin: 0 }}>
      {text}
    </p>
  );
};

export default SubText;
