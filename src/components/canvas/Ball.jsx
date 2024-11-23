import React, { Suspense,useState } from "react";
import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html
} from "@react-three/drei";
import CanvasLoader from '../Loader'


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}  
    // onPointerOver={() => setHovered(true)}
    // onPointerOut={() => setHovered(false)} 
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} 
      >
      <icosahedronGeometry args={[1, 7]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        >

        </Decal>
        {/* {hovered && (<Html center
   
   >          <div className="absolute" style={{ color: 'white', padding: '4px', borderRadius: '4px' }}>

    {props.nameUrl}</div>
    </Html>)} */}
        
       
  
      </mesh>
    </Float>
  );
};
const BallCanvas = ({ icon,name }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} nameUrl={name} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;