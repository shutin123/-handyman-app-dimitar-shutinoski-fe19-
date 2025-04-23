import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StatusBar from "../../layouts/StatusBar/StatusBar";
import FooterImage from "../../layouts/FooterImage/FooterImage";
import ButtonSignUp from "../../buttons/ButtonSignUp/ButtonSignUp";
import OtpInput from "./OtpInput/OtpInput";
import VerificationHeader from "./VerificationHeader/VerificationHeader";
import VerificationInfo from "./VerificationInfo/VerificationInfo";
import "./VerificationPage.css";

const VerificationPageComponent: React.FC = () => {
  const navigate = useNavigate();
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleGoHome = () => {
    navigate("/");
  };

  const STATIC_CODE = "1234";

  const handleVerify = () => {
    setLoading(true);
    setError(null);

    const enteredCode = otpValues.join("");

    setTimeout(() => {
      if (enteredCode === STATIC_CODE) {
        console.log("Verification successful!");

        const phoneNumber = sessionStorage.getItem("userPhoneNumber");
        console.log("Verified phone number:", phoneNumber);

        sessionStorage.removeItem("userPhoneNumber");

        navigate("/menu/signup/as-craftsmen/all-set");
      } else {
        setError("Invalid verification code. Please try again.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="verification-page">
      <div className="verification-status-bar">
        <StatusBar />
      </div>

      <div className="verification-container">
        <VerificationHeader />
        <OtpInput otpValues={otpValues} setOtpValues={setOtpValues} />
        <ButtonSignUp
          label={loading ? "Verifying..." : "Further"}
          onClick={handleVerify}
        />
        <VerificationInfo error={error} />
      </div>

      <div className="verification-page-footer-image" onClick={handleGoHome}>
        <FooterImage />
      </div>
    </div>
  );
};

export default VerificationPageComponent;
