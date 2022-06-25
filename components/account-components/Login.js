import React from "react";

import AlreadyAccountComp from "./AlreadyAccountComp";
// import Footer from "../footer/Footer";

function LoginComp() {
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
          <form className="w-full">
            <input
              name="username"
              type="text"
              className="w-full py-2 px-5 rounded-sm my-2 border-2 border-inherit focus:outline-none"
              placeholder="Email or Mobile Number or Username"
            />
            <input
              name="password"
              type="text"
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
        url="signup"
      />
      {/* <Footer /> */}
    </div>
  );
}

export default LoginComp;
