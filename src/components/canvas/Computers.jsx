import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";
import { useWindowSize } from 'usehooks-ts'

const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const { width, height } = useWindowSize()

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"></hemisphereLight>
      <pointLight intensity={1}></pointLight>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow={true}
        shadow-mapSize={1024}
      ></spotLight>
      <primitive
        object={computer.scene}
        scale={(width<700)?0.55:.7}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      ></primitive>
    </mesh>
  );
};
const ComputerCanvas = () => {
  
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
