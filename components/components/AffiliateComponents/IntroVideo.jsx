import React from "react";
import Image from "next/image";
import Link from "next/link";

import VideoPopup2 from "../../../public/assets/images/video-popup-bg-2.jpg";

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
              <Image src={VideoPopup2} alt="video popop up image" />
              <div className="video-pop-up-content">
                <Link href="https://www.youtube.com/watch?v=mW6hFttt_KE">
                  <a className="xs-video-popup gloosy-btn">
                    <i className="icon icon-play1"></i>
                  </a>
                </Link>
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
