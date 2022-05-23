import React from "react";
import Image from "next/image";
import Link from "next/link";

import ContactInfoIcon1 from "../../../public/assets/images/contact-info-icon-1.png";
import ContactInfoIcon2 from "../../../public/assets/images/contact-info-icon-2.png";
import ContactInfoIcon3 from "../../../public/assets/images/contact-info-icon-3.png";

const ContactInfo = () => {
  return (
    <section className="xs-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Find us</h2>
              <h3 className="heading-title">
                CONTACT <span>WITH US</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-group wow fadeInUp">
              <div className="contact-info-icon">
                <Image src={ContactInfoIcon1} alt="contact info icon" />
              </div>
              <h4 className="xs-title">
                <Link href="#">Find us</Link>
              </h4>
              <span>1Hd- 50, 010 Avenue, NY 90001</span>
              <span>United States</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="contact-info-group wow fadeInUp"
              data-wow-duration="1.5s"
            >
              <div className="contact-info-icon">
                <Image src={ContactInfoIcon2} alt="contact info icon" />
              </div>
              <h4 className="xs-title">
                <Link href="#">Make a Call</Link>
              </h4>
              <span>009-215-5596 (toll free)</span>
              <span>009-215-5595</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="contact-info-group wow fadeInUp"
              data-wow-duration="2s"
            >
              <div className="contact-info-icon">
                <Image src={ContactInfoIcon3} alt="contact info icon" />
              </div>
              <h4 className="xs-title">
                <Link href="#">Send Mail</Link>
              </h4>
              <Link href="mailto:contact@example.com">contact@example.com</Link>
              <Link href="mailto:info@example.com">info@example.com</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
