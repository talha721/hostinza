import React from "react";
import Image from "next/image";

import PricingImage1 from "../../public/assets/images/pricing/pricing-1.png";
import PricingImage2 from "../../public/assets/images/pricing/pricing-2.png";
import PricingImage3 from "../../public/assets/images/pricing/pricing-3.png";

const PricingPlan = () => {
  return (
    <section className="pricing-section xs-section-padding xs-bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Pricing Plans</h2>
              <h3 className="heading-title">
                OUR <span>BEST PRICING</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 xs-pricing-group">
            <ul
              className="nav nav-tabs main-nav-tab tab-swipe wow fadeIn"
              role="tablist"
            >
              <li>
                <a
                  id="monthly-tab"
                  className="active show"
                  data-toggle="tab"
                  href="#monthly"
                  role="tab"
                  aria-controls="monthly"
                  aria-selected="true"
                >
                  Monthly
                </a>
              </li>
              <li>
                <a
                  id="yearly-tab"
                  data-toggle="tab"
                  href="#yearly"
                  role="tab"
                  aria-controls="yearly"
                  aria-selected="false"
                >
                  Yearly
                </a>
              </li>
            </ul>
            <div className="tab-content pricing-v2">
              <div
                className="tab-pane fadeIn animated show active"
                id="monthly"
                role="tabpanel"
                aria-labelledby="monthly-tab"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="xs-single-pricing">
                      <div className="pricing-header">
                        <div className="pricing-img-block">
                          <Image
                            src={PricingImage1}
                            alt="hostinza pricing image"
                          />
                        </div>
                        <h4 className="xs-title">Cloud Hosting</h4>
                      </div>
                      <div className="pricing-body">
                        <p>The High performance cloud platform ever</p>
                        <div className="pricing-price">
                          <p>Starting at</p>
                          <h2>
                            <sup>$</sup>49
                          </h2>
                          <h6 className="discount-price">
                            25% Discount
                            <del>$49.99</del>
                          </h6>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="btn btn-primary">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="xs-single-pricing active">
                      <div className="pricing-header">
                        <div className="pricing-img-block">
                          <Image
                            src={PricingImage2}
                            alt="hostinza pricing image"
                          />
                        </div>
                        <h4 className="xs-title">VPS Hosting</h4>
                      </div>
                      <div className="pricing-body">
                        <p>
                          The ideal solution for corporate websites and larger
                          blogs
                        </p>
                        <div className="pricing-price">
                          <p>Starting at</p>
                          <h2>
                            <sup>$</sup>39
                          </h2>
                          <h6 className="discount-price">
                            25% Discount
                            <del>$49.99</del>
                          </h6>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="btn btn-primary">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="xs-single-pricing">
                      <div className="pricing-header">
                        <div className="pricing-img-block">
                          <Image
                            src={PricingImage3}
                            alt="hostinza pricing image"
                          />
                        </div>
                        <h4 className="xs-title">Dedicated Hosting</h4>
                      </div>
                      <div className="pricing-body">
                        <p>The High performance cloud platform ever</p>
                        <div className="pricing-price">
                          <p>Starting at</p>
                          <h2>
                            <sup>$</sup>49
                          </h2>
                          <h6 className="discount-price">
                            25% Discount
                            <del>$49.99</del>
                          </h6>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="btn btn-primary">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fadeIn animated"
                id="yearly"
                role="tabpanel"
                aria-labelledby="yearly-tab"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="xs-single-pricing">
                      <div className="pricing-header">
                        <div className="pricing-img-block">
                          <Image
                            src={PricingImage1}
                            alt="hostinza pricing image"
                          />
                        </div>
                        <h4 className="xs-title">Dedicated Server</h4>
                      </div>
                      <div className="pricing-body">
                        <p>The High performance cloud platform ever</p>
                        <div className="pricing-price">
                          <p>Starting at</p>
                          <h2>
                            <sup>$</sup>100
                          </h2>
                          <h6 className="discount-price">
                            50% Discount
                            <del>$200.0</del>
                          </h6>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="btn btn-primary">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="xs-single-pricing active">
                      <div className="pricing-header">
                        <div className="pricing-img-block">
                          <Image
                            src={PricingImage2}
                            alt="hostinza pricing image"
                          />
                        </div>
                        <h4 className="xs-title">Reseller Hosting</h4>
                      </div>
                      <div className="pricing-body">
                        <p>
                          The ideal solution for corporate websites and larger
                          blogs
                        </p>
                        <div className="pricing-price">
                          <p>Starting at</p>
                          <h2>
                            <sup>$</sup>59
                          </h2>
                          <h6 className="discount-price">
                            25% Discount
                            <del>$108.99</del>
                          </h6>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="btn btn-primary">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="xs-single-pricing">
                      <div className="pricing-header">
                        <div className="pricing-img-block">
                          <Image
                            src={PricingImage3}
                            alt="hostinza pricing image"
                          />
                        </div>
                        <h4 className="xs-title">Shared Hosting</h4>
                      </div>
                      <div className="pricing-body">
                        <p>The High performance cloud platform ever</p>
                        <div className="pricing-price">
                          <p>Starting at</p>
                          <h2>
                            <sup>$</sup>19
                          </h2>
                          <h6 className="discount-price">
                            20% Discount
                            <del>$29.99</del>
                          </h6>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="btn btn-primary">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mx-auto">
            <div className="pricing-info wow fadeIn">
              <h5>
                <a href="pricing.html">See plan details</a>and pricing for more
                information
              </h5>
              <ul className="xs-list list-inline">
                <li>
                  <i className="icon icon-back_up"></i>Daily backups
                </li>
                <li>
                  <i className="icon icon-migration"></i>Free migrations
                </li>
                <li>
                  <i className="icon icon-checkmark"></i>Staging environments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
