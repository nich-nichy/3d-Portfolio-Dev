import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Plane({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF("/Plane.glb");
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Scene"].play();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} scale={0.040} rotation={[0, Math.PI / 2, 0]} />
    </mesh>
  );
}
