//model
import { WeaponRoom } from "./WeaponRoom";

import { Fragment, useEffect, useRef, useState } from "react";
//debug
import { useControls, button } from "leva";

//drei
import { CameraControls, OrbitControls } from "@react-three/drei";
import { AxesHelper } from "three";

const Scene = () => {
  const cameraRef = useRef();
  const lightRef = useRef();

  const [play, setPlay] = useState(false);

  useEffect(() => {
    cameraRef.current.setLookAt(0, 2.1, 9, 0, 3.5, 0, false);
  }, []);

  const handleNewLocation = (lookAt, lookFrom) => {
    cameraRef.current.setLookAt(...lookFrom, ...lookAt, true);
  };

  const cameraControls = useControls("controls", {
    GoBack: button(() => {
      cameraRef.current.setLookAt(0, 2.1, 9, 0, 3.5, 0, true);
    }),
    BackWeapons: button(() => {
      cameraRef.current.setLookAt(0, 2, -1.9, 0, 2.02, -2, true);
    }),
    sound: button(() => {
      setPlay(!play);
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
      />
      <directionalLight
        castShadow
        position={[35, 95, 12]}
        color="white"
        intensity={3}
        ref={lightRef}
      />
      <WeaponRoom castShadow />
    </Fragment>
  );
};

export default Scene;
