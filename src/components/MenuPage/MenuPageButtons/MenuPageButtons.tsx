import React, { useState } from "react";
import "./MenuPageButtons.css";
import Input from "../../../inputFields/Input/Input";
import DownArrow from "../../../assets/icons/Down Arrow.svg";
import ButtonSignUp from "../../../buttons/ButtonSignUp/ButtonSignUp";

const MenuPageButtons: React.FC = () => {
  const [Seek, setSeek] = useState("");
  return (
    <div className="MenuPageButtons">
      <span className="MenuPageButtonsSeek">
        <Input
          placeholder="Seek"
          value={Seek}
          onChange={(e) => setSeek(e.target.value)}
        />
      </span>
      <span className="MenuPageButtonsCategory">
        <Input
          placeholder="Search"
          rightIcon={DownArrow}
          value={Seek}
          onChange={(e) => setSeek(e.target.value)}
        />
      </span>
      <span className="MenuPageButtonsButton">
        <ButtonSignUp
          label={"Seek"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </span>
    </div>
  );
};

export default MenuPageButtons;
