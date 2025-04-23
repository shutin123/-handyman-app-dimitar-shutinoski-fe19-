import React from "react";
import "./ToggleContainer.css";
import ButtonBase from "../../../../other/buttonBase/ButtonBase";
const ToggleContainer: React.FC = () => {
  return (
    <div className="toggle-container">
      <span className="b2 for-artisans"> For artisans</span>
      <ButtonBase children={undefined} />
      <span className="b2 for-customers">For customers</span>
    </div>
  );
};

export default ToggleContainer;
