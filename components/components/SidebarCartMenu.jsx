import React from "react";
import Image from "next/image";
import Link from "next/link";

import BlueLogo from "../../public/assets/images/blue_logo.png";
import Location from "../../public/assets/images/mail.png";
import Mail from "../../public/assets/images/location.png";
import Phone from "../../public/assets/images/phone.png";

const SidebarCartMenu = () => {
  return (
    <>
      <div className="xs-sidebar-group cart-group">
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading media">
              <div className="media-body">
                <Link href="#">
                  <a className="close-side-widget">X</a>
                </Link>
              </div>
            </div>
            <div className="xs-empty-content">
              <h3 className="widget-title">Shopping cart</h3>
              <h4 className="xs-title">No products in the cart.</h4>
              <p className="empty-cart-icon">
                <i className="icon icon-shopping-cart"></i>
              </p>
              <p className="xs-btn-wraper">
                <Link href="#">
                  <a className="btn btn-primary">Return To Shop</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="xs-sidebar-group info-group">
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <Link href="#">
                <a className="close-side-widget">X</a>
              </Link>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-logo-wraper">
                <Image src={BlueLogo} alt="sidebar logo" />
              </div>
              <p>
                Far far away, behind the word moun tains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of
              </p>
              <ul className="sideabr-list-widget">
                <li>
                  <div className="media">
                    <div className="d-flex">
                      <Image src={Location} alt="location" />
                    </div>
                    <div className="media-body ml-3">
                      <p>759 Pinewood Avenue</p>
                      <span>Marquette, Michigan</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media">
                    <div className="d-flex">
                      <Image src={Mail} alt="mail" />
                    </div>
                    <div className="media-body ml-3">
                      <Link href="mailto:info@domain.com">info@domain.com</Link>
                      <span>Online Support</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media">
                    <div className="d-flex">
                      <Image src={Phone} alt="phone" />
                    </div>
                    <div className="media-body ml-3">
                      <p>906-624-2565</p>
                      <span>Mon-Fri 8am-5pm</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="subscribe-from">
                <p>Get Subscribed!</p>
                <form
                  action="#"
                  method="POST"
                  id="subscribe-form"
                  className="subscribe-form"
                >
                  <label htmlFor="sub-input"></label>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="sub-input"
                      placeholder="Enter your mail here"
                      className="form-control"
                    />
                    <button className="sub-btn" type="submit">
                      <i className="icon icon-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
              <ul className="social-list version-2">
                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="vimeo">
                    <i className="fa fa-vimeo"></i>
                  </a>
                </li>
              </ul>
              <div className="text-center">
                <Link href="#">
                  <a className="btn btn-primary">Purchase Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarCartMenu;
