import React from "react";

import Link from "next/link";

function AlreadyAccountComp({ string, url, page }) {
  return (
    <div className="max-w-lg mx-auto mt-5 h-20 flex justify-center items-center bg-white shadow shadow-slate-400">
      <span>
        {string}?{" "}
        <Link href={url}>
          <a className="text-indigo-600">{page}</a>
        </Link>
      </span>
    </div>
  );
}

export default AlreadyAccountComp;
