import React from "react";
import "./SmallButtonBlue.css";
import "../../styles/typography.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
  size?: "default" | "smaller";
};

const SmallButtonBlue: React.FC<ButtonProps> = ({
  label,
  onClick,

  size = "default",
}) => {
  return (
    <button className={`SmallButtonBlue ${size}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default SmallButtonBlue;
