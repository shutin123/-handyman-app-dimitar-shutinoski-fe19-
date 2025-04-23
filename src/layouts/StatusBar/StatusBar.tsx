import React from "react";
import "./StatusBar.css";
import statusImage from "../../assets/icons/Status Bar.png";

const StatusBar: React.FC = () => {
  return (
    <div className="status-bar">
      <img src={statusImage} alt="Status Bar" loading="lazy" />
    </div>
  );
};

export default StatusBar;
