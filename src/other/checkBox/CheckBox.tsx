import React, { useState } from "react";
import "./CheckBox.css";
import CheckIcon from "../../assets/icons/Icon.svg";

type CheckBoxProps = {
  checked?: boolean;
  onChange?: () => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    setIsChecked(!isChecked);
    if (onChange) onChange();
  };

  return (
    <div
      className={`checkbox ${isChecked ? "checked" : ""}`}
      onClick={handleClick}
    >
      {isChecked && <img src={CheckIcon} alt="Check" className="check-icon" />}
    </div>
  );
};

export default CheckBox;
