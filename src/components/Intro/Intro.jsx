import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  Noise,
  Scanline,
} from "@react-three/postprocessing";

import AnimatedText from "./AnimatedText";
import LoaderOverlay from "./LoaderOverlay";
import styles from "./Intro.module.css";

function Intro({ onFinish }) {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className={styles.introContainer}>
      {!isStarted && <LoaderOverlay />}
      <Canvas>
        <Suspense fallback={null}>
          <AnimatedText
            onStart={() => setIsStarted(true)}
            onFinish={onFinish}
          />
        </Suspense>
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} intensity={0.04} />
          <Scanline density={0.8} />
          <Noise opacity={0.2} />
          <ChromaticAberration offset={[0.002, 0.002]} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default Intro;
