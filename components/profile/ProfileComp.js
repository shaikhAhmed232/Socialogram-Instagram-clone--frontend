import React, { useContext } from "react";

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
          <div className="w-full">
            {path === "/[username]" ? (
              <ProfilePosts />
            ) : path === "/[username]/tagged" ? (
              <ProfileTagged />
            ) : (
              <ProfileSaved />
            )}
          </div>
        </Layout>
      </div>
    </>
  );
}

export default ProfileComp;
