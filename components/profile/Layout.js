import React, { useState } from "react";

import { useRouter } from "next/router";

import UserPostsContextProvider from "../../context/postContexts/UserPostContext";

import ProfileHeader from "./ProfileHeader";
import ProfileNav from "./ProfileNav";
import Modal from "../common/Modal";
import PostComponent from "../post/post-comp/PostComponent";

function Layout({ children }) {
  const router = useRouter();
  const { username, postId } = router.query;
  const onClose = () => {
    router.push(`/${username}`);
  };
  return (
    <>
      <ProfileHeader />
      <ProfileNav />
      {children}
      {/* <Modal isOpen={postId ? true : false} onClose={onClose}>
        <PostComponent />
      </Modal> */}
    </>
  );
}

export default Layout;
