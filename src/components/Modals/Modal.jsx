import React from "react";
import { MdClear } from "react-icons/md";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="mdclearicondiv" onClick={onClose}>
          <MdClear className="mdclearicon" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
