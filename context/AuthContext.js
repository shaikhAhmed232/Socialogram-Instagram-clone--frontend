import React, { createContext, useState } from "react";

import useSWR from "swr";
import axiosInstance from "../axios";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  // console.log("Auth context provider running");
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
  const { data, error } = useSWR(shouldFetch ? "current-user/" : null, fetcher);
  const isAuthenticated = data?.username ? true : false;

  return (
    <authContext.Provider
      value={{
        data,
        error,
        isAuthenticated,
        setShouldFetch,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
