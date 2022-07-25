import React from "react";
import Image from "next/image";

function Loading() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="relative w-24 h-24">
        <Image
          src="/img/loading.gif"
          alt="loading ..."
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Loading;
