import Project from "../../components/Project";

import img1 from "../../assets/screenshots/shop/1-800w.png";
import img2 from "../../assets/screenshots/shop/2-800w.png";
import img3 from "../../assets/screenshots/shop/3-800w.png";
import img4 from "../../assets/screenshots/shop/4-800w.png";
import logo from "../../assets/logos/shop_logo.svg";

const images = [img1, img2, img3, img4];
const name = "Shop";
const githubUrl = "https://github.com/Ziorks/odin-shopping-cart";
const liveUrl = "https://odin-shopping-cart-ten.vercel.app";
const description =
  "E-commerce frontend built with mock API data and cart state management. Includes quantity editing, responsive styling, and component testing with Vitest.";

function Shop() {
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

export default Shop;
