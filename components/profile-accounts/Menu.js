import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const menuList = [
  { name: "Edit profile", pathname: "/accounts/edit-profile" },
  { name: "Change password", pathname: "/accounts/password/change" },
  { name: "Email notifications", pathname: "/accounts/email-notifications" },
  { name: "Push notifications", pathname: "/accounts/push-notifications" },
  { name: "Manage Contacts", pathname: "/accounts/manage-contacts" },
  { name: "Privacy Security", pathname: "/accounts/privacy-security" },
];

const active = {
  borderLeft: "4px solid black",
};

const Menu = () => {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname);
  return (
    <>
      <div className="border-r-2 border-slate-200">
        {menuList.map((menuItem, index) => (
          <div className="py-5" key={index}>
            <Link href={`${menuItem.pathname}`}>
              <a
                className="border-l-4 border-transparent py-5 px-6 text-lg font-bold text-slate-400 hover:border-slate-300"
                style={menuItem.pathname === pathname ? active : null}
              >
                {menuItem.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
