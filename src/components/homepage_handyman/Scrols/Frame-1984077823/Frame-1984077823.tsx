import React from "react";
import "./Frame-1984077823.css";
import ClientPostingDefault from "../../../../cards/ClientPostingDefault/ClientPostingDefault";
import ButtonSignUp from "../../../../buttons/ButtonSignUp/ButtonSignUp";

const Frame1984077823: React.FC = () => {
  return (
    <div className="Frame-1984077823">
      <div className="Frame-1984077823-text">
        <h1>Latest job offers - access now!</h1>
      </div>
      <ClientPostingDefault />
      <ButtonSignUp
        label={"Find jobs"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default Frame1984077823;
