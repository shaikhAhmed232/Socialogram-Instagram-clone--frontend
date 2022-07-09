import React from "react";
import { useContext } from "react";

import { useRouter } from "next/router";

import Navbar from "./navbar/Navbar";
import { authContext } from "../context/AuthContext";

function Layout({ children }) {
  const { isAuthenticated } = useContext(authContext);

  if (!isAuthenticated) {
    return <>{children}</>;
  }
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
