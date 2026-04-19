import { FaGithub, FaLinkedin } from "react-icons/fa6";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <a href="https://www.github.com/Ziorks" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/frank-a-scott/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="mailto:franksixer@gmail.com" target="_blank">
        franksixer@gmail.com
      </a>
    </div>
  );
}

export default Contact;
