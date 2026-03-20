import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  Noise,
  Scanline,
} from "@react-three/postprocessing";

import Scene from "./Scene";

function Intro({ onStart, onFinish }) {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene onStart={onStart} onFinish={onFinish} />
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} intensity={0.04} />
          <Scanline density={0.8} />
          <Noise opacity={0.2} />
          <ChromaticAberration offset={[0.002, 0.002]} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}

export default Intro;
