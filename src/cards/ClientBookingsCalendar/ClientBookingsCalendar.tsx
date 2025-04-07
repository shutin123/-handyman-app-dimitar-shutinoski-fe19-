import React from "react";
import "./ClientBookingsCalendar.css";
import Woman from "../../assets/icons/Ellipse 148.svg";
import Location from "../../assets/icons/Vector (7).svg";
import AltMenu from "../../other/ClientBookingsCalendarAltMenu/AltMenu";
import { userData } from "../userData";

const ClientBookingsCalendar: React.FC = () => {
  const user = userData[0];

  return (
    <div className="ClientBookingsCalendar">
      <div className="image">
        <img src={Woman} alt="woman" />
      </div>
      <div className="Frame-427320227">
        <span className="b1 text-name">{user.name}</span>
        <span className="c2 text-time">{user.time}</span>
      </div>
      <div className="Frame-1984077931">
        <div className="Frame-1984077848">
          <div className="img-container">
            <img src={Location} alt="location-tag" />
          </div>
          <span className="c2 text-48">{user.location}</span>
        </div>
        <div className="location">
          <span className="c1 text-032">{user.map}</span>
        </div>
      </div>
      <div className="button">
        <AltMenu orientation="vertical" />
      </div>
    </div>
  );
};

export default ClientBookingsCalendar;
