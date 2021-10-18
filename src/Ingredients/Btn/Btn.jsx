import React from "react";
import { useAuth } from "../../contexts/AuthContext";

import "./Btn.scss";

const STYLES = ["btn--primary--solid", "btn--secondary--ghost"];

const SIZES = ["btn--medium", "btn--large"];

const Btn = ({
  children,
  type,
  onClick,
  signUpWithGoogle,
  buttonStyle,
  buttonSize,
}) => {
  const { signInWithGoogle, register } = useAuth();
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
      {children}
    </button>
  );
};

export default Btn;
