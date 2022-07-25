import React, { createContext, useState, useEffect } from "react";
import useSWR from "swr";
import axiosInstance from "../../axios";

import { useRouter } from "next/router";

export const userDetailContext = createContext();

export default function UserDetailContextProvider({ children }) {
  const router = useRouter();
  const { username } = router.query;
  const fetcher = (...args) =>
    axiosInstance(...args)
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  const { data, error } = useSWR(username ? `${username}/` : null, fetcher);
  const loading = !data && !error;
  return (
    <userDetailContext.Provider
      value={{
        user: data,
        error,
        followers: data?.followers,
        following: data?.following,
        userDetailsLoading: loading,
      }}
    >
      {children}
    </userDetailContext.Provider>
  );
}
