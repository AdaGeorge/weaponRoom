import React, { Fragment, useContext, useEffect, useState } from "react";
import { WeaponModalContext } from "../../context/weaponModal.context";

const SelectorBox = ({ weapon }) => {
  const { position, size } = weapon;
  const [hovered, setHovered] = useState(false);
  const { setIsOpenModal, setWeaponInModal } = useContext(WeaponModalContext);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <Fragment>
      <mesh
        position={position}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={() => {
          setIsOpenModal(true);
          setWeaponInModal(weapon);
        }}
      >
        <planeGeometry args={size} />
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
    </Fragment>
  );
};

export default SelectorBox;
