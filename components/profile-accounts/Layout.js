import React from "react";

import Menu from "./Menu";

function Layout({ children }) {
  return (
    <div className="bg-white md:mx-auto max-w-5xl mt-10 grid grid-cols-3 border-2 border-slate-200">
      <Menu />
      {children}
    </div>
  );
}

export default Layout;
