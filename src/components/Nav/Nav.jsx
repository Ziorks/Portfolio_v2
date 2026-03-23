import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function getClassname({ isActive }) {
  return `${styles.link} ${isActive ? styles.active : ""}`;
}

function handleClick(e) {
  e.currentTarget.blur();
}

function Nav() {
  return (
    <nav className={styles.navContainer}>
      <NavLink to="/" className={getClassname} onClick={handleClick}>
        Home
      </NavLink>
      <NavLink to="/info" className={getClassname} onClick={handleClick}>
        Info
      </NavLink>
      <NavLink to="/projects" className={getClassname} onClick={handleClick}>
        Projects
      </NavLink>
      <NavLink to="/contact" className={getClassname} onClick={handleClick}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Nav;
