import React, { createContext, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axiosInstance from "../axios";

export const userDetailContext = createContext();

export default function UserDetailContextProvider({ children }) {
  console.log("running user detail context");
  const router = useRouter();
  const { username } = router.query;
  console.log(username);
  const fetcher = (...arg) =>
    axiosInstance
      .get(...arg)
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);

  const { data, error } = useSWR(`${username}/`, fetcher);
  const user = data;
  console.log(data);
  console.log(error);
  return (
    <userDetailContext.Provider value={{ user, error }}>
      {children}
    </userDetailContext.Provider>
  );
}
