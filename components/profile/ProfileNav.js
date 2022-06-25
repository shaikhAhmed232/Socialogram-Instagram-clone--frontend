import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const active = {
  color: "black",
  borderColor: "black",
};

function ProfileNav() {
  const path = useRouter().pathname;

  return (
    <div className="border-t-2 border-inherit flex justify-center">
      <div
        className="px-6 py-4 text-slate-400 text-sm border-t-2 border-transparent border-solid hover:border-current hover:text-black cursor-pointer"
        style={path === "/profile" ? active : null}
      >
        <Link href="/profile">
          <a>POST</a>
        </Link>
      </div>
      <div
        className="px-6 py-4 text-slate-400 text-sm border-t-2 border-transparent border-solid hover:border-current hover:text-black cursor-pointer"
        style={path === "/profile/saved" ? active : null}
      >
        <Link href="/profile/saved">
          <a>SAVED</a>
        </Link>
      </div>
      <div
        className="px-6 py-4 text-slate-400 text-sm border-t-2 border-transparent border-solid hover:border-current hover:text-black cursor-pointer"
        style={path === "/profile/tagged" ? active : null}
      >
        <Link href="/profile/tagged">
          <a>TAGGED</a>
        </Link>
      </div>
    </div>
  );
}

export default ProfileNav;
