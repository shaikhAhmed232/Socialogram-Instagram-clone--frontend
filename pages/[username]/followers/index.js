import React from "react";

import { useRouter } from "next/dist/client/router";

import FollowComp from "../../../components/profile/followStatus/FollowComp";
import UserFollowerListContextProvider from "../../../context/userContexts/UserFollowerListContext";
import UserFollowingListContextProvider from "../../../context/userContexts/UserFollowingList";

export default function Followers() {
  const router = useRouter();
  return (
    <UserFollowerListContextProvider>
      <div className="flex justify-center my-40">
        <FollowComp title="followers" />
      </div>
    </UserFollowerListContextProvider>
  );
}
