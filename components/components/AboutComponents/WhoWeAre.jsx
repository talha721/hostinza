import React from "react";

const WhoWeAre = () => {
  return (
    <section className="xs-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Who We Are</h2>
              <h3 className="heading-title">
                MEET <span>HOSTINZA</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="intro-video wow fadeInUp">
              <img
                src="assets/images/video-popup-bg.jpg"
                alt="video popop up image"
              />
              <div className="video-pop-up-content">
                <a
                  href="https://youtu.be/zDAYZU4A3w0"
                  className="xs-video-popup gloosy-btn"
                >
                  <i className="icon icon-play1"></i>
                </a>
              </div>
              <div className="xs-overlay xs-bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
