//model
import { WeaponRoom } from "./components/Weapons/WeaponRoom";

import { Fragment, useEffect, useRef } from "react";
//debug
import { useControls, button } from "leva";

//drei
import { CameraControls } from "@react-three/drei";
import SelectorBox from "./components/Weapons/SelectorBox";
import { weapons } from "./utils/weapons";

const Scene = () => {
  const cameraRef = useRef();
  const lightRef = useRef();

  useEffect(() => {
    cameraRef.current.setLookAt(0, 2, -1.9, 0, 2.005, -2, false);
  }, []);

  const handleNewCameraLocation = (lookAt, lookFrom) => {
    cameraRef.current.setLookAt(...lookFrom, ...lookAt, true);
  };

  const cameraControls = useControls("controls", {
    GoBack: button(() => {
      cameraRef.current.setLookAt(0, 2.1, 8, 0, 3.5, 0, true);
    }),
    BackWeapons: button(() => {
      cameraRef.current.setLookAt(0, 2, -1.9, 0, 2, -2, true);
    }),
  });
  return (
    <Fragment>
      <axesHelper args={[15]} />
      <ambientLight intensity={7} color={"#ffd480"} />
      <directionalLight intensity={2} color={"white"} position={[0, 2.1, 9]} />
      <CameraControls
        ref={cameraRef}
        rotate={cameraControls.horizontalRotation}
        smoothTime={1}
        mouseButtons={{ left: 1, middle: 8, right: 2, wheel: 0 }}
      />
      <directionalLight
        castShadow
        position={[35, 95, 12]}
        color="white"
        intensity={3}
        ref={lightRef}
      />
      <WeaponRoom castShadow />
      {weapons.map((weapon, index) => {
        return <SelectorBox key={index} weapon={weapon} />;
      })}
    </Fragment>
  );
};

export default Scene;
