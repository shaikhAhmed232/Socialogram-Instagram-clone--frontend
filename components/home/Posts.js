import React, { useContext } from "react";

import Image from "next/image";
import Link from "next/link";

import Loading from "../common/Loading";
import { userListContext } from "../../context/userContexts/UserListContext";

function Posts({ id, owner, img, caption }) {
  const { userList } = useContext(userListContext);
  const user = userList?.filter((user) => user.id === owner)[0];

  if (!user) return <Loading />;
  return (
    <div className="mt-4 shadow-md">
      <div className="bg-white">
        <div className="flex justify-between items-center py-1 px-2">
          <div className="flex items-center ">
            <div className="w-10 h-10 relative rounded-full">
              <Image
                src={`http://127.0.0.1:8000${user.profile_pic}`}
                alt={`${owner} profile pic`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="ml-2">{user.username}</div>
          </div>
          <div>menu</div>
        </div>
        <div className="w-full h-96 relative">
          <Image
            src={`http://127.0.0.1:8000${img}`}
            alt={`post by ${owner}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex justify-between px-2 py-4">
          <div className="flex">
            <div className="mr-2">like</div>
            <div className="mr-2">Comment</div>
            <div>share</div>
          </div>
          <div>tag</div>
        </div>
        <div className="px-5">
          <div className="mb-2">999 likes</div>
          <div className="mb-2">{caption}</div>
          <div className="mb-2">
            <Link href="#">
              <a>View all 999 comments</a>
            </Link>
          </div>
          <div className="mb-2">
            <p>
              <span className="font-bold">username</span> comment
            </p>
            <p className="opacity-10">{new Date().getHours()}</p>
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Add Comment"
            className="grow py-3 px-5 border-t-2 focus:outline-none border-inherit"
          />
          <button className="px-3">Post</button>
        </div>
      </div>
    </div>
  );
}

export default Posts;
