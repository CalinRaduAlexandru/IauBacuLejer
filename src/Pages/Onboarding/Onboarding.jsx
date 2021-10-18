import React, { useState } from "react";
import onboarding from "../../Assets/Onboarding.png";
import prezentare1 from "../../Assets/Prezentare1.png";

import SignUp from "../../Components/SignUp/SingUp.jsx";
import { useAuth } from "../../contexts/AuthContext";
import Popup from "../../Components/Popup/Popup.jsx";
import { Redirect } from "react-router-dom";
import "./Onboarding.scss";

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
              <div className="left-side">
                <div className="title">
                  <h2>Începe pregătirea pentru bac</h2>
                  <h4>cu Slothy</h4>
                </div>
                <div className="information-card">
                  <h3>Învață interactiv!</h3>
                  <img src={prezentare1} alt="Un om care merge pe un drum" />
                  <p>
                    Cea mai distractivă cale de a învăța pentru bacalaureat,
                    atât singur cât și cu prietenii!
                  </p>
                </div>

                <button
                  className="btn btn--primary--solid btn--medium limit"
                  onClick={togglePopup}
                >
                  Logheaza-te
                </button>
              </div>
              <div className="right-side">
                <img
                  className="onboarding-img"
                  src={onboarding}
                  alt="mascot"
                  width="40%"
                />
              </div>
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
