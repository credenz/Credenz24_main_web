import { useGSAP } from '@gsap/react'
import { useGLTF, useTexture } from '@react-three/drei'
import React, { useRef,useState } from 'react'
import gsap from "gsap"
import { Raycaster, Plane, Vector2, Vector3 } from 'three'
import { redirect, useNavigate } from 'react-router-dom'
import { useFrame, useThree } from '@react-three/fiber'


export default function MainModel({exploreUnderwater}) {
  const {camera} = useThree()
  const raycaster = useRef(new Raycaster());
  const mouse = useRef(new Vector2());
  const [move,setMove]=useState(false)
  const Island = useGLTF('/models/blueIsland.glb')
  const Submarine = useGLTF('/models/blueSub.glb')  
  const plane = useRef()
  const Sub = useRef()
  function UnderWaterMove(){
    useFrame((state, delta) => {
      if(exploreUnderwater){
        setMove(true);
      }else{
        setMove(false);
      }
      plane.current.lookAt(state.camera.position)
      mouse.current.x = state.mouse.x
      mouse.current.y = state.mouse.y
      // console.log(mouse.current.x,mouse.current.y)
      raycaster.current.setFromCamera(mouse.current, state.camera);
      const intersects = raycaster.current.intersectObject(plane.current);
      // const intersection = new Vector3();
      // raycaster.current.ray.intersectPlane(plane.current, intersection);
      // setPointOfIntersection(intersection);
      // sub.lookAt(pointOfIntersection);
      try{
        //console.log(intersects[0].point)
        Sub.current.lookAt(intersects[0].point)
        gsap.to(Sub.current.position,{x:(intersects[0].point).x,y:(intersects[0].point).y,z:(intersects[0].point).z,duration:0.5,delay:0.01})
      }catch(e){
        //console.log(e)
      }
      })
    return null
    }
    function moveSub(){
      gsap.to(Sub.current.position,{
        y:-13,
        duration:2,
        ease:"none",
        onComplete: ()=>{setMove(true);}
        })
        gsap.to(Sub.current.scale,{
          x: 0.1,
          y:0.1,
          z:0.1,
          duration:2,
          ease:"none",
          onComplete: ()=>{setMove(true);}
          })
        // gsap.to(Sub.current.rotation,{
        //   x:0.5,
        //   duration: 2
        // })
    }

    useGSAP(()=>{
      if(exploreUnderwater){
        gsap.to(camera.position,{
          y: -40,
          duration: 3,
          ease: 'none',
          onComplete: moveSub
        })
        plane.current.lookAt(camera.position)
        console.log('going down',Sub.current)
        
    }else{
      setMove(false);
      gsap.to(Sub.current.position,{
        y:0,
        x:-16,
        duration:2,
        ease:"none",
        onComplete: ()=>{setMove(false);}
        })
        gsap.to(Sub.current.rotation,{
          x:0,
          y: Math.PI/4,
          z:0,
          duration: 2
        })
        gsap.to(Sub.current.scale,{
          x: 0.2,
          y:0.2,
          z:0.2,
          duration:2,
          ease:"none",
          onComplete: ()=>{setMove(false);}
          })
    }
  },[exploreUnderwater])

  return (
    <>
    <mesh ref={plane} position={[-15,-15.3,0]} scale={45}>
      <planeGeometry/>
      <meshStandardMaterial transparent={true} opacity={0} color={"purple"} />
    </mesh>
    <primitive receiveShadow object={Island.scene} dispose={null}
    position={[0.7,0,0]}
    scale={[0.2,0.2,0.2]}
    castShadow
    rotation={[0,4.7*Math.PI/4, 0]}/>
    <primitive ref={Sub} receiveShadow object={Submarine.scene} dispose={null}
    position={[-16,0,0]}
    scale={[0.2,0.2,0.2]}
    castShadow
    rotation={[0, Math.PI/4, 0]}/>
    {move && <UnderWaterMove/>}
    </>
  )
}

useGLTF.preload('/models/blueSub.glb')
useGLTF.preload('/models/blueIsland.glb')