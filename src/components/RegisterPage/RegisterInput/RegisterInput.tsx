import React, { useState } from "react";
import "./RegisterInput.css";
import Person from "../../../assets/icons/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1)-1.svg";
import Mail from "../../../assets/icons/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import Lock from "../../../assets/icons/lock_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import Phone from "../../../assets/icons/Phone.svg";
import EyeIcon from "../../../assets/icons/Microphone.svg";

import Input from "../../../inputFields/Input/Input";

const RegisterInput: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="register-inputs">
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        leftIcon={Person}
      />
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
      <Input
        placeholder="Confirm Password"
        type={showConfirmPassword ? "text" : "password"}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        leftIcon={Lock}
        rightIcon={EyeIcon}
        onRightIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
      />
      <Input
        placeholder="Telephone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        leftIcon={Phone}
      />
    </div>
  );
};

export default RegisterInput;
