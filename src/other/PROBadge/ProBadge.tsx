import React from "react";
import "./ProBadge.css";
import Star from "../../assets/icons/Vector (8).svg";

type ProBadgeProps = {
  size?: "default" | "big";
};

const ProBadge: React.FC<ProBadgeProps> = ({ size = "default" }) => {
  return (
    <div className={`pro-badge ${size}`}>
      <img src={Star} alt="Pro Star" className="pro-star-icon" />
    </div>
  );
};

export default ProBadge;
