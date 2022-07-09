import React, { useContext, useState } from "react";

import Image from "next/image";

import ChangeProfilePic from "./ChangeProfilePic";
import axiosInstance from "../../../axios";
import axios from "axios";

const EditProfilePic = ({
  inputValues,
  setInputValues,
  errMessages,
  setErrMessages,
  data,
  router,
  setShouldFetch,
}) => {
  const [showChangeProfilePic, setShowProfilePic] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  const changeProfilePic = async () => {
    const data = new FormData();
    data.append("profile_pic", profilePic);
    const res = await axios.put("http://127.0.0.1:8000/api/update-pic/", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.status === 200) {
      setProfilePic(null);
      router.reload(window.location.pathname);
    } else {
      setErrMessages(res.data);
    }
  };

  return (
    <div className="grid grid-cols-3 py-5 items-center">
      <div className="relative w-14 h-14 ml-24 rounded-full">
        <Image
          src={`http://127.0.0.1:8000${data.profile_pic}`}
          alt={data.username}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="ml-5 col-span-2 text-lg">
        <p>{data.username}</p>
        <div
          className="text-sky-600 cursor-pointer"
          onClick={() => setShowProfilePic(true)}
        >
          Select Image here.
        </div>
        {errMessages ? (
          errMessages.profile_pic ? (
            <span className="text-red-500">{errMessages.profile_pic[0]}</span>
          ) : null
        ) : null}
        <button
          onClick={changeProfilePic}
          className="bg-sky-700 text-white px-2 mt-2 py-1 cursor-pointer rounded"
        >
          Change
        </button>
        <span className="ml-3 text-lg text-green-500">
          {profilePic ? `selected: ${profilePic.name}` : null}
        </span>
      </div>
      {showChangeProfilePic ? (
        <ChangeProfilePic
          setShowProfilePic={setShowProfilePic}
          setInputValues={setInputValues}
          inputValues={inputValues}
          errMessages={errMessages}
          setErrMessages={setErrMessages}
          setShouldFetch={setShouldFetch}
          setProfilePic={setProfilePic}
        />
      ) : null}
    </div>
  );
};

export default EditProfilePic;
