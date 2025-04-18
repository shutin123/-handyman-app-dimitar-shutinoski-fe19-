import React from "react";
import "./MenuPageBody.css";
import { useNavigate } from "react-router-dom";
const MenuPageBody: React.FC = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate("/menu/signup/as-craftsmen");
  };

  return (
    <div className="MenuPageBody">
      <span className=" MenuPageBodyOption">
        <h1>Search</h1>
      </span>
      <span className=" MenuPageBodyOption">
        <h1>Advise</h1>
      </span>
      <span className=" MenuPageBodyOption" onClick={handleRegisterClick}>
        <h1>Register</h1>
      </span>
    </div>
  );
};

export default MenuPageBody;
