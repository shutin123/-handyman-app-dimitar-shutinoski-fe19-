import React from "react";
import "./BigButton.css";
import "../../styles/typography.css";
import "../../styles/colors.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  colorVariant?: "default" | "secondary"; // Only "secondary" has a different background
};

const BigButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  colorVariant = "default",
}) => {
  return (
    <button
      className={`button BigButton ${colorVariant} ${
        disabled ? "disabled" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default BigButton;
