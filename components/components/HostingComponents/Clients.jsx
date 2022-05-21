import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="xs-client-section xs-section-padding-bottom">
      <div className="container">
        <div className="xs-client-slider owl-carousel">
          <div className="single-client">
            <img
              src="assets/images/client/client-1.png"
              alt="hosting client image"
            />
          </div>
          <div className="single-client">
            <img
              src="assets/images/client/client-2.png"
              alt="hosting client image"
            />
          </div>
          <div className="single-client">
            <img
              src="assets/images/client/client-3.png"
              alt="hosting client image"
            />
          </div>
          <div className="single-client">
            <img
              src="assets/images/client/client-4.png"
              alt="hosting client image"
            />
          </div>
          <div className="single-client">
            <img
              src="assets/images/client/client-5.png"
              alt="hosting client image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
