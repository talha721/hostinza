import React from "react";
import Image from "next/image";

import ServiceImage7 from "../../public/assets/images/service/service-7.png";
import ServiceImage8 from "../../public/assets/images/service/service-8.png";
import ServiceImage9 from "../../public/assets/images/service/service-9.png";
import ServiceImage10 from "../../public/assets/images/service/service-10.png";
import ServiceImage11 from "../../public/assets/images/service/service-11.png";
import ServiceImage12 from "../../public/assets/images/service/service-12.png";

const Services = () => {
  return (
    <section className="service-section xs-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto wow fadeIn">
            <div className="xs-heading">
              <h2 className="heading-sub-title">Best Service</h2>
              <h3 className="heading-title">
                OUR <span>BEST SERVICE</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 xs-mb-8">
            <div className="xs-service-block wow fadeInUp">
              <div className="service-img">
                <Image src={ServiceImage7} alt="hosting service icon" />
              </div>
              <h4 className="xs-title">
                <a href="shared-hosting.html">Shared Hosting</a>
              </h4>
              <p>
                Share processes and data secure <br />
                lon a need to know basis
              </p>
              <a href="shared-hosting.html" className="simple-btn icon-right">
                Learn More<i className="icon icon-play2"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 xs-mb-8">
            <div
              className="xs-service-block wow fadeInUp"
              data-wow-duration="1.5s"
            >
              <div className="service-img">
                <Image src={ServiceImage8} alt="hosting service icon" />
              </div>
              <h4 className="xs-title">
                <a href="reseller-hosting.html">Reseller Hosting</a>
              </h4>
              <p>Out of the handful of hosting and solutions we tested</p>
              <a href="reseller-hosting.html" className="simple-btn icon-right">
                Learn More<i className="icon icon-play2"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 xs-mb-8">
            <div
              className="xs-service-block wow fadeInUp"
              data-wow-duration="2s"
            >
              <div className="service-img">
                <Image src={ServiceImage9} alt="hosting service icon" />
              </div>
              <h4 className="xs-title">
                <a href="vps-hosting.html">VPS Hosting</a>
              </h4>
              <p>We finally found a host that truly understood the unique</p>
              <a href="vps-hosting.html" className="simple-btn icon-right">
                Learn More<i className="icon icon-play2"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="xs-service-block wow fadeInUp"
              data-wow-duration="2.5s"
            >
              <div className="service-img">
                <Image src={ServiceImage10} alt="hosting service icon" />
              </div>
              <h4 className="xs-title">
                <a href="cloud-hosting.html">Cloud Hosting</a>
              </h4>
              <p>
                Share processes and data secure <br />
                lon a need to know basis
              </p>
              <a href="cloud-hosting.html" className="simple-btn icon-right">
                Learn More<i className="icon icon-play2"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="xs-service-block wow fadeInUp"
              data-wow-duration="3s"
            >
              <div className="service-img">
                <Image src={ServiceImage11} alt="hosting service icon" />
              </div>
              <h4 className="xs-title">
                <a href="dedicated-hosting.html">Dedicated Hosting</a>
              </h4>
              <p>Out of the handful of hosting and solutions we tested</p>
              <a
                href="dedicated-hosting.html"
                className="simple-btn icon-right"
              >
                Learn More<i className="icon icon-play2"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="xs-service-block wow fadeInUp"
              data-wow-duration="3.5s"
            >
              <div className="service-img">
                <Image src={ServiceImage12} alt="hosting service icon" />
              </div>
              <h4 className="xs-title">
                <a href="domain.html">Domain Name</a>
              </h4>
              <p>We finally found a host that truly understood the unique</p>
              <a href="domain.html" className="simple-btn icon-right">
                Learn More<i className="icon icon-play2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
