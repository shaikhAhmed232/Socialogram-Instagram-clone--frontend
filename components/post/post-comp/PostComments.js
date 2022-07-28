import React, { useState } from "react";
import Image from "next/image";

function PostComments({ owner, comments }) {
  const [comment, setComment] = useState("");
  const handelCommentChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-slate-400 flex justify-between px-3 pt-2">
        <div className="flex">
          <div className="relative h-10 w-10 rounded-full">
            <Image
              src={`http://127.0.0.1:8000${owner.profile_pic}`}
              alt={owner.username}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <p className="ml-2">{owner.username}</p>
        </div>
        <div className="text-xl font-bolder">menu</div>
      </div>
      <div className="border-b border-slate-400 grow">postcomments</div>
      <div className="border-b border-slate-400">likes and details</div>
      <div className="flex">
        <div className="grow">
          <input
            type="text"
            placeholder="Add comment here."
            className="w-full bg-slate-100 py-2 px-6 text-xl focus:outline-none"
            value={comment}
            onChange={handelCommentChange}
          />
        </div>
        <div>
          <button
            disabled={comment === ""}
            className={`${
              comment === "" ? "text-sky-200" : "text-sky-600"
            } px-2 py-2 text-lg font-bold`}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostComments;
