import React from "react";

const IntroVideo = () => {
  return (
    <section className="xs-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Affiliate Program</h2>
              <h3 className="heading-title">
                WHAT <span>IS AFFILIATE</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="intro-video wow fadeInUp">
              <img
                src="assets/images/video-popup-bg-2.jpg"
                alt="video popop up image"
              />
              <div className="video-pop-up-content">
                <a
                  href="https://www.youtube.com/watch?v=mW6hFttt_KE"
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

export default IntroVideo;
