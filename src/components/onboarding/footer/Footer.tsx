import React from "react";
import "./Footer.css";
import ButtonSignUp from "../../../buttons/ButtonSignUp/ButtonSignUp";
import myImage from "../../../assets/svg/Mode=Light.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <ButtonSignUp
        label={"Registration"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      {/* Image */}
      <img src={myImage} alt="Footer Image" className="footer-image" />
    </div>
  );
};

export default Footer;
