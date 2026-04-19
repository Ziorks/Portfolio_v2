import { Suspense, useEffect, useRef, useState } from "react";
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

  const glRef = useRef();

  useEffect(() => {
    return () => {
      const gl = glRef.current;

      if (gl) {
        gl.dispose();
        gl.forceContextLoss();
      }
    };
  }, []);

  return (
    <div className={styles.introContainer}>
      {!isStarted && <LoaderOverlay />}
      <Canvas
        onCreated={({ gl }) => {
          glRef.current = gl;
        }}>
        <Suspense fallback={null}>
          <AnimatedText
            onStart={() => setIsStarted(true)}
            onFinish={onFinish}
          />
          <EffectComposer multisampling={0}>
            <Bloom luminanceThreshold={0.1} intensity={0.04} />
            <Scanline density={0.8} />
            <Noise opacity={0.2} />
            <ChromaticAberration offset={[0.002, 0.002]} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Intro;
