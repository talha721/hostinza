import React from "react";

const AffiliateWorks = () => {
  return (
    <section className="xs-section-padding xs-bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Affiliate Program</h2>
              <h3 className="heading-title">
                HOW <span>AFFILIATE WORKS</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row choose-us-v3">
          <div className="col-lg-4 col-md-6">
            <div className="why-choose-us-block wow fadeInp">
              <div className="choose-us-img">
                <img
                  src="assets/images/affiliate-works/affiliate-works-1.png"
                  alt="hostinza affiliate image"
                />
              </div>
              <h4 className="xs-title">Sign up hostinza</h4>
              <p>
                Share processes and data secure <br /> lona need to know basis
              </p>
              <div className="line-indecator indicator-1">
                <img
                  src="assets/images/affiliate-works/indicator-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="why-choose-us-block wow fadeInUp"
              data-wow-duration="1.5s"
            >
              <div className="choose-us-img">
                <img
                  src="assets/images/affiliate-works/affiliate-works-2.png"
                  alt="hostinza affiliate image"
                />
              </div>
              <h4 className="xs-title">AD on your Website</h4>
              <p>Our team assured your web site is always safe and secure </p>
              <div className="line-indecator indicator-2">
                <img
                  src="assets/images/affiliate-works/indicator-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="why-choose-us-block wow fadeInUp"
              data-wow-duration="2s"
            >
              <div className="choose-us-img">
                <img
                  src="assets/images/affiliate-works/affiliate-works-3.png"
                  alt="hostinza affiliate image"
                />
              </div>
              <h4 className="xs-title">Get Monthly Earning</h4>
              <p>We finally found a host that truly understood the unique</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateWorks;
