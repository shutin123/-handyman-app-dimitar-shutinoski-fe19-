import React from "react";
import "./HerroButtons.css";
import SmallButtonGray from "../../../../buttons/SmallButtonGray/SmallButtonGray";
import SmallButtonBlue from "../../../../buttons/SmallButtonBlue/SmallButtonBlue";

const HeroButtons: React.FC = () => {
  return (
    <div className="hero-buttons">
      <SmallButtonGray
        label={"Find jobs"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <SmallButtonBlue
        label={"Register Now"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default HeroButtons;
