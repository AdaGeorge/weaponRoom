import React, { useState } from "react";

export const WeaponModalContext = React.createContext({
  weaponInModal: null,
  setWeaponInModal: () => null,
  isOpenModal: false,
  setIsOpenModal: () => null,
});

export const WeaponModalProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [weaponInModal, setWeaponInModal] = useState({});
  const value = {
    weaponInModal,
    setWeaponInModal,
    isOpenModal,
    setIsOpenModal,
  };

  return (
    <WeaponModalContext.Provider value={value}>
      {children}
    </WeaponModalContext.Provider>
  );
};
