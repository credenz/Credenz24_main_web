import { Float, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Bubble1() {
    const aboutUs=useGLTF('/models/AboutUs.glb')
    const contactUs=useGLTF('/models/ContactUs-1.glb')
    const events=useGLTF('/models/Events-1.glb')
    const sponsors=useGLTF('/models/Sponsors-1.glb')
    const navigate=useNavigate()
    // const viewport=useThree((state)=>state.viewport)
    const scalingFactor=window.innerWidth/1300
 
    const mobile=window.innerWidth<=430
    let p=[[-9,-10,-5],[-15,-14,5],[-19,-9.5,5],[-5,-11.5,0]]
        if(window.innerWidth<=1245 && window.innerWidth>940){
            p=[[-13,-11.75,-1],[-18,-18,7],[-20,-13,11],[-9,-14,0]]
        }
        else if(window.innerWidth<=940 && window.innerWidth>847){
            p=[[-14,-12,-1],[-20,-19,8],[-25,-16,5],[-11,-18,0]]
        }
        else if(window.innerWidth<=847 && window.innerWidth>630){
            p=[[-19,-19,2],[-25,-26,7],[-25,-19,9],[-20,-15,5]]
        }
        else if(window.innerWidth<=630 && window.innerWidth>550){
            p=[[-20,-19,2],[-29,-29,11],[-25,-19,12],[-20,-18,10]]
        }
        else if(window.innerWidth<=550 && window.innerWidth>430){
            p=[[-25,-21,2],[-35,-29,12],[-25,-24,12],[-24,-25,10]]
        }
        else if(window.innerWidth<=430){
            p=[[-11,-10,6],[-12,-2,6],[-15.25,-4,9],[-12.12,-12,11]]
        }
  
  return (
    <group scale={scalingFactor} position={mobile?[-5,-8,4]:null}>
    <Float
    speed={0.5}
    floatingRange={[-0.05,0.05]}
    onClick={()=>{
        navigate('/about')}}
    >

        <primitive object={aboutUs.scene} dispose={null}
        position={p[0]}
        scale={[0.5,0.5,0.5]}
        rotation={mobile?[Math.PI+2.5,Math.PI-3,Math.PI-2.85]:[0,Math.PI-3,0]}
    />/</Float>

    <Float
    speed={1}
    floatingRange={[-0.05,0.05]}
    onClick={()=>{
        // ADD NAVIGATE TO CONTACT US HERE
        navigate('/contact')}}
    >
        <primitive object={contactUs.scene} dispose={null}
        position={p[1]}
        scale={[0.5,0.5,0.5]}
        rotation={mobile?[0,Math.PI-2.5,0]:[0,Math.PI-2,0]}
    />
    </Float>
    <Float
    speed={0.2}
    floatingRange={[-0.05,0.05]}
    onClick={()=>{
        // ADD NAVIGATE TO EVENTS HERE
        navigate('/events')}}
    >
        <primitive object={events.scene} dispose={null}
        position={p[2]}
        scale={[0.5,0.5,0.5]}
        rotation={mobile?[0,Math.PI-2,0]:[0,Math.PI/2,0]}
        />
    </Float>

    <Float
    speed={0.5}
    floatingRange={[-0.05,0.05]}
    onClick={()=>{
        // ADD NAVIGATE TO  SPONSORS HERE
        navigate('/sponsors')}}
    >
        <primitive object={sponsors.scene} dispose={null}
        position={p[3]}
        scale={[0.5,0.5,0.5]}
        rotation={mobile?[Math.PI+2.5,Math.PI+4,Math.PI-2.65]:[Math.PI+2.5,Math.PI+3,0]}
    />
    </Float>
    </group>
  )
}

export default Bubble1

useGLTF.preload('/models/AboutUs.glb')
useGLTF.preload('/models/ContactUs-1.glb')
useGLTF.preload('/models/Events-1.glb')
useGLTF.preload('/models/Sponsors-1.glb')