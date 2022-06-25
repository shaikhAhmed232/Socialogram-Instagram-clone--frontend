import React from "react";

import Posts from "./Posts";
import Stories from "./Stories";
import Sidebar from "./Sidebar";

function HomeComp() {
  return (
    <div className="max-w-5xl md:mx-auto md:grid grid-cols-3 py-3">
      <div className="col-span-2">
        <Stories />
        <Posts />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default HomeComp;
