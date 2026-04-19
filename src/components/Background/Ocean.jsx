import { useMemo, useRef } from "react";

import { PlaneGeometry, RepeatWrapping, Vector3 } from "three";
import { Water } from "three-stdlib";
import { useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";

import normalMap from "../../assets/textures/waternormals.jpeg";

extend({ Water });

function Ocean() {
  const ref = useRef();
  const waterNormals = useTexture(normalMap, (texture) => {
    texture.wrapS = texture.wrapT = RepeatWrapping;
  });
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
      waterNormals,
    }),
    [waterNormals],
  );

  useFrame((state, delta) => {
    ref.current.material.uniforms.time.value += delta * 0.3;
  }, 0);

  return (
    <water ref={ref} args={[geometry, config]} rotation-x={-Math.PI / 2} />
  );
}

export default Ocean;
