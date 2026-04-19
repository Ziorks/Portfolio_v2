import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Slideshow from "../Slideshow";

import styles from "./Project.module.css";

function Project({
  slideshowImgArr,
  logo,
  name,
  githubUrl,
  liveUrl,
  description,
}) {
  return (
    <article className={styles.projectContainer}>
      <Slideshow imgArr={slideshowImgArr} />
      <div>
        <div className={styles.projectHeader}>
          <img src={logo} />
          <h2>{name}</h2>
          <a href={githubUrl} target="_blank">
            <FaGithub />
          </a>
          <a href={liveUrl} target="_blank">
            <FaExternalLinkAlt />
          </a>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default Project;
