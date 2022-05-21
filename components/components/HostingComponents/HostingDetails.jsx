import React from "react";
import Image from "next/image";

import ChooseUsImage1 from "../../../public/assets/images/chooseUs/choose-us-1.png";
import ChooseUsImage2 from "../../../public/assets/images/chooseUs/choose-us-2.png";
import ChooseUsImage3 from "../../../public/assets/images/chooseUs/choose-us-3.png";

const HostingDetails = () => {
  return (
    <section className="xs-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Shared Hosting</h2>
              <h3 className="heading-title">
                WHY <span>SHARED HOSTING</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="why-choose-us-block wow fadeInUp">
              <div className="choose-us-img">
                <Image src={ChooseUsImage1} alt="hostinza hosting image" />
              </div>
              <h4 className="xs-title">99.9% Uptime Guarantee</h4>
              <p>
                Share processes and data secure <br /> lona need to know basis
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="why-choose-us-block wow fadeInUp"
              data-wow-duration="1.5s"
            >
              <div className="choose-us-img">
                <Image src={ChooseUsImage2} alt="hostinza hosting image" />
              </div>
              <h4 className="xs-title">Safe and Secured</h4>
              <p>Our team assured your web site is always safe and secure</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="why-choose-us-block wow fadeInUp"
              data-wow-duration="2s"
            >
              <div className="choose-us-img">
                <Image src={ChooseUsImage3} alt="hostinza hosting image" />
              </div>
              <h4 className="xs-title">Our Dedicated Support</h4>
              <p>We finally found a host that truly understood the unique</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingDetails;
