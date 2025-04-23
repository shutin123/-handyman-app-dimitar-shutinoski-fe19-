import React from "react";
import "./SignUp.css";
import StatusBar from "../../layouts/StatusBar/StatusBar";
import Logo from "../../assets/icons/logo.svg";
import Frame427320064 from "./Frame427320064/Frame427320064";
import SignUpSocialLoginButtons from "./SignUpSocialLoginButtons/SignUpSocialLoginButtons";
import Frame427320066 from "./Frame427320066/Frame427320066";
import { useNavigate } from "react-router-dom";
import FooterImage from "../../layouts/FooterImage/FooterImage";
import SignUpButtonSignUpPage from "./SignUpButtonSignUpPage/SignUpButtonSignUpPage";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="sign-up">
        <div className="sign-up-status-bar">
          <StatusBar />
        </div>
        <div className="sign-up-logo">
          <img src={Logo} alt="logo" onClick={handleGoHome} />
        </div>
        <Frame427320064 />
        <SignUpSocialLoginButtons />
        <div className="sign-up-sing-up-button">
          <SignUpButtonSignUpPage />
        </div>
        <Frame427320066 />
        <div className="sign-up-page-footer-image" onClick={handleGoHome}>
          <FooterImage />
        </div>
      </div>
    </>
  );
};

export default SignUp;
