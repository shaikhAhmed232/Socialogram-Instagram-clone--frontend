import React, { useContext } from "react";

import Posts from "./Posts";
import Stories from "./Stories";
import Sidebar from "./Sidebar";

import { postListContext } from "../../context/postContexts/PostListContext";

import Loading from "../common/Loading";

function HomeComp() {
  console.log("Home");
  const { postListData, PostListMutate, fetchingPostList } =
    useContext(postListContext);
  return (
    <div className="max-w-5xl md:mx-auto md:grid grid-cols-3 py-3">
      <div className="col-span-2">
        <Stories />
        {fetchingPostList ? (
          <Loading />
        ) : (
          postListData.map((post) => {
            return <Posts key={post.id} {...post} />;
          })
        )}
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default HomeComp;
