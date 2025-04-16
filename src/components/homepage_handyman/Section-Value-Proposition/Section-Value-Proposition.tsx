import React from "react";
import "./SectionValueProposition.css";
import AvatarOne from "../../../assets/svg/avatar.svg";
import AvatarTwo from "../../../assets/svg/avatar (1).svg";
import AvatarThree from "../../../assets/svg/avatar (2).svg";
import AvatarFour from "../../../assets/svg/avatar (3).svg";
import AvatarFive from "../../../assets/svg/avatar (4).svg";
import ButtonSignUp from "../../../buttons/ButtonSignUp/ButtonSignUp";
const SectionValueProposition: React.FC = () => {
  return (
    <div className="SectionValueProposition">
      <div className="SectionValuePropositionHeader">
        <h1>
          More customers. <br /> . More orders. <br />. More sales .
        </h1>
      </div>
      <div className="SectionValuePropositionAvatars">
        <span className="avatar">
          <img src={AvatarOne} alt="avatar" />
        </span>
        <span className="avatar">
          <img src={AvatarTwo} alt="avatar" />
        </span>
        <span className="avatar">
          <img src={AvatarThree} alt="avatar" />
        </span>
        <span className="avatar">
          <img src={AvatarFour} alt="avatar" />
        </span>
        <span className="avatar">
          <img src={AvatarFive} alt="avatar" />
        </span>
      </div>
      <div className="SectionValuePropositionDescription">
        <span className="b3">
          Use the opportunity to make your services known, to receive more
          orders and to work flexibly. Register now and start directly!
        </span>
      </div>
      <div className="SectionValuePropositionButton">
        <ButtonSignUp
          label={"Register now"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
};
export default SectionValueProposition;
