import React from "react";
import { useRouter } from "next/router";
import axiosInstance from "../axios";

function Sample() {
  const router = useRouter();
  const username = "user_5";
  const fetcher = axiosInstance(`http://127.0.0.1:8000/api/${username}/`)
    .then((res) => console.log("running fetch request", res.data))
    .catch((err) => console.log(err));
  return <div>Sample</div>;
}

export default Sample;
