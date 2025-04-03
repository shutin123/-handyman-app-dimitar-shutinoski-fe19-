import React from "react";
import "./ProLabel.css";
import ProBadge from "../PROBadge/ProBadge";

const ProLabel: React.FC = () => {
  return (
    <div className="pro-label">
      <ProBadge size="default" />
      <span className="c1 pro-text">PRO feature</span>
    </div>
  );
};

export default ProLabel;
