import Head from "next/head";

import ChangePassComp from "../../../components/profile-accounts/password/change-pass/ChangePassComp";
import withAuth from "../../../components/HigherOrderComps/withAuth";

function PasswordChange() {
  return (
    <>
      <Head>
        <title>Socialogram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChangePassComp />
    </>
  );
}

export default withAuth(PasswordChange);