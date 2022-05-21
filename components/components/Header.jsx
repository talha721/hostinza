import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="xs-header header-boxed">
      <div className="container">
        <div className="row align-items-center">
          <div className="xs-logo-wraper">
            <Link href={"/"}>
              <a className="xs-logo">
                <img
                  src="assets/images/color-logo.png"
                  alt=""
                  className="main-logo"
                />
                <img
                  src="assets/images/logo.png"
                  alt=""
                  className="sticky-logo"
                />
              </a>
            </Link>
          </div>
          <nav className="xs-menus ml-auto">
            <div className="nav-header">
              <a className="nav-brand" href="index.html"></a>
              <div className="nav-toggle"></div>
            </div>
            <div className="nav-menus-wrapper">
              <ul className="nav-menu">
                <li className="mega-menus">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="mega-menus">
                  <a href="#">Pages</a>
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
                          <Link href="/affiliate">
                            <a>
                              <i className="icon icon-line-chart"></i>Affiliate
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <a href="pricing.html">
                            <i className="icon icon-agenda"></i>Pricing
                          </a>
                        </div>
                        <div className="single-menu-item">
                          <Link href="/faqs">
                            <a>
                              <i className="icon icon-question-circle"></i>FAQ
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <Link href="/terms">
                            <a>
                              <i className="icon icon-direction"></i>Terms
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-menu-item">
                          <Link href="/who-is">
                            <a>
                              <i className="icon icon-folder"></i>Whois
                            </a>
                          </Link>
                        </div>
                        <div className="single-menu-item">
                          <a href="support.html">
                            <i className="icon icon-chat"></i>Support
                          </a>
                        </div>
                        <div className="single-menu-item">
                          <a href="cart.html">
                            <i className="icon icon-shopping-cart-1"></i>Cart
                          </a>
                        </div>
                        <div className="single-menu-item">
                          <a href="checkout.html">
                            <i className="icon icon-wallet"></i>Checkout
                          </a>
                        </div>
                        <div className="single-menu-item">
                          <a href="privacy.html">
                            <i className="icon icon-padlock-1"></i>Privacy
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-menu-item">
                          <a href="login.html">
                            <i className="icon icon-agenda-1"></i>Login
                          </a>
                        </div>
                        <div className="single-menu-item">
                          <a href="signup.html">
                            <i className="icon icon-users"></i> Signup
                          </a>
                        </div>
                        <div className="single-menu-item">
                          <a href="forgot-password.html">
                            <i className="icon icon-safebox"></i> Forgot
                            password
                          </a>
                        </div>
                        <div className="single-menu-item">
                          <a href="404.html">
                            <i className="icon icon-sad"></i>404
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mega-menus">
                  <a href="#">Hosting</a>
                  <div className="megamenu-panel xs-service-menu">
                    <div className="row">
                      <div className="col-lg-6">
                        <Link href={"/shared-hosting"}>
                          <a>
                            <div className="media">
                              <img
                                src="assets/images/menu-icon/icon-1.png"
                                alt=""
                              />
                              <div className="media-body">
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
                              <img
                                src="assets/images/menu-icon/icon-2.png"
                                alt=""
                              />
                              <div className="media-body">
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
                              <img
                                src="assets/images/menu-icon/icon-3.png"
                                alt=""
                              />
                              <div className="media-body">
                                <h4>VPS hosting</h4>
                                <p>Protect your Brand & Deploy faster</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link href={"/wordpress-hosting"}>
                          <a>
                            <div className="media">
                              <img
                                src="assets/images/menu-icon/icon-3.png"
                                alt=""
                              />
                              <div className="media-body">
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
                              <img
                                src="assets/images/menu-icon/icon-4.png"
                                alt=""
                              />
                              <div className="media-body">
                                <h4>Cloud Hosting</h4>
                                <p>Access your files from anywhere</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link href={"/dedicated-hosting"}>
                          <a>
                            <div className="media">
                              <img
                                src="assets/images/menu-icon/icon-5.png"
                                alt=""
                              />
                              <div className="media-body">
                                <h4>Dedicated Hosting</h4>
                                <p>Be secure, be safe</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link href={"/domains"}>
                          <a>
                            <div className="media">
                              <img
                                src="assets/images/menu-icon/icon-6.png"
                                alt=""
                              />
                              <div className="media-body">
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
                          <a href="elements-features.html">
                            <i className="icon icon-sun"></i>Feature Box
                          </a>
                        </div>
                        <div className="single-menu-item">
                          <a href="elements-pricing-table.html">
                            <i className="icon icon-database"></i>Pricing Table
                          </a>
                        </div>
                        <div className="single-menu-item">
                          <a href="elements-testimonial.html">
                            <i className="icon icon-lock"></i>Testimonial
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-menu-item">
                          <a href="elements-blogpost.html">
                            <i className="icon icon-heart"></i>Blog Post
                          </a>
                        </div>
                        <div className="single-menu-item">
                          <a href="elements-clients.html">
                            <i className="icon icon-printer"></i>Clients
                          </a>
                        </div>
                        <div className="single-menu-item">
                          <a href="elements-team.html">
                            <i className="icon icon-camera"></i>Team
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-menu-item">
                          <a href="elements-domain-search.html">
                            <i className="icon icon-phone"></i>Domain Search
                          </a>
                        </div>
                        <div className="single-menu-item">
                          <a href="elements-calltoaction.html">
                            <i className="icon icon-construction"></i>Call To
                            Action
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="http://whmcs.finesttheme.com/" target="_blank">
                    Whmcs
                  </a>
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
