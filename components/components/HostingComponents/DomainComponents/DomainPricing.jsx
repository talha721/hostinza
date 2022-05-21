import React from "react";

const DomainPricing = () => {
  return (
    <section className="domain-price-section xs-section-padding xs-bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Pricin Plans</h2>
              <h3 className="heading-title">
                DOMAIN <span>PRICES</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="table-responsive-md wow fadeIn">
          <table className="table xs-table">
            <thead className="domain-pricing-header">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Register</th>
                <th scope="col">Transfer</th>
                <th scope="col">Renew</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img
                    src="assets/images/domain/com.png"
                    alt="domain name com icon"
                  />
                </th>
                <td>
                  $19.95 <del>$29.95</del>
                </td>
                <td>$19.95</td>
                <td>$19.95</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src="assets/images/domain/me.png"
                    alt="domain name me icon"
                  />
                </th>
                <td>$16.95</td>
                <td>$16.95</td>
                <td>$16.95</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src="assets/images/domain/biz.png"
                    alt="domain name biz icon"
                  />
                </th>
                <td>$09.95</td>
                <td>$09.95</td>
                <td>$09.95</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src="assets/images/domain/co.png"
                    alt="domain name co icon"
                  />
                </th>
                <td>$15.95</td>
                <td>$15.95</td>
                <td>$15.95</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src="assets/images/domain/net.png"
                    alt="domain name net icon"
                  />
                </th>
                <td>$19.95</td>
                <td>$19.95</td>
                <td>$19.95</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src="assets/images/domain/info.png"
                    alt="domain name info icon"
                  />
                </th>
                <td>
                  $14.95 <del>$29.95</del>
                </td>
                <td>$14.95</td>
                <td>$14.95</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src="assets/images/domain/store.png"
                    alt="domain name store icon"
                  />
                </th>
                <td>$16.95</td>
                <td>$16.95</td>
                <td>$16.95</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src="assets/images/domain/mobi.png"
                    alt="domain name mobi icon"
                  />
                </th>
                <td>$18.95</td>
                <td>$18.95</td>
                <td>$18.95</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DomainPricing;
