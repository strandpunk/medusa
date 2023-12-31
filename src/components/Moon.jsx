/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 public/models/Moon.glb
*/

import { useGLTF, PerspectiveCamera, useScroll, Sphere, Environment } from '@react-three/drei'
import gsap, {  } from "gsap";
import { useLayoutEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { SlowMo } from 'gsap/src/all';


export function Moon(props) {
  const { nodes, materials } = useGLTF('./models/Moon.glb')
  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();



  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });


  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // ROTATION
    tl.current.to(
      ref.current.rotation,
      {
        duration: 14,
        y: 6.5,
        ease: SlowMo.ease.config(0.9, 0.1, false),

      },
      0
    )


    //VERTICAL ANIMATION 1
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        x: -1,
        y: 0,
        z: -1,

      },
      1.5
    );

        //VERTICAL ANIMATION 2
        tl.current.to(
          ref.current.position,
          {
            duration: 4,
            x: 1,
            y: 0,
            z: 1,
    
          },
          5.5
        );

               //VERTICAL ANIMATION 3
               tl.current.to(
                ref.current.position,
                {
                  duration: 4,
                  ease: SlowMo.ease.config(0.1, 0.1, false),
                  x: -1,
                  y: -0.2,
                  z: -1,
 
                },
                10
              );

  }, []);


  return (
    <group {...props} dispose={null} ref={ref}>
      <group rotation={[0, 0, 0]} position={[0, 0, 0]} scale={.002}>

        <mesh  onClick={(e) => console.log('click')} geometry={nodes.Cube008.geometry} material={materials['Default OBJ.005']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Moon.glb')



