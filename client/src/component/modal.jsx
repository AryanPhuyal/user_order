import React from "react";
import "./modal.css";
const modal = ({ onClose, children }) => {
  return (
    <div className={"custom-modal " + "row"}>
      <div className="col-sm col-md-6 col-lg-4 model-container">
        <div className="col d-flex justify-content-end py-3">
          <div className="modal-close px-1" onClick={onClose}>
            x
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default modal;
