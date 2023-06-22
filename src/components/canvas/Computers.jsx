import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./dingus_the_cat/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={2.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[0, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.6}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.2}
        position={[0, -2.25, 0]}
        rotation={[-0.01, 0.7, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [rotation, setRotation] = useState(0);
  const intervalRef = useRef(null);
  const controlsRef = useRef(null);

  // const listener = useRef(new THREE.AudioListener());
  // const audioLoader = useRef(new THREE.AudioLoader());
  // const backgroundSound = useRef(new THREE.Audio(listener.current));

  // useEffect(() => {
  //   const audioContext = new AudioContext();
  //   audioLoader.current.load('../assets/maxwell.mp3', function (buffer) {
  //     backgroundSound.current.setBuffer(buffer);
  //     backgroundSound.current.setLoop(true);
  //     backgroundSound.current.setVolume(0.4);
  //     backgroundSound.current.setPlaybackRate(1);
  //     backgroundSound.current.connect(audioContext.destination);
  //     backgroundSound.current.play();
  //   });
  // }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 0.01);
    }, 16);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleUserInput = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <group rotation-y={rotation}>
          <Computers />
        </group>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
