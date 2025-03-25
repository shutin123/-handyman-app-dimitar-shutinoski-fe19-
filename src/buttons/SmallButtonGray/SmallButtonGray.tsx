import React from "react";
import "./SmallButtonGray.css";
import "../../styles/typography.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
  size?: "default" | "smaller";
};

const SmallButtonGray: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = "default",
}) => {
  return (
    <button className={`SmallButtonGray ${size}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default SmallButtonGray;
