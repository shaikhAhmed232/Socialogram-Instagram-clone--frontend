import React, { useState, useContext } from "react";

import { useRouter } from "next/router";

import AlreadyAccountComp from "./AlreadyAccountComp";
// import Footer from "../footer/Footer";

import { authContext } from "../../context/AuthContext";
import axiosInstance from "../../axios";
import { redirect } from "next/dist/server/api-utils";

function LoginComp() {
  // console.log("running login comp");
  const { setShouldFetch } = useContext(authContext);
  const router = useRouter();
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const [errMessage, setErrMessage] = useState(null);

  const resetLoginValues = () => {
    setLoginValues({
      username: "",
      password: "",
    });
  };

  const loginValueChange = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    console.log("login function triggered");
    e.preventDefault();
    axiosInstance
      .post("login/", {
        ...loginValues,
      })
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          const tokens = res.data;
          localStorage.setItem("access_token", tokens.access);
          localStorage.setItem("refresh_token", tokens.refresh);
          setShouldFetch(true);
          if (router.pathname === "/login") {
            router.push("/");
          }
        }
      })
      .catch((err) => {
        if (err.response.status === 400 || err.response.status === 404) {
          setErrMessage(err.response.data.message);
          resetLoginValues();
        }
      });
  };

  return (
    <div className="sm:container sm:mx-auto flex-col mt-5">
      <div className="max-w-lg p-7 mx-auto bg-white shadow shadow-slate-400">
        <h1 className="font-title text-3xl text-center pt-2">Socialogram</h1>
        <div className="max-w-xs mx-auto my-3 flex justify-center">
          <button className="w-full bg-indigo-400 hover:bg-indigo-300  text-white px-7 py-2 font-bold font-serif rounded">
            Login with facebook
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-2/5 bg-slate-200" style={{ height: "1px" }}></div>
          <div className="text-slate-400 mx-2 text-sm">OR</div>
          <div className="w-2/5 bg-slate-200" style={{ height: "1px" }}></div>
        </div>
        <div className="w-full my-4 py-3 px-4">
          {errMessage ? (
            <div className="text-red-500 font-base">{errMessage}</div>
          ) : null}
          <form className="w-full" onSubmit={handleLogin}>
            <input
              name="username"
              value={loginValues.username}
              onChange={loginValueChange}
              type="text"
              className="w-full py-2 px-5 rounded-sm my-2 border-2 border-inherit focus:outline-none"
              placeholder="Username"
            />
            <input
              name="password"
              value={loginValues.password}
              onChange={loginValueChange}
              type="password"
              className="w-full py-2 px-5 rounded-sm my-2 border-2 border-inherit focus:outline-none"
              placeholder="password"
            />
            <input
              type="submit"
              value="Login"
              className="w-full mt-2 bg-indigo-400 hover:bg-indigo-300 cursor-pointer text-white font-bold text-md py-2 rounded"
            />
          </form>
          <div className="w-full text-center cursor-pointer leading-10">
            Forgot Password?
          </div>
        </div>
      </div>
      <AlreadyAccountComp
        string="Don't have an account"
        page="sign up"
        url="/signup"
      />
      {/* <Footer /> */}
    </div>
  );
}

export default LoginComp;
