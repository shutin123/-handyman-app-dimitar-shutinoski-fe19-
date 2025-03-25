import React from "react";
import "./BigButtonGray.css";

type BigButtonGrayProps = {
  label: string;
  onClick: () => void;
};

const BigButtonGray: React.FC<BigButtonGrayProps> = ({ label, onClick }) => {
  return (
    <button className={`BigButtonGray `} onClick={onClick}>
      {label}
    </button>
  );
};

export default BigButtonGray;
