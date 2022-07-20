import React, { createContext, useState } from "react";
import useSWR from "swr";
import axiosInstance from "../../axios";

export const userListContext = createContext();

const UserListContextProvider = ({ children }) => {
  const fetcher = (...args) =>
    axiosInstance
      .get(...args)
      .then((res) => res.data)
      .catch((err) => err);

  const { data, error } = useSWR("users/", fetcher);
  const userListContextData = {
    userList: data,
    loading: !data && !error,
  };
  return (
    <userListContext.Provider value={userListContextData}>
      {children}
    </userListContext.Provider>
  );
};

export default UserListContextProvider;
