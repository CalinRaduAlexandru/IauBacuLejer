import React from "react";
import { Redirect } from "react-router-dom";
import { Modal } from "../../Components/Modal/Modal";
import "./Homepage.scss";
import Slothy from "../../Assets/Slothy.svg";
import progres from "../../Assets/Icons/Modalbar-Progres.svg";
import { useAuth } from "../../contexts/AuthContext";

function Homepage() {
  const { currentUser } = useAuth();
  return (
    <>
      {!currentUser ? (
        <Redirect to="/login" />
      ) : (
        <>
          <div className="homepage">
            <Modal clear={false} header="Progres" img={progres} />

            <div className="slothy">
              <img src={Slothy} alt="Slothy mascot" height="550px" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Homepage;
