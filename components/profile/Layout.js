import React, { useState } from "react";

import ProfileHeader from "./ProfileHeader";
import ProfileNav from "./ProfileNav";
// import FollowModal from "./FollowModal";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <ProfileHeader />
      <ProfileNav />
      {children}
    </>
  );
}

export default Layout;
