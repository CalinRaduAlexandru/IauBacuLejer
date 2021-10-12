import React from "react";
import "../Styles/Components/Modal/Modal.css";

export const Modal = ({header, img}) => {
  return (
    <div className="modal">
      <div className="modal-header-container">
        <div className="modal-header-text">{header}</div>
         {img? <img src={img} alt="progres" /> : null }
      </div>
      <div className="modal-content">
        <h3 className='romana'>Română</h3>
        <h3 className='istorie'>Istorie</h3>
        <h3 className='geografie'>Geografie</h3>
        
      </div>
    </div>
  );
}

