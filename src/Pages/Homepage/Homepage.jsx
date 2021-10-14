import React from "react";
import {Modal} from "../../Components/Modal/Modal";
import "./Homepage.scss";
import Slothy from "../../Assets/Slothy.svg";
import progres from '../../Assets/Icons/Modalbar-Progres.svg'


function Homepage() {
  return (
    <div className="homepage">
      <Modal header='Progres'img={progres}/>
      <div className="slothy">
        <img src={Slothy} alt="Slothy mascot" height='550px'/>
      </div>
    </div>
  );
}

export default Homepage;
