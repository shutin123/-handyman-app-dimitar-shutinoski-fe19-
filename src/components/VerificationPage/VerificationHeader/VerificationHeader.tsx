import React from "react";
import "./VerificationHeader.css";
const VerificationHeader: React.FC = () => {
  return (
    <div className="verification-container-text">
      <h2>Confirmation Code</h2>
      <span className="label verification">
        Enter the confirmation code that we have sent to your email address.
      </span>
    </div>
  );
};

export default VerificationHeader;
