import React, { useContext, useEffect } from "react";

import { useRouter } from "next/router";

import Login from "../../pages/login";
import { authContext } from "../../context/AuthContext";
import FullScreenLoading from "../common/FullScreenLoading";

function withAuth(Component) {
  // console.log("with auth componetnt running")
  function WithAuthComponent(props) {
    const { isAuthenticated, authUserIsValidating } = useContext(authContext);
    if (authUserIsValidating) return <FullScreenLoading />;
    if (!isAuthenticated) {
      return <Login />;
    }
    return <Component {...props} />;
  }
  return WithAuthComponent;
}

export default withAuth;
