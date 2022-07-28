import axiosInstance from "../axios";
import axios from "axios";

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

export const submitUploadForm = async (img, caption, user, router) => {
  const data = new FormData();
  data.append("img", img);
  data.append("caption", caption);
  data.append("owner", user.id);
  const res = await axios.post(
    "http://127.0.0.1:8000/api/posts/upload/",
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  if (res.status === 201) {
    router.push({
      pathname: "/[username]",
      query: { username: user.username },
    });
  } else {
    res.catch((err) => console.log(err));
  }
};
