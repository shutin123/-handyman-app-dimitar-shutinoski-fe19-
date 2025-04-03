import React from "react";
import "./Frame.css";
import Woman from "../../assets/icons/Ellipse 148.svg";
import Location from "../../assets/icons/Vector (7).svg";
import Dringed from "../../assets/icons/Frame 1984077851.svg";
import Down from "../../assets/icons/Frame-down.svg";

const Frame: React.FC = () => {
  return (
    <div className="frame-35">
      <div className="frame-34">
        <div className="frame-33">
          <div className="frame-66">
            <div className="image">
              <img src={Woman} alt="woman-picture" />
            </div>
            <div className="frame-27">
              <span className="b1 name">Anna Müller</span>
              <span className="c2 trust">Vertrauenswürdig</span>
            </div>
            <div className="frame-48">
              <div className="img-container">
                <img src={Location} alt="location-tag" />
              </div>
              <span className="c2 text-48">Berlin, Deutschland</span>
            </div>
            <span className="c1 text-auf">Auf der Karte anzeigen</span>
          </div>
        </div>
        <div className="frame-37">
          <div className="frame-237">
            <span className="b1 text">Fix a leaking pipe</span>
            <div className="frame-851">
              <img src={Dringed} alt="priority-icon" />
            </div>
            <span className="c2 star">Vor 3 Tagen</span>
          </div>

          <span className="label">
            Lokalisieren Sie die Quelle des Lecks, stellen Sie die
            Wasserversorgung Lokalisieren Sie die Quelle des...
          </span>
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
