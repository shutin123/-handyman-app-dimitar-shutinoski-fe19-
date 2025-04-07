import React from "react";
import { userData } from "../userData";
import "../HorizontalCard/HorizontalCard.css";
import "./HorizontalCardThree.css";
import Man from "../../assets/icons/Picture (1).svg";
import Verified from "../../assets/icons/Vector (9).svg";
import Location from "../../assets/icons/Vector (7).svg";
import Available from "../../assets/icons/Chip - Available Now.svg";
import Review from "../../assets/icons/Review.svg";
import SmallButtonBlue from "../../buttons/SmallButtonBlue/SmallButtonBlue";

const HorizontalCardThree: React.FC = () => {
  const user = userData[2];

  return (
    <div className="horizontal-card-three">
      <div className="handymen-info">
        <span>
          <img src={Man} alt="man" />
        </span>
        <div className="Frame-427320203">
          <div className="name-and-verifiedmark">
            <span className="title name-horizontal-card">{user.name}</span>
            <span className="verified_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24 1">
              <img src={Verified} alt="verify" />
            </span>
          </div>
          <div className="location-horizontal-card">
            <img src={Location} alt="location-tag" />
            <span className="c4 text-48">{user.location}</span>
          </div>
        </div>
        <div className="Frame-427320204">
          <span className="Chip-Available Now">
            <img src={Available} alt="" />
          </span>
        </div>
      </div>
      <div className="Frame-1984077819">
        <span className="review">
          <img src={Review} alt="review" />
        </span>
        <span className="c2 reviews">{user.reviews}</span>
      </div>
      <div className="Chip-Services">
        {user.services?.map((service, index) => (
          <span key={index} className="label chip">
            {service}
          </span>
        ))}
      </div>

      <div className="CTA-Buttons" style={{ width: "294px", height: "32px" }}>
        <span className="c1 cta-text ">Profil anzeigen</span>
        <span className="cta-button">
          <SmallButtonBlue
            label="Kontaktieren"
            onClick={() => alert("Clicked!")}
            size="default"
            style={{
              width: "107px",
              height: "32px",
              borderRadius: "8px",
              padding: "8px 16px",
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default HorizontalCardThree;
