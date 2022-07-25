import React, { createContext } from "react";
import { useRouter } from "next/router";

import useSWR from "swr";

import axiosInstance from "../../axios";

export const userPostsContext = createContext();

export default function UserPostsContextProvider({ children }) {
  const router = useRouter();
  const { username } = router.query;
  console.log(username);
  const fetcher = (arg) =>
    axiosInstance(arg)
      .then((res) => res.data)
      .catch((err) => err);

  const { data, error } = useSWR(
    username ? `posts/${username}/` : null,
    fetcher
  );
  const fetchingUserPosts = !data && !error;
  console.log(data, error, fetchingUserPosts);
  return (
    <userPostsContext.Provider
      value={{ userPosts: data, userPostsErr: error, fetchingUserPosts }}
    >
      {children}
    </userPostsContext.Provider>
  );
}
