import React from "react";
import "./GooglePay.css";
import googleIcon from "../../assets/icons/Logo Google.svg";
import arrowIcon from "../../assets/icons/Ellipse 150.svg"; // Replace with your actual icon

type GooglePayProps = {
  label: string;
  onClick: () => void;
};

const GooglePay: React.FC<GooglePayProps> = ({ label, onClick }) => {
  return (
    <button className="GooglePayButton" onClick={onClick}>
      <div className="left">
        <img src={googleIcon} alt="Google Icon" className="google-icon" />
        <span className="button-label">{label}</span>
      </div>
      <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
    </button>
  );
};

export default GooglePay;
