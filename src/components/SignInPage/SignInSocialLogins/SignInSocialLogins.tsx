import React from "react";
import "./SignInSocialLogins.css";
import FacebookIcon from "../../../assets/icons/Logo Facebook.svg";
import AppleIcon from "../../../assets/icons/AppleIcon.svg";
import SocialLoginButton from "../../../buttons/SocialLoginButton/SocialLoginButton";
const SignInSocialLogins: React.FC = () => {
  return (
    <div className="sign-in-social-login-buttons">
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
    </div>
  );
};
export default SignInSocialLogins;
