import React from "react";

import Image from "next/image";

function Stories() {
  return (
    <div className="bg-white overflow-hidden py-4 px-4 shadow-md">
      <div className="w-24">
        <div className="w-20 h-20 relative z-10 rounded-full">
          <Image
            src="/img/default.jpg"
            layout="fill"
            objectFit="cover"
            alt="User Image"
            className="rounded-full"
          />
        </div>
        <div className="text-center">username</div>
      </div>
    </div>
  );
}

export default Stories;
