import React from "react";
import "./ButtonSignUp.css";

type ButtonSignUpProps = {
  label: string;
  onClick: () => void;
};

const ButtonSignUp: React.FC<ButtonSignUpProps> = ({ label, onClick }) => {
  return (
    <button className={`ButtonSignUp  `} onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonSignUp;
