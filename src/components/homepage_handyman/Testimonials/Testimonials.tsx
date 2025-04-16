import React from "react";
import "./Testimonials.css";
import Stars from "../../../assets/svg/Stars.svg";
import { features as testimonialsData } from "./testmonialsData";

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials">
      <div className="Frame1984077822">
        <h1>Real experiences, real success</h1>
        <span className="subheading">
          Find out how craftsmen get more orders with our app, increase your
          income and expand your business.
        </span>
      </div>

      <div className="Frame1984077882">
        {testimonialsData.map((testimonial, index) => (
          <div className="Frame1984077878" key={testimonial.name + index}>
            <div className="Frame1984077820">
              <div className="avatar-name">
                <div className="icon-strategy">
                  <img src={testimonial.icon} alt={testimonial.name} />
                </div>
                <div className="avatar-name-name">
                  <span className="b1">{testimonial.name}</span>
                  <span className="label avatar-name-location">
                    {testimonial.location}
                  </span>
                </div>
              </div>
              <div className="stars">
                <img src={testimonial.stars || Stars} alt="stars" />
              </div>
              <div className="testimonial-description">
                <span className="b3">{testimonial.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
