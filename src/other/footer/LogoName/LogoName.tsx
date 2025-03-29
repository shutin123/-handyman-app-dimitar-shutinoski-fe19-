import React from "react";
import Logo from "../../../assets/icons/logo.svg";
import "./LogoName.css";

const LogoName: React.FC = () => {
  return (
    <div className="logo-name">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="name">
        {" "}
        <p className="b1">Mein Handwerker </p>
      </div>
    </div>
  );
};

export default LogoName;
