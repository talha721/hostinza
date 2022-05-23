import React from "react";
import Image from "next/image";

import ClientImage1 from "../../../public/assets/images/client/client-1.png";
import ClientImage2 from "../../../public/assets/images/client/client-2.png";
import ClientImage3 from "../../../public/assets/images/client/client-3.png";
import ClientImage4 from "../../../public/assets/images/client/client-4.png";
import ClientImage5 from "../../../public/assets/images/client/client-5.png";

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

// <div className="xs-client-section xs-section-padding-bottom">
//   <div className="container">
//     <div className="xs-client-slider owl-carousel">
//       <div className="single-client">
//         <Image src={ClientImage1} alt="hosting client image" />
//       </div>
//       <div className="single-client">
//         <Image src={ClientImage2} alt="hosting client image" />
//       </div>
//       <div className="single-client">
//         <Image src={ClientImage3} alt="hosting client image" />
//       </div>
//       <div className="single-client">
//         <Image src={ClientImage4} alt="hosting client image" />
//       </div>
//       <div className="single-client">
//         <Image src={ClientImage5} alt="hosting client image" />
//       </div>
//     </div>
//   </div>
// </div>
