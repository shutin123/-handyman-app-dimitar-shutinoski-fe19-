import React from "react";
import "./Testimonialbase.css";
import Man from "../../assets/icons/Low-Fi Avatar.svg";
import Stars from "../../assets/icons/Frame 427320205.svg";
import { userData } from "../userData";

const TestimonialBase: React.FC = () => {
  const user = userData[3];

  return (
    <div className="clientfeedback-card">
      <div className="vertical-container">
        <div className="vertical-container inner-element">
          <span className="avatar">
            {" "}
            <img src={Man} alt="" />
          </span>
          <span className="c1 name-vertical-container-clientfeedback">
            {user.name}
          </span>
        </div>
        <div className=" b4 clientfeedback-location">{user.location}</div>
      </div>
      <div className="testimonial-base">
        <div className="Frame-427320205">
          <img src={Stars} alt="stars" />
        </div>
      </div>
      <div className="b4 clientfeedback-card-description">
        {user.description}
      </div>
    </div>
  );
};

export default TestimonialBase;
