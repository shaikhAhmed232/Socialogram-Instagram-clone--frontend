import React, { useState, useContext } from "react";

import Image from "next/image";
import Link from "next/link";

import { authContext } from "../../../../context/AuthContext";
import axiosInstance from "../../../../axios";

const ChangePass = ({
  data,
  setShouldFetch,
  inputValues,
  setInputValues,
  errMessages,
  setErrMessages,
  router,
}) => {
  const handelChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  const ChangePassword = (e) => {
    e.preventDefault();
    axiosInstance
      .post("change-password/", {
        ...inputValues,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.removeItem("access_item");
          localStorage.removeItem("refresh_token");
          setShouldFetch(false);
          router.push("/login");
        }
      })
      .catch((err) => {
        setErrMessages(err.response.data);
      });
  };

  return (
    <div className="col-span-2">
      <div className="w-10/12 mx-auto my-5">
        <div className="grid grid-cols-3 py-5 items-center">
          <div className="relative w-14 h-14 ml-24 rounded-full">
            <Image
              src={`http://127.0.0.1:8000${data.profile_pic}`}
              alt="users profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="ml-5 col-span-2 text-lg">
            <p>{data.username}</p>
            {/* <Link href="#">
              <a className="text-sky-600">Change profile picture?</a>
            </Link> */}
          </div>
        </div>
        <form onSubmit={ChangePassword}>
          <div className="grid grid-cols-3 py-5 items-center">
            <div className="ml-24 rounded-full">
              <label className="font-bold text-large">old password</label>
            </div>
            <div className="ml-5 col-span-2 text-lg">
              <input
                value={inputValues.old_password}
                onChange={handelChange}
                type="password"
                name="old_password"
                className="border border-slate-300 rounded py-1 w-full px-3 focus:outline-none"
              />
              {errMessages?.old_password ? (
                <span className="text-red-500 mt-4">
                  {errMessages.old_password[0]}
                </span>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-3 py-5 items-center">
            <div className="ml-24 rounded-full">
              <label className="font-bold text-large">new password</label>
            </div>
            <div className="ml-5 col-span-2 text-lg">
              <input
                value={inputValues.new_password}
                onChange={handelChange}
                type="password"
                name="new_password"
                className="border border-slate-300 rounded py-1 w-full px-3 focus:outline-none"
              />
              {errMessages?.new_password ? (
                <span className="text-red-500 mt-4">
                  {errMessages.new_password[0]}
                </span>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-3 py-5 items-center">
            <div className="ml-24 rounded-full">
              <label className="font-bold text-large">
                confirm new password
              </label>
            </div>
            <div className="ml-5 col-span-2 text-lg">
              <input
                value={inputValues.conf_new_pass}
                onChange={handelChange}
                type="password"
                name="conf_new_pass"
                className="border border-slate-300 rounded py-1 w-full px-3 focus:outline-none"
              />
              {errMessages?.conf_new_pass ? (
                <span className="text-red-500 mt-4">
                  {errMessages.conf_new_pass[0]}
                </span>
              ) : null}
              {errMessages?.non_field_errors ? (
                <span className="text-red-500 mt-4">
                  {errMessages.non_field_errors[0]}
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              className="bg-sky-600 text-white py-2 px-5 rounded-sm font-bold cursor-pointer hover:bg-sky-900"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;
