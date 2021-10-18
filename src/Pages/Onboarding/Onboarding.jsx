import React, { useState } from "react";

import SignUp from "../../Components/SignUp/SingUp.jsx";
import { useAuth } from "../../contexts/AuthContext";
import { FaGoogle } from "react-icons/fa";
import Btn from "../../Ingredients/Btn/Btn.jsx";
import { Redirect } from "react-router-dom";

const Onboarding = () => {
  const [modal, setModal] = useState(false);
  const { signInWithGoogle, register } = useAuth();
  const { currentUser } = useAuth();

  const toggleModal = (e) => {
    e.preventDefault();
    setModal(!modal);
  };
  return (
    <>
      {currentUser ? (
        <Redirect to="/" />
      ) : (
        <>
          {!modal ? (
            <div>
              <div className="onboarding-container">
                <button
                  className="btn btn--primary--solid btn--medium"
                  onClick={toggleModal}
                >
                  Logheaza-te
                </button>
              </div>
            </div>
          ) : (
            <>
              <SignUp toggleModal={toggleModal} />
            </>
          )}{" "}
        </>
      )}
    </>
  );
};

export default Onboarding;
