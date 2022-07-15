import React, { useContext, useState } from "react";

import EditProfileDetails from "./EditProfileDetails";
import EditProfilePic from "./EditProfilePic";
import Layout from "../Layout";

import { authContext } from "../../../context/AuthContext";
import axiosInstance from "../../../axios";
import axios from "axios";
import { useRouter } from "next/router";

function EditProfileComp() {
  const { data, mutate } = useContext(authContext);
  const router = useRouter();
  const [inputValues, setInputValues] = useState({
    id: data.id,
    username: data.username,
    email: data.email,
    full_name: data.full_name,
    profile_pic: data.profile_pic,
  });

  const [errMessages, setErrMessages] = useState(null);
  return (
    <>
      <Layout>
        <div className="col-span-2">
          <div className="w-10/12 mx-auto my-5">
            <EditProfilePic
              data={data}
              errMessages={errMessages}
              setErrMessages={setErrMessages}
              inputValues={inputValues}
              setInputValues={setInputValues}
              router={router}
              mutate={mutate}
            />
            <EditProfileDetails
              router={router}
              data={data}
              errMessages={errMessages}
              setErrMessages={setErrMessages}
              inputValues={inputValues}
              setInputValues={setInputValues}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default EditProfileComp;
