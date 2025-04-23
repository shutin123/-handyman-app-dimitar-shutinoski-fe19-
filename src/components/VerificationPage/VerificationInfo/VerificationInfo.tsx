import React from "react";
import "./VerificationInfo.css";
interface VerificationInfoProps {
  error: string | null;
}

const VerificationInfo: React.FC<VerificationInfoProps> = ({ error }) => {
  return (
    <>
      {error && <div className="verification-error">{error}</div>}
      <div className="verification-info">
        <p>
          <strong>Development mode:</strong> Always use code "1234"
        </p>
      </div>
    </>
  );
};

export default VerificationInfo;
