//model
import { WeaponRoom } from "./components/Weapons/WeaponRoom";

import { Fragment, useEffect, useRef } from "react";
//debug
import { useControls, button } from "leva";

//drei
import { CameraControls } from "@react-three/drei";
import SelectorBox from "./components/Weapons/SelectorBox";

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
      cameraRef.current.setLookAt(0, 2.1, 9, 0, 3.5, 0, true);
    }),
    BackWeapons: button(() => {
      cameraRef.current.setLookAt(0, 2, -1.9, 0, 2.02, -2, true);
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
      <SelectorBox position={[-0.15, 1.8, -6]} size={[0.6, 0.9]} />
      <SelectorBox position={[0, 2.8, -6]} size={[0.6, 0.9]} />
      <SelectorBox position={[0.7, 2, -5.9]} size={[0.9, 0.8]} />
      <SelectorBox position={[1.7, 2, -5.9]} size={[0.9, 0.8]} />
      <SelectorBox position={[1.2, 3.08, -5.8]} size={[1.1, 1]} />
      <SelectorBox position={[-0.75, 2.3, -6]} size={[0.4, 2]} />
      <SelectorBox position={[-1.35, 2.3, -5.8]} size={[0.4, 2]} />
      <SelectorBox position={[-1.9, 2.3, -5.7]} size={[0.4, 2]} />
    </Fragment>
  );
};

export default Scene;
