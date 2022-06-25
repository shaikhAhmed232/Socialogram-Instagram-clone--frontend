import React from "react";

import Image from "next/image";
import Link from "next/link";

function Posts() {
  return (
    <div className="mt-4 shadow-md">
      <div className="bg-white">
        <div className="flex justify-between items-center py-1 px-2">
          <div className="flex items-center ">
            <div className="w-10 h-10 relative rounded-full">
              <Image
                src="/img/default.jpg"
                alt="user"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="ml-2">Username</div>
          </div>
          <div>menu</div>
        </div>
        <div className="w-full h-96 relative">
          <Image
            src="/img/default.jpg"
            alt="user image"
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
          <div>next/prev</div>
          <div>tag</div>
        </div>
        <div className="px-5">
          <div className="mb-2">999 likes</div>
          <div className="mb-2">description</div>
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
