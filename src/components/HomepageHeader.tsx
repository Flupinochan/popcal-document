import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "../css/index.module.css";

const HomepageHeader = () => {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          PopCal is a rotation management app
        </Heading>
      </div>
    </header>
  );
};

export default HomepageHeader;
