import React, { useContext } from "react";

import PostImg from "./PostImg";
import PostComments from "./PostComments";

import { singlePostContext } from "../../../context/postContexts/SinglePostContext";
import Loading from "../../common/Loading";

function PostComponent() {
  console.log("running post component");
  const { singlePost, singlePostErr, fetchingPost } =
    useContext(singlePostContext);
  // if (singlePostErr) return <h1>{JSON.stringify(singlePostErr)}</h1>;
  return (
    <div
      className="max-w-5xl pt-10 mx-auto"
      style={{ height: "35rem", maxHeight: "60rem" }}
    >
      {fetchingPost ? (
        <Loading />
      ) : (
        <div className="grid md:grid-cols-2 bg-white h-full">
          <PostImg {...singlePost} />
          <PostComments {...singlePost} />
        </div>
      )}
    </div>
  );
}

export default PostComponent;
