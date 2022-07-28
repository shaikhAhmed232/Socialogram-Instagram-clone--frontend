import React, { useContext, useState } from "react";
import { useSWRConfig } from "swr";

import Link from "next/link";
import { useRouter } from "next/router";

import { AiFillHome } from "react-icons/fa";

import { authContext } from "../../context/AuthContext";
import axiosInstance from "../../axios";

const active = {
  borderColor: "white",
  color: "#E8EDF3",
};

function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  const { data, setShouldFetch } = useContext(authContext);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { cache } = useSWRConfig();

  const handelLogout = () => {
    axiosInstance
      .post("token/blacklist/", {
        refresh: localStorage.getItem("refresh_token"),
      })
      .then((res) => {
        if (res.status === 200) {
          // removing auth tokens from localStorage
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          // telling swr in auth context to stop fetching data
          setShouldFetch(false);
          // clearing previous logged in user's cached data
          cache.clear();
          router.push("/login");
        }
      });
  };

  return (
    <div className="w-full bg-indigo-500">
      <div className="max-w-5xl flex mx-auto text-white py-3">
        <div className="flex items-center grow justify-between">
          <div className="">
            <Link href="/">
              <a className="sm:text-4xl font-title">Socialogram</a>
            </Link>
          </div>
          <div className="w-1/3">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-1 rounded focus:outline-none px-4 text-black"
            />
          </div>
        </div>
        <div className="flex items-center pl-6 ">
          <Link href="/">
            <a
              className="font-bold text-lg py-2 px-5 border-b-2 border-transparent hover:border-current hover:text-slate-200"
              style={path === "/" ? active : null}
            >
              Home
            </a>
          </Link>
          <Link href="/upload">
            <a
              className="font-bold text-lg py-2 px-5 border-b-2 border-transparent hover:border-current hover:text-slate-200 "
              style={path === "/upload" ? active : null}
            >
              Post
            </a>
          </Link>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setShowProfileMenu((prevState) => !prevState)}
              >
                Profile
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
            <div
              onClick={() => setShowProfileMenu(false)}
              className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                !showProfileMenu ? "hidden" : "block"
              }  z-10`}
              role="menu"
              aria-orientation="vertical"
            >
              <div className="py-1" role="none">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <Link href={`/${data.username}`}>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm text-center"
                    role="menuitem"
                  >
                    <div>{data.username}</div>
                  </a>
                </Link>
                <button
                  className="text-gray-700 block px-4 py-2 text-sm w-full cursor-pointer"
                  onClick={handelLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
