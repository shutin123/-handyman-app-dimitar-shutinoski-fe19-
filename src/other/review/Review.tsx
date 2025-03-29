import React from "react";
import Star from "./Vector (1).svg";
import "./Review.css";
const Review: React.FC = () => {
  return (
    <div className="review-container">
      <div className="star">
        <img src={Star} alt="Star" />
      </div>
      <div className="review">
        <b>4.8</b>
      </div>
    </div>
  );
};

export default Review;
