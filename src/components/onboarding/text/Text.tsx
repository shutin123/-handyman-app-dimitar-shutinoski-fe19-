import React from "react";
import "./Text.css";
interface TextProps {
  heading: string;
  paragraph: string;
}

const Text: React.FC<TextProps> = ({ heading, paragraph }) => {
  return (
    <div className="text-container">
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default Text;
