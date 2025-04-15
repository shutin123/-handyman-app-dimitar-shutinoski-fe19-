import React from "react";
import "./FeaturesSection.css";
import Phone from "../../../assets/svg/Content.svg";
import { features } from "./featuresData";

const FeaturesSection: React.FC = () => {
  return (
    <div className="features-section">
      <div className="content-heading">
        <h1>Instant messaging for effortless booking</h1>
      </div>
      <div className="content-image">
        <img src={Phone} alt="phone-chat" />
      </div>
      <div className="container-features-section">
        <div className="container-features-section-content">
          {features.map((feature, index) => (
            <div className="_feature-text" key={index}>
              <div className="_feature-text-checkmark">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <div className="_feature-text-text-and-supporting-text">
                <span
                  className="
                subheading _feature-text-text"
                >
                  {feature.title}
                </span>
                <span className="b2 _feature-text-supporting-text">
                  {feature.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
