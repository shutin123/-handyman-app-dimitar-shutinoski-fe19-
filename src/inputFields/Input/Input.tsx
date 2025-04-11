import React from "react";
import "./Input.css";
import "../../styles/colors.css";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  leftIcon,
  rightIcon,
}) => {
  return (
    <div className="input-container">
      {leftIcon && (
        <span className="input-icon left">
          {typeof leftIcon === "string" ? (
            <img src={leftIcon} alt="Left Icon" />
          ) : (
            leftIcon
          )}
        </span>
      )}
      <input
        type="text"
        className="custom-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {rightIcon && (
        <span className="input-icon right">
          {typeof rightIcon === "string" ? (
            <img src={rightIcon} alt="Right Icon" />
          ) : (
            rightIcon
          )}
        </span>
      )}
    </div>
  );
};

export default Input;
