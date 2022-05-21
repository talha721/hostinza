import React from "react";

const PreLoader = () => {
  return (
    <div id="preloader">
      <div className="preloader-wrapper">
        <div className="spinner"></div>
      </div>
      <div className="preloader-cancel-btn">
        <a href="#" className="btn btn-secondary prelaoder-btn">
          Cancel Preloader
        </a>
      </div>
    </div>
  );
};

export default PreLoader;
