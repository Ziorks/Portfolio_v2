import Project from "../../components/Project";

import img1 from "../../assets/screenshots/headlog/1-800w.png";
import img2 from "../../assets/screenshots/headlog/2-800w.png";
import img3 from "../../assets/screenshots/headlog/3-800w.png";
import logo from "../../assets/logos/headlog_logo.svg";

const images = [img1, img2, img3];
const name = "Headlog";
const githubUrl = "https://github.com/Ziorks/odin-facebook-clone";
const liveUrl = "https://odin-facebook-clone.vercel.app";
const description =
  "A full-stack social media application replicating Facebook's core features, including posts, comments, likes, friend connections, and user profiles. It includes secure user authentication using JWTs, refresh tokens, and OAuth options.";

function Headlog() {
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

export default Headlog;
