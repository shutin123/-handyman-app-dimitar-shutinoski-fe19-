import React from "react";
import Logo from "../../../assets/icons/logo.svg";
import "./ProfileAllSetBody.css";
import { useNavigate } from "react-router-dom";
const ProfileAllSetBody: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div className="profile-all-set-body">
      <div className="profile-all-set-body-img" onClick={handleGoHome}>
        <img src={Logo} alt="" />
      </div>
      <div className="profile-all-set-body-text">
        <h1>Welcome to Fix Das</h1>
        <span className="label profile-all-set-body-text-description ">
          Let’s set up your profile! Choose your expertise so clients can find
          you easily.
        </span>
      </div>
    </div>
  );
};

export default ProfileAllSetBody;
