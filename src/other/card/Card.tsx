import React from "react";
import "./Card.css";
import Location from "../../assets/icons/location_on_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="Frame-336">
        <span className="location">
          <img src={Location} alt="" />
        </span>
        <div className="Frame-335">
          <span className="b1 address">Address</span>
          <span className="b4 frame3">
            Musterstraße 123, 10115 Berlin,Deutschland
          </span>
        </div>
      </div>
    </div>
  );
};
export default Card;
