import React, { useContext } from "react";

import Image from "next/image";
import Link from "next/link";

import Recommendations from "./sidebar/Recommendations";

import { authContext } from "../../context/AuthContext";
import { userListContext } from "../../context/userContexts/UserListContext";

import Loading from "../common/Loading";

function Sidebar() {
  const { data, authUserFollower, authUserFollowing, error } =
    useContext(authContext);
  const { userList, loading } = useContext(userListContext);
  return (
    <div className="fixed px-5 py-5 w-full">
      <div className="flex items-center justify-between">
        <Link
          href={{ pathname: "/[username]", query: { username: data.username } }}
        >
          <a>
            <div className="flex items-center justify-between">
              <div className="relative w-20 h-20 rounded-full flex-grow">
                <Image
                  src={`http://127.0.0.1:8000${data.profile_pic}`}
                  alt="user image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="mx-2">
                <p className="font-bold">{data.username}</p>
                <p className="font-extralight">
                  {data.full_name ? data.full_name : null}
                </p>
              </div>
            </div>
          </a>
        </Link>
        <div>
          <Link href="#">
            <a className="text-blue-600">switch</a>
          </Link>
        </div>
      </div>
      {loading ? <Loading /> : <Recommendations userList={userList} />}
    </div>
  );
}

export default Sidebar;
