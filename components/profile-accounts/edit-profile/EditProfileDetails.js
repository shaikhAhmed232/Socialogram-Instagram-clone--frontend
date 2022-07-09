import React, { useContext, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import axiosInstance from "../../../axios";

const EditProfileDetails = ({
  inputValues,
  setInputValues,
  errMessages,
  setErrMessages,
  router,
  setShouldFetch,
}) => {
  const handelChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditDetails = (e) => {
    e.preventDefault();
    const { profile_pic, ...remaining } = inputValues;
    axiosInstance
      .put("current-user/", remaining)
      .then((res) => {
        router.reload(window.location.pathname);
      })
      .catch((err) => {
        setErrMessages(err.response.data);
      });
  };

  return (
    <>
      <form onSubmit={handleEditDetails}>
        <div className="grid grid-cols-3 py-5 items-center">
          <div className="ml-24 rounded-full">
            <label className="font-bold text-large">Username</label>
          </div>
          <div className="ml-5 col-span-2 text-lg">
            <input
              value={inputValues.username}
              onChange={handelChange}
              type="text"
              name="username"
              className="border border-slate-300 rounded py-1 w-full px-3 focus:outline-none"
            />
            {errMessages ? (
              errMessages.username ? (
                <span className="text-red-500">{errMessages.username[0]}</span>
              ) : null
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-3 py-5 items-center">
          <div className="ml-24 rounded-full">
            <label className="font-bold text-large">Full Name</label>
          </div>
          <div className="ml-5 col-span-2 text-lg">
            <input
              value={inputValues.full_name}
              onChange={handelChange}
              type="text"
              name="full_name"
              className="border border-slate-300 rounded py-1 w-full px-3 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 py-5 items-center">
          <div className="ml-24 rounded-full">
            <label className="font-bold text-large">Email</label>
          </div>
          <div className="ml-5 col-span-2 text-lg">
            <input
              value={inputValues.email}
              onChange={handelChange}
              type="email"
              name="email"
              className="border border-slate-300 rounded py-1 w-full px-3 focus:outline-none"
            />
            {errMessages ? (
              errMessages.email ? (
                <span className="text-red-500">{errMessages.email[0]}</span>
              ) : null
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
    </>
  );
};

export default EditProfileDetails;
