import React from "react";
import "./Footer.css";
import ButtonSignUp from "../../../buttons/ButtonSignUp/ButtonSignUp";
import FooterImage from "../../../layouts/FooterImage/FooterImage";

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
      <FooterImage />
    </div>
  );
};

export default Footer;
