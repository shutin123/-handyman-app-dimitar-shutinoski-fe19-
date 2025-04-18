import React from "react";
import "./Input.css";
import "../../styles/colors.css";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  onRightIconClick?: () => void;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  type = "text",
  leftIcon,
  rightIcon,
  onRightIconClick,
}) => {
  return (
    <div className="input-container">
      <span className="Frame11">
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
          type={type}
          className="custom-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </span>

      {rightIcon && (
        <span
          className="input-icon right"
          onClick={onRightIconClick}
          tabIndex={0}
          role="button"
        >
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
