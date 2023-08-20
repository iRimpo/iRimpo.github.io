import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  
    return (
      <Float speed={1.75} rotationIntensity={1}
      floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0,0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial 
            color="#FCE44D"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0,0,1]}
            rotation={[2*Math.PI, 0, 6.25]}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    )
  }
  
const BallCanvas = ({ icon }) => {
  const [rotation, setRotation] = useState(0);
  const intervalRef = useRef(null);

  //auto rotation effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 0.005);
    }, 16);

    return () => clearInterval(intervalRef.current);
  }, []);

    return (
      <Canvas
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false}/>
          {/* <group rotation-y={rotation}> */}
            <Ball imgUrl={icon} />
          {/* </group> */}
        </Suspense>
        <Preload all />
      </Canvas>
    )
}

export default BallCanvas