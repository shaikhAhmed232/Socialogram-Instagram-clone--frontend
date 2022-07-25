import React, { createContext } from "react";

import useSWR from "swr";

import axiosInstance from "../../axios";

export const postListContext = createContext();

export default function PostListContextProvider({ children }) {
  const fetcher = (arg) =>
    axiosInstance(arg)
      .then((res) => res.data)
      .catch((err) => err);

  const { data, error, mutate } = useSWR("posts/all-posts/", fetcher);
  const fetchingPostList = !data && !error;
  console.log(data);
  return (
    <postListContext.Provider
      value={{
        postListData: data,
        postListError: error,
        postListMutate: mutate,
        fetchingPostList,
      }}
    >
      {children}
    </postListContext.Provider>
  );
}
