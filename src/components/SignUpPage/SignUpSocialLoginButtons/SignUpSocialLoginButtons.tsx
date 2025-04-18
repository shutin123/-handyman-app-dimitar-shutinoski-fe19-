import React from "react";
import SocialLoginButton from "../../../buttons/SocialLoginButton/SocialLoginButton";
import FacebookIcon from "../../../assets/icons/Logo Facebook.svg";
import AppleIcon from "../../../assets/icons/AppleIcon.svg";
import MailIcon from "../../../assets/icons/fluent-color_mail-24.svg";
import "./SignUpSocialLoginButtons.css";
const SignUpSocialLoginButtons: React.FC = () => {
  return (
    <div className="sign-up-social-login-buttons">
      <SocialLoginButton
        label={"Continue with gmail"}
        onClick={() => console.log("Clicked")}
      />
      <SocialLoginButton
        label={"Continue with Facebook"}
        iconSrc={FacebookIcon}
        onClick={() => console.log("Clicked")}
      />
      <SocialLoginButton
        label={"Continue with Apple"}
        iconSrc={AppleIcon}
        onClick={() => console.log("Clicked")}
      />
      <SocialLoginButton
        label={"Continue with Email"}
        iconSrc={MailIcon}
        onClick={() => console.log("Clicked")}
      />
    </div>
  );
};

export default SignUpSocialLoginButtons;
