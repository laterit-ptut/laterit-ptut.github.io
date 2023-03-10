import React, { useEffect } from "react";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useGLTF } from '@react-three/drei'
import { Mesh } from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";

// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const file = "madagascar_test_height_map.gltf";

useGLTF.preload('/models/map/' + file)

// based on "Chevrolet Corvette (C7)" (https://sketchfab.com/3d-models/chevrolet-corvette-c7-2b509d1bce104224b147c81757f6f43a) 
// by Martin Trafas (https://sketchfab.com/Bexxie) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
export function ObjMap() {
  // const gltf = useLoader(
  //   GLTFLoader,
  //   process.env.PUBLIC_URL + "models/map_meshed_test1.glb"
  // );
  // const t = useGLTF('/models/map/' + file)

  const t = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/map/" + file
  );

  useEffect(() => {
    t.scene.castShadow = true;
    t.scene.receiveShadow = true;
    t.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [t]);
  // const obj = useLoader(OBJLoader, '/models/')
  // const fbx = useLoader(FBXLoader, '/models/map_uncolored_fbx.fbx')

  return <primitive scale={5} rotation={[0, 0.43, 0]} position={[0, -10.3, 0]} object={t.scene} />;
}