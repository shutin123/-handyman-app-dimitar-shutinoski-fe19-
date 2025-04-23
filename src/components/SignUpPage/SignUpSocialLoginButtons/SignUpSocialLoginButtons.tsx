import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase-config";

import SocialLoginButton from "../../../buttons/SocialLoginButton/SocialLoginButton";
import FacebookIcon from "../../../assets/icons/Logo Facebook.svg";
import AppleIcon from "../../../assets/icons/AppleIcon.svg";
import MailIcon from "../../../assets/icons/fluent-color_mail-24.svg";

import "./SignUpSocialLoginButtons.css";

const SignUpSocialLoginButtons: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google sign-in successful:", user);
      navigate("/menu/signup/as-craftsmen/all-set");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="sign-up-social-login-buttons">
      <SocialLoginButton
        label={"Continue with Gmail"}
        onClick={handleGoogleLogin}
      />
      <SocialLoginButton
        label={"Continue with Facebook"}
        iconSrc={FacebookIcon}
        onClick={() => console.log("Facebook login coming soon")}
      />
      <SocialLoginButton
        label={"Continue with Apple"}
        iconSrc={AppleIcon}
        onClick={() => console.log("Apple login coming soon")}
      />
      <SocialLoginButton
        label={"Continue with Email"}
        iconSrc={MailIcon}
        onClick={() => console.log("Email login coming soon")}
      />
    </div>
  );
};

export default SignUpSocialLoginButtons;
