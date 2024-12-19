import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export function HomeScene({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) {
  const homeRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF("/Heromodel-v1.glb");
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    lastX.current = clientX;
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      homeRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };


  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      homeRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);

    canvas.addEventListener("touchmove", handleTouchMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      homeRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = homeRef.current.rotation.y;
      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <a.group ref={homeRef} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[1.895, 12.074, -3.532]}
      />
      <group
        position={[-0.265, -0.501, -0.272]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={1.456}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.characters_STONE_a_0.geometry}
              material={materials.STONE_a}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.characters_STONE_a_0001.geometry}
              material={materials.STONE_a}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.characters003_terrain_left_0.geometry}
            material={materials.terrain_left}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.characters004_house_0.geometry}
            material={materials.house}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.characters005_bridge_0.geometry}
            material={materials.bridge}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
        </group>
      </group>
      <group position={[10.546, 11.926, -4.806]} rotation={[Math.PI, -0.367, 0]} scale={0.041}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.color_16448250}
          position={[-77.379, -1.176, 9.287]}
          rotation={[0, 0.38, 0]}
          scale={0.627}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.color_8224125}
          position={[-77.379, -1.176, 9.287]}
          rotation={[0, 0.38, 0]}
          scale={0.627}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.color_8224125}
          position={[-77.379, -1.176, 9.287]}
          rotation={[0, 0.38, 0]}
          scale={0.627}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.color_8224125}
          position={[-77.379, -1.176, 9.287]}
          rotation={[0, 0.38, 0]}
          scale={0.627}
        />
      </group>
      <group position={[1.865, 14.705, -5.616]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube_0.geometry} material={materials.Wood} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_0.geometry}
          material={materials.Wood}
          position={[-2.35, 0, -1.49]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_0.geometry}
          material={materials.Wood}
          position={[0, 0.8, -1.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_0.geometry}
          material={materials.Wood}
          position={[-1.525, -1.25, -0.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_0.geometry}
          material={materials.Wood}
          position={[2.35, 0, -1.49]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_0.geometry}
          material={materials.Wood}
          position={[1.525, -1.25, -0.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_0.geometry}
          material={materials.Wood}
          position={[0, -1.25, -0.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_0.geometry}
          material={materials.Wood}
          position={[-1.525, -0.29, -0.3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_0.geometry}
          material={materials.Wood}
          position={[0, -0.29, -0.3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_0.geometry}
          material={materials.Wood}
          position={[1.525, -0.29, -0.3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_0.geometry}
          material={materials.Wood}
          position={[-0.763, -0.212, -0.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_0.geometry}
          material={materials.Wood}
          position={[0.763, -0.212, -0.2]}
        />
      </group>
      <group position={[1.445, 15.654, -5.305]} rotation={[-Math.PI / 2, 0, 0]} scale={1.472}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial002.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial004.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial005.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial001.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial003.geometry}
            material={materials['01___Default']}
          />
        </group>
      </group>
    </a.group>
  )
}
