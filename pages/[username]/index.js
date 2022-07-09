import React, { useEffect } from "react";
import { useContext } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "../../components/navbar/Navbar";
import ProfileComp from "../../components/profile/ProfileComp";
import withAuth from "../../components/HigherOrderComps/withAuth";
import UserDetailContextProvider from "../../context/UserDetaillContext";
import axiosInstance from "../../axios";

function Profile() {
  console.log("running profile page");
  return (
    <UserDetailContextProvider>
      <Head>
        <title>Socialogram - Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileComp />
    </UserDetailContextProvider>
  );
}

export default withAuth(Profile);
