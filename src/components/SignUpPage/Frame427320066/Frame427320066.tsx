import React from "react";
import "./Frame427320066.css";
import { useNavigate } from "react-router-dom";

const Frame427320066: React.FC = () => {
  const navigate = useNavigate();
  const handleGoSignIn = () => {
    navigate("/menu/signup/as-craftsmen/signin");
  };
  return (
    <div className="Frame427320066">
      <span className="b4 Frame427320066-asking-text">Already an account?</span>
      <span
        className="b4 Frame427320066-option-register"
        onClick={handleGoSignIn}
      >
        Register
      </span>
    </div>
  );
};
export default Frame427320066;
