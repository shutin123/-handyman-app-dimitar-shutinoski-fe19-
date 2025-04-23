import React from "react";
import Draw from "../../../assets/icons/Vector (13).svg";
import "./ValueProposition.css";
import Checked from "../../../assets/icons/Check Circle.svg";

const ValueProposition: React.FC = () => {
  return (
    <div className="value-proposition">
      <div className="value-proposition-header">
        <h1>Why people like us </h1>
      </div>
      <div className="value-proposition-vector">
        {" "}
        <img src={Draw} alt="draw" />
      </div>
      <div className="value-proposition-listitems">
        <div className="value-proposition-listitem">
          <span className="checked">
            <img src={Checked} alt="checked" />
          </span>
          <span className="b3 value-proposition-item-text">
            No hidden costs: only a transparent monthly fee .
          </span>
        </div>
        <div className="value-proposition-listitem">
          <span className="checked">
            {" "}
            <img src={Checked} alt="checked" />
          </span>
          <span className="b3 value-proposition-item-text">
            Targeted orders: Find jobs that fit your skills .
          </span>
        </div>
        <div className="value-proposition-listitem">
          <span className="checked">
            <img src={Checked} alt="checked" />
          </span>
          <span className="b3 value-proposition-item-text">
            Immediate bookings: Communicate directly with customers in chat .
          </span>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
