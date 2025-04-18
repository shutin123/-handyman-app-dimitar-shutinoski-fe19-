import React, { useRef } from "react";
import "./OtpInput.css";
interface OtpInputProps {
  otpValues: string[];
  setOtpValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const OtpInput: React.FC<OtpInputProps> = ({ otpValues, setOtpValues }) => {
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <div className="OTP-Code">
      {otpValues.map((value, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type="text"
          className="otp-input"
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          maxLength={1}
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete="off"
        />
      ))}
    </div>
  );
};

export default OtpInput;
