import React, { useState, useContext } from "react";

import { userFollowerListContext } from "../../../context/userContexts/UserFollowerListContext";
import { userFollowingListContext } from "../../../context/userContexts/UserFollowingList";
import FollowList from "./FollowList";
import { useRouter } from "next/router";

export default function FollowComp({ title }) {
  const router = useRouter();
  const { username } = router.query;
  const followersList = useContext(userFollowerListContext)?.followersList;
  const error = useContext(userFollowerListContext)?.error;
  const followersLoading = useContext(
    userFollowerListContext
  )?.followersLoading;

  const followingList = useContext(userFollowingListContext)?.followingList;
  const followingLoading = useContext(
    userFollowingListContext
  )?.followingLoading;

  return (
    <div
      className="bg-white rounded-md border border-slate-200 shadow w-full max-w-xl h-full max-h-96"
      // style={{ maxHeight: "40%" }}
    >
      <div className="flex relative items-center justify-center py-4">
        <div className="text-2xl font-serif font-bold">{title}</div>
        {/* {router.pathname ? (
          <div className="text-4xl absolute right-3 top-3 cursor-pointer">
            X
          </div>
        ) : null} */}
      </div>
      {followingLoading || followersLoading ? (
        <p className="text-4xl font-bold">Loading ...</p>
      ) : (
        <FollowList
          users={title === "followers" ? followersList : followingList}
          title={title}
          username={username}
        />
      )}
    </div>
  );
}
