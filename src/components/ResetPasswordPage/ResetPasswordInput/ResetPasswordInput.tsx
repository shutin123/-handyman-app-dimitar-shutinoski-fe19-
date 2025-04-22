import React, { useState, useEffect } from "react";
import Mail from "../../../assets/icons/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import Input from "../../../inputFields/Input/Input";
import "./ResetPasswordInput.css";
interface SignInInputsProps {
  onDataChange: (data: { email: string }) => void;
}

const ResetPasswordInput: React.FC<SignInInputsProps> = ({ onDataChange }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    return onDataChange({
      email,
    });
  }, [email, onDataChange]);

  return (
    <div className="sign-in-inputs">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        leftIcon={Mail}
      />
    </div>
  );
};

export default ResetPasswordInput;
