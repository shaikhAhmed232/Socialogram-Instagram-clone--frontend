import React, { useState } from "react";

import { useRouter } from "next/router";

import UserPostsContextProvider from "../../context/postContexts/UserPostContext";

import ProfileHeader from "./ProfileHeader";
import ProfileNav from "./ProfileNav";

function Layout({ children }) {
  const router = useRouter();
  const { page } = router.query;
  return (
    <>
      <ProfileHeader />
      <ProfileNav />
      {children}
    </>
  );
}

export default Layout;
