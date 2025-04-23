import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuPageHeader.css";
import Logo from "../../../assets/icons/Vector (11).svg";
import Close from "../../../assets/icons/Close.svg";

const MenuPageHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="menu-page-header">
      <span className="menu-page-header-logo" onClick={handleGoHome}>
        <img src={Logo} alt="logo" />
      </span>
      <span className="menu-page-header-close" onClick={handleGoHome}>
        <img src={Close} alt="close" />
      </span>
    </div>
  );
};

export default MenuPageHeader;
