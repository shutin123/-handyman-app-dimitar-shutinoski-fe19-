import React from "react";
import "./ClientPostingDefault.css";
import Dringed from "../../assets/icons/Frame 1984077851.svg";
import Woman from "../../assets/icons/Ellipse 148.svg";
import Location from "../../assets/icons/Vector (7).svg";
import SmallButtonBlue from "../../buttons/SmallButtonBlue/SmallButtonBlue";
import Down from "../../assets/icons/Frame-down.svg";
import { userData } from "../userData";

const ClientPostingDefault: React.FC = () => {
  const user = userData[0];

  return (
    <div className="ClientPostingDefault">
      <div className="frame-232">
        <div className="frame-228">
          <div className="image">
            <img src={Woman} alt="woman-picture" />
          </div>
          <div className="frame-227">
            <span className="b1 name">{user.name}</span>
            <span className="c2 trust">{user.trust}</span>
          </div>
        </div>
        <div className="frame-851">
          <img src={Dringed} alt="priority-icon" />
        </div>
      </div>
      <div className="frame-0237">
        <div className="frame-233">
          <span className="b1 text">{user.type?.[1]}</span>
          <span className="c2 star">{user.timeAgo}</span>
        </div>
        <div className=" label ClientPostingDefault-description">
          {user.description}
        </div>
        <div className="frame-848">
          <div className="location">
            <img src={Location} alt="location-tag" />
            <span className="label text-48">{user.location}</span>
          </div>
        </div>
        <div className="frame-032">
          <span className="label">{user.mapAddres}</span>
          <span className="c1 text-032">{user.map}</span>
        </div>
      </div>
      <div className="Frame-1984077849">
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
export default ClientPostingDefault;
