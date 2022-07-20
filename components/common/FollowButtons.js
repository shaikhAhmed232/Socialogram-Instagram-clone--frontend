import React from "react";
import {
  makeFollowRequest,
  makeUnFollowRequest,
} from "../../handlers/handlers";

const FollowButtons = ({
  data,
  user,
  authUserFollowing,
  authUserMutate,
  authUserIsValidating,
}) => {
  if (!authUserFollowing) return <div>Loading...</div>;
  return (
    <>
      {data.username === user.username ? null : authUserFollowing.some(
          ({ following_user_id }) => following_user_id === user.id
        ) ? (
        <button
          className="bg-slate-300 text-slate-700 mr-1 py-2 rounded-md font-bold"
          onClick={() =>
            makeUnFollowRequest(user, authUserFollowing, authUserMutate)
          }
        >
          Unfollow
        </button>
      ) : (
        <button
          className="bg-blue-600 text-white mr-1 py-2 rounded-md font-bold"
          onClick={() =>
            makeFollowRequest(user, authUserFollowing, authUserMutate)
          }
        >
          follow
        </button>
      )}
    </>
  );
};

export default FollowButtons;
