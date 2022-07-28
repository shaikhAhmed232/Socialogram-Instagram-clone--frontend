import React from "react";

import Image from "next/image";

function PostImg({ post }) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={`http://127.0.0.1:8000${post.img}`}
        alt="posted img"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default PostImg;
