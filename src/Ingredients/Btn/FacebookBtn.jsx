import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const FacebookBtn = ({ children }) => {
  const { signInWithGoogle } = useAuth();

  return (
    <button
      className="btn btn--primary--solid btn--medium"
      onClick={() =>
        signInWithGoogle()
          .then((user) => console.log(user))
          .catch((e) => console.log(e.message))
      }
    >
      {children}
    </button>
  );
};

export default FacebookBtn;
