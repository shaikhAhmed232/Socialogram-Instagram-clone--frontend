import React from "react";

import { useRouter } from "next/router";

import Layout from "./Layout";
import ProfilePosts from "./ProfilePosts";
import ProfileTagged from "./ProfileTagged";
import ProfileSaved from "./ProfileSaved";

function ProfileComp() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <div className="max-w-5xl bg-white mx-auto">
        <Layout>
          {path === "/profile" ? (
            <ProfilePosts />
          ) : path === "/profile/tagged" ? (
            <ProfileTagged />
          ) : (
            <ProfileSaved />
          )}
        </Layout>
      </div>
    </>
  );
}

export default ProfileComp;
