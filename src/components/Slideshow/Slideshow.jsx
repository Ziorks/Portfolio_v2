import { useState } from "react";

import styles from "./Slideshow.module.css";

const ACTIONS = { NEXT: "next", PREV: "prev" };

const getImgClassname = (index, queue) => {
  const classnames = [styles.image];
  const getResult = () => classnames.join(" ");

  const firstInQueue = queue[0];
  if (index === firstInQueue.index) classnames.push(styles.active);

  if (queue.length <= 1) return getResult();

  const nextInQueue = queue[1];
  if (index === nextInQueue.index || index === firstInQueue.index) {
    switch (nextInQueue.action) {
      case ACTIONS.NEXT:
        classnames.push(styles.animateLeft);
        break;
      case ACTIONS.PREV:
        classnames.push(styles.animateRight);
        break;
      default:
        console.error(`invalid image action:"${nextInQueue.action}"`);
        break;
    }
  }

  return getResult();
};

function Slideshow({ imgArr }) {
  const [indexQueue, setIndexQueue] = useState([{ index: 0, action: null }]);

  if (!Array.isArray(imgArr) || !imgArr.length) return;

  const handlePrev = () => {
    setIndexQueue((prev) => {
      let index = prev.at(-1).index - 1;
      if (index < 0) index = imgArr.length - 1;

      return [...prev, { index, action: ACTIONS.PREV }];
    });
  };

  const handleNext = () => {
    setIndexQueue((prev) => {
      let index = prev.at(-1).index + 1;
      if (index >= imgArr.length) index = 0;

      return [...prev, { index, action: ACTIONS.NEXT }];
    });
  };

  const handleGoto = (index) => {
    setIndexQueue((prev) => {
      const lastInQueue = prev.at(-1);
      if (lastInQueue.index === index) return prev;

      return [
        ...prev,
        {
          index,
          action: index > lastInQueue.index ? ACTIONS.NEXT : ACTIONS.PREV,
        },
      ];
    });
  };

  const handleAnimationEnd = () => {
    setIndexQueue((prev) => prev.slice(1));
  };

  return (
    <div className={styles.slideshowContainer}>
      {imgArr.map((img, i) => (
        <img
          key={i}
          src={img}
          className={getImgClassname(i, indexQueue)}
          onAnimationEnd={() => {
            if (i === indexQueue[0].index) handleAnimationEnd();
          }}
        />
      ))}

      <button type="button" className={styles.prev} onClick={handlePrev}>
        &#10094;
      </button>
      <button type="button" className={styles.next} onClick={handleNext}>
        &#10095;
      </button>

      <div className={styles.gotoContainer}>
        {imgArr.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === indexQueue[0].index ? styles.active : ""}
            onClick={() => handleGoto(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
