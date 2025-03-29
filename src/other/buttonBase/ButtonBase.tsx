import React, { useState } from "react";
import "./ButtonBase.css";

interface ButtonBaseProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const ButtonBase: React.FC<ButtonBaseProps> = ({ onClick, children }) => {
  const [variant, setVariant] = useState("default");

  const handleClick = () => {
    setVariant((prevVariant) =>
      prevVariant === "default" ? "variant2" : "default"
    );
    if (onClick) onClick();
  };

  const handleDragStart = () => {
    setVariant("variant2");
  };
  return (
    <button
      className={`button-base ${variant}`}
      onClick={handleClick}
      draggable
      onDragStart={handleDragStart}
    >
      <div className="circle"></div>
      {children}
    </button>
  );
};

export default ButtonBase;
