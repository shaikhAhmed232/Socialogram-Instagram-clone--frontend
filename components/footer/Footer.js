import React from "react";

import Link from "next/link";

const links = ["Help", "Api", "About", "top accounts", "job", "contact"];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="w-full my-6 fixed bottom-0">
      <div className="w-full flex justify-center">
        {links.map((link, i) => {
          return (
            <Link key={i} href="#">
              <a className="mx-5">{link}</a>
            </Link>
          );
        })}
      </div>
      <div className="w-full text-center">{`© ${year} Socialogram`}</div>
    </div>
  );
}

export default Footer;
