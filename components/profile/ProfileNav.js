import React, { useContext } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { authContext } from "../../context/AuthContext";

const active = {
  color: "black",
  borderColor: "black",
};

function ProfileNav() {
  const { data } = useContext(authContext);
  const path = useRouter().pathname;

  return (
    <div className="border-t-2 border-inherit flex justify-center">
      <div
        className="px-6 py-4 text-slate-400 text-sm border-t-2 border-transparent border-solid hover:border-current hover:text-black cursor-pointer"
        style={path === `/[username]` ? active : null}
      >
        <Link
          href={{ pathname: "/[username]", query: { username: data.username } }}
        >
          <a>POST</a>
        </Link>
      </div>
      <div
        className="px-6 py-4 text-slate-400 text-sm border-t-2 border-transparent border-solid hover:border-current hover:text-black cursor-pointer"
        style={path === `/[username]/saved` ? active : null}
      >
        <Link
          href={{
            pathname: "/[username]/saved",
            query: { username: data.username },
          }}
        >
          <a>SAVED</a>
        </Link>
      </div>
      <div
        className="px-6 py-4 text-slate-400 text-sm border-t-2 border-transparent border-solid hover:border-current hover:text-black cursor-pointer"
        style={path === `/[username]/tagged` ? active : null}
      >
        <Link
          href={{
            pathname: "/[username]/tagged",
            query: { username: data.username },
          }}
        >
          <a>TAGGED</a>
        </Link>
      </div>
    </div>
  );
}

export default ProfileNav;
