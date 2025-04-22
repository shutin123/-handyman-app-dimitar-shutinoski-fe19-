import React, { useState, useEffect } from "react";
import Mail from "../../../assets/icons/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import Lock from "../../../assets/icons/lock_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import EyeIcon from "../../../assets/icons/Microphone.svg";
import Input from "../../../inputFields/Input/Input";
import "./SignInInputs.css";
interface SignInInputsProps {
  onDataChange: (data: { email: string; password: string }) => void;
}

const SignInInputs: React.FC<SignInInputsProps> = ({ onDataChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    onDataChange({ email, password });
  }, [email, password, onDataChange]);

  return (
    <div className="sign-in-inputs">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        leftIcon={Mail}
      />
      <Input
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        leftIcon={Lock}
        rightIcon={EyeIcon}
        onRightIconClick={() => setShowPassword(!showPassword)}
      />
    </div>
  );
};

export default SignInInputs;
