// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50 justify-center items-center">
      <div className="bg-white bg-opacity-80 p-5 relative rounded">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 text-gray-700 bg-white rounded-full w-8 h-8  shadow-lg font-semibold font-inter"
        >
          x
        </button>
        <div className="w-fit h-fit">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
