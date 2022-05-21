import React from "react";

const SearchDomain = () => {
  return (
    <div className="xs-domain-search domainSearch-2 xs-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Search domain</h2>
              <h3 className="heading-title">
                WHOIS <span>LOOKUP</span>
              </h3>
            </div>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="domain-search-form wow fadeIn"
        >
          <input type="search" placeholder="Enter Address" id="domain-search" />
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
      </div>
    </div>
  );
};

export default SearchDomain;
