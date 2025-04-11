import React from "react";
import "./Group.css";

import WorkerOne from "./images/Rectangle 3463268.svg";
import WorkerTwo from "./images/Rectangle 3463269.svg";
import WorkerThree from "./images/Rectangle 3463267.svg";

const workers = [
  { src: WorkerOne, alt: "Worker One", align: "right" },
  { src: WorkerTwo, alt: "Worker Two", align: "left" },
  { src: WorkerThree, alt: "Worker Three", align: "right" },
];

const Group: React.FC = () => {
  return (
    <div className="group">
      {workers.map((worker, index) => (
        <div
          key={index}
          className={`group__image ${
            worker.align === "right" ? "align-right" : "align-left"
          }`}
        >
          <img src={worker.src} alt={worker.alt} />
        </div>
      ))}
    </div>
  );
};

export default Group;
