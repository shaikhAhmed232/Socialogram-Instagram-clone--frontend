import React from "react";

import Image from "next/image";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="fixed px-5 py-5 w-full">
      <div className="flex items-center">
        <Link href="#">
          <a>
            <div className="flex items-center justify-between">
              <div className="relative w-20 h-20 rounded-full flex-grow">
                <Image
                  src="/img/default.jpg"
                  alt="user image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="mx-2">
                <p className="font-bold">username</p>
                <p className="font-extralight">full Name</p>
              </div>
            </div>
          </a>
        </Link>
        <div className="ml-10">
          <Link href="#">
            <a className="text-blue-600">switch</a>
          </Link>
        </div>
      </div>
      <div className="mt-20">Recommendations</div>
    </div>
  );
}

export default Sidebar;
