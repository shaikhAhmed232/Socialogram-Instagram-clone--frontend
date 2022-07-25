import React, { createContext, useState } from "react";

export const followErrorMessagesContext = createContext();

const FollowErrorMessagesProvider = ({ children }) => {
  const [followErrorMessage, setFollowErrorMessage] = useState({
    status: 200,
    msg: "",
  });
  return (
    <followErrorMessagesContext
      value={{ followErrorMessage, setFollowErrorMessage }}
    >
      {children}
    </followErrorMessagesContext>
  );
};

export default FollowErrorMessagesProvider;
