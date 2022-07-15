import React, { createContext, useState, useEffect } from "react";
import useSWR from "swr";
import axiosInstance from "../axios";

export const userDetailContext = createContext();

export default function UserDetailContextProvider({ children, username }) {
  const [user, setUser] = useState(null);
  console.log("running user detail context");
  console.log(username);
  const fetcher = (...args) =>
    axiosInstance(...args)
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  const { data, error } = useSWR(`${username}/`, fetcher);
  // console.log(data, error);
  // useEffect(() => {
  //   axiosInstance(`${username}/`)
  //     .then((res) => {
  //       console.log("running axios instance from user detail.");
  //       setUser(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [username]);
  return (
    <userDetailContext.Provider
      value={{
        user: data,
        error,
        followers: data?.followers,
        following: data?.following,
      }}
    >
      {children}
    </userDetailContext.Provider>
  );
}
