import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { userPostsContext } from "../../context/postContexts/UserPostContext";
import { userDetailContext } from "../../context/userContexts/UserDetaillContext";

function ProfilePosts() {
  const router = useRouter();
  const { username } = router.query;
  const { userDetailsLoading } = useContext(userDetailContext);
  const { userPosts, fetchingUserPosts } = useContext(userPostsContext);

  if (fetchingUserPosts || userDetailsLoading) return <h1>Loading ...</h1>;
  return (
    <div className="w-full max-w-md mx-auto grid grid-cols-3 gap-4">
      {userPosts.map((post) => (
        <Link key={post.id} href={`/${username}/post/${post.id}`}>
          <a>
            <div className="relative w-full h-40 col-span-1">
              <Image
                src={`http://127.0.0.1:8000${post.img}`}
                alt={`${post.owner}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default ProfilePosts;
