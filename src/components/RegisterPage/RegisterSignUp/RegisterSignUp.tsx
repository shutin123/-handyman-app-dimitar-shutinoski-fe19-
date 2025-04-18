import React from "react";
import ButtonSignUp from "../../../buttons/ButtonSignUp/ButtonSignUp";
import { useNavigate } from "react-router-dom";
const RegisterSignUp: React.FC = () => {
  const navigate = useNavigate();
  const handleGoRegister = () => {
    navigate("/menu/signup/as-craftsmen/register/verfication");
  };

  return (
    <div className="sign-up-sing-up-button">
      <ButtonSignUp label={"Register"} onClick={handleGoRegister} />
    </div>
  );
};
export default RegisterSignUp;
