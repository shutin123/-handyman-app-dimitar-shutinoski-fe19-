import React from "react";
import BackIcon from "../../../assets/icons/arrow_back_ios_new_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg";
import { useNavigate } from "react-router-dom";
import "./ResetPasswordHeader.css";

const ResetPasswordHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleGoRegister = () => {
    navigate("/menu/signup/as-craftsmen/register");
  };

  return (
    <div className="reset-password-header">
      <span className="back-icon" onClick={handleGoRegister}>
        {" "}
        <img src={BackIcon} alt="back-icon" />
      </span>
      <span className="reset-password-header-header">
        <h2>Reset password</h2>
      </span>
      <span className="label">
        Enter your email address, we will send you a confirmation code by email
        .
      </span>
    </div>
  );
};
export default ResetPasswordHeader;
