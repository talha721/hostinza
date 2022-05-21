import React from "react";

const VPSHostingBanner = () => {
  return (
    <div
      className="xs-banner service-banner contet-to-center"
      style={{
        backgroundImage:
          "url('assets/images/innerWelcome/inner-welcome-banner.jpg')",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 align-self-center">
            <div className="xs-banner-content">
              <div className="xs-banner-group">
                <h2
                  className="banner-title wow fadeInLeft"
                  data-wow-duration="1s"
                >
                  VPS HOSTING
                </h2>
                <p className="wow fadeInLeft" data-wow-duration="1.5s">
                  Share processes and data securely on a need to know basis
                  without the need for reconciliation it combines a permissione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xs-overlay bg-gradient"></div>
    </div>
  );
};

export default VPSHostingBanner;
