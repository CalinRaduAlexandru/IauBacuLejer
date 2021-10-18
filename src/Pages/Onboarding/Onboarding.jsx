import React, { useState } from "react";

import SignUp from "../../Components/SignUp/SingUp.jsx";
import { useAuth } from "../../contexts/AuthContext";
import Popup from "../../Components/Popup/Popup.jsx";
import { Redirect } from "react-router-dom";

const Onboarding = () => {
  const [popup, setPopup] = useState(false);
  const { currentUser } = useAuth();

  const togglePopup = (e) => {
    e.preventDefault();
    setPopup(!popup);
  };
  return (
    <>
      {currentUser ? (
        <Redirect to="/" />
      ) : (
        <>
          <div>
            <div className="onboarding-container">
              <button
                className="btn btn--primary--solid btn--medium"
                onClick={togglePopup}
              >
                Logheaza-te
              </button>
            </div>
          </div>

          <Popup popup={popup} togglePopup={togglePopup}>
            <SignUp />
          </Popup>
        </>
      )}
    </>
  );
};

export default Onboarding;
