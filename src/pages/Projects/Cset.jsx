import Project from "../../components/Project";

import img1 from "../../assets/screenshots/cset/1-800w.png";
import img2 from "../../assets/screenshots/cset/2-800w.png";
import img3 from "../../assets/screenshots/cset/3-800w.png";
import img4 from "../../assets/screenshots/cset/4-800w.png";
import img5 from "../../assets/screenshots/cset/5-800w.png";
import logo from "../../assets/logos/cset_logo.svg";

const images = [img1, img2, img3, img4, img5];
const name = "CSET";
const githubUrl = "https://github.com/Ziorks/odin-messaging-app";
const liveUrl = "https://odin-messaging-app-liard.vercel.app";
const description =
  "Messaging platform where users can find others and start private conversations. Built with cookie-based sessions, focusing on authentication and structured message storage.";

function Cset() {
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

export default Cset;
