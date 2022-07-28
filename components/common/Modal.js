import React from "react";

function Modal({ children, isOpen, onClose }) {
  const closeModal = () => {
    onClose();
  };
  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0`}
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        display: isOpen ? "block" : "none",
      }}
    >
      <div
        className="text-white absolute right-6 top-6 cursor-pointer"
        onClick={closeModal}
      >
        Close
      </div>
      {children}
    </div>
  );
}

export default Modal;
