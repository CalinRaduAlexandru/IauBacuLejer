import React from "react";
import ReactDom from "react-dom";
import "./Popup.scss";

const Popup = ({ togglePopup, popup, children }) => {
  if (!popup) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={togglePopup}></div>
      <div className="popup">
        <span className="exit" onClick={togglePopup}>
          &#x2718;
        </span>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Popup;
