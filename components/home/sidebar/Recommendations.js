import React from "react";

import Image from "next/image";
import Link from "next/link";

function Recommendations({ userList }) {
  return (
    <div className="mt-20">
      <p className="text-slate-400 text-lg">Find People</p>
      <div>
        {userList.map((user) => {
          return (
            <div
              key={user.username}
              className="flex items-center justify-between p-2"
            >
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full">
                  <Image
                    src={`http://127.0.0.1:8000${user.profile_pic}`}
                    alt={user.username}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <Link
                    href={{
                      pathname: "/[username]",
                      query: { username: user.username },
                    }}
                  >
                    <a className="text-slate-700 text-lg hover:underline">
                      {user.username}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="ml-24">
                <button className="bg-transparent text-bold text-sky-300">
                  Follow
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recommendations;
