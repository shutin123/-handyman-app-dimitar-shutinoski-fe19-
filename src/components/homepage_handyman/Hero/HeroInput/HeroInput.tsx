import React, { useState } from "react";
import "./HeroInput.css";
import Search from "../../../../assets/icons/search_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg";
import Tune from "../../../../assets/icons/tune_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import Input from "../../../../inputFields/Input/Input";

const HeroInput: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="hero-input">
      <Input
        placeholder="Search"
        leftIcon={Search}
        rightIcon={Tune}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default HeroInput;
