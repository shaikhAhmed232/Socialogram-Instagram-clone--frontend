import React, { useContext, useState } from "react";

import { useRouter } from "next/router";

import { authContext } from "../../../../context/AuthContext";
import Layout from "../../Layout";
import ChangePass from "./ChangePass";
import EditProfilePic from "../../edit-profile/EditProfilePic";

const ChangePassComp = () => {
  const router = useRouter();
  const { data, setShouldFetch } = useContext(authContext);
  const [inputValues, setInputValues] = useState({
    old_password: "",
    new_password: "",
    conf_new_pass: "",
  });

  const [errMessages, setErrMessages] = useState(null);

  return (
    <Layout>
      <ChangePass
        data={data}
        setShouldFetch={setShouldFetch}
        errMessages={errMessages}
        setErrMessages={setErrMessages}
        inputValues={inputValues}
        setInputValues={setInputValues}
        router={router}
      />
    </Layout>
  );
};

export default ChangePassComp;
