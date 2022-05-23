import React from "react";
import Link from "next/link";

const PreLoader = () => {
  return (
    <div id="preloader">
      <div className="preloader-wrapper">
        <div className="spinner"></div>
      </div>
      <div className="preloader-cancel-btn">
        <Link href="#">
          <a className="btn btn-secondary prelaoder-btn">Cancel Preloader</a>
        </Link>
      </div>
    </div>
  );
};

export default PreLoader;
