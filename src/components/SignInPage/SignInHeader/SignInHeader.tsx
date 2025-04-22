import React from "react";
import BackIcon from "../../../assets/icons/arrow_back_ios_new_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg";
import { useNavigate } from "react-router-dom";
import "./SignInHeader.css";
const SignInHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleGoRegister = () => {
    navigate("/menu/signup/as-craftsmen/register");
  };

  return (
    <div className="sign-in-header">
      <span className="back-icon" onClick={handleGoRegister}>
        {" "}
        <img src={BackIcon} alt="back-icon" />
      </span>
      <span className="sign-in-header-header">
        <h2>Welcome back</h2>
      </span>
      <span className="label">Register with your account</span>
    </div>
  );
};
export default SignInHeader;
