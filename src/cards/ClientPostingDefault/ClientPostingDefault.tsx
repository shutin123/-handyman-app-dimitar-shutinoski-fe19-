import React from "react";
import "./ClientPostingDefault.css";
import Dringed from "../../assets/icons/Frame 1984077851.svg";
import Woman from "../../assets/icons/Ellipse 148.svg";
import Location from "../../assets/icons/Vector (7).svg";
import SmallButtonBlue from "../../buttons/SmallButtonBlue/SmallButtonBlue";
import Down from "../../assets/icons/Frame-down.svg";

const ClientPostingDefault: React.FC = () => {
  return (
    <div className="ClientPostingDefault">
      <div className="frame-232">
        <div className="frame-228">
          <div className="image">
            <img src={Woman} alt="woman-picture" />
          </div>
          <div className="frame-227">
            <span className="b1 name">Anna Müller</span>
            <span className="c2 trust">Vertrauenswürdig</span>
          </div>
        </div>
        <div className="frame-851">
          <img src={Dringed} alt="priority-icon" />
        </div>
      </div>
      <div className="frame-0237">
        <div className="frame-233">
          <span className="b1 text">Ein undichtes Rohr reparieren</span>
          <span className="c2 star">Vor 3 Tagen</span>
        </div>
        <div className="label">
          Lokalisieren Sie die Quelle des Lecks, stellen Sie die
          Wasserversorgung ab...
        </div>
        <div className="frame-848">
          <div className="location">
            <img src={Location} alt="location-tag" />
            <span className="label text-48">Berlin, Deutschland</span>
          </div>
        </div>
        <div className="frame-032">
          <span className="b4 frame032">Adresse</span>
          <span className="c1 text-032">Auf der Karte anzeigen</span>
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
