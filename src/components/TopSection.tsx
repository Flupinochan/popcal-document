import Heading from "@theme/Heading";

const TopSection = () => {
  return (
    <Heading
      as="h1"
      className="hero__title"
      style={{
        background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      PopCal is a rotation management app
    </Heading>
  );
};

export default TopSection;
