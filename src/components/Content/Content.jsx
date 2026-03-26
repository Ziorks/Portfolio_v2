import Nav from "../Nav";
import Background from "../Background";
import styles from "./Content.module.css";
import { useEffect, useRef } from "react";

function Content({ children }) {
  const mainRef = useRef();

  useEffect(() => {
    const el = mainRef.current;

    const update = () => {
      const isScrollable = el.scrollHeight > el.clientHeight;
      const atTop = el.scrollTop < 10;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

      el.classList.toggle(styles.isScrollable, isScrollable);
      el.classList.toggle(styles.atTop, atTop);
      el.classList.toggle(styles.atBottom, atBottom);
    };

    update();

    el.addEventListener("scroll", update);

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.contentContainer}>
      <Background />
      <main ref={mainRef}>{children}</main>
      <Nav />
    </div>
  );
}

export default Content;
