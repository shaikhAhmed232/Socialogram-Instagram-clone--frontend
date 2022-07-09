import React, { useContext, useEffect } from "react";

import { useRouter } from "next/router";

import Login from "../../pages/login";
import { authContext } from "../../context/AuthContext";

function withAuth(Component) {
  // console.log("with auth componetnt running")
  function WithAuthComponent(props) {
    const { isAuthenticated } = useContext(authContext);
    const router = useRouter();

    if (!isAuthenticated) {
      return <Login />;
    }
    return <Component {...props} />;
  }
  return WithAuthComponent;
}

export default withAuth;
