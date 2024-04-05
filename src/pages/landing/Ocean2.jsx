import React, { useRef, useMemo } from "react";
import { extend, useThree, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { Water } from "three/examples/jsm/objects/Water.js";

extend({ Water });

function Ocean2() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    THREE.TextureLoader, "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
  );


  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(2000, 2000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xeb8934,
      waterColor: 0x2E8B57,
      distortionScale: 40,
      fog: false,
      format: gl.encoding,
    }),
    [gl.encoding, waterNormals]
  );
  useFrame(() => {
    const material = ref?.current?.material 
    material.uniforms.time.value += 0.008;
})
  return (
    <>
    <water
      receiveShadow
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI*3 / 2}
      position={[0, -1, 0]}
    />
    <ambientLight intensity={0.5} color={0xffffff} />
    <directionalLight intensity={1} color={0xffffff} lookAt={[0,0,0]} position={[0, -30, 0]} />

    </>
  );
}

export default Ocean2;