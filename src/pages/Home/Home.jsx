import wiOutline from "../../assets/images/wisconsin_outline.png";

import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <h1 className={styles.heading}>Fullstack web developer</h1>

      <p className={styles.hook}>
        Driven by curiosity and a hands-on approach to learning, I create clean,
        user-friendly applications.
      </p>

      <p>
        Located in{" "}
        <span className={styles.wisconsin}>
          Wisconsin
          <img src={wiOutline} />
        </span>
      </p>
    </>
  );
}

export default Home;
