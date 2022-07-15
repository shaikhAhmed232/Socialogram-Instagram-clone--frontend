import React from "react";

function FollowModal({ show, onClose, children }) {
  const handelModalClose = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      {show ? (
        <div
          className="absolute inset-x-0 inset-y-0 flex justify-center items-center"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          {children}
        </div>
      ) : null}
    </>
  );
}

export default FollowModal;