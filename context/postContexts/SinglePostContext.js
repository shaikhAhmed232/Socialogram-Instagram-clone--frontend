import React, { createContext } from "react";
import { useRouter } from "next/router";

import useSWR from "swr";
import axiosInstance from "../../axios";

export const singlePostContext = createContext();

const SinglePostContextProvider = ({ children }) => {
  console.log("running single post context provider");
  const { postId } = useRouter().query;
  const fetcher = (...args) =>
    axiosInstance
      .get(...args)
      .then((res) => res.data)
      .catch((err) => err);

  const { data, error } = useSWR(postId ? `posts/${postId}/` : null, fetcher);
  const fetchingPost = !data && !error;
  console.log(data, error);

  return (
    <singlePostContext.Provider
      value={{
        singlePost: data,
        singlePostErr: error,
        fetchingPost,
      }}
    >
      {children}
    </singlePostContext.Provider>
  );
};

export default SinglePostContextProvider;
