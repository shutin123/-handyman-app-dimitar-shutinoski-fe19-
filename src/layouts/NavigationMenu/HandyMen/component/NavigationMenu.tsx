import { useState } from "react";
import { icons } from "../data/menuData";
import { MenuItem } from "../types/menuTypes";
import "./NavigationMenu.css";
import "../../../../styles/colors.css";
import "../../../../styles/typography.css";

const NavigationMenu: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <div className="navigation-menu">
      {icons.map((icon: MenuItem) => (
        <button
          key={icon.id}
          onClick={() => setActiveId(icon.id)}
          className={`menu-button ${activeId === icon.id ? "active" : ""}`}
        >
          {activeId === icon.id && <div className="active-line" />}
          <img src={icon.src} alt={icon.name} className="menu-icon" />
          {activeId === icon.id && (
            <span className="icon-name">{icon.name}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default NavigationMenu;
