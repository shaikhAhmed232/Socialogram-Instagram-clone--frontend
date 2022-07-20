import React, { createContext } from "react";

import { useRouter } from "next/router";

import axiosInstance from "../../axios";
import useSWR from "swr";

export const userFollowingListContext = createContext();

export default function UserFollowingListContextProvider({ children }) {
  const router = useRouter();
  const { username, page } = router.query;
  const fetcher = (...args) =>
    axiosInstance(...args)
      .then((response) => response.data)
      .catch((error) => error);

  const { data, error, isValidating } = useSWR(
    username ? `${username}/following/` : null,
    fetcher
  );
  const loading = !data && !error;

  return (
    <userFollowingListContext.Provider
      value={{
        followingList: data,
        error,
        followingLoading: loading,
        followingListIsValidating: isValidating,
      }}
    >
      {children}
    </userFollowingListContext.Provider>
  );
}
