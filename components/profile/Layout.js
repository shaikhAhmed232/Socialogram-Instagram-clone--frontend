import React from "react";

import ProfileHeader from "./ProfileHeader";
import ProfileNav from "./ProfileNav";

function Layout({ children }) {
  return (
    <>
      <ProfileHeader />
      <ProfileNav />
      {children}
    </>
  );
}

export default Layout;
