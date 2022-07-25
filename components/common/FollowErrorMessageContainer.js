import React, { useContext } from "react";

import { followErrorMessagesContext } from "../../context/commonContexts/FollowErrorMessages";

function FollowErrorMessageContainer() {
  const { followErrorMessage } = useContext(followErrorMessage);

  if (followErrorMessage.status === 200) {
    return null;
  }
  return (
    <div
      className="px-4 py-2 bg-red-500"
      style={{ backgroundColor: "rgba(239, 68, 68, 0.6)" }}
    >
      {followErrorMessage.msg}
    </div>
  );
}

export default FollowErrorMessageContainer;
