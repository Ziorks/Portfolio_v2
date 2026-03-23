import { useAnimations, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { LoopOnce } from "three";

function setupCamera(camera, size) {
  camera.aspect = size.width / size.height;
  camera.setFocalLength(30);
  camera.updateProjectionMatrix();
}

function setupAction(action) {
  action.setLoop(LoopOnce);
  action.clampWhenFinished = true;
  // action.setEffectiveTimeScale(5);

  action.reset().play();
}

function Scene({ onStart, onFinish }) {
  const { scene, animations, cameras } = useGLTF("/src/assets/intro.glb");
  const { actions, mixer } = useAnimations(animations, scene);
  const { set, size } = useThree();

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) return;

    isMounted.current = true;
    onStart?.();
  }, [onStart]);

  useEffect(() => {
    if (cameras.length > 0) {
      const camera = cameras[0];
      setupCamera(camera, size);
      set({ camera });
    }
  }, [cameras, set, size]);

  useEffect(() => {
    const action = actions["Scene"];

    if (!action) return;
    setupAction(action);

    const handleFinished = () => {
      onFinish?.();
    };

    mixer.addEventListener("finished", handleFinished);

    return () => {
      mixer.removeEventListener("finished", handleFinished);
    };
  }, [actions, mixer, onFinish]);

  return <primitive object={scene} />;
}

export default Scene;
