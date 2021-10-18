import React from "react";
import "./Modal.scss";

export const Modal = ({ header, img, clear = "true", children }) => {
  return (
    <>
      {clear ? (
        <div className="modal">{children}</div>
      ) : (
        <div className="modal">
          <div className="modal-header-container">
            <div className="modal-header-text">{header}</div>
            {img ? <img src={img} alt="progres" /> : null}
          </div>
          <div className="modal-content">
            <h3 className="romana">Română</h3>
            <h3 className="istorie">Istorie</h3>
            <h3 className="geografie">Geografie</h3>
          </div>
        </div>
      )}
    </>
  );
};
