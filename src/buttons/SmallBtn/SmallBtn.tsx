import React from "react";
import "./SmallBtn.css";
import "../../styles/colors.css";
type ButtonProps = {
  label: string;
  onClick: () => void;
  size?: " default" | "alt";
};

const SmallBtn: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = " default",
}) => {
  return (
    <button className={`SmallBtn ${size}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default SmallBtn;
