import React from "react";
import "./SmallBtn.css";
import "../../styles/colors.css";
import VectorDot from "../../assets/VectorDot.svg";
type ButtonProps = {
  label: string;
  onClick: () => void;
  size?: "default" | "alt";
  variant?: "default" | "dots";
};

const SmallBtn: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = "default",
  variant = "default",
}) => {
  return (
    <button className={`SmallBtn ${size} ${variant}`} onClick={onClick}>
      {variant === "dots" ? <img src={VectorDot} alt="More options" /> : label}
    </button>
  );
};

export default SmallBtn;
