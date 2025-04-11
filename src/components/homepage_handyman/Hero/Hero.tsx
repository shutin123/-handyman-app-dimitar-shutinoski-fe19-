import React from "react";
import Frame13 from "./Frame13/Frame13";
import "./Hero.css";
import ToggleContainer from "./ToggleContainer/ToggleContainer";
import Group from "./Group/Group";
import HeroButtons from "./HeroButtons/HeroButtons";

import HeroInput from "./HeroInput/HeroInput";
const Hero: React.FC = () => {
  return (
    <div className="hero">
      <Frame13 />
      <ToggleContainer />
      <div className="text-hero-container">
        <span className="header-title">More orders. More sales</span>
        <span className="subheading subheading-hero-text">
          Show your skills and win new customers .
        </span>
      </div>
      <Group />
      <HeroButtons />
      <HeroInput />
    </div>
  );
};

export default Hero;
