import React from "react";
import Loading from "./Loading";

function FullScreenLoading() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <Loading />
    </div>
  );
}

export default FullScreenLoading;
