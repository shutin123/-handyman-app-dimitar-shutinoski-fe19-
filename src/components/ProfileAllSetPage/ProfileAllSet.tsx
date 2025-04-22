import React from "react";
import StatusBar from "../../layouts/StatusBar/StatusBar";
import ProfileAllSetBody from "./ProfileAllSetBody/ProfileAllSetBody";
import BigButton from "../../buttons/BigButton/BigButton";
import "./ProfileAllSet.css";
import FooterImage from "../../layouts/FooterImage/FooterImage";
import { useNavigate } from "react-router-dom";

const ProfileAllSet: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="profile-all-set">
      <div className="profile-all-set-status-bar">
        <StatusBar />
      </div>
      <div className="profile-all-set-body">
        <ProfileAllSetBody />
      </div>
      <div className="profile-all-set-button">
        <BigButton
          label={"Waiter"}
          onClick={() => console.log("button clicked")}
        />
      </div>
      <div className="profile-all-set-footer-image" onClick={handleGoHome}>
        <FooterImage />
      </div>
    </div>
  );
};
export default ProfileAllSet;
