import React from "react";
import Image from "next/image";

import MainImage from "../../public/assets/images/info/info-img-3.png";
import QuardImage from "../../public/assets/images/info/gaurd-icon.png";
import ClockImage from "../../public/assets/images/info/clock-icon.png";
import CloudImage from "../../public/assets/images/info/cloud-icon.png";

const HostingInfo = () => {
  return (
    <section className="xs-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div
              className="hosting-info-wraper-2 wow fadeInLeft"
              data-wow-duration="1.5s"
            >
              <h2 className="content-title">Powerful Server and Platform</h2>
              <div className="media hosting-info-list">
                <div className="d-flex info-icon">
                  <Image src={QuardImage} alt="hosting info icon" />
                </div>
                <div className="media-body">
                  <h4 className="xs-title small">
                    Better Security and faster Server
                  </h4>
                  <p>
                    Our best-in-class WordPress solution, with additio nal optiz
                    ation to make running a WooCommerce
                  </p>
                </div>
              </div>
              <div className="media hosting-info-list">
                <div className="d-flex info-icon">
                  <Image src={CloudImage} alt="hosting info icon" />
                </div>
                <div className="media-body">
                  <h4 className="xs-title small">
                    No-Downtime website transfers
                  </h4>
                  <p>
                    Our best-in-class WordPress solution, with additio nal optiz
                    ation to make running a WooCommerce
                  </p>
                </div>
              </div>
              <div className="media hosting-info-list">
                <div className="d-flex info-icon">
                  <Image src={ClockImage} alt="hosting info icon" />
                </div>
                <div className="media-body">
                  <h4 className="xs-title small">
                    Deployment within few minutes
                  </h4>
                  <p>
                    Our best-in-class WordPress solution, with additio nal optiz
                    ation to make running a WooCommerce
                  </p>
                </div>
              </div>
              <a href="#" className="btn btn-primary">
                Get Started
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="hosting-info-img wow fadeInRight"
              data-wow-duration="2s"
            >
              <Image src={MainImage} alt="Hosting info image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingInfo;
