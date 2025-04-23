import React from "react";
import "./PageIndicator.css";
interface PageIndicatorProps {
  total: number;
  activeIndex: number;
  onClick: (index: number) => void;
}

const PageIndicator: React.FC<PageIndicatorProps> = ({
  total,
  activeIndex,
  onClick,
}) => {
  return (
    <div className="dots">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`dot ${activeIndex === index ? "active" : ""}`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default PageIndicator;
