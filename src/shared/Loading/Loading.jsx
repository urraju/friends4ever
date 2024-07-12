// Spinner.js
import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="loader">
        <div className="face">
          <div className="circle"></div>
        </div>
        <div className="face">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
