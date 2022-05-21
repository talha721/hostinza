import React from "react";
import Image from "next/image";
import Link from "next/link";

import USFlagImage from "../../public/assets/images/flags/006-united-states.svg";
import CanadaFlagImage from "../../public/assets/images/flags/002-canada.svg";
import VietnamFlagImage from "../../public/assets/images/flags/003-vietnam.svg";
import FranceFlagImage from "../../public/assets/images/flags/004-france.svg";
import GermanyImage from "../../public/assets/images/flags/005-germany.svg";

const LanguageSwitcher = () => {
  return (
    <>
      <div
        className="zoom-anim-dialog mfp-hide modal-language"
        id="modal-popup-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="language-content">
              <p>Switch The Language</p>
              <ul className="flag-lists">
                <li>
                  <Link href="#">
                    <a>
                      <Image src={USFlagImage} alt="" />
                      <span>English</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <Image src={CanadaFlagImage} alt="" />
                      <span>English</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <Image src={VietnamFlagImage} alt="" />
                      <span>Vietnamese</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <Image src={FranceFlagImage} alt="" />
                      <span>French</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <Image src={GermanyImage} alt="" />
                      <span>German</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="zoom-anim-dialog mfp-hide modal-searchPanel"
        id="modal-popup-2"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="xs-search-panel">
              <form action="#" method="POST" className="xs-search-group">
                <input
                  type="search"
                  className="form-control"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
                <button type="submit" className="search-button">
                  <i className="icon icon-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;
