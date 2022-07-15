import React, { useEffect } from "react";
import axiosInstance from "../axios";

function Simple() {
  console.log("running simple");
  useEffect(() => {
    axiosInstance("user_5/")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  });
  return <h1>Simple</h1>;
}

export default Simple;
