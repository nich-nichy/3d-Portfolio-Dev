import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export function Sky({ isRotating, ...props }) {
  const { nodes, materials } = useGLTF('/sky.glb')
  const sky = useGLTF('/sky.glb');
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });
  return (
    // <group {...props} dispose={null}>
    //   <group scale={0.01}>
    //     <mesh
    //       ref={skyRef}
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Sphere__0.geometry}
    //       material={materials['Scene_-_Root']}
    //       rotation={[-Math.PI / 2, 0, 0]}
    //       scale={50000}
    //     />
    //   </group>
    // </group>
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  )
}

useGLTF.preload('/sky.glb')
