import React from "react";
import Image from "next/image";
import Link from "next/link";

import SheildImage2 from "../../public/assets/images/sheild-2.png";
import ClockLock2 from "../../public/assets/images/cloud-lock-2.png";
import AddressPin from "../../public/assets/images/address-pin.png";
import PhonePin from "../../public/assets/images/phone-pin.png";
import EmailIcon from "../../public/assets/images/email-icon.png";
import SecurityCompanyImage1 from "../../public/assets/images/security/security-company-images-1.png";
import SecurityCompanyImage2 from "../../public/assets/images/security/security-company-images-2.png";
import SecurityCompanyImage3 from "../../public/assets/images/security/security-company-images-3.png";
import SecurityCompanyImage4 from "../../public/assets/images/security/security-company-images-4.png";
import FooterLogo from "../../public/assets/images/footer-logo.png";

const Footer = () => {
  return (
    <footer className="xs-footer-section">
      <div className="xs-feature-section">
        <div className="container">
          <div className="row feature-v2">
            <div className="col-lg-6">
              <div className="xs-feature-group wow fadeInLeft">
                <div className="media">
                  <div className="feature-img d-flex">
                    <Image src={SheildImage2} alt="hosting feature img" />
                  </div>
                  <div className="media-body feature-content">
                    <h4 className="xs-title">Days money back guarantee</h4>
                    <p>
                      Share processes an data secure lona need <br />
                      to know basis without the need.
                    </p>
                    <div className="xs-btn-wraper">
                      <Link href="#">
                        <a className="btn btn-primary">Know More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="xs-feature-group wow fadeInRight">
                <div className="media">
                  <div className="feature-img d-flex">
                    <Image src={ClockLock2} alt="hosting feature img" />
                  </div>
                  <div className="media-body feature-content">
                    <h4 className="xs-title">Build and protect your brand</h4>
                    <p>
                      Share processes an data secure lona need <br />
                      to know basis without the need.
                    </p>
                    <div className="xs-btn-wraper">
                      <Link href="#">
                        <a className="btn btn-primary">Know More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-group"
        style={{ backgroundImage: "url(assets/images/footer-bg.png)" }}
      >
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget wow fadeInUp">
                  <h3 className="widget-title">Services</h3>
                  <ul className="xs-list">
                    <li>
                      <Link href="/shared-hosting">Shared Hosting</Link>
                    </li>
                    <li>
                      <Link href="/reseller-hosting">Reseller Hosting</Link>
                    </li>
                    <li>
                      <Link href="/vps-hosting">VPS Hosting</Link>
                    </li>
                    <li>
                      <Link href="/cloud-hosting">Cloud Hosting</Link>
                    </li>
                    <li>
                      <Link href="/dedicated-hosting">Dedicated Hosting</Link>
                    </li>
                    <li>
                      <Link href="/domains">Domain Name</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <h3 className="widget-title">Company</h3>
                  <ul className="xs-list">
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/faqs">Support</Link>
                    </li>
                    <li>
                      <Link href="#">Latest Blog</Link>
                    </li>
                    <li>
                      <Link href="#">Pricing</Link>
                    </li>
                    <li>
                      <Link href="/affiliate">Affiliate</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-duration="1.3s"
                >
                  <h3 className="widget-title">Solutions</h3>
                  <ul className="xs-list">
                    <li>
                      <Link href="/who-is">Who Is</Link>
                    </li>
                    <li>
                      <Link href="/terms">Terms of Service</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/faqs">FAQ</Link>
                    </li>
                    <li>
                      <Link href="#">Log In</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-duration="1.5s"
                >
                  <h3 className="widget-title">Contact Info</h3>
                  <ul className="contact-info-widget">
                    <li className="media">
                      <Image
                        src={AddressPin}
                        className="d-flex"
                        alt="contact icon"
                      />
                      <span className="media-body ml-3">
                        9/4c, 1010 Avenue, NY, USA
                      </span>
                    </li>
                    <li className="media">
                      <Image
                        src={PhonePin}
                        className="d-flex"
                        alt="contact icon"
                      />
                      <span className="media-body ml-3">
                        009-215-5596 (toll free) 009-215-5596
                      </span>
                    </li>
                    <li className="media">
                      <Image
                        src={EmailIcon}
                        className="d-flex"
                        alt="contact icon"
                      />
                      <span className="media-body ml-3">
                        9/4c, 1010 Avenue, NY, USA
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-bottom-info wow fadeInUp">
                  <p>
                    Offers valid for a limited time onlyand reflect multi annual
                    discounts. Other terms and conditions may apply.{" "}
                    <Link href="#">Click Here</Link>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <ul
                  className="xs-list list-inline wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <li>
                    <Image
                      src={SecurityCompanyImage1}
                      alt="security company images"
                    />
                  </li>
                  <li>
                    <Image
                      src={SecurityCompanyImage2}
                      alt="security company images"
                    />
                  </li>
                  <li>
                    <Image
                      src={SecurityCompanyImage3}
                      alt="security company images"
                    />
                  </li>
                  <li>
                    <Image
                      src={SecurityCompanyImage4}
                      alt="security company images"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="copyright-text wow fadeInUp">
                <p>
                  &copy; 2018 <Link href="#">Hostinza</Link> Theme by{" "}
                  <Link href="https://themeforest.net/user/xpeedstudio">
                    Xpeed Studio
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="footer-logo-wraper wow fadeInUp"
                data-wow-duration="1s"
              >
                <Link href="/">
                  <a className="footer-logo">
                    <Image src={FooterLogo} alt="footer logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="social-list-wraper wow fadeInUp"
                data-wow-duration="1.3s"
              >
                <ul className="social-list">
                  <li>
                    <Link href="#">
                      <a className="facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="twitter">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="linkedin">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="instagram">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="googlePlus">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
