import { useFrame } from '@react-three/fiber'
import React, { useState, useEffect } from 'react'
import {easing} from 'maath'
import { OrbitControls } from '@react-three/drei'
import { isMobile } from 'react-device-detect'
import MainModel from '../../models/MainModel'

export default function Experience({explore, exploreUW}) {
    let camera={x:-5,y:6,z:19}
    const [rigSpeed, setRigSpeed]=useState(1.5)
    const [cameraPosition, setCameraPosition]=useState(camera)
    const [isPhone,setIsPhone]=useState(isMobile)

    function UnderWater(){
        useFrame((state, delta) => {
          state.camera.lookAt(-6,-8.73,9)
          easing.damp3(state.camera.position, [-5,-8,10] ,0.5, delta)
 
        })
        return null
    }
    function Rig(){
        useFrame((state, delta) => {
            state.camera.lookAt(0, 1, 0)
            easing.damp3(state.camera.position, [cameraPosition.x + state.mouse.x , cameraPosition.y + state.mouse.y / 1, cameraPosition.z], rigSpeed, delta)
          })
        return null
      
    }
   
    useEffect(() => {
        const timeout = setTimeout(() => {
          setRigSpeed(0.5);
        }, 4000);
    
        // Cleanup function
        return () => clearTimeout(timeout);
      }, []);

    function MobileController(){
        useFrame((state,delta)=>{
            easing.damp3(state.camera.position, [-8,15,23], 2, delta)
        })
        return <OrbitControls
        minAzimuthAngle={(-Math.PI / 180) * 60}
        maxAzimuthAngle={(Math.PI / 180) * 60}
        minPolarAngle={(Math.PI / 180) * 60}
        maxPolarAngle={(Math.PI / 180) * 80}
        enableZoom={false}
        enableDamping
        enablePan={false}
        makeDefault
        />
    }
    

    function PCController(){
        let stopDamp = false;
        setTimeout(() => {
        stopDamp = true;
        }, 3000)
        useFrame((state, delta) => {
            // 5,6.5,13
            
            !stopDamp && easing.damp3(state.camera.position, [5,13,20], 2, delta)
        })

        return <OrbitControls 
        minPolarAngle={(Math.PI / 180) * 30}
        maxPolarAngle={(Math.PI / 180) * 80}
        enableDamping
        maxDistance={30}
        minDistance={13}
        />
    }

    function Controller(){
        if (explore){
            return <PCController/>
        }
        if (isPhone && !exploreUW){
            return <MobileController/>
        }
        if(exploreUW && !explore){
         
            return <><UnderWater/></>
        }
        else{
            return <Rig/>
        }
    }

  return (
    <>
    {/* model */}
    <MainModel exploreUnderwater={exploreUW} />
    {/* <ambientLight intensity={0.5}/> */}
    
    <Controller/>

    </>
  )
}
