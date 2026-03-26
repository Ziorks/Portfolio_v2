import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";

import Ocean from "./Ocean";
import Island from "./Island";
import Effects from "./Effects";
import styles from "./Background.module.css";

function Background() {
  return (
    <div className={styles.bgContainer}>
      <Canvas
        camera={{
          position: [-45, 17, 55],
          rotation: [-0.031, -0.767, -0.022],
          fov: 55,
          near: 1,
          far: 20000,
        }}>
        <Suspense fallback={null}>
          <Ocean />
          <Island />
          <Sky scale={1000} sunPosition={[500, 50, -1000]} turbidity={0.02} />
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Background;
