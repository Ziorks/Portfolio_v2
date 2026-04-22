import resume from "../../assets/pdfs/FrankScott_Resume.pdf";
import wiOutline from "../../assets/images/wisconsin_outline.png";

import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <h1 className={styles.heading}>Frank Scott</h1>

      <p className={styles.title}>Full Stack Developer</p>

      <p className={styles.resume}>
        <a className={styles.resumeLink} href={resume} download>
          Download Resume
        </a>
      </p>

      <p className={styles.location}>
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
