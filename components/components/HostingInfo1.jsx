import React from "react";
import Image from "next/image";

import MainImage from "../../public/assets/images/info/info-img-4.png";
import ElectricWaveImage from "../../public/assets/images/info/electric-wave.png";

const HostingInfo1 = () => {
  return (
    <section className="xs-section-padding xs-bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hosting-info-img wow fadeInRight">
              <Image src={MainImage} alt="Hosting info image" />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="hosting-info-wraper">
              <div className="spinner-icon wow">
                <Image src={ElectricWaveImage} alt="hosting info info" />
              </div>
              <div className="wow fadeInUp" data-wow-duration="1.5s">
                <h2 className="content-title">
                  Optimized Hosting for WordPress
                </h2>
                <p>
                  WordPress is a powerful content management system designed to
                  work. We’re turning our passion for WordPress into the most
                  amazing managed platform for your WordPress websites ever.
                </p>
                <ul className="xs-list check">
                  <li>No Limits on Traffic, Storage, and Websites*</li>
                  <li>Free Domain Registration with Annual Plans.</li>
                  <li>
                    Free SSL Encryption with Let's Encrypt 1-Click Installer
                  </li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingInfo1;
