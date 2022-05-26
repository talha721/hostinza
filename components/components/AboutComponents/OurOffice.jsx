import React from "react";
import Image from "next/image";
import Link from "next/link";

import OfficeImage1 from "../../../public/assets/images/office/office-img-1.jpg";
import OfficeImage2 from "../../../public/assets/images/office/office-img-2.jpg";
import OfficeImage3 from "../../../public/assets/images/office/office-img-3.jpg";

const OurOffice = () => {
  return (
    <section className="xs-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Our Office</h2>
              <h3 className="heading-title">
                LIFE AT <span>HOSTINZA</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 offset-lg-2">
            <div className="office-interface-group-content wow fadeInLeft">
              <img
                src={"/assets/images/office/office-img-1.jpg"}
                alt="office images"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="join-with-us-wraper wow fadeInRight"
              data-wow-duration="1s"
            >
              <div className="join-with-us-content">
                <h2>Do you want to join our Team?</h2>
                <Link href="#">
                  <a className="btn btn-secondary">Apply Now</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="office-interface-group-content content-1 wow fadeInLeft"
              data-wow-duration="1.3s"
            >
              <img
                src={"/assets/images/office/office-img-2.jpg"}
                alt="office images"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="office-interface-group-content content-2 wow fadeInRight"
              data-wow-duration="1.5s"
            >
              <img
                src={"/assets/images/office/office-img-3.jpg"}
                alt="office images"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
