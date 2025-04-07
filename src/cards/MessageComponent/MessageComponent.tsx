import React from "react";
import Man from "../../assets/svg/Picture.svg";
import "./MessageComponent.css";
import { userData } from "../userData";
const MessageComponent: React.FC = () => {
  const user = userData[1];

  return (
    <div className="layout">
      <div className="picture">
        <img src={Man} alt="man" />
      </div>
      <div className="frame-15">
        <div className="frame-13">
          <div className="text-name">
            <p className="b1">{user.name}</p>
          </div>
          <div className="text-minutes">
            <p className="b2">{user.timeAgo}</p>
          </div>
        </div>
        <div className="text">
          <p className="b4 subtext">{user.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
