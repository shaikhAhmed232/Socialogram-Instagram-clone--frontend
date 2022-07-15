import React, { useRef, useContext } from "react";

import axios from "axios";
import { authContext } from "../../../context/AuthContext";
import { mutate } from "swr";

const ChangeProfilePic = ({
  setShowProfilePic,
  inputValues,
  setInputValues,
  setErrMessages,
  setShouldFetch,
  setProfilePic,
}) => {
  const fileRef = useRef();

  const clickInput = () => {
    fileRef.current.click();
  };

  const changeInputFile = (e) => {
    setProfilePic(e.target.files[0]);
    setShowProfilePic(false);
  };

  const handelRemoveFile = (e) => {
    pass;
  };

  const handleShowModal = (e) => {
    if (e.target.classList.contains("hide-modal")) {
      setShowProfilePic(false);
    }
  };

  return (
    <div
      className="hide-modal absolute flex items-center justify-center inset-0"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={handleShowModal}
    >
      <div className="bg-white w-1/4 rounded-md">
        <div
          className="text-center py-5 text-lg font-bold text-sky-700 cursor-pointer"
          onClick={clickInput}
        >
          <label>Upload image</label>
          <input
            accept="image/*"
            ref={fileRef}
            type="file"
            onChange={changeInputFile}
            style={{ display: "none" }}
          />
        </div>
        <div
          className="text-center py-5 text-lg font-bold text-red-500 cursor-pointer"
          onClick={handelRemoveFile}
        >
          Remove Profile Pic
        </div>
      </div>
    </div>
  );
};

export default ChangeProfilePic;
