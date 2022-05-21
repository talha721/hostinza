import React from "react";
import AffiliateBanner from "../components/components/AffiliateComponents/AffiliateBanner";
import IntroVideo from "../components/components/AffiliateComponents/IntroVideo";
import AffiliateWorks from "../components/components/AffiliateComponents/AffiliateWorks";
import AffiliatePricing from "../components/components/AffiliateComponents/AffiliatePricing";
import AffiliatePackages from "../components/components/AffiliateComponents/AffiliatePackages";

const Affiliate = () => {
  return (
    <>
      <AffiliateBanner />
      <IntroVideo />
      <AffiliateWorks />
      <AffiliatePricing />
      <AffiliatePackages />
    </>
  );
};

export default Affiliate;
