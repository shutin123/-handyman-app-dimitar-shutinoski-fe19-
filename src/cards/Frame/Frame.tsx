import React from "react";
import "./Frame.css";
import Woman from "../../assets/icons/Ellipse 148.svg";
import Location from "../../assets/icons/Vector (7).svg";
import Dringed from "../../assets/icons/Frame 1984077851.svg";
import Down from "../../assets/icons/Frame-down.svg";
import { userData } from "../userData";

const Frame: React.FC = () => {
  const user = userData[0];

  return (
    <div className="frame-35">
      <div className="frame-34">
        <div className="frame-33">
          <div className="frame-66">
            <div className="image">
              <img src={Woman} alt="woman-picture" />
            </div>
            <div className="frame-27">
              <span className="b1 name">{user.name}</span>
              <span className="c2 trust">{user.trust}</span>
            </div>
            <div className="frame-48">
              <div className="img-container">
                <img src={Location} alt="location-tag" />
              </div>
              <span className="c2 text-48">{user.location}</span>
            </div>
            <span className="c1 text-auf">{user.map}</span>
          </div>
        </div>
        <div className="frame-37">
          <div className="frame-237">
            <span className="b1 text-type">{user.type?.[0]}</span>
            <div className="frame-851">
              <span className="c2 star">{user.timeAgo}</span>
            </div>
            <img src={Dringed} alt="priority-icon" />
          </div>

          <span className="label">{user.description}</span>
        </div>
      </div>
      <div>
        <img
          src={Down}
          alt="frame-down
        "
        />
      </div>
    </div>
  );
};

export default Frame;
