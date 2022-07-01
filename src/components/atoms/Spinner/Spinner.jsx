import React from "react";
import "./Spinner.scss";

const WithSpinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container"></div>
    </div>
  );
};

export default WithSpinner;
