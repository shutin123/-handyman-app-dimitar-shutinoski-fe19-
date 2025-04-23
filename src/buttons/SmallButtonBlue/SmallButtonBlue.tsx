import React from "react";
import "./SmallButtonBlue.css";
import "../../styles/typography.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
  size?: "default" | "smaller";
  style?: React.CSSProperties;
};

const SmallButtonBlue: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = "default",
  style,
}) => {
  return (
    <button
      className={`SmallButtonBlue ${size}`}
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
};

export default SmallButtonBlue;
