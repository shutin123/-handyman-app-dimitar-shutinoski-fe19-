import React from "react";
import Man from "../../assets/svg/Picture.svg";
import "./MessageComponent.css";

const MessageComponent: React.FC = () => {
  return (
    <div className="layout">
      <div className="picture">
        <img src={Man} alt="man picture" />
      </div>
      <div className="frame-15">
        <div className="frame-13">
          <div className="text-name">
            <p className="b1">Lukas Schreiber</p>
          </div>
          <div className="text-minutes">
            <p className="b2">12m</p>
          </div>
        </div>
        <div className="text">
          <p className="b4 subtext">Wir bieten schnelle Reparaturen an.</p>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
