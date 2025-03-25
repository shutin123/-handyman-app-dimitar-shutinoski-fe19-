import React from "react";
import "./SocialLoginButton.css";
import googleIcon from "../../assets/icons/Logo Google.svg";

type SocialLoginButtonProps = {
  label: string;
  onClick: () => void;
  iconSrc?: string;
};

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  label,
  onClick,
  iconSrc = googleIcon,
}) => {
  return (
    <button className="SocialLoginButton" onClick={onClick}>
      <img src={iconSrc} alt="social icon" className="social-icon" />
      {label}
    </button>
  );
};

export default SocialLoginButton;
