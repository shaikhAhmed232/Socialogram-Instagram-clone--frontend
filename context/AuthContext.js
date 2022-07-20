import React, { createContext, useState } from "react";

import useSWR from "swr";
import axiosInstance from "../axios";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  console.log("Auth context provider running");
  const [shouldFetch, setShouldFetch] = useState(true);
  const fetcher = (...arg) =>
    axiosInstance
      .get(...arg)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setShouldFetch(false);
        }
      });
  const { data, error, mutate, isValidating } = useSWR(
    shouldFetch ? "current-user/" : null,
    fetcher
  );
  const isAuthenticated = data?.username ? true : false;
  const authUserFollowers = data?.followers;
  const authUserFollowing = data?.following;

  return (
    <authContext.Provider
      value={{
        data,
        error,
        authUserFollowers,
        authUserFollowing,
        authUserMutate: mutate,
        isAuthenticated,
        setShouldFetch,
        authUserIsValidating: isValidating,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
