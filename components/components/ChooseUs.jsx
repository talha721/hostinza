import React from "react";
import Image from "next/image";

import UpTimeImage from "../../public/assets/images/chooseUs/choose-us-1.png";
import SafeAndSecuredImage from "../../public/assets/images/chooseUs/choose-us-2.png";
import SupportImage from "../../public/assets/images/chooseUs/choose-us-3.png";

const ChooseUs = () => {
  return (
    <section className="why-choose-section xs-section-padding xs-bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Best Hosting</h2>
              <h3 className="heading-title">
                WHY <span>CHOOSE US</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="why-choose-us-block wow fadeInUp">
              <div className="choose-us-img">
                <Image src={UpTimeImage} alt="hostinza hosting image" />
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
                <Image src={SafeAndSecuredImage} alt="hostinza hosting image" />
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
                <Image src={SupportImage} alt="hostinza hosting image" />
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

export default ChooseUs;
