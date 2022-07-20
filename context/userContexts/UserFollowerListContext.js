import React, { createContext } from "react";

import { useRouter } from "next/router";

import axiosInstance from "../../axios";
import useSWR from "swr";

export const userFollowerListContext = createContext();

export default function UserFollowerListContextProvider({ children }) {
  const router = useRouter();
  const { username, page } = router.query;
  const fetcher = (...args) =>
    axiosInstance(...args)
      .then((response) => response.data)
      .catch((error) => error);

  const { data, error, isValidating } = useSWR(
    username ? `${username}/followers/` : null,
    fetcher
  );
  const loading = !data && !error;

  return (
    <userFollowerListContext.Provider
      value={{ followersList: data, error, followersLoading: loading }}
    >
      {children}
    </userFollowerListContext.Provider>
  );
}
