import React from "react";
import "./Frame-1984077828.css";
import BestRevenueHandymen from "./BestRevenueHandymen/BestRevenueHandymen";
import ButtonSignUp from "../../../../buttons/ButtonSignUp/ButtonSignUp";

const Frame1984077828: React.FC = () => {
  return (
    <div className="Frame1984077828">
      <div className="Frame1984077828-text">
        <h1>Craftsmen grow faster with our app!</h1>
      </div>

      <div className="Frame1984077962">
        <div className="carousel-wrapper">
          <div className="card-carousel infinite-scroll">
            {[5, 4, 5, 4].map((id, index) => (
              <div className="carousel-item" key={index}>
                <BestRevenueHandymen userId={id} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Frame1984077828-button">
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

export default Frame1984077828;
