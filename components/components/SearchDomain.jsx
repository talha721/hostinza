import React from "react";
import Image from "next/image";

import ComImage from "../../public/assets/images/domain/com.png";
import CoImage from "../../public/assets/images/domain/co.png";
import NetImage from "../../public/assets/images/domain/net.png";
import InfoImage from "../../public/assets/images/domain/info.png";
import StoreImage from "../../public/assets/images/domain/store.png";

const SearchDomain = () => {
  return (
    <div className="xs-domain-search">
      <div className="container">
        <div className="domain-search-form-group wow fadeIn">
          <form action="#" method="POST" className="domain-search-form">
            <input
              type="search"
              placeholder="Enter Address"
              id="domain-search"
            />
            <div className="select-group">
              <select name="domainList">
                <option value="com" selected>
                  .com
                </option>
                <option value="net">.net</option>
                <option value="io">.io</option>
                <option value="info">.info</option>
                <option value="store">.store</option>
              </select>
              <input type="submit" value="Search" />
            </div>
          </form>
          <ul className="xs-domain-info">
            <li>
              <Image src={ComImage} alt="Domain name" />
              <strong className={"ml-3"}>$2.95</strong>
            </li>
            <li>
              <Image src={CoImage} alt="Domain name" />
              <strong className={"ml-3"}>$4.5</strong>
            </li>
            <li>
              <Image src={NetImage} alt="Domain name" />
              <strong className={"ml-3"}>$5.8</strong>
            </li>
            <li>
              <Image src={InfoImage} alt="Domain name" />
              <strong className={"ml-3"}>$7.9</strong>
            </li>
            <li>
              <Image src={StoreImage} alt="Domain name" />
              <strong className={"ml-3"}>$1.00</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchDomain;
