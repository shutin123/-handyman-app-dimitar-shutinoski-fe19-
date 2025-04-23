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
      <div className="button-inner">
        <img src={iconSrc} alt="social icon" className="social-icon" />
        <span className="b3">{label}</span>
      </div>
    </button>
  );
};

export default SocialLoginButton;
