import { FaReact, FaNodeJs, FaGitAlt, FaUnity } from "react-icons/fa6";
import {
  SiExpress,
  SiPrisma,
  SiJest,
  SiVercel,
  SiRailway,
  SiCplusplus,
  SiAutodeskmaya,
  SiBlender,
  SiUnrealengine,
} from "react-icons/si";

import picOfMe from "../../assets/images/me.jpg";
import viteLogo from "../../assets/logos/vite_logo.svg";
import postgresLogo from "../../assets/logos/postgres_logo.png";
import pythonLogo from "../../assets/logos/python_logo.svg";
import photoshopLogo from "../../assets/logos/photoshop_logo.svg";

import styles from "./Info.module.css";

function StackItem({ icon, name }) {
  return (
    <span className={styles.stackItem}>
      {icon} {name}
    </span>
  );
}

function Info() {
  return (
    <>
      <div className={styles.bioContainer}>
        <p>
          Full-stack web developer, video game enthusiast, and outdoor
          adventurer, I'm Frank Scott and this is a little bit about me.
        </p>
        <p>
          Fresh out of high school, I decided I wanted to make games for a
          living. While earning my degree in video game art and animation, I
          found that while creating art assets was rewarding, I got the most
          satisfaction in bringing those assets to life and giving them
          behavior. Even though my career in making games never took off, my
          curiosity eventually led me to programming in my spare time, where I
          got started with C++. I've always enjoyed learning by getting my hands
          dirty and doing deep dives into new topics, but I had no idea what I
          was in for. I would do small coding challenges and tutorials, but
          building projects from scratch felt intimidating.
        </p>
        <p>
          Everything changed in 2023 when I left my job as a calibration tech to
          hike the 2,650-mile-long{" "}
          <a href="https://www.pcta.org/">Pacific Crest Trail</a>. After four
          months I had reached the end of my hike and gained a new perspective
          on what I'm capable of and decided to fully commit to learning this
          programming stuff. After all, how hard could it be compared to walking
          all the way from Mexico to Canada?
        </p>
        <p>Incredibly hard, as it turns out.</p>
        <p>
          Fortunately, I had a clear path to success thanks to the fine folks at{" "}
          <a href="https://www.theodinproject.com">The Odin Project</a>. After
          overcoming many challenges and mental hurdles, the completionist in me
          won out and I finished the full-stack web development curriculum. I'm
          proud of what I've accomplished so far and now I'm focused on
          building, learning, and putting my work out there for you and the rest
          of the world to see.
        </p>

        <p>
          <img src={picOfMe} />
          <span>-April 2026</span>
        </p>
      </div>

      <div className={styles.stack}>
        <div>
          <h2>Current Stack</h2>
          <StackItem icon={<FaReact color="#61DAFB" />} name="React" />
          <StackItem
            icon={<img src={viteLogo} className={styles.logoImg} />}
            name="Vite"
          />
          <StackItem icon={<FaNodeJs color="#5FA04E" />} name="Node" />
          <StackItem icon={<SiExpress color="#ffffff" />} name="Express" />
          <StackItem
            icon={<img src={postgresLogo} className={styles.logoImg} />}
            name="PostgreSQL"
          />
          <StackItem icon={<SiPrisma color="#ffffff" />} name="Prisma" />
          <StackItem icon={<SiJest color="#C21325" />} name="Jest" />
          <StackItem icon={<FaGitAlt color="#F05032" />} name="Git" />
          <StackItem icon={<SiVercel color="#ffffff" />} name="Vercel" />
          <StackItem icon={<SiRailway color="#ffffff" />} name="Railway" />
        </div>

        <div>
          <h2>Other Tech</h2>
          <StackItem
            icon={<img src={pythonLogo} className={styles.logoImg} />}
            name="Python"
          />
          <StackItem icon={<SiCplusplus color="#00599C" />} name="C++" />
          <StackItem icon={<SiAutodeskmaya color="#37A5CC" />} name="Maya" />
          <StackItem icon={<SiBlender color="#E87D0D" />} name="Blender" />
          <StackItem
            icon={<img src={photoshopLogo} className={styles.logoImg} />}
            name="Photoshop"
          />
          <StackItem icon={<SiUnrealengine color="#ffffff" />} name="Unreal" />
          <StackItem icon={<FaUnity color="#ffffff" />} name="Unity" />
        </div>
      </div>
    </>
  );
}

export default Info;
