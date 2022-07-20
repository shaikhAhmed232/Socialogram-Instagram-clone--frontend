import React, { useContext } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { authContext } from "../../context/AuthContext";
import { userDetailContext } from "../../context/userContexts/UserDetaillContext";
import FollowModal from "./followStatus/FollowModal";
import FollowComp from "./followStatus/FollowComp";
import {
  makeFollowRequest,
  makeUnFollowRequest,
} from "../../handlers/handlers";

function ProfileHeader() {
  console.log("running Profile headers");
  const { data, authUserFollowing, authUserMutate } = useContext(authContext);
  const { user, followers, following, userDetailsLoading } =
    useContext(userDetailContext);
  const router = useRouter();
  const { username, page } = router.query;

  if (userDetailsLoading) return <h1>Loading...</h1>;
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-span-1 px-12 py-12">
          <div className="relative w-40 h-40 rounded-full">
            <Image
              src={`${user.profile_pic}`}
              alt="user image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="col-span-2 py-12 px-12">
          <div className="flex justify-between">
            <div className="text-4xl font-light text-slate-300">
              {user?.username}
            </div>
            {data.username === username ? (
              <Link href="/accounts/edit-profile">
                <a className="bg-zinc-100 font-bold text-sm rounded shadow-sm px-4 py-2 hover:shadow-md ">
                  Edit Profile
                </a>
              </Link>
            ) : authUserFollowing.some(
                ({ following }) => following === user?.id
              ) ? (
              <button
                onClick={() => makeUnFollowRequest(user.id)}
                className="bg-slate-300 text-slate-700 mr-1 py-2 rounded-md font-bold"
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() =>
                  makeFollowRequest(user, authUserFollowing, authUserMutate)
                }
                className="bg-blue-400 font-bold text-white text-sm rounded px-4 py-2 hover:shadow-md"
              >
                Follow
              </button>
            )}
          </div>
          <div className="flex justify-between my-4">
            <p>
              <span className="font-bold">06</span> Posts
            </p>
            <p>
              <Link
                href={`/${username}/?page=followers`}
                as={`/${username}/${"followers"}`}
              >
                <a>
                  <span className="font-bold">{followers?.length}</span>{" "}
                  followers
                </a>
              </Link>
            </p>
            <p>
              <Link
                href={`/${username}?page=following`}
                as={`/${username}/${"following"}`}
              >
                <a>
                  <span className="font-bold">{following?.length}</span>{" "}
                  following
                </a>
              </Link>
            </p>
          </div>
          <div>
            <p className="font-bold text-lg">{user?.full_name}</p>
            <p className="font-light text-md">This is bio of user</p>
          </div>
        </div>
      </div>
      <FollowModal show={page ? true : false}>
        <FollowComp title={page} />
      </FollowModal>
    </>
  );
}

export default ProfileHeader;
