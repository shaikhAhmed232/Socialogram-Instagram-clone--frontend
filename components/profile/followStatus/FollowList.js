import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { authContext } from "../../../context/AuthContext";
import FollowButtons from "../../common/FollowButtons";

export default function FollowList({
  users = [],
  followersList = [],
  followingList = [],
  title,
  username,
}) {
  const {
    data,
    authUserFollowers,
    authUserFollowing,
    authUserMutate,
    authUserIsValidating,
  } = useContext(authContext);

  return (
    <div className="h-72 overflow-y-scroll">
      {users?.map((user) => {
        return (
          <div
            key={`${user.username}`}
            className="w-full grid grid-cols-4 items-center py-2"
          >
            <div className="justify-self-center">
              <div className="w-16 h-16 rounded-full relative">
                <Image
                  src={`http://127.0.0.1:8000${user.profile_pic}`}
                  alt="user image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="col-span-2">
              <Link
                href={{
                  pathname: "/[username]",
                  query: { username: user.username },
                }}
              >
                <a className="font-bold text-xl hover:underline cursor-pointer">
                  {user.username}
                </a>
              </Link>
              <p className="text-slate-500 text-lg">{user.full_name}</p>
            </div>
            <FollowButtons
              data={data}
              authUserFollowing={authUserFollowing}
              authUserMutate={authUserMutate}
              user={user}
              authUserIsValidation={authUserIsValidating}
            />
          </div>
        );
      })}
    </div>
  );
}
