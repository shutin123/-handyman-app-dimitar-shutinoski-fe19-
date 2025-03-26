import React from "react";
import "./Input.css";
import lockIcon from "../../assets/icons/lock_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import "../../styles/colors.css";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: boolean;
  rightIcon?: boolean;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  leftIcon = false,
  rightIcon = false,
}) => {
  return (
    <div className="input-container">
      {leftIcon && (
        <img src={lockIcon} alt="Left Icon" className="input-icon left" />
      )}
      <input
        type="text"
        className="custom-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {rightIcon && (
        <img src={lockIcon} alt="Right Icon" className="input-icon right" />
      )}
    </div>
  );
};

export default Input;
