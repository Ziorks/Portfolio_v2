import Project from "../../components/Project";

import img1 from "../../assets/screenshots/memory-game/1-800w.png";
import img2 from "../../assets/screenshots/memory-game/2-800w.png";
import img3 from "../../assets/screenshots/memory-game/3-800w.png";
import logo from "../../assets/logos/memoryGame_logo.svg";

const images = [img1, img2, img3];
const name = "Memory Game";
const githubUrl = "https://github.com/Ziorks/odin-memory-card-game";
const liveUrl = "https://odin-memory-card-game-five.vercel.app";
const description =
  "An interactive frontend game where players have to select unique cards each round. Uses API-driven Hearthstone card data and dynamic state to track game progress.";

function MemoryGame() {
  return (
    <Project
      slideshowImgArr={images}
      logo={logo}
      name={name}
      githubUrl={githubUrl}
      liveUrl={liveUrl}
      description={description}
    />
  );
}

export default MemoryGame;
