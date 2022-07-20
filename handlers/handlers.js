import axiosInstance from "../axios";

export const makeFollowRequest = async (
  user,
  authUserFollowing,
  authUserMutate
) => {
  const res = await axiosInstance.post("follow-req/", {
    following: { id: user.id },
  });
  const newFollowingList = { ...authUserFollowing, user };
  authUserMutate(newFollowingList);
  return {
    status: res.status,
    msg: res.data.msg,
  };
};

export const makeUnFollowRequest = async (
  user,
  authUserFollowingList,
  authUserMutate
) => {
  const res = await axiosInstance.delete("follow-req/", {
    data: { un_following: { id: user.id } },
  });
  const newFollowingList = authUserFollowingList.filter(
    (followingUser) => followingUser.id !== user.id
  );
  authUserMutate(newFollowingList);
  return {
    status: res.status,
    msg: res.data.msg,
  };
};
