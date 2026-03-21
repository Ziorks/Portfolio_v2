import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sky, useGLTF, useTexture } from "@react-three/drei";
import { PlaneGeometry, RepeatWrapping, Vector3 } from "three";
import { Water } from "three-stdlib";
import {
  BrightnessContrast,
  DotScreen,
  EffectComposer,
  HueSaturation,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";

extend({ Water });

function Ocean() {
  const ref = useRef();
  const { gl } = useThree();
  const waterNormals = useTexture(
    "/src/assets/textures/waternormals.jpeg",
    (texture) => {
      texture.wrapS = texture.wrapT = RepeatWrapping;
    },
  );
  const geometry = useMemo(() => new PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      sunDirection: new Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
      waterNormals,
    }),
    [gl, waterNormals],
  );

  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta * 0.5),
  );

  return (
    <water ref={ref} args={[geometry, config]} rotation-x={-Math.PI / 2} />
  );
}

function Tree() {
  const { scene } = useGLTF("/src/assets/tree.glb");
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    for (const child of ref.current.children) {
      if (child.name.startsWith("Leaves")) {
        child.children[0].material.side = 2;
      }
    }
  }, [scene]);

  return <primitive ref={ref} object={scene} scale={2} />;
}

function Background() {
  return (
    <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
      <Suspense fallback={null}>
        <Ocean />
        <Tree />
      </Suspense>
      <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
      <OrbitControls />
      <EffectComposer>
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        <HueSaturation saturation={-1} />
        <BrightnessContrast contrast={0.2} />
        <Vignette darkness={2.5} offset={-1.1} opacity={0.9} />
        <DotScreen opacity={0.2} scale={0.9} />
      </EffectComposer>
    </Canvas>
  );
}

export default Background;
