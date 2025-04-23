import React from "react";
import "./BestRevenueHandymen.css";
import Image from "../../../../../assets/svg/Low-Fi Placeholder.svg";
import { userData } from "../../../../../cards/userData";
import Location from "../../../../../assets/icons/Vector (7).svg";

interface BestRevenueHandymenProps {
  userId?: number;
}

const BestRevenueHandymen: React.FC<BestRevenueHandymenProps> = ({
  userId = 4,
}) => {
  const user = userData[userId] || userData[0];

  return (
    <div className="BestRevenueHandymen">
      <div
        className="Frame1171275027"
        style={{
          backgroundColor:
            userId === 4 ? "var(--blue-500)" : `rgba(245, 206, 71, 1)`,
        }}
      >
        <span className="c2 ">€ {user.income} ADDITIONAL INCOME </span>
      </div>
      <div className="Low-FiPlaceholder">
        <img src={Image} alt="" />
      </div>
      <div className="Frame1984077824">
        <div className="b1 Frame1984077826">{user.name}</div>
        <div className="Chip-Services">
          {user.services?.map((service, index) => (
            <span key={index} className="c1 chip">
              {service}
            </span>
          ))}
        </div>
        <div className="Frame1984077825">
          <span className="Frame1984077825-location-icon">
            <img src={Location} alt="location-icon" />
          </span>
          <span className="button"> {user.location}</span>
        </div>
      </div>
    </div>
  );
};

export default BestRevenueHandymen;
