import React, { useContext } from "react";
import { WeaponModalContext } from "../context/weaponModal";

const Modal = ({}) => {
  const { isOpenModal, setIsOpenModal } = useContext(WeaponModalContext);

  return (
    isOpenModal && (
      <div className="w-screen h-screen fixed top-0 left-0 z-[101] flex items-center justify-center bg-orange-300 bg-opacity-70">
        <div className="grid max-h-[100%] overflow-scroll bg-s-clear rounded-md shadow-lg border-m-clear border-2 border-solid relative top-50 left-auto right-auto z-20 w-[600px] max-w-screen min-h-[20rem] text-white">
          <div className="flex px-7 items-center justify-between border-b-2 border-y-p-dark border-solid">
            <h2 className="font-bold text-3xl">Title</h2>
            <button
              className="text-2xl hover:opacity-70"
              onClick={() => setIsOpenModal(false)}
            >
              X
            </button>
          </div>
          <div className="max-h-[50%] overflow-scroll">
            <p className="text-center my-4 p-5">Body Content</p>
          </div>
          <div className="p-4 flex justify-end">
            <button
              onClick={() => setIsOpenModal(false)}
              className=" text-p-clear bg-m-clear p-2 px-4 rounded-sm mx-2 my-1 hover:opacity-70"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
