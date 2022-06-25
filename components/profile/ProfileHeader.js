import React from "react";

import Image from "next/image";
import Link from "next/link";

function ProfileHeader() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 px-12 py-12">
        <div className="relative w-40 h-40 rounded-full">
          <Image
            src="/img/default.jpg"
            alt="user image"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="col-span-2 py-12 px-12">
        <div className="flex justify-between">
          <div className="text-4xl font-light text-slate-300">Username</div>
          <button className="bg-zinc-100 font-bold text-sm rounded shadow-sm px-4 py-2 hover:shadow-md ">
            Edit Profile
          </button>
        </div>
        <div className="flex justify-between my-4">
          <p>
            <span className="font-bold">06</span> Posts
          </p>
          <p>
            <Link href="#">
              <a>
                <span className="font-bold">122</span> followers
              </a>
            </Link>
          </p>
          <p>
            <Link href="#">
              <a>
                <span className="font-bold">20</span> following
              </a>
            </Link>
          </p>
        </div>
        <div>
          <p className="font-bold text-lg">Full Name</p>
          <p className="font-light text-md">This is bio of user</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
