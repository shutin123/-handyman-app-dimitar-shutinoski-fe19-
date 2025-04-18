import React from "react";
import { useNavigate } from "react-router-dom";
import "./Frame13.css";
import Logo from "../../../../assets/icons/Vector (11).svg";
import Menu from "../../../../assets/icons/Vector (12).svg";

const Frame13: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/menu");
  };

  return (
    <div className="frame13">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div
        className="menu"
        onClick={handleMenuClick}
        style={{ cursor: "pointer" }}
      >
        <img src={Menu} alt="menu" />
      </div>
    </div>
  );
};

export default Frame13;
