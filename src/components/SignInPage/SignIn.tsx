import React, { useState } from "react";
import FooterImage from "../../layouts/FooterImage/FooterImage";
import StatusBar from "../../layouts/StatusBar/StatusBar";
import { useNavigate } from "react-router-dom";
import SignInHeader from "./SignInHeader/SignInHeader";
import "./SignIn.css";
import SignInInputs from "./SignInInputs/SignInInputs";
import BigButton from "../../buttons/BigButton/BigButton";
import SignInSocialLogins from "./SignInSocialLogins/SignInSocialLogins";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const [, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoResetPassword = () => {
    navigate("/menu/signup/as-craftsmen/reset-password");
  };

  return (
    <div className="sign-in-page">
      <div className="sign-up-status-bar">
        <StatusBar />
      </div>
      <div className="sign-in-header">
        <SignInHeader />
      </div>
      <div className="sign-in-inputs">
        <SignInInputs onDataChange={setFormData} />
        <div className="button Frame427320065" onClick={handleGoResetPassword}>
          Forgot password?
        </div>
      </div>
      <div className="sign-in-button">
        <BigButton
          label={"Register"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <div className="b2 sign-in-border">Or</div>
      <div className="sign-in-social-login">
        {" "}
        <SignInSocialLogins />
      </div>
      <div className="sign-in-page-footer-image" onClick={handleGoHome}>
        <FooterImage />
      </div>
    </div>
  );
};

export default SignIn;
