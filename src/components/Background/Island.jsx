import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color, DoubleSide, Vector3 } from "three";

const vertexShader =
  /* glsl */
  `
  uniform float uTime;
  
  varying vec3 vNormal;
  
  void main() {
    vNormal = normalize(normalMatrix * normal);
    
    vec3 pos = position;
    
    float mask = color.r;
    
    // HEIGHT FACTOR (so trunk moves less)
    float heightFactor = pos.y;
    
    // WIND WAVES 
    float wind = sin(uTime * 0.5 + pos.x * 0.1) * 0.05;
    
    // APPLY BEND (sideways movement) 
    pos.z += wind * heightFactor;
    
    // APPLY LEAF WIGGLE
    pos.z += sin(uTime * 3.0 + pos.y * 2.0) * 0.05 * mask;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }`;

const fragmentShader =
  /* glsl */
  `
  uniform vec3 skyColor;
  uniform vec3 groundColor;
  uniform vec3 lightDirection;
  
  varying vec3 vNormal;
  
  void main() {
    float dotNL = dot(normalize(vNormal), normalize(lightDirection)) * 0.5 + 0.5;
    vec3 color = mix(groundColor, skyColor, dotNL);
    
    gl_FragColor = vec4(color, 1.0);
  }`;

const uniforms = {
  uTime: { value: 0 },
  skyColor: { value: new Color(0x52a82f) },
  groundColor: { value: new Color(0x2b180c) },
  lightDirection: { value: new Vector3(0.5, 0, -0.5) },
};

function TreeShaderMaterial() {
  const materialRef = useRef();

  useEffect(() => {
    if (!materialRef.current) return;

    materialRef.current.needsUpdate = true;
  }, []);

  useFrame(({ clock }) => {
    if (!materialRef.current) return;

    materialRef.current.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <shaderMaterial
      ref={materialRef}
      vertexColors
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      side={DoubleSide}
      toneMapped={false}
    />
  );
}

function Island() {
  const { nodes } = useGLTF("/src/assets/island.glb");

  return (
    <>
      <mesh geometry={nodes.Trunk002.geometry}>
        <TreeShaderMaterial />
      </mesh>
      <mesh geometry={nodes.Trunk003.geometry}>
        <TreeShaderMaterial />
      </mesh>
      <primitive object={nodes.rock} />
    </>
  );
}

export default Island;
