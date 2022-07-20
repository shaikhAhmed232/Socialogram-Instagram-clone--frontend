import React from "react";

import { useRouter } from "next/dist/client/router";

import FollowComp from "../../../components/profile/followStatus/FollowComp";
import UserFollowingListContextProvider from "../../../context/userContexts/UserFollowingList";

export default function Followers() {
  const router = useRouter();
  const { username, page } = router.query;
  return (
    <UserFollowingListContextProvider>
      <div className="flex justify-center my-40">
        <FollowComp title="following" />
      </div>
    </UserFollowingListContextProvider>
  );
}
