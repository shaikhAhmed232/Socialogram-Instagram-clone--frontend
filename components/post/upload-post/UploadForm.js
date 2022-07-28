import React, { useRef, useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { authContext } from "../../../context/AuthContext";
import { submitUploadForm } from "../../../handlers/handlers";

function UploadForm() {
  const { data } = useContext(authContext);
  const router = useRouter();
  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState();
  const [caption, setCaption] = useState("");
  const imgInputRef = useRef();

  useEffect(() => {
    if (!img) {
      setPreview(undefined);
      return;
    }
    const url = URL.createObjectURL(img);
    setPreview(url);
  }, [img]);

  const clickImgInput = (e) => {
    e.preventDefault();
    imgInputRef.current.click();
  };

  const handelToUploadImageChange = (e) => {
    console.log(e.target.files);
    setImg(e.target.files[0]);
  };

  const handelToUploadCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    submitUploadForm(img, caption, data, router);
  };

  return (
    <div className="max-w-lg mx-auto py-5 flex flex-col items-center">
      {preview ? (
        <div className="w-52 h-52 relative">
          <Image
            src={preview}
            alt="user's selected img"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : null}
      <form className="w-full mt-6" onSubmit={handleUpload}>
        <button
          onClick={clickImgInput}
          className="bg-sky-500 text-white py-4 px-6 rounded font-lg font-bold hover:shadow-lg"
        >
          Select an image
        </button>
        <input
          type="file"
          name="img"
          ref={imgInputRef}
          onChange={handelToUploadImageChange}
          style={{ display: "none" }}
        />
        <div className="my-4">
          {img ? `selected ${img.name}` : "No image chosen."}
        </div>
        <textarea
          type="text"
          className="w-full py-4 px-6 text-xl bg-slate-50 border-b-4 border-b-slate-300"
          placeholder="Caption this?"
          name="caption"
          value={caption}
          onChange={handelToUploadCaptionChange}
        />
        <div className="flex justify-center">
          <input
            type="submit"
            value="Post"
            className="bg-blue-500 text-white text-xl py-2 px-12 tracking-widest font-bold mt-6 rounded hover:shadow-blue-500/50 hover:shadow-lg cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
