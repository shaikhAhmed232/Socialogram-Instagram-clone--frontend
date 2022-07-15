import React, { useState, useContext } from "react";

import { userListContext } from "../../../context/UserListContext";
import { userDetailContext } from "../../../context/UserDetaillContext";

export default function FollowComp({ title }) {
  return (
    <div className="bg-white rounded">
      <div className="flex items-center py-4">
        <p>{title}</p>
        <div>x</div>
      </div>
      <div>{title} List</div>
    </div>
  );
}
