import React, { useContext } from "react";
import Image from "next/image";

import { userPostsContext } from "../../context/postContexts/UserPostContext";
import { userDetailContext } from "../../context/userContexts/UserDetaillContext";

function ProfilePosts() {
  const { userDetailsLoading } = useContext(userDetailContext);
  const { userPosts, fetchingUserPosts } = useContext(userPostsContext);
  if (fetchingUserPosts || userDetailsLoading) return <h1>Loading ...</h1>;
  return (
    <div className="w-full max-w-md mx-auto grid grid-cols-3 gap-4">
      {userPosts.map((post) => (
        <div key={post.id} className="relative w-full h-40 col-span-1">
          <Image
            src={`http://127.0.0.1:8000${post.img}`}
            alt={`${post.owner}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
}

export default ProfilePosts;
