import React from "react";
import "./HorizontalCardTwo.css";
import { userData } from "../userData";
import Man from "../../assets/icons/Picture (1).svg";
import Verified from "../../assets/icons/Vector (9).svg";
import Location from "../../assets/icons/Vector (7).svg";
import Available from "../../assets/icons/Chip - Available Now.svg";
import Review from "../../assets/icons/Review.svg";

const HorizontalCardTwo: React.FC = () => {
  const user = userData[2];

  return (
    <div className="HorizontalCardTwo">
      <div className="handymen-info-two">
        <span>
          <img src={Man} alt="man" style={{ width: "38px", height: "38px" }} />
        </span>
        <div className="Frame-427320203-two">
          <div className="name-and-verifiedmark-two">
            <span className="b1 name-horizontal-card-two">{user.name}</span>
            <span className="verified_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24 1-two">
              <img src={Verified} alt="verify" />
            </span>
          </div>
          <div className="location-horizontal-card-two">
            <img src={Location} alt="location-tag" />
            <span className="c1 text-48-two">{user.location}</span>
          </div>
        </div>
        <div className="Frame-427320204-two">
          <span className="Chip-Available Now-two">
            <img src={Available} alt="" />
          </span>
          <span className="review">
            <img src={Review} alt="" />
          </span>
        </div>
      </div>
      <div className="Chip-Services-two">
        {user.services?.map((service, index) => (
          <span key={index} className="label chip-two">
            {service}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCardTwo;
