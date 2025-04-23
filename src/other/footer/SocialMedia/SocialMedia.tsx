import React from "react";
import "./SocialMedia.css";

import Facebook from "../../../assets/icons/Facebook.svg";
import Twitter from "../../../assets/icons/Twitter.svg";
import Instagram from "../../../assets/icons/Instagram.svg";
import Linkedin from "../../../assets/icons/LinkedIn.svg";

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-media-icon"
      >
        <img src={Facebook} alt="facebook-icon" />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-media-icon"
      >
        <img src={Twitter} alt="twitter-icon" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-media-icon"
      >
        <img src={Instagram} alt="instagram-icon" />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-media-icon"
      >
        <img src={Linkedin} alt="linkedin-icon" />
      </a>
    </div>
  );
};

export default SocialMedia;
