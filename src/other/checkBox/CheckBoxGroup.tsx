import React, { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import "./CheckBoxGroup.css";

type CheckBoxGroupProps = {
  count: number;
};

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({ count }) => {
  const [checkboxes, setCheckboxes] = useState<boolean[]>([]);

  useEffect(() => {
    setCheckboxes(new Array(count).fill(false));
  }, [count]);

  const toggleCheckbox = (index: number) => {
    setCheckboxes((prev) =>
      prev.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  return (
    <div className="checkbox-container">
      {checkboxes.map((checked, index) => (
        <CheckBox
          key={index}
          checked={checked}
          onChange={() => toggleCheckbox(index)}
        />
      ))}
    </div>
  );
};

export default CheckBoxGroup;
