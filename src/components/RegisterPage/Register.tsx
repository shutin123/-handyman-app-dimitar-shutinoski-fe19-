import React, { useState } from "react";
import StatusBar from "../../layouts/StatusBar/StatusBar";
import Frame427320064 from "../SignUpPage/Frame427320064/Frame427320064";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
import "./Register.css";
import RegisterInput from "./RegisterInput/RegisterInput";
import FooterImage from "../../layouts/FooterImage/FooterImage";
import Frame427320066 from "../SignUpPage/Frame427320066/Frame427320066";
import RegisterSignUp from "./RegisterSignUp/RegisterSignUp";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    telephone: "",
  });

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="register">
      <div className="register-status-bar">
        <StatusBar />
      </div>
      <div className="register-logo">
        <img src={Logo} alt="logo" onClick={handleGoHome} />
      </div>
      <Frame427320064 />
      <RegisterInput onDataChange={setFormData} />
      <RegisterSignUp formData={formData} />
      <Frame427320066 />
      <div className="sign-up-page-footer-image" onClick={handleGoHome}>
        <FooterImage />
      </div>
    </div>
  );
};

export default Register;
