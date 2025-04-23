import React from "react";
import "./Image.css";
interface ImageProps {
  src: string;
}

const Image: React.FC<ImageProps> = ({ src }) => {
  return <img className="img" src={src} loading="lazy" alt="Onboarding" />;
};

export default Image;
