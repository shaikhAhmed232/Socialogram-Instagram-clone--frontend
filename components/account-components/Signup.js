import React, { useState } from "react";
import axiosInstance from "../../axios";

import { useRouter } from "next/router";

import AlreadyAccountComp from "./AlreadyAccountComp";
// import Footer from "../footer/Footer";

export default function SignupComp() {
  const router = useRouter();
  const [inputValues, setInputValues] = useState({
    email: "",
    full_name: "",
    username: "",
    password: "",
  });
  const [errMessages, setErrMessages] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handelInputValuesChange = (e) => {
    setInputValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handelRegister = (e) => {
    e.preventDefault();
    axiosInstance
      .post("register/", {
        ...inputValues,
      })
      .then((res) => {
        if (res.status === 201) {
          setInputValues({
            email: "",
            full_name: "",
            username: "",
            password: "",
          });
          router.push("/login");
        }
      })
      .catch((err) => setErrMessages(err.response.data));
  };

  return (
    <div className="sm:container sm:mx-auto flex-col mt-5">
      <div className="max-w-lg p-7 mx-auto bg-white shadow shadow-slate-400">
        <h1 className="font-mono text-3xl text-center pt-2">Socialogram</h1>
        <div className="max-w-xs mx-auto my-3 flex justify-center">
          <button className="w-full bg-indigo-400 hover:bg-indigo-300  text-white px-7 py-2 font-bold font-title rounded">
            Login with facebook
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-2/5 bg-slate-200" style={{ height: "1px" }}></div>
          <div className="text-slate-400 mx-2 text-sm">OR</div>
          <div className="w-2/5 bg-slate-200" style={{ height: "1px" }}></div>
        </div>
        <div className="w-full my-4 py-3 px-4">
          <form className="w-full" onSubmit={handelRegister}>
            <input
              type="text"
              name="email"
              value={inputValues.email}
              onChange={handelInputValuesChange}
              className="w-full py-2 px-5 rounded-sm my-2 border-2 border-inherit focus:outline-none"
              placeholder="Email"
            />
            <div className="text-red-500">
              {errMessages.email ? errMessages.email[0] : null}
            </div>
            <input
              type="text"
              name="full_name"
              value={inputValues.full_name}
              onChange={handelInputValuesChange}
              className="w-full py-2 px-5 rounded-sm my-2 border-2 border-inherit focus:outline-none"
              placeholder="Full Name"
            />
            <input
              type="text"
              name="username"
              value={inputValues.username}
              onChange={handelInputValuesChange}
              className="w-full py-2 px-5 rounded-sm my-2 border-2 border-inherit focus:outline-none"
              placeholder="Username"
            />
            <div className="text-red-500">
              {errMessages.username ? errMessages.username[0] : null}
            </div>
            <input
              type="password"
              name="password"
              value={inputValues.password}
              onChange={handelInputValuesChange}
              className="w-full py-2 px-5 rounded-sm my-2 border-2 border-inherit focus:outline-none"
              placeholder="Password"
            />
            <div className="text-red-500">
              {errMessages.password ? errMessages.password[0] : null}
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="w-full mt-2 bg-indigo-400 hover:bg-indigo-300 cursor-pointer text-white font-bold text-md py-2 rounded"
            />
          </form>
        </div>
      </div>
      <AlreadyAccountComp
        string="Already have an account"
        page="login"
        url="/login"
      />
      {/* <Footer /> */}
    </div>
  );
}
