import React, { useEffect, useState } from "react";
import ResetPasswordHeader from "./ResetPasswordHeader/ResetPasswordHeader";
import StatusBar from "../../layouts/StatusBar/StatusBar";
import ResetPasswordInput from "./ResetPasswordInput/ResetPasswordInput";
import "./ResetPassword.css";
import BigButton from "../../buttons/BigButton/BigButton";
import FooterImage from "../../layouts/FooterImage/FooterImage";
import { useNavigate } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (formData.email) {
      console.log("Email changed:", formData.email);
    }
  }, [formData.email]);

  return (
    <div className="reset-password-page">
      <div className="sign-up-status-bar">
        <StatusBar />
      </div>
      <div className="element-resetet-password">
        <div className="top">
          <div className="reset-password-header">
            <ResetPasswordHeader />
          </div>
          <div className="reset-password-input">
            <ResetPasswordInput onDataChange={setFormData} />
          </div>
        </div>
        <div className="bottom">
          <div className="sign-in-button">
            <BigButton
              label={"Register"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      </div>
      <div className="reset-password-page-footer-image" onClick={handleGoHome}>
        <FooterImage />
      </div>
    </div>
  );
};

export default ResetPassword;
