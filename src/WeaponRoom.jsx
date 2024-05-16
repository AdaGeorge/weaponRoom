/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/model/weaponRoom.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function WeaponRoom(props) {
  const { nodes, materials } = useGLTF("/model/weaponRoom.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.TEMBOK_BATU}
        position={[0, 0.344, 0]}
      />
      <mesh
        geometry={nodes.Plane004.geometry}
        material={materials.KAYU_Cagak}
        position={[-0.001, 0.349, 4.861]}
      />
      <mesh
        geometry={nodes.znYXdGJHpng_smallpng_small002.geometry}
        material={materials["Material.028"]}
        position={[0.161, 0.177, 1.566]}
        scale={[3.041, 0.19, 3.041]}
      />
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials.KAYU_furniture}
        position={[2.566, 0.355, 3.416]}
      />
      <mesh
        geometry={nodes.znYXdGJHpng_smallpng_small001.geometry}
        material={materials["Material.028"]}
        position={[0.249, 3.127, -7.615]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[4.775, 0.299, 4.775]}
      />
      <group
        position={[3.137, 1.646, 2.535]}
        rotation={[0.775, Math.PI / 2, 0]}
        scale={0.127}
      >
        <mesh geometry={nodes.Plane002.geometry} material={materials.Axe_low} />
        <mesh
          geometry={nodes.Plane002_1.geometry}
          material={materials["kulit.001"]}
        />
        <mesh
          geometry={nodes.Plane002_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Plane002_3.geometry}
          material={materials.Sword_low}
        />
        <mesh
          geometry={nodes.Plane002_4.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Plane002_5.geometry}
          material={materials.Shield_low}
        />
        <mesh geometry={nodes.Plane002_6.geometry} material={materials.Stone} />
        <mesh
          geometry={nodes.Plane002_7.geometry}
          material={materials["Material.009"]}
        />
        <mesh geometry={nodes.Plane002_8.geometry} material={materials.pin} />
        <mesh
          geometry={nodes.Plane002_9.geometry}
          material={materials.stone_solid}
        />
        <mesh
          geometry={nodes.Plane002_10.geometry}
          material={materials.bONE_LOW}
        />
        <mesh
          geometry={nodes.Plane002_11.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes.Plane002_12.geometry}
          material={materials.kulit}
        />
        <mesh
          geometry={nodes.Plane002_13.geometry}
          material={materials["transp.001"]}
        />
        <mesh
          geometry={nodes.Plane002_14.geometry}
          material={materials["Dagger_Ice.002"]}
        />
        <mesh
          geometry={nodes.Plane002_15.geometry}
          material={materials["Dagger_Ice.003"]}
        />
        <mesh
          geometry={nodes.Plane002_16.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Plane002_17.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          geometry={nodes.Plane002_18.geometry}
          material={materials.mace_Chain}
        />
        <mesh
          geometry={nodes.Plane002_19.geometry}
          material={materials["mace_Chain.001"]}
        />
        <mesh
          geometry={nodes.Plane002_20.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          geometry={nodes.Plane002_21.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Plane002_22.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          geometry={nodes.Plane002_23.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          geometry={nodes.Plane002_24.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          geometry={nodes.Plane002_25.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          geometry={nodes.Plane002_26.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          geometry={nodes.Plane002_27.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          geometry={nodes.Plane002_28.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          geometry={nodes.Plane002_29.geometry}
          material={materials.Leviathan_low}
        />
        <mesh
          geometry={nodes.Plane002_30.geometry}
          material={materials.Mace_Low}
        />
        <mesh
          geometry={nodes.Plane002_31.geometry}
          material={materials.metal}
        />
        <mesh geometry={nodes.Plane002_32.geometry} material={materials.tali} />
        <mesh
          geometry={nodes.Plane002_33.geometry}
          material={materials["Material.023"]}
        />
        <mesh
          geometry={nodes.Plane002_34.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          geometry={nodes.Plane002_35.geometry}
          material={materials["Material.025"]}
        />
        <mesh
          geometry={nodes.Plane002_36.geometry}
          material={materials["Material.026"]}
        />
        <mesh
          geometry={nodes.Plane002_37.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          geometry={nodes.Plane002_38.geometry}
          material={materials["metal.001"]}
        />
        <mesh
          geometry={nodes.Plane002_39.geometry}
          material={materials["Material.022"]}
        />
      </group>
      <mesh geometry={nodes.Cube_1.geometry} material={materials.Material} />
      <mesh geometry={nodes.Cube_2.geometry} material={materials.Material} />
    </group>
  );
}

useGLTF.preload("/weaponRoom.glb");
