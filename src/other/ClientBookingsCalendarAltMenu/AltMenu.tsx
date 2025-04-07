import React from "react";
import "./AltMenu.css";

import HorizontalDots from "../../assets/icons/ClientBookingsCalendar.svg";
import VerticalDots from "../../assets/icons/VectorDots.svg";

type AltMenuProps = {
  orientation?: "horizontal" | "vertical";
};

const AltMenu: React.FC<AltMenuProps> = ({ orientation = "horizontal" }) => {
  const icon = orientation === "horizontal" ? HorizontalDots : VerticalDots;

  return (
    <div className="alt-menu">
      <button className="menu-btn">
        <img src={icon} alt="Menu icon" width={24} height={24} />
      </button>
    </div>
  );
};

export default AltMenu;
