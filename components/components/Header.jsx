import React from "react";
import Image from "next/image";
import Link from "next/link";

import ColorLogo from "../../public/assets/images/color-logo.png";
import Logo from "../../public/assets/images/logo.png";
import Icon1 from "../../public/assets/images/menu-icon/icon-1.png";
import Icon2 from "../../public/assets/images/menu-icon/icon-2.png";
import Icon3 from "../../public/assets/images/menu-icon/icon-3.png";
import Icon4 from "../../public/assets/images/menu-icon/icon-4.png";
import Icon5 from "../../public/assets/images/menu-icon/icon-5.png";
import Icon6 from "../../public/assets/images/menu-icon/icon-6.png";

const Header = () => {
  return (
    <header className="xs-header header-boxed">
      <div className="container">
        <div className="row align-items-center">
          <div className="xs-logo-wraper">
            <Link href={"/"}>
              <a className="xs-logo">
                <img
                  src={"assets/images/color-logo.png"}
                  alt="logo"
                  className="main-logo"
                />
                <img
                  src={"assets/images/logo.png"}
                  alt="logo"
                  className="sticky-logo"
                />
              </a>
            </Link>
          </div>
          <nav className="xs-menus ml-auto">
            <div className="nav-header">
              <Link href="/">
                <a className="nav-brand"></a>
              </Link>
              <div className="nav-toggle"></div>
            </div>
            <div className="nav-menus-wrapper">
              <ul className="nav-menu">
                <li className="mega-menus">
                  <Link href={"/"}>
                    <a>Home</a>
                  </Link>
                </li>
                <li className="mega-menus">
                  <Link href={"#"}>Pages</Link>
                  <div className="megamenu-panel xs-icon-menu">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="single-menu-item">
                          <Link href={"/about"}>
                            <a>
                              <i className="icon icon-briefcase"></i>About
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"/affiliate"}>
                            <a>
                              <i className="icon icon-line-chart"></i>Affiliate
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-agenda"></i>Pricing
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"/faqs"}>
                            <a>
                              <i className="icon icon-question-circle"></i>FAQ
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"/terms"}>
                            <a>
                              <i className="icon icon-direction"></i>Terms
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-menu-item">
                          <Link href={"/who-is"}>
                            <a>
                              <i className="icon icon-folder"></i>Whois
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-chat"></i>Support
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-shopping-cart-1"></i>Cart
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-wallet"></i>Checkout
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-padlock-1"></i>Privacy
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-agenda-1"></i>Login
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-users"></i> Signup
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-safebox"></i> Forgot
                              password
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-sad"></i>404
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mega-menus">
                  <Link href={"#"}>Hosting</Link>
                  <div className="megamenu-panel xs-service-menu">
                    <div className="row">
                      <div className="col-lg-6">
                        <Link href={"/shared-hosting"}>
                          <a>
                            <div className="media">
                              <Image src={Icon1} alt="icon" />
                              <div className="media-body ml-4">
                                <h4>Shared Hosting</h4>
                                <p>
                                  Early Create sites & offload them to clients
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link href={"/reseller-hosting"}>
                          <a>
                            <div className="media">
                              <Image src={Icon2} alt="icon" />
                              <div className="media-body ml-4">
                                <h4>Reseller Hosting</h4>
                                <p>
                                  Early Create sites & offload them to clients
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link href={"/vps-hosting"}>
                          <a>
                            <div className="media">
                              <Image src={Icon3} alt="icon" />
                              <div className="media-body ml-4">
                                <h4>VPS hosting</h4>
                                <p>Protect your Brand & Deploy faster</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link href={"/wordpress-hosting"}>
                          <a>
                            <div className="media">
                              <Image src={Icon3} alt="icon" />
                              <div className="media-body ml-4">
                                <h4>Wordpress hosting</h4>
                                <p>Get your wordpress hosting now.</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>
                      <div className="col-lg-6">
                        <Link href={"/cloud-hosting"}>
                          <a>
                            <div className="media">
                              <Image src={Icon4} alt="icon" />
                              <div className="media-body ml-4">
                                <h4>Cloud Hosting</h4>
                                <p>Access your files from anywhere</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link href={"/dedicated-hosting"}>
                          <a>
                            <div className="media">
                              <Image src={Icon5} alt="icon" />
                              <div className="media-body ml-4">
                                <h4>Dedicated Hosting</h4>
                                <p>Be secure, be safe</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link href={"/domains"}>
                          <a>
                            <div className="media">
                              <Image src={Icon6} alt="icon" />
                              <div className="media-body ml-4">
                                <h4>Domain Name</h4>
                                <p>Grab your domain name today!</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
                <li className="mega-menus">
                  <a href="#">Elements</a>
                  <div className="megamenu-panel xs-icon-menu">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-sun"></i>Feature Box
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-database"></i>Pricing
                              Table
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-lock"></i>Testimonial
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-heart"></i>Blog Post
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-printer"></i>Clients
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-camera"></i>Team
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-phone"></i>Domain Search
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href={"#"}>
                            <a>
                              <i className="icon icon-construction"></i>Call To
                              Action
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="http://whmcs.finesttheme.com/">Whmcs</Link>
                </li>
              </ul>
            </div>
            <ul className="xs-menu-tools">
              <li>
                <a
                  href="#modal-popup-1"
                  className="languageSwitcher-button xs-modal-popup"
                >
                  <i className="icon icon-internet"></i>
                </a>
              </li>
              <li>
                <a href="#" className="offset-side-bar">
                  <i className="icon icon-cart1"></i>
                  <span className="item-count">2</span>
                </a>
              </li>
              <li>
                <a
                  href="#modal-popup-2"
                  className="navsearch-button xs-modal-popup"
                >
                  <i className="icon icon-search"></i>
                </a>
              </li>
              <li>
                <a href="#" className="navSidebar-button">
                  <i className="icon icon-burger-menu"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
