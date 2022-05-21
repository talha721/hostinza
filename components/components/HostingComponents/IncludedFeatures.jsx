import React from "react";
import Image from "next/image";

import FeatureImage1 from "../../../public/assets/images/included-feature/included-feature-1.png";
import FeatureImage2 from "../../../public/assets/images/included-feature/included-feature-2.png";
import FeatureImage3 from "../../../public/assets/images/included-feature/included-feature-3.png";
import FeatureImage4 from "../../../public/assets/images/included-feature/included-feature-4.png";
import FeatureImage5 from "../../../public/assets/images/included-feature/included-feature-5.png";
import FeatureImage6 from "../../../public/assets/images/included-feature/included-feature-6.png";

const IncludedFeatures = () => {
  return (
    <section className="xs-section-padding included-feature-list bg-gradient">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">We Offer</h2>
              <h3 className="heading-title">
                FEATURES <span>INCLUDED</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="include-feature-list">
              <div className="media hosting-info-list">
                <div className="d-flex info-icon">
                  <Image src={FeatureImage1} alt="included feature icon" />
                </div>
                <div className="media-body">
                  <h4 className="xs-title">No Multi Tenancy</h4>
                  <p>
                    Share processes and data secure lon a need to know basis
                    with out the need for reconciliation it combines.
                  </p>
                </div>
              </div>
              <div className="media hosting-info-list">
                <div className="d-flex info-icon">
                  <Image src={FeatureImage2} alt="included feature icon" />
                </div>
                <div className="media-body">
                  <h4 className="xs-title">LiteSpeed Web Server</h4>
                  <p>
                    Share processes and data secure lon a need to know basis
                    with out the need for reconciliation it combines.
                  </p>
                </div>
              </div>
              <div className="media hosting-info-list">
                <div className="d-flex info-icon">
                  <Image src={FeatureImage3} alt="included feature icon" />
                </div>
                <div className="media-body">
                  <h4 className="xs-title">cPanel Hosting Control </h4>
                  <p>
                    Share processes and data secure lon a need to know basis
                    with out the need for reconciliation it combines.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="include-feature-list">
              <div className="media hosting-info-list">
                <div className="d-flex info-icon">
                  <Image src={FeatureImage4} alt="included feature icon" />
                </div>
                <div className="media-body">
                  <h4 className="xs-title">PHP Selector</h4>
                  <p>
                    Share processes and data secure lon a need to know basis
                    with out the need for reconciliation it combines.
                  </p>
                </div>
              </div>
              <div className="media hosting-info-list">
                <div className="d-flex info-icon">
                  <Image src={FeatureImage5} alt="included feature icon" />
                </div>
                <div className="media-body">
                  <h4 className="xs-title">LiteSpeed Web Server</h4>
                  <p>
                    Share processes and data secure lon a need to know basis
                    with out the need for reconciliation it combines.
                  </p>
                </div>
              </div>
              <div className="media hosting-info-list">
                <div className="d-flex info-icon">
                  <Image src={FeatureImage6} alt="included feature icon" />
                </div>
                <div className="media-body">
                  <h4 className="xs-title">Patchman Kiler</h4>
                  <p>
                    Share processes and data secure lon a need to know basis
                    with out the need for reconciliation it combines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedFeatures;
