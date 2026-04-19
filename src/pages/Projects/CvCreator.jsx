import Project from "../../components/Project";

import img1 from "../../assets/screenshots/cv-creator/1-800w.png";
import img2 from "../../assets/screenshots/cv-creator/2-800w.png";
import logo from "../../assets/logos/cvCreator_logo.svg";

const images = [img1, img2];
const name = "CV Creator";
const githubUrl = "https://github.com/Ziorks/odin-cv-creator";
const liveUrl = "https://odin-cv-creator.vercel.app";
const description =
  "Frontend CV creation tool with instant visual feedback and intuitive editing controls. Includes drag-and-reorder sections, visibility toggles, and clean print formatting.";

function CvCreator() {
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

export default CvCreator;
