import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { AiFillHome } from "react-icons/fa";

const active = {
  borderColor: "white",
  color: "#E8EDF3",
};

function Navbar() {
  const router = useRouter();
  const path = router.pathname;

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
          <Link href="#">
            <a
              className="font-bold text-lg py-2 px-5 border-b-2 border-transparent hover:border-current hover:text-slate-200 "
              style={path === "#" ? active : null}
            >
              Post
            </a>
          </Link>
          <Link href="/profile">
            <a
              className="font-bold text-lg py-2 px-5 border-b-2 border-transparent hover:border-current hover:text-slate-200 "
              style={path === "/profile" ? active : null}
            >
              Profile
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
